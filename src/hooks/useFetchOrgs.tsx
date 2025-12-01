import { useQuery } from "@tanstack/react-query";
import { fetchOrganizations } from "../utils/api";

export const FETCH_ORGS_QUERY_KEY = "FETCH_ORGS_QUERY_KEY";

export default function useFetchOrgs(username: string) {
  const queryData = useQuery({
    queryKey: [FETCH_ORGS_QUERY_KEY, username],
    queryFn: async () => fetchOrganizations(username),
  });

  return queryData;
}
