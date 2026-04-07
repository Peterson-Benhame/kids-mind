import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import SmoothScrollLink from "./SmoothScrollLink";
import usePrefersReducedMotion from "../../lib/usePrefersReducedMotion";

type SectionAnchorProps = {
  href: string;
  label: string;
};

export default function SectionAnchor({ href, label }: SectionAnchorProps) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className="mt-10 flex justify-center">
      <SmoothScrollLink
        href={href}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="inline-flex items-center gap-3 rounded-full border border-mint bg-white/88 px-5 py-3 text-sm font-extrabold tracking-[0.04em] text-ink transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta"
      >
        <span>{label}</span>
        <motion.span
          className="flex h-8 w-8 items-center justify-center rounded-full bg-mint/55 text-cta"
          animate={reducedMotion ? undefined : { y: [0, 3, 0] }}
          transition={reducedMotion ? undefined : { duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </SmoothScrollLink>
    </div>
  );
}
