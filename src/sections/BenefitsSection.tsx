import { CheckCircle2, Target } from "lucide-react";
import Container from "../components/layout/Container";
import Reveal from "../components/ui/Reveal";
import SectionAnchor from "../components/ui/SectionAnchor";
import SectionIntro from "../components/ui/SectionIntro";
import { siteContent } from "../lib/content";

export default function BenefitsSection() {
  const { benefits } = siteContent;

  return (
    <section id="beneficios" className="py-10 sm:py-14">
      <Container>
        <div className="section-shell px-6 py-8 sm:px-10 sm:py-12">
          <Reveal>
            <SectionIntro eyebrow={benefits.eyebrow} title={benefits.title} description={benefits.description} centered />
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {benefits.list.map((item, index) => (
              <Reveal key={item} delay={index * 0.05}>
                <article className="panel-surface h-full p-6">
                  <CheckCircle2 className="h-6 w-6 text-cta" />
                  <h3 className="mt-5 font-display text-2xl text-ink">{item}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink/72">
                    Desenvolvimento com mais intencao, repeticao segura e orientacao clara para o inicio da vida.
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10" delay={0.15}>
            <article className="rounded-[2rem] border border-mint bg-gradient-to-r from-mint/85 via-white to-peach/40 px-6 py-8 text-ink sm:px-8">
              <div className="flex items-center gap-3 text-cta">
                <Target className="h-6 w-6" />
                <p className="text-sm font-extrabold uppercase tracking-[0.2em]">Para quem e</p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {benefits.audience.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white bg-white/84 px-4 py-3 text-sm font-semibold text-ink/76"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.22}>
            <SectionAnchor href="#oferta" label="Ir para a decisao final" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
