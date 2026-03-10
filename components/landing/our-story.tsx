"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const milestones = [
  {
    year: "2024",
    title: "The frustration that started it all",
    description: "We ran an agency and used 7 different tools daily — Slack, Asana, Harvest, Google Drive, and more. Switching between them was killing our productivity.",
  },
  {
    year: "2025",
    title: "Built the first version",
    description: "We decided to build what we wished existed — one platform for projects, clients, time tracking, and invoicing. We became our own first user.",
  },
  {
    year: "2026",
    title: "Launched publicly",
    description: "After months of building and iterating, Projexia is now live. We're a small team with big ambitions, shipping fast and listening to every user.",
  },
];

export function OurStory() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

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
            From agency frustration to the platform we wished existed
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[23px] top-0 bottom-0 w-px bg-border hidden sm:block" />

          <div className="space-y-8">
            {milestones.map((milestone, i) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className="flex gap-6"
              >
                {/* Year dot */}
                <div className="shrink-0 hidden sm:flex flex-col items-center">
                  <div className="size-12 rounded-full bg-white border-2 border-primary flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">{milestone.year}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 rounded-xl border border-border bg-white p-5">
                  <span className="sm:hidden text-xs font-bold text-primary">{milestone.year}</span>
                  <h3 className="text-base font-semibold text-foreground sm:mt-0 mt-1">
                    {milestone.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {milestone.description}
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
