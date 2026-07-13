"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import ChapterTitle from "@/components/ChapterTitle";
import CTAButton from "@/components/CTAButton";
import Image from "next/image";
import { FiPlay, FiX, FiExternalLink } from "react-icons/fi";

function VideoModal({ videoId, onClose }: { videoId: string; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/95 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-cream/60 hover:text-cream transition-colors"
        aria-label="Close video"
      >
        <FiX size={32} />
      </button>
      <div className="w-full max-w-5xl aspect-video" onClick={(e) => e.stopPropagation()}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title="Rise Film — Director Interview"
          className="w-full h-full rounded-sm"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default function RiseFilmPage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <>
      <section className="relative page-hero">
        <div className="site-container">
          <AnimatedSection>
            <span className="text-gold/70 text-xs tracking-[0.5em] uppercase block mb-4">
              The Film
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-[0.95] max-w-4xl">
              RISE
            </h1>
            <p className="mt-6 text-dust text-base md:text-lg max-w-2xl leading-relaxed">
              The first Zimbabwean film ever selected for the Tribeca Film
              Festival. Oscar-eligible. 19+ awards worldwide. A true story that
              reached the world.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Trailer / Poster */}
      <section className="section border-t border-charcoal-lighter/30">
        <div className="site-container">
          <AnimatedSection>
            <div
              className="relative aspect-video bg-charcoal-light rounded-sm overflow-hidden border border-charcoal-lighter group cursor-pointer"
              onClick={() => setActiveVideo("le7iId20SjY")}
            >
              <div className="absolute inset-0">
                <Image
                  src="/images/rise-poster.jpg"
                  alt="Rise film poster"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 75vw, 66vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 to-charcoal/70" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-rust/30 border-2 border-rust/50 flex items-center justify-center mb-6 group-hover:bg-rust/50 transition-colors duration-300 animate-pulse-glow">
                  <FiPlay size={28} className="text-cream ml-1" />
                </div>
                <span className="font-display text-2xl md:text-3xl text-cream mb-2">
                  RISE
                </span>
                <span className="text-dust text-sm">Watch the Official Trailer</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section border-t border-charcoal-lighter/30">
        <div className="site-container">
          <ChapterTitle
            number="01"
            title="The Story"
            subtitle="A boy living on a rubbish dump convinces a reclusive boxing coach to teach him to fight — and changes both their lives."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <AnimatedSection>
              <div className="space-y-7">
                <p className="text-cream/90 text-base leading-relaxed">
                  Rise follows a young boy named Rise, who lives alone on a
                  rubbish dump in Zimbabwe and survives by his determination and
                  resilience. After being attacked by local bullies, he is noticed
                  by Coach Tobias, a withdrawn boxing trainer who reluctantly
                  intervenes and brings the boy to safety.
                </p>
                <p className="text-dust leading-relaxed">
                  Despite the coach&apos;s initial resistance, Rise pursues him
                  with persistence, hoping to learn to fight and protect himself.
                  As the coach gradually allows him into his training sessions, the
                  two form an unexpected bond, revealing their own vulnerabilities.
                </p>
                <p className="text-dust leading-relaxed">
                  Through their evolving relationship, the film explores themes of
                  trust, mentorship, and the search for strength in difficult
                  circumstances.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-charcoal-light/50 border border-charcoal-lighter rounded-sm p-8">
                <h3 className="font-display text-2xl text-cream mb-6">
                  Film Details
                </h3>
                <div className="space-y-4 text-dust">
                  <div className="flex justify-between border-b border-charcoal-lighter pb-3">
                    <span>Director</span>
                    <span className="text-cream">Jessica J. Rowlands</span>
                  </div>
                  <div className="flex justify-between border-b border-charcoal-lighter pb-3">
                    <span>Producer</span>
                    <span className="text-cream">Joe Njagu</span>
                  </div>
                  <div className="flex justify-between border-b border-charcoal-lighter pb-3">
                    <span>Cinematography</span>
                    <span className="text-cream">Jacques Naudé</span>
                  </div>
                  <div className="flex justify-between border-b border-charcoal-lighter pb-3">
                    <span>Coach Tobias</span>
                    <span className="text-cream">Tongayi Chirisa</span>
                  </div>
                  <div className="flex justify-between border-b border-charcoal-lighter pb-3">
                    <span>Rise</span>
                    <span className="text-cream">Sikhanyiso Ngwenya</span>
                  </div>
                  <div className="flex justify-between border-b border-charcoal-lighter pb-3">
                    <span>Runtime</span>
                    <span className="text-cream">22 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Language</span>
                    <span className="text-cream">English</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section bg-charcoal-light/50">
        <div className="site-container">
          <ChapterTitle
            number="02"
            title="Awards & Recognition"
            subtitle="From Victoria Falls to the world stage."
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {[
              { title: "Tribeca Film Festival 2025", desc: "World premiere — first Zimbabwean film ever selected. Narrative Short category." },
              { title: "98th Academy Awards", desc: "Eligible for Oscar consideration. The first Zimbabwean film to qualify." },
              { title: "Lady Filmmakers Festival", desc: "Best Short Film, Best Actor (Tongayi Chirisa), Best Up-and-Coming Young Actor (Sikhanyiso Ngwenya)." },
              { title: "San Diego International Film Festival", desc: "Audience Choice Short Award." },
              { title: "HollyShorts Film Festival", desc: "Social Impact Award — Oscar-qualifying festival." },
              { title: "British Urban Film Festival", desc: "Best International Short Film." },
              { title: "Savannah Film Festival", desc: "Best Professional Short." },
              { title: "Indy Shorts International Film Festival", desc: "Shine Global Children's Resilience Short Film Award." },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.05}>
                <div className="bg-charcoal-light/30 border border-charcoal-lighter rounded-sm p-5 hover:border-gold/20 transition-colors duration-500 h-full">
                  <h3 className="font-display text-lg text-cream">{item.title}</h3>
                  <p className="text-dust text-sm mt-2">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Interviews & Behind the Scenes */}
      <section className="section border-t border-charcoal-lighter/30">
        <div className="site-container">
          <ChapterTitle
            number="03"
            title="Interviews & Behind the Scenes"
            subtitle="Watch director Jessica J. Rowlands discuss the making of Rise."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedSection delay={0}>
              <button
                onClick={() => setActiveVideo("mCbbQSTvef8")}
                className="group relative aspect-video bg-charcoal-light rounded-sm overflow-hidden border border-charcoal-lighter hover:border-gold/20 transition-all duration-500 w-full text-left"
              >
                <Image
                  src="/images/rise-pro-still-1.jpg"
                  alt="Jessica Rowlands interview"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-rust/30 border border-rust/50 flex items-center justify-center mb-4 group-hover:bg-rust/50 transition-colors">
                    <FiPlay size={24} className="text-cream ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-cream font-display text-lg block">
                    Director Interview
                  </span>
                  <span className="text-dust text-sm">
                    Jessica J. Rowlands on making Rise
                  </span>
                </div>
              </button>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <a
                href="https://www.bbc.co.uk/programmes/w3ct6xdq"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-video bg-charcoal-light rounded-sm overflow-hidden border border-charcoal-lighter hover:border-gold/20 transition-all duration-500"
              >
                <Image
                  src="/images/tobias-headshot.jpg"
                  alt="Tobias Mupfuti BBC interview"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-rust/30 border border-rust/50 flex items-center justify-center mb-4 group-hover:bg-rust/50 transition-colors">
                    <FiPlay size={24} className="text-cream ml-1" />
                  </div>
                  <div className="flex items-center gap-1.5 text-dust text-xs">
                    <FiExternalLink size={12} />
                    <span>Opens on BBC</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-cream font-display text-lg block">
                    BBC Outlook Interview
                  </span>
                  <span className="text-dust text-sm">
                    Tobias Mupfuti on BBC Radio
                  </span>
                </div>
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {activeVideo && (
        <VideoModal
          videoId={activeVideo}
          onClose={() => setActiveVideo(null)}
        />
      )}

      <section className="section bg-charcoal-light/50">
        <div className="site-container">
          <ChapterTitle
            number="04"
            title="Production"
            subtitle="Shot entirely on location in Zimbabwe with an all-African cast and crew."
          />

          <AnimatedSection>
            <div className="max-w-3xl space-y-7">
              <p className="text-cream/90 text-base leading-relaxed">
                Rise was written and directed by Jessica J. Rowlands, who grew up
                between the UK and Victoria Falls and has twice won the UCLA
                Screenwriting Award. Produced by Joe Njagu, whose earlier feature
                Cook Off was the first Zimbabwean film acquired by Netflix.
              </p>
              <p className="text-dust leading-relaxed">
                The film was shot entirely on location in Zimbabwe — in Victoria
                Falls and Harare — with an all-African cast and crew.
                Cinematographer Jacques Naudé captured sweeping, sun-drenched
                landscapes contrasted with intimate, close interiors of the ring
                and the home.
              </p>
              <p className="text-dust leading-relaxed">
                Tobias Mupfuti was credited as executive producer and was
                involved throughout production. He appeared on set every day and
                was even a stunt double for Chirisa in the film.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section border-t border-charcoal-lighter/30">
        <div className="site-container">
          <ChapterTitle
            number="05"
            title="Film Stills"
            subtitle="Behind the scenes of Rise — shot on location in Zimbabwe."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { src: "/images/rise-pro-still-1.jpg", alt: "Rise production still 1" },
              { src: "/images/rise-pro-still-2.jpg", alt: "Rise production still 2" },
              { src: "/images/rise-pro-still-3.jpg", alt: "Rise production still 3" },
            ].map((still, i) => (
              <AnimatedSection key={still.src} delay={i * 0.1}>
                <div className="relative aspect-[4/3] bg-charcoal-light rounded-sm overflow-hidden border border-charcoal-lighter group">
                  <Image
                    src={still.src}
                    alt={still.alt}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gradient-to-b from-charcoal to-charcoal-light/50">
        <div className="site-container text-center mt-14">
          <h2 className="font-display text-4xl md:text-5xl text-cream mb-6">
            The story behind the film is real
          </h2>
          <p className="text-dust text-base max-w-xl mx-auto mb-8">
            VFBA exists because of Tobias Mupfuti. Support the academy that
            inspired Rise.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton href="/support" showArrow size="lg">
              Donate
            </CTAButton>
            <CTAButton href="/about" variant="secondary" showArrow size="lg">
              The True Story
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
