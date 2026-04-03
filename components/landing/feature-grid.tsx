"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  LayoutDashboard,
  Globe,
  Receipt,
  Clock,
  Users,
  MessageSquare,
  BarChart3,
  CheckSquare,
  FolderOpen,
  Bell,
  Shield,
  Palette,
  Milestone,
  FileText,
  UserPlus,
  Settings,
  CalendarDays,
  Kanban,
  Timer,
  Send,
  CreditCard,
  Eye,
  Lock,
  type LucideIcon,
} from "lucide-react";

type CellType = "icon" | "hero";

interface IconCell {
  type: "icon";
  icon: LucideIcon;
  label: string;
}

interface HeroCell {
  type: "hero";
  label: string;
  icon: LucideIcon;
  color: string;
  preview: React.ReactNode;
  colSpan: number;
  rowSpan: number;
}

type GridCell = IconCell | HeroCell;

function ProjectsPreview() {
  return (
    <div className="w-full h-full flex flex-col gap-1.5 p-2">
      {[
        { name: "Website Redesign", status: "In Progress", progress: 72, color: "bg-emerald-500" },
        { name: "Mobile App MVP", status: "Active", progress: 45, color: "bg-[var(--brand-indigo)]" },
        { name: "Brand Guidelines", status: "Review", progress: 90, color: "bg-amber-500" },
      ].map((p) => (
        <div key={p.name} className="flex items-center gap-2 rounded-md bg-white/80 px-2 py-1.5 border border-slate-100">
          <div className={`size-1.5 rounded-full shrink-0 ${p.color}`} />
          <span className="text-[8px] font-medium text-slate-700 flex-1 truncate">{p.name}</span>
          <span className="text-[7px] text-slate-400">{p.progress}%</span>
        </div>
      ))}
    </div>
  );
}

function ClientPortalPreview() {
  return (
    <div className="w-full h-full flex flex-col gap-1.5 p-2">
      <div className="h-5 rounded bg-[var(--brand-indigo)] flex items-center px-2 gap-1.5">
        <div className="size-3 rounded bg-white/20" />
        <span className="text-[7px] font-medium text-white">Your Agency</span>
      </div>
      <div className="grid grid-cols-3 gap-1">
        {["Projects", "Approvals", "Invoices"].map((t) => (
          <div key={t} className="rounded bg-white/80 border border-slate-100 p-1 text-center">
            <div className="text-[9px] font-bold text-slate-800">3</div>
            <div className="text-[6px] text-slate-400">{t}</div>
          </div>
        ))}
      </div>
      <div className="rounded bg-amber-50 border border-amber-200 p-1.5 flex items-center justify-between">
        <div>
          <div className="text-[7px] font-medium text-slate-700">Homepage v3</div>
          <div className="text-[6px] text-slate-400">Awaiting approval</div>
        </div>
        <div className="h-4 px-1.5 rounded bg-emerald-600 flex items-center">
          <span className="text-[6px] text-white font-medium">Approve</span>
        </div>
      </div>
    </div>
  );
}

function InvoicingPreview() {
  return (
    <div className="w-full h-full flex flex-col gap-1.5 p-2">
      <div className="flex items-center justify-between">
        <span className="text-[8px] font-semibold text-slate-700">Invoices</span>
        <div className="h-4 px-1.5 rounded bg-[var(--brand-indigo)] flex items-center">
          <span className="text-[6px] text-white font-medium">+ New</span>
        </div>
      </div>
      {[
        { id: "#042", amount: "24,999", status: "Paid", dot: "bg-emerald-500" },
        { id: "#041", amount: "18,500", status: "Pending", dot: "bg-amber-500" },
        { id: "#040", amount: "32,000", status: "Paid", dot: "bg-emerald-500" },
      ].map((inv) => (
        <div key={inv.id} className="flex items-center gap-2 rounded-md bg-white/80 px-2 py-1.5 border border-slate-100">
          <span className="text-[7px] font-medium text-slate-500">{inv.id}</span>
          <span className="text-[8px] font-semibold text-slate-800 flex-1">&#8377;{inv.amount}</span>
          <div className={`size-1.5 rounded-full ${inv.dot}`} />
          <span className="text-[6px] text-slate-400">{inv.status}</span>
        </div>
      ))}
    </div>
  );
}

function ChatPreview() {
  return (
    <div className="w-full h-full flex flex-col gap-1.5 p-2">
      <div className="text-[8px] font-semibold text-slate-700">Messages</div>
      <div className="flex flex-col gap-1">
        <div className="self-start max-w-[80%] rounded-lg bg-slate-100 px-2 py-1">
          <div className="text-[7px] text-slate-600">Can you share the latest mockups?</div>
        </div>
        <div className="self-end max-w-[80%] rounded-lg bg-[var(--brand-indigo)] px-2 py-1">
          <div className="text-[7px] text-white">Sure! Uploading now</div>
        </div>
        <div className="self-start max-w-[80%] rounded-lg bg-slate-100 px-2 py-1">
          <div className="text-[7px] text-slate-600">Looks great, approved!</div>
        </div>
      </div>
    </div>
  );
}

// Grid layout: 8 columns x 6 rows
// Hero cards span 2x2 cells each
const ROW1: GridCell[] = [
  { type: "icon", icon: Kanban, label: "Kanban Boards" },
  { type: "icon", icon: CheckSquare, label: "Tasks" },
  { type: "icon", icon: Milestone, label: "Milestones" },
  { type: "icon", icon: CalendarDays, label: "Calendar" },
  { type: "icon", icon: Eye, label: "Approvals" },
  { type: "icon", icon: Palette, label: "White Label" },
  { type: "icon", icon: FileText, label: "Reports" },
  { type: "icon", icon: Settings, label: "Templates" },
];

const ROW2: GridCell[] = [
  { type: "icon", icon: Bell, label: "Notifications" },
  { type: "icon", icon: BarChart3, label: "Analytics" },
];

const ROW3: GridCell[] = [
  { type: "icon", icon: Lock, label: "Roles & Access" },
  { type: "icon", icon: UserPlus, label: "Team Invite" },
];

const ROW4: GridCell[] = [
  { type: "icon", icon: Timer, label: "Timesheets" },
  { type: "icon", icon: Send, label: "Tickets" },
];

const ROW5: GridCell[] = [
  { type: "icon", icon: CreditCard, label: "Payments" },
  { type: "icon", icon: Shield, label: "Security" },
  { type: "icon", icon: FolderOpen, label: "File Sharing" },
  { type: "icon", icon: Users, label: "Team Portal" },
];

export function FeatureGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <p className="text-sm font-semibold text-[var(--brand-indigo)] uppercase tracking-wider mb-3">
            Everything you need
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            All your tools,{" "}
            <span className="gradient-text-full">one platform</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            Replace your scattered stack with a single platform built for agencies, freelancers, and client-facing teams.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative"
        >
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Grid */}
          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 border border-border rounded-2xl overflow-hidden bg-muted/20">
            {/* Row 1: 8 icon cells */}
            {ROW1.map((cell, i) => (
              <motion.div
                key={cell.label}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.03 }}
                className="flex flex-col items-center justify-center gap-2 p-4 sm:p-5 border-b border-r border-border last:border-r-0 hover:bg-white transition-colors"
              >
                <cell.icon className="size-5 text-slate-500" />
                <span className="text-[10px] sm:text-xs font-medium text-slate-600 text-center leading-tight">{cell.label}</span>
              </motion.div>
            ))}

            {/* Row 2-3: 2 icon cells + Projects Hero (2x2) + Client Portal Hero (2x2) + 2 icon cells */}
            {ROW2.map((cell) => (
              <div
                key={cell.label}
                className="flex flex-col items-center justify-center gap-2 p-4 sm:p-5 border-b border-r border-border hover:bg-white transition-colors"
              >
                <cell.icon className="size-5 text-slate-500" />
                <span className="text-[10px] sm:text-xs font-medium text-slate-600 text-center leading-tight">{cell.label}</span>
              </div>
            ))}

            {/* Projects Hero */}
            <div className="col-span-2 row-span-2 border-b border-r border-border bg-gradient-to-br from-indigo-50 to-violet-50 flex flex-col items-center justify-center p-3 relative group hover:from-indigo-100/80 hover:to-violet-100/60 transition-colors">
              <div className="w-full flex-1 rounded-lg overflow-hidden">
                <ProjectsPreview />
              </div>
              <div className="flex items-center gap-1.5 mt-2">
                <LayoutDashboard className="size-3.5 text-[var(--brand-indigo)]" />
                <span className="text-xs font-semibold text-slate-800">Projects</span>
              </div>
            </div>

            {/* Client Portal Hero */}
            <div className="col-span-2 row-span-2 border-b border-r border-border bg-gradient-to-br from-violet-50 to-pink-50 flex flex-col items-center justify-center p-3 relative group hover:from-violet-100/80 hover:to-pink-100/60 transition-colors">
              <div className="w-full flex-1 rounded-lg overflow-hidden">
                <ClientPortalPreview />
              </div>
              <div className="flex items-center gap-1.5 mt-2">
                <Globe className="size-3.5 text-[var(--brand-violet)]" />
                <span className="text-xs font-semibold text-slate-800">Client Portal</span>
              </div>
            </div>

            {ROW3.map((cell) => (
              <div
                key={cell.label}
                className="flex flex-col items-center justify-center gap-2 p-4 sm:p-5 border-b border-r border-border hover:bg-white transition-colors"
              >
                <cell.icon className="size-5 text-slate-500" />
                <span className="text-[10px] sm:text-xs font-medium text-slate-600 text-center leading-tight">{cell.label}</span>
              </div>
            ))}

            {/* Row 4-5: 2 icon cells + Invoicing Hero (2x2) + Chat Hero (2x2) + 2 icon cells */}
            {ROW4.map((cell) => (
              <div
                key={cell.label}
                className="flex flex-col items-center justify-center gap-2 p-4 sm:p-5 border-b border-r border-border hover:bg-white transition-colors"
              >
                <cell.icon className="size-5 text-slate-500" />
                <span className="text-[10px] sm:text-xs font-medium text-slate-600 text-center leading-tight">{cell.label}</span>
              </div>
            ))}

            {/* Invoicing Hero */}
            <div className="col-span-2 row-span-2 border-b border-r border-border bg-gradient-to-br from-emerald-50 to-indigo-50 flex flex-col items-center justify-center p-3 relative group hover:from-emerald-100/80 hover:to-indigo-100/60 transition-colors">
              <div className="w-full flex-1 rounded-lg overflow-hidden">
                <InvoicingPreview />
              </div>
              <div className="flex items-center gap-1.5 mt-2">
                <Receipt className="size-3.5 text-emerald-600" />
                <span className="text-xs font-semibold text-slate-800">Invoicing</span>
              </div>
            </div>

            {/* Chat Hero */}
            <div className="col-span-2 row-span-2 border-b border-r border-border bg-gradient-to-br from-rose-50 to-indigo-50 flex flex-col items-center justify-center p-3 relative group hover:from-rose-100/80 hover:to-indigo-100/60 transition-colors">
              <div className="w-full flex-1 rounded-lg overflow-hidden">
                <ChatPreview />
              </div>
              <div className="flex items-center gap-1.5 mt-2">
                <MessageSquare className="size-3.5 text-[var(--brand-coral)]" />
                <span className="text-xs font-semibold text-slate-800">Chat</span>
              </div>
            </div>

            {ROW5.slice(0, 2).map((cell) => (
              <div
                key={cell.label}
                className="flex flex-col items-center justify-center gap-2 p-4 sm:p-5 border-b border-r border-border hover:bg-white transition-colors"
              >
                <cell.icon className="size-5 text-slate-500" />
                <span className="text-[10px] sm:text-xs font-medium text-slate-600 text-center leading-tight">{cell.label}</span>
              </div>
            ))}

            {/* Bottom row: remaining icon cells */}
            {[
              { icon: Clock, label: "Time Tracking" },
              { icon: FolderOpen, label: "File Sharing" },
              { icon: Users, label: "Team Portal" },
              { icon: Shield, label: "Security" },
              { icon: CreditCard, label: "Payments" },
              { icon: BarChart3, label: "Dashboards" },
              { icon: UserPlus, label: "Guest Access" },
              { icon: Settings, label: "Integrations" },
            ].map((cell, i) => (
              <motion.div
                key={cell.label}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.03 }}
                className="flex flex-col items-center justify-center gap-2 p-4 sm:p-5 border-r border-border last:border-r-0 hover:bg-white transition-colors"
              >
                <cell.icon className="size-5 text-slate-500" />
                <span className="text-[10px] sm:text-xs font-medium text-slate-600 text-center leading-tight">{cell.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
