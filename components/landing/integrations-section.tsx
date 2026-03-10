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
    <section id="integrations" ref={ref} className="section-padding bg-muted/30">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Integrations
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Works with your favorite tools
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            Seamlessly connect with the tools your team already uses.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {integrations.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-xl border border-border bg-white p-5 flex flex-col items-center gap-3 hover:shadow-md hover:border-primary/20 transition-all duration-300"
            >
              <div className="size-12 rounded-lg bg-muted flex items-center justify-center text-sm font-bold text-muted-foreground">
                {tool.initials}
              </div>
              <span className="text-sm font-medium text-foreground">{tool.name}</span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-6 text-center text-sm text-muted-foreground"
        >
          And 20+ more coming soon
        </motion.p>
      </div>
    </section>
  );
}
