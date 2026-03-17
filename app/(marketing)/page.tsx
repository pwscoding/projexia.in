import type { Metadata } from "next";
import { HeroSection } from "@/components/landing/hero-section";
import { ProblemSection } from "@/components/landing/problem-section";
import { SolutionSection } from "@/components/landing/solution-section";
import { HowItWorks } from "@/components/landing/how-it-works";
import { BuiltForSection } from "@/components/landing/built-for-section";
import { PricingTeaser } from "@/components/landing/pricing-teaser";
import { ProductDemo } from "@/components/landing/product-demo";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { FAQSection } from "@/components/landing/faq-section";
import { PageCTA } from "@/components/landing/page-cta";
import { JsonLd } from "@/components/landing/json-ld";
import { SectionDivider } from "@/components/landing/section-divider";
import { TrustBar } from "@/components/landing/trust-bar";

export const metadata: Metadata = {
  title: "Projexia – Project Management for Modern Agencies",
  description:
    "Manage projects, collaborate with clients, and deliver results faster. The all-in-one platform built for agencies that move fast.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Projexia – Project Management for Modern Agencies",
    description:
      "Manage projects, collaborate with clients, and deliver results faster.",
  },
};

export default function Home() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Projexia",
          url: "https://projexia.in",
          logo: "https://projexia.in/icon.png",
          description:
            "All-in-one project management platform for modern agencies.",
          sameAs: [],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Projexia",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          url: "https://projexia.in",
          description:
            "Manage projects, collaborate with clients, and deliver results faster.",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
            description: "Free forever plan available",
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How do I get started with Projexia?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Simply create a free account, set up your workspace, invite your team, and you're ready to go. The onboarding wizard will guide you through the entire process in under two minutes.",
              },
            },
            {
              "@type": "Question",
              name: "Does Projexia include a client portal?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes! Every plan includes a dedicated client portal where your clients can view project progress, leave feedback, approve deliverables, and communicate with your team — all without needing a full account.",
              },
            },
            {
              "@type": "Question",
              name: "How secure is my data on Projexia?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We take security seriously. All data is encrypted in transit (TLS). We use JWT-based authentication with auto token refresh, role-based access control, and multi-tenant organization isolation.",
              },
            },
            {
              "@type": "Question",
              name: "Can I migrate from another project management tool?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We're working on import tools. In the meantime, our team can help you get set up quickly. Reach out to us and we'll help with your transition.",
              },
            },
            {
              "@type": "Question",
              name: "What are the limits on each plan?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Each plan has different limits for team members, projects, and storage. The Starter plan is free with generous limits for small teams. Professional and Enterprise plans offer higher or unlimited quotas. Check our pricing page for details.",
              },
            },
            {
              "@type": "Question",
              name: "What is your refund policy?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We offer a 14-day money-back guarantee on all paid plans. If you're not satisfied within the first 14 days, contact our support team for a full refund — no questions asked.",
              },
            },
          ],
        }}
      />
      {/* Hero — headline, subheadline, CTA, product screenshot */}
      <HeroSection />

      {/* Trust Bar — credibility strip */}
      <TrustBar />
      <SectionDivider />

      {/* Problem — pain points (AIDA: Interest) */}
      <ProblemSection />
      <SectionDivider />

      {/* Solution — key features */}
      <SolutionSection />
      <SectionDivider />

      {/* How It Works — 3 steps */}
      <HowItWorks />
      <SectionDivider />

      {/* Who Is It For — Agencies, Freelancers, Teams */}
      <BuiltForSection />
      <SectionDivider />

      {/* Pricing Preview */}
      <PricingTeaser />
      <SectionDivider />

      {/* Product Demo — video + UI previews */}
      <ProductDemo />
      <SectionDivider />

      {/* Social Proof — testimonials */}
      <TestimonialsSection showLink />
      <SectionDivider />

      {/* FAQ */}
      <FAQSection variant="general" />

      {/* Final CTA */}
      <PageCTA
        headline="Ready to run your agency from one place?"
        description="Join 500+ agencies using Projexia to manage projects, delight clients, and grow faster."
        primaryLabel="Start for Free"
        primaryHref="/register"
        secondaryLabel="View Pricing"
        secondaryHref="/pricing"
      />
    </main>
  );
}
