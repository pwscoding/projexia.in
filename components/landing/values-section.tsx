"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, Heart, Eye, Rocket, Shield, Ear } from "lucide-react";

const values = [
  {
    icon: Sparkles,
    title: "Simplicity first",
    description:
      "We obsess over removing complexity. If a feature needs a tutorial, it's not done. Every interaction should feel obvious.",
    example: "Our onboarding takes 2 minutes, not 2 hours.",
  },
  {
    icon: Heart,
    title: "Agency-obsessed",
    description:
      "We build for agencies because we were one. Every decision starts with: 'How does this help an agency deliver better?'",
    example: "White-label portals exist because clients asked for them.",
  },
  {
    icon: Eye,
    title: "Transparent always",
    description:
      "No hidden fees, no dark patterns, no surprises. Public pricing, honest roadmap, and a free plan that's actually useful.",
    example: "Our free tier isn't a trap — it's how many agencies start.",
  },
  {
    icon: Rocket,
    title: "Ship fast, ship often",
    description:
      "We release every week. Real user feedback drives what we build next, not roadmap fantasies or executive hunches.",
    example: "Our changelog has 100+ entries this year.",
  },
  {
    icon: Shield,
    title: "Earn trust, don't demand it",
    description:
      "Your data is your data. Enterprise-grade security, multi-tenant isolation, and role-based access aren't add-ons — they're defaults.",
    example: "Every API call is authenticated and audit-logged.",
  },
  {
    icon: Ear,
    title: "Listen harder",
    description:
      "We read every support ticket, every feature request, and every cancellation reason. Our best features came from user conversations.",
    example: "The time tracking timer was a user's idea, not ours.",
  },
];

export function ValuesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding bg-muted/30">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Our values
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            What drives every decision we make
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            These aren&apos;t poster slogans. They&apos;re the rules we
            actually follow when building Projexia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl border border-border bg-white p-6 flex flex-col"
            >
              <div className="mb-4 inline-flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary">
                <value.icon className="size-5" />
              </div>
              <h3 className="text-base font-semibold text-foreground">
                {value.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                {value.description}
              </p>
              <p className="mt-4 pt-4 border-t border-border text-xs text-muted-foreground italic">
                {value.example}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
