"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, ArrowRight, Megaphone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// ── Change this to update the announcement site-wide ──────────────
const ANNOUNCEMENT = {
  id: "beta-launch-apr-2026",           // bump this to re-show after dismiss
  badge: "Beta",
  message: "Projexia is in public beta — lock in early pricing before it goes up.",
  cta: { label: "See plans", href: "/pricing" },
};
// ──────────────────────────────────────────────────────────────────

const STORAGE_KEY = `announcement-dismissed-${ANNOUNCEMENT.id}`;

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (dismissed) setVisible(false);
  }, []);

  const dismiss = () => {
    setVisible(false);
    localStorage.setItem(STORAGE_KEY, "1");
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="relative z-[60] overflow-hidden"
        >
          <div
            className={cn(
              "relative bg-slate-950 text-white",
              "before:absolute before:inset-0 before:bg-[linear-gradient(90deg,rgba(99,102,241,0.12)_0%,rgba(167,139,250,0.08)_50%,rgba(249,112,102,0.1)_100%)]"
            )}
          >
            {/* Subtle grain texture */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />

            <div className="relative mx-auto flex h-9 max-w-7xl items-center justify-center gap-3 px-4 sm:px-6 lg:px-8">
              {/* Badge */}
              <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-indigo-300 ring-1 ring-white/10">
                <Megaphone className="size-3" />
                {ANNOUNCEMENT.badge}
              </span>

              {/* Message */}
              <p className="text-[13px] font-medium truncate text-shine">
                {ANNOUNCEMENT.message}
              </p>

              {/* CTA */}
              <Link
                href={ANNOUNCEMENT.cta.href}
                className="group hidden sm:inline-flex shrink-0 items-center gap-1 text-[13px] font-semibold text-white hover:text-indigo-300 transition-colors"
              >
                {ANNOUNCEMENT.cta.label}
                <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
              </Link>

              {/* Dismiss */}
              <button
                onClick={dismiss}
                className="absolute right-3 sm:right-5 p-1 text-slate-500 hover:text-white transition-colors"
                aria-label="Dismiss announcement"
              >
                <X className="size-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
