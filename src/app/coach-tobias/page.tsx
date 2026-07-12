"use client";

import AnimatedSection from "@/components/AnimatedSection";
import ChapterTitle from "@/components/ChapterTitle";
import { Quote } from "@/components/Cards";
import CTAButton from "@/components/CTAButton";
import Image from "next/image";

export default function CoachTobiasPage() {
  return (
    <>
      <section className="relative page-hero overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/rise-tobias-landscape.jpg"
            alt="Tobias Mupfuti landscape"
            fill
            className="object-cover opacity-15"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/80 to-charcoal" />
        <div className="site-container relative">
          <AnimatedSection>
            <span className="text-gold/70 text-xs tracking-[0.5em] uppercase block mb-4">
              The Founder
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-[0.95] max-w-4xl">
              Tobias
              <br />
              <span className="text-gradient-gold">Mupfuti</span>
            </h1>
            <p className="mt-6 text-dust text-base md:text-lg max-w-2xl leading-relaxed">
              Founder, head coach, and the heart of Victoria Falls Boxing
              Academy. A man who turned his own pain into purpose — and gave
              children like him a fighting chance.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <ChapterTitle
            number="01"
            title="A Fighter Before the Ring"
            subtitle="Before he was a coach, Tobias was a survivor."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <AnimatedSection>
              <div className="space-y-7">
                <p className="text-cream/90 text-base leading-relaxed">
                  Tobias Mupfuti was eight years old when his father rejected him
                  and his mother could no longer provide. He found himself
                  homeless on the streets of Victoria Falls, surviving on
                  handouts from tourists.
                </p>
                <p className="text-dust leading-relaxed">
                  At ten, he sought out a boxing coach — not for sport, but for
                  survival. The discipline of boxing gave him structure. The ring
                  gave him safety. The sport gave him a future.
                </p>
                <p className="text-dust leading-relaxed">
                  By his early twenties, he was training alone in the bush. Children
                  began to follow. The academy was never planned — it was
                  inevitable.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative aspect-[4/3] bg-charcoal-light rounded-sm overflow-hidden border border-charcoal-lighter">
                <Image
                  src="/images/tobias-headshot.jpg"
                  alt="Coach Tobias Mupfuti"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section bg-charcoal-light/30">
        <div className="site-container">
          <ChapterTitle
            number="02"
            title="The Coach"
            subtitle="He doesn't just teach boxing. He teaches children how to believe in themselves."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <AnimatedSection>
              <Quote
                quote="The academy is helping underprivileged children to attend education, provide them with shelter and give them food. We try by every means so that they do not have time to go to the streets."
                author="Tobias Mupfuti"
                role="Founder & Head Coach"
              />
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-7">
                <p className="text-cream/90 text-base leading-relaxed">
                  Today, Tobias runs VFBA with his wife Shuvai. They take in
                  homeless children, train them in boxing, send them to school,
                  and give them a home. About 40 children train for free at the
                  academy, and about eight live on-site.
                </p>
                <p className="text-dust leading-relaxed">
                  The philosophy is simple: keep children occupied, tired, and
                  purposeful. After training, they do their homework and sleep —
                  no time for the streets, for drugs, for the life Tobias himself
                  barely escaped.
                </p>
              </div>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
            <AnimatedSection>
              <div className="relative aspect-[4/3] bg-charcoal-light rounded-sm overflow-hidden border border-charcoal-lighter">
                <Image
                  src="/images/vfba-training-1.jpg"
                  alt="Tobias coaching"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="relative aspect-[4/3] bg-charcoal-light rounded-sm overflow-hidden border border-charcoal-lighter">
                <Image
                  src="/images/rise-still-1.jpg"
                  alt="Tobias in Rise"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <ChapterTitle
            number="03"
            title="In His Own Words"
            subtitle="How the world learned Tobias's story through the film Rise."
          />

          <AnimatedSection>
            <div className="max-w-3xl mx-auto">
              <p className="text-cream/90 text-base leading-relaxed mb-6">
                When Jessica J. Rowlands, who grew up in Victoria Falls, heard
                Tobias&apos;s story, she wrote the screenplay for Rise. Hollywood
                actor Tongayi Chirisa was cast as Coach Tobias, and an
                eight-year-old named Sikhanyiso Ngwenya — discovered through
                street casting — was cast as Rise.
              </p>
              <p className="text-dust leading-relaxed mb-6">
                Tobias was credited as executive producer and was heavily
                involved throughout production. He appeared on set every day. He
                was even a stunt double for Chirisa in the film. The story had
                to be authentic — because it was his.
              </p>
              <p className="text-dust leading-relaxed">
                The film premiered at Tribeca in June 2025, won 19+ awards
                worldwide, and was endorsed by Viola Davis. Tobias&apos;s story
                had reached the world.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section bg-gradient-to-b from-charcoal to-charcoal-light/30">
        <div className="site-container text-center">
          <h2 className="font-display text-4xl md:text-5xl text-cream mb-6">
            Help Tobias continue his work
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-14 pt-2">
            <CTAButton href="/support" showArrow size="lg">
              Donate
            </CTAButton>
            <CTAButton href="/rise-film" variant="secondary" showArrow size="lg">
              Watch Rise
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
