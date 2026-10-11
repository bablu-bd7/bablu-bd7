import { Achievements } from "./components/Achievements";
import { Connect } from "./components/Connect";
import { ContributionGraph } from "./components/ContributionGraph";
import { FeaturedProjects } from "./components/FeaturedProjects";
import { GitHubStats } from "./components/GitHubStats";
import { Hero } from "./components/Hero";
import { RecentActivity } from "./components/RecentActivity";
import { TechStack } from "./components/TechStack";

export default function App() {
  return (
    <>
      <Hero />
      <main className="mx-auto grid max-w-7xl gap-5 px-4 pb-16 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
        <TechStack />
        <div className="grid content-start gap-5 lg:col-span-1">
          <GitHubStats />
        </div>
        <FeaturedProjects />
        <div className="md:col-span-2 lg:col-span-3">
          <ContributionGraph />
        </div>
        <RecentActivity />
        <Achievements />
        <div className="md:col-span-2 lg:col-span-3">
          <Connect />
        </div>
      </main>
    </>
  );
}
