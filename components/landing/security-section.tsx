"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Shield,
  Lock,
  FileCheck,
  Server,
  Eye,
  KeyRound,
  Database,
  RefreshCw,
} from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "256-bit Encryption",
    description: "All data encrypted in transit (TLS 1.3) and at rest (AES-256).",
  },
  {
    icon: KeyRound,
    title: "JWT Authentication",
    description: "Dual-token auth with 15m access tokens and automatic refresh.",
  },
  {
    icon: Database,
    title: "Multi-Tenant Isolation",
    description: "Complete data separation per organization. No cross-tenant leaks.",
  },
  {
    icon: Shield,
    title: "Role-Based Access",
    description: "5-tier permission system: Owner, Admin, Manager, Member, Viewer.",
  },
  {
    icon: Eye,
    title: "Audit Logging",
    description: "Every action tracked with timestamp, user, and IP address.",
  },
  {
    icon: FileCheck,
    title: "Session Management",
    description: "View active sessions, revoke access remotely, enforce re-auth.",
  },
  {
    icon: Server,
    title: "99.9% Uptime",
    description: "Hosted on reliable infrastructure with automated failover.",
  },
  {
    icon: RefreshCw,
    title: "Daily Backups",
    description: "Automated daily backups with point-in-time recovery.",
  },
];

export function SecuritySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Security & Trust
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Your data is safe. Period.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            Security isn&apos;t a feature we bolt on — it&apos;s built into
            every layer of the platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {securityFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-xl border border-border bg-white p-5"
            >
              <div className="mb-3 inline-flex items-center justify-center size-9 rounded-lg bg-foreground/5 text-foreground">
                <feature.icon className="size-4.5" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
