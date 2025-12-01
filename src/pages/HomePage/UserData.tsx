import { UserCard } from "../../components";
import { useFetchUser, useGetUsername } from "../../hooks";

export default function UserData() {
  const username = useGetUsername();
  const { isLoading, data } = useFetchUser(username);

  return data ? <UserCard data={data} isLoading={isLoading} /> : null;
}
