import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../utils/api";

const FETCH_USER_QUERY_KEY = "FETCH_USER_QUERY_KEY";

export default function useFetchOrgs(username: string) {
  const queryData = useQuery({
    queryKey: [FETCH_USER_QUERY_KEY],
    queryFn: async () => await fetchUser(username),
  });

  return queryData;
}
