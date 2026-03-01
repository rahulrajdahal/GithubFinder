import * as Tabs from "@radix-ui/react-tabs";
import { lazy, Suspense } from "react";
import { HomePageLayout } from "../../components";

const Repositories = lazy(() => import("./Repositories"));
const Organizations = lazy(() => import("./Organizations"));
const UserData = lazy(() => import("./UserData"));

const tabs = [
  { id: 1, title: "Repositories", Content: Repositories },
  { id: 2, title: "Organizations", Content: Organizations },
] as const;

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
              className="text-grey-600 text-lg data-[state=active]:border-b-2 data-[state=active]:border-blue-default leading-4.5 font-bold data-[state=active]:text-blue-default transition-colors duration-300"
              value={title}
            >
              {title}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {tabs.map(({ id, title, Content }) => (
          <Tabs.Content
            key={id}
            className="flex w-full outline-none border-none flex-col items-center"
            value={title}
          >
            <Suspense fallback={<div>Loading data...</div>}>
              <div className="flex flex-col md:flex-row max-w-235 w-full gap-5">
                <UserData />
                <div
                  className={`grid place-items-center grid-cols-2 gap-5 w-full`}
                >
                  <Content />
                </div>
              </div>
            </Suspense>
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </HomePageLayout>
  );
}
