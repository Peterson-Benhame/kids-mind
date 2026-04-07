# Component Tree

```text
App
├── HeroSection
│   ├── SiteHeader
│   ├── PrimaryButton
│   └── HeroVisual
├── UncertaintySection
│   ├── SectionIntro
│   └── InfoCard
├── DevelopmentSection
│   └── SectionIntro
├── ErrorSection
│   └── SectionIntro
├── KitSection
│   └── SectionIntro
├── BenefitsSection
│   └── SectionIntro
├── DecisionSection
│   ├── SectionIntro
│   └── PrimaryButton
└── FooterSection
```

## Contratos principais

- `PrimaryButton`: CTA com variante `solid` ou `ghost`.
- `Reveal`: wrapper de animacao respeitando `prefers-reduced-motion`.
- `InfoCard`: card reutilizavel para dores e contexto.
- `HeroVisual`: painel premium com destaque de ganhos e stats.
