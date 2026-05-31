"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Signal, Wifi, BatteryMedium, ArrowUp } from "lucide-react";

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
            className="flex justify-center"
          >
            <div className="relative w-[268px] shrink-0">
              {/* ambient glow behind the device */}
              <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] bg-slate-900/[0.04] blur-2xl" />

              {/* phone body */}
              <div className="rounded-[2.75rem] border border-slate-800 bg-slate-900 p-2.5 shadow-2xl shadow-slate-900/40">
                {/* screen */}
                <div className="relative flex h-[496px] flex-col overflow-hidden rounded-[2.25rem] bg-slate-950">
                  {/* notch */}
                  <div className="absolute left-1/2 top-2.5 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-slate-900" />

                  {/* status bar */}
                  <div className="flex items-center justify-between px-6 pt-3.5 pb-2">
                    <span className="text-[12px] font-semibold text-slate-200">
                      11:43
                    </span>
                    <div className="flex items-center gap-1.5 text-slate-300">
                      <Signal className="size-3.5" />
                      <Wifi className="size-3.5" />
                      <BatteryMedium className="size-4" />
                    </div>
                  </div>

                  {/* chat header */}
                  <div className="flex items-center gap-2.5 border-b border-slate-800/80 px-4 pb-3 pt-1">
                    <div className="flex size-8 items-center justify-center rounded-full bg-slate-700 text-[11px] font-semibold text-slate-200">
                      C
                    </div>
                    <div className="leading-tight">
                      <div className="text-[13px] font-semibold text-slate-100">
                        Client
                      </div>
                      <div className="text-[10px] text-slate-500">online</div>
                    </div>
                  </div>

                  {/* messages — one lonely message, then silence */}
                  <div className="flex flex-1 flex-col px-4 py-4">
                    <div className="max-w-[82%] self-start rounded-2xl rounded-tl-md bg-slate-800 px-3.5 py-2">
                      <p className="text-[13px] leading-snug text-slate-100">
                        Hey, any update on this? 🙏
                      </p>
                    </div>
                    <div className="mt-1 self-start pl-1 text-[10px] text-slate-500">
                      11:43 PM · Delivered
                    </div>
                    <div className="mt-auto" />
                  </div>

                  {/* reply bar — left empty, the silence */}
                  <div className="flex items-center gap-2 border-t border-slate-800/80 px-3 py-3">
                    <div className="flex h-9 flex-1 items-center rounded-full border border-slate-700 bg-slate-900 px-3.5">
                      <span className="text-[12px] text-slate-600">
                        Type a reply…
                      </span>
                    </div>
                    <div className="flex size-9 items-center justify-center rounded-full bg-slate-700/60">
                      <ArrowUp className="size-4 text-slate-500" />
                    </div>
                  </div>

                  {/* home indicator */}
                  <div className="flex justify-center pb-2.5 pt-1">
                    <div className="h-1 w-24 rounded-full bg-slate-700" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
