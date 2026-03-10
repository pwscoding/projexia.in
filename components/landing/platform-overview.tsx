"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Globe,
  Users,
  CheckSquare,
  Clock,
  BarChart3,
  FileText,
  MessageSquare,
  Shield,
  Palette,
  FolderOpen,
  Receipt,
  ClipboardCheck,
  HeadphonesIcon,
  Timer,
  UserPlus,
} from "lucide-react";

const tabs = [
  {
    id: "agency",
    label: "Agency Dashboard",
    icon: LayoutDashboard,
    headline: "Your command center for everything",
    description:
      "Manage projects, clients, team members, expenses, and billing from a single powerful dashboard. Built for agency owners and managers who need full visibility.",
    features: [
      {
        icon: CheckSquare,
        title: "Project Management",
        desc: "Kanban boards, Gantt timelines, list & table views. Create tasks, assign team members, set priorities, and track milestones.",
      },
      {
        icon: Users,
        title: "Client Management",
        desc: "Full client registry with contacts, portal access control, invitation management, and communication preferences.",
      },
      {
        icon: UserPlus,
        title: "Team Management",
        desc: "Invite members via email, assign roles (Owner, Admin, Manager, Member, Viewer), manage permissions and status.",
      },
      {
        icon: Receipt,
        title: "Invoicing & Billing",
        desc: "Generate invoices, track payments via Razorpay, manage retainer billing, download PDFs, and monitor revenue.",
      },
      {
        icon: BarChart3,
        title: "Reports & Analytics",
        desc: "Project health dashboards, team utilization, revenue tracking, expense monitoring, and custom client reports.",
      },
      {
        icon: FolderOpen,
        title: "Templates & Automation",
        desc: "Save project templates for faster setup. Clone projects with all data. Streamline repetitive workflows.",
      },
    ],
    mockup: "agency",
  },
  {
    id: "client",
    label: "Client Portal",
    icon: Globe,
    headline: "Give clients their own branded space",
    description:
      "A white-label portal where your clients can view projects, approve deliverables, pay invoices, share files, and communicate with your team — all under your brand.",
    features: [
      {
        icon: Palette,
        title: "White-Label Branding",
        desc: "Custom colors, logo, and domain. Clients see your brand, not ours. Full CSS variable customization.",
      },
      {
        icon: ClipboardCheck,
        title: "Approval Workflows",
        desc: "Clients approve or reject deliverables with annotations. Batch approvals, comment threads, and resolution tracking.",
      },
      {
        icon: Receipt,
        title: "Invoice & Payments",
        desc: "Clients view invoices, pay online via Razorpay, download PDF receipts. Track payment status in real-time.",
      },
      {
        icon: FolderOpen,
        title: "File Sharing",
        desc: "Project-organized file browser. Upload, download, and preview files. Version history and grid/list toggle.",
      },
      {
        icon: MessageSquare,
        title: "Messaging & Tickets",
        desc: "Built-in chat rooms and support ticket system. Conversation threads, satisfaction ratings, and real-time messaging.",
      },
      {
        icon: FileText,
        title: "Reports & Updates",
        desc: "Published reports with rich content. Real-time project status updates. Dashboard with stats and pending actions.",
      },
    ],
    mockup: "client",
  },
  {
    id: "team",
    label: "Team Portal",
    icon: Users,
    headline: "A focused workspace for your team",
    description:
      "Your team members get a clean, distraction-free portal to view assigned tasks, track time, access project files, and stay in sync — without the complexity of the full dashboard.",
    features: [
      {
        icon: CheckSquare,
        title: "Task Overview",
        desc: "View assigned tasks across projects. List and Kanban board views with status, priority, and due date filters.",
      },
      {
        icon: Timer,
        title: "Time Tracking",
        desc: "One-click timer, manual time entry, daily timesheets. Track hours per project with approval workflow.",
      },
      {
        icon: LayoutDashboard,
        title: "Personal Dashboard",
        desc: "Stats overview with active projects, task count, time logged. Overdue alerts and recent activity feed.",
      },
      {
        icon: FolderOpen,
        title: "Project Files",
        desc: "Access project documents, resources, and shared files. Search and filter by project.",
      },
      {
        icon: Shield,
        title: "Role-Based Access",
        desc: "Members and Viewers see only what they need. Permissions controlled by agency admins.",
      },
      {
        icon: HeadphonesIcon,
        title: "Simple Onboarding",
        desc: "Accept invite via email link, set password, and start working. No complicated setup required.",
      },
    ],
    mockup: "team",
  },
];

function AgencyMockup() {
  return (
    <div className="rounded-xl border border-border bg-white shadow-lg overflow-hidden">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-muted/50 border-b border-border">
        <div className="flex gap-1.5">
          <div className="size-2.5 rounded-full bg-red-400" />
          <div className="size-2.5 rounded-full bg-amber-400" />
          <div className="size-2.5 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 mx-3">
          <div className="h-5 rounded bg-white border border-border flex items-center px-2">
            <span className="text-[9px] text-muted-foreground">app.projexia.in/dashboard</span>
          </div>
        </div>
      </div>
      {/* App content */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-[140px] border-r border-border p-3 space-y-1 bg-muted/20 hidden sm:block">
          {["Dashboard", "Projects", "Clients", "Team", "Time", "Invoices", "Reports", "Settings"].map((item, i) => (
            <div key={item} className={`flex items-center gap-2 px-2 py-1.5 rounded text-[9px] ${i === 0 ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground"}`}>
              <div className={`size-3 rounded ${i === 0 ? "bg-primary/20" : "bg-muted"}`} />
              {item}
            </div>
          ))}
        </div>
        {/* Main content */}
        <div className="flex-1 p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="h-3 w-28 rounded bg-foreground/10 mb-1" />
              <div className="h-2 w-40 rounded bg-muted" />
            </div>
            <div className="h-7 w-20 rounded-md bg-primary flex items-center justify-center">
              <span className="text-[8px] text-white font-medium">+ Project</span>
            </div>
          </div>
          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { label: "Projects", val: "12", color: "bg-blue-500" },
              { label: "Tasks", val: "48", color: "bg-green-500" },
              { label: "Team", val: "8", color: "bg-purple-500" },
              { label: "Revenue", val: "2.4L", color: "bg-amber-500" },
            ].map((s) => (
              <div key={s.label} className="rounded-lg border border-border p-2">
                <div className="text-[8px] text-muted-foreground">{s.label}</div>
                <div className="text-sm font-bold text-foreground mt-0.5">{s.val}</div>
                <div className={`h-1 w-full rounded-full bg-muted mt-1.5`}>
                  <div className={`h-1 rounded-full ${s.color}`} style={{ width: "65%" }} />
                </div>
              </div>
            ))}
          </div>
          {/* Project cards */}
          <div className="grid grid-cols-2 gap-2">
            {["Website Redesign", "Mobile App", "Brand Strategy", "SEO Campaign"].map((p, i) => (
              <div key={p} className="rounded-lg border border-border p-2.5">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[9px] font-medium text-foreground">{p}</span>
                  <span className={`text-[7px] px-1.5 py-0.5 rounded-full font-medium ${i === 0 ? "bg-green-100 text-green-700" : i === 1 ? "bg-blue-100 text-blue-700" : i === 2 ? "bg-amber-100 text-amber-700" : "bg-purple-100 text-purple-700"}`}>
                    {i === 0 ? "Active" : i === 1 ? "In Progress" : i === 2 ? "On Hold" : "Active"}
                  </span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-muted">
                  <div className="h-1.5 rounded-full bg-primary/60" style={{ width: `${30 + i * 18}%` }} />
                </div>
                <div className="flex items-center justify-between mt-1.5">
                  <div className="flex -space-x-1">
                    {[...Array(3)].map((_, j) => (
                      <div key={j} className="size-4 rounded-full bg-primary/15 border border-white" />
                    ))}
                  </div>
                  <span className="text-[7px] text-muted-foreground">{5 + i * 3} tasks</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ClientMockup() {
  return (
    <div className="rounded-xl border border-border bg-white shadow-lg overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-muted/50 border-b border-border">
        <div className="flex gap-1.5">
          <div className="size-2.5 rounded-full bg-red-400" />
          <div className="size-2.5 rounded-full bg-amber-400" />
          <div className="size-2.5 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 mx-3">
          <div className="h-5 rounded bg-white border border-border flex items-center px-2">
            <span className="text-[9px] text-muted-foreground">portal.youragency.com</span>
          </div>
        </div>
      </div>
      <div className="p-4 space-y-3">
        {/* Branded header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-7 rounded-lg bg-indigo-600 flex items-center justify-center">
              <span className="text-[8px] font-bold text-white">YA</span>
            </div>
            <span className="text-[10px] font-semibold text-foreground">Your Agency</span>
          </div>
          <div className="flex gap-1.5">
            {["Projects", "Invoices", "Approvals", "Files"].map((t, i) => (
              <span key={t} className={`text-[8px] px-2 py-1 rounded ${i === 0 ? "bg-indigo-100 text-indigo-700 font-medium" : "text-muted-foreground"}`}>
                {t}
              </span>
            ))}
          </div>
        </div>
        {/* Dashboard cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            { label: "Active Projects", val: "3", icon: "bg-blue-100" },
            { label: "Pending Approvals", val: "5", icon: "bg-amber-100" },
            { label: "Due Invoices", val: "1", icon: "bg-green-100" },
          ].map((c) => (
            <div key={c.label} className="rounded-lg border border-border p-2 text-center">
              <div className={`size-6 rounded-lg ${c.icon} mx-auto mb-1`} />
              <div className="text-sm font-bold text-foreground">{c.val}</div>
              <div className="text-[7px] text-muted-foreground">{c.label}</div>
            </div>
          ))}
        </div>
        {/* Project update */}
        <div className="rounded-lg border border-border p-3">
          <div className="text-[9px] font-medium text-foreground mb-2">Recent Updates</div>
          {["Website wireframes approved", "New milestone reached: Phase 2", "Invoice #INV-023 paid"].map((u, i) => (
            <div key={u} className="flex items-center gap-2 py-1.5 border-b border-border last:border-0">
              <div className={`size-1.5 rounded-full ${i === 0 ? "bg-green-500" : i === 1 ? "bg-blue-500" : "bg-emerald-500"}`} />
              <span className="text-[8px] text-muted-foreground flex-1">{u}</span>
              <span className="text-[7px] text-muted-foreground">{i === 0 ? "2h ago" : i === 1 ? "1d ago" : "3d ago"}</span>
            </div>
          ))}
        </div>
        {/* Approval preview */}
        <div className="rounded-lg border border-amber-200 bg-amber-50/50 p-2.5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[9px] font-medium text-foreground">Homepage Design v3</div>
              <div className="text-[7px] text-muted-foreground">Awaiting your approval</div>
            </div>
            <div className="flex gap-1.5">
              <div className="h-5 px-2 rounded bg-green-600 flex items-center">
                <span className="text-[7px] text-white font-medium">Approve</span>
              </div>
              <div className="h-5 px-2 rounded bg-white border border-border flex items-center">
                <span className="text-[7px] text-muted-foreground font-medium">Reject</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamMockup() {
  return (
    <div className="rounded-xl border border-border bg-white shadow-lg overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-muted/50 border-b border-border">
        <div className="flex gap-1.5">
          <div className="size-2.5 rounded-full bg-red-400" />
          <div className="size-2.5 rounded-full bg-amber-400" />
          <div className="size-2.5 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 mx-3">
          <div className="h-5 rounded bg-white border border-border flex items-center px-2">
            <span className="text-[9px] text-muted-foreground">team.youragency.com</span>
          </div>
        </div>
      </div>
      <div className="flex">
        {/* Sidebar */}
        <div className="w-[120px] border-r border-border p-3 space-y-1 bg-muted/20 hidden sm:block">
          {["Dashboard", "My Tasks", "Projects", "Time", "Files"].map((item, i) => (
            <div key={item} className={`flex items-center gap-2 px-2 py-1.5 rounded text-[9px] ${i === 3 ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground"}`}>
              <div className={`size-3 rounded ${i === 3 ? "bg-primary/20" : "bg-muted"}`} />
              {item}
            </div>
          ))}
        </div>
        {/* Time tracking content */}
        <div className="flex-1 p-4 space-y-3">
          <div className="text-[10px] font-semibold text-foreground">Time Tracking</div>
          {/* Active timer */}
          <div className="rounded-lg border-2 border-green-200 bg-green-50/50 p-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[9px] font-medium text-foreground">Website Redesign</div>
                <div className="text-[7px] text-muted-foreground">Landing page development</div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-green-600 font-mono">02:34:17</div>
                <div className="h-5 w-14 rounded bg-red-500 flex items-center justify-center mt-1">
                  <span className="text-[7px] text-white font-medium">Stop</span>
                </div>
              </div>
            </div>
          </div>
          {/* Today's log */}
          <div className="text-[9px] font-medium text-foreground">Today&apos;s Log</div>
          {[
            { project: "Mobile App", duration: "3h 15m", status: "Approved" },
            { project: "Brand Strategy", duration: "1h 45m", status: "Pending" },
            { project: "SEO Campaign", duration: "2h 00m", status: "Approved" },
          ].map((log) => (
            <div key={log.project} className="flex items-center gap-2 rounded-lg border border-border p-2">
              <div className="size-6 rounded bg-primary/10" />
              <div className="flex-1">
                <div className="text-[8px] font-medium text-foreground">{log.project}</div>
                <div className="text-[7px] text-muted-foreground">{log.duration}</div>
              </div>
              <span className={`text-[7px] px-1.5 py-0.5 rounded-full font-medium ${log.status === "Approved" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>
                {log.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const mockupComponents: Record<string, () => JSX.Element> = {
  agency: AgencyMockup,
  client: ClientMockup,
  team: TeamMockup,
};

export function PlatformOverview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeTab, setActiveTab] = useState("agency");

  const activeTabData = tabs.find((t) => t.id === activeTab)!;
  const MockupComponent = mockupComponents[activeTab];

  return (
    <section id="platform" ref={ref} className="section-padding bg-muted/30">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            The Platform
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            One platform. Three powerful portals.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            Every stakeholder gets their own dedicated workspace — agency owners,
            clients, and team members — all connected seamlessly.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-white rounded-xl border border-border p-1.5 shadow-sm">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-primary text-white shadow-md"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <tab.icon className="size-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          >
            {/* Left: Features */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {activeTabData.headline}
              </h3>
              <p className="text-muted-foreground mb-8">
                {activeTabData.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeTabData.features.map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="group p-3 rounded-lg border border-transparent hover:border-border hover:bg-white hover:shadow-sm transition-all duration-200"
                  >
                    <div className="flex items-start gap-3">
                      <div className="shrink-0 size-8 rounded-lg bg-primary/10 flex items-center justify-center mt-0.5">
                        <feature.icon className="size-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground">
                          {feature.title}
                        </h4>
                        <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Mockup */}
            <div className="lg:sticky lg:top-24">
              <MockupComponent />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
