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
              Victoria Falls Boxing Academy is not just a gym — it is the
              longtime dream of one man who survived the streets and decided to
              give other children the same chance boxing gave him.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* The Beginning */}
      <section className="section border-t border-charcoal-lighter/30">
        <div className="site-container">
          <ChapterTitle
            number="01"
            title="From Streets to Ring"
            subtitle="Tobius Muposiwa was abandoned as a child, homeless on the streets of Victoria Falls. Boxing saved his life — and he decided to do the same for others."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <AnimatedSection>
              <div className="space-y-7">
                <p className="text-cream/90 text-base leading-relaxed">
                  Tobius Owen Muposiwa grew up in Victoria Falls, Zimbabwe.
                  Abandoned by his family, he found himself homeless as a child,
                  surviving on food handouts from tourists in the resort town.
                  At twelve years old, sick of being bullied, he asked a local
                  boxing coach to teach him the sport for self-defence.
                </p>
                <p className="text-dust leading-relaxed">
                  That coach was Titus &ldquo;TNT&rdquo; Zhikali, a veteran
                  Zimbabwean boxer. Titus&apos;s decision to share his knowledge
                  with a homeless teenager planted the seed that would eventually
                  grow into VFBA. Boxing gave Tobius structure, purpose, and the
                  strength to imagine a different future.
                </p>
                <p className="text-dust leading-relaxed">
                  In his early twenties, Tobius began training alone in the bush
                  along the road to Victoria Falls airport. Soon, children started
                  following him on his morning runs. He was offered the use of
                  classrooms at Mosi-oa-Tunya High School — usually by cellphone
                  light, with no electricity, the whole team sharing two pairs of
                  gloves.
                </p>
                <div className="grid grid-cols-2 gap-5 mt-8">
                  <div className="relative aspect-[3/4] bg-charcoal-light rounded-sm overflow-hidden border border-charcoal-lighter">
                    <Image
                      src="/images/rise-tobias-portrait.jpg"
                      alt="Tobius Muposiwa"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="relative aspect-[3/4] bg-charcoal-light rounded-sm overflow-hidden border border-charcoal-lighter">
                    <Image
                      src="/images/vfba-training-1.jpg"
                      alt="Early VFBA training"
                      fill
                      className="object-cover object-center"
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
                  author="Tobius Muposiwa"
                  role="Founder & Head Coach"
                />
                <p className="text-dust text-base leading-relaxed">
                  The group came to be known as the &ldquo;Bush Boxers&rdquo;
                  — early morning and evening saw them training in the
                  surrounds of Victoria Falls town and running on the main
                  route into town. They had no gym, no equipment, and no
                  funding. Just discipline and determination.
                </p>
                <p className="text-dust text-base leading-relaxed">
                  In 2013, while leading the group on a run, Tobius noticed a
                  group of disadvantaged youngsters at the town dump, collecting
                  plastic bottle tops to earn money, unable to attend school. He
                  warned them about the baboons, hyenas, and elephants that
                  frequented the dump — and invited them to join the group. Then
                  six years old, Prince Urengwa took him up on the offer and
                  changed the course of his life.
                </p>
                <div className="relative aspect-[4/3] bg-charcoal-light rounded-sm overflow-hidden border border-charcoal-lighter mt-8">
                  <Image
                    src="/images/vfba-community-2.jpg"
                    alt="VFBA community"
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

      {/* The Bush Boxers */}
      <section className="section bg-charcoal-light/50">
        <div className="site-container">
          <ChapterTitle
            number="02"
            title="The Bush Boxers"
            subtitle="From bottle tops at the dump to gold medals in the ring — the VFBA origin story."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <AnimatedSection>
              <div className="space-y-7">
                <p className="text-cream/90 text-base leading-relaxed">
                  Abandoned with only his grandmother to look after him, Prince
                  Urengwa and his little family tried to eke a living from
                  selling tomatoes while Prince scavenged the dump rather than
                  attend school. Tobius became the mentor and father figure he
                  never had — assuming guardianship and paying his school fees.
                </p>
                <p className="text-dust leading-relaxed">
                  By age ten, Prince became a winning Junior boxer. He is
                  currently the Zimbabwe Pinweight Gold Medalist and has
                  defeated everyone in the country in his weight group. As
                  Prince transformed his life, others took notice. Personal
                  Mpofu joined him — now the Zimbabwe Paperweight Gold Medalist.
                </p>
                <p className="text-dust leading-relaxed">
                  Both boys now reside with Tobius and his wife. The kind
                  headmaster of Mosi-oa-Tunya Senior School allowed the use of
                  school classrooms in the evening — usually by cellphone light,
                  the whole team taking turns to use the two pairs of gloves
                  available.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-7">
                <Quote
                  quote="If the academy had not paid for my fees, the chances were high that I would have been into drugs. VFBA gave me hope."
                  author="Bright Moyo"
                  role="VFBA Fighter"
                />
                <p className="text-dust text-base leading-relaxed">
                  Tobius never gave up on his dream. Inspired by the success of
                  his young boxers, he formed the Victoria Falls Boxing Academy
                  Trust in 2013 along with local business people — Andrew Lane,
                  Faruk Karim, and Obert Sibanda — to fundraise for travel costs
                  and equipment.
                </p>
                <p className="text-dust text-base leading-relaxed">
                  The kind of community that builds around VFBA speaks to
                  something deeper than sport. It&apos;s the story of what
                  happens when one person decides that the next generation
                  deserves better.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Growth */}
      <section className="section border-t border-charcoal-lighter/30">
        <div className="site-container">
          <ChapterTitle
            number="03"
            title="Growing Into a Home"
            subtitle="From two boxers training under trees to one of the biggest gyms in Victoria Falls — and a children's home for those who needed one."
          />

          <div className="max-w-3xl">
            <TimelineItem
              year="2010"
              title="The Vision"
              description="Tobius conceives the idea of a boxing academy to give at-risk youth an alternative to the streets. He begins training alone in the bush along the road to Victoria Falls airport."
              side="left"
            />
            <TimelineItem
              year="2013"
              title="The Bush Boxers &amp; VFBA Trust"
              description="Children begin following Tobius on morning runs. The group becomes known as the 'Bush Boxers'. Tobius forms the Victoria Falls Boxing Academy Trust with local business people to fundraise for travel costs."
              side="left"
            />
            <TimelineItem
              year="2013"
              title="Prince Urengwa Joins"
              description="Tobius finds six-year-old Prince collecting bottle caps at the town dump and invites him on a run. Prince joins VFBA and begins his transformation from dump scavenger to national champion."
              side="left"
            />
            <TimelineItem
              year="2019"
              title="The Gym Opens"
              description="Donor Mark Valentine provides an entire gym and fitout. The Victoria Falls Boxing Academy gym officially opens its doors on 6 December 2019. The former 'Bush Boxers' now have a permanent home."
              side="left"
            />
            <TimelineItem
              year="2019"
              title="5 Nations Championship"
              description="VFBA, in conjunction with the Zimbabwe Boxing Federation, hosts the 5 Nations Boxing Friendly Championship at The Kingdom Hotel in Victoria Falls."
              side="left"
            />
            <TimelineItem
              year="2025"
              title="Rise Premieres at Tribeca"
              description="The documentary film Rise — inspired by VFBA — premieres at the Tribeca Film Festival. The first Zimbabwean film ever selected. Oscar-eligible. 19+ awards worldwide."
              side="left"
            />
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section bg-charcoal-light/50">
        <div className="site-container">
          <StatsRow
            stats={[
              { number: "40+", label: "Children Training" },
              { number: "8", label: "Living On-Site" },
              { number: "15+", label: "Years of Impact" },
              { number: "2010", label: "Year Founded" },
            ]}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section border-t border-charcoal-lighter/30">
        <div className="site-container text-center">
          <h2 className="font-display text-4xl md:text-5xl text-cream mb-6">
            Meet the man behind the story
          </h2>
          <p className="text-dust text-base max-w-xl mx-auto mb-10">
            From homeless child to founder of one of Victoria Falls&apos; most
            impactful organisations. Tobius Muposiwa&apos;s journey is just
            beginning.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton href="/coach-tobias" showArrow size="lg">
              Coach Tobius Muposiwa
            </CTAButton>
            <CTAButton href="/mission" variant="secondary" showArrow>
              Our Mission
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
