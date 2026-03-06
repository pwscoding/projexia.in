"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const integrations = [
  { name: "Slack", initials: "Sl" },
  { name: "GitHub", initials: "GH" },
  { name: "Figma", initials: "Fi" },
  { name: "Google Drive", initials: "GD" },
  { name: "Zapier", initials: "Za" },
  { name: "Jira", initials: "Ji" },
  { name: "Notion", initials: "No" },
  { name: "Stripe", initials: "St" },
];

export function IntegrationsSection() {
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
            Connects With Your{" "}
            <span className="gradient-text">Favorite Tools</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Seamlessly integrate with the tools your team already uses every day.
          </p>
        </motion.div>

        {/* 2x4 grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {integrations.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass rounded-xl p-5 flex flex-col items-center gap-3 hover:bg-white/[0.08] hover:border-indigo/30 transition-all duration-300 cursor-default"
            >
              <div className="size-12 rounded-lg bg-muted/40 border border-border/50 flex items-center justify-center text-sm font-bold text-muted-foreground">
                {tool.initials}
              </div>
              <span className="text-sm font-medium">{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
