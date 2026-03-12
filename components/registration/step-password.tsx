"use client";

import { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Eye, EyeOff, Loader2, Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { RegistrationFormData } from "@/lib/validations";

interface StepPasswordProps {
  form: UseFormReturn<RegistrationFormData>;
  onBack: () => void;
  onSubmit: () => void;
  isSubmitting: boolean;
}

const passwordRules = [
  { label: "At least 8 characters", test: (p: string) => p.length >= 8 },
  { label: "One uppercase letter", test: (p: string) => /[A-Z]/.test(p) },
  { label: "One number", test: (p: string) => /[0-9]/.test(p) },
  { label: "One special character (!@#$%&*)", test: (p: string) => /[^A-Za-z0-9]/.test(p) },
];

export function StepPassword({
  form,
  onBack,
  onSubmit,
  isSubmitting,
}: StepPasswordProps) {
  const {
    register,
    watch,
    formState: { errors },
  } = form;

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const password = watch("password") || "";
  const hasTyped = password.length > 0;
  const passedCount = hasTyped ? passwordRules.filter((r) => r.test(password)).length : 0;

  const barColor =
    passedCount <= 1
      ? "bg-red-500"
      : passedCount === 2
        ? "bg-amber-500"
        : passedCount === 3
          ? "bg-blue-500"
          : "bg-emerald-500";

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }} className="space-y-5">
      {/* Password */}
      <div className="space-y-1.5">
        <Label htmlFor="password" className="text-sm font-medium text-slate-700">
          Password
        </Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Create a strong password"
            autoComplete="new-password"
            {...register("password")}
            className="h-11 pr-10 border-slate-200 bg-slate-50 placeholder:text-slate-400 focus:bg-white"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
          >
            {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
          </button>
        </div>

        {/* Requirements checklist — animated */}
        <AnimatePresence>
          {hasTyped && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 pt-2 pb-1">
                {passwordRules.map((rule, index) => {
                  const passed = rule.test(password);
                  return (
                    <motion.div
                      key={rule.label}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                      className="flex items-center gap-1.5"
                    >
                      <motion.div
                        initial={false}
                        animate={{
                          scale: passed ? [1, 1.3, 1] : 1,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {passed ? (
                          <Check className="size-3 text-emerald-500 shrink-0" />
                        ) : (
                          <X className="size-3 text-slate-300 shrink-0" />
                        )}
                      </motion.div>
                      <span
                        className={cn(
                          "text-[11px] transition-colors duration-200",
                          passed ? "text-emerald-600" : "text-slate-400"
                        )}
                      >
                        {rule.label}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Strength bar — animated */}
              <div className="flex gap-1 pt-1">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-1 flex-1 rounded-full bg-slate-200 overflow-hidden"
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: i < passedCount ? "100%" : "0%" }}
                      transition={{ duration: 0.35, delay: i * 0.08, ease: "easeOut" }}
                      className={cn("h-full rounded-full", barColor)}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Confirm Password */}
      <div className="space-y-1.5">
        <Label htmlFor="confirmPassword" className="text-sm font-medium text-slate-700">
          Confirm Password
        </Label>
        <div className="relative">
          <Input
            id="confirmPassword"
            type={showConfirm ? "text" : "password"}
            placeholder="Re-enter your password"
            autoComplete="new-password"
            {...register("confirmPassword")}
            className="h-11 pr-10 border-slate-200 bg-slate-50 placeholder:text-slate-400 focus:bg-white"
          />
          <button
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
          >
            {showConfirm ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
          </button>
        </div>
        <AnimatePresence>
          {errors.confirmPassword && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="text-xs text-red-500"
            >
              {errors.confirmPassword.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Terms */}
      <p className="text-[11px] text-slate-400 text-center leading-relaxed">
        By creating an account, you agree to our{" "}
        <a href="/terms" target="_blank" className="text-slate-500 underline hover:text-slate-700 transition-colors">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="/privacy" target="_blank" className="text-slate-500 underline hover:text-slate-700 transition-colors">
          Privacy Policy
        </a>
      </p>

      <div className="flex gap-3">
        <Button
          type="button"
          variant="outline"
          onClick={onBack}
          className="flex-1 h-11 border-slate-200 text-slate-600 hover:bg-slate-50 font-medium"
          disabled={isSubmitting}
        >
          <ArrowLeft className="mr-2 size-4" />
          Back
        </Button>
        <Button
          type="submit"
          className="flex-1 h-11 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-[15px]"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 size-4 animate-spin" />
              Creating...
            </>
          ) : (
            "Create Account"
          )}
        </Button>
      </div>
    </form>
  );
}
