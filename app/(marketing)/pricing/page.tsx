import type { Metadata } from "next";
import { PricingSection } from "@/components/landing/pricing-section";
import { FeatureComparison } from "@/components/landing/feature-comparison";
import { FAQSection } from "@/components/landing/faq-section";
import { PageCTA } from "@/components/landing/page-cta";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for Projexia. Start free and scale as you grow. No hidden fees.",
};

export default function PricingPage() {
  return (
    <main>
      <PricingSection />
      <FeatureComparison />
      <FAQSection variant="pricing" />
      <PageCTA
        headline="Start your free account today"
        description="No credit card required. Free forever plan available. Upgrade anytime."
        secondaryLabel="Contact Sales"
        secondaryHref="/contact"
      />
    </main>
  );
}
