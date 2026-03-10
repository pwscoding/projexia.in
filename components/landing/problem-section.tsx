"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle2, FolderOpen, Clock, MessageSquareX, AlertTriangle } from "lucide-react";
import { ChaosVisual } from "./chaos-visual";
import Link from "next/link";

const problems = [
  {
    icon: FolderOpen,
    text: "Your team has 7 browser tabs open right now",
  },
  {
    icon: MessageSquareX,
    text: "Your last client email had 14 people CC'd",
  },
  {
    icon: Clock,
    text: "Nobody knows how many billable hours were lost last week",
  },
  {
    icon: AlertTriangle,
    text: "A deadline slipped and the client found out before you did",
  },
];

const solutions = [
  { icon: CheckCircle2, text: "All projects in one place" },
  { icon: CheckCircle2, text: "Clients love the portal" },
  { icon: CheckCircle2, text: "Every hour tracked & billed" },
];

export function ProblemSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="mx-auto max-w-6xl">
        {/* Problem half — asymmetric two-column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Pain points */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-red-500 uppercase tracking-wider mb-3">
              Sound familiar?
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
              Running an agency shouldn&apos;t feel this hard
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Most agencies lose hours every week to disorganized workflows.
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
                    <problem.icon className="size-4 text-red-500" />
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

        {/* Solution half — centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-green-50 border border-green-200 px-4 py-1.5 text-sm font-medium text-green-700 mb-6">
            <span className="size-2 rounded-full bg-green-500" />
            There&apos;s a better way
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
            Projexia brings it all together
          </h3>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
            {solutions.map((sol) => (
              <div
                key={sol.text}
                className="flex items-center gap-2 text-sm font-medium text-foreground"
              >
                <sol.icon className="size-5 text-green-600" />
                {sol.text}
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/features"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              See all features
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
