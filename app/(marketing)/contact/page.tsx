import type { Metadata } from "next";
import { PageHero } from "@/components/landing/page-hero";
import { ContactForm } from "@/components/landing/contact-form";
import { FAQSection } from "@/components/landing/faq-section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Projexia team. Questions, demo requests, or enterprise inquiries — we're here to help.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        label="Contact"
        title="Let's talk"
        description="Have a question, need a demo, or want to discuss enterprise needs? We'd love to hear from you."
      />
      <ContactForm />
      <FAQSection variant="general" />
    </main>
  );
}
