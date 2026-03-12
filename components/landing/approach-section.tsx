"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Layers,
  Zap,
  Users,
  BarChart3,
  Paintbrush,
  HeartHandshake,
} from "lucide-react";

const differentiators = [
  {
    icon: Layers,
    title: "All-in-one, not all-at-once",
    description:
      "Start with projects. Add time tracking when ready. Turn on invoicing later. Projexia grows with you instead of overwhelming you on day one.",
  },
  {
    icon: Paintbrush,
    title: "Your brand, not ours",
    description:
      "Your clients see your logo, your colors, your domain. White-label portals mean your agency looks polished — Projexia stays invisible.",
  },
  {
    icon: Users,
    title: "Three portals, one platform",
    description:
      "Agency dashboard for you. Client portal for them. Team portal for your people. Everyone gets exactly what they need, nothing they don't.",
  },
  {
    icon: Zap,
    title: "Setup in minutes, not weeks",
    description:
      "No consultants, no migration specialists, no 30-day onboarding. Create an account, invite your team, and start managing projects today.",
  },
  {
    icon: BarChart3,
    title: "Built for Indian agencies",
    description:
      "Pricing in INR, Razorpay for payments, GST-ready invoicing, and support during IST hours. We understand the Indian agency landscape.",
  },
  {
    icon: HeartHandshake,
    title: "Free tier that's actually free",
    description:
      "Not a 14-day trial. Not a crippled version. A real free plan for small agencies with real features, forever. Upgrade when you're ready.",
  },
];

export function ApproachSection() {
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
            How we&apos;re different
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Not another project management tool
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            There are hundreds of PM tools. Here&apos;s why agencies choose
            Projexia over the rest.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {differentiators.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl border border-border bg-white p-6"
            >
              <div className="mb-3 inline-flex items-center justify-center size-9 rounded-lg bg-primary/10 text-primary">
                <item.icon className="size-4.5" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
