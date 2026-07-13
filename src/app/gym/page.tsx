"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import ChapterTitle from "@/components/ChapterTitle";
import CTAButton from "@/components/CTAButton";
import { FiX, FiPlay } from "react-icons/fi";

export default function GymPage() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const gymPhotos = [
    { src: "/images/vfba-gym-real.jpg", alt: "VFBA gym interior", caption: "The main training floor at VFBA", span: "md:col-span-2 md:row-span-2" },
    { src: "/images/vfba-gym-action-1.jpg", alt: "Boxer hitting pads", caption: "Pad work — building precision", span: "" },
    { src: "/images/vfba-gym-action-2.jpg", alt: "Training in the ring", caption: "Ring training session", span: "" },
    { src: "/images/vfba-group-training-1.jpg", alt: "Group training", caption: "Community group training", span: "md:col-span-2" },
    { src: "/images/vfba-training-session-1.jpg", alt: "Training session", caption: "Morning training session", span: "" },
    { src: "/images/vfba-coaching-1.jpg", alt: "Coach instructing", caption: "Coach Tobias guiding a fighter", span: "" },
  ];

  const gymVideos = [
    { src: "/videos/vfba-training-1.mp4", title: "Training Session" },
    { src: "/videos/vfba-sparring-1.mp4", title: "Sparring" },
    { src: "/videos/vfba-gym-life-1.mp4", title: "Gym Life" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative page-hero">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/90 to-charcoal" />
        <div className="site-container relative">
          <AnimatedSection>
            <span className="text-gold/70 text-xs tracking-[0.5em] uppercase block mb-4">
              VFBA Gym
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-[0.95] max-w-4xl">
              Step inside
              <br />
              <span className="text-gradient-gold">the gym.</span>
            </h1>
            <p className="mt-6 text-dust text-base md:text-lg max-w-2xl leading-relaxed">
              One of the biggest boxing gyms in Victoria Falls. Open to the
              community — every fee paid by adult members funds a child&apos;s
              meals, school fees, and shelter.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Coach Section */}
      <section className="section bg-charcoal-light/50">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="relative aspect-[4/5] bg-charcoal-light rounded-sm overflow-hidden border border-charcoal-lighter max-w-md">
                <Image
                  src="/images/vfba-coaching-1.jpg"
                  alt="Coach Tobias Mupfuti"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="text-gold text-xs tracking-[0.3em] uppercase block mb-2">
                    Founder &amp; Head Coach
                  </span>
                  <h2 className="font-display text-3xl text-cream mb-1">Tobias Mupfuti</h2>
                  <span className="text-dust text-sm">The man who built champions</span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="space-y-7">
                <span className="text-gold/70 text-xs tracking-[0.4em] uppercase block">
                  The Heart Behind VFBA
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-cream leading-tight">
                  From the streets to
                  <br />
                  <span className="text-gradient-gold">building champions.</span>
                </h2>
                <p className="text-cream/90 text-base leading-relaxed">
                  Tobias Mupfuti was abandoned as a child, homeless on the streets
                  of Victoria Falls. Boxing gave him structure, purpose, and the
                  strength to give other children the same chance. Today he runs
                  the most active boxing club in Matabeleland North.
                </p>
                <p className="text-dust leading-relaxed">
                  Under his coaching, VFBA has grown from training under trees to
                  one of the biggest gyms in the city. Approximately 40 children
                  train for free. Eight live on-site. The gym is a family.
                </p>
                <div className="bg-charcoal/50 border border-charcoal-lighter rounded-sm p-6 mt-6">
                  <p className="font-display text-base text-cream/80 italic leading-relaxed">
                    &ldquo;We try by every means so that they do not have time to
                    go to the streets. After training, they are tired; they do
                    their homework and sleep.&rdquo;
                  </p>
                  <span className="text-gold text-sm mt-3 block">— Tobias Mupfuti</span>
                </div>
                <CTAButton href="/coach-tobias" variant="secondary" showArrow>
                  Full Profile
                </CTAButton>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Gym Photo Grid */}
      <section className="section border-t border-charcoal-lighter/30">
        <div className="site-container">
          <ChapterTitle
            number="01"
            title="Inside The Gym"
            subtitle="Where discipline meets community. The training floor, the ring, the people — real moments from inside VFBA."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {gymPhotos.map((photo, i) => (
              <AnimatedSection key={i} delay={i * 0.08} className={photo.span}>
                <button
                  onClick={() => setLightbox(photo.src)}
                  className="block w-full h-full"
                >
                  <div className="relative bg-charcoal-light rounded-sm overflow-hidden border border-charcoal-lighter hover:border-gold/30 transition-all duration-500 group h-full min-h-[200px]">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-cream text-xs">{photo.caption}</span>
                    </div>
                  </div>
                </button>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-14">
            <CTAButton href="/gallery" variant="secondary" showArrow>
              Explore Full Gallery
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section bg-charcoal-light/50">
        <div className="site-container">
          <ChapterTitle
            number="02"
            title="Watch The Gym"
            subtitle="See the energy, discipline, and heart of VFBA training in action."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            {gymVideos.map((video, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <button
                  onClick={() => setActiveVideo(video.src)}
                  className="block w-full group"
                >
                  <div className="relative aspect-video bg-charcoal-light rounded-sm overflow-hidden border border-charcoal-lighter hover:border-gold/30 transition-all duration-500">
                    <video
                      src={video.src}
                      className="w-full h-full object-cover"
                      muted
                      preload="metadata"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-charcoal/20 group-hover:from-charcoal/60 transition-all duration-300" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-rust/40 border border-rust/60 flex items-center justify-center mb-3 group-hover:bg-rust/60 transition-colors duration-300">
                        <FiPlay size={20} className="text-cream ml-0.5" />
                      </div>
                      <span className="text-cream text-xs font-medium tracking-[0.1em] uppercase">
                        {video.title}
                      </span>
                    </div>
                  </div>
                </button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="section border-t border-charcoal-lighter/30">
        <div className="site-container">
          <ChapterTitle
            number="03"
            title="What We Offer"
            subtitle="The gym is open to the community. Here is what happens inside."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <AnimatedSection delay={0}>
              <div className="bg-charcoal/50 border border-charcoal-lighter rounded-sm p-8 h-full">
                <h3 className="font-display text-xl text-cream mb-4">Youth Programme</h3>
                <p className="text-dust text-sm leading-relaxed mb-4">
                  Free training for underprivileged children. Boxing technique,
                  fitness, and life skills. Approximately 40 children train at
                  VFBA at no cost.
                </p>
                <p className="text-cream/70 text-sm leading-relaxed">
                  Eight children live on-site in the children&apos;s home —
                  shelter, food, education, and discipline.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="bg-charcoal/50 border border-charcoal-lighter rounded-sm p-8 h-full">
                <h3 className="font-display text-xl text-cream mb-4">Community Gym</h3>
                <p className="text-dust text-sm leading-relaxed mb-4">
                  Open to adults and the general public. A small fee to train —
                  every dollar goes directly to supporting the children.
                </p>
                <p className="text-cream/70 text-sm leading-relaxed">
                  Personal training, group sessions, fitness boxing, and
                  competitive fight preparation.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-charcoal/50 border border-charcoal-lighter rounded-sm p-8 h-full">
                <h3 className="font-display text-xl text-cream mb-4">Competitive Boxing</h3>
                <p className="text-dust text-sm leading-relaxed mb-4">
                  VFBA fighters have competed in five-nation tournaments and
                  represent Victoria Falls on the national stage.
                </p>
                <p className="text-cream/70 text-sm leading-relaxed">
                  The most active boxing club in Matabeleland North province —
                  building records and building champions.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-b from-charcoal to-charcoal-light/50">
        <div className="site-container text-center">
          <h2 className="font-display text-3xl md:text-4xl text-cream mb-6">
            Want to train at VFBA?
          </h2>
          <p className="text-dust text-base max-w-xl mx-auto mb-8">
            Whether you&apos;re a beginner or an experienced fighter — the gym is
            open to you. Your support keeps the children training.
          </p>
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton href="/contact" showArrow size="lg">
              Join VFBA
            </CTAButton>
            <CTAButton href="/support" variant="secondary" showArrow size="lg">
              Support Us
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Photo Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[9998] bg-charcoal/95 backdrop-blur-sm flex items-center justify-center p-6 cursor-pointer"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-cream/60 hover:text-cream transition-colors"
          >
            <FiX size={32} />
          </button>
          <div className="relative max-w-5xl w-full aspect-video">
            <Image
              src={lightbox}
              alt="Gym photo"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[9998] bg-charcoal/95 backdrop-blur-sm flex items-center justify-center p-6 cursor-pointer"
          onClick={() => setActiveVideo(null)}
        >
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-6 right-6 text-cream/60 hover:text-cream transition-colors z-10"
          >
            <FiX size={32} />
          </button>
          <video
            src={activeVideo}
            controls
            autoPlay
            className="max-w-5xl w-full max-h-[80vh] rounded-sm"
          />
        </div>
      )}
    </>
  );
}
