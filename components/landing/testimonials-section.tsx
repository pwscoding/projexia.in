"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

const testimonials = [
  {
    name: "Sarah Chen",
    title: "CEO, PixelForge Agency",
    avatar: "SC",
    company: "PixelForge",
    rating: 5,
    quote:
      "Projexia transformed how we manage client projects. Our delivery time dropped by 40% and client satisfaction has never been higher.",
  },
  {
    name: "Marcus Rivera",
    title: "Operations Lead, BrightPath Digital",
    avatar: "MR",
    company: "BrightPath",
    rating: 5,
    quote:
      "The client portal alone is worth it. Our clients love the transparency, and we love spending less time on status update emails.",
  },
  {
    name: "Aisha Patel",
    title: "Founder, Elevate Studio",
    avatar: "AP",
    company: "Elevate",
    rating: 5,
    quote:
      "We switched from 3 different tools to Projexia. Everything is in one place now. It's genuinely the best investment we've made this year.",
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" ref={ref} className="relative py-24 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            Loved by{" "}
            <span className="gradient-text">Agencies Worldwide</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            See what teams are saying about Projexia.
          </p>
          {/* Review platform badges */}
          <div className="mt-4 flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Star className="size-3.5 fill-yellow-400 text-yellow-400" />
              4.9/5 on G2
            </span>
            <span className="text-border">|</span>
            <span className="flex items-center gap-1">
              <Star className="size-3.5 fill-yellow-400 text-yellow-400" />
              4.8/5 on Trustpilot
            </span>
          </div>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass rounded-xl p-6 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="size-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3">
                <ImagePlaceholder variant="avatar" label={t.name} className="size-10" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.title}</p>
                </div>
                <ImagePlaceholder variant="logo" label={t.company} className="size-8 text-[10px]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
