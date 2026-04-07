type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  centered?: boolean;
};

export default function SectionIntro({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionIntroProps) {
  const alignClass = centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl";

  return (
    <div className={alignClass}>
      <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-cta">{eyebrow}</p>
      <h2 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-ink/72 sm:text-lg">{description}</p>
    </div>
  );
}
