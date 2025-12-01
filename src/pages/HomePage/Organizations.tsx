import { useSearchParams } from "react-router-dom";
import { EmptyData, Loader } from "../../components";
import OrgCard, { Organization } from "../../components/OrgCard";
import useFetchOrgs from "../../hooks/useFetchUser";

export default function OrganizationsPage() {
  const [searchParams] = useSearchParams();
  const username = searchParams.get("username") as string;

  const { isLoading, data } = useFetchOrgs(username);

  if (isLoading) {
    return <Loader className="mt-64" />;
  }

  return (data as Organization[])?.length > 0 ? (
    (data as Organization[])?.map((org) => <OrgCard key={org.id} org={org} />)
  ) : (
    <EmptyData className="col-span-full w-full" />
  );
}
