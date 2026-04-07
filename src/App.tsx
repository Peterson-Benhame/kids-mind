import HeroSection from "./sections/HeroSection";
import UncertaintySection from "./sections/UncertaintySection";
import DevelopmentSection from "./sections/DevelopmentSection";
import ErrorSection from "./sections/ErrorSection";
import KitSection from "./sections/KitSection";
import BenefitsSection from "./sections/BenefitsSection";
import DecisionSection from "./sections/DecisionSection";
import SmoothScrollLink from "./components/ui/SmoothScrollLink";

export default function App() {
  return (
    <>
      <SmoothScrollLink
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-cta focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Pular para o conteudo
      </SmoothScrollLink>

      <HeroSection />

      <main id="conteudo" className="pb-10">
        <UncertaintySection />
        <DevelopmentSection />
        <ErrorSection />
        <KitSection />
        <BenefitsSection />
        <DecisionSection />
      </main>
    </>
  );
}
