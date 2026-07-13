"use client";

import { useState, useEffect, useCallback } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import ChapterTitle from "@/components/ChapterTitle";
import Image from "next/image";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const categories = ["All", "Gym Life", "Fighters", "Training", "Community", "Tournaments", "Rise Film", "Portraits"] as const;
type Category = (typeof categories)[number];

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  category: Exclude<Category, "All">;
  aspect: string;
}

const galleryImages: GalleryImage[] = [
  { src: "/images/vfba-gym-scene.jpg", alt: "VFBA boxing gym", caption: "The VFBA gym in Chinotimba", category: "Gym Life", aspect: "aspect-[4/3]" },
  { src: "/images/rise-gym-landscape.jpg", alt: "Gym interior", caption: "The gym at golden hour", category: "Gym Life", aspect: "aspect-[16/9]" },
  { src: "/images/vfba-training-1.jpg", alt: "Training session", caption: "Youth training session", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-training-2.jpg", alt: "Boxing training", caption: "Training at the gym", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/rise-boxing-still.jpg", alt: "Boxing training scene from Rise", caption: "Rise — Boxing training scene", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-event-1.jpg", alt: "VFBA event", caption: "Tournament event", category: "Tournaments", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-children-1.jpg", alt: "Children at VFBA", caption: "VFBA children's programme", category: "Community", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-children-2.jpg", alt: "Children at the academy", caption: "VFBA youth programme", category: "Community", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-community-1.jpg", alt: "VFBA community event", caption: "Community outreach", category: "Community", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-community-2.jpg", alt: "VFBA community", caption: "VFBA community", category: "Community", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-community-3.jpg", alt: "Community event", caption: "Community event", category: "Community", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-community-4.jpg", alt: "Community event", caption: "Community gathering", category: "Community", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-community-5.jpg", alt: "Community event", caption: "Community outreach", category: "Community", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-victoria-falls.jpg", alt: "Victoria Falls", caption: "Victoria Falls, Zimbabwe", category: "Community", aspect: "aspect-[16/9]" },
  { src: "/images/vfba-portrait-1.jpg", alt: "VFBA fighter portrait", caption: "VFBA Fighter — Portrait", category: "Fighters", aspect: "aspect-[3/4]" },
  { src: "/images/vfba-portrait-2.jpg", alt: "VFBA fighter portrait", caption: "VFBA Fighter — Portrait", category: "Fighters", aspect: "aspect-[3/4]" },
  { src: "/images/rise-tobias-portrait.jpg", alt: "Coach Tobias portrait", caption: "Coach Tobias Mupfuti", category: "Fighters", aspect: "aspect-[3/4]" },
  { src: "/images/rise-pro-still-1.jpg", alt: "Rise film production still", caption: "Rise — Production still", category: "Rise Film", aspect: "aspect-[4/3]" },
  { src: "/images/rise-pro-still-2.jpg", alt: "Rise film scene", caption: "Rise — Behind the scenes", category: "Rise Film", aspect: "aspect-[4/3]" },
  { src: "/images/rise-pro-still-3.jpg", alt: "Rise production photo", caption: "Rise — Cast and crew", category: "Rise Film", aspect: "aspect-[4/3]" },
  { src: "/images/rise-production-still-1.jpg", alt: "Rise production still", caption: "Rise — Production still", category: "Rise Film", aspect: "aspect-[4/3]" },
  { src: "/images/rise-still-1.jpg", alt: "Rise still", caption: "Rise — Film still", category: "Rise Film", aspect: "aspect-[4/3]" },
  { src: "/images/rise-still-2.jpg", alt: "Rise still", caption: "Rise — Film still", category: "Rise Film", aspect: "aspect-[4/3]" },
  { src: "/images/rise-still-3.jpg", alt: "Rise still", caption: "Rise — Film still", category: "Rise Film", aspect: "aspect-[4/3]" },
  { src: "/images/rise-still-4.jpg", alt: "Rise still", caption: "Rise — Film still", category: "Rise Film", aspect: "aspect-[4/3]" },
  { src: "/images/rise-still-5.jpg", alt: "Rise still", caption: "Rise — Film still", category: "Rise Film", aspect: "aspect-[4/3]" },
  { src: "/images/rise-intimate-scene.jpg", alt: "Rise intimate scene", caption: "Rise — Intimate scene", category: "Rise Film", aspect: "aspect-[4/3]" },
  { src: "/images/rise-landscape.jpg", alt: "Rise landscape", caption: "Zimbabwe landscape", category: "Rise Film", aspect: "aspect-[16/9]" },
  { src: "/images/rise-tobias-portrait.jpg", alt: "Tobias Mupfuti portrait", caption: "Coach Tobias Mupfuti", category: "Portraits", aspect: "aspect-[3/4]" },
  { src: "/images/tobias-headshot.jpg", alt: "Coach Tobias headshot", caption: "Coach Tobias — Headshot", category: "Portraits", aspect: "aspect-[3/4]" },
  { src: "/images/vfba-portrait-1.jpg", alt: "VFBA portrait", caption: "Portrait — VFBA member", category: "Portraits", aspect: "aspect-[3/4]" },
  { src: "/images/vfba-portrait-2.jpg", alt: "VFBA portrait", caption: "Portrait — VFBA member", category: "Portraits", aspect: "aspect-[3/4]" },
  { src: "/images/rise-tobias-landscape.jpg", alt: "Tobias landscape photo", caption: "Coach Tobias — Landscape", category: "Portraits", aspect: "aspect-[16/9]" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

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
              Authentic images from the gym, the children&apos;s home, tournaments,
              community events, and the Rise film — real moments, real people.
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
            subtitle="Training sessions, tournament highlights, and the Rise film."
          />

          <AnimatedSection>
            <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <a
                href="https://www.youtube.com/watch?v=mCbbQSTvef8"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-video bg-charcoal-light rounded-sm border border-charcoal-lighter overflow-hidden hover:border-gold/20 transition-all duration-500"
              >
                <Image
                  src="/images/rise-pro-still-1.jpg"
                  alt="Jessica Rowlands interview"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-cream text-sm font-display block">Director Interview</span>
                  <span className="text-dust text-xs">Jessica J. Rowlands on Rise</span>
                </div>
              </a>
              <a
                href="/rise-film"
                className="group relative aspect-video bg-charcoal-light rounded-sm border border-charcoal-lighter overflow-hidden hover:border-gold/20 transition-all duration-500"
              >
                <Image
                  src="/images/rise-poster.jpg"
                  alt="Rise film"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-cream text-sm font-display block">The Rise Film</span>
                  <span className="text-dust text-xs">Watch trailers & behind the scenes</span>
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
    </>
  );
}
