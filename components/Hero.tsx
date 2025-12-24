import Head from "next/head";
import Link from "next/link";

const heroSrc = "/hero-novacare.webp";
const brandGold = "#C6A662";

export default function Hero() {
  return (
    <>
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
        <div className="absolute inset-0 bg-black/35" aria-hidden="true" />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center text-white">
          {/* Avoid duplicating the brand name (the logo lockup is already in the header). */}
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg leading-tight text-balance">
            Premium Nursing, Heartfelt Care
          </h1>

          <p className="mt-4 text-lg md:text-xl opacity-95 text-balance">
            In-home nursing across Hobart and surrounds, Tasmania
          </p>

          <p className="mt-4 inline-block rounded-full bg-white/10 px-4 py-2 text-sm md:text-base backdrop-blur">
            Private nursing: book directly • Support at Home: ask your provider to engage NovaCare Nursing for specialist RN
            care • NDIS: nursing supports available when included in your plan
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold"
              style={{ backgroundColor: brandGold, color: "#0B2D5C" }}
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

            <Link
              href="/private-nursing"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold border"
              style={{
                borderColor: brandGold,
                borderWidth: 2,
                color: brandGold,
                background: "transparent",
              }}
            >
              Private Nursing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
