"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Building2,
  Users,
  FolderKanban,
  Rocket,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Building2,
    title: "Create your workspace",
    description:
      "Sign up in under 2 minutes. Set your agency name, upload your logo, pick your brand colors, and you're live. No credit card needed.",
    detail: "Free forever plan available",
  },
  {
    number: "02",
    icon: Users,
    title: "Invite your team & clients",
    description:
      "Send email invites to team members with role assignments. Add clients and give them portal access with a single click.",
    detail: "Role-based access control built in",
  },
  {
    number: "03",
    icon: FolderKanban,
    title: "Manage projects & track time",
    description:
      "Create projects from scratch or templates. Assign tasks, track milestones, log time, and share updates with clients automatically.",
    detail: "Kanban, Gantt, list & table views",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Invoice, report, repeat",
    description:
      "Generate invoices from tracked time, accept payments online, send reports to clients, and scale your agency with confidence.",
    detail: "Razorpay payments + PDF invoices",
  },
];

export function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding bg-muted/30">
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
            Up and running in minutes, not days
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            Getting started with Projexia is simple. No complex setup, no migration headaches.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <div className="hidden lg:block absolute top-10 left-[calc(100%+0.25rem)] w-[calc(100%-2rem)] h-px">
                  <div className="w-full h-px bg-border" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 size-1.5 rounded-full bg-primary/40" />
                </div>
              )}

              <div className="rounded-xl border border-border bg-white p-6 h-full">
                {/* Step number */}
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
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {step.description}
                </p>

                {/* Detail badge */}
                <span className="inline-flex items-center rounded-full bg-primary/5 border border-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {step.detail}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
