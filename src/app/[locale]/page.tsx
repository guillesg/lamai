import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Thai from "@/components/Thai";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhatsAppButton from "@/components/WhatsappButton";

export function generateStaticParams() {
  return [
    { locale: "es" },
    { locale: "en" },
  ];
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: "es" | "en" }>;
}) {
  const { locale } = await params;

  if (locale !== "es" && locale !== "en") {
    return null;
  }

  return (
    <>
      <Navbar locale={locale} />
      <Hero locale={locale} />
      <About locale={locale} />
      <Testimonials locale={locale} />
      <Thai locale={locale} />
      <Services locale={locale} />
      <Footer locale={locale} />
      <WhatsAppButton locale={locale} />
    </>
  );
}