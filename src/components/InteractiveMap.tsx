"use client";

import { useEffect, useState } from "react";

export default function InteractiveMap() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Defer setting state to the next tick to avoid synchronous setState in effect
    const id = window.setTimeout(() => setMounted(true), 0);
    return () => window.clearTimeout(id);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-charcoal-light">
        <div className="w-6 h-6 border-2 border-gold/40 border-t-gold rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <iframe
      src="https://www.openstreetmap.org/export/embed.html?bbox=-17.94%2C-17.95%2C25.86%2C25.84&layer=mapnik&marker=-17.9333%2C25.8333"
      className="w-full h-full border-0"
      title="VFBA Location Map"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
