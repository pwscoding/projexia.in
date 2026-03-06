"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { UserPlus, Settings, Rocket } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    number: "01",
    title: "Sign Up",
    description: "Create your account in seconds. No credit card required.",
    time: "~30 seconds",
  },
  {
    icon: Settings,
    number: "02",
    title: "Setup Workspace",
    description:
      "Configure your workspace, invite your team, and connect tools.",
    time: "~2 minutes",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Start Delivering",
    description:
      "Create projects, assign tasks, and start delivering results to clients.",
    time: "Immediately",
  },
];

export function HowItWorksSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" ref={ref} className="relative py-24 px-4">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            Get Started in{" "}
            <span className="gradient-text">3 Simple Steps</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            From sign-up to delivering your first project in minutes, not days.
          </p>
        </motion.div>

        {/* Steps - horizontal on desktop, vertical on mobile */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Connector line - desktop */}
          <div className="hidden md:block absolute top-12 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-0.5">
            <motion.div
              className="h-full bg-gradient-to-r from-indigo to-purple rounded-full"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              style={{ transformOrigin: "left" }}
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="relative flex flex-col items-center text-center"
            >
              {/* Glass card wrapper */}
              <div className="glass rounded-xl p-6 w-full">
                {/* Number circle */}
                <div className="relative z-10 mx-auto mb-4 flex items-center justify-center size-20 rounded-full bg-gradient-to-br from-indigo/20 to-purple/10 border border-indigo/30">
                  <step.icon className="size-7 text-indigo" />
                  <span className="absolute -top-1 -right-1 flex items-center justify-center size-7 rounded-full bg-indigo text-xs font-bold text-white">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                  {step.description}
                </p>

                {/* Time estimate badge */}
                <div className="mt-4 inline-flex items-center rounded-full bg-indigo/10 px-3 py-1 text-xs font-medium text-indigo">
                  {step.time}
                </div>
              </div>

              {/* Connector line - mobile (between items) */}
              {i < steps.length - 1 && (
                <div className="md:hidden w-0.5 h-8 mt-4 bg-gradient-to-b from-indigo to-purple rounded-full" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
