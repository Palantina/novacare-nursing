import Head from "next/head";
import Link from "next/link";

const heroSrc = "/hero-novacare.webp";
const brandGold = "#C6A642";

export default function Hero() {
  return (
    <>
      {/* Preload hero image */}
      <Head>
        <link rel="preload" as="image" href={heroSrc} />
      </Head>

      <section
        className="relative flex items-center"
        style={{
          height: "78vh",
          minHeight: 560,
          backgroundImage: `url(${heroSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/35" aria-hidden="true" />

        {/* Hero content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
            NovaCare Nursing
          </h1>

          <p className="mt-5 text-lg md:text-2xl leading-snug drop-shadow-md">
            Premium Nursing, Heartfelt Care in Hobart and Surrounds,
            <br className="hidden md:block" />
            Tasmania
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            {/* Gold filled button */}
            <Link
              href="/contact"
              className="rounded-xl px-5 py-3 font-semibold shadow-md border"
              style={{
                backgroundColor: brandGold,
                borderColor: brandGold,
                color: "#0B0B0B",
              }}
            >
              Book a Consultation
            </Link>

            {/* White outline button */}
            <Link
              href="/services"
              className="rounded-xl px-5 py-3 font-semibold shadow-md border"
              style={{
                borderColor: "#FFFFFF",
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
