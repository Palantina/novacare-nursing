// components/Hero.tsx
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-novacare.jpg"
          alt="Nurse holding a patient's hands at home during warm sunset"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Soft navy-to-transparent overlay for text readability */}
        <div className="absolute inset-0 bg-[#0F2438]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2438]/60 via-[#0F2438]/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-2xl text-cream"
        >
          <h1 className="font-serif text-4xl md:text-5xl leading-tight drop-shadow-sm">
            Premium Nursing, <span className="text-[#D4AF37]">Heartfelt Care</span>
          </h1>
          <p className="mt-4 text-base md:text-lg text-white/90">
            Private one-on-one nursing care, post-hospital recovery, chronic condition support,
            and companionship—delivered in the comfort of your home.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-[#D4AF37] px-4 py-2 text-[#0F2438] font-medium hover:opacity-90 transition"
            >
              Book a Free Consult
            </Link>
            <Link
              href="/services"
              className="rounded-xl border border-white/60 px-4 py-2 text-white hover:bg-white/10 transition"
            >
              Explore Services
            </Link>
          </div>

          {/* Quick highlights */}
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm text-white/90">
            <li className="rounded-lg bg-black/20 px-3 py-2 ring-1 ring-white/10">Registered Nurses</li>
            <li className="rounded-lg bg-black/20 px-3 py-2 ring-1 ring-white/10">Home-Based Care</li>
            <li className="rounded-lg bg-black/20 px-3 py-2 ring-1 ring-white/10">Kind, Professional & Trusted</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
