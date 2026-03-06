"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Lock, FileCheck, Server } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "SOC 2 Compliant",
    description: "Rigorous security controls verified by independent auditors.",
  },
  {
    icon: Lock,
    title: "AES-256 Encryption",
    description: "All data encrypted at rest and in transit with industry standards.",
  },
  {
    icon: FileCheck,
    title: "GDPR Ready",
    description: "Full compliance with data protection regulations for EU customers.",
  },
  {
    icon: Server,
    title: "99.9% Uptime SLA",
    description: "Enterprise-grade infrastructure with guaranteed availability.",
  },
];

export function SecuritySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 px-4">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            Security &{" "}
            <span className="gradient-text">Compliance</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Your data is protected by enterprise-grade security at every layer.
          </p>
        </motion.div>

        {/* Trust badges grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass rounded-xl p-6 text-center"
            >
              <div className="mx-auto mb-4 inline-flex items-center justify-center size-12 rounded-lg bg-indigo/10 text-indigo">
                <badge.icon className="size-6" />
              </div>
              <h3 className="text-sm font-semibold mb-1">{badge.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {badge.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
