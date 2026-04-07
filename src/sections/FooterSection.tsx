import Container from "../components/layout/Container";
import { siteContent } from "../lib/content";

export default function FooterSection() {
  return (
    <footer className="pb-8 pt-2">
      <Container>
        <div className="rounded-[2rem] border border-ink/8 bg-white/70 px-6 py-6 text-sm leading-7 text-moss shadow-card">
          <p className="font-display text-2xl text-ink">{siteContent.brand}</p>
          <p className="mt-2 max-w-3xl">{siteContent.footer.note}</p>
        </div>
      </Container>
    </footer>
  );
}
