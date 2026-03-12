"use client";

import Link from "next/link";
import logo from "@/assets/projexia-logo.png";
import { RegistrationWizard } from "@/components/registration/registration-wizard";

export default function RegisterPage() {
  return (
    <div className="flex min-h-svh flex-col bg-slate-50">
      {/* Accent stripe */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500" />

      {/* Header */}
      <div className="px-6 py-5">
        <Link href="/">
          <img src={logo.src} alt="Projexia" className="h-8 w-auto" />
        </Link>
      </div>

      {/* Main content — vertically centered */}
      <div className="flex flex-1 flex-col items-center justify-center px-4 pb-16">
        <div className="w-full max-w-[440px]">
          {/* Heading */}
          <div className="mb-8 text-center">
            <h1 className="text-[1.75rem] font-bold tracking-tight text-slate-900">
              Create your account
            </h1>
            <p className="mt-2 text-[15px] text-slate-500">
              Get started free — no credit card required
            </p>
          </div>

          {/* Registration form */}
          <RegistrationWizard />
        </div>
      </div>

      {/* Footer */}
      <div className="py-5 text-center">
        <p className="text-xs text-slate-400">
          &copy; {new Date().getFullYear()} Projexia. All rights reserved.
        </p>
      </div>
    </div>
  );
}
