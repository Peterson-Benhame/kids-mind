import { Baby, BookOpen, CircleHelp, Heart } from "lucide-react";
import Container from "../components/layout/Container";
import InfoCard from "../components/ui/InfoCard";
import Reveal from "../components/ui/Reveal";
import SectionAnchor from "../components/ui/SectionAnchor";
import SectionIntro from "../components/ui/SectionIntro";
import { siteContent } from "../lib/content";

const icons = [CircleHelp, Heart, BookOpen, Baby];

export default function UncertaintySection() {
  const { doubts } = siteContent;

  return (
    <section id="duvidas" className="py-10 sm:py-14">
      <Container>
        <div className="section-shell px-6 py-8 sm:px-10 sm:py-12">
          <Reveal>
            <SectionIntro eyebrow={doubts.eyebrow} title={doubts.title} description={doubts.description} />
          </Reveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            {doubts.cards.map((item, index) => {
              const Icon = icons[index];

              return (
                <Reveal key={item} delay={index * 0.06}>
                  <InfoCard
                    title={`Duvida ${index + 1}`}
                    description={item}
                    icon={Icon}
                    accent={index % 2 === 0 ? "bg-peach/65 text-cta" : "bg-mint text-ink"}
                  />
                </Reveal>
              );
            })}
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {doubts.supportBlocks.map((block, index) => (
              <Reveal key={block.title} delay={0.12 + index * 0.08}>
                <article className="panel-surface h-full p-7">
                  <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-cta">Kids Mind</p>
                  <h3 className="mt-4 font-display text-3xl text-ink">{block.title}</h3>
                  <p className="mt-4 text-base leading-7 text-ink/72">{block.text}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.22}>
            <SectionAnchor href="#desenvolvimento" label="Entender como o desenvolvimento acontece" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
