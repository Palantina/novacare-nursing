import Image from "next/image";
import Link from "next/link";

// ✅ Use public URL instead of importing from /public
const heroSrc = "/hero-novacare.webp";

const brandBlue = "#0B2D5C";
const brandGold = "#C6A642";

export default function Hero() {
  return (
    <section className="relative h-[78vh] min-h-[528px] flex items-center">
      {/* Optimized hero image */}
      <Image
        src={heroSrc} // public image path
        alt="Compassionate nursing care at home"
        fill
        priority // preload: hero is above-the-fold
        quality={60} // small but crisp thanks to overlay
        placeholder="empty" // skip blurDataURL (no import needed)
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />

      {/* Subtle overlay improves readability + allows stronger compression */}
      <div className="absolute inset-0 bg-black/35" aria-hidden="true" />

      {/* Hero text content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
          Compassionate Home Nursing in Hobart
        </h1>
        <p className="mt-6 text-lg md:text-xl drop-shadow-md">
          Premium, private, and respectful nursing care tailored to you and your family.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-xl px-6 py-3 font-semibold border shadow-md"
            style={{ borderColor: brandGold, color: brandGold }}
          >
            Contact Us
          </Link>
          <Link
            href="/about"
            className="rounded-xl px-6 py-3 font-semibold border shadow-md"
            style={{ borderColor: brandBlue, color: brandBlue }}
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
