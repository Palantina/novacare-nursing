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

      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
  <Link
    href="/contact"
    className="rounded-xl px-6 py-3 font-semibold"
    style={{ backgroundColor: brand.gold, color: brand.blue }}
  >
    Book a Consultation
  </Link>
  <Link
    href="/services"
    className="rounded-xl px-6 py-3 font-semibold"
    style={{ backgroundColor: brand.gold, color: brand.blue }}
  >
    View Services
  </Link>
  <Link
    href="/about"
    className="rounded-xl px-6 py-3 font-semibold"
    style={{ backgroundColor: brand.gold, color: brand.blue }}
  >
    Learn More
  </Link>
</div>


              {/* Nav (right) */}
              <nav
                style={{
                  float: "right",
                  whiteSpace: "nowrap",
                  display: "block",
                  marginTop: "20px",   // vertically align with logo
                }}
                className="text-white font-semibold"
              >
                <Link href="/about" className="hover:opacity-80 transition" style={{ fontSize: "20px", marginLeft: "40px" }}>About</Link>
                <Link href="/services" className="hover:opacity-80 transition" style={{ fontSize: "20px", marginLeft: "40px" }}>Services</Link>
                <Link href="/contact" className="hover:opacity-80 transition" style={{ fontSize: "20px", marginLeft: "40px" }}>Contact</Link>
              </nav>
            </div>
          </div>
        </header>
        {/* ===== /HEADER ===== */}

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
