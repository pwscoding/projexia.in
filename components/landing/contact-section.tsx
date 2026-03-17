"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  MessageSquare,
  Calendar,
  Building2,
  Mail,
  Clock,
  Send,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const inquiryTypes = [
  {
    icon: MessageSquare,
    title: "General Inquiry",
    description: "Questions about features, pricing, or how Projexia works",
  },
  {
    icon: Calendar,
    title: "Request a Demo",
    description: "Get a personalized 15-minute walkthrough of the platform",
  },
  {
    icon: Building2,
    title: "Enterprise & Partners",
    description: "Custom plans, API access, and partnership opportunities",
  },
];

const subjectOptions = [
  "General Inquiry",
  "Request a Demo",
  "Enterprise Plan",
  "Technical Support",
  "Partnership",
  "Other",
];

export function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast.success("Message sent! We'll get back to you within 24 hours.");
      (e.target as HTMLFormElement).reset();
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section ref={ref} className="pt-28 sm:pt-36 pb-16 sm:pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Mobile: heading + form first, then inquiry cards */}
        {/* Desktop: two-column with left info + right form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left column — heading + inquiry types */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            {/* On mobile, hide the heading here since it's shown above the form */}
            <div className="hidden lg:block">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-4">
                Get in Touch
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                Let&apos;s build something{" "}
                <span className="text-primary">great together</span>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Whether you have a question, want to see a demo, or need a custom
                solution for your agency — we&apos;re here to help.
              </p>
            </div>

            {/* Inquiry type cards */}
            <div className="lg:mt-8 space-y-3">
              <p className="text-sm font-semibold text-foreground mb-2 lg:hidden">
                How can we help?
              </p>
              {inquiryTypes.map((type) => (
                <div
                  key={type.title}
                  className="flex items-start gap-3 sm:gap-4 rounded-xl border border-border bg-white p-3 sm:p-4 transition-colors hover:border-primary/20 hover:bg-primary/[0.02]"
                >
                  <div className="flex size-9 sm:size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <type.icon className="size-4 sm:size-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {type.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                      {type.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact details */}
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm text-muted-foreground">
              <a
                href="mailto:info@projexia.in"
                className="inline-flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="size-4" />
                info@projexia.in
              </a>
              <span className="inline-flex items-center gap-2">
                <Clock className="size-4" />
                We respond within 24 hours
              </span>
            </div>
          </motion.div>

          {/* Right column — form (shows first on mobile) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative order-1 lg:order-2"
          >
            {/* Subtle accent behind card — desktop only */}
            <div className="absolute -inset-4 rounded-3xl bg-indigo-50/50 -z-10 hidden lg:block" />

            {/* Mobile heading — shown above form */}
            <div className="lg:hidden mb-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-3">
                Get in Touch
              </div>
              <h1 className="text-2xl font-bold tracking-tight text-foreground">
                Let&apos;s build something{" "}
                <span className="text-primary">great together</span>
              </h1>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Have a question, need a demo, or want a custom solution? We&apos;re
                here to help.
              </p>
            </div>

            {/* Form card — flat on mobile, card on desktop */}
            <div className="lg:rounded-2xl lg:border lg:border-border lg:bg-white lg:shadow-lg lg:p-8">
              <h2 className="text-lg font-semibold text-foreground mb-5 sm:mb-6">
                Send us a message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full h-11 sm:h-10 rounded-lg border border-border bg-white px-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@agency.com"
                      className="w-full h-11 sm:h-10 rounded-lg border border-border bg-white px-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Company
                  </label>
                  <input
                    type="text"
                    placeholder="Your agency name"
                    className="w-full h-11 sm:h-10 rounded-lg border border-border bg-white px-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Subject
                  </label>
                  <div className="relative">
                    <select
                      required
                      defaultValue=""
                      className={cn(
                        "w-full h-11 sm:h-10 rounded-lg border border-border bg-white px-3 text-sm appearance-none",
                        "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      )}
                    >
                      <option value="" disabled>
                        Select a subject
                      </option>
                      {subjectOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="How can we help?"
                    className="w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-11"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 size-4" />
                    </>
                  )}
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  We respond within 24 hours
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
