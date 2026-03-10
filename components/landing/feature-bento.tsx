"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  LayoutGrid,
  Globe,
  Clock,
  Receipt,
  Users,
  MessageSquare,
  BarChart3,
  Shield,
  ArrowRight,
  Check,
  Kanban,
  GanttChart,
  ListChecks,
  Milestone,
  Copy,
  Palette,
  ClipboardCheck,
  FileText,
  FolderOpen,
  Timer,
  CalendarDays,
  BadgeCheck,
  CreditCard,
  FileDown,
  Repeat,
  UserPlus,
  KeyRound,
  Eye,
  HeadphonesIcon,
  TicketIcon,
  MessagesSquare,
  Star,
  TrendingUp,
  PieChart,
  Activity,
  Lock,
  ServerCog,
  ScrollText,
  Settings,
} from "lucide-react";
import Link from "next/link";

const featureCategories = [
  {
    icon: LayoutGrid,
    title: "Project Management",
    description:
      "Manage every aspect of your projects with flexible views and powerful tools.",
    color: "from-blue-500/10 to-blue-600/5",
    borderColor: "border-blue-200/60",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    size: "large",
    details: [
      { icon: Kanban, text: "Kanban board with drag-and-drop" },
      { icon: GanttChart, text: "Gantt chart timeline view" },
      { icon: ListChecks, text: "List and table views" },
      { icon: Milestone, text: "Milestone tracking with deadlines" },
      { icon: Copy, text: "Project templates and cloning" },
      { icon: Activity, text: "Project health monitoring" },
    ],
  },
  {
    icon: Globe,
    title: "Client Portal",
    description:
      "A dedicated, branded space for clients to stay informed and take action.",
    color: "from-indigo-500/10 to-indigo-600/5",
    borderColor: "border-indigo-200/60",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    size: "large",
    details: [
      { icon: Palette, text: "White-label with your brand colors & logo" },
      { icon: ClipboardCheck, text: "One-click approvals with annotations" },
      { icon: FileText, text: "Project updates and status feed" },
      { icon: FolderOpen, text: "Shared file browser with uploads" },
      { icon: Receipt, text: "Online invoice payments (Razorpay)" },
      { icon: Star, text: "Guided onboarding tour for clients" },
    ],
  },
  {
    icon: Clock,
    title: "Time Tracking",
    description:
      "Track every billable minute with timers, manual entries, and approval workflows.",
    color: "from-emerald-500/10 to-emerald-600/5",
    borderColor: "border-emerald-200/60",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    size: "medium",
    details: [
      { icon: Timer, text: "One-click start/stop timer" },
      { icon: CalendarDays, text: "Daily timesheets with duration" },
      { icon: BadgeCheck, text: "Manager approval workflow" },
      { icon: FileDown, text: "Manual time entry with notes" },
    ],
  },
  {
    icon: Receipt,
    title: "Invoicing & Payments",
    description:
      "Generate invoices, accept online payments, and manage retainer billing.",
    color: "from-amber-500/10 to-amber-600/5",
    borderColor: "border-amber-200/60",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    size: "medium",
    details: [
      { icon: CreditCard, text: "Razorpay payment integration" },
      { icon: FileDown, text: "Auto-generated PDF invoices" },
      { icon: Repeat, text: "Retainer-based recurring billing" },
      { icon: TrendingUp, text: "Payment tracking & revenue analytics" },
    ],
  },
  {
    icon: Users,
    title: "Team Management",
    description:
      "Invite members, assign roles, and manage your entire team from one place.",
    color: "from-purple-500/10 to-purple-600/5",
    borderColor: "border-purple-200/60",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    size: "medium",
    details: [
      { icon: UserPlus, text: "Email-based team invitations" },
      { icon: KeyRound, text: "5-tier role system (Owner to Viewer)" },
      { icon: Eye, text: "Granular permission control" },
      { icon: Activity, text: "Team capacity and workload view" },
    ],
  },
  {
    icon: MessageSquare,
    title: "Communication",
    description:
      "Built-in messaging, support tickets, and notification system for seamless collaboration.",
    color: "from-rose-500/10 to-rose-600/5",
    borderColor: "border-rose-200/60",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
    size: "medium",
    details: [
      { icon: MessagesSquare, text: "Real-time chat rooms" },
      { icon: TicketIcon, text: "Support ticket system" },
      { icon: HeadphonesIcon, text: "Satisfaction ratings on tickets" },
      { icon: Star, text: "Email notification preferences" },
    ],
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    description:
      "Data-driven insights for project health, team performance, and revenue.",
    color: "from-cyan-500/10 to-cyan-600/5",
    borderColor: "border-cyan-200/60",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-600",
    size: "medium",
    details: [
      { icon: PieChart, text: "Project health dashboards" },
      { icon: TrendingUp, text: "Revenue & expense tracking" },
      { icon: FileText, text: "Custom client reports (JSON)" },
      { icon: Activity, text: "Team utilization metrics" },
    ],
  },
  {
    icon: Shield,
    title: "Security & Admin",
    description:
      "Enterprise-grade security with multi-tenant architecture and full audit trails.",
    color: "from-slate-500/10 to-slate-600/5",
    borderColor: "border-slate-200/60",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-600",
    size: "medium",
    details: [
      { icon: Lock, text: "JWT auth with auto token refresh" },
      { icon: ScrollText, text: "Comprehensive audit logs" },
      { icon: ServerCog, text: "Maintenance mode with messaging" },
      { icon: Settings, text: "Multi-tenant organization isolation" },
    ],
  },
];

function FeatureCard({
  feature,
  index,
  inView,
}: {
  feature: (typeof featureCategories)[0];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className={`group relative rounded-2xl border ${feature.borderColor} bg-gradient-to-br ${feature.color} p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300 ${
        feature.size === "large" ? "sm:col-span-2 lg:col-span-1" : ""
      }`}
    >
      {/* Icon and title */}
      <div className="flex items-start gap-3 mb-4">
        <div
          className={`shrink-0 size-10 rounded-xl ${feature.iconBg} flex items-center justify-center`}
        >
          <feature.icon className={`size-5 ${feature.iconColor}`} />
        </div>
        <div>
          <h3 className="text-base font-semibold text-foreground">
            {feature.title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
            {feature.description}
          </p>
        </div>
      </div>

      {/* Sub-features */}
      <div className="space-y-2 mt-4">
        {feature.details.map((detail) => (
          <div
            key={detail.text}
            className="flex items-center gap-2.5 text-sm"
          >
            <detail.icon className="size-3.5 text-muted-foreground/70 shrink-0" />
            <span className="text-muted-foreground text-xs">{detail.text}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function FeatureBento() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Features
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Everything you need. Nothing you don&apos;t.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            From project kickoff to final invoice — every tool your agency needs,
            built into one platform.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
          {featureCategories.map((feature, i) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              index={i}
              inView={inView}
            />
          ))}
        </div>

        {/* CTA link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href="/features"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            See detailed feature comparison
            <ArrowRight className="size-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
