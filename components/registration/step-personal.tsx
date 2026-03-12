"use client";

import { UseFormReturn } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle } from "lucide-react";
import { isPersonalEmail, type RegistrationFormData } from "@/lib/validations";

interface StepPersonalProps {
  form: UseFormReturn<RegistrationFormData>;
  onNext: () => void;
}

const errorAnim = {
  initial: { opacity: 0, y: -4 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -4 },
  transition: { duration: 0.2 },
};

export function StepPersonal({ form, onNext }: StepPersonalProps) {
  const {
    register,
    watch,
    formState: { errors },
  } = form;

  const email = watch("email") || "";
  const showPersonalWarning =
    email.includes("@") && !errors.email && isPersonalEmail(email);

  return (
    <form onSubmit={(e) => { e.preventDefault(); onNext(); }} className="space-y-5">
      <div className="space-y-1.5">
        <Label htmlFor="name" className="text-sm font-medium text-slate-700">
          Full Name
        </Label>
        <Input
          id="name"
          placeholder="John Doe"
          autoComplete="name"
          {...register("name")}
          className="h-11 border-slate-200 bg-slate-50 placeholder:text-slate-400 focus:bg-white"
        />
        <AnimatePresence>
          {errors.name && (
            <motion.p {...errorAnim} className="text-xs text-red-500">
              {errors.name.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="email" className="text-sm font-medium text-slate-700">
          Work Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="john@agency.com"
          autoComplete="email"
          {...register("email")}
          className="h-11 border-slate-200 bg-slate-50 placeholder:text-slate-400 focus:bg-white"
        />
        <AnimatePresence>
          {errors.email && (
            <motion.p {...errorAnim} className="text-xs text-red-500">
              {errors.email.message}
            </motion.p>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {showPersonalWarning && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <div className="flex items-start gap-2 rounded-md bg-amber-50 border border-amber-200 px-3 py-2">
                <AlertTriangle className="size-3.5 text-amber-500 shrink-0 mt-0.5" />
                <p className="text-xs text-amber-700">
                  We recommend using your work email for a better team experience.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Button
        type="submit"
        className="w-full h-11 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-[15px]"
      >
        Continue
        <ArrowRight className="ml-2 size-4" />
      </Button>
    </form>
  );
}
