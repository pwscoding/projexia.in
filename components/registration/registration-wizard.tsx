"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { toast } from "sonner";
import {
  registrationSchema,
  stepFields,
  type RegistrationFormData,
} from "@/lib/validations";
import { apiPost } from "@/lib/api";
import { StepIndicator } from "./step-indicator";
import { StepPersonal } from "./step-personal";
import { StepOrganization } from "./step-organization";
import { StepPassword } from "./step-password";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.projexia.in";

export function RegistrationWizard() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      });

      if (res.success) {
        toast.success("Account created! Redirecting...");
        // Store tokens if returned
        if ("accessToken" in res && typeof res.accessToken === "string") {
          document.cookie = `accessToken=${res.accessToken}; path=/; max-age=${7 * 24 * 60 * 60}; SameSite=Lax`;
        }
        if ("refreshToken" in res && typeof res.refreshToken === "string") {
          document.cookie = `refreshToken=${res.refreshToken}; path=/; max-age=${7 * 24 * 60 * 60}; SameSite=Lax`;
        }
        window.location.href = `${APP_URL}/onboarding`;
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
    <div className="w-full max-w-md mx-auto">
      <StepIndicator currentStep={step} totalSteps={3} />

      <div className="glass-strong rounded-xl p-6 sm:p-8 overflow-hidden">
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

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Already have an account?{" "}
          <a
            href={`${APP_URL}/login`}
            className="text-indigo hover:underline"
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
