import { HeroSection } from "@/components/landing/hero-section";
import { ProblemSection } from "@/components/landing/problem-section";
import { PlatformOverview } from "@/components/landing/platform-overview";
import { FeatureBento } from "@/components/landing/feature-bento";
import { HowItWorks } from "@/components/landing/how-it-works";
import { PricingTeaser } from "@/components/landing/pricing-teaser";
import { FAQSection } from "@/components/landing/faq-section";
import { PageCTA } from "@/components/landing/page-cta";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <PlatformOverview />
      <FeatureBento />
      <HowItWorks />
      <PricingTeaser />
      <FAQSection variant="general" />
      <PageCTA />
    </main>
  );
}
