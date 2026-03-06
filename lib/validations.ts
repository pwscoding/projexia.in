import { z } from "zod";

export const registrationSchema = z
  .object({
    name: z
      .string()
      .min(1, "Name is required")
      .max(100, "Name must be under 100 characters"),
    email: z
      .string()
      .min(1, "Email is required")
      .email("Please enter a valid email"),
    orgName: z
      .string()
      .min(1, "Organization name is required")
      .max(200, "Organization name must be under 200 characters"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type RegistrationFormData = z.infer<typeof registrationSchema>;

// Per-step field groups for partial validation
export const stepFields = {
  0: ["name", "email"] as const,
  1: ["orgName"] as const,
  2: ["password", "confirmPassword"] as const,
};
