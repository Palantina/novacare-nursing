import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative h-[80vh] flex items-center justify-center bg-center bg-cover"
      style={{ backgroundImage: "url('/hero-novacare.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true"></div>

      {/* Text content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative text-center text-white max-w-2xl px-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">NovaCare Nursing</h1>
        <p className="text-lg md:text-xl mb-6">
          Premium Nursing, Heartfelt Care in Hobart and Surrounds, Tasmania
        </p>
        <a
          href="/contact"
          className="inline-block bg-brand-gold text-brand-blue px-6 py-3 rounded-2xl font-semibold shadow-lg hover:opacity-90 transition"
        >
          Book a Consultation
        </a>
      </motion.div>
    </section>
  );
}
