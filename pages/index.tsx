import Head from "next/head";
import Link from "next/link";
import SiteFooter from "../components/SiteFooter";

const brand = {
  blue: "#0B2D5C",
  gold: "#C6A662",
  bg: "#F7F4EF",
  text: "#232323",
};

export default function Home() {
  return (
    <>
      <Head>
        <title>NovaCare Nursing | Premium Home Nursing in Hobart</title>
        <meta
          name="description"
          content="Premium, discreet and compassionate private nursing in Hobart & surrounds. Post-op care, chronic & complex care, and palliative support by Registered Nurse Palantina Hughes."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen" style={{ backgroundColor: brand.bg, color: brand.text }}>
        {/* HEADER — grid layout ensures logo left, nav right */}
        <header style={{ backgroundColor: brand.blue }} className="shadow-sm">
          <div
            className="mx-auto max-w-6xl px-4 py-4"
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              alignItems: "center",
              columnGap: "24px",
            }}
          >
            {/* Left: Logo (no shrink) */}
            <Link href="/" className="flex items-center gap-2" style={{ minWidth: 0 }}>
              <img
                src="/NovaCare_Logo.svg"
                alt="NovaCare Nursing Logo"
                width={230}
                height={104}
                style={{ display: "block" }}
              />
            </Link>

            {/* Right: Nav (always right-aligned, single line) */}
            <nav
              style={{
                justifySelf: "end",
                display: "flex",
                alignItems: "center",
                gap: "48px",          // wide gaps on desktop
                whiteSpace: "nowrap", // never wrap under the logo
                fontWeight: 700,
                fontSize: "20px",     // desktop size
                color: "white",
              }}
              className="sm:gap-8 sm:text-lg md:gap-12 md:text-xl"
            >
              <Link href="/about" className="hover:opacity-80 transition">About</Link>
              <Link href="/services" className="hover:opacity-80 transition">Services</Link>
              <Link href="/contact" className="hover:opacity-80 transition">Contact</Link>
            </nav>
          </div>
        </header>

        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 mt-8">
          <div className="rounded-2xl bg-white shadow-sm border border-gray-100 p-8 md:p-12 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold" style={{ color: brand.blue }}>
              Premium Nursing, Heartfelt Care — at Home
            </h1>
            <p className="mt-4 text-lg opacity-90">
              Discreet, skilled home nursing in Hobart & surrounds.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="rounded-xl px-6 py-3 font-semibold"
                style={{ backgroundColor: brand.gold, color: brand.blue }}
              >
                Book a Consultation
              </Link>
              <Link
                href="/services"
                className="rounded-xl px-6 py-3 font-semibold border"
                style={{ borderColor: brand.blue, color: brand.blue }}
              >
                View Services
              </Link>
            </div>
          </div>
        </section>

        {/* Quick value props */}
        <section className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "AHPRA Registered", desc: "Experienced clinical care." },
              { title: "Premium & Discreet", desc: "Warm, respectful service." },
              { title: "Home Comfort", desc: "Care tailored to you." },
              { title: "Local to Hobart", desc: "Flexible & reliable." },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 text-center"
              >
                <h3 className="font-semibold" style={{ color: brand.blue }}>{item.title}</h3>
                <p className="mt-2 text-sm opacity-80">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <SiteFooter />

        {/* Sticky mobile CTA */}
        <div className="fixed bottom-4 right-4 z-50 md:hidden">
          <Link
            href="/contact"
            className="px-5 py-3 rounded-full font-semibold shadow-lg"
            style={{ backgroundColor: brand.gold, color: brand.blue }}
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </>
  );
}
