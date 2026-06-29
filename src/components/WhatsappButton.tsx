"use client";

export default function WhatsAppButton() {
  const phone = "34694253913";
  const message = encodeURIComponent(
    "Hola, me gustaría reservar una cita"
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-xl hover:scale-110 transition-all duration-300 animate-[pulse_2.5s_infinite]"
    >
      {/* ICONO */}
      <span className="text-xl">💬</span>

      {/* TEXTO SOLO DESKTOP */}
      <span className="hidden md:block font-medium">
        WhatsApp
      </span>
    </a>
  );
}