"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Lock, FileCheck, Server } from "lucide-react";

const badges = [
  { icon: Shield, title: "Role-Based Access", description: "5-tier permission system across all portals." },
  { icon: Lock, title: "JWT Authentication", description: "Dual-token auth with auto refresh." },
  { icon: FileCheck, title: "Multi-Tenant", description: "Complete organization data isolation." },
  { icon: Server, title: "Audit Logs", description: "Track every action across your workspace." },
];

export function SecuritySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Security
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Enterprise-grade security
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl border border-border bg-white p-5 text-center"
            >
              <div className="mx-auto mb-3 inline-flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary">
                <badge.icon className="size-5" />
              </div>
              <h3 className="text-xs font-semibold text-foreground">{badge.title}</h3>
              <p className="mt-1 text-[11px] text-muted-foreground">{badge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
