"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import Link from "next/link";

const testimonials = [
  {
    name: "Sarah Chen",
    title: "CEO, PixelForge Agency",
    metric: "40% faster delivery",
    quote:
      "Projexia transformed how we manage client projects. Our delivery time dropped by 40% and client satisfaction has never been higher.",
    featured: true,
  },
  {
    name: "Marcus Rivera",
    title: "Operations Lead, BrightPath Digital",
    metric: "3 tools replaced",
    quote:
      "The client portal alone is worth it. Our clients love the transparency, and we love spending less time on status update emails.",
    featured: false,
  },
  {
    name: "Aisha Patel",
    title: "Founder, Elevate Studio",
    metric: "2x client satisfaction",
    quote:
      "We switched from 3 different tools to Projexia. Everything is in one place now. It's genuinely the best investment we've made this year.",
    featured: false,
  },
];

export function TestimonialsSection({ showLink = false }: { showLink?: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const featured = testimonials[0];
  const others = testimonials.slice(1);

  return (
    <section id="testimonials" ref={ref} className="section-padding">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Loved by agencies worldwide
          </h2>
          <div className="mt-4 flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Star className="size-4 fill-amber-400 text-amber-400" />
              <span className="font-semibold text-foreground">4.9/5</span> on G2
            </span>
            <span className="w-px h-4 bg-border" />
            <span className="flex items-center gap-1.5">
              <Star className="size-4 fill-amber-400 text-amber-400" />
              <span className="font-semibold text-foreground">4.8/5</span> on Trustpilot
            </span>
          </div>
        </motion.div>

        {/* Asymmetric layout: 1 large + 2 small */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-6">
          {/* Featured testimonial — large */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3 rounded-xl border border-border bg-white p-5 sm:p-8 flex flex-col"
          >
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4">
              {featured.metric}
            </div>
            <div className="flex gap-0.5 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="size-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-base text-muted-foreground leading-relaxed flex-1">
              &ldquo;{featured.quote}&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-3 pt-4 border-t border-border">
              <ImagePlaceholder variant="avatar" label={featured.name} className="size-12" />
              <div>
                <p className="text-sm font-semibold text-foreground">{featured.name}</p>
                <p className="text-xs text-muted-foreground">{featured.title}</p>
              </div>
            </div>
          </motion.div>

          {/* Other testimonials — stacked */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {others.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                className="rounded-xl border border-border bg-white p-6 flex flex-col flex-1"
              >
                <div className="text-xl font-bold text-primary mb-2">{t.metric}</div>
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
              </motion.div>
            ))}
          </div>
        </div>

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
      </div>
    </section>
  );
}
