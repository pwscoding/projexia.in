"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { apiGet, type Plan } from "@/lib/api";
import Link from "next/link";

const featuresBySlug: Record<string, string[]> = {
  starter: [
    "Up to 3 projects",
    "2 team members",
    "Basic task management",
    "Client portal (1 client)",
    "1 GB storage",
    "Community support",
  ],
  professional: [
    "Unlimited projects",
    "Up to 15 team members",
    "Advanced task & time tracking",
    "Unlimited client portals",
    "Analytics & reports",
    "10 GB storage",
    "Priority support",
  ],
  enterprise: [
    "Everything in Professional",
    "Unlimited team members",
    "Custom automations",
    "SSO & advanced security",
    "Unlimited storage",
    "Dedicated account manager",
    "Custom integrations",
  ],
};

const fallbackPlans: Plan[] = [
  {
    id: "1", name: "Starter", slug: "starter",
    description: "Perfect for freelancers and small teams getting started.",
    maxUsers: 2, maxProjects: 3, storageLimitBytes: "1073741824",
    priceMonthly: 0, priceAnnual: 0, currency: "INR", sortOrder: 0,
  },
  {
    id: "2", name: "Professional", slug: "professional",
    description: "For growing agencies that need more power and flexibility.",
    maxUsers: 15, maxProjects: 999, storageLimitBytes: "10737418240",
    priceMonthly: 2499, priceAnnual: 23990, currency: "INR", sortOrder: 1,
  },
  {
    id: "3", name: "Enterprise", slug: "enterprise",
    description: "For large agencies with advanced needs and custom workflows.",
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

export function PricingSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [isAnnual, setIsAnnual] = useState(false);
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

  const popularSlug = "professional";

  return (
    <section id="pricing" ref={ref} className="pt-36 pb-20 sm:pt-40 sm:pb-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            Start free and scale as you grow. No hidden fees, cancel anytime.
          </p>

          {/* Toggle */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className={cn("text-sm transition-colors", !isAnnual ? "text-foreground font-medium" : "text-muted-foreground")}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={cn(
                "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
                isAnnual ? "bg-primary" : "bg-border"
              )}
              aria-label="Toggle annual billing"
            >
              <span className={cn(
                "inline-block size-4 rounded-full bg-white transition-transform shadow-sm",
                isAnnual ? "translate-x-6" : "translate-x-1"
              )} />
            </button>
            <span className={cn("text-sm transition-colors", isAnnual ? "text-foreground font-medium" : "text-muted-foreground")}>
              Annual
            </span>
            <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700">
              Save 20%
            </span>
          </div>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-start">
          {plans.map((plan, i) => {
            const isPopular = plan.slug === popularSlug;
            const price = isAnnual ? plan.priceAnnual : plan.priceMonthly;
            const features = featuresBySlug[plan.slug] || [];

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={cn(
                  "relative rounded-xl p-5 sm:p-6 flex flex-col bg-white border",
                  isPopular
                    ? "border-primary shadow-xl shadow-primary/10 md:scale-[1.02] lg:scale-105"
                    : "border-border"
                )}
              >
                {isPopular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                )}

                <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>

                <div className="mt-6 mb-6">
                  <span className="text-4xl font-bold text-foreground">{formatPrice(price)}</span>
                  {price > 0 && (
                    <span className="text-muted-foreground">/{isAnnual ? "yr" : "mo"}</span>
                  )}
                </div>

                <ul className="space-y-3 flex-1">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check className="size-4 mt-0.5 text-primary shrink-0" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  variant={isPopular ? "default" : "outline"}
                  className={cn("mt-8 w-full", isPopular && "shadow-lg shadow-primary/25")}
                >
                  <Link href="/register">
                    {price === 0 ? "Get Started" : "Start Free Trial"}
                  </Link>
                </Button>
              </motion.div>
            );
          })}
        </div>

        {/* Money-back guarantee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground"
        >
          <Shield className="size-4 text-green-600" />
          14-day money-back guarantee on all paid plans
        </motion.div>
      </div>
    </section>
  );
}
