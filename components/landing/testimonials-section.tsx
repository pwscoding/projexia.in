"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Rocket, Shield, Zap, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const reasons = [
  {
    icon: Rocket,
    title: "Built for real agency workflows",
    description:
      "Not another generic PM tool. Projexia is designed around how agencies actually work — client portals, approvals, invoicing, and delivery.",
  },
  {
    icon: Shield,
    title: "Your brand, your portal",
    description:
      "White-label client portals with your logo, your colors, your domain. Your clients see your brand, not ours.",
  },
  {
    icon: Zap,
    title: "Set up in minutes, not days",
    description:
      "No complex migrations or onboarding calls. Create an account, invite your first client, and you're live.",
  },
  {
    icon: Heart,
    title: "Free plan with no time limit",
    description:
      "Start with a generous free plan. No trial countdown, no credit card required. Upgrade only when you need more.",
  },
];

export function TestimonialsSection({ showLink = false }: { showLink?: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" ref={ref} className="section-padding bg-muted/30 overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Why Projexia
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Built different, on purpose
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Most project management tools forget the client. Projexia puts them at the center.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-border bg-white p-6"
            >
              <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <reason.icon className="size-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {showLink && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 text-center"
          >
            <Button asChild variant="outline" size="lg" className="h-11 px-6 rounded-full">
              <Link href="/register">
                Try it yourself — it&apos;s free
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
