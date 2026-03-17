"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Building2,
  User,
  Users,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const personas = [
  {
    icon: Building2,
    type: "Agencies",
    description:
      "Manage multiple clients, track projects across teams, and give every client their own branded portal. Built for design, dev, and marketing agencies.",
    features: ["Client portals", "Multi-project", "Team roles", "White-label"],
    color: "bg-blue-50 border-blue-100",
    iconColor: "text-blue-600",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    icon: User,
    type: "Freelancers",
    description:
      "Stop chasing clients for approvals and payments. Track your time, send professional invoices, and share progress — all from one dashboard.",
    features: ["Time tracking", "Invoicing", "File sharing", "Client updates"],
    color: "bg-amber-50 border-amber-100",
    iconColor: "text-amber-600",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    icon: Users,
    type: "Small Teams",
    description:
      "Coordinate work across your team without the complexity of enterprise tools. Assign tasks, track hours, and keep clients in the loop.",
    features: ["Task assignment", "Team portal", "Progress tracking", "Reports"],
    color: "bg-purple-50 border-purple-100",
    iconColor: "text-purple-600",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
  },
];

export function BuiltForSection() {
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
            Who is it for
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Built for teams that work with clients
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            Whether you&apos;re a solo freelancer or a growing agency, Projexia adapts to how you work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {personas.map((persona, i) => (
            <motion.div
              key={persona.type}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-xl border p-6 sm:p-8 ${persona.color}`}
            >
              <div className="shrink-0 size-10 rounded-xl bg-white border border-border flex items-center justify-center mb-4">
                <persona.icon className={`size-5 ${persona.iconColor}`} />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {persona.type}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {persona.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {persona.features.map((feature) => (
                  <span
                    key={feature}
                    className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${persona.badgeColor}`}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <Link
            href="/register"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            Start free — works for everyone
            <ArrowRight className="size-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
