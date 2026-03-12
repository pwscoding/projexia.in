"use client";

import { UseFormReturn } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { RegistrationFormData } from "@/lib/validations";

interface StepOrganizationProps {
  form: UseFormReturn<RegistrationFormData>;
  onNext: () => void;
  onBack: () => void;
}

export function StepOrganization({
  form,
  onNext,
  onBack,
}: StepOrganizationProps) {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <form onSubmit={(e) => { e.preventDefault(); onNext(); }} className="space-y-5">
      <div className="space-y-1.5">
        <Label htmlFor="orgName" className="text-sm font-medium text-slate-700">
          Organization Name
        </Label>
        <Input
          id="orgName"
          placeholder="Acme Agency"
          {...register("orgName")}
          className="h-11 border-slate-200 bg-slate-50 placeholder:text-slate-400 focus:bg-white"
        />
        <AnimatePresence>
          {errors.orgName && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="text-xs text-red-500"
            >
              {errors.orgName.message}
            </motion.p>
          )}
        </AnimatePresence>
        <p className="text-xs text-slate-400">
          This will be your workspace name. You can change it later.
        </p>
      </div>

      <div className="flex gap-3">
        <Button
          type="button"
          variant="outline"
          onClick={onBack}
          className="flex-1 h-11 border-slate-200 text-slate-600 hover:bg-slate-50 font-medium"
        >
          <ArrowLeft className="mr-2 size-4" />
          Back
        </Button>
        <Button
          type="submit"
          className="flex-1 h-11 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-[15px]"
        >
          Continue
          <ArrowRight className="ml-2 size-4" />
        </Button>
      </div>
    </form>
  );
}
