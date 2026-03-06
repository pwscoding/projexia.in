"use client";

import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  variant: "screenshot" | "logo" | "avatar";
  label?: string;
  className?: string;
  glow?: boolean;
}

export function ImagePlaceholder({
  variant,
  label,
  className,
  glow = false,
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
      <div
        className={cn(
          "rounded-xl border border-border overflow-hidden",
          glow && "glow",
          className
        )}
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-4 py-3 bg-card border-b border-border">
          <div className="flex gap-1.5">
            <div className="size-3 rounded-full bg-red-500/60" />
            <div className="size-3 rounded-full bg-yellow-500/60" />
            <div className="size-3 rounded-full bg-green-500/60" />
          </div>
          <div className="flex-1 mx-4">
            <div className="h-6 rounded-md bg-background/60 flex items-center px-3">
              <span className="text-[10px] text-muted-foreground">
                app.projexia.in/dashboard
              </span>
            </div>
          </div>
        </div>
        {/* Content area */}
        <div className="relative aspect-[16/10] bg-gradient-to-br from-indigo/10 via-card to-purple/10">
          {/* Mock dashboard elements */}
          <div className="absolute inset-0 p-4 space-y-3">
            {/* Top bar */}
            <div className="flex gap-3">
              <div className="h-8 w-32 rounded-md bg-muted/40" />
              <div className="h-8 flex-1 rounded-md bg-muted/20" />
              <div className="h-8 w-24 rounded-md bg-indigo/20" />
            </div>
            {/* Stat cards */}
            <div className="grid grid-cols-4 gap-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="h-16 rounded-lg bg-muted/30 border border-border/50"
                />
              ))}
            </div>
            {/* Chart area */}
            <div className="flex gap-3 flex-1">
              <div className="flex-[2] rounded-lg bg-muted/20 border border-border/50 min-h-[80px]" />
              <div className="flex-1 rounded-lg bg-muted/20 border border-border/50 min-h-[80px]" />
            </div>
            {/* Table rows */}
            <div className="space-y-2">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="h-8 rounded-md bg-muted/20 border border-border/30"
                />
              ))}
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
          "inline-flex items-center justify-center rounded-lg bg-muted/40 border border-border/50 text-xs font-bold text-muted-foreground",
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
        "inline-flex items-center justify-center rounded-full bg-indigo/20 text-sm font-semibold text-indigo",
        "size-10",
        className
      )}
    >
      {initials}
    </div>
  );
}
