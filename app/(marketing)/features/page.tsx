import type { Metadata } from "next";
import { PageHero } from "@/components/landing/page-hero";
import { ProductShowcase } from "@/components/landing/product-showcase";
import { IntegrationsSection } from "@/components/landing/integrations-section";
import { PageCTA } from "@/components/landing/page-cta";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore all Projexia features — project management, client portal, time tracking, team collaboration, analytics, and automations.",
};

export default function FeaturesPage() {
  return (
    <main>
      <PageHero
        label="Features"
        title="Everything your agency needs. Nothing it doesn't."
        description="From project kickoff to final invoice — every tool, one platform."
      />
      <ProductShowcase />
      <IntegrationsSection />
      <PageCTA
        headline="See it in action — start your free account"
        description="Get started in 2 minutes. No credit card required. Free forever plan available."
        secondaryLabel="View Pricing"
        secondaryHref="/pricing"
      />
    </main>
  );
}
