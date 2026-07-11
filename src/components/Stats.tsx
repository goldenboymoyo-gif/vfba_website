"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface StatProps {
  number: string;
  label: string;
  delay?: number;
}

export function Stat({ number, label, delay = 0 }: StatProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <span className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-gold">
        {number}
      </span>
      <span className="block mt-2 text-dust text-sm tracking-wider uppercase">
        {label}
      </span>
    </motion.div>
  );
}

interface StatsRowProps {
  stats: { number: string; label: string }[];
}

export function StatsRow({ stats }: StatsRowProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
      {stats.map((stat, i) => (
        <Stat
          key={stat.label}
          number={stat.number}
          label={stat.label}
          delay={i * 0.1}
        />
      ))}
    </div>
  );
}
