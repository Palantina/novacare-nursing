import Head from "next/head";
import Link from "next/link";

const heroSrc = "/hero-novacare.webp";
const brandGold = "#C6A662"; // corrected to your brand palette

export default function Hero() {
  return (
    <>
      {/* Preload to avoid any flash/delay */}
      <Head>
        <link rel="preload" as="image" href={heroSrc} />
      </Head>

      <section
        className="relative flex items-center min-h-[100svh] md:min-h-screen overflow-x-hidden"
        style={{
          backgroundImage: `url(${heroSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Soft overlay for contrast */}
        <div className="absolute inset-0 bg-black/35" aria-hidden="true" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg leading-tight text-balance">
            NovaCare Nursing
          </h1>

          <p className="mt-4 text-lg md:text-xl opacity-95 text-balance">
            Premium Nursing, Heartfelt Care in Hobart and Surrounds, Tasmania
          </p>

          <p className="mt-4 inline-block rounded-full bg-white/10 px-4 py-2 text-sm md:text-base backdrop-blur">
            Support at Home: ask your provider to engage NovaCare Nursing for expert nursing care • NDIS-funded nursing
            available where included in your plan
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold"
              style={{
                backgroundColor: brandGold,
                color: "#0B2D5C",
              }}
            >
              Book a Consultation
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold border"
              style={{
                borderColor: "#FFFFFF",
                borderWidth: 2,
                color: "#FFFFFF",
                background: "transparent",
              }}
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
