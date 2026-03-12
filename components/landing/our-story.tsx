"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Lightbulb, Wrench, Rocket, Users } from "lucide-react";

const milestones = [
  {
    year: "2024",
    quarter: "Q3",
    icon: Lightbulb,
    title: "The frustration that started it all",
    description:
      "We ran a 12-person agency and used 7 different tools daily — Slack for chat, Asana for tasks, Harvest for time, Google Drive for files, Stripe for invoices, and spreadsheets to glue it all together. Switching between them was killing our productivity. Clients were confused. We were drowning.",
    highlight: "7 tools. 12 people. Zero sanity.",
  },
  {
    year: "2025",
    quarter: "Q1",
    icon: Wrench,
    title: "Built what we wished existed",
    description:
      "We stopped complaining and started building. The goal was simple: one platform that handles projects, clients, time tracking, invoicing, and team management. We became our own first user and iterated daily based on what actually worked in real agency life.",
    highlight: "1 platform to replace them all.",
  },
  {
    year: "2025",
    quarter: "Q4",
    icon: Users,
    title: "Early adopters joined",
    description:
      "We invited 20 agencies to try the beta. Within weeks, they were all-in. The client portal was the biggest unlock — agencies said their clients finally stopped asking 'what's the status?' because they could see everything themselves.",
    highlight: "20 agencies. Zero churn.",
  },
  {
    year: "2026",
    quarter: "Q1",
    icon: Rocket,
    title: "Launched publicly",
    description:
      "After 18 months of building, testing, and iterating with real agencies, Projexia is now live. We're a small team shipping fast, listening to every user, and building the platform we wish we had years ago.",
    highlight: "500+ agencies and counting.",
  },
];

export function OurStory() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Our story
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            From agency chaos to a platform that works
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            Projexia wasn&apos;t born in a boardroom. It was born from the daily
            frustration of running an agency with broken tools.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden sm:block" />

          <div className="space-y-6">
            {milestones.map((milestone, i) => (
              <motion.div
                key={`${milestone.year}-${milestone.quarter}`}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.12 }}
                className="flex gap-5 sm:gap-8"
              >
                {/* Icon circle */}
                <div className="shrink-0 hidden sm:flex flex-col items-center">
                  <div className="size-12 rounded-full bg-white border-2 border-primary/20 flex items-center justify-center relative z-10">
                    <milestone.icon className="size-5 text-primary" />
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1 rounded-xl border border-border bg-white p-5 sm:p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="sm:hidden inline-flex items-center justify-center size-8 rounded-full bg-primary/10">
                      <milestone.icon className="size-4 text-primary" />
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-primary bg-primary/5 rounded-full px-2.5 py-0.5">
                        {milestone.year} {milestone.quarter}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-base font-semibold text-foreground">
                    {milestone.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {milestone.description}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-foreground">
                    {milestone.highlight}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
