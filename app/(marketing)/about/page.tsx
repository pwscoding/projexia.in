import type { Metadata } from "next";
import { PageHero } from "@/components/landing/page-hero";
import { MissionSection } from "@/components/landing/mission-section";
import { AboutNumbers } from "@/components/landing/about-numbers";
import { OurStory } from "@/components/landing/our-story";
import { ApproachSection } from "@/components/landing/approach-section";
import { ValuesSection } from "@/components/landing/values-section";
import { TeamSection } from "@/components/landing/team-section";
import { SecuritySection } from "@/components/landing/security-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { PageCTA } from "@/components/landing/page-cta";

export const metadata: Metadata = {
  title: "About — Projexia",
  description:
    "Learn about Projexia — built by agency people, for agency people. Our mission, story, values, and the team behind the platform.",
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero — Bold statement */}
      <PageHero
        label="About Projexia"
        title="We ran an agency. We hated the tools. So we built better ones."
        description="Projexia was born from real agency pain — not a whiteboard brainstorm. We've lived the chaos of managing projects across 7 different tools, and we built the one platform we wished existed."
      />

      {/* Mission & Vision — Side by side */}
      <MissionSection />

      {/* Numbers — Quick credibility */}
      <AboutNumbers />

      {/* Our Story — Timeline with depth */}
      <OurStory />

      {/* How We're Different — Differentiation */}
      <ApproachSection />

      {/* Values — What we believe */}
      <ValuesSection />

      {/* Team — People behind the product */}
      <TeamSection />

      {/* Security — Trust builder */}
      <SecuritySection />

      {/* Social Proof */}
      <TestimonialsSection />

      {/* Final CTA */}
      <PageCTA
        headline="Ready to streamline your agency?"
        description="Join 500+ agencies that switched to Projexia and never looked back."
        primaryLabel="Start Free"
        secondaryLabel="Talk to Us"
        secondaryHref="/contact"
      />
    </main>
  );
}
