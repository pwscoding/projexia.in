"use client";

import { UseFormReturn } from "react-hook-form";
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
    <div className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="orgName">Organization Name</Label>
        <Input
          id="orgName"
          placeholder="Acme Agency"
          {...register("orgName")}
          className="bg-background/50"
        />
        {errors.orgName && (
          <p className="text-sm text-destructive">{errors.orgName.message}</p>
        )}
        <p className="text-xs text-muted-foreground">
          This will be your workspace name. You can change it later.
        </p>
      </div>

      <div className="flex gap-3 mt-2">
        <Button variant="outline" onClick={onBack} className="flex-1">
          <ArrowLeft className="mr-2 size-4" />
          Back
        </Button>
        <Button onClick={onNext} className="flex-1">
          Continue
          <ArrowRight className="ml-2 size-4" />
        </Button>
      </div>
    </div>
  );
}
