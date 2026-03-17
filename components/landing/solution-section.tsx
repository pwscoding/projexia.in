"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  LayoutDashboard,
  FolderOpen,
  Clock,
  Users,
} from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    title: "Cut 90% of status emails with Client Portals",
    description:
      "Give every client a branded portal to view progress, approve deliverables, and pay invoices — without a single status email.",
    color: "bg-blue-50 border-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: FolderOpen,
    title: "Never lose a file again",
    description:
      "One place for all project files. Upload, organize by project, and share with clients. No more digging through email attachments.",
    color: "bg-amber-50 border-amber-100",
    iconColor: "text-amber-600",
  },
  {
    icon: Clock,
    title: "Turn tracked hours into revenue automatically",
    description:
      "Track billable hours, monitor project progress, hit milestones on time, and turn tracked time into invoices automatically.",
    color: "bg-green-50 border-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: Users,
    title: "Give every team member clarity, not confusion",
    description:
      "Assign tasks, manage roles, and give your team their own focused workspace. Everyone knows what to do and when.",
    color: "bg-purple-50 border-purple-100",
    iconColor: "text-purple-600",
  },
];

export function SolutionSection() {
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
            The Solution
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Everything your agency needs, in one place
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            Replace your scattered stack with a single platform built for agencies, freelancers, and teams.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-xl border p-6 sm:p-8 card-interactive ${feature.color}`}
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 size-10 rounded-xl bg-white border border-border flex items-center justify-center">
                  <feature.icon className={`size-5 ${feature.iconColor}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
