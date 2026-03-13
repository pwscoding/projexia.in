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
} from "lucide-react";

const tools = [
  { icon: FolderKanban, label: "Project boards" },
  { icon: Clock, label: "Time trackers" },
  { icon: Receipt, label: "Invoice tools" },
  { icon: MessageSquare, label: "Client emails" },
  { icon: FolderOpen, label: "File sharing" },
  { icon: BarChart3, label: "Report builders" },
  { icon: Users, label: "Team management" },
  { icon: CheckSquare, label: "Approval workflows" },
];

export function LogoTicker() {
  const items = [...tools, ...tools];

  return (
    <section className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 border-y border-slate-100 bg-slate-50/50">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-[13px] font-medium text-slate-400 mb-6">
          One platform to replace your
        </p>

        <div
          className="relative"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex gap-3 sm:gap-4 ticker-track w-max">
            {items.map((tool, i) => (
              <div
                key={`${tool.label}-${i}`}
                className="flex items-center gap-2 shrink-0 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm"
              >
                <tool.icon className="size-3.5 text-slate-400" />
                <span className="text-xs font-medium text-slate-500 whitespace-nowrap">
                  {tool.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
