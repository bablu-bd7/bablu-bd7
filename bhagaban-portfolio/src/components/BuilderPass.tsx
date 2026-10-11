import { useEffect, useState, type PointerEvent } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { profile } from "../data/profile";
import { GithubIcon } from "./icons";

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="mono-label">{label}</dt>
      <dd className="m-0 text-[0.92rem] leading-snug text-ink">{value}</dd>
    </div>
  );
}

/** Pointer tilt is only enabled for fine pointers (mouse/trackpad). */
function useFinePointer() {
  const [fine, setFine] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setFine(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return fine;
}

export function BuilderPass() {
  const { pass, name, avatar, github, username } = profile;
  const reduced = useReducedMotion();
  const fine = useFinePointer();
  const tiltEnabled = fine && !reduced;

  // Layer 2: pointer tilt, composed *inside* the CSS float wrapper so neither overrides the other.
  const rx = useSpring(useMotionValue(0), { stiffness: 120, damping: 18, mass: 0.6 });
  const ry = useSpring(useMotionValue(0), { stiffness: 120, damping: 18, mass: 0.6 });

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!tiltEnabled) return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * 6); // max ±3deg
    rx.set(py * -6);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <aside aria-label="Builder Pass digital developer identity" className="pass-stage mx-auto w-full max-w-[460px]">
      {/* Layer 1: infinite CSS float + tilt (no JS timers, no React state) */}
      <div className="pass-float">
        {/* Layer 2: optional pointer tilt */}
        <motion.div
          style={tiltEnabled ? { rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" } : undefined}
          onPointerMove={onMove}
          onPointerLeave={onLeave}
        >
          {/* Layer 3: visual card */}
          <div className="pass-card">
            <div className="pass-body p-5 sm:p-6">
              <svg className="pass-grid" viewBox="0 0 100 100" fill="none" stroke="#00E5FF" strokeWidth="0.6" aria-hidden="true">
                <path d="M10 10h50l30 30v50H40L10 60z" />
                <path d="M25 25h30l20 20v30H45L25 55z" />
                <circle cx="50" cy="50" r="8" />
                <path d="M50 10v32M90 50H58M50 90V58M10 50h32" />
              </svg>

              <header className="relative flex items-start justify-between gap-3">
                <div>
                  <p className="m-0 font-display text-xl font-bold tracking-[0.12em] text-ink sm:text-2xl">{pass.label}</p>
                  <p className="m-0 mt-1 font-mono text-[0.68rem] tracking-[0.18em] text-cyan">{pass.subtitle}</p>
                </div>
                <span className="chip shrink-0">#{pass.id}</span>
              </header>

              <div className="relative mt-5 flex gap-4">
                <img
                  src={avatar}
                  alt={`${name}'s GitHub avatar`}
                  width={104}
                  height={104}
                  className="h-[104px] w-[104px] shrink-0 rounded-xl border border-cyan/60 object-cover shadow-[0_0_18px_rgba(0,229,255,0.2)]"
                />
                <dl className="m-0 grid min-w-0 gap-2.5">
                  <Field label="Name" value={name.toUpperCase()} />
                  <Field label="Role" value={pass.role} />
                </dl>
              </div>

              <dl className="relative m-0 mt-4 grid gap-2.5 border-t border-line pt-4">
                <Field label="Education" value={pass.education} />
                <Field label="Focus" value={pass.focus} />
                <Field label="Status" value={pass.status} />
              </dl>

              <a href={github} className="btn mt-5 w-full justify-center" target="_blank" rel="noreferrer">
                <GithubIcon className="h-4 w-4" />
                <span>
                  Open github.com/{username}
                </span>
              </a>

              <footer className="relative mt-4 flex items-center gap-3">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan/50 to-cyan/20" aria-hidden="true" />
                <span className="font-mono text-[0.62rem] tracking-[0.2em] text-cyan">{pass.footer}</span>
              </footer>
            </div>
          </div>
        </motion.div>
      </div>
    </aside>
  );
}
