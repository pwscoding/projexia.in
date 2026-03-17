"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function SectionDivider() {
  return (
    <div className="flex flex-col items-center py-4 sm:py-6">
      <div className="w-px h-10 border-l border-dashed border-slate-300" />
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="size-4 text-slate-300" />
      </motion.div>
    </div>
  );
}
