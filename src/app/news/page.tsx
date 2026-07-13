"use client";

import AnimatedSection from "@/components/AnimatedSection";
import ChapterTitle from "@/components/ChapterTitle";
import { StoryCard } from "@/components/Cards";
import CTAButton from "@/components/CTAButton";

export default function NewsPage() {
  const articles = [
    {
      title: "Packing a Punch: The True Story Behind Rise",
      description:
        "The Guardian profiles Tobias Mupfuti and the VFBA story that inspired the Oscar-eligible film.",
      tag: "Press",
      date: "December 2025",
      image: "/images/rise-pro-still-1.jpg",
      imageAlt: "Scene from Rise film",
    },
    {
      title: "Rise — A Triumph of Zimbabwean Spirit",
      description:
        "We Love Short Films gives Rise a 5-star review, calling it a profound act of cinematic courage.",
      tag: "Review",
      date: "November 2025",
      image: "/images/rise-pro-still-2.jpg",
      imageAlt: "Rise film scene",
    },
    {
      title: "Zimbabwe's RISE Debuts on Global Stage at Tribeca",
      description:
        "The Herald covers the world premiere of Rise at the Tribeca Film Festival.",
      tag: "Film",
      date: "June 2025",
      image: "/images/rise-tribeca-laurel.png",
      imageAlt: "Tribeca Official Selection laurel",
    },
    {
      title: "Auditions Starring Hollywood Actor Chirisa Begin",
      description:
        "Zimbabwe Now reports on the casting of Tongayi Chirisa as Coach Tobias in Rise.",
      tag: "Film",
      date: "March 2023",
      image: "/images/tobias-headshot.jpg",
      imageAlt: "Coach Tobias Mupfuti headshot",
    },
    {
      title: "VFBA Hosts Zimbabwe Boxing Federation National Open",
      description:
        "Victoria Falls Boxing Academy hosts the national open at its new gym facility.",
      tag: "Tournament",
      date: "June 2026",
      image: "/images/vfba-training-1.jpg",
      imageAlt: "Boxing training session",
    },
    {
      title: "From Pain to Purpose: The Quiet Power of RISE",
      description:
        "Film & Television Business reviews Rise, calling it a triumph that punches far above its weight.",
      tag: "Review",
      date: "April 2025",
      image: "/images/rise-pro-still-3.jpg",
      imageAlt: "Rise production still",
    },
  ];

  return (
    <>
      <section className="relative page-hero">
        <div className="site-container">
          <AnimatedSection>
            <span className="text-gold/70 text-xs tracking-[0.5em] uppercase block mb-4">
              Updates
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-[0.95] max-w-4xl">
              News &
              <br />
              <span className="text-gradient-gold">Stories</span>
            </h1>
            <p className="mt-6 text-dust text-base md:text-lg max-w-2xl leading-relaxed">
              Press coverage, film reviews, and updates from the academy.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section border-t border-charcoal-lighter/30">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <StoryCard
                key={article.title}
                title={article.title}
                description={article.description}
                tag={article.tag}
                image={article.image}
                imageAlt={article.imageAlt}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-charcoal-light/50">
        <div className="site-container text-center">
          <ChapterTitle
            number="01"
            title="Stay Connected"
            subtitle="Follow VFBA for the latest news and updates."
          />

          <AnimatedSection>
            <div className="flex justify-center gap-3">
              <a
                href="https://www.facebook.com/victoriafallsboxingacademy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-rust text-cream text-sm font-medium tracking-[0.08em] uppercase rounded-sm border border-transparent hover:bg-rust-light hover:shadow-[0_8px_30px_-6px_rgba(139,58,42,0.5)] transition-all duration-300"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/victoriafallsboxingacademy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-transparent text-gold text-sm font-medium tracking-[0.08em] uppercase rounded-sm border border-gold/40 hover:bg-gold/10 hover:border-gold/60 transition-all duration-300"
              >
                Instagram
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-b from-charcoal to-charcoal-light/50">
        <div className="site-container text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-cream mb-6">
              Stay Connected
            </h2>
            <p className="text-dust text-base max-w-xl mx-auto mb-10">
              Follow VFBA for the latest stories, press coverage, and updates from the academy.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CTAButton href="/support" showArrow size="lg">
                Support VFBA
              </CTAButton>
              <CTAButton href="/contact" variant="secondary" showArrow>
                Get in Touch
              </CTAButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
