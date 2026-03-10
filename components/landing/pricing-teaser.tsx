"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { apiGet, type Plan } from "@/lib/api";

const fallbackPlans: Plan[] = [
  {
    id: "1", name: "Starter", slug: "starter",
    description: "For small teams",
    maxUsers: 2, maxProjects: 3, storageLimitBytes: "1073741824",
    priceMonthly: 0, priceAnnual: 0, currency: "INR", sortOrder: 0,
  },
  {
    id: "2", name: "Professional", slug: "professional",
    description: "For growing agencies",
    maxUsers: 15, maxProjects: 999, storageLimitBytes: "10737418240",
    priceMonthly: 2499, priceAnnual: 23990, currency: "INR", sortOrder: 1,
  },
  {
    id: "3", name: "Enterprise", slug: "enterprise",
    description: "For large teams",
    maxUsers: 999, maxProjects: 999, storageLimitBytes: "0",
    priceMonthly: 7999, priceAnnual: 76790, currency: "INR", sortOrder: 2,
  },
];

function formatPrice(amount: number): string {
  if (amount === 0) return "Free";
  return new Intl.NumberFormat("en-IN", {
    style: "currency", currency: "INR",
    minimumFractionDigits: 0, maximumFractionDigits: 0,
  }).format(amount);
}

export function PricingTeaser() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [plans, setPlans] = useState<Plan[]>(fallbackPlans);

  useEffect(() => {
    async function fetchPlans() {
      try {
        const res = await apiGet<Plan[]>("/plans/public");
        if (res.success && "data" in res && Array.isArray(res.data)) {
          setPlans(res.data);
        }
      } catch { /* Keep fallback */ }
    }
    fetchPlans();
  }, []);

  return (
    <section ref={ref} className="section-padding bg-muted/30">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Simple pricing that scales with you
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {plans.map((plan) => {
            const isPopular = plan.slug === "professional";
            return (
              <div
                key={plan.id}
                className={`relative rounded-xl border bg-white p-5 text-center ${
                  isPopular ? "border-primary shadow-lg shadow-primary/10" : "border-border"
                }`}
              >
                {isPopular && (
                  <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-[10px] font-semibold text-white">
                    Popular
                  </span>
                )}
                <p className="text-sm font-medium text-muted-foreground">{plan.name}</p>
                <p className="mt-2 text-2xl font-bold text-foreground">
                  {formatPrice(plan.priceMonthly)}
                  {plan.priceMonthly > 0 && <span className="text-sm font-normal text-muted-foreground">/mo</span>}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{plan.description}</p>
              </div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <Link
            href="/pricing"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            Compare all plans
            <ArrowRight className="size-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
