"use client";

import { translations } from "@/lib/translations";
import { useState, useEffect } from "react";

export default function ThaiSection({ locale }: { locale: "es" | "en" }) {
  const t = translations[locale];
  const [showAll, setShowAll] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const visibleBenefits = showAll
    ? t.thai.benefits
    : isDesktop
    ? t.thai.benefits.slice(0, 6)
    : t.thai.benefits.slice(0, 3);

  return (
    <section id="thai" className="bg-white py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">

        {/* TITULO */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-semibold text-[#4a1f14]">
            {t.thai.title}
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            {t.thai.subtitle}
          </p>

          <div className="w-20 h-1 bg-[#d4af37] mx-auto mt-6" />
        </div>

        {/* INTRO */}
        <p className="text-center text-gray-600 max-w-3xl mx-auto mt-10 leading-relaxed">
          {t.thai.intro}
        </p>

        {/* BENEFICIOS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">

          {visibleBenefits.map((item: string, i: number) => (
            <div
              key={i}
              className="group border border-gray-200 rounded-xl p-5 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-[#d4af37]/50 bg-white"
              style={{
                transitionDelay: `${i * 60}ms`,
              }}
            >
              {/* ICONO */}
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#d4af37]/10 text-[#d4af37] mb-4 transition group-hover:bg-[#d4af37] group-hover:text-black">
                ✓
              </div>

              {/* TEXTO */}
              <p className="text-gray-700 font-medium leading-snug">
                {item}
              </p>
            </div>
          ))}

        </div>

        {/* BOTON */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-[#d4af37] text-black px-6 py-3 rounded-md font-semibold hover:scale-105 transition shadow-md"
          >
            {showAll
              ? locale === "es"
                ? "Ver menos"
                : "Show less"
              : locale === "es"
              ? "Ver más"
              : "Show more"}
          </button>
        </div>

      </div>
    </section>
  );
}