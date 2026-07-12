"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ChapterTitleProps {
  number: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function ChapterTitle({
  number,
  title,
  subtitle,
  align = "left",
  light = false,
}: ChapterTitleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
        className={`mb-14 ${align === "center" ? "text-center" : ""}`}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
        className={`text-xs tracking-[0.4em] uppercase block mb-5 ${
          light ? "text-charcoal/50" : "text-gold/60"
        }`}
      >
        Chapter {number}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${
          light ? "text-charcoal" : "text-cream"
        }`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`mt-6 text-base max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-charcoal/70" : "text-dust"}`}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={`chapter-divider mt-8 ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
