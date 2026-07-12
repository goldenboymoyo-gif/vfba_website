"use client";

import AnimatedSection from "@/components/AnimatedSection";
import ChapterTitle from "@/components/ChapterTitle";
import { StatsRow } from "@/components/Stats";
import { Quote, TimelineItem } from "@/components/Cards";
import CTAButton from "@/components/CTAButton";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative page-hero">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/90 to-charcoal" />
        <div className="site-container relative">
          <AnimatedSection>
            <span className="text-gold/70 text-xs tracking-[0.5em] uppercase block mb-4">
              Our Story
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-[0.95] max-w-4xl">
              A place where
              <br />
              <span className="text-gradient-gold">hope</span> fights back.
            </h1>
            <p className="mt-6 text-dust text-base md:text-lg max-w-2xl leading-relaxed">
              Victoria Falls Boxing Academy is not a gym — it is a true story
              that became a home, a refuge, and a future for children who had
              neither.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* The Beginning */}
      <section className="section">
        <div className="site-container">
          <ChapterTitle
            number="01"
            title="From Streets to Ring"
            subtitle="Tobias Mupfuti was abandoned as a child. He survived on the streets of Victoria Falls. Boxing saved his life — and he decided to do the same for others."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <AnimatedSection>
              <div className="space-y-7">
                <p className="text-cream/90 text-base leading-relaxed">
                  Tobias Mupfuti was eight years old when he found himself
                  homeless in Victoria Falls. His father had rejected him. His
                  mother was too poor to feed him, clothe him, or send him to
                  school. He survived on food handouts from tourists shopping in
                  the Zimbabwean resort town.
                </p>
                <p className="text-dust leading-relaxed">
                  Four years later, sick of being bullied and threatened, he asked
                  a boxing coach to teach him the sport for self-defence. After
                  learning to box, he started training alone in the bush along the
                  road to Victoria Falls airport in his early twenties.
                </p>
                <p className="text-dust leading-relaxed">
                  Several children started following him. He was offered the chance
                  to use a classroom at Mosi-oa-Tunya High School as a boxing
                  training facility. The idea for VFBA was born.
                </p>
                <div className="grid grid-cols-2 gap-5 mt-8">
                  <div className="relative aspect-[3/4] bg-charcoal-light rounded-sm overflow-hidden border border-charcoal-lighter">
                    <Image
                      src="/images/vfba-community-2.jpg"
                      alt="VFBA community"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="relative aspect-[3/4] bg-charcoal-light rounded-sm overflow-hidden border border-charcoal-lighter">
                    <Image
                      src="/images/vfba-portrait-2.jpg"
                      alt="VFBA member portrait"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-7">
                <Quote
                  quote="It was not easy in the streets. I thought of giving hope to those children rejected by their families."
                  author="Tobias Mupfuti"
                  role="Founder & Head Coach"
                />
                <div className="relative aspect-[4/3] bg-charcoal-light rounded-sm overflow-hidden border border-charcoal-lighter mt-8">
                  <Image
                    src="/images/rise-intimate-scene.jpg"
                    alt="VFBA training scene"
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

      {/* Growth */}
      <section className="section bg-charcoal-light/30">
        <div className="site-container">
          <ChapterTitle
            number="02"
            title="Growing Into a Home"
            subtitle="From two boxers training under trees to one of the biggest gyms in Victoria Falls — and a children's home for those who needed one."
          />

          <div className="max-w-3xl">
            <TimelineItem
              year="2010"
              title="The Vision"
              description="Tobias conceives the idea of a boxing academy to give at-risk youth an alternative to the streets."
              side="left"
            />
            <TimelineItem
              year="2013"
              title="VFBA Launches"
              description="The academy officially launches with two boxers. Training takes place outdoors under trees, then in a rented hall in the Victoria Falls industrial area."
              side="left"
            />
            <TimelineItem
              year="2020s"
              title="International Attention"
              description="The story reaches Jessica J. Rowlands, who writes Rise — the first Zimbabwean film selected for the Tribeca Film Festival."
              side="left"
            />
            <TimelineItem
              year="2023"
              title="A New Home"
              description="A purpose-built boxing arena opens in Chinotimba, Victoria Falls — described as one of the biggest gyms in the city. Children finally have a proper home."
              side="left"
            />
            <TimelineItem
              year="2025"
              title="Rise Premieres"
              description="The film premieres at Tribeca. Oscar-eligible. 19+ awards worldwide. Tobias's story reaches the world stage."
              side="left"
            />
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section">
        <div className="site-container">
          <StatsRow
            stats={[
              { number: "40+", label: "Children Training" },
              { number: "8", label: "Living On-Site" },
              { number: "5", label: "Nations Competed" },
              { number: "19+", label: "Film Awards" },
            ]}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-b from-charcoal to-charcoal-light/30">
        <div className="site-container text-center">
          <h2 className="font-display text-4xl md:text-5xl text-cream mb-6">
            Meet the man behind the story
          </h2>
          <div className="mt-14">
            <CTAButton href="/coach-tobias" showArrow size="lg">
              Coach Tobias Mupfuti
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
