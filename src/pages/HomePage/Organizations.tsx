import { useQuery } from "@tanstack/react-query";
import { EmptyData, Loader } from "../../components";
import OrgCard, { Organization } from "../../components/OrgCard";

export default function OrganizationsPage() {
  const { isLoading, data } = useQuery({ queryKey: ["orgs"] });

  if (isLoading) {
    return <Loader className="mt-64" />;
  }

  return (data as Organization[])?.length > 0 ? (
    (data as Organization[])?.map((org) => <OrgCard key={org.id} org={org} />)
  ) : (
    <EmptyData className="col-span-full w-full" />
  );
}
