import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden h-[75vh] md:h-[80vh] flex items-center">
      {/* Background image (covers without stretching) */}
      <Image
        src="/hero-novacare.jpg"
        alt="Compassionate in-home nursing care"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/45" aria-hidden />

      {/* Optional gradient from left (looks premium, hides banding on edges) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(11,45,92,0.55) 0%, rgba(11,45,92,0.25) 45%, rgba(0,0,0,0) 80%)",
        }}
        aria-hidden
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 w-full mx-auto max-w-6xl px-4"
      >
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            NovaCare Nursing
          </h1>
          <p className="text-lg md:text-xl mb-6 text-white/95">
            Premium Nursing, Heartfelt Care in Hobart and Surrounds, Tasmania
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/contact"
              className="inline-block rounded-2xl bg-brand-gold text-brand-blue px-6 py-3 font-semibold shadow-lg hover:opacity-90 transition"
            >
              Book a Consultation
            </a>
            <a
              href="/services"
              className="inline-block rounded-2xl border border-white/80 text-white px-6 py-3 hover:bg-white/10 transition"
            >
              Explore Services
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
