import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

const FETCH_REPOS_QUERY_KEY = "FETCH_REPOS_QUERY_KEY";

export default function useFetchRepos() {
  const [searchParams] = useSearchParams();

  const queryData = useQuery({
    queryKey: [FETCH_REPOS_QUERY_KEY],
    queryFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_GITHUB_API}/users/${searchParams.get(
          "username"
        )}/repos`
      );
      return response.json();
    },
  });

  return queryData;
}
