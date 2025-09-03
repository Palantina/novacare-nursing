import Image from "next/image";
import Link from "next/link";

// ✅ STATIC import lets Next auto-make a tiny blur + perfect sizes
import hero from "../public/hero-novacare.webp";

const brandBlue = "#0B2D5C";
const brandGold = "#C6A662";

export default function Hero() {
  return (
    <section className="relative h-[78vh] min-h-[520px] flex items-center">
      {/* Optimized hero image */}
      <Image
        src={hero}                 // local static import (webp)
        alt="Compassionate nursing care at home"
        fill
        priority                   // preload: hero is above-the-fold
        quality={60}               // small but crisp thanks to overlay
        placeholder="blur"         // uses hero.blurDataURL automatically
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />

      {/* Subtle overlay improves readability + allows stronger compression */}
      <div className="absolute inset-0 bg-black/35" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
          NovaCare Nursing
        </h1>
        <p className="mt-4 text-lg md:text-xl font-medium drop-shadow">
          Premium Nursing, Heartfelt Care in Hobart and Surrounds, Tasmania
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <Link
            href="/contact"
            className="rounded-xl px-5 py-3 font-semibold shadow-lg"
            style={{ backgroundColor: brandGold, color: brandBlue }}
          >
            Book a Consultation
          </Link>
          <Link
            href="/services"
            className="rounded-xl px-5 py-3 font-semibold border shadow-lg"
            style={{ borderColor: "rgba(255,255,255,0.85)" }}
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}

