import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const brand = {
  blue: "#0B2D5C",
  gold: "#C6A662",
  bg: "#F7F4EF",
  text: "#232323",
};

export default function Home() {
  return (
    <>
      {/* SEO + favicon */}
      <Head>
        <title>NovaCare Nursing | Premium Home Nursing in Hobart</title>
        <meta
          name="description"
          content="Premium, discreet and compassionate private nursing in Hobart & surrounds. Post-op care, chronic & complex care, and palliative support by Registered Nurse Palantina Hughes."
        />
        <meta property="og:title" content="NovaCare Nursing | Premium Home Nursing in Hobart" />
        <meta property="og:description" content="Premium Nursing, Heartfelt Care — at home." />
        <meta property="og:image" content="/NovaCare_Logo.svg" />
        <meta property="og:url" content="https://www.novacarenursing.com.au" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      </Head>

      <div className="min-h-screen" style={{ backgroundColor: brand.bg, color: brand.text }}>
        {/* HEADER: Blue banner with logo left, nav right */}
        <header style={{ backgroundColor: brand.blue }} className="shadow-sm">
          <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/NovaCare_Logo.svg"
                alt="NovaCare Nursing Logo"
                width={160}
                height={70}
                priority
              />
            </Link>

            {/* Navigation */}
            <nav className="flex items-center gap-6">
              <Link href="#about" className="text-white font-medium hover:opacity-80 transition">
                About
              </Link>
              <Link href="#services" className="text-white font-medium hover:opacity-80 transition">
                Services
              </Link>
              <Link href="#contact" className="text-white font-medium hover:opacity-80 transition">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {/* HERO */}
        <section className="mx-auto max-w-6xl px-4 mt-8">
          <div className="rounded-2xl bg-white shadow-sm border border-gray-100 p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-center" style={{ color: brand.blue }}>
              Premium Nursing, Heartfelt Care — at Home
            </h1>
            <p className="mt-4 text-center text-lg opacity-90">
              Discreet, skilled, and compassionate home care in Hobart &amp; surrounds.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="mailto:info@novacarenursing.com.au?subject=Consultation Request"
                className="rounded-xl px-6 py-3 font-semibold"
                style={{ backgroundColor: brand.gold, color: brand.blue }}
              >
                Book a Consultation
              </a>
              <a
                href="#services"
                className="rounded-xl px-6 py-3 font-semibold border"
                style={{ borderColor: brand.blue, color: brand.blue }}
              >
                View Services
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              {[
                "AHPRA Registered Nurse",
                "Fully Insured & Police Checked",
                "Locally Based in Hobart",
              ].map((t) => (
                <div key={t} className="rounded-xl border border-gray-100 p-4 bg-[#FAFAFA]">
                  <p className="text-sm font-medium" style={{ color: brand.blue }}>
                    {t}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VALUE PROPS */}
        <section className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Premium, Discreet Care", desc: "High-end service with warmth and respect." },
              { title: "Home Comfort & Dignity", desc: "Care tailored to your routines and needs." },
              { title: "Continuity & Reliability", desc: "One trusted nurse — consistent support." },
              { title: "Evidence-Based Practice", desc: "Clinical excellence with a human touch." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-lg" style={{ color: brand.blue }}>{item.title}</h3>
                <p className="mt-2 text-sm opacity-80">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="mx-auto max-w-6xl px-4 pb-6">
          <h2 className="text-3xl font-bold font-serif text-center" style={{ color: brand.blue }}>
            Services
          </h2>
          <p className="opacity-80 mt-2 text-center">Skilled, private nursing at home — tailored to you.</p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Post-Operative Support",
                desc: "Monitoring, medication management, wound care, pain control, safe mobility.",
              },
              {
                title: "Chronic & Complex Care",
                desc: "Diabetes, cardiac, respiratory, neuro care with personalised plans.",
              },
              {
                title: "Palliative & Respite",
                desc: "Comfort-focused care, symptom management, and family support.",
              },
            ].map((s) => (
              <div key={s.title} className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-xl" style={{ color: brand.blue }}>{s.title}</h3>
                <p className="mt-2 text-sm opacity-90">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mx-auto max-w-6xl px-4 pb-12">
          <div className="rounded-2xl bg-white shadow-sm border border-gray-100 p-8 md:p-10">
            <h2 className="text-3xl font-bold font-serif text-center" style={{ color: brand.blue }}>
              Meet Your Consultant
            </h2>
            <div className="mt-6 grid md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="font-semibold">Palantina Hughes, Registered Nurse</p>
                <p className="italic">Clinical Home Care Nurse Consultant</p>
                <p className="mt-4 opacity-90">
                  I provide premium, compassionate nursing in the comfort of your home—balancing clinical excellence
                  with genuine warmth. Every visit is personalised to protect dignity, independence, and peace of mind.
                </p>
                <ul className="mt-4 text-sm list-disc pl-5 opacity-90">
                  <li>AHPRA registered, fully insured & police checked</li>
                  <li>NDIS & private clients welcome</li>
                  <li>Hobart & Surrounds, Tasmania</li>
                </ul>
                <div className="mt-6">
                  <a
                    href="mailto:info@novacarenursing.com.au?subject=Consultation Request"
                    className="rounded-xl px-5 py-3 font-semibold"
                    style={{ backgroundColor: brand.gold, color: brand.blue }}
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
              <div className="relative h-64 md:h-72 rounded-2xl overflow-hidden shadow">
                <Image
                  src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop"
                  alt="Nurse providing care at home"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA STRIP */}
        <section id="contact" className="py-10" style={{ backgroundColor: brand.blue, color: "white" }}>
          <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-serif font-bold">Ready to talk?</h3>
              <p className="opacity-90">Email or call to book a private consultation.</p>
            </div>
            <div className="flex gap-3">
              <a
                href="mailto:info@novacarenursing.com.au"
                className="rounded-xl px-5 py-3 font-semibold"
                style={{ backgroundColor: brand.gold, color: brand.blue }}
              >
                info@novacarenursing.com.au
              </a>
              <a href="tel:+61488086271" className="rounded-xl px-5 py-3 font-semibold border border-white">
                0488 086 271
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/NovaCare_Logo_Transparent.svg"
                alt="NovaCare Nursing Logo"
                width={150}
                height={64}
              />
              <span className="text-sm" style={{ color: brand.blue }}>
                Premium Nursing, Heartfelt Care
              </span>
            </div>
            <div className="text-sm opacity-80">
              © {new Date().getFullYear()} NovaCare Nursing — Hobart &amp; Surrounds, Tasmania
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
