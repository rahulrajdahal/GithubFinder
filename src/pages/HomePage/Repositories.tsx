import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { EmptyData, Loader, RepoCard } from "../../components";
import { Repository } from "../../components/RepoCard";

export default function RepositoriesPage() {
  const [searchParams] = useSearchParams();

  const { isLoading, data } = useQuery({
    queryKey: ["repos"],
    queryFn: async () => {
      const response = await fetch(
        `https://api.github.com/users/${searchParams.get("username")}/repos`
      );
      return response.json();
    },
    // enabled: !!searchParams.get("username"),
  });

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
