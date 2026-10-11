import { ExternalLink, FolderGit2, Star } from "lucide-react";
import type { Repo } from "../hooks/useGithub";
import { GithubIcon } from "./icons";

export function ProjectCard({ repo }: { repo: Repo }) {
  const tags = [repo.language, ...(repo.topics ?? []).slice(0, 3)].filter(Boolean) as string[];
  return (
    <article className="rounded-xl border border-line bg-bg/40 p-4 transition-colors hover:border-cyan/60">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-surface text-cyan">
          <FolderGit2 className="h-5 w-5" aria-hidden="true" />
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="m-0 truncate font-display text-base font-semibold">{repo.name}</h3>
          <p className="m-0 mt-1 text-sm text-ink-2">{repo.description ?? "No description yet."}</p>
          {tags.length > 0 && (
            <ul className="m-0 mt-2 flex list-none flex-wrap gap-1.5 p-0">
              {tags.map((t) => (
                <li key={t} className="chip">{t}</li>
              ))}
            </ul>
          )}
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
            <a className="inline-flex items-center gap-1.5 text-cyan hover:underline" href={repo.html_url} target="_blank" rel="noreferrer">
              <GithubIcon className="h-4 w-4" /> Repository
            </a>
            {repo.homepage && (
              <a className="inline-flex items-center gap-1.5 text-cyan hover:underline" href={repo.homepage} target="_blank" rel="noreferrer">
                <ExternalLink className="h-4 w-4" aria-hidden="true" /> Live demo
              </a>
            )}
            {repo.stargazers_count > 0 && (
              <span className="inline-flex items-center gap-1 text-ink-3">
                <Star className="h-4 w-4" aria-hidden="true" /> {repo.stargazers_count}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
