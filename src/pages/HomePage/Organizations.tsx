import { EmptyData, Loader } from "../../components";
import OrgCard, { Organization } from "../../components/OrgCard";
import { useGetUsername } from "../../hooks";
import useFetchOrgs from "../../hooks/useFetchUser";

export default function OrganizationsPage() {
  const username = useGetUsername();
  const { isLoading, data } = useFetchOrgs(username);

  if (isLoading) {
    return <Loader className="mt-64" />;
  }
  const organizations = data as Organization[];

  return organizations.length > 0 ? (
    organizations.map((organization) => (
      <OrgCard key={organization.id} org={organization} />
    ))
  ) : (
    <EmptyData className="col-span-full w-full" />
  );
}
