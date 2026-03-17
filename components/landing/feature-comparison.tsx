"use client";

import { Fragment, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Minus } from "lucide-react";

type CellValue = boolean | string;

interface FeatureRow {
  name: string;
  free: CellValue;
  basic: CellValue;
  pro: CellValue;
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
      { name: "Projects", free: "5", basic: "20", pro: "50", enterprise: "Unlimited" },
      { name: "Kanban boards", free: true, basic: true, pro: true, enterprise: true },
      { name: "Gantt timelines", free: false, basic: true, pro: true, enterprise: true },
      { name: "Custom workflows", free: false, basic: false, pro: true, enterprise: true },
      { name: "Milestones", free: true, basic: true, pro: true, enterprise: true },
    ],
  },
  {
    category: "Collaboration",
    features: [
      { name: "Team members", free: "5", basic: "15", pro: "50", enterprise: "Unlimited" },
      { name: "Client portal", free: "1 client", basic: "Unlimited", pro: "Unlimited", enterprise: "Unlimited" },
      { name: "Real-time chat", free: true, basic: true, pro: true, enterprise: true },
      { name: "File sharing", free: true, basic: true, pro: true, enterprise: true },
      { name: "White-label branding", free: false, basic: false, pro: false, enterprise: true },
    ],
  },
  {
    category: "Billing & Time",
    features: [
      { name: "Time tracking", free: false, basic: true, pro: true, enterprise: true },
      { name: "Invoicing", free: false, basic: true, pro: true, enterprise: true },
      { name: "Billable hours reports", free: false, basic: false, pro: true, enterprise: true },
      { name: "Payment integration", free: false, basic: true, pro: true, enterprise: true },
    ],
  },
  {
    category: "Analytics & Reports",
    features: [
      { name: "Basic dashboard", free: true, basic: true, pro: true, enterprise: true },
      { name: "Advanced analytics", free: false, basic: false, pro: true, enterprise: true },
      { name: "Custom reports", free: false, basic: false, pro: true, enterprise: true },
      { name: "CSV exports", free: false, basic: true, pro: true, enterprise: true },
    ],
  },
  {
    category: "Security & Support",
    features: [
      { name: "Storage", free: "1 GB", basic: "10 GB", pro: "50 GB", enterprise: "Unlimited" },
      { name: "SSO", free: false, basic: false, pro: false, enterprise: true },
      { name: "Audit logs", free: false, basic: false, pro: false, enterprise: true },
      { name: "Support", free: "Community", basic: "Email", pro: "Priority", enterprise: "Dedicated" },
      { name: "Custom integrations", free: false, basic: false, pro: false, enterprise: true },
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
      <div className="mx-auto max-w-6xl">
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
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="text-left text-sm font-medium text-muted-foreground p-4 w-[28%]">
                    Feature
                  </th>
                  <th className="text-center text-sm font-medium text-muted-foreground p-4 w-[18%]">
                    Free
                  </th>
                  <th className="text-center text-sm font-medium text-muted-foreground p-4 w-[18%]">
                    Basic
                  </th>
                  <th className="text-center text-sm font-medium text-primary p-4 w-[18%] bg-primary/5">
                    Pro
                  </th>
                  <th className="text-center text-sm font-medium text-muted-foreground p-4 w-[18%]">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((group) => (
                  <Fragment key={group.category}>
                    <tr className="border-b border-border bg-muted/20">
                      <td
                        colSpan={5}
                        className="text-xs font-semibold text-muted-foreground uppercase tracking-wider p-3 px-4"
                      >
                        {group.category}
                      </td>
                    </tr>
                    {group.features.map((feature) => (
                      <tr key={feature.name} className="border-b border-border last:border-b-0">
                        <td className="text-xs sm:text-sm text-foreground p-2 px-3 sm:p-3 sm:px-4">{feature.name}</td>
                        <td className="text-center p-3">
                          <CellContent value={feature.free} />
                        </td>
                        <td className="text-center p-3">
                          <CellContent value={feature.basic} />
                        </td>
                        <td className="text-center p-3 bg-primary/[0.02]">
                          <CellContent value={feature.pro} />
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
