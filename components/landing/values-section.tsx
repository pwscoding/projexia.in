"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, Heart, Eye, Rocket } from "lucide-react";

const values = [
  {
    icon: Sparkles,
    title: "Simplicity first",
    description: "We obsess over removing complexity. Every feature should be intuitive from day one.",
  },
  {
    icon: Heart,
    title: "Agency-obsessed",
    description: "We build for agencies because we were one. Every decision starts with 'How does this help an agency deliver better?'",
  },
  {
    icon: Eye,
    title: "Transparent always",
    description: "No hidden fees, no dark patterns, no surprises. We earn trust through clarity.",
  },
  {
    icon: Rocket,
    title: "Ship fast",
    description: "We release every week. Real user feedback drives what we build next, not roadmap fantasies.",
  },
];

export function ValuesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-muted/30">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Our values
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            What we believe in
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl border border-border bg-white p-6"
            >
              <div className="mb-3 inline-flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary">
                <value.icon className="size-5" />
              </div>
              <h3 className="text-base font-semibold text-foreground">{value.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
