const BASE_URL = import.meta.env.VITE_GITHUB_API;
const CONFIG = {
  timeout: 10000,
  retries: 3,
  delay: 1000,
  header: { Accept: "application/vnd.github.v3+json" } as const,
};

const getEndpoint = (username: string, path = "") =>
  `/users/${encodeURIComponent(username)}${path}`;

export const validateUsername = (username: string): void => {
  if (!username?.trim() || !/^[a-zA-Z0-9-]+$/.test(username))
    throw new Error("Invalid username");
};

const createTimeoutAbortController = (timeout: number) => {
  const controller = new AbortController();
  return {
    controller,
    timeoutId: setTimeout(() => controller.abort(), timeout),
  } as const;
};

const handleHTTPError = (response: Response): never => {
  if (response.status === 404) throw new Error("User not found (404)");
  if (response.status === 403)
    throw new Error(
      response.headers.get("x-ratelimit-remaining") === "0"
        ? "Rate limit exceeded"
        : "Forbidden (403)"
    );
  if (response.status === 422) throw new Error("Invalid parameters (422)");
  throw new Error(`HTTP ${response.status}`);
};

const handleFetchError = async (
  error: unknown,
  retries: number,
  url: string
): Promise<Response> => {
  const isAbort = error instanceof Error && error.name === "AbortError";
  if (!isAbort && !(retries > 0 && error instanceof TypeError)) throw error;
  if (retries === 0) throw isAbort ? new Error("Timeout") : error;
  await new Promise((resolve) => setTimeout(resolve, CONFIG.delay));
  return fetchWithRetry(url, retries - 1);
};

const fetchWithRetry = async (
  url: string,
  retries = CONFIG.retries
): Promise<Response> => {
  const { controller, timeoutId } = createTimeoutAbortController(
    CONFIG.timeout
  );
  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: CONFIG.header,
    });
    clearTimeout(timeoutId);
    if (!response.ok) handleHTTPError(response);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    return handleFetchError(error, retries, url);
  }
};

const parseJSONResponse = async (response: Response): Promise<unknown> => {
  if (!response.headers.get("content-type")?.includes("application/json"))
    throw new Error("Invalid type");
  try {
    const data = await response.json();
    if (data === null) throw new Error("Null response");
    return data;
  } catch (error) {
    if (error instanceof SyntaxError) throw new Error("Parse failed");
    throw error;
  }
};

const assertObject = (
  data: unknown
): asserts data is Record<string, unknown> => {
  if (typeof data !== "object" || data === null)
    throw new Error("Invalid data");
};
const assertArray = (data: unknown): asserts data is unknown[] => {
  if (!Array.isArray(data)) throw new Error("Invalid array");
};

const fetchGitHubData = async <T>(
  endpoint: string,
  username: string,
  validator: (data: unknown) => asserts data is T,
  fallback: T | null | [] = null
): Promise<T | null | []> => {
  try {
    validateUsername(username);
    if (!BASE_URL) throw new Error("Base URL not configured");
    const response = await fetchWithRetry(`${BASE_URL}${endpoint}`);
    const data = await parseJSONResponse(response);
    validator(data);
    return data;
  } catch (error) {
    console.error(
      `Fetch error for '${username}':`,
      error instanceof Error ? error.message : error
    );
    return fallback;
  }
};

export const fetchUser = (username: string) =>
  fetchGitHubData(getEndpoint(username), username, assertObject, null);
export const fetchRepositories = (username: string) =>
  fetchGitHubData(getEndpoint(username, "/repos"), username, assertArray, []);
export const fetchOrganizations = (username: string) =>
  fetchGitHubData(getEndpoint(username, "/orgs"), username, assertArray, []);
