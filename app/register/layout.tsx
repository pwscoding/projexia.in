import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Your Account",
  description:
    "Sign up for Projexia — the all-in-one project management platform for agencies. Free to start, no credit card required.",
  robots: { index: false },
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
