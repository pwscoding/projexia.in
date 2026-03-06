"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

export function DashboardPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 px-4 overflow-hidden">
      {/* Radial blur background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[900px] h-[600px] rounded-full bg-indigo/8 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            See It in{" "}
            <span className="gradient-text">Action</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            A powerful dashboard designed for clarity, speed, and total project control.
          </p>
        </motion.div>

        {/* Screenshot placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <ImagePlaceholder variant="screenshot" glow className="w-full" />
        </motion.div>
      </div>
    </section>
  );
}
