"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Shield, Zap } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Agencies" },
  { icon: Zap, value: "12K+", label: "Projects delivered" },
  { icon: Shield, value: "99.9%", label: "Uptime" },
];

export function TrustBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-6 sm:py-8 border-y border-slate-100 bg-slate-50/50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12"
        >
          <p className="text-sm text-muted-foreground font-medium">
            Trusted by teams at
          </p>
          <div className="flex items-center gap-8 sm:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-2 text-sm">
                <stat.icon className="size-4 text-indigo-500" />
                <span className="font-bold text-foreground">{stat.value}</span>
                <span className="text-muted-foreground hidden sm:inline">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
