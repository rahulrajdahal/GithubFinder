export const fetchUser = async (username: string) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_GITHUB_API}/users/${username}`
    );

    return await response.json();
  } catch (error) {
    console.error("Error fetching github user", error);
  }
};

export const fetchRepositories = async (username: string) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_GITHUB_API}/users/${username}/repos`
    );

    return await response.json();
  } catch (error) {
    console.error("Error fetching github user repositories", error);
  }
};

export const fetchOrganizations = async (username: string) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_GITHUB_API}/users/${username}/orgs`
    );

    return await response.json();
  } catch (error) {
    console.error("Error fetching github user organizations", error);
  }
};
