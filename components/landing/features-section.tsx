"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  CheckSquare,
  Users,
  Clock,
  MessageSquare,
  BarChart3,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: CheckSquare,
    title: "Task Management",
    description:
      "Create, assign, and track tasks with powerful Kanban boards, list views, and custom workflows tailored to your agency.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Invite team members and clients to collaborate in real-time. Shared files, comments, and activity feeds keep everyone aligned.",
  },
  {
    icon: Clock,
    title: "Time Tracking",
    description:
      "Track time spent on tasks and projects with one-click timers. Generate detailed timesheets and billable-hour reports.",
  },
  {
    icon: MessageSquare,
    title: "Client Portal",
    description:
      "Give clients a branded portal to view progress, approve deliverables, and share feedback — no account needed.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    description:
      "Get actionable insights with project health dashboards, team utilization reports, and revenue analytics.",
  },
  {
    icon: Zap,
    title: "Automations",
    description:
      "Automate repetitive workflows like status updates, assignments, and notifications so your team can focus on delivery.",
  },
];

export function FeaturesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" ref={ref} className="relative py-24 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            Everything You Need to{" "}
            <span className="gradient-text">Deliver Excellence</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Powerful features designed for agencies that want to streamline
            operations and delight clients.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group gradient-border glass rounded-xl p-6 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-4 inline-flex items-center justify-center size-12 rounded-lg bg-indigo/10 text-indigo">
                <feature.icon className="size-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
              {/* Feature screenshot placeholder */}
              <div className="mt-4 h-24 rounded-lg bg-muted/20 border border-border/30 flex items-center justify-center">
                <span className="text-xs text-muted-foreground/50">Preview</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
