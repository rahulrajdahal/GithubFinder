import { useEffect } from "react";
import { UserCard } from "../../components";
import { useFetchUser, useGetUsername } from "../../hooks";

export default function UserData() {
  const username = useGetUsername();
  const { isLoading, data, refetch } = useFetchUser(username);

  useEffect(() => {
    if (username) {
      refetch();
    }
  }, [username]);

  return <UserCard data={data} isLoading={isLoading} />;
}
