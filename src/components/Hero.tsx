import { translations } from "@/lib/translations";

export default function Hero({ locale }: { locale: "es" | "en" }) {
  const t = translations[locale];

  return (
    <section id="top" className="relative w-full flex items-center mt-20 min-h-[calc(100vh-80px+120px)]">

      {/* IMAGEN */}
      <div
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage: "url('/hero.jpg')",
          backgroundPosition: "center",
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />

      {/* CONTENIDO */}
      <div className="relative z-10 px-6 md:px-20 max-w-2xl text-white pb-16">

        <h1 className="text-4xl md:text-6xl font-semibold leading-[1.1] tracking-tight">
          {t.hero.title}
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
          {t.hero.subtitle}
        </p>

        <a
          href="#booking"
          className="inline-block mt-10 bg-[#d4af37] text-black px-7 py-3 rounded-md font-semibold hover:scale-105 transition shadow-xl"
        >
          {t.hero.button}
        </a>

      </div>

    </section>
  );
}