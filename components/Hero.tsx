import Image from "next/image";
import Link from "next/link";

// Use public folder path instead of importing
const heroSrc = "/hero-novacare.webp";

const brandBlue = "#0B2D5C";
const brandGold = "#C6A642";

export default function Hero() {
  return (
    <section className="relative h-[78vh] min-h-[560px] flex items-center">
      {/* Background image */}
      <Image
        src={heroSrc}
        alt="NovaCare Nursing"
        fill
        priority // ensures no delay in hero load
        quality={70}
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/35" aria-hidden="true" />

      {/* Hero content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
          NovaCare Nursing
        </h1>

        <p className="mt-5 text-lg md:text-2xl leading-snug drop-shadow-md">
          Premium Nursing, Heartfelt Care in Hobart and Surrounds,
          <br className="hidden md:block" />
          Tasmania
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Gold filled button */}
          <Link
            href="/contact"
            className="rounded-xl px-6 py-3 font-semibold shadow-md border"
            style={{
              backgroundColor: brandGold,
              borderColor: brandGold,
              color: "#0B0B0B",
            }}
          >
            Book a Consultation
          </Link>

          {/* Navy outline button */}
          <Link
            href="/services"
            className="rounded-xl px-6 py-3 font-semibold shadow-md border"
            style={{
              borderColor: brandBlue,
              color: brandBlue,
              background: "transparent",
            }}
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}

