import { profile, statsUrls } from "../data/profile";
import { RemoteImage } from "./RemoteImage";

export function ContributionGraph() {
  return (
    <section className="panel" aria-labelledby="contrib-title">
      <h2 id="contrib-title" className="panel-title">Contribution activity</h2>
      <div className="overflow-x-auto rounded-lg bg-[#0B1728] p-2">
        <RemoteImage
          src={statsUrls.heatmap}
          alt={`Contribution heatmap for ${profile.username}`}
          className="min-w-[640px] w-full"
          fallbackLabel="Contribution heatmap unavailable. View it on GitHub."
        />
      </div>
      <div className="mt-3 overflow-x-auto">
        <RemoteImage
          src={statsUrls.activity}
          alt={`Contribution graph for ${profile.username}`}
          className="min-w-[640px] w-full rounded-lg"
          fallbackLabel="Activity graph unavailable."
        />
      </div>
      <p className="mb-0 mt-3 text-xs text-ink-3">
        Rendered by ghchart.rshah.org and github-readme-activity-graph from your public GitHub data.
      </p>
    </section>
  );
}
