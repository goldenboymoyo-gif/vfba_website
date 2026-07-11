"use client";

import AnimatedSection from "@/components/AnimatedSection";
import ChapterTitle from "@/components/ChapterTitle";
import CTAButton from "@/components/CTAButton";
import Image from "next/image";

export default function ProgrammesPage() {
  return (
    <>
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <span className="text-gold/70 text-xs tracking-[0.5em] uppercase block mb-4">
              Training
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-cream leading-[0.95] max-w-4xl">
              Boxing
              <br />
              <span className="text-gradient-gold">Programmes</span>
            </h1>
            <p className="mt-6 text-dust text-lg md:text-xl max-w-2xl leading-relaxed">
              Professional coaching for children and adults. From beginners to
              competitive fighters — VFBA is open to the community.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-spacing">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ChapterTitle
            number="01"
            title="Youth Programme"
            subtitle="Free training for underprivileged children — the heart of VFBA."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <div className="space-y-6">
                <p className="text-cream/90 text-lg leading-relaxed">
                  VFBA&apos;s youth programme is the foundation of everything we do.
                  Approximately 40 children train for free, learning not just
                  boxing technique but discipline, perseverance, and respect.
                </p>
                <p className="text-dust leading-relaxed">
                  Sessions include technical boxing training, fitness conditioning,
                  and life-skills development. After training, children do their
                  homework and rest — the structure that keeps them off the streets.
                </p>
                <p className="text-dust leading-relaxed">
                  The programme has produced competitive boxers who have represented
                  VFBA in regional and national tournaments, including athletes
                  like Lennox &apos;The Hurricane&apos; Chigango and Crein &apos;The Beast&apos; Moyo.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="relative aspect-[4/3] bg-charcoal-light rounded-sm overflow-hidden border border-charcoal-lighter">
                    <Image
                      src="/images/vfba-training-1.jpg"
                      alt="Youth training session at VFBA"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="relative aspect-[4/3] bg-charcoal-light rounded-sm overflow-hidden border border-charcoal-lighter">
                    <Image
                      src="/images/vfba-training-2.jpg"
                      alt="Boxing training at VFBA"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-charcoal-light/50 border border-charcoal-lighter rounded-sm p-8">
                <h3 className="font-display text-2xl text-cream mb-4">
                  Youth Programme Details
                </h3>
                <div className="space-y-4 text-dust">
                  <div className="flex justify-between border-b border-charcoal-lighter pb-3">
                    <span>Age Groups</span>
                    <span className="text-cream">Junior & Youth</span>
                  </div>
                  <div className="flex justify-between border-b border-charcoal-lighter pb-3">
                    <span>Cost</span>
                    <span className="text-gold">Free for underprivileged children</span>
                  </div>
                  <div className="flex justify-between border-b border-charcoal-lighter pb-3">
                    <span>Training Days</span>
                    <span className="text-cream">Weekdays</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Location</span>
                    <span className="text-cream">Chinotimba, Victoria Falls</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-charcoal-light/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ChapterTitle
            number="02"
            title="Community Gym"
            subtitle="Open to adults — the gym that funds the children's home."
          />

          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="max-w-3xl">
                <p className="text-cream/90 text-lg leading-relaxed mb-6">
                  The VFBA gym is open to the public. Adults pay a small fee to use
                  the facilities — and those funds go directly toward supporting the
                  children&apos;s programme and the children&apos;s home.
                </p>
                <p className="text-dust leading-relaxed mb-6">
                  Personal training sessions are available, using the boxing and gym
                  equipment. The gym features a full-size boxing ring, heavy bags,
                  speed bags, and a complete fitness area.
                </p>
                <p className="text-dust leading-relaxed mb-8">
                  The facility also includes a private room used for meditation and
                  yoga sessions — reflecting Tobias&apos;s holistic approach to
                  physical and mental wellbeing.
                </p>
                <CTAButton href="/contact" showArrow>
                  Visit the Gym
                </CTAButton>
              </div>
              <div className="relative aspect-[4/3] bg-charcoal-light rounded-sm overflow-hidden border border-charcoal-lighter">
                <Image
                  src="/images/vfba-gym-scene.jpg"
                  alt="VFBA boxing gym in Chinotimba"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-spacing bg-gradient-to-b from-charcoal to-charcoal-light/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-cream mb-6">
            Train with us
          </h2>
          <p className="text-dust text-lg max-w-xl mx-auto mb-8">
            Whether you&apos;re a beginner or an experienced fighter, VFBA welcomes you.
            Every fee supports a child&apos;s future.
          </p>
          <CTAButton href="/contact" showArrow size="lg">
            Get in Touch
          </CTAButton>
        </div>
      </section>
    </>
  );
}
