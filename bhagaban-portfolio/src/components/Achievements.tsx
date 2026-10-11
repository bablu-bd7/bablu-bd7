import { Compass } from "lucide-react";

// No confirmed achievements yet, so this section lists goals instead of invented trophies.
const goals = ["Publish the first full-stack project", "Explore AI features in a real app", "Contribute to open source"];

export function Achievements() {
  return (
    <section className="panel" aria-labelledby="goals-title">
      <h2 id="goals-title" className="panel-title">Development goals</h2>
      <ul className="m-0 grid list-none gap-2.5 p-0 text-sm text-ink-2">
        {goals.map((g) => (
          <li key={g} className="flex items-center gap-2.5">
            <Compass className="h-4 w-4 shrink-0 text-violet" aria-hidden="true" />
            {g}
          </li>
        ))}
      </ul>
      <p className="mb-0 mt-3 text-xs text-ink-3">Verified achievements will replace this list as they are earned.</p>
    </section>
  );
}
