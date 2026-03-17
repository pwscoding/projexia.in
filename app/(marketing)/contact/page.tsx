import type { Metadata } from "next";
import { ContactSection } from "@/components/landing/contact-section";
import { FAQSection } from "@/components/landing/faq-section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Projexia team. Questions, demo requests, or enterprise inquiries — we're here to help.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main>
      <ContactSection />
      <FAQSection variant="general" />
    </main>
  );
}
