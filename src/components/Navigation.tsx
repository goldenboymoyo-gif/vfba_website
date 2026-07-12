"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/fighters", label: "Fighters" },
  { href: "/programmes", label: "Training" },
  { href: "/gallery", label: "Gallery" },
  { href: "/rise-film", label: "Rise" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-charcoal/95 backdrop-blur-md border-b border-gold/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[80rem] mx-auto px-5 md:px-8 lg:px-16">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link
              href="/"
              className="flex items-center gap-3 group shrink-0"
            >
              <div className="relative w-8 h-8 md:w-10 md:h-10 shrink-0">
                <Image
                  src="/images/vfba-logo-official.png"
                  alt="VFBA Logo"
                  fill
                  className="object-contain"
                  sizes="40px"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <span className="font-display text-cream text-sm tracking-wider uppercase">
                  Victoria Falls
                </span>
                <span className="block text-[10px] text-dust tracking-[0.3em] uppercase">
                  Boxing Academy
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-2 px-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-sm tracking-wide transition-colors duration-300 relative rounded-sm whitespace-nowrap ${
                    isActive(link.href)
                      ? "text-gold bg-gold/10"
                      : "text-dust hover:text-cream hover:bg-cream/5"
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute bottom-0 left-3 right-3 h-px bg-gold"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              ))}
              <Link
                href="/support"
                className="ml-3 px-5 py-2 bg-rust text-cream text-sm tracking-wide rounded-sm hover:bg-rust-light transition-colors duration-300"
              >
                Donate
              </Link>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-cream p-2 hover:text-gold transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-charcoal/98 backdrop-blur-lg lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col items-center justify-start pt-24 pb-12 px-6 gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.4 }}
                  className="w-full"
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 text-center font-display text-2xl transition-colors duration-300 rounded-sm ${
                      isActive(link.href)
                        ? "text-gold"
                        : "text-cream hover:text-gold"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.04, duration: 0.4 }}
              >
                <Link
                  href="/support"
                  onClick={() => setIsOpen(false)}
                  className="mt-6 inline-flex items-center gap-2 px-8 py-3 bg-rust text-cream text-lg tracking-wide rounded-sm hover:bg-rust-light transition-colors duration-300"
                >
                  Donate
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
