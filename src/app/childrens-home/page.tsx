"use client";

import AnimatedSection from "@/components/AnimatedSection";
import ChapterTitle from "@/components/ChapterTitle";
import CTAButton from "@/components/CTAButton";
import Image from "next/image";

export default function ChildrensHomePage() {
  return (
    <>
      <section className="relative page-hero">
        <div className="site-container">
          <AnimatedSection>
            <span className="text-gold/70 text-xs tracking-[0.5em] uppercase block mb-4">
              Shelter
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-[0.95] max-w-4xl">
              A place
              <br />
              <span className="text-gradient-gold">to call home.</span>
            </h1>
            <p className="mt-6 text-dust text-base md:text-lg max-w-2xl leading-relaxed">
              The VFBA Children&apos;s Home provides safe housing for orphaned
              and at-risk boys — children who once slept under the boxing ring
              now have a roof over their heads.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <ChapterTitle
            number="01"
            title="The Need"
            subtitle="Nearly 5 million children live in poverty in Zimbabwe. 1.6 million in extreme poverty. VFBA provides refuge for those who have nowhere else to go."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <AnimatedSection>
              <div className="space-y-7">
                <p className="text-cream/90 text-base leading-relaxed">
                  Before proper housing existed, children at VFBA lived and
                  slept at the gym — some under the boxing ring itself. Tobias
                  and his wife Shuvai took in children who had been abandoned,
                  orphaned, or rejected by their families.
                </p>
                <p className="text-dust leading-relaxed">
                  International partners It Gym (fitness entrepreneur Gina Kaiser)
                  and the nonprofit MATTER have supported fundraising for a
                  two-phase build: Phase 1, the income-generating public gym;
                  Phase 2, the residential children&apos;s home.
                </p>
                <p className="text-dust leading-relaxed">
                  A St. Patrick&apos;s Day fundraiser organised by It Gym raised
                  close to US$50,000 toward Phase 1. The gym now operates as a
                  self-sustaining facility, with adults paying a small fee to
                  train — funding the children&apos;s home.
                </p>
                <div className="relative aspect-[4/3] bg-charcoal-light rounded-sm overflow-hidden border border-charcoal-lighter mt-8">
                  <Image
                    src="/images/vfba-community-4.jpg"
                    alt="VFBA community gathering"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-7">
                <div className="relative aspect-[4/3] bg-charcoal-light rounded-sm overflow-hidden border border-charcoal-lighter">
                  <Image
                    src="/images/vfba-children-1.jpg"
                    alt="VFBA Children's Home"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="relative aspect-[4/3] bg-charcoal-light rounded-sm overflow-hidden border border-charcoal-lighter">
                  <Image
                    src="/images/vfba-community-5.jpg"
                    alt="Children at VFBA"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section bg-charcoal-light/30">
        <div className="site-container">
          <ChapterTitle
            number="02"
            title="What We Provide"
            subtitle="More than shelter — a complete home for children who need one."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
            {[
              { title: "Safe Housing", text: "A proper roof, a bed, and safety — the basics every child deserves." },
              { title: "Meals", text: "Three meals a day, ensuring children are healthy and nourished." },
              { title: "Education", text: "School fees paid, homework supported, a future built." },
              { title: "Family", text: "Tobias, Shuvai, and the VFBA community — a family for children who have none." },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="bg-charcoal-light/30 border border-charcoal-lighter rounded-sm p-6 hover:border-gold/20 transition-colors duration-500 h-full">
                  <h3 className="font-display text-xl text-cream mb-3">{item.title}</h3>
                  <p className="text-dust text-sm leading-relaxed">{item.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gradient-to-b from-charcoal to-charcoal-light/30">
        <div className="site-container text-center">
          <h2 className="font-display text-4xl md:text-5xl text-cream mb-6">
            Help us build more rooms
          </h2>
          <p className="text-dust text-lg max-w-xl mx-auto mb-8">
            Tobias plans to add 10 more rooms to accommodate more children.
            Your support makes that possible.
          </p>
          <div className="mt-14">
            <CTAButton href="/support" showArrow size="lg">
              Donate Now
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
