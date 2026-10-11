import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { profile, statsUrls } from "../data/profile";
import { RemoteImage } from "./RemoteImage";
import { GithubIcon } from "./icons";

/** Cycles through roles; shows the first role statically when reduced motion is on. */
function TypingRole() {
  const reduced = useReducedMotion();
  const [text, setText] = useState(reduced ? profile.roles[0] : "");

  useEffect(() => {
    if (reduced) {
      setText(profile.roles[0]);
      return;
    }
    let role = 0;
    let i = 0;
    let deleting = false;
    let id: number;
    const tick = () => {
      const word = profile.roles[role];
      i += deleting ? -1 : 1;
      setText(word.slice(0, i));
      let delay = deleting ? 35 : 75;
      if (!deleting && i === word.length) {
        deleting = true;
        delay = 1500;
      } else if (deleting && i === 0) {
        deleting = false;
        role = (role + 1) % profile.roles.length;
        delay = 350;
      }
      id = window.setTimeout(tick, delay);
    };
    id = window.setTimeout(tick, 400);
    return () => window.clearTimeout(id);
  }, [reduced]);

  return (
    <p className="m-0 min-h-[1.5em] font-mono text-sm tracking-[0.14em] text-cyan" aria-label={profile.roles.join(", ")}>
      <span aria-hidden="true">
        {text}
        {!reduced && <span className="caret" />}
      </span>
    </p>
  );
}

export function ProfileHeader() {
  return (
    <div className="flex flex-col items-center gap-5 text-center lg:flex-row lg:items-start lg:text-left">
      <img
        src={profile.avatar}
        alt={`${profile.name}'s GitHub avatar`}
        width={160}
        height={160}
        className="h-32 w-32 shrink-0 rounded-full border-2 border-cyan object-cover shadow-[0_0_28px_rgba(0,229,255,0.25)] sm:h-40 sm:w-40"
      />
      <div className="min-w-0">
        <h1 className="m-0 font-display text-5xl font-bold leading-none tracking-tight sm:text-6xl">
          <span className="bg-gradient-to-r from-ink via-ink to-cyan bg-clip-text text-transparent">{profile.name.toUpperCase()}</span>
        </h1>
        <p className="mt-2 font-mono text-sm tracking-[0.35em] text-ink-2">{profile.motto.replaceAll("/", " / ")}</p>
        <p className="mt-3 text-base text-ink-2">{profile.headline}</p>
        <div className="mt-3">
          <TypingRole />
        </div>
        <p className="mt-4 text-sm leading-relaxed text-ink-2">
          <strong className="font-display text-base font-semibold text-ink">{profile.tagline[0]}</strong>
          <br />
          {profile.tagline[1]}
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
          <a className="btn btn-primary" href={profile.github} target="_blank" rel="noreferrer">
            <GithubIcon className="h-4 w-4" />@{profile.username}
          </a>
          <RemoteImage
            src={statsUrls.followers}
            alt={`GitHub followers for ${profile.username}`}
            fallbackLabel="Followers badge unavailable"
            height={20}
            className="h-5"
          />
        </div>
      </div>
    </div>
  );
}
