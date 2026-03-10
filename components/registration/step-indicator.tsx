"use client";

import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const stepLabels = ["Personal", "Organization", "Security"];

export function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-center gap-2 mb-8">
      {Array.from({ length: totalSteps }).map((_, i) => {
        const isCompleted = i < currentStep;
        const isCurrent = i === currentStep;

        return (
          <div key={i} className="flex items-center gap-2">
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={cn(
                  "flex items-center justify-center size-9 rounded-full text-sm font-semibold transition-all duration-300",
                  isCompleted && "bg-primary text-white",
                  isCurrent && "border-2 border-primary text-primary ring-4 ring-primary/20",
                  !isCompleted && !isCurrent && "border border-border text-muted-foreground"
                )}
              >
                {isCompleted ? <Check className="size-4" /> : i + 1}
              </div>
              <span
                className={cn(
                  "text-xs transition-colors",
                  isCurrent ? "text-foreground font-medium" : "text-muted-foreground"
                )}
              >
                {stepLabels[i]}
              </span>
            </div>

            {i < totalSteps - 1 && (
              <div
                className={cn(
                  "w-12 sm:w-16 h-0.5 rounded-full mb-5 transition-colors duration-300",
                  i < currentStep ? "bg-primary" : "bg-border"
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
