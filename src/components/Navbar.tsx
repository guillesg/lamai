"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { translations } from "@/lib/translations";

export default function Navbar({ locale }: { locale: "es" | "en" }) {
  const [open, setOpen] = useState(false);
  const t = translations[locale];

  return (
    <>
      <nav className="w-full h-20 px-6 flex items-center fixed top-0 left-0 z-50 bg-[#4a1f14]/90 backdrop-blur-md text-white">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">

          {/* 🔥 LOGO CLICKABLE */}
          <a href="#top" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Logo" width={42} height={42} />

            <div className="hidden md:flex flex-col leading-tight">
              <span className="text-lg font-semibold text-[#d4af37]">
                Lamai
              </span>

              <span className="text-xs tracking-[0.3em] text-gray-200">
                THAI MASSAGE
              </span>
            </div>
          </a>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex items-center gap-10">

            <a href="#about" className="hover:text-[#d4af37] transition">
              {t.nav.about}
            </a>

            <a href="#thai" className="hover:text-[#d4af37] transition">
              {t.nav.benefits}
            </a>

            <a href="#services" className="hover:text-[#d4af37] transition">
              {t.nav.services}
            </a>

          </div>

          {/* DERECHA */}
          <div className="hidden md:flex items-center gap-4">

            <a
              href="#booking"
              className="bg-[#d4af37] text-black px-4 py-2 rounded-md font-semibold hover:scale-105 transition"
            >
              {t.nav.booking}
            </a>

            <Link href="/es">
              <Image src="/flags/españa.png" alt="ES" width={26} height={26} />
            </Link>

            <Link href="/en">
              <Image src="/flags/inglesa.png" alt="EN" width={26} height={26} />
            </Link>

          </div>

          {/* BURGER */}
          <button
            className="md:hidden flex flex-col gap-1 z-50"
            onClick={() => setOpen(!open)}
          >
            <span className={`w-6 h-0.5 bg-white transition ${open ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`w-6 h-0.5 bg-white transition ${open ? "opacity-0" : ""}`} />
            <span className={`w-6 h-0.5 bg-white transition ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>

        </div>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 bg-[#4a1f14] z-40 flex flex-col items-center justify-center gap-8 text-white text-xl">

          <a href="#top" onClick={() => setOpen(false)}>
            Home
          </a>

          <a href="#about" onClick={() => setOpen(false)}>
            {t.nav.about}
          </a>

          <a href="#thai" onClick={() => setOpen(false)}>
            {t.nav.benefits}
          </a>

          <a href="#services" onClick={() => setOpen(false)}>
            {t.nav.services}
          </a>

          <a
            href="#booking"
            onClick={() => setOpen(false)}
            className="bg-[#d4af37] text-black px-6 py-3 rounded-md font-semibold"
          >
            {t.nav.booking}
          </a>

          {/* IDIOMAS */}
          <div className="flex gap-6 mt-6">
            <Link href="/es" onClick={() => setOpen(false)}>
              <Image
                src="/flags/españa.png"
                alt="Español"
                width={40}
                height={40}
                className={`rounded-full ${
                  locale === "es" ? "ring-2 ring-[#d4af37]" : ""
                }`}
              />
            </Link>

            <Link href="/en" onClick={() => setOpen(false)}>
              <Image
                src="/flags/inglesa.png"
                alt="English"
                width={40}
                height={40}
                className={`rounded-full ${
                  locale === "en" ? "ring-2 ring-[#d4af37]" : ""
                }`}
              />
            </Link>
          </div>

        </div>
      )}
    </>
  );
}