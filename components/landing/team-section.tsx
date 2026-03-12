"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const team = [
  {
    name: "Shadab Khan",
    role: "Founder & CEO",
    image: "/team/shadab-khan.jpg",
    bio: "Former agency owner who got tired of using 7 tools to run a 12-person team. Built Projexia to fix that.",
    previousRole: "Previously: Agency Founder",
  },
];

const openRoles = [
  { title: "Full-Stack Engineer", type: "Remote" },
  { title: "Product Designer", type: "Remote" },
  { title: "Developer Advocate", type: "Remote" },
];

export function TeamSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            The team
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Small team, big ambition
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            We&apos;re a lean, remote-first team that ships fast and cares
            deeply about the agencies we serve.
          </p>
        </motion.div>

        {/* Team members */}
        <div className="flex justify-center mb-16">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              className="rounded-xl border border-border bg-white p-6 text-center max-w-xs w-full"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={80}
                height={80}
                className="size-20 rounded-full mx-auto mb-4 object-cover border-2 border-border"
              />
              <h3 className="text-base font-semibold text-foreground">
                {member.name}
              </h3>
              <p className="text-sm text-primary font-medium">{member.role}</p>
              <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                {member.bio}
              </p>
              <p className="mt-3 text-[11px] text-muted-foreground/70">
                {member.previousRole}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Open roles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="rounded-xl border border-border bg-muted/30 p-6 sm:p-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                We&apos;re hiring
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Help us build the future of agency management.
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs font-medium text-green-700 shrink-0">
              <span className="size-1.5 rounded-full bg-green-500 animate-pulse" />
              Actively hiring
            </span>
          </div>

          <div className="space-y-2">
            {openRoles.map((role) => (
              <div
                key={role.title}
                className="flex items-center justify-between rounded-lg border border-border bg-white px-4 py-3"
              >
                <span className="text-sm font-medium text-foreground">
                  {role.title}
                </span>
                <span className="text-xs text-muted-foreground bg-muted rounded-full px-2.5 py-0.5">
                  {role.type}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            Interested? Reach out at{" "}
            <a
              href="mailto:careers@projexia.in"
              className="text-primary font-medium hover:underline"
            >
              careers@projexia.in
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
