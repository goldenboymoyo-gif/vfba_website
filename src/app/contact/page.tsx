"use client";

import dynamic from "next/dynamic";
import AnimatedSection from "@/components/AnimatedSection";
import ChapterTitle from "@/components/ChapterTitle";
import CTAButton from "@/components/CTAButton";
import { FiMapPin, FiPhone, FiClock, FiExternalLink } from "react-icons/fi";

const InteractiveMap = dynamic(() => import("@/components/InteractiveMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-charcoal-light">
      <div className="w-6 h-6 border-2 border-gold/40 border-t-gold rounded-full animate-spin" />
    </div>
  ),
});

export default function ContactPage() {
  return (
    <>
      <section className="relative page-hero">
        <div className="site-container">
          <AnimatedSection>
            <span className="text-gold/70 text-xs tracking-[0.5em] uppercase block mb-4">
              Find Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-[0.95] max-w-4xl">
              Visit &
              <br />
              <span className="text-gradient-gold">Contact</span>
            </h1>
            <p className="mt-6 text-dust text-base md:text-lg max-w-2xl leading-relaxed">
              Come train with us, visit the gym, or get in touch. VFBA is open
              to the community and to visitors from around the world.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            <div>
              <ChapterTitle
                number="01"
                title="Visit the Academy"
                subtitle="Open to visitors, tourists, and the community."
              />

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-rust/20 border border-rust/30 flex items-center justify-center shrink-0 mt-1">
                    <FiMapPin size={16} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-cream mb-1">
                      Location
                    </h3>
                    <p className="text-dust text-sm leading-relaxed">
                      8480, Mkhosana Township
                      <br />
                      Chinotimba, Victoria Falls
                      <br />
                      Matabeleland North, Zimbabwe
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-rust/20 border border-rust/30 flex items-center justify-center shrink-0 mt-1">
                    <FiPhone size={16} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-cream mb-1">
                      Contact
                    </h3>
                    <p className="text-dust text-sm leading-relaxed">
                      WhatsApp is the preferred method of contact.
                      <br />
                      Follow us on Facebook and Instagram for updates.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-rust/20 border border-rust/30 flex items-center justify-center shrink-0 mt-1">
                    <FiClock size={16} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-cream mb-1">
                      Gym Hours
                    </h3>
                    <p className="text-dust text-sm leading-relaxed">
                      Open to the public — contact for current schedule.
                      <br />
                      Youth programme runs after school on weekdays.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://www.facebook.com/victoriafallsboxingacademy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-rust text-cream text-sm rounded-sm hover:bg-rust-light transition-colors duration-300"
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/victoriafallsboxingacademy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-cream/20 text-cream text-sm rounded-sm hover:border-cream/40 hover:bg-cream/5 transition-all duration-300"
                >
                  Instagram
                </a>
                <a
                  href="mailto:info@victoriafallsboxingacademy.org"
                  className="px-6 py-3 border border-cream/20 text-cream text-sm rounded-sm hover:border-cream/40 hover:bg-cream/5 transition-all duration-300"
                >
                  Email
                </a>
              </div>
            </div>

            <AnimatedSection delay={0.2}>
              <ChapterTitle
                number="02"
                title="Map"
                subtitle="Find us in Chinotimba, Victoria Falls."
              />
              <div className="aspect-square bg-charcoal-light rounded-sm border border-charcoal-lighter overflow-hidden relative">
                <InteractiveMap />
                <a
                  href="https://maps.app.goo.gl/Gq7yi5L1vs7J1sCb7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 z-[999] inline-flex items-center gap-2 px-4 py-2 bg-charcoal/90 backdrop-blur-sm border border-charcoal-lighter text-cream text-sm rounded-sm hover:bg-charcoal-lighter transition-colors duration-300"
                >
                  <FiExternalLink size={14} />
                  Open in Google Maps
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section bg-charcoal-light/30">
        <div className="site-container text-center">
          <ChapterTitle
            number="03"
            title="For Press & Film Enquiries"
            subtitle="Journalists, festival programmers, and film-industry contacts."
          />

          <AnimatedSection>
            <div className="max-w-2xl mx-auto space-y-4">
              <p className="text-dust">
                For press enquiries, high-resolution photography, or film-related
                requests, please contact VFBA via the channels above or reach out
                to the Rise production team directly.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <CTAButton href="https://risezimbabwe.com" variant="secondary" showArrow>
                  Visit Rise Website
                </CTAButton>
                <CTAButton href="/rise-film" variant="secondary" showArrow>
                  Rise Film Page
                </CTAButton>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-b from-charcoal to-charcoal-light/30">
        <div className="site-container text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-cream mb-6">
              Ready to Connect?
            </h2>
            <p className="text-dust text-base max-w-xl mx-auto mb-10">
              Whether you want to train, visit, or support VFBA, we&apos;d love to hear from you.
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
