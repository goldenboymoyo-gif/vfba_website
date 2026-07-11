"use client";

import AnimatedSection from "@/components/AnimatedSection";
import ChapterTitle from "@/components/ChapterTitle";
import Image from "next/image";

export default function TournamentsPage() {
  return (
    <>
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <span className="text-gold/70 text-xs tracking-[0.5em] uppercase block mb-4">
              Competition
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-cream leading-[0.95] max-w-4xl">
              Tournaments
              <br />
              <span className="text-gradient-gold">& Events</span>
            </h1>
            <p className="mt-6 text-dust text-lg md:text-xl max-w-2xl leading-relaxed">
              VFBA has hosted international youth tournaments and continues to
              put Victoria Falls on the boxing map.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-spacing">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ChapterTitle
            number="01"
            title="Five-Nation Tournament"
            subtitle="VFBA hosted a five-nation youth tournament in Victoria Falls — bringing together boxers from across Southern Africa."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <div className="space-y-6">
                <p className="text-cream/90 text-lg leading-relaxed">
                  Victoria Falls Boxing Academy hosted a five-nation youth
                  tournament in Victoria Falls, with boxers from Zimbabwe, Malawi,
                  Zambia, Botswana, and Namibia competing.
                </p>
                <p className="text-dust leading-relaxed">
                  The tournament was part of Tobias Mupfuti&apos;s broader
                  vision: using boxing as a vehicle for sports tourism and
                  putting Victoria Falls on the international boxing map — a goal
                  that aligns with the city&apos;s existing dependence on
                  international visitors.
                </p>
                <div className="relative aspect-[4/3] bg-charcoal-light rounded-sm overflow-hidden border border-charcoal-lighter mt-8">
                  <Image
                    src="/images/vfba-event-1.jpg"
                    alt="VFBA tournament event"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                <div className="bg-charcoal-light/50 border border-charcoal-lighter rounded-sm p-8">
                  <h3 className="font-display text-2xl text-cream mb-6">
                    Participating Nations
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {["Zimbabwe", "Malawi", "Zambia", "Botswana", "Namibia"].map(
                      (country) => (
                        <div
                          key={country}
                          className="bg-charcoal/50 rounded-sm p-4 border border-charcoal-lighter text-center hover:border-gold/20 transition-colors duration-300"
                        >
                          <span className="text-cream font-medium">{country}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div className="relative aspect-[4/3] bg-charcoal-light rounded-sm overflow-hidden border border-charcoal-lighter">
                  <Image
                    src="/images/rise-gym-landscape.jpg"
                    alt="Boxing gym venue"
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

      <section className="section-spacing bg-charcoal-light/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ChapterTitle
            number="02"
            title="Upcoming Events"
            subtitle="Stay informed about VFBA's latest tournaments and community events."
          />

          <AnimatedSection>
            <div className="max-w-2xl bg-charcoal-light/30 border border-charcoal-lighter rounded-sm p-8">
              <p className="text-dust text-center">
                VFBA regularly hosts tournaments and community events. Follow our
                social media pages for the latest updates on upcoming competitions,
                open days, and community activities.
              </p>
              <div className="flex justify-center gap-3 mt-6">
                <a
                  href="https://www.facebook.com/victoriafallsboxingacademy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-rust text-cream text-sm rounded-sm hover:bg-rust-light transition-colors duration-300"
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/victoriafallsboxingacademy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 border border-cream/20 text-cream text-sm rounded-sm hover:border-cream/40 hover:bg-cream/5 transition-all duration-300"
                >
                  Instagram
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
