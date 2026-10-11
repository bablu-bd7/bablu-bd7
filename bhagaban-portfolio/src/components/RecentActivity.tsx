import { GitCommitHorizontal } from "lucide-react";
import { profile } from "../data/profile";
import { useGithub, type GhEvent } from "../hooks/useGithub";

const EMPTY = "New activity will appear here as projects evolve.";

function describe(e: GhEvent): string | null {
  const repo = e.repo.name.split("/").pop();
  if (e.type === "PushEvent") {
    const msg = e.payload.commits?.[0]?.message?.split("\n")[0];
    return msg ? `${msg} · ${repo}` : `Pushed to ${repo}`;
  }
  if (e.type === "CreateEvent") return `Created ${e.payload.ref_type ?? "ref"} in ${repo}`;
  if (e.type === "PullRequestEvent") return `Pull request ${e.payload.action ?? "updated"} in ${repo}`;
  return null;
}

export function RecentActivity() {
  const { data, status } = useGithub<GhEvent[]>(`/users/${profile.username}/events/public?per_page=30`);
  const items = (data ?? [])
    .map((e) => ({ e, text: describe(e) }))
    .filter((x): x is { e: GhEvent; text: string } => x.text !== null)
    .slice(0, 4);

  return (
    <section className="panel" aria-labelledby="activity-title">
      <h2 id="activity-title" className="panel-title">Recent activity</h2>
      {items.length === 0 ? (
        <p className="m-0 text-sm text-ink-2">{status === "loading" ? "Loading activity…" : EMPTY}</p>
      ) : (
        <ul className="m-0 grid list-none gap-3 p-0">
          {items.map(({ e, text }) => (
            <li key={e.id} className="flex items-start gap-3 text-sm">
              <GitCommitHorizontal className="mt-0.5 h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
              <div className="min-w-0">
                <p className="m-0 truncate text-ink">{text}</p>
                <time className="text-xs text-ink-3" dateTime={e.created_at}>
                  {new Date(e.created_at).toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" })}
                </time>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
