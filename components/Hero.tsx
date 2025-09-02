import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen">
      {/* Fullscreen image */}
      <Image
        src="/hero_novacare.jpg" // ✅ exact file name
        alt="Compassionate in-home nursing care"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

      {/* Text overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          NovaCare Nursing
        </h1>
        <p className="text-lg md:text-2xl mb-6 text-white/90 max-w-2xl">
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
