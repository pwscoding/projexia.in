"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTABanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 px-4">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo/20 via-purple/10 to-indigo/5" />

          {/* Grid overlay */}
          <div className="absolute inset-0 grid-bg opacity-30" />

          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-indigo/15 blur-[100px] rounded-full" />

          {/* Content */}
          <div className="relative z-10 px-8 py-16 sm:px-16 sm:py-20 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ready to Supercharge{" "}
              <span className="gradient-text">Your Agency?</span>
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
              Join 500+ agencies that trust Projexia to manage their projects,
              teams, and clients — all in one place.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="glow">
                <a href="#register">
                  Get Started Free
                  <ArrowRight className="ml-2 size-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#pricing">View Pricing</a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
