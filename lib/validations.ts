import { z } from "zod";

const personalEmailDomains = [
  "gmail.com",
  "yahoo.com",
  "yahoo.in",
  "hotmail.com",
  "outlook.com",
  "live.com",
  "aol.com",
  "icloud.com",
  "mail.com",
  "protonmail.com",
  "zoho.com",
  "yandex.com",
  "gmx.com",
  "rediffmail.com",
];

export function isPersonalEmail(email: string): boolean {
  const domain = email.split("@")[1]?.toLowerCase();
  return personalEmailDomains.includes(domain);
}

export const registrationSchema = z
  .object({
    name: z
      .string()
      .min(1, "Name is required")
      .min(2, "Name must be at least 2 characters")
      .max(100, "Name must be under 100 characters")
      .regex(
        /^[a-zA-Z][a-zA-Z\s.\-']+$/,
        "Name can only contain letters, spaces, hyphens, dots, and apostrophes"
      )
      .refine(
        (val) => val.trim().includes(" "),
        "Please enter your full name (first and last)"
      ),
    email: z
      .string()
      .min(1, "Email is required")
      .email("Please enter a valid email address")
      .refine(
        (val) => !val.endsWith("."),
        "Email cannot end with a dot"
      ),
    orgName: z
      .string()
      .min(1, "Organization name is required")
      .min(2, "Organization name must be at least 2 characters")
      .max(200, "Organization name must be under 200 characters")
      .regex(
        /^[a-zA-Z0-9][a-zA-Z0-9\s]*$/,
        "Organization name can only contain letters, numbers, and spaces"
      ),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[^A-Za-z0-9]/,
        "Password must contain at least one special character (!@#$%&*)"
      ),
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
