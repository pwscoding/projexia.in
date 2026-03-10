"use client";

import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";

function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    let frame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * end));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [end, duration, start]);

  return value;
}

const stats = [
  { value: 50000, suffix: "+", label: "Tasks Managed" },
  { value: 99.9, suffix: "%", label: "Uptime" },
  { value: 500, suffix: "+", label: "Agencies" },
  { value: 30, suffix: "+", label: "Countries" },
];

function StatItem({ stat, inView }: { stat: typeof stats[0]; inView: boolean }) {
  const isDecimal = !Number.isInteger(stat.value);
  const count = useCountUp(isDecimal ? Math.floor(stat.value) : stat.value, 2000, inView);

  return (
    <div className="text-center py-8 px-4">
      <div className="text-3xl sm:text-4xl font-bold text-foreground">
        {isDecimal ? `${count}.9` : count.toLocaleString("en-IN")}
        {stat.suffix}
      </div>
      <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
    </div>
  );
}

export function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding border-y border-border bg-muted/30">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
