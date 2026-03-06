"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How do I get started with Projexia?",
    answer:
      "Simply create a free account, set up your workspace, invite your team, and you're ready to go. The onboarding wizard will guide you through the entire process in under two minutes.",
  },
  {
    question: "Does Projexia include a client portal?",
    answer:
      "Yes! Every plan includes a dedicated client portal where your clients can view project progress, leave feedback, approve deliverables, and communicate with your team — all without needing a full account.",
  },
  {
    question: "How secure is my data on Projexia?",
    answer:
      "We take security seriously. All data is encrypted at rest (AES-256) and in transit (TLS 1.3). We follow SOC 2 practices, conduct regular security audits, and our infrastructure is hosted on enterprise-grade cloud providers with 99.9% uptime SLA.",
  },
  {
    question: "Can I migrate from another project management tool?",
    answer:
      "Absolutely. We offer import support for popular tools like Jira, Asana, Trello, and Monday.com. Our team can also assist with custom migrations for Enterprise plan customers.",
  },
  {
    question: "What are the limits on each plan?",
    answer:
      "Each plan has different limits for team members, projects, and storage. The Starter plan is free with generous limits for small teams. Professional and Enterprise plans offer higher or unlimited quotas. Check our pricing section for details.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "We offer a 14-day money-back guarantee on all paid plans. If you're not satisfied within the first 14 days, contact our support team for a full refund — no questions asked.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-sm font-medium pr-4">{faq.question}</span>
        <ChevronDown
          className={cn(
            "size-4 shrink-0 text-muted-foreground transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-muted-foreground leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" ref={ref} className="relative py-24 px-4">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Everything you need to know about Projexia.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass rounded-xl px-6"
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
