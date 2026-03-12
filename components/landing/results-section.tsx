"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  TrendingUp,
  Clock,
  DollarSign,
  Users,
  ArrowRight,
  Minus,
} from "lucide-react";
import Link from "next/link";

const beforeAfter = [
  {
    icon: Clock,
    category: "Time Management",
    before: "Hours lost to manual timesheets and guesswork billing",
    after: "Every minute tracked, every hour billed automatically",
    metric: "12+ hrs/week saved",
    metricColor: "text-green-600",
  },
  {
    icon: Users,
    category: "Client Communication",
    before: "Status updates via email chains, Slack, WhatsApp, and calls",
    after: "Clients see everything in their own branded portal",
    metric: "80% fewer emails",
    metricColor: "text-blue-600",
  },
  {
    icon: DollarSign,
    category: "Revenue Leakage",
    before: "Unbilled hours, missed invoices, and payment follow-ups",
    after: "Auto-invoicing from time logs with online payments",
    metric: "23% more revenue",
    metricColor: "text-amber-600",
  },
  {
    icon: TrendingUp,
    category: "Project Delivery",
    before: "Deadlines slip, scope creeps, and clients are surprised",
    after: "Real-time tracking, milestones, and proactive updates",
    metric: "40% faster delivery",
    metricColor: "text-purple-600",
  },
];

export function ResultsSection() {
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
            Real results
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            What changes when you switch to Projexia
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            Agencies see measurable improvements within the first month.
          </p>
        </motion.div>

        <div className="space-y-4">
          {beforeAfter.map((item, i) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl border border-border bg-white overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto] items-stretch">
                {/* Before */}
                <div className="p-5 sm:p-6 flex items-start gap-4">
                  <div className="shrink-0 mt-0.5">
                    <div className="size-8 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center">
                      <Minus className="size-4 text-red-400" />
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-red-500 uppercase tracking-wider mb-1">
                      Before
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.before}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="hidden md:flex items-center px-2">
                  <div className="w-px h-12 bg-border" />
                </div>
                <div className="md:hidden border-t border-border" />

                {/* After */}
                <div className="p-5 sm:p-6 flex items-start gap-4">
                  <div className="shrink-0 mt-0.5">
                    <div className="size-8 rounded-lg bg-green-50 border border-green-100 flex items-center justify-center">
                      <item.icon className="size-4 text-green-600" />
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-green-600 uppercase tracking-wider mb-1">
                      After
                    </p>
                    <p className="text-sm text-foreground font-medium leading-relaxed">
                      {item.after}
                    </p>
                  </div>
                </div>

                {/* Metric */}
                <div className="flex items-center justify-center p-5 sm:p-6 border-t md:border-t-0 md:border-l border-border bg-muted/30">
                  <div className="text-center">
                    <p
                      className={`text-lg sm:text-xl font-bold ${item.metricColor}`}
                    >
                      {item.metric}
                    </p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">
                      {item.category}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 text-center"
        >
          <Link
            href="/register"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            See these results for your agency
            <ArrowRight className="size-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
