"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  const [bannerVisible, setBannerVisible] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Announcement bar */}
      {bannerVisible && (
        <div className="relative bg-slate-900 text-white">
          <div className="mx-auto flex h-10 max-w-7xl items-center justify-center px-4 text-[13px]">
            <span className="hidden sm:inline text-slate-300">
              Projexia is now open for early access
            </span>
            <span className="sm:hidden text-slate-300">
              Open for early access
            </span>
            <Link
              href="/register"
              className="ml-3 inline-flex items-center gap-1 font-medium text-white hover:text-blue-300 transition-colors"
            >
              Get started free
              <ArrowRight className="size-3" />
            </Link>
            <button
              onClick={() => setBannerVisible(false)}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-white transition-colors"
              aria-label="Dismiss"
            >
              <X className="size-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Main navbar */}
      <nav
        className={cn(
          "transition-all duration-200 border-b",
          scrolled
            ? "bg-white/90 backdrop-blur-lg border-slate-200 shadow-sm"
            : "bg-white border-transparent"
        )}
      >
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <img src={logo.src} alt="Projexia" className="h-10 w-auto" />
          </Link>

          {/* Desktop nav — center */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isExternal = link.href.startsWith("http");
              const isActive = !isExternal && pathname === link.href;
              const cls = cn(
                "px-3 py-1.5 rounded-md text-[13px] font-medium transition-colors",
                isActive
                  ? "text-slate-900 bg-slate-100"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              );
              return isExternal ? (
                <a key={link.href} href={link.href} className={cls} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              ) : (
                <Link key={link.href} href={link.href} className={cls}>
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Actions — right (visible on all sizes) */}
          <div className="flex items-center gap-2">
            <a
              href={`${APP_URL}/login`}
              className="px-3 py-1.5 text-[13px] font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Sign in
            </a>
            <Button asChild size="sm" className="h-8 rounded-md px-4 text-[13px] font-semibold">
              <Link href="/register">
                Start building
                <ArrowRight className="ml-1.5 size-3" />
              </Link>
            </Button>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-1.5 text-slate-500 hover:text-slate-900"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
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
                ? "text-slate-900 bg-slate-100"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            );
            return isExternal ? (
              <a key={link.href} href={link.href} className={cls} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            ) : (
              <Link key={link.href} href={link.href} className={cls}>
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
