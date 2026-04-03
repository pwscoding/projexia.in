"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import logo from "@/assets/projexia-logo.png";

const badges = [
  "Free forever plan",
  "2 min setup",
  "No credit card",
];

function DashboardMockup() {
  return (
    <div className="rounded-xl border border-slate-200/80 shadow-2xl shadow-slate-300/40 overflow-hidden bg-white">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-slate-50 border-b border-slate-200">
        <div className="flex gap-1.5">
          <div className="size-2.5 sm:size-3 rounded-full bg-red-400" />
          <div className="size-2.5 sm:size-3 rounded-full bg-amber-400" />
          <div className="size-2.5 sm:size-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 mx-2 sm:mx-4">
          <div className="h-5 sm:h-6 rounded-md bg-white border border-slate-200 flex items-center px-2 sm:px-3">
            <span className="text-[8px] sm:text-[10px] text-slate-400">
              app.projexia.in/dashboard
            </span>
          </div>
        </div>
      </div>

      {/* App layout */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-[160px] border-r border-slate-200 p-3 bg-slate-50/50 hidden md:block">
          <div className="flex items-center gap-2 mb-4">
            <img src={logo.src} alt="Projexia" className="h-5 w-auto" />
          </div>
          {[
            { label: "Dashboard", active: true },
            { label: "Projects", active: false },
            { label: "Clients", active: false },
            { label: "Team", active: false },
            { label: "Time Tracking", active: false },
            { label: "Invoices", active: false },
            { label: "Reports", active: false },
          ].map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-2 px-2.5 py-1.5 rounded-md text-[10px] mb-0.5 ${
                item.active
                  ? "bg-slate-900 text-white font-medium"
                  : "text-slate-500"
              }`}
            >
              <div
                className={`size-3.5 rounded ${
                  item.active ? "bg-white/20" : "bg-slate-200"
                }`}
              />
              {item.label}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 p-3 sm:p-5">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
            <div>
              <div className="text-xs font-semibold text-slate-900">
                Good morning, Sarah
              </div>
              <div className="text-[10px] text-slate-400">
                Here&apos;s what&apos;s happening today
              </div>
            </div>
            <div className="flex gap-2">
              <div className="h-7 px-3 rounded-md bg-white border border-slate-200 flex items-center">
                <span className="text-[9px] text-slate-400">Search...</span>
              </div>
              <div className="h-7 px-3 rounded-md bg-slate-900 flex items-center">
                <span className="text-[9px] text-white font-medium">
                  + New Project
                </span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-4">
            {[
              { label: "Active Projects", value: "12", change: "+2", up: true },
              { label: "Pending Tasks", value: "34", change: "-5", up: false },
              { label: "Team Members", value: "8", change: "+1", up: true },
              { label: "This Month", value: "3.2L", change: "+18%", up: true },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-slate-200 bg-white p-2 sm:p-3"
              >
                <div className="text-[8px] sm:text-[9px] text-slate-400">
                  {stat.label}
                </div>
                <div className="flex items-baseline gap-1 sm:gap-1.5 mt-1">
                  <span className="text-sm sm:text-lg font-bold text-slate-900">
                    {stat.value}
                  </span>
                  <span
                    className={`text-[8px] font-medium ${
                      stat.up ? "text-emerald-600" : "text-blue-600"
                    }`}
                  >
                    {stat.change}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Two column */}
          <div className="flex gap-3">
            <div className="flex-[2] rounded-lg border border-slate-200 bg-white p-2 sm:p-3">
              <div className="text-[10px] font-semibold text-slate-900 mb-2">
                Recent Projects
              </div>
              {[
                { name: "E-commerce Redesign", progress: 72, color: "bg-emerald-500" },
                { name: "Mobile App MVP", progress: 45, color: "bg-blue-500" },
                { name: "Brand Guidelines", progress: 90, color: "bg-amber-500" },
                { name: "SEO Optimization", progress: 30, color: "bg-violet-500" },
              ].map((project) => (
                <div
                  key={project.name}
                  className="flex items-center gap-2 sm:gap-3 py-1.5 sm:py-2 border-b border-slate-100 last:border-0"
                >
                  <div className={`size-2 rounded-full shrink-0 ${project.color}`} />
                  <span className="text-[8px] sm:text-[9px] font-medium text-slate-700 flex-1 truncate">
                    {project.name}
                  </span>
                  <div className="w-10 sm:w-16 h-1.5 rounded-full bg-slate-100 shrink-0 hidden sm:block">
                    <div
                      className={`h-1.5 rounded-full ${project.color}`}
                      style={{ width: `${project.progress}%`, opacity: 0.7 }}
                    />
                  </div>
                  <span className="text-[8px] text-slate-400 w-8 text-right shrink-0">
                    {project.progress}%
                  </span>
                </div>
              ))}
            </div>

            <div className="flex-1 rounded-lg border border-slate-200 bg-white p-3 hidden lg:block">
              <div className="text-[10px] font-semibold text-slate-900 mb-2">
                Activity
              </div>
              {[
                { text: "Invoice #42 paid", time: "2m", dot: "bg-emerald-500" },
                { text: "New task assigned", time: "15m", dot: "bg-blue-500" },
                { text: "Client approved", time: "1h", dot: "bg-amber-500" },
                { text: "Milestone reached", time: "3h", dot: "bg-violet-500" },
              ].map((a) => (
                <div key={a.text} className="flex items-center gap-2 py-1.5">
                  <div className={`size-1.5 rounded-full ${a.dot}`} />
                  <span className="text-[8px] text-slate-500 flex-1">
                    {a.text}
                  </span>
                  <span className="text-[7px] text-slate-300">{a.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="relative overflow-hidden pt-28 pb-20 sm:pb-28">
      {/* Subtle background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-[100px]" style={{ background: "radial-gradient(ellipse at center, rgba(99,102,241,0.12), rgba(167,139,250,0.08), rgba(249,112,102,0.05))" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center">
        {/* Headline — what it is + who it's for */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-[2rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem] font-bold tracking-[-0.025em] leading-[1.1] text-slate-900"
        >
          The only PM tool with{" "}
          <br className="hidden sm:block" />
          <span className="gradient-text-full">built-in client portals</span>
        </motion.h1>

        {/* Subheadline — problem it solves */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 max-w-[38rem] mx-auto text-base sm:text-lg text-slate-500 leading-relaxed"
        >
          Stop sending status update emails. Give every client a branded portal
          to track progress, approve work, and pay invoices — while you manage everything from one dashboard.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Button
            asChild
            size="lg"
            className="h-12 rounded-full px-8 text-sm font-semibold shadow-lg shadow-[rgba(99,102,241,0.25)] hover:shadow-xl hover:shadow-[rgba(99,102,241,0.3)] transition-all cta-glow"
          >
            <Link href="/register">
              Start Free — No Credit Card
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-12 rounded-full px-8 text-sm font-semibold border-slate-200 hover:bg-slate-50"
          >
            <Link href="#demo">See it in action</Link>
          </Button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px] text-slate-400"
        >
          {badges.map((badge) => (
            <span key={badge} className="inline-flex items-center gap-1.5">
              <Check className="size-3.5 text-emerald-500" />
              {badge}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Product screenshot */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="relative z-10 mt-16 mx-auto max-w-5xl px-4 sm:px-6"
      >
        <div className="absolute inset-x-8 -top-4 bottom-0 rounded-3xl blur-2xl -z-10" style={{ background: "linear-gradient(to bottom, rgba(99,102,241,0.15), rgba(167,139,250,0.08), transparent)" }} />
        <DashboardMockup />
      </motion.div>
    </section>
  );
}
