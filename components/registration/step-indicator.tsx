"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const stepLabels = ["Personal", "Organization", "Security"];

export function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  return (
    <div className="mb-6">
      {/* Progress bar */}
      <div className="flex gap-1.5 mb-3">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div key={i} className="h-1 flex-1 rounded-full bg-slate-200 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: i <= currentStep ? "100%" : "0%" }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
              className="h-full rounded-full bg-slate-900"
            />
          </div>
        ))}
      </div>

      {/* Step labels */}
      <div className="flex items-center justify-between">
        {stepLabels.map((label, i) => {
          const isCompleted = i < currentStep;
          const isCurrent = i === currentStep;

          return (
            <motion.span
              key={label}
              initial={{ opacity: 0.5 }}
              animate={{ opacity: isCurrent || isCompleted ? 1 : 0.5 }}
              transition={{ duration: 0.3 }}
              className={cn(
                "inline-flex items-center gap-1.5 text-xs transition-colors",
                isCurrent
                  ? "text-slate-900 font-semibold"
                  : isCompleted
                    ? "text-slate-500 font-medium"
                    : "text-slate-400"
              )}
            >
              {isCompleted && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 25 }}
                >
                  <Check className="size-3" />
                </motion.span>
              )}
              {label}
            </motion.span>
          );
        })}
      </div>
    </div>
  );
}
