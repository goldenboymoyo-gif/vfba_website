"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  showArrow?: boolean;
  external?: boolean;
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  showArrow = false,
  external = false,
}: CTAButtonProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    primary:
      "bg-rust text-cream border border-transparent hover:bg-rust-light hover:shadow-[0_8px_30px_-6px_rgba(139,58,42,0.5)]",
    secondary:
      "bg-transparent text-gold border border-gold/40 hover:bg-gold/10 hover:border-gold/60",
    ghost:
      "bg-transparent text-cream/80 border border-cream/15 hover:text-cream hover:border-cream/30 hover:bg-cream/5",
  };

  const sizes = {
    sm: "px-5 py-2 text-xs",
    md: "px-7 py-3 text-sm",
    lg: "px-9 py-4 text-sm",
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={`inline-flex items-center justify-center gap-2.5 font-medium tracking-[0.08em] uppercase rounded-sm transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`}
      >
        {children}
        {showArrow && (
          <FiArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
        )}
      </Link>
    </motion.div>
  );
}
