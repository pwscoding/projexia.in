import type { Metadata } from "next";
import { PageHero } from "@/components/landing/page-hero";
import { OurStory } from "@/components/landing/our-story";
import { ValuesSection } from "@/components/landing/values-section";
import { SecuritySection } from "@/components/landing/security-section";
import { PageCTA } from "@/components/landing/page-cta";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Projexia — built by agency people, for agency people. Our mission, values, and the team behind the platform.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        label="About us"
        title="Built by agency people, for agency people"
        description="We've been in the trenches. We know the pain. So we built the cure."
      />
      <OurStory />
      <ValuesSection />
      <SecuritySection />
      <PageCTA
        headline="Ready to streamline your agency?"
        description="Start managing projects like a pro. Free forever plan available."
      />
    </main>
  );
}
