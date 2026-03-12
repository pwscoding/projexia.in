import { HeroSection } from "@/components/landing/hero-section";
import { LogoTicker } from "@/components/landing/logo-ticker";
import { ProblemSection } from "@/components/landing/problem-section";
import { StatsSection } from "@/components/landing/stats-section";
import { PlatformOverview } from "@/components/landing/platform-overview";
import { BuiltForSection } from "@/components/landing/built-for-section";
import { FeatureBento } from "@/components/landing/feature-bento";
import { MidFunnelCTA } from "@/components/landing/mid-funnel-cta";
import { HowItWorks } from "@/components/landing/how-it-works";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { ResultsSection } from "@/components/landing/results-section";
import { PricingTeaser } from "@/components/landing/pricing-teaser";
import { FAQSection } from "@/components/landing/faq-section";
import { PageCTA } from "@/components/landing/page-cta";
import { StickyCTA } from "@/components/landing/sticky-cta";

export default function Home() {
  return (
    <main>
      {/* Top of Funnel — Awareness & Hook */}
      <HeroSection />
      <LogoTicker />

      {/* Agitation — Identify the pain */}
      <ProblemSection />

      {/* Credibility — Numbers that build trust */}
      <StatsSection />

      {/* Solution — Show the platform */}
      <PlatformOverview />

      {/* Qualification — Help visitors self-identify */}
      <BuiltForSection />

      {/* Deep Dive — Feature details */}
      <FeatureBento />

      {/* Mid-Funnel Conversion — Catch warm leads */}
      <MidFunnelCTA />

      {/* Ease — Reduce friction */}
      <HowItWorks />

      {/* Social Proof — Build confidence */}
      <TestimonialsSection showLink />

      {/* Transformation — Show ROI */}
      <ResultsSection />

      {/* Pricing — Anchor value */}
      <PricingTeaser />

      {/* Objection Handling */}
      <FAQSection variant="general" />

      {/* Final Conversion */}
      <PageCTA />

      {/* Mobile Sticky CTA */}
      <StickyCTA />
    </main>
  );
}
