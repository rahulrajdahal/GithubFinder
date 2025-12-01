import { useEffect } from "react";
import { EmptyData, Loader, RepoCard } from "../../components";
import { Repository } from "../../components/RepoCard";
import { useFetchRepos, useGetUsername } from "../../hooks";

export default function RepositoriesPage() {
  const username = useGetUsername();
  const { isLoading, data, refetch } = useFetchRepos(username);

  useEffect(() => {
    if (username) {
      refetch();
    }
  }, [username]);

  if (isLoading) {
    return <Loader className="mt-64" />;
  }

  return (data as Repository[])?.length > 0 ? (
    (data as Repository[])?.map((repo) => (
      <RepoCard key={repo.id} repo={repo} />
    ))
  ) : (
    <EmptyData className="mt-0 col-span-full" />
  );
}
