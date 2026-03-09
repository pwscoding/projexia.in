import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Projexia",
    default: "Projexia – Project Management for Modern Agencies",
  },
  description:
    "Manage projects, collaborate with clients, and deliver results faster. The all-in-one platform built for agencies that move fast.",
  openGraph: {
    title: "Projexia – Project Management for Modern Agencies",
    description:
      "Manage projects, collaborate with clients, and deliver results faster.",
    url: "https://projexia.in",
    siteName: "Projexia",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projexia – Project Management for Modern Agencies",
    description:
      "Manage projects, collaborate with clients, and deliver results faster.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
        <Toaster theme="dark" />
      </body>
    </html>
  );
}
