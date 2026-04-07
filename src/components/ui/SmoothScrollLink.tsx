import type { MouseEvent } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { scrollToHash } from "../../lib/scroll";
import usePrefersReducedMotion from "../../lib/usePrefersReducedMotion";

type SmoothScrollLinkProps = Omit<HTMLMotionProps<"a">, "href"> & {
  href: string;
};

export default function SmoothScrollLink({
  href,
  onClick,
  children,
  ...props
}: SmoothScrollLinkProps) {
  const reducedMotion = usePrefersReducedMotion();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented || !href.startsWith("#")) {
      return;
    }

    if (scrollToHash(href, Boolean(reducedMotion))) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  return (
    <motion.a href={href} onClick={handleClick} {...props}>
      {children}
    </motion.a>
  );
}
