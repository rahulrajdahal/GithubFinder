import { memo } from "react";
import Loader from "./Loader";

type User = {
  name: string;
  avatar_url: string;
  location: string;
  public_repos: number;
};

interface UserCardProps {
  data: User;
  orgsCount?: number;
  isLoading?: boolean;
}
export default memo(function UserCard({
  data,
  orgsCount = 0,
  isLoading = false,
}: Readonly<UserCardProps>) {
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="md:sticky top-4 flex border h-[21.25rem] w-full max-w-[18.75rem] border-gray-300 bg-white rounded-lg flex-col gap-6 items-center justify-center px-8 py-10 transition-all duration-500 hover:shadow-lg">
      <img
        src={data.avatar_url}
        width={200}
        height={200}
        className="w-20 h-20 rounded-full"
        alt={data.name}
        loading="lazy"
        decoding="async"
      />
      <span className="flex flex-col -mt-1 gap-2 items-center">
        <strong className="text-grey-800 text-2xl leading-6 font-bold">
          {data.name}
        </strong>
        <p className="text-lg leading-[1.125rem] text-grey-600 font-medium">
          {data.location}
        </p>
      </span>

      <hr className="text-grey-300 w-full" />

      <div className="flex items-center gap-[2.38rem]">
        <span className="flex flex-col gap-1">
          <strong className="text-2xl leading-6 font-extrabold text-grey-800">
            {data.public_repos < 10 && data.public_repos !== 0
              ? `0${data.public_repos}`
              : data.public_repos}
          </strong>
          <p className="text-base font-semibold leading-4 text-grey-600">
            repositories
          </p>
        </span>

        <span className="flex flex-col gap-1">
          <strong className="text-2xl leading-6 font-extrabold text-grey-800">
            {orgsCount < 10 && orgsCount !== 0 ? `0${orgsCount}` : orgsCount}
          </strong>
          <p className="text-base font-semibold leading-4 text-grey-600">
            organizations
          </p>
        </span>
      </div>
    </div>
  );
});
