import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

type InfoCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent?: string;
};

export default function InfoCard({
  title,
  description,
  icon: Icon,
  accent = "bg-mint text-ink",
}: InfoCardProps) {
  return (
    <motion.article
      className="panel-surface h-full p-6"
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${accent}`}>
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-5 font-display text-2xl text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-ink/72">{description}</p>
    </motion.article>
  );
}
