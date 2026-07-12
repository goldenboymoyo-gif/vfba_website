"use client";

import AnimatedSection from "@/components/AnimatedSection";
import ChapterTitle from "@/components/ChapterTitle";
import { Quote } from "@/components/Cards";
import CTAButton from "@/components/CTAButton";

export default function MissionPage() {
  return (
    <>
      <section className="relative page-hero">
        <div className="site-container">
          <AnimatedSection>
            <span className="text-gold/70 text-xs tracking-[0.5em] uppercase block mb-4">
              Purpose
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-[0.95] max-w-4xl">
              Mission &
              <br />
              <span className="text-gradient-gold">Vision</span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <AnimatedSection>
              <div className="bg-charcoal-light/50 border border-charcoal-lighter rounded-sm p-8 md:p-12">
                <span className="text-gold text-xs tracking-[0.3em] uppercase">
                  Our Mission
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-cream mt-4 mb-6">
                  To give underprivileged youth an alternative to poverty and
                  violence through boxing, education, and shelter.
                </h2>
                <p className="text-dust leading-relaxed">
                  Victoria Falls Boxing Academy exists to provide at-risk and
                  orphaned children in Victoria Falls with structured boxing
                  training, educational support, and a safe home — nurturing
                  sporting talent alongside life skills, self-confidence, and
                  resilience.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-charcoal-light/50 border border-charcoal-lighter rounded-sm p-8 md:p-12">
                <span className="text-gold text-xs tracking-[0.3em] uppercase">
                  Our Vision
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-cream mt-4 mb-6">
                  A community where every child has the chance to rise.
                </h2>
                <p className="text-dust leading-relaxed">
                  We envision a Victoria Falls where no child is left on the
                  streets. Where boxing is a vehicle for discipline and hope, not
                  violence. Where the academy becomes a model for youth
                  development across Zimbabwe and beyond — putting Victoria Falls
                  on the international boxing map.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section bg-charcoal-light/30">
        <div className="site-container">
          <ChapterTitle
            number="01"
            title="What We Believe"
            subtitle="The values that drive everything we do."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Discipline Over Violence",
                text: "Boxing is structure. It is self-mastery. It teaches young people to control their bodies, their emotions, and their futures.",
              },
              {
                title: "Dignity, Not Pity",
                text: "We do not tell stories of victimhood. We tell stories of resilience, agency, and strength. Every child at VFBA is a fighter.",
              },
              {
                title: "Education First",
                text: "The gym funds school fees. Training keeps children occupied. Homework and sleep follow training — not the streets.",
              },
              {
                title: "Community Over Individual",
                text: "VFBA exists because the community needs it. We train together, we grow together, we fight together.",
              },
              {
                title: "Authenticity Always",
                text: "No fictional stories. No exaggerated claims. Every photograph, every statistic, every word is real.",
              },
              {
                title: "Hope Through Action",
                text: "We do not ask for sympathy. We offer an opportunity to be part of something real — a place where hope is built, not spoken about.",
              },
            ].map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <div className="bg-charcoal-light/30 border border-charcoal-lighter rounded-sm p-6 hover:border-gold/20 transition-colors duration-500 h-full">
                  <h3 className="font-display text-xl text-cream mb-3">
                    {value.title}
                  </h3>
                  <p className="text-dust text-sm leading-relaxed">
                    {value.text}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <AnimatedSection>
            <Quote
              quote="He fought to survive. Now he teaches others to."
              author="Victoria Falls Boxing Academy"
            />
          </AnimatedSection>
        </div>
      </section>

      <section className="section bg-gradient-to-b from-charcoal to-charcoal-light/30">
        <div className="site-container text-center">
          <h2 className="font-display text-4xl md:text-5xl text-cream mb-6">
            Join our mission
          </h2>
          <div className="mt-14">
            <CTAButton href="/support" showArrow size="lg">
              Support VFBA
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
