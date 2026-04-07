import { ArrowRight } from "lucide-react";
import SmoothScrollLink from "./SmoothScrollLink";

type PrimaryButtonProps = {
  href: string;
  label: string;
  variant?: "solid" | "ghost";
};

export default function PrimaryButton({
  href,
  label,
  variant = "solid",
}: PrimaryButtonProps) {
  const classes =
    variant === "solid"
      ? "bg-cta text-white shadow-glow hover:bg-cta-dark"
      : "border border-mint bg-white/80 text-ink hover:bg-mist";

  return (
    <SmoothScrollLink
      href={href}
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-extrabold tracking-[0.02em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta ${classes}`}
    >
      <span>{label}</span>
      <ArrowRight className="h-4 w-4" />
    </SmoothScrollLink>
  );
}
