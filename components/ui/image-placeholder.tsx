"use client";

import { cn } from "@/lib/utils";

type PlaceholderVariant =
  | "screenshot"
  | "logo"
  | "avatar"
  | "kanban"
  | "portal"
  | "timetracking"
  | "messaging"
  | "analytics"
  | "automation";

interface ImagePlaceholderProps {
  variant: PlaceholderVariant;
  label?: string;
  className?: string;
  glow?: boolean;
}

export function ImagePlaceholder({
  variant,
  label,
  className,
}: ImagePlaceholderProps) {
  const initials = label
    ? label
        .split(" ")
        .map((w) => w[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "";

  if (variant === "screenshot") {
    return (
      <div className={cn("overflow-hidden", className)}>
        <div className="flex items-center gap-2 px-4 py-3 bg-muted/60 border-b border-border">
          <div className="flex gap-1.5">
            <div className="size-3 rounded-full bg-red-400" />
            <div className="size-3 rounded-full bg-amber-400" />
            <div className="size-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 mx-4">
            <div className="h-6 rounded-md bg-white border border-border flex items-center px-3">
              <span className="text-[10px] text-muted-foreground">app.projexia.in/dashboard</span>
            </div>
          </div>
        </div>
        <div className="relative aspect-[16/10] bg-gradient-to-br from-muted/40 via-white to-primary/5">
          <div className="absolute inset-0 p-4 space-y-3">
            <div className="flex gap-3">
              <div className="h-8 w-32 rounded-md bg-muted" />
              <div className="h-8 flex-1 rounded-md bg-muted/60" />
              <div className="h-8 w-24 rounded-md bg-primary/15" />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-16 rounded-lg bg-white border border-border shadow-sm" />
              ))}
            </div>
            <div className="flex gap-3 flex-1">
              <div className="flex-[2] rounded-lg bg-white border border-border shadow-sm min-h-[80px]" />
              <div className="flex-1 rounded-lg bg-white border border-border shadow-sm min-h-[80px]" />
            </div>
            <div className="space-y-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-8 rounded-md bg-white border border-border shadow-sm" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "kanban") {
    return (
      <div className={cn("bg-muted/30 p-4 aspect-[4/3]", className)}>
        <div className="flex gap-3 h-full">
          {["To Do", "In Progress", "Done"].map((col) => (
            <div key={col} className="flex-1 flex flex-col">
              <div className="text-[10px] font-semibold text-muted-foreground mb-2 uppercase tracking-wider">{col}</div>
              <div className="flex-1 bg-white rounded-lg border border-border p-2 space-y-2">
                {[...Array(col === "In Progress" ? 2 : 3)].map((_, i) => (
                  <div key={i} className="rounded-md border border-border p-2 bg-white shadow-sm">
                    <div className="h-2 w-3/4 rounded bg-muted mb-1.5" />
                    <div className="h-1.5 w-full rounded bg-muted/60" />
                    <div className="flex items-center gap-1 mt-2">
                      <div className="size-4 rounded-full bg-primary/15" />
                      <div className="h-1.5 w-8 rounded bg-muted/60" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (variant === "portal") {
    return (
      <div className={cn("bg-muted/30 p-4 aspect-[4/3]", className)}>
        <div className="h-full bg-white rounded-lg border border-border overflow-hidden">
          <div className="h-10 bg-primary/10 border-b border-border flex items-center px-3 gap-2">
            <div className="size-5 rounded bg-primary/20" />
            <div className="h-2 w-20 rounded bg-primary/20" />
            <div className="ml-auto flex gap-2">
              <div className="h-6 w-14 rounded bg-primary/15 border border-primary/20" />
            </div>
          </div>
          <div className="p-3 space-y-3">
            <div className="flex gap-3">
              <div className="flex-1 rounded-lg border border-border p-3">
                <div className="h-2 w-16 rounded bg-muted mb-2" />
                <div className="h-8 w-full rounded bg-green-100 border border-green-200 flex items-center justify-center">
                  <div className="h-2 w-12 rounded bg-green-300" />
                </div>
              </div>
              <div className="flex-1 rounded-lg border border-border p-3">
                <div className="h-2 w-12 rounded bg-muted mb-2" />
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-2 w-3/4 rounded-full bg-primary" />
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-border p-3 space-y-2">
              <div className="h-2 w-20 rounded bg-muted" />
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="size-3 rounded border border-border" />
                  <div className="h-2 flex-1 rounded bg-muted/60" />
                  <div className="h-5 w-16 rounded bg-amber-100 border border-amber-200" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "timetracking") {
    return (
      <div className={cn("bg-muted/30 p-4 aspect-[4/3]", className)}>
        <div className="h-full bg-white rounded-lg border border-border overflow-hidden">
          <div className="p-3 space-y-3">
            <div className="flex items-center justify-between">
              <div className="h-2 w-20 rounded bg-muted" />
              <div className="h-7 w-20 rounded-lg bg-primary flex items-center justify-center">
                <div className="h-2 w-10 rounded bg-white/50" />
              </div>
            </div>
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-3 p-2 rounded-lg border border-border">
                <div className="size-8 rounded-lg bg-primary/10" />
                <div className="flex-1">
                  <div className="h-2 w-24 rounded bg-muted mb-1" />
                  <div className="h-1.5 w-16 rounded bg-muted/60" />
                </div>
                <div className="text-right">
                  <div className="h-2 w-12 rounded bg-muted mb-1" />
                  <div className="h-1.5 w-8 rounded bg-green-200" />
                </div>
              </div>
            ))}
            <div className="rounded-lg border border-border p-3">
              <div className="flex justify-between mb-2">
                <div className="h-2 w-16 rounded bg-muted" />
                <div className="h-2 w-10 rounded bg-muted" />
              </div>
              <div className="h-16 rounded bg-muted/30 flex items-end gap-1 px-2 pb-2">
                {[40, 65, 30, 80, 55, 70, 45].map((h, i) => (
                  <div key={i} className="flex-1 bg-primary/20 rounded-t" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "messaging") {
    return (
      <div className={cn("bg-muted/30 p-4 aspect-[4/3]", className)}>
        <div className="h-full bg-white rounded-lg border border-border overflow-hidden flex">
          <div className="w-1/3 border-r border-border p-2 space-y-1.5">
            {[...Array(5)].map((_, i) => (
              <div key={i} className={`flex items-center gap-2 p-1.5 rounded-md ${i === 0 ? "bg-primary/5" : ""}`}>
                <div className="size-6 rounded-full bg-primary/15 shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="h-1.5 w-12 rounded bg-muted" />
                  <div className="h-1 w-16 rounded bg-muted/60 mt-0.5" />
                </div>
              </div>
            ))}
          </div>
          <div className="flex-1 flex flex-col p-3">
            <div className="flex-1 space-y-2">
              <div className="flex gap-2">
                <div className="size-5 rounded-full bg-primary/15 shrink-0" />
                <div className="rounded-lg bg-muted/40 px-2.5 py-1.5 max-w-[70%]">
                  <div className="h-1.5 w-28 rounded bg-muted" />
                  <div className="h-1.5 w-20 rounded bg-muted mt-1" />
                </div>
              </div>
              <div className="flex gap-2 justify-end">
                <div className="rounded-lg bg-primary/10 px-2.5 py-1.5 max-w-[70%]">
                  <div className="h-1.5 w-24 rounded bg-primary/20" />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="size-5 rounded-full bg-primary/15 shrink-0" />
                <div className="rounded-lg bg-muted/40 px-2.5 py-1.5 max-w-[70%]">
                  <div className="h-1.5 w-32 rounded bg-muted" />
                </div>
              </div>
            </div>
            <div className="mt-2 flex gap-2">
              <div className="flex-1 h-7 rounded-md border border-border" />
              <div className="h-7 w-14 rounded-md bg-primary/15" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "analytics") {
    return (
      <div className={cn("bg-muted/30 p-4 aspect-[4/3]", className)}>
        <div className="h-full bg-white rounded-lg border border-border overflow-hidden p-3 space-y-3">
          <div className="grid grid-cols-3 gap-2">
            {["Revenue", "Projects", "Utilization"].map((label) => (
              <div key={label} className="rounded-lg border border-border p-2">
                <div className="text-[8px] text-muted-foreground">{label}</div>
                <div className="h-3 w-12 rounded bg-muted mt-1" />
              </div>
            ))}
          </div>
          <div className="rounded-lg border border-border p-2 flex-1">
            <div className="h-2 w-16 rounded bg-muted mb-2" />
            <div className="h-24 flex items-end gap-1.5 px-1">
              {[35, 50, 45, 70, 60, 80, 55, 90, 65, 75, 85, 70].map((h, i) => (
                <div key={i} className="flex-1 bg-primary/20 rounded-t" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-lg border border-border p-2">
              <div className="h-12 rounded bg-muted/30 flex items-center justify-center">
                <div className="size-10 rounded-full border-3 border-primary/30 border-t-primary" />
              </div>
            </div>
            <div className="rounded-lg border border-border p-2 space-y-1.5">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <div className="size-2 rounded-full bg-primary/30" />
                  <div className="h-1.5 flex-1 rounded bg-muted" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "automation") {
    return (
      <div className={cn("bg-muted/30 p-4 aspect-[4/3]", className)}>
        <div className="h-full bg-white rounded-lg border border-border overflow-hidden p-3">
          <div className="flex flex-col items-center justify-center h-full gap-3">
            {/* Trigger */}
            <div className="w-48 rounded-lg border-2 border-primary/30 bg-primary/5 p-2.5 text-center">
              <div className="text-[8px] text-primary font-semibold uppercase">When</div>
              <div className="h-2 w-28 rounded bg-primary/20 mx-auto mt-1" />
            </div>
            <div className="w-px h-4 bg-border" />
            <div className="size-6 rounded-full bg-primary/10 flex items-center justify-center">
              <div className="text-[8px] text-primary font-bold">+</div>
            </div>
            <div className="w-px h-4 bg-border" />
            {/* Action 1 */}
            <div className="w-48 rounded-lg border border-border bg-white p-2.5 text-center shadow-sm">
              <div className="text-[8px] text-muted-foreground font-semibold uppercase">Then</div>
              <div className="h-2 w-24 rounded bg-muted mx-auto mt-1" />
            </div>
            <div className="w-px h-4 bg-border" />
            {/* Action 2 */}
            <div className="w-48 rounded-lg border border-border bg-white p-2.5 text-center shadow-sm">
              <div className="text-[8px] text-muted-foreground font-semibold uppercase">And</div>
              <div className="h-2 w-20 rounded bg-muted mx-auto mt-1" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "logo") {
    return (
      <div
        className={cn(
          "inline-flex items-center justify-center rounded-lg bg-muted border border-border text-xs font-bold text-muted-foreground",
          "size-10",
          className
        )}
      >
        {initials}
      </div>
    );
  }

  // avatar
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary",
        "size-10",
        className
      )}
    >
      {initials}
    </div>
  );
}
