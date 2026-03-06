"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.projexia.in";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "glass-strong shadow-lg shadow-black/20"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-xl font-bold gradient-text">
            Projexia
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`${APP_URL}/login`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Sign In
            </a>
            <Button asChild size="sm">
              <a href="#register">Get Started</a>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 glass-strong",
          mobileOpen ? "max-h-80" : "max-h-0"
        )}
      >
        <div className="px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`${APP_URL}/login`}
            className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Sign In
          </a>
          <Button asChild size="sm" className="w-full">
            <a href="#register" onClick={() => setMobileOpen(false)}>
              Get Started
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
}
