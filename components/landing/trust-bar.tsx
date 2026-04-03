"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Globe, Zap, Server } from "lucide-react";

const trustItems = [
  { icon: Shield, label: "SOC 2 practices" },
  { icon: Globe, label: "White-label ready" },
  { icon: Zap, label: "2 minute setup" },
  { icon: Server, label: "Indian data residency" },
];

export function TrustBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-6 sm:py-8 border-y border-slate-100 bg-slate-50/50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10"
        >
          <p className="text-sm text-slate-900 font-semibold whitespace-nowrap">
            Trusted by agencies &amp; freelancers across India
          </p>
          <div className="h-4 w-px bg-slate-200 hidden sm:block" />
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {trustItems.map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-sm">
                <item.icon className="size-4 text-[var(--brand-indigo)]" />
                <span className="text-muted-foreground font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
