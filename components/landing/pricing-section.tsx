"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Shield, Users, HardDrive, Folder } from "lucide-react";
import { cn } from "@/lib/utils";
import { apiGet, type Plan } from "@/lib/api";
import Link from "next/link";

function formatPrice(amount: number): string {
  if (amount === 0) return "Free";
  return new Intl.NumberFormat("en-IN", {
    style: "currency", currency: "INR",
    minimumFractionDigits: 0, maximumFractionDigits: 0,
  }).format(amount);
}

function formatStorage(bytes: string): string {
  const b = BigInt(bytes);
  if (b >= BigInt(1099511627776)) return `${(Number(b) / 1099511627776).toFixed(0)} TB`;
  if (b >= BigInt(1073741824)) return `${(Number(b) / 1073741824).toFixed(0)} GB`;
  return `${(Number(b) / 1048576).toFixed(0)} MB`;
}

export function PricingSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [isAnnual, setIsAnnual] = useState(false);
  const [plans, setPlans] = useState<(Plan & { features?: string[] })[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPlans() {
      try {
        const res = await apiGet<(Plan & { features?: string[] })[]>("/plans/public");
        if (res.success && "data" in res && Array.isArray(res.data)) {
          setPlans(res.data);
        }
      } catch { /* empty */ }
      setLoading(false);
    }
    fetchPlans();
  }, []);

  const popularSlug = "pro";

  return (
    <section id="pricing" ref={ref} className="pt-36 pb-20 sm:pt-40 sm:pb-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Pricing plans
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            Start free and scale as you grow. No hidden fees, cancel anytime.
          </p>

          {/* Segmented toggle */}
          <div className="mt-8 flex items-center justify-center">
            <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-100 p-1">
              <button
                onClick={() => setIsAnnual(true)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-medium transition-all",
                  isAnnual
                    ? "bg-white text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Annual pricing
              </button>
              <button
                onClick={() => setIsAnnual(false)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-medium transition-all",
                  !isAnnual
                    ? "bg-white text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Monthly pricing
              </button>
            </div>
          </div>
        </motion.div>

        {/* Loading skeleton */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 animate-pulse">
                <div className="space-y-4">
                  <div className="h-5 bg-slate-100 rounded w-24" />
                  <div className="h-3 bg-slate-100 rounded w-full" />
                  <div className="h-9 bg-slate-100 rounded w-28 mt-4" />
                  <div className="h-11 bg-slate-100 rounded-full w-full mt-4" />
                  <div className="space-y-2 mt-4">
                    <div className="h-3 bg-slate-50 rounded w-full" />
                    <div className="h-3 bg-slate-50 rounded w-3/4" />
                    <div className="h-3 bg-slate-50 rounded w-5/6" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pricing cards */}
        {!loading && plans.length > 0 && (
          <div className={cn(
            "grid grid-cols-1 sm:grid-cols-2 gap-5 items-start",
            plans.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"
          )}>
            {plans.map((plan, i) => {
              const isPopular = plan.slug === popularSlug;
              const isEnterprise = plan.slug === "enterprise";
              const price = isAnnual ? plan.priceAnnual : plan.priceMonthly;
              const features = plan.features || [];

              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={cn(
                    "relative rounded-2xl flex flex-col bg-white border p-6 hover-lift",
                    isPopular
                      ? "border-indigo-200 ring-1 ring-indigo-500/20 shadow-xl shadow-indigo-500/5"
                      : "border-slate-200 shadow-sm"
                  )}
                >
                  {isPopular && (
                    <span className="absolute -top-3 left-6 rounded-full bg-indigo-600 px-3 py-1 text-[11px] font-semibold text-white">
                      Most popular
                    </span>
                  )}

                  {/* Plan name + description */}
                  <h3 className="text-lg font-bold text-foreground">{plan.name} plan</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mt-6 mb-6">
                    {isEnterprise && price === 0 ? (
                      <span className="text-3xl font-bold text-foreground">Custom</span>
                    ) : (
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-foreground">
                          {formatPrice(price)}
                        </span>
                        {price > 0 && (
                          <span className="text-sm text-muted-foreground">
                            per {isAnnual ? "year" : "month"}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* CTA button — pill style */}
                  {isPopular ? (
                    <Link
                      href={`/register?plan=${plan.slug}`}
                      className="flex items-center justify-center w-full h-11 rounded-full bg-indigo-600 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors"
                    >
                      {price === 0 ? "Get Started Free" : `Start ${plan.trialDays}-day Free Trial`}
                    </Link>
                  ) : (
                    <Link
                      href={`/register?plan=${plan.slug}`}
                      className="flex items-center justify-center w-full h-11 rounded-full border border-slate-200 text-sm font-semibold text-foreground hover:bg-slate-50 transition-colors"
                    >
                      {price === 0 ? "Get Started Free" : `Start ${plan.trialDays}-day Free Trial`}
                    </Link>
                  )}
                  <p className="mt-2 text-center text-xs text-muted-foreground">
                    {price === 0
                      ? "No credit card required"
                      : `${plan.trialDays}-day free trial, cancel anytime`}
                  </p>

                  {/* Divider */}
                  <div className="my-5 h-px bg-slate-100" />

                  {/* Key limits from backend */}
                  <div className="space-y-3 mb-5">
                    <div className="flex items-center gap-2.5 text-sm">
                      <Users className="size-4 text-slate-400 shrink-0" />
                      <span className="text-foreground font-medium">
                        {plan.maxUsers >= 999999 ? "Unlimited" : plan.maxUsers}
                      </span>
                      <span className="text-muted-foreground">team members</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-sm">
                      <Folder className="size-4 text-slate-400 shrink-0" />
                      <span className="text-foreground font-medium">
                        {plan.maxProjects >= 999999 ? "Unlimited" : plan.maxProjects}
                      </span>
                      <span className="text-muted-foreground">projects</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-sm">
                      <HardDrive className="size-4 text-slate-400 shrink-0" />
                      <span className="text-foreground font-medium">
                        {BigInt(plan.storageLimitBytes) >= BigInt(107374182400) ? "Unlimited" : formatStorage(plan.storageLimitBytes)}
                      </span>
                      <span className="text-muted-foreground">storage</span>
                    </div>
                  </div>

                  {/* Feature list from backend */}
                  <ul className="space-y-2.5 flex-1">
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <Check className="size-4 mt-0.5 text-indigo-500 shrink-0" />
                        <span className="text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Money-back guarantee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground"
        >
          <Shield className="size-4 text-green-600" />
          {Math.max(...plans.map((p) => p.trialDays || 14))}-day money-back guarantee on all paid plans
        </motion.div>
      </div>
    </section>
  );
}
