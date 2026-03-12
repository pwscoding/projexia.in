"use client";

import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";

function useCountUp(
  end: number,
  duration: number = 2000,
  start: boolean = false
) {
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

const numbers = [
  {
    value: 500,
    suffix: "+",
    label: "Agencies trust us",
    sublabel: "across 30+ countries",
  },
  {
    value: 50000,
    suffix: "+",
    label: "Tasks managed",
    sublabel: "and counting every day",
  },
  {
    value: 18,
    suffix: " months",
    label: "In development",
    sublabel: "before public launch",
  },
  {
    value: 0,
    suffix: "",
    label: "VC funding taken",
    sublabel: "bootstrapped & profitable",
    display: "$0",
  },
];

function NumberItem({
  item,
  inView,
}: {
  item: (typeof numbers)[0];
  inView: boolean;
}) {
  const count = useCountUp(item.value, 2000, inView);

  return (
    <div className="text-center py-6 sm:py-8 px-4">
      <div className="text-3xl sm:text-4xl font-bold text-foreground">
        {item.display
          ? item.display
          : `${item.value > 999 ? count.toLocaleString("en-IN") : count}${item.suffix}`}
      </div>
      <p className="mt-1.5 text-sm font-medium text-foreground">
        {item.label}
      </p>
      <p className="text-xs text-muted-foreground">{item.sublabel}</p>
    </div>
  );
}

export function AboutNumbers() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-2xl border border-border bg-white">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-border">
          {numbers.map((item) => (
            <NumberItem key={item.label} item={item} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
