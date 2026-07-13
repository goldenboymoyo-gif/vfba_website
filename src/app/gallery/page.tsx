"use client";

import { useState, useEffect, useCallback } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import ChapterTitle from "@/components/ChapterTitle";
import Image from "next/image";
import { FiX, FiChevronLeft, FiChevronRight, FiPlay } from "react-icons/fi";

const categories = ["All", "Gym Life", "Training", "Coaches", "Boxing", "Kids", "Community", "Portraits", "Tournaments"] as const;
type Category = (typeof categories)[number];

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  category: Exclude<Category, "All">;
  aspect: string;
}

const galleryImages: GalleryImage[] = [
  // Gym Life
  { src: "/images/vfba-gym-real.jpg", alt: "VFBA gym interior", caption: "The VFBA gym in Chinotimba", category: "Gym Life", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-gym-scene.jpg", alt: "Gym interior", caption: "The gym at golden hour", category: "Gym Life", aspect: "aspect-[16/9]" },
  { src: "/images/vfba-gym-action-1.jpg", alt: "Gym action", caption: "Boxer hitting pads", category: "Gym Life", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-gym-action-2.jpg", alt: "Gym action", caption: "Training in the ring", category: "Gym Life", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-gym-action-3.jpg", alt: "Gym action", caption: "Working the heavy bag", category: "Gym Life", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-gym-life-1.jpg", alt: "Gym life", caption: "Day-to-day at the gym", category: "Gym Life", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-gym-life-2.jpg", alt: "Gym life", caption: "Atmosphere inside VFBA", category: "Gym Life", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-gym-clients-real.jpg", alt: "Gym clients", caption: "Community members training", category: "Gym Life", aspect: "aspect-[4/3]" },

  // Training
  { src: "/images/vfba-training-session-1.jpg", alt: "Training session", caption: "Morning training session", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-training-session-2.jpg", alt: "Training session", caption: "Technique drills", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-training-session-3.jpg", alt: "Training session", caption: "Conditioning work", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-training-1.jpg", alt: "Training", caption: "Training at VFBA", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-training-2.jpg", alt: "Training", caption: "Building fundamentals", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-group-training-1.jpg", alt: "Group training", caption: "Community group session", category: "Training", aspect: "aspect-[16/9]" },
  { src: "/images/vfba-group-training-2.jpg", alt: "Group training", caption: "Group fitness", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-group-training-3.jpg", alt: "Group training", caption: "Team training", category: "Training", aspect: "aspect-[4/3]" },

  // Coaches
  { src: "/images/vfba-coaching-1.jpg", alt: "Coach instructing", caption: "Coach Tobias guiding a fighter", category: "Coaches", aspect: "aspect-[3/4]" },
  { src: "/images/vfba-coaching-2.jpg", alt: "Coaching session", caption: "Hands-on coaching", category: "Coaches", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-coaching-3.jpg", alt: "Coach at the gym", caption: "Coach Tobias at the gym", category: "Coaches", aspect: "aspect-[4/3]" },
  { src: "/images/tobias-headshot.jpg", alt: "Coach Tobias headshot", caption: "Coach Tobias Mupfuti — Headshot", category: "Coaches", aspect: "aspect-[3/4]" },

  // Boxing / Ring
  { src: "/images/vfba-ring-action-1.jpg", alt: "Ring action", caption: "Inside the ring", category: "Boxing", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-ring-action-2.jpg", alt: "Ring action", caption: "Sparring session", category: "Boxing", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-ring-action-3.jpg", alt: "Ring action", caption: "Fight preparation", category: "Boxing", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-fight-night-1.jpg", alt: "Fight night", caption: "Fight night at VFBA", category: "Boxing", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-fight-night-2.jpg", alt: "Fight night", caption: "Competitive bout", category: "Boxing", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-fight-night-3.jpg", alt: "Fight night", caption: "In the corner", category: "Boxing", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-boxers-real.jpg", alt: "VFBA boxers", caption: "VFBA fighters", category: "Boxing", aspect: "aspect-[4/3]" },

  // Kids
  { src: "/images/vfba-kids-training-1.jpg", alt: "Kids training", caption: "Youth programme in action", category: "Kids", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-kids-training-2.jpg", alt: "Kids training", caption: "Young fighters training", category: "Kids", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-kids-training-3.jpg", alt: "Kids training", caption: "Building the next generation", category: "Kids", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-children-1.jpg", alt: "Children at VFBA", caption: "VFBA children's programme", category: "Kids", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-children-2.jpg", alt: "Children at VFBA", caption: "VFBA youth programme", category: "Kids", aspect: "aspect-[4/3]" },

  // Community
  { src: "/images/vfba-community-1.jpg", alt: "Community event", caption: "Community outreach", category: "Community", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-community-2.jpg", alt: "Community event", caption: "VFBA community", category: "Community", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-community-3.jpg", alt: "Community event", caption: "Community gathering", category: "Community", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-community-4.jpg", alt: "Community event", caption: "Community outreach", category: "Community", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-community-5.jpg", alt: "Community event", caption: "Community support", category: "Community", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-community-event-1.jpg", alt: "Community event", caption: "VFBA community event", category: "Community", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-community-event-2.jpg", alt: "Community event", caption: "Community celebration", category: "Community", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-community-event-3.jpg", alt: "Community event", caption: "Together we build", category: "Community", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-victoria-falls.jpg", alt: "Victoria Falls", caption: "Victoria Falls, Zimbabwe", category: "Community", aspect: "aspect-[16/9]" },

  // Portraits
  { src: "/images/vfba-boxer-portrait-1.jpg", alt: "VFBA boxer portrait", caption: "VFBA Fighter — Portrait", category: "Portraits", aspect: "aspect-[3/4]" },
  { src: "/images/vfba-boxer-portrait-2.jpg", alt: "VFBA boxer portrait", caption: "VFBA Fighter — Portrait", category: "Portraits", aspect: "aspect-[3/4]" },
  { src: "/images/vfba-boxer-portrait-3.jpg", alt: "VFBA boxer portrait", caption: "VFBA Fighter — Portrait", category: "Portraits", aspect: "aspect-[3/4]" },
  { src: "/images/vfba-portrait-1.jpg", alt: "VFBA portrait", caption: "Portrait — VFBA member", category: "Portraits", aspect: "aspect-[3/4]" },
  { src: "/images/vfba-portrait-2.jpg", alt: "VFBA portrait", caption: "Portrait — VFBA member", category: "Portraits", aspect: "aspect-[3/4]" },

  // Tournaments
  { src: "/images/vfba-event-1.jpg", alt: "Tournament event", caption: "Tournament event", category: "Tournaments", aspect: "aspect-[4/3]" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  }, []);

  const goToNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % filteredImages.length
    );
  }, [lightboxIndex, filteredImages.length]);

  const goToPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev === null
        ? null
        : (prev - 1 + filteredImages.length) % filteredImages.length
    );
  }, [lightboxIndex, filteredImages.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, closeLightbox, goToNext, goToPrev]);

  return (
    <>
      <section className="relative page-hero">
        <div className="site-container">
          <AnimatedSection>
            <span className="text-gold/70 text-xs tracking-[0.5em] uppercase block mb-4">
              Visual Archive
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-[0.95] max-w-4xl">
              Gallery
            </h1>
            <p className="mt-6 text-dust text-base md:text-lg max-w-2xl leading-relaxed">
              Authentic images from the gym, training sessions, tournaments,
              community events, and the people who make VFBA what it is.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section border-t border-charcoal-lighter/30">
        <div className="site-container">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setLightboxIndex(null);
                }}
                className={`px-5 py-2 text-xs font-medium tracking-[0.08em] uppercase rounded-sm transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-rust text-cream border border-transparent"
                    : "bg-charcoal-light border border-charcoal-lighter text-dust hover:text-cream hover:border-cream/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Counter */}
          <div className="mb-6">
            <span className="text-dust/60 text-sm">{filteredImages.length} photos</span>
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 space-y-5">
            {filteredImages.map((image, i) => (
              <AnimatedSection key={image.src + activeCategory} delay={Math.min(i * 0.03, 0.3)}>
                <button
                  onClick={() => openLightbox(i)}
                  className={`group relative break-inside-avoid block w-full ${image.aspect} bg-charcoal-light rounded-sm overflow-hidden border border-charcoal-lighter hover:border-gold/20 transition-all duration-500 cursor-pointer text-left`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-cream text-sm">{image.caption}</span>
                    <span className="text-dust/60 text-xs block mt-1">{image.category}</span>
                  </div>
                </button>
              </AnimatedSection>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-dust text-lg">No images in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Video Section */}
      <section className="section bg-charcoal-light/50">
        <div className="site-container text-center">
          <ChapterTitle
            number="01"
            title="Video Content"
            subtitle="Training sessions, fight nights, and the Rise documentary — watch on-site."
          />

          <AnimatedSection>
            <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <button
                onClick={() => setActiveVideo("mCbbQSTvef8")}
                className="group relative aspect-video bg-charcoal-light rounded-sm border border-charcoal-lighter overflow-hidden hover:border-gold/20 transition-all duration-500"
              >
                <Image
                  src="/images/rise-poster.jpg"
                  alt="Rise documentary"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-rust/30 border border-rust/50 flex items-center justify-center mb-3 group-hover:bg-rust/50 transition-colors duration-300">
                    <FiPlay size={22} className="text-cream ml-0.5" />
                  </div>
                  <span className="text-cream text-sm font-display block">Rise Documentary</span>
                  <span className="text-dust text-xs mt-1">Watch on-site</span>
                </div>
              </button>
              <a
                href="/rise-film"
                className="group relative aspect-video bg-charcoal-light rounded-sm border border-charcoal-lighter overflow-hidden hover:border-gold/20 transition-all duration-500"
              >
                <Image
                  src="/images/rise-pro-still-1.jpg"
                  alt="Rise film"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-cream text-sm font-display block">The Rise Film</span>
                  <span className="text-dust text-xs">Trailers, behind the scenes &amp; interviews</span>
                </div>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/98 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-cream/60 hover:text-cream transition-colors z-10"
            aria-label="Close lightbox"
          >
            <FiX size={32} />
          </button>

          {/* Counter */}
          <div className="absolute top-6 left-6 text-dust/60 text-sm z-10">
            {lightboxIndex + 1} / {filteredImages.length}
          </div>

          {/* Category badge */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10">
            <span className="text-gold/70 text-xs tracking-[0.2em] uppercase bg-charcoal/80 px-4 py-2 rounded-sm backdrop-blur-sm">
              {filteredImages[lightboxIndex].category}
            </span>
          </div>

          {/* Previous */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrev();
            }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-charcoal-light/80 backdrop-blur-sm border border-charcoal-lighter flex items-center justify-center text-cream/60 hover:text-cream hover:bg-charcoal-lighter transition-all z-10"
            aria-label="Previous image"
          >
            <FiChevronLeft size={24} />
          </button>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-charcoal-light/80 backdrop-blur-sm border border-charcoal-lighter flex items-center justify-center text-cream/60 hover:text-cream hover:bg-charcoal-lighter transition-all z-10"
            aria-label="Next image"
          >
            <FiChevronRight size={24} />
          </button>

          {/* Image */}
          <div
            className="relative w-full h-full max-w-6xl max-h-[85vh] mx-16 my-12"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Caption */}
          <div className="absolute bottom-6 left-0 right-0 text-center z-10">
            <span className="text-cream text-sm font-display">
              {filteredImages[lightboxIndex].caption}
            </span>
          </div>
        </div>
      )}

      {/* Video Modal — Rise Documentary */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/95 backdrop-blur-sm p-4"
          onClick={() => setActiveVideo(null)}
        >
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-6 right-6 text-cream/60 hover:text-cream transition-colors z-10"
            aria-label="Close video"
          >
            <FiX size={32} />
          </button>
          <div className="w-full max-w-5xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`}
              title="Rise Documentary"
              className="w-full h-full rounded-sm"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
