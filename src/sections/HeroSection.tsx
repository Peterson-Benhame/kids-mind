import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Container from "../components/layout/Container";
import SiteHeader from "../components/layout/SiteHeader";
import HeroVisual from "../components/features/HeroVisual";
import PrimaryButton from "../components/ui/PrimaryButton";
import Reveal from "../components/ui/Reveal";
import SectionAnchor from "../components/ui/SectionAnchor";
import { buildStagger } from "../lib/animations";
import { siteContent } from "../lib/content";
import usePrefersReducedMotion from "../lib/usePrefersReducedMotion";

export default function HeroSection() {
  const reducedMotion = usePrefersReducedMotion();
  const { hero } = siteContent;

  return (
    <div id="hero" className="relative overflow-hidden">
      <SiteHeader />

      <Container className="pb-16 pt-8 lg:pb-24 lg:pt-12">
        <motion.section
          className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]"
          initial="hidden"
          animate="visible"
          variants={buildStagger(Boolean(reducedMotion))}
        >
          <Reveal className="relative">
            <span className="inline-flex rounded-full bg-mint px-4 py-2 text-xs font-extrabold uppercase tracking-[0.24em] text-cta">
              {hero.eyebrow}
            </span>
            <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[0.96] text-ink sm:text-6xl lg:text-7xl">
              {hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/72">{hero.description}</p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <PrimaryButton href={hero.primaryCta.href} label={hero.primaryCta.label} />
              <PrimaryButton href={hero.secondaryCta.href} label={hero.secondaryCta.label} variant="ghost" />
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {hero.bullets.map((item) => (
                <li key={item} className="flex gap-3 rounded-3xl bg-white/70 px-4 py-4 shadow-card">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-cta" />
                  <span className="text-sm font-semibold leading-6 text-ink">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 max-w-xl rounded-3xl border border-mint bg-white/80 px-5 py-4 text-sm leading-7 text-ink/70">
              {hero.assurance}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <HeroVisual highlights={hero.visualHighlights} stats={hero.stats} />
          </Reveal>
        </motion.section>

        <Reveal delay={0.24}>
          <SectionAnchor href="#duvidas" label="Descer para as duvidas mais comuns" />
        </Reveal>
      </Container>
    </div>
  );
}
