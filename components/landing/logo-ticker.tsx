"use client";

import {
  FolderKanban,
  Clock,
  Receipt,
  MessageSquare,
  FolderOpen,
  BarChart3,
  Users,
  CheckSquare,
  FileText,
  Shield,
} from "lucide-react";

const tools = [
  { icon: FolderKanban, label: "Project boards", example: "Trello, Asana" },
  { icon: Clock, label: "Time trackers", example: "Toggl, Harvest" },
  { icon: Receipt, label: "Invoice tools", example: "FreshBooks, Zoho" },
  { icon: MessageSquare, label: "Client emails", example: "Gmail threads" },
  { icon: FolderOpen, label: "File sharing", example: "Google Drive" },
  { icon: BarChart3, label: "Report builders", example: "Sheets, Notion" },
  { icon: Users, label: "Team management", example: "Slack, Monday" },
  { icon: CheckSquare, label: "Approval workflows", example: "Email chains" },
  { icon: FileText, label: "Client portals", example: "Custom-built" },
  { icon: Shield, label: "Support tickets", example: "Freshdesk, Zendesk" },
];

export function LogoTicker() {
  const items = [...tools, ...tools];

  return (
    <section className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-4xl text-center mb-8">
        <p className="text-sm font-semibold tracking-wide uppercase text-indigo-600 mb-2">
          Stop paying for 10 different tools
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
          One platform to replace your entire stack
        </h2>
      </div>

      <div
        className="relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        {/* Row 1 — scrolls left */}
        <div className="flex gap-3 sm:gap-4 ticker-track w-max mb-3">
          {items.map((tool, i) => (
            <div
              key={`a-${tool.label}-${i}`}
              className="flex items-center gap-2.5 shrink-0 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 transition-colors hover:border-indigo-200 hover:bg-indigo-50/50"
            >
              <div className="flex items-center justify-center size-7 rounded-md bg-indigo-100 text-indigo-600">
                <tool.icon className="size-3.5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[13px] font-semibold text-slate-800 whitespace-nowrap leading-tight">
                  {tool.label}
                </span>
                <span className="text-[11px] text-slate-400 whitespace-nowrap leading-tight">
                  {tool.example}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 — scrolls right */}
        <div className="flex gap-3 sm:gap-4 ticker-track-reverse w-max">
          {[...items].reverse().map((tool, i) => (
            <div
              key={`b-${tool.label}-${i}`}
              className="flex items-center gap-2.5 shrink-0 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 transition-colors hover:border-indigo-200 hover:bg-indigo-50/50"
            >
              <div className="flex items-center justify-center size-7 rounded-md bg-indigo-100 text-indigo-600">
                <tool.icon className="size-3.5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[13px] font-semibold text-slate-800 whitespace-nowrap leading-tight">
                  {tool.label}
                </span>
                <span className="text-[11px] text-slate-400 whitespace-nowrap leading-tight">
                  {tool.example}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
