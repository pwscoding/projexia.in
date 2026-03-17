"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface PageCTAProps {
  headline?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function PageCTA({
  headline = "Ready to supercharge your agency?",
  description = "Manage projects, collaborate with clients, and grow your agency — all from one place.",
  primaryLabel = "Get Started Free",
  primaryHref = "/register",
  secondaryLabel = "View Pricing",
  secondaryHref = "/pricing",
}: PageCTAProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden bg-foreground text-white px-8 py-16 sm:px-16 sm:py-20 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">{headline}</h2>
          <p className="mt-4 max-w-xl mx-auto text-white/70">{description}</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="h-12 px-8 bg-white text-foreground hover:bg-white/90 shadow-lg"
            >
              <Link href={primaryHref}>
                {primaryLabel}
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            {secondaryLabel && secondaryHref && (
              <Button
                asChild
                size="lg"
                className="h-12 px-8 bg-transparent border border-white/25 text-white hover:bg-white/10"
              >
                <Link href={secondaryHref}>{secondaryLabel}</Link>
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
