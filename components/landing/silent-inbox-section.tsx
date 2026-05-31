"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function SilentInboxSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — the hard truth */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-[var(--brand-coral)] uppercase tracking-wider mb-3">
              The part nobody tells you
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
              Your client can&apos;t see how hard you work
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              They don&apos;t see the late nights. The revisions. The care you put
              into every detail. They see a quiet inbox — and quietly wonder what
              they&apos;re paying for.
            </p>
            <p className="mt-4 text-foreground text-lg font-medium leading-relaxed">
              Your best work is invisible. That&apos;s the real problem.
            </p>
          </motion.div>

          {/* Right — a quiet phone at night (callback to 11:43pm) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="mx-auto max-w-xs rounded-[2rem] border border-slate-800 bg-slate-900 p-3 shadow-2xl shadow-slate-900/30">
              {/* status bar */}
              <div className="flex items-center justify-between px-3 pt-1 pb-3">
                <span className="text-[11px] font-medium text-slate-300">11:43</span>
                <div className="flex gap-1">
                  <div className="size-1.5 rounded-full bg-slate-600" />
                  <div className="size-1.5 rounded-full bg-slate-600" />
                  <div className="size-1.5 rounded-full bg-slate-600" />
                </div>
              </div>
              {/* one lonely message */}
              <div className="rounded-2xl bg-slate-800/70 p-4 space-y-3">
                <div className="text-[10px] text-slate-500 uppercase tracking-wider">
                  Client
                </div>
                <div className="self-start max-w-[85%] rounded-2xl rounded-tl-sm bg-slate-700 px-3 py-2">
                  <p className="text-[13px] text-slate-100 leading-snug">
                    Hey, any update on this? 🙏
                  </p>
                </div>
                <div className="text-[10px] text-slate-500 pl-1">Delivered</div>
                {/* empty reply field — the silence */}
                <div className="mt-6 flex items-center gap-2 rounded-full border border-slate-700 px-3 py-2">
                  <span className="text-[12px] text-slate-600">Type a reply…</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
