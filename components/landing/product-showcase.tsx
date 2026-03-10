"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  CheckSquare,
  Users,
  Clock,
  MessageSquare,
  BarChart3,
  Receipt,
  Globe,
  Shield,
  ArrowRight,
  Check,
  Kanban,
  GanttChart,
  ListChecks,
  Milestone,
  Copy,
  Activity,
  Palette,
  ClipboardCheck,
  FileText,
  FolderOpen,
  Star,
  Timer,
  CalendarDays,
  BadgeCheck,
  FileDown,
  CreditCard,
  Repeat,
  TrendingUp,
  UserPlus,
  KeyRound,
  Eye,
  MessagesSquare,
  TicketIcon,
  HeadphonesIcon,
  PieChart,
  Lock,
  ScrollText,
  ServerCog,
  Settings,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: CheckSquare,
    label: "Project Management",
    title: "Keep every project on track with powerful tools",
    description:
      "Multiple view modes, task assignment, milestone tracking, project templates, and health monitoring — everything you need to deliver on time.",
    bullets: [
      { icon: Kanban, text: "Kanban boards with drag-and-drop task management" },
      { icon: GanttChart, text: "Gantt chart timeline for project scheduling" },
      { icon: ListChecks, text: "List and table views for quick overview" },
      { icon: Milestone, text: "Milestone tracking with deadline alerts" },
      { icon: Copy, text: "Project templates — clone and reuse structures" },
      { icon: Activity, text: "Real-time project health monitoring (On Track / At Risk / Off Track)" },
    ],
    mockupType: "kanban",
  },
  {
    icon: Globe,
    label: "Client Portal",
    title: "Give clients their own branded experience",
    description:
      "A white-label portal where clients view projects, approve deliverables, pay invoices, upload files, and chat with your team — all under your brand.",
    bullets: [
      { icon: Palette, text: "White-label branding — your colors, your logo, your domain" },
      { icon: ClipboardCheck, text: "One-click approvals with annotations and batch actions" },
      { icon: Receipt, text: "Online invoice payments via Razorpay with PDF download" },
      { icon: FolderOpen, text: "File sharing with upload, grid/list view, project filter" },
      { icon: MessageSquare, text: "Built-in chat rooms and support ticket system" },
      { icon: Star, text: "Interactive guided tour for first-time client onboarding" },
    ],
    mockupType: "portal",
  },
  {
    icon: Clock,
    label: "Time Tracking",
    title: "Know where every billable minute goes",
    description:
      "Real-time timers, manual entries, daily timesheets, and a manager approval workflow — built into every project.",
    bullets: [
      { icon: Timer, text: "One-click start/stop timer on any project" },
      { icon: CalendarDays, text: "Daily timesheet view with date navigation" },
      { icon: BadgeCheck, text: "Manager approval workflow — Pending / Approved / Rejected" },
      { icon: FileDown, text: "Manual time entry with project, start/end time, and notes" },
      { icon: Activity, text: "Duration formatting with hours and minutes breakdown" },
      { icon: TrendingUp, text: "Track billable vs non-billable hours" },
    ],
    mockupType: "timetracking",
  },
  {
    icon: Receipt,
    label: "Invoicing & Payments",
    title: "From tracked hours to paid invoices",
    description:
      "Generate invoices, accept online payments through Razorpay, manage retainer billing, and track revenue — all in one workflow.",
    bullets: [
      { icon: FileText, text: "Auto-generate professional invoices with line items" },
      { icon: CreditCard, text: "Razorpay payment gateway with secure webhook verification" },
      { icon: FileDown, text: "PDF invoice download for clients and your records" },
      { icon: Repeat, text: "Retainer-based billing for recurring client engagements" },
      { icon: TrendingUp, text: "Payment tracking — Draft, Sent, Paid, Overdue statuses" },
      { icon: Activity, text: "Revenue analytics with monthly breakdown" },
    ],
    mockupType: "billing",
  },
  {
    icon: Users,
    label: "Team Management",
    title: "Build and manage your agency team",
    description:
      "Invite members via email, assign granular roles, control permissions, and give your team their own focused portal.",
    bullets: [
      { icon: UserPlus, text: "Email-based team invitations with onboarding flow" },
      { icon: KeyRound, text: "5-tier role system: Owner, Admin, Manager, Member, Viewer" },
      { icon: Eye, text: "Granular permission control per role" },
      { icon: Activity, text: "Team member status management (active/inactive)" },
      { icon: Globe, text: "Dedicated team portal at team.youragency.com" },
      { icon: CheckSquare, text: "Task assignment and workload distribution" },
    ],
    mockupType: "team",
  },
  {
    icon: MessageSquare,
    label: "Communication",
    title: "Keep everyone in the loop",
    description:
      "Real-time messaging, support tickets with satisfaction ratings, project updates, and email notifications — collaboration built in.",
    bullets: [
      { icon: MessagesSquare, text: "Chat rooms with split-panel interface and polling" },
      { icon: TicketIcon, text: "Support ticket system with priority and status management" },
      { icon: HeadphonesIcon, text: "Client satisfaction ratings on resolved tickets" },
      { icon: FileText, text: "Project updates with types: Status, Milestone, Deliverable, General" },
      { icon: Star, text: "Customizable email notification preferences" },
      { icon: Activity, text: "Unread message counts and real-time updates" },
    ],
    mockupType: "messaging",
  },
  {
    icon: BarChart3,
    label: "Reports & Analytics",
    title: "Make data-driven decisions",
    description:
      "Project health dashboards, revenue analytics, expense tracking, team utilization, and publishable client reports.",
    bullets: [
      { icon: PieChart, text: "Project health dashboard with KPI tracking" },
      { icon: TrendingUp, text: "Revenue and expense analytics with trends" },
      { icon: FileText, text: "Custom client reports with rich JSON content renderer" },
      { icon: Activity, text: "Team utilization and capacity metrics" },
      { icon: BadgeCheck, text: "Report publishing with client visibility control" },
      { icon: FileDown, text: "Export reports and analytics data" },
    ],
    mockupType: "analytics",
  },
  {
    icon: Shield,
    label: "Security & Administration",
    title: "Enterprise-grade security built in",
    description:
      "Multi-tenant architecture, JWT authentication, session management, audit logs, and maintenance mode — secure by design.",
    bullets: [
      { icon: Lock, text: "JWT dual-token auth (15min access + 30 day refresh)" },
      { icon: ScrollText, text: "Comprehensive audit logs for every action" },
      { icon: ServerCog, text: "Maintenance mode with branded downtime page" },
      { icon: Settings, text: "Multi-tenant organization isolation" },
      { icon: Eye, text: "Session management — view active sessions, revoke access" },
      { icon: Shield, text: "Role-based access control across all portals" },
    ],
    mockupType: "security",
  },
];

function FeatureRow({
  feature,
  index,
  inView,
}: {
  feature: (typeof features)[0];
  index: number;
  inView: boolean;
}) {
  const isReversed = index % 2 === 1;

  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
        index > 0 ? "mt-16 sm:mt-24 lg:mt-32" : ""
      }`}
    >
      {/* Text side */}
      <motion.div
        initial={{ opacity: 0, x: isReversed ? 30 : -30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={isReversed ? "lg:order-2" : ""}
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-4">
          <feature.icon className="size-3.5" />
          {feature.label}
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
          {feature.title}
        </h3>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          {feature.description}
        </p>

        <ul className="mt-6 space-y-3">
          {feature.bullets.map((bullet) => (
            <li key={bullet.text} className="flex items-start gap-3 text-sm">
              <bullet.icon className="size-4 mt-0.5 text-primary/70 shrink-0" />
              <span className="text-muted-foreground">{bullet.text}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <Link
            href="/register"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            Try it free
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </motion.div>

      {/* Visual side */}
      <motion.div
        initial={{ opacity: 0, x: isReversed ? -30 : 30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={isReversed ? "lg:order-1" : ""}
      >
        <FeatureMockup type={feature.mockupType} />
      </motion.div>
    </div>
  );
}

function FeatureMockup({ type }: { type: string }) {
  if (type === "kanban") {
    return (
      <div className="rounded-xl border border-border shadow-lg overflow-hidden bg-white">
        <div className="px-4 py-2.5 bg-muted/40 border-b border-border flex items-center gap-4">
          {["Kanban", "Gantt", "List", "Table"].map((v, i) => (
            <span key={v} className={`text-[10px] font-medium ${i === 0 ? "text-primary border-b-2 border-primary pb-1" : "text-muted-foreground"}`}>{v}</span>
          ))}
        </div>
        <div className="p-4 overflow-x-auto">
          <div className="flex gap-3 min-w-[500px]">
            {[
              { name: "To Do", count: 4, cards: ["Setup CI/CD", "Design system", "API docs", "User research"] },
              { name: "In Progress", count: 3, cards: ["Landing page", "Auth flow", "Dashboard"] },
              { name: "Review", count: 2, cards: ["Homepage", "Onboarding"] },
              { name: "Done", count: 5, cards: ["Logo design", "Wireframes"] },
            ].map((col) => (
              <div key={col.name} className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wider">{col.name}</span>
                  <span className="text-[8px] text-muted-foreground bg-muted rounded-full px-1.5">{col.count}</span>
                </div>
                <div className="space-y-2">
                  {col.cards.map((card) => (
                    <div key={card} className="rounded-md border border-border p-2 bg-white shadow-sm">
                      <div className="text-[9px] font-medium text-foreground mb-1">{card}</div>
                      <div className="flex items-center justify-between">
                        <div className="flex -space-x-1">
                          <div className="size-4 rounded-full bg-primary/15 border border-white" />
                        </div>
                        <div className={`size-1.5 rounded-full ${col.name === "Done" ? "bg-green-500" : col.name === "Review" ? "bg-amber-500" : col.name === "In Progress" ? "bg-blue-500" : "bg-muted-foreground/30"}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "portal") {
    return (
      <div className="rounded-xl border border-border shadow-lg overflow-hidden bg-white">
        <div className="h-10 bg-indigo-600 flex items-center px-4 gap-2">
          <div className="size-5 rounded bg-white/20 flex items-center justify-center">
            <span className="text-[6px] font-bold text-white">YA</span>
          </div>
          <span className="text-[10px] font-medium text-white">Your Agency</span>
          <div className="ml-auto flex gap-3 overflow-x-auto">
            {["Dashboard", "Projects", "Approvals", "Invoices", "Files", "Messages"].map((t, i) => (
              <span key={t} className={`text-[8px] whitespace-nowrap ${i === 0 ? "text-white font-medium" : "text-white/60"}`}>{t}</span>
            ))}
          </div>
        </div>
        <div className="p-4 space-y-3">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { label: "Projects", val: "4", bg: "bg-blue-50 border-blue-100" },
              { label: "Approvals", val: "3", bg: "bg-amber-50 border-amber-100" },
              { label: "Invoices", val: "2", bg: "bg-green-50 border-green-100" },
              { label: "Messages", val: "7", bg: "bg-purple-50 border-purple-100" },
            ].map((c) => (
              <div key={c.label} className={`rounded-lg border ${c.bg} p-2 text-center`}>
                <div className="text-lg font-bold text-foreground">{c.val}</div>
                <div className="text-[8px] text-muted-foreground">{c.label}</div>
              </div>
            ))}
          </div>
          <div className="rounded-lg border border-amber-200 bg-amber-50/50 p-3">
            <div className="text-[9px] font-semibold text-foreground mb-2">Pending Approvals</div>
            {["Homepage Design v3", "Brand Color Palette", "Social Media Kit"].map((a) => (
              <div key={a} className="flex items-center justify-between py-1.5 border-b border-amber-100 last:border-0">
                <span className="text-[9px] text-foreground">{a}</span>
                <div className="flex gap-1">
                  <div className="h-4 px-2 rounded bg-green-600 flex items-center">
                    <span className="text-[7px] text-white">Approve</span>
                  </div>
                  <div className="h-4 px-2 rounded border border-border flex items-center">
                    <span className="text-[7px] text-muted-foreground">Reject</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "timetracking") {
    return (
      <div className="rounded-xl border border-border shadow-lg overflow-hidden bg-white">
        <div className="p-4 space-y-3">
          <div className="rounded-lg border-2 border-green-200 bg-green-50/50 p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] font-semibold text-foreground">Active Timer</div>
                <div className="text-[9px] text-muted-foreground">E-commerce Redesign - Checkout flow</div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-600 font-mono">01:47:23</div>
                <div className="flex gap-1.5 mt-1 justify-end">
                  <div className="h-5 px-2 rounded bg-red-500 flex items-center">
                    <span className="text-[8px] text-white font-medium">Stop</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-[10px] font-semibold text-foreground">Today&apos;s Timesheet</div>
            <div className="text-[9px] text-muted-foreground">Total: <span className="font-semibold text-foreground">6h 32m</span></div>
          </div>
          {[
            { project: "Mobile App", task: "API integration", time: "2h 15m", status: "Approved" },
            { project: "Brand Guide", task: "Color system", time: "1h 30m", status: "Approved" },
            { project: "SEO Campaign", task: "Keyword research", time: "1h 00m", status: "Pending" },
          ].map((log) => (
            <div key={log.task} className="flex items-center gap-3 rounded-lg border border-border p-2.5">
              <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Clock className="size-3.5 text-primary" />
              </div>
              <div className="flex-1">
                <div className="text-[9px] font-medium text-foreground">{log.project}</div>
                <div className="text-[8px] text-muted-foreground">{log.task}</div>
              </div>
              <div className="text-right">
                <div className="text-[10px] font-semibold text-foreground">{log.time}</div>
                <span className={`text-[7px] px-1.5 py-0.5 rounded-full font-medium ${log.status === "Approved" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>
                  {log.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "billing") {
    return (
      <div className="rounded-xl border border-border shadow-lg overflow-hidden bg-white">
        <div className="p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="text-[10px] font-semibold text-foreground">Invoices</div>
            <div className="h-6 px-3 rounded-md bg-primary flex items-center">
              <span className="text-[8px] text-white font-medium">+ New Invoice</span>
            </div>
          </div>
          <div className="rounded-lg border border-border overflow-x-auto">
            <div className="grid grid-cols-5 gap-2 p-2 bg-muted/40 border-b border-border min-w-[400px]">
              {["Invoice", "Client", "Amount", "Status", "Action"].map((h) => (
                <span key={h} className="text-[8px] font-semibold text-muted-foreground">{h}</span>
              ))}
            </div>
            {[
              { id: "INV-042", client: "Acme Corp", amount: "45,000", status: "Paid" },
              { id: "INV-041", client: "TechStart", amount: "28,500", status: "Sent" },
              { id: "INV-040", client: "DesignHub", amount: "62,000", status: "Overdue" },
              { id: "INV-039", client: "CloudFirst", amount: "15,000", status: "Draft" },
            ].map((inv) => (
              <div key={inv.id} className="grid grid-cols-5 gap-2 p-2 border-b border-border last:border-0 items-center">
                <span className="text-[9px] font-medium text-primary">{inv.id}</span>
                <span className="text-[9px] text-foreground">{inv.client}</span>
                <span className="text-[9px] font-medium text-foreground">{inv.amount}</span>
                <span className={`text-[7px] px-1.5 py-0.5 rounded-full font-medium w-fit ${
                  inv.status === "Paid" ? "bg-green-100 text-green-700" :
                  inv.status === "Sent" ? "bg-blue-100 text-blue-700" :
                  inv.status === "Overdue" ? "bg-red-100 text-red-700" :
                  "bg-muted text-muted-foreground"
                }`}>{inv.status}</span>
                <div className="flex gap-1">
                  <div className="h-4 px-1.5 rounded bg-muted flex items-center">
                    <span className="text-[7px] text-muted-foreground">PDF</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Default mockup for other types
  return (
    <div className="rounded-xl border border-border shadow-lg overflow-hidden bg-white">
      <div className="p-4 aspect-[4/3] bg-gradient-to-br from-muted/30 to-primary/5 flex items-center justify-center">
        <div className="text-center">
          <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
            {type === "team" && <Users className="size-8 text-primary/60" />}
            {type === "messaging" && <MessageSquare className="size-8 text-primary/60" />}
            {type === "analytics" && <BarChart3 className="size-8 text-primary/60" />}
            {type === "security" && <Shield className="size-8 text-primary/60" />}
          </div>
          <div className="text-xs text-muted-foreground">Interactive preview</div>
        </div>
      </div>
    </div>
  );
}

export function ProductShowcase() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="mx-auto max-w-6xl">
        {features.map((feature, i) => (
          <FeatureRow key={feature.label} feature={feature} index={i} inView={inView} />
        ))}
      </div>
    </section>
  );
}
