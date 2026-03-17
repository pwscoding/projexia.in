"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, ArrowRight, Users } from "lucide-react";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import Link from "next/link";

const testimonials = [
  {
    name: "Sarah Chen",
    title: "CEO, PixelForge Agency",
    metric: "40% faster delivery",
    quote:
      "Projexia transformed how we manage client projects. Our delivery time dropped by 40% and client satisfaction has never been higher.",
  },
  {
    name: "Marcus Rivera",
    title: "Operations Lead, BrightPath Digital",
    metric: "3 tools replaced",
    quote:
      "The client portal alone is worth it. Our clients love the transparency, and we love spending less time on status update emails.",
  },
  {
    name: "Aisha Patel",
    title: "Founder, Elevate Studio",
    metric: "2x client satisfaction",
    quote:
      "We switched from 3 different tools to Projexia. Everything is in one place now. It's genuinely the best investment we've made this year.",
  },
  {
    name: "David Kim",
    title: "Project Director, NovaCreative",
    metric: "15 hours saved/week",
    quote:
      "Before Projexia, I spent Mondays chasing updates. Now every project status, every file, every invoice is in one dashboard. I got my Mondays back.",
  },
  {
    name: "Priya Sharma",
    title: "Managing Partner, Apex Digital",
    metric: "Zero missed deadlines",
    quote:
      "Milestone tracking and automated alerts mean nothing slips through the cracks. We haven't missed a client deadline in 6 months.",
  },
  {
    name: "James Torres",
    title: "Founder, Launchpad Agency",
    metric: "Onboarded in 10 min",
    quote:
      "Setup was dead simple. I had our first client portal live within 10 minutes. No migrations, no data imports, just start working.",
  },
];

function TestimonialCard({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div className="w-[340px] shrink-0 rounded-xl border border-border bg-white p-6 flex flex-col">
      <div className="text-lg font-bold text-primary mb-2">{t.metric}</div>
      <div className="flex gap-0.5 mb-3">
        {[...Array(5)].map((_, j) => (
          <Star key={j} className="size-3 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="mt-4 flex items-center gap-3 pt-3 border-t border-border">
        <ImagePlaceholder variant="avatar" label={t.name} className="size-9" />
        <div>
          <p className="text-sm font-semibold text-foreground">{t.name}</p>
          <p className="text-xs text-muted-foreground">{t.title}</p>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection({ showLink = false }: { showLink?: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" ref={ref} className="section-padding bg-muted/30 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Social Proof
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Loved by agencies worldwide
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Users className="size-4 text-primary" />
            <span>
              <span className="font-semibold text-foreground">500+</span> agencies using Projexia
            </span>
          </div>
        </motion.div>
      </div>

      {/* Marquee row 1 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative"
      >
        <div className="flex gap-5 ticker-track">
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} t={t} />
          ))}
        </div>
      </motion.div>

      {showLink && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <Link
            href="/about#testimonials"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            Read more stories
            <ArrowRight className="size-4" />
          </Link>
        </motion.div>
      )}
    </section>
  );
}
