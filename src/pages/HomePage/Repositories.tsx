import { EmptyData, Loader, RepoCard } from "../../components";
import { Repository } from "../../components/RepoCard";
import { useFetchRepos, useGetUsername } from "../../hooks";

export default function RepositoriesPage() {
  const username = useGetUsername();
  const { isLoading, data } = useFetchRepos(username);

  if (isLoading) {
    return <Loader className="mt-64" />;
  }

  const repositories = data as Repository[];

  return repositories?.length > 0 ? (
    repositories.map((repository) => (
      <RepoCard key={repository.id} repo={repository} />
    ))
  ) : (
    <EmptyData className="mt-0 col-span-full" />
  );
}
