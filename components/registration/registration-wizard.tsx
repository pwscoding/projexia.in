"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { toast } from "sonner";
import { Check } from "lucide-react";
import {
  registrationSchema,
  stepFields,
  type RegistrationFormData,
} from "@/lib/validations";
import { apiPost, apiGet, type Plan } from "@/lib/api";
import { StepIndicator } from "./step-indicator";
import { StepPersonal } from "./step-personal";
import { StepOrganization } from "./step-organization";
import { StepPassword } from "./step-password";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.projexia.in";

export function RegistrationWizard() {
  const searchParams = useSearchParams();
  const planSlug = searchParams.get("plan");
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!planSlug) return;
    async function fetchPlan() {
      try {
        const res = await apiGet<Plan[]>("/plans/public");
        if (res.success && "data" in res && Array.isArray(res.data)) {
          const match = res.data.find((p: Plan) => p.slug === planSlug);
          if (match) setSelectedPlan(match);
        }
      } catch { /* silent */ }
    }
    fetchPlan();
  }, [planSlug]);

  const form = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      name: "",
      email: "",
      orgName: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onTouched",
  });

  const goNext = async () => {
    const fields = stepFields[step as keyof typeof stepFields];
    const valid = await form.trigger(fields as unknown as (keyof RegistrationFormData)[]);
    if (!valid) return;
    setDirection(1);
    setStep((s) => Math.min(s + 1, 2));
  };

  const goBack = () => {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 0));
  };

  const handleSubmit = async () => {
    const valid = await form.trigger();
    if (!valid) return;

    setIsSubmitting(true);
    const { name, email, orgName, password } = form.getValues();

    try {
      const res = await apiPost("/agency/auth/register", {
        name,
        email,
        password,
        orgName,
        ...(planSlug && { planSlug }),
      });

      if (res.success) {
        toast.success("Account created! Redirecting...");
        const accessToken = "accessToken" in res ? res.accessToken : "";
        const refreshToken = "refreshToken" in res ? res.refreshToken : "";
        // Redirect to app with tokens — app will store them and proceed to onboarding
        window.location.href = `${APP_URL}/auth/callback?accessToken=${encodeURIComponent(String(accessToken))}&refreshToken=${encodeURIComponent(String(refreshToken))}`;
      } else {
        const error = res as { success: false; message: string; errors?: { field: string; message: string }[] };

        if (error.message === "Email already in use" || error.message?.includes("already exists")) {
          form.setError("email", { message: error.message });
          setDirection(-1);
          setStep(0);
          toast.error(error.message);
        } else if (error.errors?.length) {
          error.errors.forEach((err) => {
            const field = err.field as keyof RegistrationFormData;
            form.setError(field, { message: err.message });
          });
          toast.error("Please fix the errors and try again.");
        } else {
          toast.error(error.message || "Something went wrong. Please try again.");
        }
      }
    } catch {
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
    }),
  };

  return (
    <div className="w-full">
      {/* Selected plan badge */}
      {selectedPlan && (
        <div className="mb-4 flex items-center gap-2 rounded-lg border border-indigo-100 bg-indigo-50/50 px-4 py-3">
          <Check className="size-4 text-indigo-600 shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-slate-900">
              {selectedPlan.name} plan selected
            </p>
            <p className="text-xs text-slate-500">
              {selectedPlan.priceMonthly === 0
                ? "Free forever"
                : selectedPlan.trialDays > 0
                  ? `${selectedPlan.trialDays}-day free trial included`
                  : `Starting at ₹${selectedPlan.priceMonthly.toLocaleString("en-IN")}/mo`}
            </p>
          </div>
        </div>
      )}

      <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
        <StepIndicator currentStep={step} totalSteps={3} />

        <div className="overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={step}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              {step === 0 && <StepPersonal form={form} onNext={goNext} />}
              {step === 1 && (
                <StepOrganization form={form} onNext={goNext} onBack={goBack} />
              )}
              {step === 2 && (
                <StepPassword
                  form={form}
                  onBack={goBack}
                  onSubmit={handleSubmit}
                  isSubmitting={isSubmitting}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <p className="mt-6 text-center text-[13px] text-slate-400">
          Already have an account?{" "}
          <a
            href={`${APP_URL}/login`}
            className="text-slate-600 font-medium hover:text-slate-900 transition-colors"
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
