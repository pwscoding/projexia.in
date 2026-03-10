"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const badges = [
  "Free forever plan",
  "2 min setup",
  "No credit card",
];

function DashboardMockup() {
  return (
    <div className="rounded-xl border border-border shadow-2xl shadow-black/10 overflow-hidden bg-white">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-muted/60 border-b border-border">
        <div className="flex gap-1.5">
          <div className="size-2.5 sm:size-3 rounded-full bg-red-400" />
          <div className="size-2.5 sm:size-3 rounded-full bg-amber-400" />
          <div className="size-2.5 sm:size-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 mx-2 sm:mx-4">
          <div className="h-5 sm:h-6 rounded-md bg-white border border-border flex items-center px-2 sm:px-3">
            <span className="text-[8px] sm:text-[10px] text-muted-foreground">app.projexia.in/dashboard</span>
          </div>
        </div>
      </div>

      {/* App layout */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-[160px] border-r border-border p-3 bg-muted/20 hidden md:block">
          <div className="flex items-center gap-2 mb-4">
            <div className="size-6 rounded-md bg-primary flex items-center justify-center">
              <span className="text-[7px] font-bold text-white">P</span>
            </div>
            <span className="text-[10px] font-semibold text-foreground">Projexia</span>
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
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground"
              }`}
            >
              <div className={`size-3.5 rounded ${item.active ? "bg-primary/20" : "bg-muted"}`} />
              {item.label}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 p-3 sm:p-5 bg-gradient-to-br from-white to-muted/20">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
            <div>
              <div className="text-xs font-semibold text-foreground">Good morning, Sarah</div>
              <div className="text-[10px] text-muted-foreground">Here&apos;s what&apos;s happening today</div>
            </div>
            <div className="flex gap-2">
              <div className="h-7 px-3 rounded-md bg-white border border-border flex items-center">
                <span className="text-[9px] text-muted-foreground">Search...</span>
              </div>
              <div className="h-7 px-3 rounded-md bg-primary flex items-center">
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
              <div key={stat.label} className="rounded-lg border border-border bg-white p-2 sm:p-3">
                <div className="text-[8px] sm:text-[9px] text-muted-foreground">{stat.label}</div>
                <div className="flex items-baseline gap-1 sm:gap-1.5 mt-1">
                  <span className="text-sm sm:text-lg font-bold text-foreground">{stat.value}</span>
                  <span className={`text-[8px] font-medium ${stat.up ? "text-green-600" : "text-blue-600"}`}>
                    {stat.change}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Two column */}
          <div className="flex gap-3">
            {/* Projects list */}
            <div className="flex-[2] rounded-lg border border-border bg-white p-2 sm:p-3">
              <div className="text-[10px] font-semibold text-foreground mb-2">Recent Projects</div>
              {[
                { name: "E-commerce Redesign", status: "Active", progress: 72, color: "bg-green-500" },
                { name: "Mobile App MVP", status: "In Progress", progress: 45, color: "bg-blue-500" },
                { name: "Brand Guidelines", status: "Review", progress: 90, color: "bg-amber-500" },
                { name: "SEO Optimization", status: "Active", progress: 30, color: "bg-purple-500" },
              ].map((project) => (
                <div key={project.name} className="flex items-center gap-2 sm:gap-3 py-1.5 sm:py-2 border-b border-border last:border-0">
                  <div className={`size-2 rounded-full shrink-0 ${project.color}`} />
                  <span className="text-[8px] sm:text-[9px] font-medium text-foreground flex-1 truncate">{project.name}</span>
                  <div className="w-10 sm:w-16 h-1.5 rounded-full bg-muted shrink-0 hidden sm:block">
                    <div className={`h-1.5 rounded-full ${project.color}/60`} style={{ width: `${project.progress}%` }} />
                  </div>
                  <span className="text-[8px] text-muted-foreground w-8 text-right shrink-0">{project.progress}%</span>
                </div>
              ))}
            </div>

            {/* Activity */}
            <div className="flex-1 rounded-lg border border-border bg-white p-3 hidden lg:block">
              <div className="text-[10px] font-semibold text-foreground mb-2">Activity</div>
              {[
                { text: "Invoice #42 paid", time: "2m", dot: "bg-green-500" },
                { text: "New task assigned", time: "15m", dot: "bg-blue-500" },
                { text: "Client approved", time: "1h", dot: "bg-amber-500" },
                { text: "Milestone reached", time: "3h", dot: "bg-purple-500" },
              ].map((a) => (
                <div key={a.text} className="flex items-center gap-2 py-1.5">
                  <div className={`size-1.5 rounded-full ${a.dot}`} />
                  <span className="text-[8px] text-muted-foreground flex-1">{a.text}</span>
                  <span className="text-[7px] text-muted-foreground/60">{a.time}</span>
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 sm:pb-28"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent" />

      {/* Background SVG decorations */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Soft glow behind headline */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/[0.04] rounded-full blur-[120px]" />

        {/* Top-right arc */}
        <svg className="absolute -top-20 -right-20 w-[400px] h-[400px] text-primary/[0.06]" viewBox="0 0 400 400" fill="none">
          <circle cx="200" cy="200" r="160" stroke="currentColor" strokeWidth="1" strokeDasharray="8 6" />
          <circle cx="200" cy="200" r="120" stroke="currentColor" strokeWidth="0.5" />
        </svg>

        {/* Bottom-left arc */}
        <svg className="absolute -bottom-16 -left-16 w-[350px] h-[350px] text-primary/[0.05]" viewBox="0 0 350 350" fill="none">
          <circle cx="175" cy="175" r="140" stroke="currentColor" strokeWidth="1" strokeDasharray="6 8" />
          <circle cx="175" cy="175" r="100" stroke="currentColor" strokeWidth="0.5" />
        </svg>

        {/* Scattered plus marks */}
        <svg className="absolute top-[15%] left-[8%] w-5 h-5 text-primary/[0.12]" viewBox="0 0 20 20" fill="none">
          <line x1="10" y1="4" x2="10" y2="16" stroke="currentColor" strokeWidth="1.5" />
          <line x1="4" y1="10" x2="16" y2="10" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <svg className="absolute top-[25%] right-[10%] w-4 h-4 text-primary/[0.10]" viewBox="0 0 20 20" fill="none">
          <line x1="10" y1="4" x2="10" y2="16" stroke="currentColor" strokeWidth="1.5" />
          <line x1="4" y1="10" x2="16" y2="10" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <svg className="absolute bottom-[30%] left-[12%] w-3.5 h-3.5 text-primary/[0.08]" viewBox="0 0 20 20" fill="none">
          <line x1="10" y1="4" x2="10" y2="16" stroke="currentColor" strokeWidth="1.5" />
          <line x1="4" y1="10" x2="16" y2="10" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <svg className="absolute top-[40%] right-[6%] w-3 h-3 text-primary/[0.08]" viewBox="0 0 20 20" fill="none">
          <line x1="10" y1="4" x2="10" y2="16" stroke="currentColor" strokeWidth="1.5" />
          <line x1="4" y1="10" x2="16" y2="10" stroke="currentColor" strokeWidth="1.5" />
        </svg>

        {/* Small dots */}
        <div className="absolute top-[20%] right-[18%] size-1.5 rounded-full bg-primary/[0.12]" />
        <div className="absolute top-[35%] left-[6%] size-2 rounded-full bg-primary/[0.10]" />
        <div className="absolute bottom-[40%] right-[14%] size-1.5 rounded-full bg-primary/[0.08]" />
        <div className="absolute top-[12%] left-[22%] size-1 rounded-full bg-primary/[0.10]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm text-muted-foreground mb-10 shadow-sm"
        >
          <span className="size-2 rounded-full bg-green-500 animate-pulse" />
          Built for agencies that deliver
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
        >
          Projects. Clients. Team.
          <br />
          <span className="gradient-text">One platform.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed"
        >
          Manage projects, collaborate with clients through a branded portal,
          track time, send invoices, and grow your agency — all from one place.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <Button asChild size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/25">
            <Link href="/register">
              Start Free — No Credit Card
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base">
            <Link href="#platform">See How It Works</Link>
          </Button>
        </motion.div>

        {/* Pill badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          {badges.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              <Check className="size-3 text-green-600" />
              {badge}
            </span>
          ))}
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 mx-auto max-w-5xl relative"
        >
          <DashboardMockup />

          {/* Floating labels */}
          <div className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute top-[30%] -left-3 transform -translate-x-full"
            >
              <div className="bg-white border border-border rounded-lg px-3 py-2 shadow-lg">
                <div className="text-[10px] font-semibold text-foreground">Client Portal</div>
                <div className="text-[8px] text-muted-foreground">White-label branded</div>
                <div className="absolute top-1/2 right-0 translate-x-full -translate-y-1/2 w-3 h-px bg-border" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="absolute top-[25%] -right-3 transform translate-x-full"
            >
              <div className="bg-white border border-border rounded-lg px-3 py-2 shadow-lg">
                <div className="text-[10px] font-semibold text-foreground">Time Tracking</div>
                <div className="text-[8px] text-muted-foreground">Timer + timesheets</div>
                <div className="absolute top-1/2 left-0 -translate-x-full -translate-y-1/2 w-3 h-px bg-border" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="absolute top-[55%] -right-3 transform translate-x-full"
            >
              <div className="bg-white border border-border rounded-lg px-3 py-2 shadow-lg">
                <div className="text-[10px] font-semibold text-foreground">Invoicing</div>
                <div className="text-[8px] text-muted-foreground">Razorpay payments</div>
                <div className="absolute top-1/2 left-0 -translate-x-full -translate-y-1/2 w-3 h-px bg-border" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="absolute top-[60%] -left-3 transform -translate-x-full"
            >
              <div className="bg-white border border-border rounded-lg px-3 py-2 shadow-lg">
                <div className="text-[10px] font-semibold text-foreground">Team Portal</div>
                <div className="text-[8px] text-muted-foreground">Tasks & time logs</div>
                <div className="absolute top-1/2 right-0 translate-x-full -translate-y-1/2 w-3 h-px bg-border" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
