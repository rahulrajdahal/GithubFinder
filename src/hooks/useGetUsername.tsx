import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

export default function useGetUsername() {
  const [searchParams] = useSearchParams();

  const username = useMemo(() => {
    if (searchParams.get("username")) {
      return searchParams.get("username");
    }
    return "";
  }, [searchParams]) as string;

  return username;
}
