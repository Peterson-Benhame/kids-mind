import { motion } from "framer-motion";
import usePrefersReducedMotion from "../../lib/usePrefersReducedMotion";

type HeroVisualProps = {
  highlights: readonly string[];
  stats: readonly { value: string; label: string }[];
};

export default function HeroVisual({ highlights, stats }: HeroVisualProps) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      className="section-shell bg-hero-wash p-6 text-ink sm:p-8"
      animate={reducedMotion ? undefined : { y: [0, -8, 0] }}
      transition={reducedMotion ? undefined : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="absolute -right-10 top-0 h-40 w-40 rounded-full bg-peach/50 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-12 left-0 h-40 w-40 rounded-full bg-mint/80 blur-3xl" aria-hidden="true" />

      <div className="relative">
        <div className="inline-flex rounded-full border border-mint bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-cta">
          0 a 12 meses
        </div>

        <div className="mt-6 rounded-[1.75rem] border border-white bg-white/88 p-6 backdrop-blur">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-ink/55">cada estimulo constroi desenvolvimento</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item} className="rounded-3xl border border-mint bg-mist px-4 py-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-cta">Kids Mind</p>
                <p className="mt-2 font-display text-2xl text-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="rounded-3xl border border-white bg-white/88 px-4 py-5 backdrop-blur"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <p className="font-display text-3xl text-ink">{stat.value}</p>
              <p className="mt-2 text-sm leading-6 text-ink/68">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
