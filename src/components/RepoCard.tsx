import { memo } from "react";
import { StarIcon } from "../assets";

export type Repository = { id: string; stargazers_count: number; name: string };
interface RepoCardProps {
  repo: Repository;
}

export default memo(function RepoCard({ repo }: Readonly<RepoCardProps>) {
  return (
    <div className="p-4 flex flex-col gap-12 w-full rounded-lg bg-grey-100 md:min-w-[18.75rem] md:max-h-40 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer">
      <span className="flex items-center gap-1 justify-end">
        <img
          src={StarIcon}
          width={16}
          height={16}
          className="w-4 h-4 rounded-full"
          alt={"github - search star"}
          loading="lazy"
          decoding="async"
        />
        <p className="text-grey-800 text-sm font-semibold">
          {repo.stargazers_count < 10 && repo.stargazers_count !== 0
            ? `0${repo.stargazers_count}`
            : repo.stargazers_count}
        </p>
      </span>
      <span className="flex flex-col gap-[0.38rem]">
        <strong className="text-grey-800 text-base leading-4 font-bold">
          {repo.name}
        </strong>
        <strong className="text-grey-600 text-sm font-normal">
          {repo.name}
        </strong>
      </span>
    </div>
  );
});
