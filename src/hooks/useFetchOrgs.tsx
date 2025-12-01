import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

const FETCH_ORGS_QUERY_KEY = "FETCH_ORGS_QUERY_KEY";

export default function useFetchOrgs() {
  const [searchParams] = useSearchParams();

  const queryData = useQuery({
    queryKey: [FETCH_ORGS_QUERY_KEY],
    queryFn: async () => {
      const response = await fetch(
        `https://api.github.com/users/${searchParams.get("username")}/orgs`
      );
      return response.json();
    },
  });

  return queryData;
}
