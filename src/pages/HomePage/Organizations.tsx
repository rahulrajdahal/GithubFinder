import { useEffect } from "react";
import { EmptyData, Loader } from "../../components";
import OrgCard, { Organization } from "../../components/OrgCard";
import { useGetUsername } from "../../hooks";
import useFetchOrgs from "../../hooks/useFetchUser";

export default function OrganizationsPage() {
  const username = useGetUsername();

  const { isLoading, data, refetch } = useFetchOrgs(username);

  useEffect(() => {
    if (username) {
      refetch();
    }
  }, [username]);

  if (isLoading) {
    return <Loader className="mt-64" />;
  }

  return (data as Organization[])?.length > 0 ? (
    (data as Organization[])?.map((org) => <OrgCard key={org.id} org={org} />)
  ) : (
    <EmptyData className="col-span-full w-full" />
  );
}
