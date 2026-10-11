import { statsUrls, profile } from "../data/profile";
import { RemoteImage } from "./RemoteImage";

export function GitHubStats() {
  return (
    <section className="panel" aria-labelledby="stats-title">
      <h2 id="stats-title" className="panel-title">GitHub stats</h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        <RemoteImage src={statsUrls.stats} alt={`GitHub stats for ${profile.username}`} className="w-full rounded-lg" />
        <RemoteImage src={statsUrls.streak} alt={`GitHub streak for ${profile.username}`} className="w-full rounded-lg" />
      </div>
      <RemoteImage src={statsUrls.langs} alt={`Most used languages for ${profile.username}`} className="mt-3 w-full rounded-lg sm:max-w-sm" />
      <p className="mb-0 mt-3 text-xs text-ink-3">
        Live data from third-party widgets. If one is down it simply shows a placeholder.
      </p>
    </section>
  );
}
