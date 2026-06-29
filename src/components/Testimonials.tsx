"use client";

import { translations } from "@/lib/translations";

export default function Testimonials({ locale }: { locale: "es" | "en" }) {
  const t = translations[locale];

  const reviews = [
    {
      text:
        locale === "es"
          ? "Llevo más de medio año acudiendo y, la verdad, estoy muy contento con los masajes terapéuticos de Lamai Thai Massage. Llevaba bastante tiempo con dolor en la cintura y lo que no me quitó otro tipo de masajes, ella lo ha conseguido."
          : "I have been coming here for more than six months, and I am truly delighted with the therapeutic treatments at Lamai Thai Massage. I had been suffering from lower back pain for a long time, and what other types of massage couldn't solve, she finally did.",
      name: "Manuel Alejandro Guillén Delgado",
    },
    {
      text:
        locale === "es"
          ? "Hoy recibí un masaje Thai Solutions y recomiendo ampliamente a esta experta profesional. Interpreta el cuerpo como quien lee el periódico, haciendo preguntas pertinentes y esclarecedoras para determinar el mejor procedimiento. Tuve 90 minutos de su atención; vaya, reserve con anticipación y déjese transformar."
          : "Today I experienced Thai Solutions and I highly recommend this outstanding professional. She understands the body as if she were reading a newspaper, asking insightful and thoughtful questions to determine the best treatment. I enjoyed 90 minutes of exceptional care. Book in advance and allow yourself to be transformed.",
      name: "Call me Kangar",
    },
    {
      text:
        locale === "es"
          ? "Empecé con Ruchira con un masaje tailandés que me regalaron por mi cumpleaños. Para mi sorpresa, me alivió zonas del cuerpo que no le había contado que tenía afectadas. A partir de ahí, con pocas palabras, me dijo lo que necesitaba para mejorar. Thai Solución. En mi vida he estado con profesionales, pero como ella no conozco a nadie ni parecido. Trabaja tu cuerpo en profundidad, ves el avance y los resultados mejoran. Ella es maravillosa; en pocas palabras te explica todo, le gusta su trabajo y solo quiere ayudar. Yo me quedo con ella, número uno."
          : "I first met Ruchira thanks to a Thai massage I received as a birthday gift. To my surprise, she relieved areas of my body that I hadn't even mentioned were causing me discomfort. From that moment on, with just a few words, she understood exactly what I needed to improve. Thai Solution. Throughout my life I've been treated by many professionals, but I've never met anyone like her. She works deeply on your body, you notice the progress and the results improve with every session. She is wonderful, explains everything clearly, truly loves her work, and her only goal is to help people. For me, she's simply number one.",
      name: "Maria Godoy",
    },
  ];

  return (
    <section className="bg-[#f3efe9] py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">

          <h2 className="text-3xl md:text-5xl font-semibold text-[#4a1f14]">
            {locale === "es" ? "Opiniones de clientes" : "Client Reviews"}
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            {locale === "es"
              ? "La experiencia de nuestros clientes habla por sí sola."
              : "Our clients' experiences speak for themselves."}
          </p>

          <div className="mt-6 text-[#d4af37] text-xl">
            ⭐⭐⭐⭐⭐
          </div>

          <p className="text-gray-600 mt-2">
            {locale === "es" ? "5.0 en Google" : "5.0 on Google"}
          </p>

          <div className="w-20 h-1 bg-[#d4af37] mx-auto mt-6" />

        </div>

        {/* REVIEWS */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300"
            >

              <div className="text-[#d4af37] mb-3 text-lg">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-gray-700 text-sm leading-relaxed italic">
                “{review.text}”
              </p>

              <p className="mt-6 text-sm font-semibold text-[#4a1f14]">
                — {review.name}
              </p>

            </div>
          ))}

        </div>

        {/* BOTÓN GOOGLE */}
        <div className="flex justify-center mt-12">

          <a
            href="https://www.google.com/search?q=lamai+thai+massage"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#d4af37] text-black px-6 py-3 rounded-md font-semibold hover:scale-105 transition"
          >
            {locale === "es"
              ? "Ver más opiniones"
              : "See more reviews"}
          </a>

        </div>

      </div>
    </section>
  );
}