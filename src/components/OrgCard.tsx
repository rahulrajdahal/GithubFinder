import { memo } from "react";
export type Organization = {
  id: string;
  login: string;
  description: string;
  avatar_url: string;
};
interface OrgCardProps {
  org: Organization;
}

export default memo(function OrgCard({ org }: Readonly<OrgCardProps>) {
  return (
    <div className="p-4 flex items-end gap-12 w-full rounded-lg bg-grey-100 max-w-[18.75rem] max-h-40 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer">
      <img
        src={org.avatar_url}
        width={200}
        height={200}
        className="w-16 h-16 rounded-full"
        alt={org.login}
        loading="lazy"
        decoding="async"
      />

      <span className="flex flex-col gap-[0.38rem]">
        <strong className="text-grey-800 text-base leading-4 font-bold">
          {org.login}
        </strong>
        <strong className="text-grey-600 text-sm font-normal">
          {org.description}
        </strong>
      </span>
    </div>
  );
});
