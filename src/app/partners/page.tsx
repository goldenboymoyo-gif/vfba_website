"use client";

import AnimatedSection from "@/components/AnimatedSection";
import ChapterTitle from "@/components/ChapterTitle";
import CTAButton from "@/components/CTAButton";

export default function PartnersPage() {
  const partners = [
    {
      name: "MATTER",
      role: "Nonprofit Partner",
      description:
        "MATTER has supported fundraising for the VFBA two-phase build — the gym and the children's home.",
      url: "https://matter.ngo",
    },
    {
      name: "It Gym",
      role: "Fitness Partner",
      description:
        "Fitness entrepreneur Gina Kaiser organised a St. Patrick's Day fundraiser that raised close to US$50,000 toward Phase 1 of the VFBA build.",
      url: "https://it-gym.com/zim",
    },
    {
      name: "Rise Film Production",
      role: "Film Partner",
      description:
        "Jessica J. Rowlands, Joe Njagu, and the Rise production team have brought Tobius's story to the world stage.",
      url: "https://risezimbabwe.com",
    },
    {
      name: "Wild Horizons",
      role: "Community Partner",
      description:
        "Wild Horizons has provided transport for VFBA children to visit Victoria Falls — many for the first time.",
    },
    {
      name: "Stalin Mau Mau",
      role: "Boxing Promoter",
      description:
        "Veteran boxing promoter Stalin Mau Mau commissioned the purpose-built boxing arena in Chinotimba.",
    },
  ];

  return (
    <>
      <section className="relative page-hero">
        <div className="site-container">
          <AnimatedSection>
            <span className="text-gold/70 text-xs tracking-[0.5em] uppercase block mb-4">
              Collaboration
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-[0.95] max-w-4xl">
              Partners &
              <br />
              <span className="text-gradient-gold">Sponsors</span>
            </h1>
            <p className="mt-6 text-dust text-base md:text-lg max-w-2xl leading-relaxed">
              VFBA exists because of the generosity and collaboration of
              partners who believe in the mission.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section border-t border-charcoal-lighter/30">
        <div className="site-container">
          <ChapterTitle
            number="01"
            title="Our Partners"
            subtitle="Organisations and individuals who have supported VFBA's growth."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((partner, i) => (
              <AnimatedSection key={partner.name} delay={i * 0.1}>
                <div className="bg-charcoal-light/50 border border-charcoal-lighter rounded-sm p-8 hover:border-gold/20 transition-colors duration-500 h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-display text-2xl text-cream">
                        {partner.name}
                      </h3>
                      <span className="text-gold text-xs tracking-[0.2em] uppercase">
                        {partner.role}
                      </span>
                    </div>
                  </div>
                  <p className="text-dust leading-relaxed">
                    {partner.description}
                  </p>
                  {partner.url && (
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-gold text-sm hover:text-gold-light transition-colors"
                    >
                      Visit website &rarr;
                    </a>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gradient-to-b from-charcoal to-charcoal-light/50">
        <div className="site-container text-center">
          <h2 className="font-display text-4xl md:text-5xl text-cream mb-6">
            Become a partner
          </h2>
          <p className="text-dust text-lg max-w-xl mx-auto mb-10">
            Organisations, brands, and NGOs — join VFBA&apos;s mission to
            transform lives through sport.
          </p>
          <CTAButton href="/contact" showArrow size="lg">
            Get in Touch
          </CTAButton>
        </div>
      </section>
    </>
  );
}
