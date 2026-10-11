import { profile } from "../data/profile";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "./icons";

const icons = { github: GithubIcon, linkedin: LinkedinIcon, instagram: InstagramIcon } as const;

export function Connect() {
  return (
    <section className="panel text-center" aria-labelledby="connect-title">
      <h2 id="connect-title" className="panel-title">Let's connect</h2>
      <ul className="m-0 flex list-none flex-wrap justify-center gap-3 p-0">
        {profile.socials.map((s) => {
          const Icon = icons[s.id as keyof typeof icons];
          return (
            <li key={s.id}>
              <a className="btn" href={s.url} target="_blank" rel="noreferrer">
                <Icon className="h-4 w-4" />
                {s.label}
                {!s.confirmed && <span className="chip">placeholder</span>}
              </a>
            </li>
          );
        })}
      </ul>
      <p className="mb-0 mt-6 font-display text-xl font-semibold tracking-wide">OPEN TO IDEAS. READY TO BUILD.</p>
      <p className="m-0 mt-1 text-sm text-ink-2">Have an interesting idea? Let's make it real.</p>
    </section>
  );
}
