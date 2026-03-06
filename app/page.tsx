import { Navbar } from "@/components/landing/navbar";
import { HeroSection } from "@/components/landing/hero-section";
import { LogoTicker } from "@/components/landing/logo-ticker";
import { StatsSection } from "@/components/landing/stats-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { DashboardPreview } from "@/components/landing/dashboard-preview";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { IntegrationsSection } from "@/components/landing/integrations-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { FAQSection } from "@/components/landing/faq-section";
import { SecuritySection } from "@/components/landing/security-section";
import { CTABanner } from "@/components/landing/cta-banner";
import { RegistrationSection } from "@/components/landing/registration-section";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <LogoTicker />
        <StatsSection />
        <FeaturesSection />
        <DashboardPreview />
        <HowItWorksSection />
        <IntegrationsSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <SecuritySection />
        <CTABanner />
        <RegistrationSection />
      </main>
      <Footer />
    </>
  );
}
