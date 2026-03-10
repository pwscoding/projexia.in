"use client";

import { Fragment, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

type CellValue = boolean | string;

interface FeatureRow {
  name: string;
  starter: CellValue;
  professional: CellValue;
  enterprise: CellValue;
}

interface FeatureCategory {
  category: string;
  features: FeatureRow[];
}

const comparisonData: FeatureCategory[] = [
  {
    category: "Project Management",
    features: [
      { name: "Projects", starter: "3", professional: "Unlimited", enterprise: "Unlimited" },
      { name: "Kanban boards", starter: true, professional: true, enterprise: true },
      { name: "Gantt timelines", starter: false, professional: true, enterprise: true },
      { name: "Custom workflows", starter: false, professional: true, enterprise: true },
      { name: "Milestones", starter: true, professional: true, enterprise: true },
    ],
  },
  {
    category: "Collaboration",
    features: [
      { name: "Team members", starter: "2", professional: "15", enterprise: "Unlimited" },
      { name: "Client portal", starter: "1 client", professional: "Unlimited", enterprise: "Unlimited" },
      { name: "Real-time chat", starter: true, professional: true, enterprise: true },
      { name: "File sharing", starter: true, professional: true, enterprise: true },
      { name: "White-label branding", starter: false, professional: false, enterprise: true },
    ],
  },
  {
    category: "Billing & Time",
    features: [
      { name: "Time tracking", starter: false, professional: true, enterprise: true },
      { name: "Invoicing", starter: false, professional: true, enterprise: true },
      { name: "Billable hours reports", starter: false, professional: true, enterprise: true },
      { name: "Payment integration", starter: false, professional: true, enterprise: true },
    ],
  },
  {
    category: "Security & Support",
    features: [
      { name: "Storage", starter: "1 GB", professional: "10 GB", enterprise: "Unlimited" },
      { name: "SSO", starter: false, professional: false, enterprise: true },
      { name: "Audit logs", starter: false, professional: false, enterprise: true },
      { name: "Support", starter: "Community", professional: "Priority", enterprise: "Dedicated" },
      { name: "Custom integrations", starter: false, professional: false, enterprise: true },
    ],
  },
];

function CellContent({ value }: { value: CellValue }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="size-4 text-green-600 mx-auto" />
    ) : (
      <Minus className="size-4 text-muted-foreground/40 mx-auto" />
    );
  }
  return <span className="text-sm text-foreground font-medium">{value}</span>;
}

export function FeatureComparison() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Compare all features
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-xl border border-border bg-white overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              {/* Header */}
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="text-left text-sm font-medium text-muted-foreground p-4 w-[40%]">
                    Feature
                  </th>
                  <th className="text-center text-sm font-medium text-muted-foreground p-4 w-[20%]">
                    Starter
                  </th>
                  <th className="text-center text-sm font-medium text-primary p-4 w-[20%] bg-primary/5">
                    Professional
                  </th>
                  <th className="text-center text-sm font-medium text-muted-foreground p-4 w-[20%]">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((group) => (
                  <Fragment key={group.category}>
                    <tr className="border-b border-border bg-muted/20">
                      <td
                        colSpan={4}
                        className="text-xs font-semibold text-muted-foreground uppercase tracking-wider p-3 px-4"
                      >
                        {group.category}
                      </td>
                    </tr>
                    {group.features.map((feature) => (
                      <tr key={feature.name} className="border-b border-border last:border-b-0">
                        <td className="text-xs sm:text-sm text-foreground p-2 px-3 sm:p-3 sm:px-4">{feature.name}</td>
                        <td className="text-center p-3">
                          <CellContent value={feature.starter} />
                        </td>
                        <td className="text-center p-3 bg-primary/[0.02]">
                          <CellContent value={feature.professional} />
                        </td>
                        <td className="text-center p-3">
                          <CellContent value={feature.enterprise} />
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
