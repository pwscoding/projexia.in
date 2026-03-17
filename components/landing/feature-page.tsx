"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeatureBySlug, getRelatedFeatures } from "@/lib/features";

export function FeaturePage({ slug }: { slug: string }) {
  const feature = getFeatureBySlug(slug)!;
  const relatedFeatures = getRelatedFeatures(slug, 3);

  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-50px" });
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-50px" });
  const relatedRef = useRef(null);
  const relatedInView = useInView(relatedRef, { once: true, margin: "-50px" });

  // First 2 bullets for hero highlights, rest for grid
  const highlights = feature.bullets.slice(0, 2);
  const gridBullets = feature.bullets.slice(2);

  return (
    <>
      {/* Hero — Contained card (Ibanera style) */}
      <section ref={heroRef} className="pt-32 pb-8 sm:pt-36 sm:pb-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 sm:p-10 lg:p-14"
          >
            {/* Top — Heading + Feature highlights */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              {/* Left — Badge, title, description */}
              <div>
                <Link
                  href="/features"
                  className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-5 hover:bg-primary/15 transition-colors"
                >
                  <feature.icon className="size-3.5" />
                  {feature.label}
                  <ArrowRight className="size-3" />
                </Link>
                <h1 className="text-2xl sm:text-3xl lg:text-[2.5rem] lg:leading-[1.15] font-bold tracking-tight text-foreground">
                  {feature.title}
                </h1>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Right — 2 highlights with left border accent */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:pt-2">
                {highlights.map((bullet, i) => (
                  <div key={i} className="border-l-2 border-primary/80 pl-5">
                    <div className="flex items-center gap-2 mb-2">
                      <bullet.icon className="size-4 text-primary/70" />
                      <span className="text-sm font-semibold text-foreground">
                        {bullet.title}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {bullet.text}
                    </p>
                    <Link
                      href="/register"
                      className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-primary hover:underline"
                    >
                      Try it free
                      <ArrowRight className="size-3" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom — Indigo gradient CTA with perspective depth */}
            <div className="mt-10 lg:mt-14 relative rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-500 to-violet-600 px-6 py-14 sm:px-12 sm:py-16 text-center">
              {/* Perspective depth lines */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <svg
                  className="absolute inset-0 w-full h-full opacity-[0.1]"
                  viewBox="0 0 1200 500"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  {/* Radial lines from top center */}
                  <line x1="600" y1="0" x2="0" y2="500" stroke="white" strokeWidth="1.2" />
                  <line x1="600" y1="0" x2="150" y2="500" stroke="white" strokeWidth="1" />
                  <line x1="600" y1="0" x2="300" y2="500" stroke="white" strokeWidth="1" />
                  <line x1="600" y1="0" x2="450" y2="500" stroke="white" strokeWidth="0.8" />
                  <line x1="600" y1="0" x2="600" y2="500" stroke="white" strokeWidth="0.8" />
                  <line x1="600" y1="0" x2="750" y2="500" stroke="white" strokeWidth="0.8" />
                  <line x1="600" y1="0" x2="900" y2="500" stroke="white" strokeWidth="1" />
                  <line x1="600" y1="0" x2="1050" y2="500" stroke="white" strokeWidth="1" />
                  <line x1="600" y1="0" x2="1200" y2="500" stroke="white" strokeWidth="1.2" />
                  {/* Depth rings */}
                  <ellipse cx="600" cy="80" rx="120" ry="14" stroke="white" strokeWidth="0.8" />
                  <ellipse cx="600" cy="180" rx="320" ry="30" stroke="white" strokeWidth="0.7" />
                  <ellipse cx="600" cy="300" rx="540" ry="50" stroke="white" strokeWidth="0.6" />
                  <ellipse cx="600" cy="440" rx="780" ry="70" stroke="white" strokeWidth="0.5" />
                </svg>
              </div>

              {/* Icon */}
              <div className="relative flex items-center justify-center mx-auto mb-6 size-14 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 shadow-lg shadow-black/10">
                <feature.icon className="size-7 text-white" />
              </div>

              <h2 className="relative text-2xl sm:text-3xl font-bold text-white">
                Get started with {feature.label}
              </h2>
              <p className="relative mt-3 text-white/70 max-w-md mx-auto leading-relaxed">
                Set up in minutes. No credit card required. Free forever plan available.
              </p>
              <div className="relative mt-8">
                <Link
                  href="/register"
                  className="inline-flex items-center h-11 px-6 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature grid — remaining capabilities */}
      <section ref={gridRef} className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={gridInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-3">
              Everything you need
            </h2>
            <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
              Powerful capabilities built right in — no plugins, no add-ons.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {gridBullets.map((bullet) => (
                <div
                  key={bullet.text}
                  className="rounded-xl border border-slate-200 bg-white p-5"
                >
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 mb-3">
                    <bullet.icon className="size-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">
                    {bullet.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {bullet.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related features */}
      <section ref={relatedRef} className="pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={relatedInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-3">
              Explore more features
            </h2>
            <p className="text-center text-muted-foreground mb-10">
              Projexia brings everything your agency needs into one platform.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedFeatures.map((rf) => (
                <Link
                  key={rf.slug}
                  href={`/features/${rf.slug}`}
                  className="group rounded-xl border border-slate-200 bg-white p-6 hover:border-primary/20 hover:shadow-md transition-all"
                >
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 mb-4">
                    <rf.icon className="size-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">
                    {rf.label}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {rf.description}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-primary group-hover:underline">
                    Learn more
                    <ArrowRight className="size-3" />
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
