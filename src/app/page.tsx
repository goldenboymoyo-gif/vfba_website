"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  FiArrowRight,
  FiPlay,
  FiFacebook,
  FiInstagram,
  FiUsers,
  FiTarget,
  FiHeart,
  FiAward,
  FiMapPin,
  FiCalendar,
} from "react-icons/fi";
import { SiTiktok, SiYoutube } from "react-icons/si";
import AnimatedSection from "@/components/AnimatedSection";
import ChapterTitle from "@/components/ChapterTitle";
import { StatsRow } from "@/components/Stats";
import { StoryCard, Quote } from "@/components/Cards";
import CTAButton from "@/components/CTAButton";

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
            src="/images/vfba-gym-scene.jpg"
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
            className="inline-flex items-center gap-3 px-8 py-4 bg-rust text-cream text-sm tracking-wider uppercase rounded-sm hover:bg-rust-light transition-all duration-300"
          >
            Join VFBA
            <FiArrowRight size={16} />
          </Link>
          <Link
            href="/fighters"
            className="inline-flex items-center gap-3 px-8 py-4 border border-cream/20 text-cream text-sm tracking-wider uppercase rounded-sm hover:border-cream/40 hover:bg-cream/5 transition-all duration-300"
          >
            <FiUsers size={14} />
            Meet Our Fighters
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-3 px-8 py-4 border border-cream/20 text-cream text-sm tracking-wider uppercase rounded-sm hover:border-cream/40 hover:bg-cream/5 transition-all duration-300"
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
                Founded in 2010, Victoria Falls Boxing Academy is the longtime
                dream of Tobius Muposiwa. Growing up, his life path was
                transformed when he began boxing training under veteran boxer
                Titus &ldquo;TNT&rdquo; Zhikali. He wanted to use boxing to
                influence other at-risk youngsters — to provide discipline and
                structure in their lives.
              </p>
              <p className="text-dust leading-relaxed">
                He gathered a group of boxers together who came to be known as
                the &ldquo;Bush Boxers&rdquo;, as early morning and evening saw
                them training in the surrounds of Victoria Falls town. Today,
                VFBA is the most active boxing club in Matabeleland North
                province.
              </p>
              <p className="text-dust leading-relaxed">
                Approximately 40 children train for free. Eight live on-site in
                the children&apos;s home. Every fee paid by adult members funds
                a child&apos;s meals, school fees, and shelter.
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
                  alt="Coach Tobius Muposiwa"
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

function DayAtVFBASection() {
  const schedule = [
    { time: "05:00", title: "Morning Road Run", description: "The Bush Boxers tradition — fighters hit the streets before sunrise, running the main route into Victoria Falls town.", image: "/images/vfba-training-1.jpg" },
    { time: "06:30", title: "Bush Training", description: "Road work, calisthenics, and conditioning in the open air. The discipline that started under trees continues every morning.", image: "/images/vfba-community-1.jpg" },
    { time: "08:00", title: "Breakfast & School", description: "The children return, eat breakfast, and head to school. Education comes first — every child at VFBA attends classes.", image: "/images/vfba-children-1.jpg" },
    { time: "14:00", title: "After School Homework", description: "Back from school, the children do their homework under supervision. Tobius ensures study time before any training.", image: "/images/vfba-children-2.jpg" },
    { time: "16:00", title: "Gym Session", description: "Boxing training in the ring — technique, sparring, bag work, and conditioning. Juniors and adults train side by side.", image: "/images/vfba-gym-scene.jpg" },
    { time: "18:00", title: "Community Open Gym", description: "Adult members arrive for evening sessions. Every fee paid here funds a child's meals, school fees, and shelter.", image: "/images/vfba-training-2.jpg" },
    { time: "20:00", title: "Rest & Recovery", description: "Dinner, rest, and sleep. No time for the streets. This is the structure that keeps children safe and focused.", image: "/images/vfba-event-1.jpg" },
  ];

  return (
    <section className="relative section bg-charcoal-light/50 border-t border-charcoal-lighter/30">
      <div className="site-container">
        <ChapterTitle
          number="02"
          title="A Day at VFBA"
          subtitle="From sunrise road runs to evening rest — the structure that keeps children off the streets and in the ring."
        />

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-charcoal-lighter/50 -translate-x-1/2" />

          <div className="space-y-12">
            {schedule.map((item, i) => (
              <AnimatedSection key={item.time} delay={i * 0.08} direction={i % 2 === 0 ? "left" : "right"}>
                <div className={`flex flex-col md:flex-row items-start gap-6 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                  <div className={`flex-1 ${i % 2 === 1 ? "md:text-right" : ""}`}>
                    <div className={`flex items-center gap-3 mb-3 ${i % 2 === 1 ? "md:justify-end" : ""}`}>
                      <span className="text-gold font-display text-lg font-bold">{item.time}</span>
                      <div className="w-2 h-2 rounded-full bg-gold shrink-0 relative z-10" />
                    </div>
                    <h3 className="font-display text-xl text-cream mb-2">{item.title}</h3>
                    <p className="text-dust text-sm leading-relaxed">{item.description}</p>
                  </div>
                  <div className="w-full md:w-48 shrink-0">
                    <div className="relative aspect-[4/3] bg-charcoal-light rounded-sm overflow-hidden border border-charcoal-lighter">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 192px"
                      />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ImpactSection() {
  return (
    <section className="relative section-lg border-t border-charcoal-lighter/30">
      <div className="site-container">
        <ChapterTitle
          number="03"
          title="Our Impact"
          subtitle="From the town dump to the world stage. The numbers tell the story."
          align="center"
        />

        <StatsRow
          stats={[
            { number: "40+", label: "Children Training" },
            { number: "8", label: "Children Living On-Site" },
            { number: "15+", label: "Years of Impact" },
            { number: "2010", label: "Year Founded" },
          ]}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14">
          <AnimatedSection delay={0}>
            <div className="bg-charcoal/50 border border-charcoal-lighter rounded-sm p-8 text-center h-full">
              <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-5">
                <FiAward size={24} className="text-gold" />
              </div>
              <h3 className="font-display text-xl text-cream mb-3">National Champions</h3>
              <p className="text-dust text-sm leading-relaxed">
                Prince Urengwa — undefeated Zimbabwe Pinweight Gold Medalist.
                Personal Mpofu — Zimbabwe Paperweight Gold Medalist. Both
                training at VFBA since childhood.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="bg-charcoal/50 border border-charcoal-lighter rounded-sm p-8 text-center h-full">
              <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-5">
                <FiHeart size={24} className="text-gold" />
              </div>
              <h3 className="font-display text-xl text-cream mb-3">Children&apos;s Home</h3>
              <p className="text-dust text-sm leading-relaxed">
                Eight children live on-site with Tobius and his wife. Shelter,
                food, education, and discipline — a family for children who
                had none.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-charcoal/50 border border-charcoal-lighter rounded-sm p-8 text-center h-full">
              <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-5">
                <FiTarget size={24} className="text-gold" />
              </div>
              <h3 className="font-display text-xl text-cream mb-3">International Reach</h3>
              <p className="text-dust text-sm leading-relaxed">
                5 Nations Championship hosts. Rise film — Tribeca 2025,
                Oscar-eligible, 19+ awards worldwide. Victoria Falls on the
                global boxing map.
              </p>
            </div>
          </AnimatedSection>
        </div>

        <div className="text-center mt-14">
          <CTAButton href="/about" variant="secondary" showArrow>
            Read Our Full Story
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

function CoachesSection() {
  return (
    <section className="relative section border-t border-charcoal-lighter/30">
      <div className="site-container">
        <ChapterTitle
          number="03"
          title="Our Coaches"
          subtitle="The mentors who shape champions. VFBA's coaching staff bring decades of combined experience and an unwavering commitment to youth development."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          <AnimatedSection direction="left">
            <div className="flex flex-col sm:flex-row gap-8 items-start">
              <div className="relative w-full sm:w-48 aspect-[3/4] bg-charcoal-light rounded-sm overflow-hidden border border-charcoal-lighter shrink-0">
                <Image
                  src="/images/rise-tobias-portrait.jpg"
                  alt="Tobius Muposiwa"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, 192px"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <span className="text-gold text-xs tracking-[0.3em] uppercase">
                    Head Coach &amp; Founder
                  </span>
                  <h3 className="font-display text-2xl text-cream mt-1">
                    Tobius Muposiwa
                  </h3>
                  <span className="text-dust text-sm italic">
                    &ldquo;The Founder&rdquo;
                  </span>
                </div>
                <p className="text-dust text-sm leading-relaxed">
                  Abandoned at eight, homeless on the streets of Victoria Falls.
                  Boxing saved his life. He built VFBA from nothing — training
                  under trees, then a rented classroom lit by cellphone light,
                  and now one of the biggest gyms in the city.
                </p>
                <p className="text-dust text-sm leading-relaxed">
                  As Director and Head Coach, Tobius personally mentors every
                  child who walks through the door. He assumed guardianship for
                  his top young fighters and pays their school fees.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-8 items-start">
              <div className="relative w-full sm:w-48 aspect-[3/4] bg-charcoal-light rounded-sm overflow-hidden border border-charcoal-lighter shrink-0">
                <Image
                  src="/images/vfba-training-2.jpg"
                  alt="Titus 'TNT' Zhikali"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, 192px"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <span className="text-gold text-xs tracking-[0.3em] uppercase">
                    Senior Coach &amp; Mentor
                  </span>
                  <h3 className="font-display text-2xl text-cream mt-1">
                    Titus &ldquo;TNT&rdquo; Zhikali
                  </h3>
                  <span className="text-dust text-sm italic">
                    &ldquo;The Veteran&rdquo;
                  </span>
                </div>
                <p className="text-dust text-sm leading-relaxed">
                  A veteran Zimbabwean boxer who first taught Tobius to fight.
                  His decision to share his knowledge with a homeless teenager
                  planted the seed that would eventually grow into VFBA.
                </p>
                <p className="text-dust text-sm leading-relaxed">
                  Titus continues to coach at the academy, passing on decades
                  of ring experience and the values of discipline, respect, and
                  perseverance to the next generation.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.3}>
          <div className="mt-14 bg-charcoal/50 border border-charcoal-lighter rounded-sm p-8 lg:p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <FiUsers size={24} className="text-gold/60 mx-auto mb-3" />
                <h4 className="font-display text-lg text-cream mb-1">Trustees</h4>
                <p className="text-dust text-sm">Andrew Lane, Faruk Karim, Obert Sibanda</p>
              </div>
              <div>
                <FiAward size={24} className="text-gold/60 mx-auto mb-3" />
                <h4 className="font-display text-lg text-cream mb-1">Management</h4>
                <p className="text-dust text-sm">Danielle Connolly (Chair), Ian Gloss, Kent Davies, Laura Taggart</p>
              </div>
              <div>
                <FiHeart size={24} className="text-gold/60 mx-auto mb-3" />
                <h4 className="font-display text-lg text-cream mb-1">Key Donor</h4>
                <p className="text-dust text-sm">Mark Valentine — provided the entire gym and fitout</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
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

function SocialHubSection() {
  return (
    <section className="relative section bg-charcoal-light/50 border-t border-charcoal-lighter/30">
      <div className="site-container">
        <ChapterTitle
          number="06"
          title="Social Hub"
          subtitle="Everything VFBA posts — training, tournaments, community events, and behind-the-scenes. Follow us on every platform."
          align="center"
        />

        {/* YouTube Featured Video */}
        <AnimatedSection>
          <div className="max-w-4xl mx-auto mb-14">
            <span className="text-gold/70 text-xs tracking-[0.3em] uppercase block mb-4 text-center">
              <SiYoutube size={14} className="inline mr-2" />
              YouTube — Latest from VFBA
            </span>
            <div className="relative aspect-video bg-charcoal rounded-sm overflow-hidden border border-charcoal-lighter">
              <iframe
                src="https://www.youtube.com/embed?listType=user_uploads&list=UCpNaKUdHzD0QugBAJyRHz6w"
                title="VFBA YouTube Channel"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Facebook + Instagram Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14">
          {/* Facebook Page Plugin */}
          <AnimatedSection direction="left">
            <span className="text-gold/70 text-xs tracking-[0.3em] uppercase block mb-4">
              <FiFacebook size={14} className="inline mr-2" />
              Facebook — @victoriafallsboxingacademy
            </span>
            <div className="bg-charcoal/50 border border-charcoal-lighter rounded-sm overflow-hidden p-1">
              <div
                className="fb-page"
                data-href="https://www.facebook.com/victoriafallsboxingacademy"
                data-tabs="timeline,events"
                data-width="500"
                data-height="600"
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
              >
                <blockquote cite="https://www.facebook.com/victoriafallsboxingacademy" className="fb-xfbml-parse-ignore">
                  <a href="https://www.facebook.com/victoriafallsboxingacademy">Victoria Falls Boxing Academy on Facebook</a>
                </blockquote>
              </div>
            </div>
          </AnimatedSection>

          {/* Instagram Embed */}
          <AnimatedSection direction="right" delay={0.2}>
            <span className="text-gold/70 text-xs tracking-[0.3em] uppercase block mb-4">
              <FiInstagram size={14} className="inline mr-2" />
              Instagram — @victoriafallsboxingacademy
            </span>
            <div className="bg-charcoal/50 border border-charcoal-lighter rounded-sm overflow-hidden p-6">
              <div className="grid grid-cols-2 gap-3">
                <a href="https://www.instagram.com/victoriafallsboxingacademy/" target="_blank" rel="noopener noreferrer" className="group relative aspect-square bg-charcoal rounded-sm overflow-hidden border border-charcoal-lighter hover:border-pink-400/30 transition-all duration-500">
                  <Image src="/images/vfba-gym-scene.jpg" alt="VFBA Gym" fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="25vw" />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-500 flex items-center justify-center">
                    <FiInstagram size={24} className="text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </a>
                <a href="https://www.instagram.com/victoriafallsboxingacademy/" target="_blank" rel="noopener noreferrer" className="group relative aspect-square bg-charcoal rounded-sm overflow-hidden border border-charcoal-lighter hover:border-pink-400/30 transition-all duration-500">
                  <Image src="/images/vfba-training-1.jpg" alt="VFBA Training" fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="25vw" />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-500 flex items-center justify-center">
                    <FiInstagram size={24} className="text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </a>
                <a href="https://www.instagram.com/victoriafallsboxingacademy/" target="_blank" rel="noopener noreferrer" className="group relative aspect-square bg-charcoal rounded-sm overflow-hidden border border-charcoal-lighter hover:border-pink-400/30 transition-all duration-500">
                  <Image src="/images/vfba-children-1.jpg" alt="VFBA Children" fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="25vw" />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-500 flex items-center justify-center">
                    <FiInstagram size={24} className="text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </a>
                <a href="https://www.instagram.com/victoriafallsboxingacademy/" target="_blank" rel="noopener noreferrer" className="group relative aspect-square bg-charcoal rounded-sm overflow-hidden border border-charcoal-lighter hover:border-pink-400/30 transition-all duration-500">
                  <Image src="/images/vfba-event-1.jpg" alt="VFBA Event" fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="25vw" />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-500 flex items-center justify-center">
                    <FiInstagram size={24} className="text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </a>
              </div>
              <a
                href="https://www.instagram.com/victoriafallsboxingacademy/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 py-3 border border-pink-400/30 rounded-sm text-pink-400 text-sm hover:bg-pink-400/10 transition-all duration-300"
              >
                <FiInstagram size={16} />
                Follow on Instagram
              </a>
            </div>
          </AnimatedSection>
        </div>

        {/* TikTok Videos */}
        <AnimatedSection>
          <div className="mb-14">
            <span className="text-gold/70 text-xs tracking-[0.3em] uppercase block mb-4 text-center">
              <SiTiktok size={14} className="inline mr-2" />
              TikTok — @coach.t5182
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-charcoal/50 border border-charcoal-lighter rounded-sm overflow-hidden">
                <div className="relative aspect-[9/16] max-h-[500px]">
                  <iframe
                    src="https://www.tiktok.com/embed/v2/7653914359286041876"
                    title="VFBA TikTok Video 1"
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen
                  />
                </div>
              </div>
              <a
                href="https://www.tiktok.com/@coach.t5182"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-charcoal/50 border border-charcoal-lighter rounded-sm overflow-hidden flex flex-col items-center justify-center min-h-[400px] hover:border-cyan-400/30 transition-all duration-500"
              >
                <SiTiktok size={48} className="text-cyan-400/40 group-hover:text-cyan-400 transition-colors duration-300 mb-4" />
                <span className="text-cream font-display text-lg mb-2">Watch All Videos</span>
                <span className="text-dust text-sm">@coach.t5182</span>
                <span className="text-dust/60 text-xs mt-2">Training, sparring &amp; daily life</span>
              </a>
              <a
                href="https://www.tiktok.com/@victoriafallsboxingacademy"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-charcoal/50 border border-charcoal-lighter rounded-sm overflow-hidden flex flex-col items-center justify-center min-h-[400px] hover:border-cyan-400/30 transition-all duration-500"
              >
                <SiTiktok size={48} className="text-cyan-400/40 group-hover:text-cyan-400 transition-colors duration-300 mb-4" />
                <span className="text-cream font-display text-lg mb-2">Official Account</span>
                <span className="text-dust text-sm">@victoriafallsboxingacademy</span>
                <span className="text-dust/60 text-xs mt-2">Academy highlights &amp; events</span>
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* Social Links */}
        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <a href="https://www.facebook.com/victoriafallsboxingacademy" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 p-4 bg-charcoal/50 border border-charcoal-lighter rounded-sm hover:border-blue-400/30 transition-all duration-500">
              <FiFacebook size={20} className="text-blue-400/70 group-hover:text-blue-400 transition-colors" />
              <div>
                <span className="text-cream text-sm font-medium block">Facebook</span>
                <span className="text-dust/60 text-xs">2,190 likes</span>
              </div>
            </a>
            <a href="https://www.instagram.com/victoriafallsboxingacademy" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 p-4 bg-charcoal/50 border border-charcoal-lighter rounded-sm hover:border-pink-400/30 transition-all duration-500">
              <FiInstagram size={20} className="text-pink-400/70 group-hover:text-pink-400 transition-colors" />
              <div>
                <span className="text-cream text-sm font-medium block">Instagram</span>
                <span className="text-dust/60 text-xs">@victoriafallsboxingacademy</span>
              </div>
            </a>
            <a href="https://www.tiktok.com/@coach.t5182" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 p-4 bg-charcoal/50 border border-charcoal-lighter rounded-sm hover:border-cyan-400/30 transition-all duration-500">
              <SiTiktok size={20} className="text-cyan-400/70 group-hover:text-cyan-400 transition-colors" />
              <div>
                <span className="text-cream text-sm font-medium block">TikTok</span>
                <span className="text-dust/60 text-xs">Coach T</span>
              </div>
            </a>
            <a href="https://www.youtube.com/@victoriafallsboxingacademy1626" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 p-4 bg-charcoal/50 border border-charcoal-lighter rounded-sm hover:border-red-400/30 transition-all duration-500">
              <SiYoutube size={20} className="text-red-400/70 group-hover:text-red-400 transition-colors" />
              <div>
                <span className="text-cream text-sm font-medium block">YouTube</span>
                <span className="text-dust/60 text-xs">VFBA Channel</span>
              </div>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function TournamentHighlightsSection() {
  return (
    <section className="relative section border-t border-charcoal-lighter/30">
      <div className="site-container">
        <ChapterTitle
          number="07"
          title="Tournament Highlights"
          subtitle="From local bouts to international championships — VFBA fighters carry the flag for Victoria Falls and Zimbabwe."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          <AnimatedSection direction="left">
            <div className="relative aspect-[4/3] bg-charcoal-light rounded-sm overflow-hidden border border-charcoal-lighter">
              <Image
                src="/images/vfba-event-1.jpg"
                alt="5 Nations Boxing Championship"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-gold text-xs tracking-[0.3em] uppercase block mb-2">
                  <FiCalendar size={12} className="inline mr-1" />
                  December 2019
                </span>
                <h3 className="font-display text-2xl text-cream mb-2">
                  5 Nations Boxing Friendly Championship
                </h3>
                <p className="text-dust text-sm">
                  Hosted at The Kingdom Hotel in Victoria Falls in conjunction
                  with the Zimbabwe Boxing Federation. The event that put VFBA
                  on the continental stage.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <div className="space-y-8">
              <div className="bg-charcoal/50 border border-charcoal-lighter rounded-sm p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                    <FiAward size={20} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg text-cream mb-1">
                      Prince Urengwa
                    </h4>
                    <span className="text-rust-light text-xs tracking-wider uppercase">
                      Zimbabwe Pinweight Gold Medalist
                    </span>
                    <p className="text-dust text-sm mt-2">
                      Undefeated in his division. Defeated every opponent in the
                      country up to age 13 in his weight class. On track for
                      international representation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-charcoal/50 border border-charcoal-lighter rounded-sm p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                    <FiAward size={20} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg text-cream mb-1">
                      Personal Mpofu
                    </h4>
                    <span className="text-rust-light text-xs tracking-wider uppercase">
                      Zimbabwe Paperweight Gold Medalist
                    </span>
                    <p className="text-dust text-sm mt-2">
                      From a struggling family to national champion. Personal
                      represents the future of Zimbabwean boxing and the power
                      of the VFBA programme.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-charcoal/50 border border-charcoal-lighter rounded-sm p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                    <FiMapPin size={20} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg text-cream mb-1">
                      National Representation
                    </h4>
                    <span className="text-rust-light text-xs tracking-wider uppercase">
                      Matabeleland North
                    </span>
                    <p className="text-dust text-sm mt-2">
                      VFBA is the most active boxing club in the province. Our
                      fighters regularly represent the region at national level
                      and international tournaments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function CommunityImpactSection() {
  return (
    <section className="relative section-lg bg-charcoal-light/50">
      <div className="site-container">
        <ChapterTitle
          number="08"
          title="Community Impact"
          subtitle="From one man's fight to survive to a movement changing an entire community. The numbers tell the story."
        />

        <StatsRow
          stats={[
            { number: "40+", label: "Children Training" },
            { number: "8", label: "Children Living On-Site" },
            { number: "15+", label: "Years of Impact" },
            { number: "2010", label: "Year Founded" },
          ]}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14">
          <StoryCard
            title="The Children's Home"
            description="A safe haven for orphaned and at-risk boys. Shelter, food, education, and discipline — a place to call home. Eight children currently live on-site with Tobius and his wife."
            href="/childrens-home"
            tag="Shelter"
            image="/images/vfba-children-1.jpg"
            imageAlt="Children at VFBA Children's Home"
            delay={0}
          />
          <StoryCard
            title="From Dump to Champion"
            description="In 2013, Tobius found 6-year-old Prince Urengwa collecting bottle caps at the town dump. Today, Prince is the undefeated Zimbabwe Pinweight Gold Medalist."
            href="/about"
            tag="Transformation"
            image="/images/vfba-portrait-1.jpg"
            imageAlt="Prince Urengwa - VFBA success story"
            delay={0.1}
          />
          <StoryCard
            title="School Fees &amp; Futures"
            description="Every fee paid by an adult member at the gym funds a child's meals, school fees, and shelter. The community supports itself through sport."
            href="/support"
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
              The Rise Film
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-cream leading-tight mb-6">
              The documentary that
              <br />
              <span className="text-gradient-gold">reached the world.</span>
            </h2>
            <p className="text-dust text-base leading-relaxed">
              Victoria Falls Boxing Academy inspired the film Rise — the first
              Zimbabwean film ever selected for the Tribeca Film Festival.
              Oscar-eligible. 19+ awards worldwide. The story of Tobius, Prince,
              and the Bush Boxers.
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

function GallerySection() {
  const images = [
    { src: "/images/vfba-gym-scene.jpg", alt: "VFBA gym interior", span: "col-span-2 row-span-2" },
    { src: "/images/vfba-training-1.jpg", alt: "Morning training session", span: "" },
    { src: "/images/vfba-children-1.jpg", alt: "Youth programme", span: "" },
    { src: "/images/vfba-training-2.jpg", alt: "Sparring session", span: "" },
    { src: "/images/vfba-community-1.jpg", alt: "Community event", span: "" },
    { src: "/images/vfba-event-1.jpg", alt: "Tournament action", span: "col-span-2" },
    { src: "/images/vfba-portrait-1.jpg", alt: "Fighter portrait", span: "" },
    { src: "/images/vfba-community-2.jpg", alt: "Community impact", span: "" },
  ];

  return (
    <section className="relative section bg-charcoal-light/50 border-t border-charcoal-lighter/30">
      <div className="site-container">
        <ChapterTitle
          number="09"
          title="Gallery"
          subtitle="Life inside and outside the VFBA gym — training, community, competition, and everything in between."
          align="center"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <AnimatedSection key={i} delay={i * 0.05} className={img.span}>
              <div className="relative aspect-square bg-charcoal-light rounded-sm overflow-hidden border border-charcoal-lighter group cursor-pointer">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-cream text-xs">{img.alt}</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center mt-14">
          <CTAButton href="/gallery" variant="secondary" showArrow>
            View Full Gallery
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="relative section border-t border-charcoal-lighter/30">
      <div className="site-container text-center">
        <ChapterTitle
          number="10"
          title="Get In Touch"
          subtitle="Whether you want to join, volunteer, donate, or just say hello — we'd love to hear from you."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto mt-4">
          <AnimatedSection delay={0}>
            <div className="bg-charcoal/50 border border-charcoal-lighter rounded-sm p-8 text-center">
              <FiMapPin size={24} className="text-gold/60 mx-auto mb-4" />
              <h4 className="font-display text-lg text-cream mb-2">Visit Us</h4>
              <p className="text-dust text-sm leading-relaxed">
                8480 Mkhosana Township<br />
                Victoria Falls, Zimbabwe
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="bg-charcoal/50 border border-charcoal-lighter rounded-sm p-8 text-center">
              <FiHeart size={24} className="text-gold/60 mx-auto mb-4" />
              <h4 className="font-display text-lg text-cream mb-2">Support</h4>
              <p className="text-dust text-sm leading-relaxed">
                Donate, volunteer, or partner with us. Every contribution
                changes a child&apos;s life.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-charcoal/50 border border-charcoal-lighter rounded-sm p-8 text-center">
              <FiUsers size={24} className="text-gold/60 mx-auto mb-4" />
              <h4 className="font-display text-lg text-cream mb-2">Join</h4>
              <p className="text-dust text-sm leading-relaxed">
                Open to all ages and abilities. Youth train free.
                Community gym for adults.
              </p>
            </div>
          </AnimatedSection>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-14">
          <CTAButton href="/contact" showArrow>
            Contact Us
          </CTAButton>
          <CTAButton href="/support" variant="secondary" showArrow>
            Support VFBA
          </CTAButton>
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
          number="11"
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
      <DayAtVFBASection />
      <ImpactSection />
      <CoachesSection />
      <GymLifeSection />
      <SocialHubSection />
      <TournamentHighlightsSection />
      <CommunityImpactSection />
      <RiseSection />
      <GallerySection />
      <ContactSection />
      <SupportSection />
    </>
  );
}
