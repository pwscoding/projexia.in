"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Compass } from "lucide-react";

export function MissionSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding bg-muted/30">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-border bg-white p-8 sm:p-10"
          >
            <div className="mb-5 inline-flex items-center justify-center size-11 rounded-xl bg-primary/10 text-primary">
              <Target className="size-5" />
            </div>
            <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
              Our mission
            </p>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground leading-snug">
              Give every agency the tools that only the big ones can afford.
            </h3>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Most agency management tools are either too expensive, too complex,
              or built for enterprises. We believe a 5-person studio deserves the
              same operational clarity as a 500-person firm. Projexia levels the
              playing field.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-xl border border-border bg-white p-8 sm:p-10"
          >
            <div className="mb-5 inline-flex items-center justify-center size-11 rounded-xl bg-amber-500/10 text-amber-600">
              <Compass className="size-5" />
            </div>
            <p className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-2">
              Our vision
            </p>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground leading-snug">
              Be the operating system for agencies worldwide.
            </h3>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              We&apos;re building towards a future where running an agency feels
              effortless. Where projects deliver themselves, clients stay
              informed automatically, and the only thing you worry about is the
              quality of your work — not the logistics around it.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
