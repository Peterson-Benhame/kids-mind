import Container from "../components/layout/Container";
import PrimaryButton from "../components/ui/PrimaryButton";
import Reveal from "../components/ui/Reveal";
import SectionIntro from "../components/ui/SectionIntro";
import { siteContent } from "../lib/content";

export default function DecisionSection() {
  const { decision } = siteContent;

  return (
    <section id="oferta" className="py-10 sm:py-14">
      <Container>
        <div className="section-shell px-6 py-8 sm:px-10 sm:py-12">
          <Reveal>
            <SectionIntro eyebrow={decision.eyebrow} title={decision.title} description={decision.description} centered />
          </Reveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {decision.choices.map((choice, index) => (
              <Reveal key={choice.title} delay={index * 0.08}>
                <article
                  className={`h-full rounded-[2rem] p-7 ${
                    index === 0 ? "bg-blush text-ink" : "border border-mint bg-gradient-to-br from-mint/85 via-white to-peach/40 text-ink"
                  }`}
                >
                  <p
                    className={`text-sm font-extrabold uppercase tracking-[0.2em] ${
                      index === 0 ? "text-cta" : "text-cta"
                    }`}
                  >
                    Decisao {index + 1}
                  </p>
                  <h3 className="mt-4 font-display text-3xl">{choice.title}</h3>
                  <p className="mt-4 text-base leading-7 text-ink/72">{choice.text}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10" delay={0.18}>
            <article className="rounded-[2rem] border border-peach/60 bg-gradient-to-br from-white via-cream to-peach/35 px-6 py-8 text-center sm:px-10">
              <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-cta">{decision.ctaTitle}</p>
              <h3 className="mx-auto mt-4 max-w-3xl font-display text-4xl leading-tight text-ink sm:text-5xl">
                {decision.ctaDescription}
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-ink/72">{decision.microcopy}</p>
              <div className="mt-8 flex justify-center">
                <PrimaryButton href={decision.primaryCta.href} label={decision.primaryCta.label} />
              </div>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
