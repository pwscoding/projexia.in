"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const generalFaqs = [
  {
    question: "How do I get started with Projexia?",
    answer: "Simply create a free account, set up your workspace, invite your team, and you're ready to go. The onboarding wizard will guide you through the entire process in under two minutes.",
  },
  {
    question: "Does Projexia include a client portal?",
    answer: "Yes! Every plan includes a dedicated client portal where your clients can view project progress, leave feedback, approve deliverables, and communicate with your team — all without needing a full account.",
  },
  {
    question: "How secure is my data on Projexia?",
    answer: "We take security seriously. All data is encrypted in transit (TLS). We use JWT-based authentication with auto token refresh, role-based access control, and multi-tenant organization isolation.",
  },
  {
    question: "Can I migrate from another project management tool?",
    answer: "We're working on import tools. In the meantime, our team can help you get set up quickly. Reach out to us and we'll help with your transition.",
  },
  {
    question: "What are the limits on each plan?",
    answer: "Each plan has different limits for team members, projects, and storage. The Starter plan is free with generous limits for small teams. Professional and Enterprise plans offer higher or unlimited quotas. Check our pricing page for details.",
  },
  {
    question: "What is your refund policy?",
    answer: "We offer a 14-day money-back guarantee on all paid plans. If you're not satisfied within the first 14 days, contact our support team for a full refund — no questions asked.",
  },
];

const pricingFaqs = [
  {
    question: "What happens when my free trial ends?",
    answer: "Your account automatically switches to the free Starter plan. You won't lose any data. You can upgrade anytime to unlock premium features.",
  },
  {
    question: "Can I switch plans later?",
    answer: "Yes! You can upgrade or downgrade your plan at any time. When upgrading, you'll be charged the prorated difference. When downgrading, the credit is applied to your next billing cycle.",
  },
  {
    question: "How does annual billing work?",
    answer: "Annual billing saves you 20% compared to monthly. You're billed once per year. If you cancel mid-year, you'll have access until the end of your billing period.",
  },
  {
    question: "Do you offer discounts for non-profits or startups?",
    answer: "Reach out to us — we're happy to work something out for registered non-profits and early-stage startups.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit/debit cards and UPI via Razorpay.",
  },
  {
    question: "Is there a setup fee?",
    answer: "No setup fees, ever. All plans include free onboarding.",
  },
  {
    question: "What is your refund policy?",
    answer: "We offer a 14-day money-back guarantee on all paid plans. If you're not satisfied within the first 14 days, contact our support team for a full refund — no questions asked.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: { question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-sm font-medium text-foreground pr-4">{faq.question}</span>
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

export function FAQSection({ variant = "general" }: { variant?: "general" | "pricing" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = variant === "pricing" ? pricingFaqs : generalFaqs;

  return (
    <section id="faq" ref={ref} className="section-padding">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            {variant === "pricing" ? "Have questions? We have answers." : "Frequently asked questions"}
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Everything you need to know about Projexia.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-xl border border-border bg-white px-6"
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center text-sm text-muted-foreground"
        >
          Still have questions?{" "}
          <Link href="/contact" className="font-semibold text-primary hover:underline">
            Talk to our team
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
