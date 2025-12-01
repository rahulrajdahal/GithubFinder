import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../utils/api";

export const FETCH_USER_QUERY_KEY = "FETCH_USER_QUERY_KEY";

export default function useFetchUser(username: string) {
  const queryData = useQuery({
    queryKey: [FETCH_USER_QUERY_KEY, username],
    queryFn: async () => await fetchUser(username),
  });

  return queryData;
}
