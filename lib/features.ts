import {
  CheckSquare,
  Users,
  Clock,
  MessageSquare,
  BarChart3,
  Receipt,
  Globe,
  Shield,
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
  type LucideIcon,
} from "lucide-react";

export interface FeatureBullet {
  icon: LucideIcon;
  title: string;
  text: string;
}

export interface FeatureData {
  slug: string;
  icon: LucideIcon;
  label: string;
  title: string;
  description: string;
  bullets: FeatureBullet[];
  mockupType: string;
}

export const featurePages: FeatureData[] = [
  {
    slug: "project-management",
    icon: CheckSquare,
    label: "Project Management",
    title: "Keep every project on track with powerful tools",
    description:
      "Multiple view modes, task assignment, milestone tracking, project templates, and health monitoring — everything you need to deliver on time.",
    bullets: [
      { icon: Kanban, title: "Kanban Boards", text: "Drag-and-drop task management across customizable columns" },
      { icon: GanttChart, title: "Gantt Charts", text: "Visual timeline for project scheduling and dependencies" },
      { icon: ListChecks, title: "Multiple Views", text: "Switch between list, table, and board views instantly" },
      { icon: Milestone, title: "Milestones", text: "Track key deadlines with automated alerts" },
      { icon: Copy, title: "Templates", text: "Clone and reuse project structures to save setup time" },
      { icon: Activity, title: "Health Monitoring", text: "Real-time status tracking — On Track, At Risk, or Off Track" },
    ],
    mockupType: "kanban",
  },
  {
    slug: "client-portal",
    icon: Globe,
    label: "Client Portal",
    title: "Give clients their own branded experience",
    description:
      "A white-label portal where clients view projects, approve deliverables, pay invoices, upload files, and chat with your team — all under your brand.",
    bullets: [
      { icon: Palette, title: "White-Label Branding", text: "Your colors, your logo, your domain — fully branded" },
      { icon: ClipboardCheck, title: "Approvals", text: "One-click approvals with annotations and batch actions" },
      { icon: Receipt, title: "Invoice Payments", text: "Online payments via Razorpay with PDF download" },
      { icon: FolderOpen, title: "File Sharing", text: "Upload, organize, and share files with project filtering" },
      { icon: MessageSquare, title: "Built-in Messaging", text: "Chat rooms and support ticket system for clients" },
      { icon: Star, title: "Guided Onboarding", text: "Interactive tour to get clients up to speed in minutes" },
    ],
    mockupType: "portal",
  },
  {
    slug: "time-tracking",
    icon: Clock,
    label: "Time Tracking",
    title: "Know where every billable minute goes",
    description:
      "Real-time timers, manual entries, daily timesheets, and a manager approval workflow — built into every project.",
    bullets: [
      { icon: Timer, title: "Live Timers", text: "One-click start/stop timer on any project" },
      { icon: CalendarDays, title: "Daily Timesheets", text: "Date-based timesheet view with easy navigation" },
      { icon: BadgeCheck, title: "Approval Workflow", text: "Manager review — Pending, Approved, or Rejected" },
      { icon: FileDown, title: "Manual Entries", text: "Log time manually with project, start/end, and notes" },
      { icon: Activity, title: "Duration Breakdown", text: "Hours and minutes formatting for clear reporting" },
      { icon: TrendingUp, title: "Billable Hours", text: "Separate billable vs non-billable time tracking" },
    ],
    mockupType: "timetracking",
  },
  {
    slug: "invoicing",
    icon: Receipt,
    label: "Invoicing & Payments",
    title: "From tracked hours to paid invoices",
    description:
      "Generate invoices, accept online payments through Razorpay, manage retainer billing, and track revenue — all in one workflow.",
    bullets: [
      { icon: FileText, title: "Auto Invoicing", text: "Generate professional invoices with line items in seconds" },
      { icon: CreditCard, title: "Razorpay Payments", text: "Accept online payments with secure webhook verification" },
      { icon: FileDown, title: "PDF Downloads", text: "Downloadable PDF invoices for clients and your records" },
      { icon: Repeat, title: "Retainer Billing", text: "Recurring billing for ongoing client engagements" },
      { icon: TrendingUp, title: "Payment Status", text: "Track invoices — Draft, Sent, Paid, Overdue at a glance" },
      { icon: Activity, title: "Revenue Analytics", text: "Monthly revenue breakdown and financial insights" },
    ],
    mockupType: "billing",
  },
  {
    slug: "team-management",
    icon: Users,
    label: "Team Management",
    title: "Build and manage your agency team",
    description:
      "Invite members via email, assign granular roles, control permissions, and give your team their own focused portal.",
    bullets: [
      { icon: UserPlus, title: "Team Invites", text: "Email-based invitations with a smooth onboarding flow" },
      { icon: KeyRound, title: "Role System", text: "5-tier roles: Owner, Admin, Manager, Member, Viewer" },
      { icon: Eye, title: "Permissions", text: "Granular permission control for every role" },
      { icon: Activity, title: "Status Management", text: "Activate or deactivate team members anytime" },
      { icon: Globe, title: "Team Portal", text: "Dedicated portal at team.youragency.com for your crew" },
      { icon: CheckSquare, title: "Task Assignment", text: "Assign tasks and distribute workload across the team" },
    ],
    mockupType: "team",
  },
  {
    slug: "communication",
    icon: MessageSquare,
    label: "Communication",
    title: "Keep everyone in the loop",
    description:
      "Real-time messaging, support tickets with satisfaction ratings, project updates, and email notifications — collaboration built in.",
    bullets: [
      { icon: MessagesSquare, title: "Chat Rooms", text: "Split-panel messaging with real-time polling" },
      { icon: TicketIcon, title: "Support Tickets", text: "Priority and status management for client requests" },
      { icon: HeadphonesIcon, title: "Satisfaction Ratings", text: "Clients rate resolved tickets for quality tracking" },
      { icon: FileText, title: "Project Updates", text: "Status, Milestone, Deliverable, and General updates" },
      { icon: Star, title: "Notifications", text: "Customizable email notification preferences per user" },
      { icon: Activity, title: "Real-Time Sync", text: "Unread counts and instant updates across all channels" },
    ],
    mockupType: "messaging",
  },
  {
    slug: "reports",
    icon: BarChart3,
    label: "Reports & Analytics",
    title: "Make data-driven decisions",
    description:
      "Project health dashboards, revenue analytics, expense tracking, team utilization, and publishable client reports.",
    bullets: [
      { icon: PieChart, title: "Health Dashboard", text: "Project health overview with KPI tracking at a glance" },
      { icon: TrendingUp, title: "Revenue Analytics", text: "Revenue and expense trends with visual breakdowns" },
      { icon: FileText, title: "Client Reports", text: "Publish custom reports with rich content for clients" },
      { icon: Activity, title: "Team Utilization", text: "Capacity and utilization metrics across your team" },
      { icon: BadgeCheck, title: "Report Publishing", text: "Control which reports are visible to clients" },
      { icon: FileDown, title: "Data Export", text: "Export reports and analytics data in standard formats" },
    ],
    mockupType: "analytics",
  },
  {
    slug: "security",
    icon: Shield,
    label: "Security & Administration",
    title: "Enterprise-grade security built in",
    description:
      "Multi-tenant architecture, JWT authentication, session management, audit logs, and maintenance mode — secure by design.",
    bullets: [
      { icon: Lock, title: "Dual-Token Auth", text: "JWT authentication with 15-min access and 30-day refresh tokens" },
      { icon: ScrollText, title: "Audit Logs", text: "Comprehensive logs for every action across the platform" },
      { icon: ServerCog, title: "Maintenance Mode", text: "Branded downtime page when you need to go offline" },
      { icon: Settings, title: "Multi-Tenant", text: "Complete organization isolation for data security" },
      { icon: Eye, title: "Session Control", text: "View active sessions and revoke access instantly" },
      { icon: Shield, title: "RBAC", text: "Role-based access control across all portals" },
    ],
    mockupType: "security",
  },
];

export function getFeatureBySlug(slug: string): FeatureData | undefined {
  return featurePages.find((f) => f.slug === slug);
}

export function getRelatedFeatures(currentSlug: string, count = 3): FeatureData[] {
  const others = featurePages.filter((f) => f.slug !== currentSlug);
  // Return evenly spaced features for variety
  const step = Math.floor(others.length / count);
  const result: FeatureData[] = [];
  for (let i = 0; i < count && i * step < others.length; i++) {
    result.push(others[i * step]);
  }
  return result;
}
