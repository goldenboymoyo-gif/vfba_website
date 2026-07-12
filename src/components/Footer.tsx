"use client";

import Link from "next/link";
import Image from "next/image";
import { FiFacebook, FiInstagram, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { SiTiktok, SiYoutube } from "react-icons/si";

const footerLinks = {
  academy: [
    { href: "/about", label: "Our Story" },
    { href: "/coach-tobias", label: "Coach Tobius" },
    { href: "/mission", label: "Mission & Vision" },
    { href: "/programmes", label: "Boxing Programmes" },
    { href: "/childrens-home", label: "Children's Home" },
    { href: "/community-impact", label: "Community Impact" },
  ],
  discover: [
    { href: "/fighters", label: "Our Fighters" },
    { href: "/rise-film", label: "The Rise Film" },
    { href: "/achievements", label: "Achievements" },
    { href: "/tournaments", label: "Tournaments & Events" },
    { href: "/gallery", label: "Gallery" },
    { href: "/news", label: "News & Stories" },
  ],
  support: [
    { href: "/support", label: "Donate" },
    { href: "/support#volunteer", label: "Volunteer" },
    { href: "/support#partner", label: "Partner With Us" },
    { href: "/contact", label: "Visit the Academy" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-charcoal-lighter">
      <div className="site-container py-20 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12 shrink-0">
                <Image
                  src="/images/vfba-logo-official.png"
                  alt="VFBA Logo"
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>
              <div>
                <span className="font-display text-cream text-sm tracking-wider uppercase block">
                  Victoria Falls
                </span>
                <span className="text-[10px] text-dust tracking-[0.3em] uppercase">
                  Boxing Academy
                </span>
              </div>
            </Link>
            <p className="text-dust text-sm leading-relaxed mb-6">
              Developing fighters, building discipline, and changing lives
              through boxing in Victoria Falls, Zimbabwe.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/victoriafallsboxingacademy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-charcoal-light flex items-center justify-center text-dust hover:text-gold hover:bg-charcoal-lighter transition-all duration-300"
                aria-label="Facebook"
              >
                <FiFacebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/victoriafallsboxingacademy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-charcoal-light flex items-center justify-center text-dust hover:text-gold hover:bg-charcoal-lighter transition-all duration-300"
                aria-label="Instagram"
              >
                <FiInstagram size={18} />
              </a>
              <a
                href="https://www.tiktok.com/@victoriafallsboxingacademy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-charcoal-light flex items-center justify-center text-dust hover:text-gold hover:bg-charcoal-lighter transition-all duration-300"
                aria-label="TikTok"
              >
                <SiTiktok size={18} />
              </a>
              <a
                href="https://www.youtube.com/@victoriafallsboxingacademy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-charcoal-light flex items-center justify-center text-dust hover:text-gold hover:bg-charcoal-lighter transition-all duration-300"
                aria-label="YouTube"
              >
                <SiYoutube size={18} />
              </a>
              <a
                href="mailto:info@victoriafallsboxingacademy.org"
                className="w-10 h-10 rounded-full bg-charcoal-light flex items-center justify-center text-dust hover:text-gold hover:bg-charcoal-lighter transition-all duration-300"
                aria-label="Email"
              >
                <FiMail size={18} />
              </a>
            </div>
          </div>

          {/* Academy Links */}
          <div>
            <h3 className="font-display text-gold text-sm tracking-wider uppercase mb-7">
              Academy
            </h3>
            <ul className="space-y-3.5">
              {footerLinks.academy.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-dust text-sm hover:text-cream transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Discover Links */}
          <div>
            <h3 className="font-display text-gold text-sm tracking-wider uppercase mb-7">
              Discover
            </h3>
            <ul className="space-y-3.5">
              {footerLinks.discover.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-dust text-sm hover:text-cream transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Contact */}
          <div>
            <h3 className="font-display text-gold text-sm tracking-wider uppercase mb-7">
              Support
            </h3>
            <ul className="space-y-3 mb-8">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-dust text-sm hover:text-cream transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="space-y-3 text-dust text-sm">
              <div className="flex items-start gap-3">
                <FiMapPin size={14} className="mt-1 text-gold shrink-0" />
                <span>
                  Chinotimba, Victoria Falls
                  <br />
                  Matabeleland North, Zimbabwe
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FiPhone size={14} className="text-gold shrink-0" />
                <span>Contact via WhatsApp</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 pt-10 border-t border-charcoal-lighter">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-dust/60 text-xs">
              &copy; {new Date().getFullYear()} Victoria Falls Boxing Academy.
              All rights reserved.
            </p>
            <p className="text-dust/40 text-xs text-center md:text-right">
              Building champions inside &amp; outside the ring.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
