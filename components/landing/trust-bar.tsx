"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { IndianRupee, Clock, CreditCard } from "lucide-react";

const highlights = [
  { icon: IndianRupee, label: "Free forever plan" },
  { icon: Clock, label: "2 minute setup" },
  { icon: CreditCard, label: "No credit card required" },
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
            Built by an agency, for agencies
          </p>
          <div className="flex items-center gap-8 sm:gap-12">
            {highlights.map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-sm">
                <item.icon className="size-4 text-indigo-500" />
                <span className="text-muted-foreground font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
