import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const brand = { blue: "#0B2D5C", gold: "#C6A662" };

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Background image */}
      <Image
        src="/hero-novacare.jpg"
        alt="Compassionate in-home nursing care"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          NovaCare Nursing
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl">
          Premium Nursing, Heartfelt Care in Hobart and Surrounds, Tasmania
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-[#C6A662] text-[#0B2D5C] px-6 py-3 rounded-xl font-semibold shadow-lg hover:opacity-90 transition"
          >
            Book a Consultation
          </Link>
          <Link
            href="/services"
            className="border border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#0B2D5C] transition"
          >
            Explore Services
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
