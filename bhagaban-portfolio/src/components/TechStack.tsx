import { techGroups } from "../data/profile";
import { RemoteImage } from "./RemoteImage";

export function TechStack() {
  return (
    <section className="panel" aria-labelledby="tech-title">
      <h2 id="tech-title" className="panel-title">Tech stack</h2>
      <div className="grid gap-5">
        {techGroups.map((group) => (
          <div key={group.title}>
            <p className="mono-label m-0 mb-2">{group.title}</p>
            <ul className="m-0 grid list-none grid-cols-[repeat(auto-fill,minmax(76px,1fr))] gap-2 p-0">
              {group.items.map((t) => (
                <li
                  key={t.name}
                  className="flex flex-col items-center gap-1.5 rounded-xl border border-line bg-bg/40 px-1 py-3 transition-colors hover:border-cyan/70"
                >
                  <RemoteImage src={t.icon} alt={`${t.name} logo`} width={40} height={40} className="h-10 w-10" fallbackLabel="" />
                  <span className="text-center text-xs text-ink-2">{t.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
