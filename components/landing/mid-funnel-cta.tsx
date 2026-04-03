"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function MidFunnelCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-primary/20 bg-primary/[0.03] p-8 sm:p-12 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Stop losing billable hours to tool-switching
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Agencies waste 5+ hours every week jumping between project management, invoicing, and client communication tools. Projexia brings it all together.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {[
              "Free forever plan",
              "2 minute setup",
              "No credit card required",
              "Cancel anytime",
            ].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <Check className="size-3.5 text-green-600" />
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="h-12 px-8 shadow-lg shadow-primary/25"
            >
              <Link href="/register">
                Get Started Free
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="h-12 px-8">
              <Link href="/contact">Talk to Sales</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
