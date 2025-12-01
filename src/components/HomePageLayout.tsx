import { ChangeEvent, PropsWithChildren, useCallback, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { GithubIcon } from "../assets";
import Button from "./Button";
import SearchInput from "./SearchInput";

interface HomePageLayoutProps extends PropsWithChildren {}
export default function HomePageLayout({
  children,
}: Readonly<HomePageLayoutProps>) {
  const [searchParams, setSearchParams] = useSearchParams();

  const [username, setUsername] = useState(searchParams.get("username") ?? "");

  const handleSearchOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setUsername(e.target.value);
    },
    []
  );

  const handleSearch = useCallback(() => {
    setSearchParams({ username });
  }, [username, setSearchParams]);

  const handleOnKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        handleSearch();
      }
    },
    [handleSearch]
  );

  return (
    <div className="flex items-center flex-col justify-center">
      <a href="/" className="flex items-center gap-3 mt-16 mb-11">
        <img
          src={GithubIcon}
          alt="github search"
          width={48}
          className="w-12 h-12 text-grey-900"
          height={48}
        />
        <strong className="text-grey-900 text-[2.5rem] font-bold leading-10">
          Github Finder
        </strong>
      </a>

      <div className="flex items-center gap-4 w-full justify-center">
        <SearchInput
          inputProps={{
            value: username,
            onChange: handleSearchOnChange,
            onKeyDown: handleOnKeyDown,
          }}
        />

        <Button onClick={handleSearch}>Search</Button>
      </div>

      <hr className="text-grey-300 w-full max-w-360 mt-10 mb-8" />
      {children}
    </div>
  );
}
