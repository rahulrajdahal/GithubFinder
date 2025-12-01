import * as Tabs from "@radix-ui/react-tabs";
import { Organizations, Repositories } from "..";
import { HomePageLayout } from "../../components";
import UserData from "./UserData";

const tabs = [
  { id: 1, title: "Repositories", content: <Repositories /> },
  { id: 2, title: "Organizations", content: <Organizations /> },
];

export default function HomePage() {
  return (
    <HomePageLayout>
      <Tabs.Root
        className="flex flex-col items-center w-full"
        defaultValue={tabs[0].title}
      >
        <Tabs.List
          className="flex items-center gap-28 mb-8"
          aria-label="Find your repositories"
        >
          {tabs.map(({ id, title }) => (
            <Tabs.Trigger
              key={id}
              className="text-grey-400 text-lg data-[state=active]:border-b-2 data-[state=active]:border-blue-default leading-[1.125rem] font-bold data-[state=active]:text-blue-default"
              value={title}
            >
              {title}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {tabs.map(({ id, title, content }) => (
          <Tabs.Content
            key={id}
            className="flex w-full outline-none border-none flex-col items-center"
            value={title}
          >
            <div className="flex flex-col md:flex-row max-w-235 w-full gap-5">
              <UserData />
              <div
                className={`grid place-items-center grid-cols-2 gap-5 w-full`}
                // max-h-[calc(100vh-23rem)] thin-scrollbar overflow-y-scroll h-full overflow-x-hidden w-max
              >
                {content}
              </div>
            </div>
            {/* {isLoading || reposLoading || orgsLoading ? (
              <Loader />
            ) : data && data.login !== "null" ? (
              <div className="flex flex-col md:flex-row max-w-[58.75rem] w-full gap-5">
                <UserData />
                <div
                  className={`grid place-items-center grid-cols-2 gap-5 w-full`}
                  // max-h-[calc(100vh-23rem)] thin-scrollbar overflow-y-scroll h-full overflow-x-hidden w-max
                >
                  {content}
                </div>
              </div>
            ) : (
              <EmptyData />
            )} */}
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </HomePageLayout>
  );
}
