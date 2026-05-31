"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MoonStar } from "lucide-react";

export function TheQuietSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl border border-amber-100 bg-gradient-to-b from-amber-50/70 to-white px-8 py-16 sm:px-16 sm:py-20"
        >
          <div className="mx-auto mb-6 flex size-12 items-center justify-center rounded-2xl border border-amber-200 bg-white">
            <MoonStar className="size-6 text-amber-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
            And that midnight message?
            <br className="hidden sm:block" /> It stops coming.
          </h2>
          <p className="mt-5 mx-auto max-w-xl text-muted-foreground text-lg leading-relaxed">
            Not because you ignored it — because the answer was already waiting for
            them. The calm you&apos;ve been missing for months, you finally get it back.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
