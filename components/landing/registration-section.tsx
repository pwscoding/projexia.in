"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, CreditCard, Lock } from "lucide-react";
import { RegistrationWizard } from "@/components/registration/registration-wizard";

const trustIndicators = [
  { icon: Lock, label: "256-bit encryption" },
  { icon: CreditCard, label: "No credit card required" },
  { icon: Shield, label: "SOC 2 compliant" },
];

export function RegistrationSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="register" ref={ref} className="relative py-24 px-4">
      {/* Radial glow background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] rounded-full bg-indigo/8 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Transform{" "}
            <span className="gradient-text">Your Agency?</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Create your free account in under a minute. No credit card required.
          </p>
        </motion.div>

        {/* Wizard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <RegistrationWizard />
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-6"
        >
          {trustIndicators.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 text-xs text-muted-foreground"
            >
              <item.icon className="size-3.5 text-green-400" />
              {item.label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
