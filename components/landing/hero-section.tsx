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
    <div className="rounded-xl border border-slate-200 shadow-2xl shadow-slate-200/50 overflow-hidden bg-white">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-slate-50 border-b border-slate-200">
        <div className="flex gap-1.5">
          <div className="size-2.5 sm:size-3 rounded-full bg-red-400" />
          <div className="size-2.5 sm:size-3 rounded-full bg-amber-400" />
          <div className="size-2.5 sm:size-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 mx-2 sm:mx-4">
          <div className="h-5 sm:h-6 rounded-md bg-white border border-slate-200 flex items-center px-2 sm:px-3">
            <span className="text-[8px] sm:text-[10px] text-slate-400">app.projexia.in/dashboard</span>
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
              <div className={`size-3.5 rounded ${item.active ? "bg-white/20" : "bg-slate-200"}`} />
              {item.label}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 p-3 sm:p-5">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
            <div>
              <div className="text-xs font-semibold text-slate-900">Good morning, Sarah</div>
              <div className="text-[10px] text-slate-400">Here&apos;s what&apos;s happening today</div>
            </div>
            <div className="flex gap-2">
              <div className="h-7 px-3 rounded-md bg-white border border-slate-200 flex items-center">
                <span className="text-[9px] text-slate-400">Search...</span>
              </div>
              <div className="h-7 px-3 rounded-md bg-slate-900 flex items-center">
                <span className="text-[9px] text-white font-medium">+ New Project</span>
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
              <div key={stat.label} className="rounded-lg border border-slate-200 bg-white p-2 sm:p-3">
                <div className="text-[8px] sm:text-[9px] text-slate-400">{stat.label}</div>
                <div className="flex items-baseline gap-1 sm:gap-1.5 mt-1">
                  <span className="text-sm sm:text-lg font-bold text-slate-900">{stat.value}</span>
                  <span className={`text-[8px] font-medium ${stat.up ? "text-emerald-600" : "text-blue-600"}`}>
                    {stat.change}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Two column */}
          <div className="flex gap-3">
            <div className="flex-[2] rounded-lg border border-slate-200 bg-white p-2 sm:p-3">
              <div className="text-[10px] font-semibold text-slate-900 mb-2">Recent Projects</div>
              {[
                { name: "E-commerce Redesign", progress: 72, color: "bg-emerald-500" },
                { name: "Mobile App MVP", progress: 45, color: "bg-blue-500" },
                { name: "Brand Guidelines", progress: 90, color: "bg-amber-500" },
                { name: "SEO Optimization", progress: 30, color: "bg-violet-500" },
              ].map((project) => (
                <div key={project.name} className="flex items-center gap-2 sm:gap-3 py-1.5 sm:py-2 border-b border-slate-100 last:border-0">
                  <div className={`size-2 rounded-full shrink-0 ${project.color}`} />
                  <span className="text-[8px] sm:text-[9px] font-medium text-slate-700 flex-1 truncate">{project.name}</span>
                  <div className="w-10 sm:w-16 h-1.5 rounded-full bg-slate-100 shrink-0 hidden sm:block">
                    <div className={`h-1.5 rounded-full ${project.color}`} style={{ width: `${project.progress}%`, opacity: 0.7 }} />
                  </div>
                  <span className="text-[8px] text-slate-400 w-8 text-right shrink-0">{project.progress}%</span>
                </div>
              ))}
            </div>

            <div className="flex-1 rounded-lg border border-slate-200 bg-white p-3 hidden lg:block">
              <div className="text-[10px] font-semibold text-slate-900 mb-2">Activity</div>
              {[
                { text: "Invoice #42 paid", time: "2m", dot: "bg-emerald-500" },
                { text: "New task assigned", time: "15m", dot: "bg-blue-500" },
                { text: "Client approved", time: "1h", dot: "bg-amber-500" },
                { text: "Milestone reached", time: "3h", dot: "bg-violet-500" },
              ].map((a) => (
                <div key={a.text} className="flex items-center gap-2 py-1.5">
                  <div className={`size-1.5 rounded-full ${a.dot}`} />
                  <span className="text-[8px] text-slate-500 flex-1">{a.text}</span>
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
    <section
      ref={ref}
      className="relative overflow-hidden pt-36 pb-20 sm:pb-28"
    >
      {/* Radial color gradient glow */}
      <svg
        viewBox="-1000 0 3504 918"
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 left-1/2 -z-10 w-[219rem] -translate-x-1/2 mix-blend-color-burn"
      >
        <path fill="url(#hero-gradient)" d="M3504 918H-1000V0h3504v918Z" />
        <defs>
          <radialGradient
            id="hero-gradient"
            cx="0"
            cy="0"
            r="1"
            gradientTransform="matrix(0 707.279 -1739.2 0 741 159.991)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6C47FF" stopOpacity="0.6" />
            <stop offset=".412" stopColor="#FFF963" stopOpacity=".8" />
            <stop offset=".623" stopColor="#38DAFD" stopOpacity=".6" />
            <stop offset=".919" stopColor="#6248F6" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0">
        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgb(226 232 240)" strokeWidth="0.5" />
            </pattern>
            <radialGradient id="hero-fade" cx="50%" cy="40%" r="50%">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="100%" stopColor="white" stopOpacity="1" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
          <rect width="100%" height="100%" fill="url(#hero-fade)" />
        </svg>
      </div>


      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1] text-slate-900"
        >
          More than project tracking,
          <br />
          <span className="text-slate-900">Complete Agency Management</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-slate-500 leading-relaxed"
        >
          Need more than a task board? Projexia gives you project management,
          client portals, invoicing, and team tracking — so you can run your
          agency from one place.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Button asChild size="lg" className="h-11 rounded-full px-7 text-sm font-semibold shadow-md">
            <Link href="/register">
              Start building for free
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-5 flex flex-wrap items-center justify-center gap-4 text-[13px] text-slate-400"
        >
          {badges.map((badge) => (
            <span key={badge} className="inline-flex items-center gap-1.5">
              <Check className="size-3.5 text-slate-400" />
              {badge}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Dashboard mockup */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="relative z-10 mt-16 mx-auto max-w-5xl px-4 sm:px-6"
      >
        <DashboardMockup />
      </motion.div>
    </section>
  );
}
