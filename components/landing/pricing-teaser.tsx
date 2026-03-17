"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { apiGet, type Plan } from "@/lib/api";

const fallbackPlans: Plan[] = [
  {
    id: "1", name: "Free", slug: "free",
    description: "For small teams getting started",
    maxUsers: 5, maxProjects: 5, storageLimitBytes: "1073741824",
    priceMonthly: 0, priceAnnual: 0, currency: "INR", sortOrder: 0, features: [], trialDays: 0,
  },
  {
    id: "2", name: "Basic", slug: "basic",
    description: "For growing teams",
    maxUsers: 15, maxProjects: 20, storageLimitBytes: "10737418240",
    priceMonthly: 999, priceAnnual: 12999, currency: "INR", sortOrder: 1, features: [], trialDays: 14,
  },
  {
    id: "3", name: "Pro", slug: "pro",
    description: "For agencies that need more power",
    maxUsers: 50, maxProjects: 50, storageLimitBytes: "53687091200",
    priceMonthly: 2999, priceAnnual: 0, currency: "INR", sortOrder: 2, features: [], trialDays: 14,
  },
];

function formatPrice(amount: number): string {
  if (amount === 0) return "Free";
  return new Intl.NumberFormat("en-IN", {
    style: "currency", currency: "INR",
    minimumFractionDigits: 0, maximumFractionDigits: 0,
  }).format(amount);
}

function formatStorage(bytes: string): string {
  const num = parseInt(bytes, 10);
  if (num === 0) return "Unlimited";
  const gb = num / (1024 * 1024 * 1024);
  if (gb >= 1) return `${Math.round(gb)} GB`;
  const mb = num / (1024 * 1024);
  return `${Math.round(mb)} MB`;
}

function formatLimit(val: number): string {
  if (val >= 999999) return "Unlimited";
  return String(val);
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
    <section ref={ref} className="section-padding">
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
          <p className="mt-4 text-muted-foreground text-lg">
            Start free, upgrade when you&apos;re ready.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {plans.map((plan) => {
            const isPopular = plan.slug === "pro";
            return (
              <div
                key={plan.id}
                className={`relative rounded-xl border bg-white p-6 ${
                  isPopular ? "border-primary shadow-lg shadow-primary/10" : "border-border"
                }`}
              >
                {isPopular && (
                  <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-[10px] font-semibold text-white">
                    Popular
                  </span>
                )}
                <div className="text-center mb-4">
                  <p className="text-sm font-medium text-muted-foreground">{plan.name}</p>
                  <p className="mt-2 text-2xl font-bold text-foreground">
                    {formatPrice(plan.priceMonthly)}
                    {plan.priceMonthly > 0 && <span className="text-sm font-normal text-muted-foreground">/mo</span>}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{plan.description}</p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Check className="size-3.5 text-primary shrink-0" />
                    <span className="text-muted-foreground">{formatLimit(plan.maxUsers)} team members</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="size-3.5 text-primary shrink-0" />
                    <span className="text-muted-foreground">{formatLimit(plan.maxProjects)} projects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="size-3.5 text-primary shrink-0" />
                    <span className="text-muted-foreground">{formatStorage(plan.storageLimitBytes)} storage</span>
                  </div>
                </div>
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
