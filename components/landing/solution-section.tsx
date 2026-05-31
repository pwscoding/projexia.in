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
    title: "They just open the portal and see it",
    description:
      `The whole project — what’s done, what’s next, where it stands. No more "any update?", because the update is already there when they log in.`,
    color: "bg-indigo-50/80 border-indigo-100",
    iconColor: "text-[var(--brand-indigo)]",
  },
  {
    icon: Clock,
    title: "One click to approve. One click to pay.",
    description:
      "Need sign-off? They approve right on the work. Need to get paid? They open the invoice and pay online, instantly. No more awkward follow-up emails.",
    color: "bg-red-50/80 border-red-100",
    iconColor: "text-[var(--brand-coral)]",
  },
  {
    icon: FolderOpen,
    title: "Every file in one place, never lost in a thread",
    description:
      "Upload once, organized by project. Your client always knows where to look — and so do you. Nothing disappears into an email chain again.",
    color: "bg-violet-50/80 border-violet-100",
    iconColor: "text-[var(--brand-violet)]",
  },
  {
    icon: Users,
    title: "A monthly report that makes renewing obvious",
    description:
      `Instead of writing "here's what we did this month" at midnight, send a polished report. Clear proof of the value you delivered.`,
    color: "bg-indigo-50/80 border-indigo-100",
    iconColor: "text-[var(--brand-indigo)]",
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
            So let me show you something different
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            One portal. Your name, your logo, your colors.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            Your client logs in — and everything is right there. Here&apos;s what
            that feels like, on both sides.
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
