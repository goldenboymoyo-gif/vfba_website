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
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  showArrow = false,
}: CTAButtonProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    primary: "bg-rust text-cream hover:bg-rust-light",
    secondary: "bg-gold/10 text-gold border border-gold/30 hover:bg-gold/20",
    ghost: "text-cream border border-cream/20 hover:border-cream/40 hover:bg-cream/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
      transition={{ duration: 0.6 }}
    >
      <Link
        href={href}
        className={`inline-flex items-center gap-2 tracking-wide rounded-sm transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`}
      >
        {children}
        {showArrow && <FiArrowRight size={16} />}
      </Link>
    </motion.div>
  );
}
