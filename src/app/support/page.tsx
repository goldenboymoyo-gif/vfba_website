"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FiHeart,
  FiArrowRight,
  FiCheck,
  FiShield,
  FiUsers,
  FiGlobe,
  FiMail,
  FiShare2,
  FiExternalLink,
  FiX,
  FiTarget,
  FiHome,
  FiBookOpen,
} from "react-icons/fi";
import AnimatedSection from "@/components/AnimatedSection";
import ChapterTitle from "@/components/ChapterTitle";
import CTAButton from "@/components/CTAButton";

const impactAreas = [
  {
    icon: FiTarget,
    title: "Boxing Equipment",
    description:
      "Gloves, hand wraps, headgear, punching bags, rings, protective equipment and training resources for over 40 young athletes.",
    image: "/images/vfba-gym-action-1.jpg",
    imageAlt: "VFBA boxing gym with training equipment",
  },
  {
    icon: FiHome,
    title: "Children's Home",
    description:
      "Safe accommodation and daily living for orphaned and at-risk children staying at the academy — a roof, a bed, and a family.",
    image: "/images/vfba-children-1.jpg",
    imageAlt: "Children at VFBA Children's Home",
  },
  {
    icon: FiHeart,
    title: "Nutrition",
    description:
      "Healthy meals for athletes and residents — fuelling training, growth, and the daily energy every child needs to thrive.",
    image: "/images/vfba-children-2.jpg",
    imageAlt: "VFBA children at the academy",
  },
  {
    icon: FiBookOpen,
    title: "Education",
    description:
      "School fees, books, homework support, and educational opportunities — because the gym funds the classroom.",
    image: "/images/vfba-kids-training-1.jpg",
    imageAlt: "VFBA youth programme",
  },
  {
    icon: FiGlobe,
    title: "Community Programmes",
    description:
      "Expanding youth development throughout Victoria Falls — boxing outreach, life skills, and community engagement.",
    image: "/images/vfba-community-event-1.jpg",
    imageAlt: "VFBA community programme",
  },
];

const supportOptions = [
  {
    title: "One-Time Donation",
    description:
      "A single contribution toward equipment, building materials, meals, or emergency needs. Every amount makes a difference.",
    icon: FiHeart,
    accent: "rust",
  },
  {
    title: "Monthly Supporter",
    description:
      "Regular donations from $10/month help VFBA plan ahead — covering school fees, meals, and ongoing training costs consistently.",
    icon: FiUsers,
    accent: "gold",
  },
  {
    title: "Sponsor a Programme",
    description:
      "Fund a specific programme: youth training, education support, nutrition, or the children's home. Your name on a mission.",
    icon: FiGlobe,
    accent: "green",
  },
  {
    title: "Equipment Donation",
    description:
      "Donate boxing equipment, training gear, or supplies directly. New or gently used — VFBA puts it to work immediately.",
    icon: FiShield,
    accent: "rust",
  },
  {
    title: "Corporate Partnership",
    description:
      "Align your brand with a Tribeca-recognised, Oscar-eligible story of resilience. Sponsor events, programmes, or operations.",
    icon: FiUsers,
    accent: "gold",
  },
];

const paymentMethods = [
  { name: "MATTER", subtitle: "Partner nonprofit", url: "https://matter.ngo" },
  { name: "It Gym", subtitle: "Fitness partner", url: "https://it-gym.com/zim" },
  { name: "Bank Transfer", subtitle: "Contact VFBA for details" },
  { name: "WhatsApp", subtitle: "Direct arrangement" },
];

const otherWays = [
  {
    title: "Volunteer",
    description:
      "Coach, teach, build, photograph, or organise — bring your skills to Victoria Falls.",
    href: "/support#volunteer",
  },
  {
    title: "Become a Partner",
    description:
      "Organisations, brands, and NGOs — join the mission to transform lives through sport.",
    href: "/support#partner",
  },
  {
    title: "Sponsor an Event",
    description:
      "Fund a tournament, open day, or community programme. Put your name behind something real.",
    href: "/contact",
  },
  {
    title: "Visit the Academy",
    description:
      "Come to Victoria Falls, meet Tobias and the children, and see the impact firsthand.",
    href: "/contact",
  },
  {
    title: "Share the Story",
    description:
      "Tell someone about VFBA. Share the film Rise. Every conversation expands the mission.",
    href: "/rise-film",
  },
  {
    title: "Contact VFBA",
    description:
      "Have questions? Want to help in another way? Reach out directly — VFBA welcomes every conversation.",
    href: "/contact",
  },
];

function DonationSuccessModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-charcoal/90 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative w-full max-w-lg bg-charcoal-light border border-charcoal-lighter rounded-sm p-8 md:p-12 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-dust hover:text-cream transition-colors"
              aria-label="Close"
            >
              <FiX size={20} />
            </button>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.2,
                duration: 0.6,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className="w-20 h-20 rounded-full bg-green/20 border-2 border-green/40 flex items-center justify-center mx-auto mb-8"
            >
              <FiCheck size={32} className="text-green-light" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl text-cream mb-4">
                Thank You
              </h2>
              <p className="text-dust leading-relaxed mb-6">
                Your generosity helps VFBA provide training, shelter, meals,
                education, and hope for children in Victoria Falls. You are now
                part of a story that reaches the world.
              </p>
              <div className="bg-charcoal/50 border border-charcoal-lighter rounded-sm p-4 mb-8">
                <p className="text-dust text-sm">
                  A confirmation will be sent via your chosen donation method.
                  For any questions, contact VFBA directly.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-rust text-cream text-sm font-medium tracking-[0.08em] uppercase rounded-sm border border-transparent hover:bg-rust-light hover:shadow-[0_8px_30px_-6px_rgba(139,58,42,0.5)] transition-all duration-300"
                >
                  Return Home
                  <FiArrowRight size={14} />
                </Link>
                <a
                  href="https://www.facebook.com/victoriafallsboxingacademy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-gold text-sm font-medium tracking-[0.08em] uppercase rounded-sm border border-gold/40 hover:bg-gold/10 hover:border-gold/60 transition-all duration-300"
                >
                  <FiShare2 size={14} />
                  Share VFBA
                </a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function SupportPage() {
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/vfba-community-2.jpg"
            alt="VFBA community — children and coaches together"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal" />
          <div className="absolute inset-0 hero-gradient" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
          <AnimatedSection>
            <span className="text-gold/70 text-xs tracking-[0.5em] uppercase block mb-6">
              Support VFBA
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-[0.95] max-w-4xl mx-auto">
              Support the Next
              <br />
              <span className="text-gradient-gold">Generation</span> Through
              Boxing
            </h1>
            <p className="mt-6 text-cream/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Every contribution helps Victoria Falls Boxing Academy provide a
              safe environment, coaching, mentorship, education support,
              equipment, and opportunities for young people who need it most.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#ways-to-support"
                className="group inline-flex items-center gap-2.5 px-8 py-4 bg-rust text-cream text-sm font-medium tracking-[0.08em] uppercase rounded-sm border border-transparent hover:bg-rust-light hover:shadow-[0_8px_30px_-6px_rgba(139,58,42,0.5)] transition-all duration-300 animate-pulse-glow"
              >
                <FiHeart size={16} />
                Donate Now
              </a>
              <a
                href="#impact"
                className="group inline-flex items-center gap-2.5 px-8 py-4 bg-transparent text-gold text-sm font-medium tracking-[0.08em] uppercase rounded-sm border border-gold/40 hover:bg-gold/10 hover:border-gold/60 transition-all duration-300"
              >
                See Where It Goes
                <FiArrowRight size={14} />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Where Donations Make a Difference */}
      <section id="impact" className="section border-t border-charcoal-lighter/30 scroll-mt-24">
        <div className="site-container">
          <ChapterTitle
            number="01"
            title="Where Your Donation Goes"
            subtitle="Every contribution directly supports the lives of children at VFBA. Here is exactly what your generosity funds."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {impactAreas.map((area, i) => (
              <AnimatedSection key={area.title} delay={i * 0.08}>
                <div className="group bg-charcoal-light/50 border border-charcoal-lighter rounded-sm overflow-hidden card-hover-lift hover:border-gold/20 h-full flex flex-col">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={area.image}
                      alt={area.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <area.icon size={24} className="text-gold" />
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-display text-xl text-cream mb-3 group-hover:text-gold transition-colors duration-300">
                      {area.title}
                    </h3>
                    <p className="text-dust text-sm leading-relaxed flex-1">
                      {area.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="section bg-charcoal-light/50">
        <div className="site-container">
          <ChapterTitle
            number="02"
            title="Transparency & Trust"
            subtitle="We believe you deserve to know exactly how your support is used."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl">
            {[
              {
                icon: <FiShield size={20} className="text-gold" />,
                title: "How Donations Are Used",
                text: "100% of donations go directly to the academy — covering training equipment, school fees, meals, shelter, and facility maintenance. VFBA operates on minimal overhead.",
              },
              {
                icon: <FiUsers size={20} className="text-gold" />,
                title: "Current Priorities",
                text: "Phase 2 of the children's home build: 10 additional rooms to accommodate more children. Equipment replacement and expansion of the community programme.",
              },
              {
                icon: <FiGlobe size={20} className="text-gold" />,
                title: "Existing Partners",
                text: "MATTER (matter.ngo), It Gym, Rise Film Production, Wild Horizons, and Stalin Mau Mau have all contributed to VFBA's growth. New partners are welcome.",
              },
              {
                icon: <FiCheck size={20} className="text-gold" />,
                title: "Accountability",
                text: "VFBA is a registered entity in Zimbabwe. Tobias Mupfuti and the team provide regular updates through social media and direct communication with donors.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="bg-charcoal/50 border border-charcoal-lighter rounded-sm p-6 md:p-8 h-full">
                  <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-display text-xl text-cream mb-3">
                    {item.title}
                  </h3>
                  <p className="text-dust text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to Support */}
      <section
        id="ways-to-support"
        className="section border-t border-charcoal-lighter/30 scroll-mt-24"
      >
        <div className="site-container">
          <ChapterTitle
            number="03"
            title="Ways to Support"
            subtitle="Choose how you want to be part of VFBA's mission. Every option makes a real difference."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
            {supportOptions.map((option, i) => {
              const Icon = option.icon;
              return (
                <AnimatedSection key={option.title} delay={i * 0.08}>
                  <div className="group bg-charcoal-light/50 border border-charcoal-lighter rounded-sm p-6 md:p-8 card-hover-lift hover:border-gold/20 h-full flex flex-col">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center mb-5 ${
                        option.accent === "rust"
                          ? "bg-rust/15 border border-rust/25"
                          : option.accent === "gold"
                            ? "bg-gold/10 border border-gold/20"
                            : "bg-green/15 border border-green/25"
                      }`}
                    >
                      <Icon
                        size={20}
                        className={
                          option.accent === "rust"
                            ? "text-rust-light"
                            : option.accent === "gold"
                              ? "text-gold"
                              : "text-green-light"
                        }
                      />
                    </div>
                    <h3 className="font-display text-xl text-cream mb-3 group-hover:text-gold transition-colors duration-300">
                      {option.title}
                    </h3>
                    <p className="text-dust text-sm leading-relaxed flex-1">
                      {option.description}
                    </p>
                    <div className="mt-5 pt-4 border-t border-charcoal-lighter">
                      <button
                        onClick={() => setShowSuccess(true)}
                        className="inline-flex items-center gap-2 text-gold text-sm font-medium group-hover:gap-3 transition-all duration-300"
                      >
                        Learn More
                        <FiArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="section bg-charcoal-light/50">
        <div className="site-container">
          <ChapterTitle
            number="04"
            title="How to Donate"
            subtitle="VFBA receives donations through trusted partners. Choose the method that works for you."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {paymentMethods.map((method, i) => (
              <AnimatedSection key={method.name} delay={i * 0.08}>
                {method.url ? (
                  <a
                    href={method.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-charcoal/50 border border-charcoal-lighter rounded-sm p-6 text-center hover:border-gold/20 transition-all duration-500 h-full"
                  >
                    <h4 className="font-display text-lg text-cream mb-1 group-hover:text-gold transition-colors duration-300">
                      {method.name}
                    </h4>
                    <p className="text-dust text-xs">{method.subtitle}</p>
                    <FiExternalLink
                      size={12}
                      className="text-dust/50 mx-auto mt-3 group-hover:text-gold transition-colors"
                    />
                  </a>
                ) : (
                  <div className="bg-charcoal/50 border border-charcoal-lighter rounded-sm p-6 text-center h-full">
                    <h4 className="font-display text-lg text-cream mb-1">
                      {method.name}
                    </h4>
                    <p className="text-dust text-xs">{method.subtitle}</p>
                  </div>
                )}
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <div className="mt-8 max-w-4xl mx-auto bg-charcoal/30 border border-charcoal-lighter rounded-sm p-6 text-center">
              <p className="text-dust text-sm">
                For the most current donation methods, contact VFBA directly via
                WhatsApp or visit their{" "}
                <a
                  href="https://www.facebook.com/victoriafallsboxingacademy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold-light transition-colors underline underline-offset-2"
                >
                  Facebook page
                </a>
                . Payment integration placeholders are shown above — official
                methods will be confirmed by VFBA.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Volunteer */}
      <section
        id="volunteer"
        className="section border-t border-charcoal-lighter/30 scroll-mt-24"
      >
        <div className="site-container">
          <ChapterTitle
            number="05"
            title="Volunteer"
            subtitle="Bring your skills to Victoria Falls. Every contribution of time matters."
          />

          <AnimatedSection>
            <div className="max-w-3xl space-y-7">
              <p className="text-cream/90 text-base leading-relaxed">
                VFBA welcomes volunteers who want to contribute their time and
                skills. Whether you&apos;re a coach, teacher, builder,
                photographer, or simply someone who wants to help — there is a
                place for you.
              </p>
              <p className="text-dust leading-relaxed">
                Volunteers have helped with coaching, construction,
                photography, event organisation, and community outreach. The
                academy relies on the generosity of people who believe in the
                mission.
              </p>
              <p className="text-dust leading-relaxed">
                Victoria Falls itself is a destination — the world-famous
                waterfalls, wildlife, and adventure activities make it a
                rewarding place to volunteer while making a real difference.
              </p>
              <div className="pt-4">
                <CTAButton href="/contact" showArrow>
                  Get in Touch
                </CTAButton>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Partner */}
      <section
        id="partner"
        className="section bg-charcoal-light/50 scroll-mt-24"
      >
        <div className="site-container">
          <ChapterTitle
            number="06"
            title="Partner With Us"
            subtitle="Organisations, brands, and NGOs — join VFBA's mission."
          />

          <AnimatedSection>
            <div className="max-w-3xl space-y-7">
              <p className="text-cream/90 text-base leading-relaxed">
                VFBA is actively seeking partnerships with organisations that
                share our commitment to youth development, sport for social
                change, and community building.
              </p>
              <p className="text-dust leading-relaxed">
                Partnerships can take many forms: financial support, equipment
                donations, skills training, co-branded events, or media
                collaboration. The VFBA story — validated by Tribeca and the
                Academy Awards — offers partners a genuine, cinematic,
                globally recognised narrative to align with.
              </p>
              <div className="pt-4">
                <CTAButton href="/partners" variant="secondary" showArrow>
                  View Current Partners
                </CTAButton>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="section border-t border-charcoal-lighter/30">
        <div className="site-container">
          <ChapterTitle
            number="07"
            title="Other Ways to Help"
            subtitle="Not everyone can donate — but everyone can do something."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {otherWays.map((way, i) => (
              <AnimatedSection key={way.title} delay={i * 0.08}>
                <Link href={way.href} className="block h-full">
                  <div className="group bg-charcoal-light/30 border border-charcoal-lighter rounded-sm p-6 card-hover-lift hover:border-gold/20 h-full flex flex-col">
                    <h3 className="font-display text-lg text-cream mb-2 group-hover:text-gold transition-colors duration-300">
                      {way.title}
                    </h3>
                    <p className="text-dust text-sm leading-relaxed flex-1">
                      {way.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-gold/70 text-sm group-hover:text-gold group-hover:gap-3 transition-all duration-300">
                      <span>Learn more</span>
                      <FiArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quote / Emotional Close */}
      <section className="section bg-charcoal-light/50">
        <div className="site-container text-center">
          <AnimatedSection>
            <span className="text-gold/60 text-xs tracking-[0.4em] uppercase block mb-6">
              In Tobias&apos;s Words
            </span>
            <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl text-cream/90 leading-snug max-w-3xl mx-auto italic">
              &ldquo;We try by every means so that they do not have time to go
              to the streets. After training, they are tired; they do their
              homework and sleep.&rdquo;
            </blockquote>
            <div className="mt-8">
              <span className="text-gold font-medium">
                Tobias Mupfuti
              </span>
              <span className="block text-dust text-sm mt-1">
                Founder & Head Coach, VFBA
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-gradient-to-b from-charcoal to-charcoal-light/50">
        <div className="site-container text-center">
          <AnimatedSection>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream mb-6">
              Be part of what
              <br />
              <span className="text-gradient-gold">happens next</span>
            </h2>
            <p className="text-dust text-base max-w-xl mx-auto mb-10">
              He fought to survive. Now he teaches others to. Help VFBA
              continue the fight — one child, one punch, one future at a time.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setShowSuccess(true)}
                className="group inline-flex items-center gap-2.5 px-8 py-4 bg-rust text-cream text-sm font-medium tracking-[0.08em] uppercase rounded-sm border border-transparent hover:bg-rust-light hover:shadow-[0_8px_30px_-6px_rgba(139,58,42,0.5)] transition-all duration-300"
              >
                <FiHeart size={16} />
                Donate Now
              </button>
              <CTAButton href="/about" variant="secondary" showArrow>
                Read the Full Story
              </CTAButton>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <DonationSuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
      />
    </>
  );
}
