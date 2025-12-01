import { useQuery } from "@tanstack/react-query";
import { fetchRepositories } from "../utils/api";

const FETCH_REPOS_QUERY_KEY = "FETCH_REPOS_QUERY_KEY";

export default function useFetchRepos(username: string) {
  const queryData = useQuery({
    queryKey: [FETCH_REPOS_QUERY_KEY],
    queryFn: async () => fetchRepositories(username),
  });

  return queryData;
}
