import Image from "next/image";

export default function Footer({ locale }: { locale: "es" | "en" }) {
  return (
    <footer className="bg-[#4a1f14] text-white px-6 md:px-16 py-16">

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">

        {/* LOGO */}
        <div>
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Logo" width={50} height={50} />

            <div>
              <p className="text-lg font-semibold text-[#d4af37]">
                Lamai
              </p>
              <p className="text-xs tracking-[0.3em] text-gray-300">
                THAI MASSAGE
              </p>
            </div>
          </div>

          <p className="mt-6 text-gray-300 text-sm leading-relaxed">
            {locale === "es"
              ? "Relájate, desconecta y cuida tu cuerpo con nuestros masajes tradicionales tailandeses."
              : "Relax, disconnect and take care of your body with our traditional Thai massages."}
          </p>
        </div>

        {/* CONTACTO */}
        <div>
          <h3 className="text-[#d4af37] font-semibold mb-4">
            {locale === "es" ? "Contacto" : "Contact"}
          </h3>

          <p className="text-gray-300 text-sm">
            📍 Calle Artemi Semidán 10
          </p>

          <p className="text-gray-300 text-sm mt-2">
            📞 +34 694 25 39 13
          </p>

          {/* BOTÓN WHATSAPP */}
          <a
            href="https://wa.me/34694253913"
            target="_blank"
            className="inline-block mt-6 bg-[#d4af37] text-black px-5 py-2 rounded-md font-semibold hover:scale-105 transition"
          >
            {locale === "es" ? "WhatsApp" : "Chat on WhatsApp"}
          </a>
        </div>

        {/* HORARIO */}
        <div>
          <h3 className="text-[#d4af37] font-semibold mb-4">
            {locale === "es" ? "Horario" : "Opening Hours"}
          </h3>

          <p className="text-gray-300 text-sm">
            {locale === "es"
              ? "Martes - Sábado"
              : "Tuesday - Saturday"}
          </p>

          <p className="text-gray-300 text-sm mt-2">
            10:00 - 14:00
          </p>

          <p className="text-gray-300 text-sm">
            16:00 - 20:00
          </p>

          <p className="text-gray-300 text-sm mt-2">
            {locale === "es"
              ? "Domingo y Lunes: Cerrado"
              : "Sunday & Monday: Closed"}
          </p>
        </div>

      </div>

      {/* FOOTER FINAL */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-gray-400">

        © {new Date().getFullYear()} Lamai Thai Massage

        <div className="mt-2">
          {locale === "es" ? "Desarrollado por " : "Developed by "}
          <a
            href="https://guillermo-sosa.netlify.app/"
            target="_blank"
            className="text-[#d4af37] hover:underline ml-1"
          >
            Guillermo Sosa
          </a>
        </div>

      </div>

    </footer>
  );
}