"use client";

import { useState, useEffect } from "react";
import { ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show after scrolling past 60% of viewport height
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed) return null;

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 transition-all duration-300 md:hidden",
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0 pointer-events-none"
      )}
    >
      <div className="bg-white/95 backdrop-blur-sm border-t border-border px-4 py-3 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-foreground truncate">
              Try Projexia free
            </p>
            <p className="text-xs text-muted-foreground">
              No credit card required
            </p>
          </div>
          <Button asChild size="sm" className="shrink-0 shadow-md shadow-primary/20">
            <Link href="/register">
              Start Free
              <ArrowRight className="ml-1.5 size-3.5" />
            </Link>
          </Button>
          <button
            onClick={() => setDismissed(true)}
            className="shrink-0 p-1.5 text-muted-foreground hover:text-foreground"
            aria-label="Dismiss"
          >
            <X className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
