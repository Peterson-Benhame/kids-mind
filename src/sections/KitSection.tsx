import { Clock3, ShieldCheck, Video } from "lucide-react";
import Container from "../components/layout/Container";
import Reveal from "../components/ui/Reveal";
import SectionAnchor from "../components/ui/SectionAnchor";
import SectionIntro from "../components/ui/SectionIntro";
import { siteContent } from "../lib/content";

export default function KitSection() {
  const { kit } = siteContent;

  return (
    <section id="kit" className="py-10 sm:py-14">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[1.04fr_0.96fr]">
          <Reveal className="section-shell px-6 py-8 sm:px-8 sm:py-10">
            <SectionIntro eyebrow={kit.eyebrow} title={kit.title} description={kit.description} />

            <div className="mt-8 grid gap-4">
              {kit.items.map((item, index) => (
                <article key={item.step} className="panel-surface grid gap-4 px-5 py-5 sm:grid-cols-[72px_1fr]">
                  <div className="flex h-[72px] w-[72px] items-center justify-center rounded-[1.6rem] bg-mint font-display text-3xl text-cta">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-ink/72">{item.text}</p>
                    <p className="mt-3 text-xs font-extrabold uppercase tracking-[0.2em] text-cta">Estimulo {index + 1}</p>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal className="section-shell bg-gradient-to-br from-mint/75 via-white to-peach/40 px-6 py-8 text-ink sm:px-8 sm:py-10" delay={0.12}>
            <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-cta">Voce nao fica perdida</p>
            <h3 className="mt-4 font-display text-4xl leading-tight">Cada brinquedo vem com orientacao pratica em video.</h3>
            <p className="mt-4 text-base leading-7 text-ink/72">
              Em vez de tentar descobrir sozinha, voce acessa um passo a passo simples para saber como conduzir a experiencia em cada fase.
            </p>

            <div className="mt-8 space-y-4">
              {kit.videos.map((item, index) => {
                const Icon = index % 2 === 0 ? Video : index % 3 === 0 ? ShieldCheck : Clock3;

                return (
                  <div key={item} className="rounded-[1.5rem] border border-white bg-white/88 px-5 py-5">
                    <div className="flex gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-peach/45 text-cta">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-cta">Passo {index + 1}</p>
                        <p className="mt-2 text-base leading-7 text-ink">{item}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.18}>
          <SectionAnchor href="#beneficios" label="Ver o que o bebe desenvolve" />
        </Reveal>
      </Container>
    </section>
  );
}
