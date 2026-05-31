"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FolderOpen, Clock, MessageSquareX, AlertTriangle } from "lucide-react";
import { ChaosVisual } from "./chaos-visual";

const problems = [
  {
    icon: MessageSquareX,
    text: `A client messages at midnight: "any update?" — for work you finished days ago`,
  },
  {
    icon: FolderOpen,
    text: "Files live in email, WhatsApp, Drive, and three different Slack threads",
  },
  {
    icon: Clock,
    text: "The invoice you sent three weeks ago is still unpaid — and asking again feels awkward",
  },
  {
    icon: AlertTriangle,
    text: "A deadline slipped, and the client noticed before you did",
  },
];

export function ProblemSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Pain points */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-[var(--brand-coral)] uppercase tracking-wider mb-3">
              Sound familiar?
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
              It was supposed to be your business.
              <br className="hidden sm:block" /> It became a group chat.
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              You didn&apos;t start an agency to spend your nights chasing updates,
              files, and payments. But somewhere along the way, that became the job.
            </p>

            <div className="mt-8 space-y-4">
              {problems.map((problem, i) => (
                <motion.div
                  key={problem.text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="shrink-0 mt-0.5 size-8 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center">
                    <problem.icon className="size-4 text-[var(--brand-coral)]" />
                  </div>
                  <p className="text-sm text-foreground font-medium leading-relaxed pt-1">
                    {problem.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Chaos visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative rounded-2xl bg-red-50/50 border border-red-100 p-6 overflow-hidden"
          >
            <ChaosVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
