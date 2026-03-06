"use client";

import { UseFormReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { RegistrationFormData } from "@/lib/validations";

interface StepPersonalProps {
  form: UseFormReturn<RegistrationFormData>;
  onNext: () => void;
}

export function StepPersonal({ form, onNext }: StepPersonalProps) {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          placeholder="John Doe"
          {...register("name")}
          className="bg-background/50"
        />
        {errors.name && (
          <p className="text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Work Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="john@agency.com"
          {...register("email")}
          className="bg-background/50"
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>

      <Button onClick={onNext} className="w-full mt-2">
        Continue
        <ArrowRight className="ml-2 size-4" />
      </Button>
    </div>
  );
}
