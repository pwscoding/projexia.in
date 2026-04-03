"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Menu, X, ChevronDown, ArrowRight,
  LayoutDashboard, Globe, Clock, Receipt,
  Users, MessageSquare, BarChart3, Shield,
  BookOpen, FileText, Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/projexia-logo.png";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.projexia.in";

const features = [
  { icon: LayoutDashboard, name: "Project Management", desc: "Kanban, Gantt, milestones & templates", slug: "project-management" },
  { icon: Globe, name: "Client Portal", desc: "White-label portal with approvals & files", slug: "client-portal" },
  { icon: Clock, name: "Time Tracking", desc: "Timers, timesheets & approval workflows", slug: "time-tracking" },
  { icon: Receipt, name: "Invoicing", desc: "Auto invoices, payments & retainers", slug: "invoicing" },
  { icon: Users, name: "Team Management", desc: "Roles, permissions & invite flows", slug: "team-management" },
  { icon: MessageSquare, name: "Communication", desc: "Chat rooms, tickets & notifications", slug: "communication" },
  { icon: BarChart3, name: "Reports", desc: "Dashboards, utilization & CSV exports", slug: "reports" },
  { icon: Shield, name: "Security", desc: "Auth, audit logs & session control", slug: "security" },
];

const resourceLinks = [
  { icon: BookOpen, label: "Documentation", href: "https://docs.projexia.in", external: true },
  { icon: FileText, label: "Blog", href: "/blog", external: false },
  { icon: Sparkles, label: "Changelog", href: "#", external: false },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "#" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      setActiveDropdown(null);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveDropdown(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const open = (id: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(id);
  };

  const close = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={cn(
          "transition-all duration-200 border-b",
          scrolled
            ? "bg-white/95 backdrop-blur-md border-slate-200 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
            : "bg-transparent border-transparent"
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <img src={logo.src} alt="Projexia" className="h-9 w-auto" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1 ml-8">
            {/* Product — mega menu */}
            <div
              className="relative"
              onMouseEnter={() => open("product")}
              onMouseLeave={close}
            >
              <button
                className={cn(
                  "flex items-center gap-1 px-3 py-1.5 text-sm font-medium rounded-md transition-colors",
                  activeDropdown === "product"
                    ? "text-slate-900"
                    : "text-slate-600 hover:text-slate-900"
                )}
              >
                Product
                <ChevronDown
                  className={cn(
                    "size-3.5 transition-transform duration-200",
                    activeDropdown === "product" && "rotate-180"
                  )}
                />
              </button>

              <div
                className={cn(
                  "absolute top-full left-0 pt-2 transition-all duration-200",
                  activeDropdown === "product"
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-1 pointer-events-none"
                )}
              >
                <div className="w-[540px] rounded-xl border border-slate-200 bg-white shadow-lg shadow-slate-200/50 p-4">
                  <div className="grid grid-cols-2 gap-1">
                    {features.map((f) => (
                      <Link
                        key={f.name}
                        href={`/features/${f.slug}`}
                        className="flex items-start gap-3 rounded-lg px-3 py-2.5 hover:bg-slate-50 transition-colors group"
                      >
                        <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-md bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100 transition-colors">
                          <f.icon className="size-4" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-slate-900">
                            {f.name}
                          </div>
                          <div className="text-xs text-slate-500 mt-0.5 leading-snug">
                            {f.desc}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-3 pt-3 border-t border-slate-100">
                    <Link
                      href="/features"
                      className="inline-flex items-center gap-1.5 px-3 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
                    >
                      Explore all features
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing — direct link */}
            <Link
              href="/pricing"
              className={cn(
                "px-3 py-1.5 text-sm font-medium rounded-md transition-colors",
                pathname === "/pricing"
                  ? "text-slate-900"
                  : "text-slate-600 hover:text-slate-900"
              )}
            >
              Pricing
            </Link>

            {/* Resources dropdown */}
            <div
              className="relative"
              onMouseEnter={() => open("resources")}
              onMouseLeave={close}
            >
              <button
                className={cn(
                  "flex items-center gap-1 px-3 py-1.5 text-sm font-medium rounded-md transition-colors",
                  activeDropdown === "resources"
                    ? "text-slate-900"
                    : "text-slate-600 hover:text-slate-900"
                )}
              >
                Resources
                <ChevronDown
                  className={cn(
                    "size-3.5 transition-transform duration-200",
                    activeDropdown === "resources" && "rotate-180"
                  )}
                />
              </button>

              <div
                className={cn(
                  "absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200",
                  activeDropdown === "resources"
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-1 pointer-events-none"
                )}
              >
                <div className="w-[200px] rounded-xl border border-slate-200 bg-white shadow-lg shadow-slate-200/50 py-1.5">
                  {resourceLinks.map((r) =>
                    r.external ? (
                      <a
                        key={r.label}
                        href={r.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 px-3.5 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                      >
                        <r.icon className="size-4 text-slate-400" />
                        {r.label}
                      </a>
                    ) : (
                      <Link
                        key={r.label}
                        href={r.href}
                        className="flex items-center gap-2.5 px-3.5 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                      >
                        <r.icon className="size-4 text-slate-400" />
                        {r.label}
                      </Link>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Company dropdown */}
            <div
              className="relative"
              onMouseEnter={() => open("company")}
              onMouseLeave={close}
            >
              <button
                className={cn(
                  "flex items-center gap-1 px-3 py-1.5 text-sm font-medium rounded-md transition-colors",
                  activeDropdown === "company"
                    ? "text-slate-900"
                    : "text-slate-600 hover:text-slate-900"
                )}
              >
                Company
                <ChevronDown
                  className={cn(
                    "size-3.5 transition-transform duration-200",
                    activeDropdown === "company" && "rotate-180"
                  )}
                />
              </button>

              <div
                className={cn(
                  "absolute top-full right-0 pt-2 transition-all duration-200",
                  activeDropdown === "company"
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-1 pointer-events-none"
                )}
              >
                <div className="w-[180px] rounded-xl border border-slate-200 bg-white shadow-lg shadow-slate-200/50 py-1.5">
                  {companyLinks.map((c) =>
                    c.href.startsWith("#") ? (
                      <a
                        key={c.label}
                        href={c.href}
                        className="block px-3.5 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                      >
                        {c.label}
                      </a>
                    ) : (
                      <Link
                        key={c.label}
                        href={c.href}
                        className="block px-3.5 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                      >
                        {c.label}
                      </Link>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Actions */}
          <div className="flex items-center gap-1">
            <a
              href={`${APP_URL}/sign-in`}
              className="hidden sm:inline-flex px-3 py-1.5 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
            >
              Sign in
            </a>
            <Link
              href="/register"
              className={cn(
                "inline-flex items-center h-9 px-5 rounded-full bg-[var(--brand-indigo)] text-white text-sm font-semibold shadow-sm shadow-[rgba(99,102,241,0.2)] hover:brightness-110 transition-all",
                scrolled && "cta-pulse cta-glow"
              )}
            >
              Start Free
            </Link>

            {/* Mobile hamburger */}
            <button
              className="md:hidden ml-1 p-1.5 text-slate-500 hover:text-slate-900"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-200 bg-white border-b border-slate-200",
          mobileOpen ? "max-h-[600px]" : "max-h-0 border-b-0"
        )}
      >
        <div className="px-4 py-3 space-y-0.5 max-h-[calc(100vh-4rem)] overflow-y-auto">
          {/* Product accordion */}
          <button
            onClick={() =>
              setMobileExpanded((p) => (p === "product" ? null : "product"))
            }
            className="flex items-center justify-between w-full text-[14px] py-2.5 px-3 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium transition-colors"
          >
            Product
            <ChevronDown
              className={cn(
                "size-4 transition-transform duration-200",
                mobileExpanded === "product" && "rotate-180"
              )}
            />
          </button>
          <div
            className={cn(
              "overflow-hidden transition-all duration-200",
              mobileExpanded === "product"
                ? "max-h-[400px] opacity-100"
                : "max-h-0 opacity-0"
            )}
          >
            <div className="pl-3 pb-1 space-y-0.5">
              {features.map((f) => (
                <Link
                  key={f.name}
                  href={`/features/${f.slug}`}
                  className="flex items-center gap-2.5 text-[13px] py-2 px-3 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                >
                  <f.icon className="size-3.5 text-slate-400" />
                  {f.name}
                </Link>
              ))}
              <Link
                href="/features"
                className="flex items-center gap-1.5 text-[13px] py-2 px-3 rounded-md text-indigo-600 font-medium"
              >
                All features
                <ArrowRight className="size-3" />
              </Link>
            </div>
          </div>

          {/* Pricing */}
          <Link
            href="/pricing"
            className={cn(
              "block text-[14px] py-2.5 px-3 rounded-md font-medium transition-colors",
              pathname === "/pricing"
                ? "text-slate-900 bg-slate-50"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            )}
          >
            Pricing
          </Link>

          {/* Resources accordion */}
          <button
            onClick={() =>
              setMobileExpanded((p) => (p === "resources" ? null : "resources"))
            }
            className="flex items-center justify-between w-full text-[14px] py-2.5 px-3 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium transition-colors"
          >
            Resources
            <ChevronDown
              className={cn(
                "size-4 transition-transform duration-200",
                mobileExpanded === "resources" && "rotate-180"
              )}
            />
          </button>
          <div
            className={cn(
              "overflow-hidden transition-all duration-200",
              mobileExpanded === "resources"
                ? "max-h-[200px] opacity-100"
                : "max-h-0 opacity-0"
            )}
          >
            <div className="pl-3 pb-1 space-y-0.5">
              {resourceLinks.map((r) =>
                r.external ? (
                  <a
                    key={r.label}
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-[13px] py-2 px-3 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                  >
                    <r.icon className="size-3.5 text-slate-400" />
                    {r.label}
                  </a>
                ) : (
                  <Link
                    key={r.label}
                    href={r.href}
                    className="flex items-center gap-2.5 text-[13px] py-2 px-3 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                  >
                    <r.icon className="size-3.5 text-slate-400" />
                    {r.label}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Company accordion */}
          <button
            onClick={() =>
              setMobileExpanded((p) => (p === "company" ? null : "company"))
            }
            className="flex items-center justify-between w-full text-[14px] py-2.5 px-3 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium transition-colors"
          >
            Company
            <ChevronDown
              className={cn(
                "size-4 transition-transform duration-200",
                mobileExpanded === "company" && "rotate-180"
              )}
            />
          </button>
          <div
            className={cn(
              "overflow-hidden transition-all duration-200",
              mobileExpanded === "company"
                ? "max-h-[200px] opacity-100"
                : "max-h-0 opacity-0"
            )}
          >
            <div className="pl-3 pb-1 space-y-0.5">
              {companyLinks.map((c) =>
                c.href.startsWith("#") ? (
                  <a
                    key={c.label}
                    href={c.href}
                    className="block text-[13px] py-2 px-3 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                  >
                    {c.label}
                  </a>
                ) : (
                  <Link
                    key={c.label}
                    href={c.href}
                    className="block text-[13px] py-2 px-3 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                  >
                    {c.label}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Sign in */}
          <div className="pt-2 border-t border-slate-100 mt-2">
            <a
              href={`${APP_URL}/login`}
              className="block text-[14px] py-2.5 px-3 rounded-md text-slate-600 hover:text-slate-900 font-medium"
            >
              Sign in
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
