"use client";

import { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Eye, EyeOff, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { RegistrationFormData } from "@/lib/validations";

interface StepPasswordProps {
  form: UseFormReturn<RegistrationFormData>;
  onBack: () => void;
  onSubmit: () => void;
  isSubmitting: boolean;
}

function getPasswordStrength(password: string) {
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  const levels = [
    { label: "Weak", color: "bg-destructive" },
    { label: "Fair", color: "bg-yellow-500" },
    { label: "Good", color: "bg-blue-500" },
    { label: "Strong", color: "bg-green-500" },
  ];

  return { score, ...levels[Math.min(score, levels.length) - 1] || levels[0] };
}

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
  const strength = password.length > 0 ? getPasswordStrength(password) : null;

  return (
    <div className="space-y-5">
      {/* Password */}
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Min. 8 characters"
            {...register("password")}
            className="bg-background/50 pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            {showPassword ? (
              <EyeOff className="size-4" />
            ) : (
              <Eye className="size-4" />
            )}
          </button>
        </div>
        {errors.password && (
          <p className="text-sm text-destructive">{errors.password.message}</p>
        )}

        {/* Strength indicator */}
        {strength && (
          <div className="space-y-1">
            <div className="flex gap-1">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "h-1 flex-1 rounded-full transition-colors",
                    i < strength.score ? strength.color : "bg-border"
                  )}
                />
              ))}
            </div>
            <p className="text-xs text-muted-foreground">{strength.label}</p>
          </div>
        )}
      </div>

      {/* Confirm Password */}
      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <div className="relative">
          <Input
            id="confirmPassword"
            type={showConfirm ? "text" : "password"}
            placeholder="Re-enter your password"
            {...register("confirmPassword")}
            className="bg-background/50 pr-10"
          />
          <button
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            {showConfirm ? (
              <EyeOff className="size-4" />
            ) : (
              <Eye className="size-4" />
            )}
          </button>
        </div>
        {errors.confirmPassword && (
          <p className="text-sm text-destructive">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      {/* Terms acceptance */}
      <p className="text-xs text-muted-foreground text-center">
        By creating an account, you agree to our{" "}
        <a href="#" className="underline hover:text-foreground transition-colors">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="underline hover:text-foreground transition-colors">
          Privacy Policy
        </a>
        .
      </p>

      <div className="flex gap-3 mt-2">
        <Button
          variant="outline"
          onClick={onBack}
          className="flex-1"
          disabled={isSubmitting}
        >
          <ArrowLeft className="mr-2 size-4" />
          Back
        </Button>
        <Button
          onClick={onSubmit}
          className="flex-1"
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
    </div>
  );
}
