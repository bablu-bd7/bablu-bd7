import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { profile } from "../data/profile";
import { BuilderPass } from "./BuilderPass";
import { ProfileHeader } from "./ProfileHeader";

export function Hero() {
  const reduced = useReducedMotion();
  const [bannerFailed, setBannerFailed] = useState(false);

  return (
    <header>
      <div className="relative h-44 w-full overflow-hidden border-b border-line sm:h-64 lg:h-80">
        {bannerFailed ? (
          <div className="h-full w-full bg-[radial-gradient(60rem_20rem_at_50%_0%,rgba(22,139,255,0.35),transparent),linear-gradient(180deg,#081321,#050a12)]" />
        ) : (
          <img
            src={profile.banner}
            alt="Cyberpunk city skyline banner in deep blue neon"
            className="h-full w-full object-cover object-center"
            onError={() => setBannerFailed(true)}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg" aria-hidden="true" />
      </div>

      <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 pb-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)] lg:gap-8 lg:px-8">
        <motion.div
          className="-mt-14 sm:-mt-16 lg:-mt-20"
          initial={reduced ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <ProfileHeader />
        </motion.div>
        <div className="lg:-mt-24 lg:pt-0">
          <BuilderPass />
        </div>
      </div>
    </header>
  );
}
