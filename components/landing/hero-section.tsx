"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

const companyLogos = [
  "PixelForge",
  "BrightPath",
  "Elevate Co",
  "NovaBuild",
  "ArcStack",
];

export function HeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Grid dot background */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-indigo/10 blur-[120px]" />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/3 left-[15%] w-72 h-72 rounded-full bg-gradient-to-br from-indigo/20 to-purple/10 blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-[10%] w-96 h-96 rounded-full bg-gradient-to-br from-purple/15 to-indigo/5 blur-3xl"
        animate={{ y: [0, 25, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-indigo/30 bg-indigo/10 px-4 py-1.5 text-sm text-indigo mb-8"
        >
          <span className="inline-block size-2 rounded-full bg-indigo animate-pulse" />
          Built for Modern Agencies
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight"
        >
          Manage Projects{" "}
          <span className="gradient-text">Like Never Before</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground"
        >
          Collaborate with your team, manage client projects, and deliver
          results faster. The all-in-one platform built for agencies that
          move fast.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button asChild size="lg" className="glow">
            <a href="#register">
              Start Free
              <ArrowRight className="ml-2 size-4" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#how-it-works">
              <Play className="mr-2 size-4" />
              See How It Works
            </a>
          </Button>
        </motion.div>

        {/* Dashboard mockup placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 mx-auto max-w-4xl"
        >
          <ImagePlaceholder variant="screenshot" glow />
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 flex flex-col items-center gap-3"
        >
          <div className="flex -space-x-2">
            {companyLogos.map((name) => (
              <ImagePlaceholder
                key={name}
                variant="logo"
                label={name}
                className="size-8 border-2 border-background"
              />
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            <span className="text-foreground font-semibold">500+ agencies</span>
            {" · "}
            <span className="text-foreground font-semibold">50K+ tasks</span>
            {" · "}
            <span className="text-foreground font-semibold">30+ countries</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
