import { profile } from "../data/profile";
import { useGithub, type Repo } from "../hooks/useGithub";
import { ProjectCard } from "./ProjectCard";

export function FeaturedProjects() {
  const { data, status } = useGithub<Repo[]>(`/users/${profile.username}/repos?sort=pushed&per_page=30`);
  const repos = (data ?? []).filter((r) => !r.fork && r.name !== profile.username).slice(0, 3);

  return (
    <section className="panel" aria-labelledby="projects-title">
      <h2 id="projects-title" className="panel-title">Featured projects</h2>
      {status === "loading" && <p className="m-0 text-sm text-ink-3">Loading public repositories…</p>}
      {status === "error" && (
        <p className="m-0 text-sm text-ink-2">
          Couldn't reach the GitHub API. Browse the{" "}
          <a className="text-cyan underline" href={`${profile.github}?tab=repositories`} target="_blank" rel="noreferrer">
            repositories on GitHub
          </a>
          .
        </p>
      )}
      {status === "ready" && repos.length === 0 && (
        <p className="m-0 text-sm text-ink-2">No public projects yet. Pinned work will appear here once repositories are published.</p>
      )}
      <div className="grid gap-3">
        {repos.map((r) => (
          <ProjectCard key={r.id} repo={r} />
        ))}
      </div>
    </section>
  );
}
