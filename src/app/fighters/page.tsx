"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import ChapterTitle from "@/components/ChapterTitle";
import CTAButton from "@/components/CTAButton";
import { fighters } from "@/lib/fighters";
import { FiX, FiAward, FiHeart, FiTarget } from "react-icons/fi";

const categories = ["All", "Youth", "Coach"] as const;
type Category = (typeof categories)[number];

export default function FightersPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedFighter, setSelectedFighter] = useState<typeof fighters[0] | null>(null);

  const filtered =
    activeCategory === "All"
      ? fighters.filter((f) => f.slug !== "tobias-mupfuti")
      : fighters.filter((f) => f.category === activeCategory && f.slug !== "tobias-mupfuti");

  const coach = fighters.find((f) => f.slug === "tobias-mupfuti")!;

  return (
    <>
      {/* Hero */}
      <section className="relative page-hero">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/90 to-charcoal" />
        <div className="site-container relative">
          <AnimatedSection>
            <span className="text-gold/70 text-xs tracking-[0.5em] uppercase block mb-4">
              VFBA Fighters
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-[0.95] max-w-4xl">
              Meet the
              <br />
              <span className="text-gradient-gold">fighters.</span>
            </h1>
            <p className="mt-6 text-dust text-base md:text-lg max-w-2xl leading-relaxed">
              Every fighter at VFBA has a story. These are the athletes who train,
              compete, and represent Victoria Falls Boxing Academy on the national
              and international stage.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Coach Section */}
      <section className="section bg-charcoal-light/50">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="relative aspect-[4/5] bg-charcoal-light rounded-sm overflow-hidden border border-charcoal-lighter max-w-md">
                <Image
                  src={coach.image}
                  alt={coach.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="text-gold text-xs tracking-[0.3em] uppercase block mb-2">
                    {coach.category}
                  </span>
                  <h2 className="font-display text-3xl text-cream mb-1">{coach.name}</h2>
                  <span className="text-dust text-sm">{coach.nickname}</span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="space-y-7">
                <span className="text-gold/70 text-xs tracking-[0.4em] uppercase block">
                  The Heart Behind VFBA
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-cream leading-tight">
                  The man who
                  <br />
                  <span className="text-gradient-gold">built champions.</span>
                </h2>
                <p className="text-cream/90 text-base leading-relaxed">
                  {coach.story}
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {coach.achievements.map((a) => (
                    <div key={a} className="flex items-start gap-2">
                      <FiAward size={14} className="text-gold mt-1 shrink-0" />
                      <span className="text-dust text-sm">{a}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-charcoal/50 border border-charcoal-lighter rounded-sm p-6 mt-6">
                  <p className="font-display text-base text-cream/80 italic leading-relaxed">
                    &ldquo;{coach.quote}&rdquo;
                  </p>
                  <span className="text-gold text-sm mt-3 block">— {coach.name}</span>
                </div>
                <CTAButton href="/coach-tobias" variant="secondary" showArrow>
                  Full Profile
                </CTAButton>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Fighters Grid */}
      <section className="section border-t border-charcoal-lighter/30">
        <div className="site-container">
          <ChapterTitle
            number="01"
            title="The Roster"
            subtitle="VFBA's competitive fighters — developing talent, building records, and representing Victoria Falls on the national stage."
          />

          {/* Category Filters */}
          <div className="flex gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-sm tracking-wide rounded-sm transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-rust text-cream"
                    : "bg-charcoal-light border border-charcoal-lighter text-dust hover:text-cream hover:border-charcoal-lighter"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filtered.map((fighter, i) => (
              <AnimatedSection key={fighter.slug} delay={i * 0.1}>
                <button
                  onClick={() => setSelectedFighter(fighter)}
                  className="group relative aspect-[3/4] bg-charcoal-light rounded-sm overflow-hidden border border-charcoal-lighter hover:border-gold/30 transition-all duration-500 w-full text-left fighter-card"
                >
                  <Image
                    src={fighter.image}
                    alt={fighter.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <span className="text-rust-light text-xs tracking-[0.3em] uppercase block mb-2">
                      {fighter.weightClass}
                    </span>
                    <h3 className="font-display text-xl text-cream mb-1 group-hover:text-gold transition-colors duration-300">
                      {fighter.name}
                    </h3>
                    <span className="text-dust text-sm">&ldquo;{fighter.nickname}&rdquo;</span>
                    <div className="flex gap-4 mt-3">
                      <span className="text-cream/80 text-xs">
                        <span className="text-gold font-bold">{fighter.stats.wins}</span> W
                      </span>
                      <span className="text-cream/80 text-xs">
                        <span className="text-rust-light font-bold">{fighter.stats.losses}</span> L
                      </span>
                      <span className="text-cream/80 text-xs">
                        <span className="text-dust font-bold">{fighter.stats.draws}</span> D
                      </span>
                    </div>
                  </div>
                </button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Fighter Spotlight Quote */}
      <section className="section bg-charcoal-light/50">
        <div className="site-container text-center">
          <AnimatedSection>
            <span className="text-gold/60 text-xs tracking-[0.4em] uppercase block mb-6">
              VFBA Spirit
            </span>
            <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl text-cream/90 leading-snug max-w-3xl mx-auto italic">
              &ldquo;Every child deserves a chance. Every punch thrown is a step forward.&rdquo;
            </blockquote>
            <div className="mt-8">
              <span className="text-gold font-medium">Victoria Falls Boxing Academy</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-b from-charcoal to-charcoal-light/50">
        <div className="site-container text-center">
          <h2 className="font-display text-3xl md:text-4xl text-cream mb-6">
            Want to fight for VFBA?
          </h2>
          <p className="text-dust text-base max-w-xl mx-auto mb-8">
            VFBA is always looking for dedicated athletes. Whether you&apos;re a
            beginner or an experienced fighter — there is a place for you.
          </p>
          <div className="mt-14">
            <CTAButton href="/contact" showArrow size="lg">
              Join VFBA
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Fighter Detail Modal */}
      <AnimatePresence>
        {selectedFighter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/95 backdrop-blur-sm p-4 overflow-y-auto"
            onClick={() => setSelectedFighter(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative w-full max-w-4xl bg-charcoal-light border border-charcoal-lighter rounded-sm my-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedFighter(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-charcoal/80 backdrop-blur-sm border border-charcoal-lighter flex items-center justify-center text-cream/60 hover:text-cream transition-colors"
                aria-label="Close"
              >
                <FiX size={20} />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative aspect-[3/4] lg:aspect-auto">
                  <Image
                    src={selectedFighter.image}
                    alt={selectedFighter.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <span className="text-rust-light text-xs tracking-[0.3em] uppercase block mb-2">
                    {selectedFighter.weightClass}
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl text-cream mb-1">
                    {selectedFighter.name}
                  </h2>
                  <span className="text-dust text-base mb-6">
                    &ldquo;{selectedFighter.nickname}&rdquo;
                  </span>

                  <p className="text-cream/80 leading-relaxed mb-6">
                    {selectedFighter.story}
                  </p>

                  <div className="flex gap-6 mb-6 pb-6 border-b border-charcoal-lighter">
                    <div className="text-center">
                      <FiTarget size={16} className="text-gold mx-auto mb-1" />
                      <span className="font-display text-xl text-gold block">{selectedFighter.stats.wins}</span>
                      <span className="text-dust text-xs uppercase">Wins</span>
                    </div>
                    <div className="text-center">
                      <FiHeart size={16} className="text-rust-light mx-auto mb-1" />
                      <span className="font-display text-xl text-rust-light block">{selectedFighter.stats.losses}</span>
                      <span className="text-dust text-xs uppercase">Losses</span>
                    </div>
                    <div className="text-center">
                      <FiAward size={16} className="text-dust mx-auto mb-1" />
                      <span className="font-display text-xl text-dust block">{selectedFighter.stats.draws}</span>
                      <span className="text-dust text-xs uppercase">Draws</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {selectedFighter.achievements.map((a) => (
                      <div key={a} className="flex items-start gap-2">
                        <FiAward size={12} className="text-gold mt-1 shrink-0" />
                        <span className="text-dust text-sm">{a}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-charcoal/50 border border-charcoal-lighter rounded-sm p-5">
                    <p className="font-display text-cream/80 italic leading-relaxed">
                      &ldquo;{selectedFighter.quote}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
