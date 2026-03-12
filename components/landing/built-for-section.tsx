"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Palette,
  Code2,
  Megaphone,
  PenTool,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const agencyTypes = [
  {
    icon: Palette,
    type: "Design Agencies",
    description:
      "Share deliverables through branded portals. Get client approvals with annotations. No more email ping-pong over mockups.",
    features: ["Visual approvals", "File sharing", "Brand portal"],
    color: "bg-pink-50 border-pink-100",
    iconColor: "text-pink-600",
    badgeColor: "bg-pink-50 text-pink-700 border-pink-200",
  },
  {
    icon: Code2,
    type: "Dev & IT Agencies",
    description:
      "Track sprints, log billable hours, and give clients visibility into progress — without sharing your internal tools.",
    features: ["Time tracking", "Sprint boards", "Client reports"],
    color: "bg-blue-50 border-blue-100",
    iconColor: "text-blue-600",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    icon: Megaphone,
    type: "Marketing Agencies",
    description:
      "Manage retainers, track campaign hours, share reports with clients, and invoice — all without switching tabs.",
    features: ["Retainer billing", "Campaign reports", "Auto invoicing"],
    color: "bg-amber-50 border-amber-100",
    iconColor: "text-amber-600",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    icon: PenTool,
    type: "Creative Studios",
    description:
      "From concept to delivery — manage multi-phase projects, collect feedback, and keep your creative team aligned.",
    features: ["Multi-phase projects", "Feedback loops", "Team views"],
    color: "bg-purple-50 border-purple-100",
    iconColor: "text-purple-600",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
  },
];

export function BuiltForSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Built for your agency
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Whatever you build, Projexia fits
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            Agencies of all types use Projexia to streamline operations and
            impress clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {agencyTypes.map((agency, i) => (
            <motion.div
              key={agency.type}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-xl border p-6 sm:p-8 ${agency.color}`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`shrink-0 size-10 rounded-xl bg-white border border-border flex items-center justify-center`}
                >
                  <agency.icon className={`size-5 ${agency.iconColor}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-foreground">
                    {agency.type}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {agency.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {agency.features.map((feature) => (
                      <span
                        key={feature}
                        className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${agency.badgeColor}`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <Link
            href="/register"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            Start free — works for every agency type
            <ArrowRight className="size-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
