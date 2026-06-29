"use client";

import { translations } from "@/lib/translations";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function About({ locale }: { locale: "es" | "en" }) {
  const t = translations[locale];

  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="bg-[#f5f5f5] py-28 px-6 md:px-16 overflow-hidden"
    >
      <div
        ref={ref}
        className={`max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center transition-all duration-1000 ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        {/* FOTO */}

        <div className="relative w-full h-[520px] md:h-[700px] rounded-3xl overflow-hidden shadow-2xl group">

          <Image
            src="/aboutt.png"
            alt="Lamai Thai Massage"
            fill
            priority
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />

          {/* Overlay elegante */}

          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

        </div>

        {/* TEXTO */}

        <div className="flex flex-col justify-center">

          <h2 className="text-4xl md:text-6xl font-semibold text-[#4a1f14] leading-tight">

            {t.about.title}

          </h2>

          <div className="w-24 h-[3px] bg-[#d4af37] mt-6 mb-10 rounded-full" />

          <p className="text-gray-700 text-lg md:text-xl leading-10 max-w-xl">

            {t.about.text}

          </p>

        </div>

      </div>
    </section>
  );
}