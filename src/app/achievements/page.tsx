"use client";

import AnimatedSection from "@/components/AnimatedSection";
import ChapterTitle from "@/components/ChapterTitle";
import { StatsRow } from "@/components/Stats";
import Image from "next/image";

export default function AchievementsPage() {
  return (
    <>
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <span className="text-gold/70 text-xs tracking-[0.5em] uppercase block mb-4">
              Recognition
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-cream leading-[0.95] max-w-4xl">
              Achievements
            </h1>
            <p className="mt-6 text-dust text-lg md:text-xl max-w-2xl leading-relaxed">
              From local tournaments to the world stage — VFBA&apos;s journey in
              numbers and recognition.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-spacing">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <StatsRow
            stats={[
              { number: "19+", label: "Film Awards" },
              { number: "5", label: "Nations Competed" },
              { number: "40+", label: "Active Boxers" },
              { number: "1", label: "Tribeca Selection" },
            ]}
          />

          <ChapterTitle
            number="01"
            title="Rise — Film Achievements"
            subtitle="The first Zimbabwean film ever selected for the Tribeca Film Festival."
          />

          <div className="relative aspect-[2/1] md:aspect-[3/1] max-w-3xl mx-auto mb-12">
            <Image
              src="/images/rise-awards-laurels.png"
              alt="Rise film awards laurels"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {[
              { year: "2025", title: "Tribeca Film Festival", desc: "World premiere — first Zimbabwean film ever selected. Narrative Short category." },
              { year: "2025", title: "Oscar Eligibility", desc: "Eligible for consideration at the 98th Academy Awards." },
              { year: "2025", title: "Lady Filmmakers Festival", desc: "Best Short Film, Best Actor (Tongayi Chirisa), Best Up-and-Coming Young Actor (Sikhanyiso Ngwenya)." },
              { year: "2025", title: "San Diego International Film Festival", desc: "Audience Choice Short Award." },
              { year: "2025", title: "HollyShorts Film Festival", desc: "Social Impact Award — Oscar-qualifying." },
              { year: "2025", title: "British Urban Film Festival", desc: "Best International Short Film." },
              { year: "2025", title: "Savannah Film Festival", desc: "Best Professional Short." },
              { year: "2025", title: "Viola Davis Endorsement", desc: "Public endorsement on social media — describing it as a deeply affecting story." },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.05}>
                <div className="flex gap-4 bg-charcoal-light/30 border border-charcoal-lighter rounded-sm p-5 hover:border-gold/20 transition-colors duration-500 h-full">
                  <span className="text-gold text-sm font-mono shrink-0 mt-1">{item.year}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="font-display text-lg text-cream">{item.title}</h3>
                      {item.title === "Tribeca Film Festival" && (
                        <div className="relative w-8 h-8 shrink-0">
                          <Image
                            src="/images/rise-tribeca-laurel.png"
                            alt="Tribeca Official Selection"
                            fill
                            className="object-contain"
                            sizes="32px"
                          />
                        </div>
                      )}
                    </div>
                    <p className="text-dust text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-charcoal-light/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ChapterTitle
            number="02"
            title="Boxing Achievements"
            subtitle="VFBA is the most active boxing club in Matabeleland North province."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {[
              { title: "Five-Nation Youth Tournament", desc: "VFBA hosted a five-nation tournament in Victoria Falls with boxers from Zimbabwe, Malawi, Zambia, Botswana, and Namibia." },
              { title: "National Representation", desc: "VFBA boxers have represented the academy at national and regional competitions." },
              { title: "Most Active Club", desc: "Described as the most active boxing club in Matabeleland North province by regional press." },
              { title: "NAMA Award", desc: "Sikhanyiso Ngwenya won Zimbabwe's National Arts Merit Award for Outstanding Actor — the youngest-ever winner." },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="bg-charcoal-light/30 border border-charcoal-lighter rounded-sm p-6 hover:border-gold/20 transition-colors duration-500 h-full">
                  <h3 className="font-display text-xl text-cream mb-3">{item.title}</h3>
                  <p className="text-dust text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
