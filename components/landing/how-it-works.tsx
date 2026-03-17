"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  UserPlus,
  FolderKanban,
  BarChart3,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Add your client",
    description:
      "Create a client profile, send a portal invite, and they get instant access to a branded dashboard — all in under a minute.",
  },
  {
    number: "02",
    icon: FolderKanban,
    title: "Assign a project",
    description:
      "Set up a project from scratch or use a template. Add tasks, assign team members, set milestones, and share it with the client.",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Track progress",
    description:
      "Monitor timelines, log hours, send updates, and invoice — all from one place. Your client sees progress in real time.",
  },
];

export function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            How it works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Up and running in minutes
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            Three simple steps to organize your agency.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[calc(100%+0.25rem)] w-[calc(100%-2rem)] h-px">
                  <div className="w-full h-px bg-border" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 size-1.5 rounded-full bg-primary/40" />
                </div>
              )}

              <div className="rounded-xl border border-border bg-white p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <step.icon className="size-5 text-primary" />
                  </div>
                  <span className="text-xs font-bold text-primary/50 uppercase tracking-wider">
                    Step {step.number}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
