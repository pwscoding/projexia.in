"use client";

import Link from "next/link";
import { Check, Shield, Lock, CreditCard, Star } from "lucide-react";
import { RegistrationWizard } from "@/components/registration/registration-wizard";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

const benefits = [
  "Free forever plan available",
  "No credit card required",
  "Setup in under 2 minutes",
  "Cancel anytime",
];

const trustBadges = [
  { icon: Lock, label: "256-bit encryption" },
  { icon: CreditCard, label: "No credit card" },
  { icon: Shield, label: "SOC 2 compliant" },
];

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Minimal header — just logo */}
      <div className="px-4 sm:px-6 lg:px-8 py-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="size-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-sm font-bold text-white">P</span>
          </div>
          <span className="text-lg font-bold text-foreground">Projexia</span>
        </Link>
      </div>

      {/* Two-column layout */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — Persuasion */}
          <div className="hidden lg:block">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
              Create your free account
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Start managing your projects, teams, and clients — all from one place.
            </p>

            {/* Benefits */}
            <ul className="mt-8 space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 text-sm text-foreground">
                  <Check className="size-4 text-green-600 shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>

            {/* Testimonial */}
            <div className="mt-10 rounded-xl border border-border bg-muted/30 p-5">
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                &ldquo;Projexia transformed how we manage client projects. Our delivery time
                dropped by 40% and client satisfaction has never been higher.&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <ImagePlaceholder variant="avatar" label="Sarah Chen" className="size-8" />
                <div>
                  <p className="text-xs font-semibold text-foreground">Sarah Chen</p>
                  <p className="text-xs text-muted-foreground">CEO, PixelForge Agency</p>
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap gap-4">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 text-xs text-muted-foreground"
                >
                  <badge.icon className="size-3.5 text-green-600" />
                  {badge.label}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Registration form */}
          <div>
            <div className="lg:hidden mb-8">
              <h1 className="text-2xl font-bold text-foreground">Create your free account</h1>
              <p className="mt-2 text-muted-foreground">
                Setup in 2 minutes. No credit card required.
              </p>
            </div>
            <RegistrationWizard />
          </div>
        </div>
      </div>

      {/* Minimal footer */}
      <div className="px-4 sm:px-6 lg:px-8 py-6 text-center border-t border-border">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Projexia. All rights reserved.
        </p>
      </div>
    </div>
  );
}
