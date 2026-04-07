import { Heart } from "lucide-react";
import Container from "./Container";
import { siteContent } from "../../lib/content";
import PrimaryButton from "../ui/PrimaryButton";
import SmoothScrollLink from "../ui/SmoothScrollLink";

export default function SiteHeader() {
  return (
    <header id="topo" className="pt-5">
      <Container>
        <div className="panel-surface flex items-center justify-between gap-4 px-4 py-3 sm:px-5">
          <SmoothScrollLink href="#hero" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cta text-white shadow-glow">
              <Heart className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-lg text-ink">{siteContent.brand}</p>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ink/60">primeiros estimulos</p>
            </div>
          </SmoothScrollLink>

          <nav className="hidden items-center gap-6 lg:flex">
            {siteContent.nav.map((item) => (
              <SmoothScrollLink
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-ink/68 transition hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta"
              >
                {item.label}
              </SmoothScrollLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <PrimaryButton href="#oferta" label="Quero meu kit" />
          </div>

          <div className="lg:hidden">
            <PrimaryButton href="#oferta" label="Quero meu kit" />
          </div>
        </div>
      </Container>
    </header>
  );
}
