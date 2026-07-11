"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

interface CardProps {
  title: string;
  description: string;
  href?: string;
  image?: string;
  imageAlt?: string;
  tag?: string;
  delay?: number;
}

export function StoryCard({ title, description, href, image, imageAlt, tag, delay = 0 }: CardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const content = (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, delay }}
      className="group bg-charcoal-light/50 border border-charcoal-lighter rounded-sm overflow-hidden hover:border-gold/20 transition-all duration-500 h-full flex flex-col"
    >
      {image && (
        <div className="relative h-52 overflow-hidden">
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent" />
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        {tag && (
          <span className="text-gold text-xs tracking-[0.2em] uppercase mb-3 block">
            {tag}
          </span>
        )}
        <h3 className="font-display text-xl text-cream mb-3 group-hover:text-gold transition-colors duration-300">
          {title}
        </h3>
        <p className="text-dust text-sm leading-relaxed flex-1">{description}</p>
        {href && (
          <div className="mt-5 pt-4 border-t border-charcoal-lighter flex items-center gap-2 text-gold text-sm group-hover:gap-3 transition-all duration-300">
            <span>Read more</span>
            <FiArrowRight size={14} />
          </div>
        )}
      </div>
    </motion.article>
  );

  if (href) {
    return <Link href={href} className="block h-full">{content}</Link>;
  }
  return content;
}

interface QuoteProps {
  quote: string;
  author: string;
  role?: string;
}

export function Quote({ quote, author, role }: QuoteProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.blockquote
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
      className="relative py-12 px-8"
    >
      <div className="absolute top-0 left-0 font-display text-8xl text-gold/10 leading-none">
        &ldquo;
      </div>
      <p className="font-display text-2xl md:text-3xl text-cream/90 leading-relaxed italic relative z-10">
        {quote}
      </p>
      <footer className="mt-6">
        <span className="text-gold font-medium">{author}</span>
        {role && (
          <span className="text-dust text-sm block mt-1">{role}</span>
        )}
      </footer>
    </motion.blockquote>
  );
}

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  side?: "left" | "right";
}

export function TimelineItem({ year, title, description, side = "left" }: TimelineItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: side === "left" ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: side === "left" ? -30 : 30 }}
      transition={{ duration: 0.7 }}
      className="relative pl-8 pb-12 border-l border-charcoal-lighter last:border-l-0"
    >
      <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-gold -translate-x-[7px]" />
      <span className="text-gold text-xs tracking-[0.3em] uppercase">{year}</span>
      <h3 className="font-display text-xl text-cream mt-2 mb-2">{title}</h3>
      <p className="text-dust text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
