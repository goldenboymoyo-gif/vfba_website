"use client";

import AnimatedSection from "@/components/AnimatedSection";
import ChapterTitle from "@/components/ChapterTitle";
import { StatsRow } from "@/components/Stats";
import CTAButton from "@/components/CTAButton";
import Image from "next/image";

export default function CommunityImpactPage() {
  return (
    <>
      <section className="relative page-hero">
        <div className="site-container">
          <AnimatedSection>
            <span className="text-gold/70 text-xs tracking-[0.5em] uppercase block mb-4">
              Impact
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-[0.95] max-w-4xl">
              Changing lives,
              <br />
              <span className="text-gradient-gold">one punch at a time.</span>
            </h1>
            <p className="mt-6 text-dust text-base md:text-lg max-w-2xl leading-relaxed">
              VFBA is the most active boxing club in Matabeleland North province.
              It is more than a gym — it is a community lifeline.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section border-t border-charcoal-lighter/30">
        <div className="site-container">
          <StatsRow
            stats={[
              { number: "40+", label: "Children Training" },
              { number: "8", label: "Living On-Site" },
              { number: "5", label: "Nations Competed" },
              { number: "10+", label: "New Rooms Planned" },
            ]}
          />

          <div className="relative aspect-[16/9] md:aspect-[21/9] bg-charcoal-light rounded-sm overflow-hidden border border-charcoal-lighter mt-16">
            <Image
              src="/images/vfba-community-2.jpg"
              alt="VFBA community impact"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>

          <ChapterTitle
            number="01"
            title="How Boxing Changes Lives"
            subtitle="The practical, protective function of training — keeping children occupied, tired, and purposeful."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <AnimatedSection>
              <div className="space-y-7">
                <p className="text-cream/90 text-base leading-relaxed">
                  In Victoria Falls, nearly 5 million children live in poverty in
                  Zimbabwe, with 1.6 million in extreme poverty. Without
                  intervention, the streets, drugs, and crime await.
                </p>
                <p className="text-dust leading-relaxed">
                  VFBA offers an alternative. After school, children come to the
                  gym. They train. They do their homework. They sleep. The idle
                  time that leads to trouble is filled with structure, discipline,
                  and purpose.
                </p>
                <p className="text-dust leading-relaxed">
                  The gym also funds school fees for children who cannot afford
                  them. Boxing is the vehicle — education is the destination.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-charcoal-light/50 border border-charcoal-lighter rounded-sm p-8">
                <h3 className="font-display text-2xl text-cream mb-4">
                  Bright Moyo&apos;s Story
                </h3>
                <p className="text-dust leading-relaxed mb-4">
                  &ldquo;If the academy had not paid for my fees, the chances were high
                  that I would have been into drugs. Some of my friends are into
                  drugs. The academy is giving me hope. I saw myself in that
                  young boy in the film.&rdquo;
                </p>
                <span className="text-gold text-sm">— Bright Moyo, VFBA Boxer</span>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section bg-charcoal-light/50">
        <div className="site-container">
          <ChapterTitle
            number="02"
            title="What We Provide"
            subtitle="Beyond the ring — a complete support system for children in need."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Boxing Training",
                text: "Professional coaching, equipment, and a structured programme for children of all ages and skill levels.",
              },
              {
                title: "Education Support",
                text: "School fees, homework support, and a commitment to ensuring every child at VFBA attends school.",
              },
              {
                title: "Shelter",
                text: "The VFBA Children's Home provides safe housing for orphaned and at-risk boys who have nowhere else to go.",
              },
              {
                title: "Nutrition",
                text: "Meals provided at the gym — ensuring children are fed, healthy, and able to train and learn.",
              },
              {
                title: "Life Skills",
                text: "Discipline, perseverance, respect, and self-confidence — the values that boxing instills in every session.",
              },
              {
                title: "Community",
                text: "A family. A brotherhood. A place where children who have been rejected find belonging.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="bg-charcoal-light/30 border border-charcoal-lighter rounded-sm p-6 hover:border-gold/20 transition-colors duration-500 h-full">
                  <h3 className="font-display text-xl text-cream mb-3">
                    {item.title}
                  </h3>
                  <p className="text-dust text-sm leading-relaxed">{item.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gradient-to-b from-charcoal to-charcoal-light/50">
        <div className="site-container text-center">
          <h2 className="font-display text-4xl md:text-5xl text-cream mb-6">
            Make an impact
          </h2>
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton href="/support" showArrow size="lg">
              Donate
            </CTAButton>
            <CTAButton href="/childrens-home" variant="secondary" showArrow size="lg">
              Children&apos;s Home
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
