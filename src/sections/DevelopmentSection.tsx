import { BrainCircuit, MoveRight, Sparkles } from "lucide-react";
import Container from "../components/layout/Container";
import Reveal from "../components/ui/Reveal";
import SectionAnchor from "../components/ui/SectionAnchor";
import SectionIntro from "../components/ui/SectionIntro";
import { siteContent } from "../lib/content";

export default function DevelopmentSection() {
  const { development } = siteContent;

  return (
    <section id="desenvolvimento" className="py-10 sm:py-14">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <Reveal className="section-shell px-6 py-8 sm:px-8 sm:py-10">
            <SectionIntro
              eyebrow={development.eyebrow}
              title={development.title}
              description={development.description}
            />

            <div className="mt-8 flex flex-wrap gap-3">
              {development.pillars.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-mint bg-mist px-4 py-2 text-sm font-bold uppercase tracking-[0.14em] text-cta"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 rounded-[1.75rem] border border-mint bg-mint/70 p-6 text-ink">
              <div className="flex items-center gap-3">
                <BrainCircuit className="h-6 w-6 text-cta" />
                <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-cta">Janela de formacao</p>
              </div>
              <p className="mt-4 text-lg leading-8 text-ink/78">
                Nos primeiros meses, cada experiencia orientada fortalece conexoes neurais e prepara o bebe para aprender com mais seguranca.
              </p>
            </div>
          </Reveal>

          <Reveal className="section-shell bg-gradient-to-br from-mint/80 via-white to-peach/45 px-6 py-8 text-ink sm:px-8 sm:py-10" delay={0.1}>
            <div className="flex items-center gap-3 text-cta">
              <Sparkles className="h-6 w-6" />
              <p className="text-sm font-extrabold uppercase tracking-[0.2em]">Logica Montessori</p>
            </div>

            <div className="mt-6 space-y-4">
              {development.montessori.map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-white bg-white/88 px-5 py-5">
                  <div className="flex items-start gap-3">
                    <MoveRight className="mt-1 h-5 w-5 text-cta" />
                    <p className="text-lg leading-8 text-ink">{item}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 rounded-[1.5rem] border border-white bg-white/82 px-5 py-5 text-sm leading-7 text-ink/72">
              {development.note}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.18}>
          <SectionAnchor href="#erro-comum" label="Ver o erro mais comum dos pais" />
        </Reveal>
      </Container>
    </section>
  );
}
