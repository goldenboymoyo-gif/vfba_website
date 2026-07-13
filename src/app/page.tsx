"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiPlay, FiFacebook, FiInstagram, FiUsers, FiBox, FiTarget, FiHeart } from "react-icons/fi";
import { SiTiktok, SiYoutube } from "react-icons/si";
import AnimatedSection from "@/components/AnimatedSection";
import ChapterTitle from "@/components/ChapterTitle";
import { StatsRow } from "@/components/Stats";
import { StoryCard, Quote } from "@/components/Cards";
import CTAButton from "@/components/CTAButton";
import { fighters } from "@/lib/fighters";

function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, 80]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      <motion.div
        style={{ scale }}
        className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/70 to-charcoal"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/rise-tobias-landscape.jpg"
            alt="VFBA boxing gym — training in Victoria Falls"
            fill
            className="object-cover object-top opacity-40"
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(26,23,20,0.6)_70%)]" />
      </motion.div>

      <motion.div
        style={{ opacity, y: textY }}
        className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-8"
        >
          <div className="relative w-20 h-20 mx-auto">
            <Image
              src="/images/vfba-logo-official.png"
              alt="Victoria Falls Boxing Academy"
              fill
              className="object-contain"
              sizes="80px"
              priority
            />
          </div>
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gold/70 text-xs tracking-[0.5em] uppercase mb-6"
        >
          Victoria Falls Boxing Academy
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-cream leading-[0.95] max-w-5xl"
        >
          Building champions
          <br />
          <span className="text-gradient-gold">inside &amp; outside</span>
          <br />
          the ring.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 text-dust text-base md:text-lg max-w-xl leading-relaxed"
        >
          A professional boxing academy and children&apos;s home in Victoria Falls,
          Zimbabwe — developing fighters, building discipline, and changing lives.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 px-8 py-4 bg-rust text-cream text-sm font-medium tracking-[0.08em] uppercase rounded-sm border border-transparent hover:bg-rust-light hover:shadow-[0_8px_30px_-6px_rgba(139,58,42,0.5)] transition-all duration-300"
          >
            Join VFBA
            <FiArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/fighters"
            className="group inline-flex items-center gap-2.5 px-8 py-4 bg-transparent text-gold text-sm font-medium tracking-[0.08em] uppercase rounded-sm border border-gold/40 hover:bg-gold/10 hover:border-gold/60 transition-all duration-300"
          >
            Meet Our Fighters
          </Link>
          <Link
            href="/about"
            className="group inline-flex items-center gap-2.5 px-8 py-4 bg-transparent text-cream/80 text-sm font-medium tracking-[0.08em] uppercase rounded-sm border border-cream/15 hover:text-cream hover:border-cream/30 hover:bg-cream/5 transition-all duration-300"
          >
            Explore The Academy
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-16 bg-gradient-to-b from-gold/40 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="relative section-lg border-t border-charcoal-lighter/30">
      <div className="site-container">
        <ChapterTitle
          number="01"
          title="What is VFBA?"
          subtitle="Victoria Falls Boxing Academy is not just a gym — it is a home, a refuge, and a future for children who had neither."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimatedSection direction="left">
            <div className="space-y-7">
              <p className="text-cream/90 text-base leading-relaxed">
                Victoria Falls Boxing Academy was born from one man&apos;s fight
                to survive. Tobias Mupfuti was abandoned as a child, homeless on
                the streets of Victoria Falls. Boxing gave him structure. It gave
                him purpose. And it gave him the strength to give other children
                the same chance.
              </p>
              <p className="text-dust leading-relaxed">
                Today, VFBA is the most active boxing club in Matabeleland North
                province. Approximately 40 children train for free. Eight live
                on-site in the children&apos;s home. The gym is open to the
                community — and every fee paid by adult members funds a
                child&apos;s meals, school fees, and shelter.
              </p>
              <p className="text-dust leading-relaxed">
                From training under trees to one of the biggest boxing gyms in
                Victoria Falls — VFBA is a place where discipline, resilience,
                and hope transform young lives.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <CTAButton href="/about" showArrow>
                  Our Full Story
                </CTAButton>
                <CTAButton href="/mission" variant="secondary" showArrow>
                  Mission &amp; Vision
                </CTAButton>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <div className="grid grid-cols-2 gap-5">
              <div className="relative aspect-[3/4] bg-charcoal-light rounded-sm overflow-hidden border border-charcoal-lighter">
                <Image
                  src="/images/rise-tobias-portrait.jpg"
                  alt="Coach Tobias Mupfuti"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-[3/4] bg-charcoal-light rounded-sm overflow-hidden border border-charcoal-lighter mt-8">
                <Image
                  src="/images/vfba-training-1.jpg"
                  alt="VFBA youth training"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function FightersShowcase() {
  const showcaseFighters = fighters.filter((f) => f.slug !== "tobias-mupfuti");

  return (
    <section className="relative section bg-charcoal-light/50 overflow-hidden">
      <div className="site-container">
        <ChapterTitle
          number="02"
          title="Our Fighters"
          subtitle="Real athletes. Real stories. These are the fighters who represent Victoria Falls Boxing Academy."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {showcaseFighters.map((fighter, i) => (
            <AnimatedSection key={fighter.slug} delay={i * 0.1}>
              <Link href="/fighters" className="block group">
                <div className="relative aspect-[3/4] bg-charcoal-light rounded-sm overflow-hidden border border-charcoal-lighter hover:border-gold/30 transition-all duration-500 fighter-card">
                  <Image
                    src={fighter.image}
                    alt={fighter.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <span className="text-rust-light text-xs tracking-[0.3em] uppercase block mb-1">
                      {fighter.weightClass}
                    </span>
                    <h3 className="font-display text-xl text-cream mb-1 group-hover:text-gold transition-colors duration-300">
                      {fighter.name}
                    </h3>
                    <span className="text-dust text-sm">&ldquo;{fighter.nickname}&rdquo;</span>
                    <div className="flex gap-4 mt-2">
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
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center mt-14">
          <CTAButton href="/fighters" variant="secondary" showArrow>
            View All Fighters
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

function TrainingSection() {
  return (
    <section className="relative section border-t border-charcoal-lighter/30">
      <div className="site-container">
        <ChapterTitle
          number="03"
          title="Training Programmes"
          subtitle="Professional coaching for children and adults. From first steps to competitive fighters — VFBA is open to the community."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatedSection delay={0}>
            <div className="group bg-charcoal/50 border border-charcoal-lighter rounded-sm overflow-hidden hover:border-gold/20 transition-all duration-500 h-full">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/vfba-children-1.jpg"
                  alt="Youth boxing programme"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                <FiBox size={20} className="absolute top-4 right-4 text-gold/60" />
              </div>
              <div className="p-8">
                <h3 className="font-display text-lg text-cream mb-3">
                  Youth Programme
                </h3>
                <p className="text-dust text-sm leading-relaxed">
                  Free training for underprivileged children. Boxing technique,
                  fitness, and life skills.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="group bg-charcoal/50 border border-charcoal-lighter rounded-sm overflow-hidden hover:border-gold/20 transition-all duration-500 h-full">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/vfba-gym-scene.jpg"
                  alt="Community gym"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                <FiUsers size={20} className="absolute top-4 right-4 text-gold/60" />
              </div>
              <div className="p-8">
                <h3 className="font-display text-lg text-cream mb-3">
                  Community Gym
                </h3>
                <p className="text-dust text-sm leading-relaxed">
                  Open to adults. A small fee to train — those funds support the children.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="group bg-charcoal/50 border border-charcoal-lighter rounded-sm overflow-hidden hover:border-gold/20 transition-all duration-500 h-full">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/vfba-training-2.jpg"
                  alt="Competitive boxing"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                <FiTarget size={20} className="absolute top-4 right-4 text-gold/60" />
              </div>
              <div className="p-8">
                <h3 className="font-display text-lg text-cream mb-3">
                  Competitive Boxing
                </h3>
                <p className="text-dust text-sm leading-relaxed">
                  Five-nation tournaments. National representation. Putting VFBA on the map.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="group bg-charcoal/50 border border-charcoal-lighter rounded-sm overflow-hidden hover:border-gold/20 transition-all duration-500 h-full">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/vfba-community-1.jpg"
                  alt="Fitness boxing"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                <FiHeart size={20} className="absolute top-4 right-4 text-gold/60" />
              </div>
              <div className="p-8">
                <h3 className="font-display text-lg text-cream mb-3">
                  Fitness Boxing
                </h3>
                <p className="text-dust text-sm leading-relaxed">
                  Personal training, fitness sessions, and holistic wellbeing. Every fee funds a child.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <div className="text-center mt-14">
          <CTAButton href="/programmes" variant="secondary" showArrow>
            View All Programmes
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

function AcademyStatsSection() {
  return (
    <section className="relative section-lg bg-charcoal-light/50">
      <div className="site-container">
        <ChapterTitle
          number="04"
          title="The Academy Today"
          subtitle="From training under trees to one of the biggest boxing gyms in Victoria Falls — and a home for children who need one."
        />

        <StatsRow
          stats={[
            { number: "40+", label: "Children Training" },
            { number: "8", label: "Children Living On-Site" },
            { number: "5", label: "Nations Competed" },
            { number: "19+", label: "Film Awards Worldwide" },
          ]}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14">
          <StoryCard
            title="The Gym"
            description="A purpose-built boxing arena in Chinotimba, Victoria Falls — one of the biggest gyms in the city. Open to the community, funding the children's home."
            href="/programmes"
            tag="Training"
            image="/images/vfba-gym-scene.jpg"
            imageAlt="VFBA boxing gym in Chinotimba"
            delay={0}
          />
          <StoryCard
            title="The Children's Home"
            description="A safe haven for orphaned and at-risk boys. Shelter, food, education, and discipline — a place to call home."
            href="/childrens-home"
            tag="Shelter"
            image="/images/vfba-children-1.jpg"
            imageAlt="Children at VFBA Children's Home"
            delay={0.1}
          />
          <StoryCard
            title="Community Impact"
            description="The most active boxing club in Matabeleland North. Changing lives through discipline, mentorship, and sport."
            href="/community-impact"
            tag="Impact"
            image="/images/vfba-community-2.jpg"
            imageAlt="VFBA community impact"
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
}

function GymLifeSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section ref={ref} className="relative section overflow-hidden border-t border-charcoal-lighter/30">
      <div className="site-container">
        <ChapterTitle
          number="05"
          title="Gym Life"
          subtitle="Inside the VFBA gym — where discipline meets community, and every session is a step toward something greater."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-12">
          <AnimatedSection delay={0} className="col-span-2 row-span-2">
            <motion.div style={{ y: y1 }} className="relative aspect-square bg-charcoal-light rounded-sm overflow-hidden border border-charcoal-lighter group">
              <Image
                src="/images/vfba-gym-scene.jpg"
                alt="VFBA gym interior"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
              <div className="absolute bottom-4 left-4 z-10">
                <span className="text-gold text-xs tracking-[0.2em] uppercase bg-charcoal/80 px-3 py-1 rounded-sm backdrop-blur-sm">
                  The Ring
                </span>
              </div>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <motion.div style={{ y: y2 }} className="relative aspect-square bg-charcoal-light rounded-sm overflow-hidden border border-charcoal-lighter group">
              <Image
                src="/images/vfba-training-1.jpg"
                alt="Training session"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
              <div className="absolute bottom-4 left-4 z-10">
                <span className="text-gold text-xs tracking-[0.2em] uppercase bg-charcoal/80 px-3 py-1 rounded-sm backdrop-blur-sm">
                  Training
                </span>
              </div>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="relative aspect-square bg-charcoal-light rounded-sm overflow-hidden border border-charcoal-lighter group">
              <Image
                src="/images/vfba-children-2.jpg"
                alt="Youth programme"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
              <div className="absolute bottom-4 left-4 z-10">
                <span className="text-gold text-xs tracking-[0.2em] uppercase bg-charcoal/80 px-3 py-1 rounded-sm backdrop-blur-sm">
                  Youth
                </span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative aspect-square bg-charcoal-light rounded-sm overflow-hidden border border-charcoal-lighter group">
              <Image
                src="/images/vfba-training-2.jpg"
                alt="Heavy bag training"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
              <div className="absolute bottom-4 left-4 z-10">
                <span className="text-gold text-xs tracking-[0.2em] uppercase bg-charcoal/80 px-3 py-1 rounded-sm backdrop-blur-sm">
                  Conditioning
                </span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.25}>
            <div className="relative aspect-square bg-charcoal-light rounded-sm overflow-hidden border border-charcoal-lighter group">
              <Image
                src="/images/vfba-event-1.jpg"
                alt="Tournament"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
              <div className="absolute bottom-4 left-4 z-10">
                <span className="text-gold text-xs tracking-[0.2em] uppercase bg-charcoal/80 px-3 py-1 rounded-sm backdrop-blur-sm">
                  Competition
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <div className="text-center mt-14">
          <CTAButton href="/gallery" variant="secondary" showArrow>
            Explore Full Gallery
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

function MissionSection() {
  return (
    <section className="relative section overflow-hidden bg-charcoal-light/50">
      <div className="absolute inset-0 bg-gradient-to-r from-rust/5 to-green/5" />
      <div className="site-container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimatedSection>
            <Quote
              quote="We try by every means so that they do not have time to go to the streets. After training, they are tired; they do their homework and sleep. It was not easy in the streets. I thought of giving hope to those children rejected by their families."
              author="Tobias Mupfuti"
              role="Founder & Head Coach, VFBA"
            />
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-7">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-cream leading-tight">
                Boxing is not
                <br />
                <span className="text-gradient-gold">violence.</span>
                <br />
                It&apos;s structure.
              </h2>
              <p className="text-dust text-base leading-relaxed">
                Self-confidence. Perseverance. Respect. At VFBA, boxing is a
                vehicle for instilling the discipline and resilience that young
                people need to build a life — not just survive one.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton href="/mission" showArrow>
                  Our Mission
                </CTAButton>
                <CTAButton href="/support" variant="secondary" showArrow>
                  Support VFBA
                </CTAButton>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function RiseSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.96, 1]);

  return (
    <section ref={ref} className="relative section border-t border-charcoal-lighter/30">
      <div className="site-container">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-gold/70 text-xs tracking-[0.5em] uppercase block mb-4">
              The Story Behind Rise
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-cream leading-tight mb-6">
              The documentary that
              <br />
              <span className="text-gradient-gold">reached the world.</span>
            </h2>
            <p className="text-dust text-base leading-relaxed">
              Victoria Falls Boxing Academy inspired the film Rise — the first
              Zimbabwean film ever selected for the Tribeca Film Festival.
              Oscar-eligible. 19+ awards worldwide.
            </p>
          </div>
        </AnimatedSection>

        <Link href="/rise-film" className="block">
          <motion.div
            style={{ scale }}
            className="relative aspect-video bg-charcoal-light rounded-sm overflow-hidden border border-charcoal-lighter max-w-4xl mx-auto group"
          >
            <div className="absolute inset-0">
              <Image
                src="/images/rise-poster.jpg"
                alt="Rise film poster"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 75vw, 66vw"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 to-charcoal/70" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-rust/30 border-2 border-rust/50 flex items-center justify-center mb-6 group-hover:bg-rust/50 transition-colors duration-300 animate-pulse-glow">
                <FiPlay size={28} className="text-cream ml-1" />
              </div>
              <span className="font-display text-2xl md:text-3xl text-cream mb-2">
                RISE
              </span>
              <span className="text-dust text-sm">Watch the Film</span>
            </div>
          </motion.div>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14 max-w-4xl mx-auto">
          <AnimatedSection delay={0}>
            <div className="text-center">
              <span className="font-display text-lg font-bold text-gradient-gold">
                Tribeca 2025
              </span>
              <span className="block mt-2 text-dust text-sm">
                World Premiere — First Zimbabwean Film Selected
              </span>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="text-center">
              <span className="font-display text-lg font-bold text-gradient-gold">
                Oscar Eligible
              </span>
              <span className="block mt-2 text-dust text-sm">
                98th Academy Awards — Shortlisted
              </span>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="text-center">
              <span className="font-display text-lg font-bold text-gradient-gold">
                19+ Awards
              </span>
              <span className="block mt-2 text-dust text-sm">
                Including Viola Davis Endorsement
              </span>
            </div>
          </AnimatedSection>
        </div>

        <div className="text-center mt-14">
          <CTAButton href="/rise-film" variant="secondary" showArrow>
            Discover the Full Story
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

function SocialSection() {
  const socials = [
    { icon: FiInstagram, label: "Instagram", href: "https://www.instagram.com/victoriafallsboxingacademy", handle: "@victoriafallsboxingacademy", color: "hover:text-pink-400" },
    { icon: FiFacebook, label: "Facebook", href: "https://www.facebook.com/victoriafallsboxingacademy", handle: "Victoria Falls Boxing Academy", color: "hover:text-blue-400" },
    { icon: SiTiktok, label: "TikTok", href: "https://www.tiktok.com/@victoriafallsboxingacademy", handle: "@victoriafallsboxingacademy", color: "hover:text-cyan-400" },
    { icon: SiYoutube, label: "YouTube", href: "https://www.youtube.com/@victoriafallsboxingacademy", handle: "@victoriafallsboxingacademy", color: "hover:text-red-400" },
  ];

  return (
    <section className="section bg-charcoal-light/50">
      <div className="site-container text-center">
        <AnimatedSection>
          <span className="text-gold/70 text-xs tracking-[0.5em] uppercase block mb-4">
            Follow VFBA
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-cream leading-tight mb-4">
            Stay connected
          </h2>
          <p className="text-dust text-base max-w-xl mx-auto mb-12">
            Training highlights, tournament results, community events, and
            behind-the-scenes content from the gym.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {socials.map((social, i) => (
            <AnimatedSection key={social.label} delay={i * 0.08}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 p-6 bg-charcoal/50 border border-charcoal-lighter rounded-sm hover:border-gold/20 transition-all duration-500"
              >
                <social.icon size={28} className={`text-dust ${social.color} transition-colors duration-300`} />
                <div>
                  <span className="text-cream text-sm font-medium block">{social.label}</span>
                  <span className="text-dust/60 text-xs">{social.handle}</span>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function SupportSection() {
  return (
    <section className="relative section bg-gradient-to-b from-charcoal to-charcoal-light/50">
      <div className="site-container text-center">
        <ChapterTitle
          number="06"
          title="Be Part of What Happens Next"
          subtitle="Every child deserves a chance. Every punch thrown is a step forward. Your support makes it possible."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14">
          <StoryCard
            title="Donate"
            description="Fund training equipment, school fees, meals, and shelter for children who need it most."
            href="/support"
            tag="Give"
            delay={0}
          />
          <StoryCard
            title="Volunteer"
            description="Bring your skills to Victoria Falls. Coach, teach, build, or create — every contribution matters."
            href="/support#volunteer"
            tag="Contribute"
            delay={0.1}
          />
          <StoryCard
            title="Partner"
            description="Organisations, brands, and NGOs — join VFBA's mission to transform lives through sport."
            href="/support#partner"
            tag="Collaborate"
            delay={0.2}
          />
        </div>

        <div className="mt-14">
          <CTAButton href="/support" size="lg" showArrow>
            Support VFBA
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FightersShowcase />
      <TrainingSection />
      <AcademyStatsSection />
      <GymLifeSection />
      <MissionSection />
      <RiseSection />
      <SocialSection />
      <SupportSection />
    </>
  );
}
