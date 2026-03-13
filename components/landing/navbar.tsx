"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/projexia-logo.png";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.projexia.in";

const navLinks = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Docs", href: "https://docs.projexia.in" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={cn(
          "transition-all duration-200 border-b",
          scrolled
            ? "bg-white/95 backdrop-blur-md border-slate-200 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
            : "bg-white border-slate-200"
        )}
      >
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <img src={logo.src} alt="Projexia" className="h-9 w-auto" />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-0.5 ml-8">
            {navLinks.map((link) => {
              const isExternal = link.href.startsWith("http");
              const isActive = !isExternal && pathname === link.href;
              const cls = cn(
                "px-3 py-1.5 text-[13.5px] font-medium transition-colors rounded-md",
                isActive
                  ? "text-slate-900"
                  : "text-slate-500 hover:text-slate-900"
              );
              return isExternal ? (
                <a
                  key={link.href}
                  href={link.href}
                  className={cls}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ) : (
                <Link key={link.href} href={link.href} className={cls}>
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Spacer to push actions right */}
          <div className="flex-1" />

          {/* Actions */}
          <div className="flex items-center gap-1">
            <a
              href={`${APP_URL}/login`}
              className="hidden sm:inline-flex px-3 py-1.5 text-[13.5px] font-medium text-slate-500 hover:text-slate-900 transition-colors"
            >
              Sign in
            </a>
            <Link
              href="/register"
              className="inline-flex items-center gap-1.5 h-8 px-4 rounded-md bg-slate-900 text-white text-[13px] font-medium hover:bg-slate-800 transition-colors"
            >
              Dashboard
              <ArrowRight className="size-3" />
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
          mobileOpen ? "max-h-[400px]" : "max-h-0 border-b-0"
        )}
      >
        <div className="px-4 py-3 space-y-0.5">
          {navLinks.map((link) => {
            const isExternal = link.href.startsWith("http");
            const isActive = !isExternal && pathname === link.href;
            const cls = cn(
              "block text-[14px] py-2.5 px-3 rounded-md transition-colors font-medium",
              isActive
                ? "text-slate-900 bg-slate-50"
                : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
            );
            return isExternal ? (
              <a
                key={link.href}
                href={link.href}
                className={cls}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ) : (
              <Link key={link.href} href={link.href} className={cls}>
                {link.label}
              </Link>
            );
          })}
          <div className="pt-2 border-t border-slate-100 mt-2">
            <a
              href={`${APP_URL}/login`}
              className="block text-[14px] py-2.5 px-3 rounded-md text-slate-500 hover:text-slate-900 font-medium"
            >
              Sign in
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
