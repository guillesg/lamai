"use client";

import React from "react";

function LotusIcon() {
  return (
    <svg
      width="46"
      height="46"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        stroke="#D4AF37"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M32 17C27 24 27 33 32 40C37 33 37 24 32 17Z" />
        <path d="M22 23C18 28 20 37 30 43C29 35 27 28 22 23Z" />
        <path d="M42 23C46 28 44 37 34 43C35 35 37 28 42 23Z" />
        <path d="M16 35C19 40 24 45 31 47C27 42 22 38 16 35Z" />
        <path d="M48 35C45 40 40 45 33 47C37 42 42 38 48 35Z" />
        <path d="M24 49H40" />
      </g>
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg
      width="46"
      height="46"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        stroke="#D4AF37"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M32 52C32 44 32 36 32 20" />
        <path d="M32 20C38 18 43 14 46 8C39 8 34 11 32 20Z" />
        <path d="M32 28C25 25 19 23 14 18C15 27 21 32 32 33Z" />
        <path d="M32 34C39 31 45 28 50 23C49 32 43 37 32 39Z" />
        <path d="M32 42C27 40 23 38 20 34C21 40 25 45 32 46Z" />
      </g>
    </svg>
  );
}

function DropIcon() {
  return (
    <svg
      width="46"
      height="46"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        stroke="#D4AF37"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M32 10C32 10 22 24 22 34C22 41 26.5 47 32 47C37.5 47 42 41 42 34C42 24 32 10 32 10Z" />
        <path d="M18 54C21 52 24 52 27 54C30 56 34 56 37 54C40 52 43 52 46 54" />
      </g>
    </svg>
  );
}

function SparklesIcon() {
  return (
    <svg
      width="46"
      height="46"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        stroke="#D4AF37"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M32 12L34.5 22L44 24.5L34.5 27L32 37L29.5 27L20 24.5L29.5 22L32 12Z" />
        <path d="M49 14L50 18L54 19L50 20L49 24L48 20L44 19L48 18L49 14Z" />
        <path d="M16 39L17 43L21 44L17 45L16 49L15 45L11 44L15 43L16 39Z" />
      </g>
    </svg>
  );
}

export default function Services({ locale }: { locale: "es" | "en" }) {
  const phone = "34694253913";

  const createWhatsAppLink = (message: string) =>
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  const services = [
    {
      icon: <LotusIcon />,
      name: locale === "es" ? "La Solución Tailandesa" : "The Thai Solution",

      description:
        locale === "es"
          ? "Un tratamiento terapéutico basado en técnicas tradicionales tailandesas para aliviar dolores, liberar tensiones y recuperar el equilibrio físico y mental."
          : "A therapeutic treatment based on traditional Thai techniques to relieve pain, release tension, and restore balance between body and mind.",

      prices: [
        { duration: "60 min", price: "90€" },
        { duration: "90 min", price: "130€" },
        { duration: "120 min", price: "160€" },
      ],

      bookingLink: createWhatsAppLink(
        locale === "es"
          ? "Hola, me gustaría reservar una cita para La Solución Tailandesa."
          : "Hello, I would like to book an appointment for The Thai Solution.",
      ),
    },

    {
      icon: <LeafIcon />,
      name: "Thai Ayuwattana Massage",

      description:
        locale === "es"
          ? "Mientras que La Solución Tailandesa se centra en tratar molestias específicas, Thai Ayuwattana Massage está diseñado para mantener el bienestar general. Ayuda a aliviar la tensión muscular, los dolores de cabeza, mejorar el descanso y reducir el estrés."
          : "While The Thai Solution focuses on targeted healing, Thai Ayuwattana Massage is designed to maintain overall wellbeing. It helps relieve muscle tension, headaches, improve sleep quality, and reduce stress.",

      prices: [{ duration: "90 min", price: "100€" }],

      bookingLink: createWhatsAppLink(
        locale === "es"
          ? "Hola, me gustaría reservar una cita para Thai Ayuwattana Massage."
          : "Hello, I would like to book an appointment for Thai Ayuwattana Massage.",
      ),
    },

    {
      icon: <DropIcon />,
      name: locale === "es" ? "Drenaje Linfático" : "Lymphatic Drainage",

      description:
        locale === "es"
          ? "Favorece la eliminación de líquidos y toxinas, estimula la circulación y proporciona una agradable sensación de ligereza."
          : "Encourages the elimination of fluids and toxins, improves circulation, and leaves your body feeling lighter.",

      prices: [
        { duration: "60 min", price: "65€" },
        { duration: "90 min", price: "95€" },
      ],

      bookingLink: createWhatsAppLink(
        locale === "es"
          ? "Hola, me gustaría reservar una cita para un Drenaje Linfático."
          : "Hello, I would like to book a Lymphatic Drainage treatment.",
      ),
    },

    {
      icon: <SparklesIcon />,
      name: locale === "es" ? "Masaje Reductor" : "Body Sculpting Massage",

      description:
        locale === "es"
          ? "Tratamiento enfocado en estimular la circulación, mejorar el aspecto de la piel y ayudar a remodelar la silueta."
          : "A treatment designed to stimulate circulation, improve skin appearance, and help redefine your body shape.",

      prices: [
        { duration: "60 min", price: "65€" },
        { duration: "90 min", price: "95€" },
      ],

      bookingLink: createWhatsAppLink(
        locale === "es"
          ? "Hola, me gustaría reservar una cita para un Masaje Reductor."
          : "Hello, I would like to book a Body Sculpting Massage.",
      ),
    },
  ];

  return (
    <section id="services" className="bg-[#f3efe9] py-32 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#4a1f14]">
            {locale === "es" ? "Nuestros Servicios" : "Our Services"}
          </h2>

          <p className="mt-5 text-gray-600 text-lg">
            {locale === "es"
              ? "Tratamientos personalizados para cuidar de tu bienestar."
              : "Personalised treatments designed for your wellbeing."}
          </p>

          <div className="w-24 h-[2px] bg-[#d4af37] mx-auto mt-8" />
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 p-8 flex flex-col"
            >
              <div className="w-20 h-20 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/20 flex items-center justify-center mx-auto">
                {service.icon}
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-center text-[#4a1f14]">
                {service.name}
              </h3>

              <p className="mt-4 text-gray-600 text-center text-sm leading-7 flex-grow">
                {service.description}
              </p>

              <div className="mt-8 border-t border-gray-200 pt-5 space-y-3">
                {service.prices.map((price, index) => (
                  <div
                    key={index}
                    className="flex justify-between text-[#4a1f14]"
                  >
                    <span>{price.duration}</span>

                    <span className="font-semibold">{price.price}</span>
                  </div>
                ))}
              </div>

              <a
                href={service.bookingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full text-center bg-[#d4af37] text-black py-3 rounded-xl font-semibold hover:bg-[#c79f2e] transition"
              >
                {locale === "es" ? "Reservar" : "Book Now"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
