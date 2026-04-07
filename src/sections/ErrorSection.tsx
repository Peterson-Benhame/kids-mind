import { CheckCircle2, TriangleAlert } from "lucide-react";
import Container from "../components/layout/Container";
import Reveal from "../components/ui/Reveal";
import SectionAnchor from "../components/ui/SectionAnchor";
import SectionIntro from "../components/ui/SectionIntro";
import { siteContent } from "../lib/content";

export default function ErrorSection() {
  const { mistake } = siteContent;

  return (
    <section id="erro-comum" className="py-10 sm:py-14">
      <Container>
        <div className="section-shell px-6 py-8 sm:px-10 sm:py-12">
          <Reveal>
            <SectionIntro
              eyebrow={mistake.eyebrow}
              title={mistake.title}
              description="Seu bebe nao precisa de mais ruido. Precisa de experiencias que construam desenvolvimento real."
              centered
            />
          </Reveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <Reveal>
              <article className="h-full rounded-[2rem] bg-blush p-7">
                <div className="flex items-center gap-3 text-cta">
                  <TriangleAlert className="h-6 w-6" />
                  <p className="text-sm font-extrabold uppercase tracking-[0.2em]">So distrai</p>
                </div>
                <ul className="mt-6 space-y-4">
                  {mistake.wrong.map((item) => (
                    <li key={item} className="rounded-[1.5rem] bg-white/78 px-4 py-4 text-sm leading-7 text-ink/72">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <article className="h-full rounded-[2rem] border border-mint bg-gradient-to-br from-mint/90 via-white to-peach/55 p-7 text-ink">
                <div className="flex items-center gap-3 text-cta">
                  <CheckCircle2 className="h-6 w-6" />
                  <p className="text-sm font-extrabold uppercase tracking-[0.2em]">Desenvolve de verdade</p>
                </div>
                <ul className="mt-6 space-y-4">
                  {mistake.right.map((item) => (
                    <li key={item} className="rounded-[1.5rem] border border-white bg-white/86 px-4 py-4 text-sm leading-7 text-ink/76">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>

          <Reveal delay={0.18}>
            <SectionAnchor href="#kit" label="Conhecer o kit completo" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
