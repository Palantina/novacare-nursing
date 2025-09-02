import Image from "next/image";
// NOTE: path is relative to THIS FILE. Your image is in /public.
import heroImg from "../public/hero-novacare.jpg";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] md:min-h-[85vh] h-auto overflow-hidden flex items-center justify-center">
      {/* Background image fills the container */}
      <Image
        src={heroImg}
        alt="Compassionate in-home nursing care"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Readability overlay */}
      <div className="absolute inset-0 bg-black/45" aria-hidden="true" />

      {/* Text content */}
      <div className="relative z-10 w-full max-w-6xl px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          NovaCare Nursing
        </h1>
        <p className="text-lg md:text-2xl mb-6 text-white/90 max-w-2xl mx-auto">
          Premium Nursing, Heartfelt Care in Hobart and Surrounds, Tasmania
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/contact"
            className="inline-block rounded-xl bg-[#C6A662] text-[#0B2D5C] px-6 py-3 font-semibold shadow-md hover:opacity-90 transition"
          >
            Book a Consultation
          </a>
          <a
            href="/services"
            className="inline-block rounded-xl border border-white px-6 py-3 font-semibold hover:bg-white/10 transition"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}
