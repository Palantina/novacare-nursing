import Head from "next/head";
import Image from "next/image";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const BRAND = { blue: "#0B2D5C", gold: "#C6A662" };

export default function About() {
  return (
    <>
      <Head>
        <title>About | NovaCare Nursing</title>
        <meta
          name="description"
          content="Learn about NovaCare Nursing in Hobart — premium, private, and compassionate home nursing led by Registered Nurse Palantina Hughes."
        />
        <meta property="og:title" content="About | NovaCare Nursing" />
        <meta property="og:description" content="Premium, private and compassionate home nursing across Hobart & surrounds." />
        <meta property="og:image" content="/hero-novacare.jpg" />
      </Head>

      <SiteHeader />

      {/* Slim banner with the same brand photo + overlay for continuity */}
      <section className="relative h-48 md:h-56">
        <Image
          src="/hero-novacare.jpg"
          alt="NovaCare Nursing, compassionate home care"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0F2438]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2438]/60 via-transparent to-transparent" />
        <div className="relative z-10 h-full flex items-center">
          <div className="mx-auto max-w-5xl w-full px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              About <span className="text-[#C6A662]">NovaCare Nursing</span>
            </h1>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-5xl px-4 py-12">
        {/* Intro */}
        <section className="space-y-4 text-[1.05rem] leading-7">
          <p>
            NovaCare Nursing provides premium, discreet and compassionate nursing in the comfort of your home across
            Hobart and surrounds. We combine clinical excellence with a warm, respectful approach so you feel safe,
            supported, and cared for.
          </p>
          <p>
            Led by Registered Nurse <strong>Palantina Hughes</strong>, NovaCare specialises in tailored clinical home care —
            working closely with you, your family, and your healthcare team to achieve the best outcomes.
          </p>
        </section>

        {/* Pillars */}
        <section className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { title: "AHPRA Registered", desc: "Professional, accountable clinical standards." },
            { title: "Premium & Discreet", desc: "Confidential, respectful, and reliable care." },
            { title: "Local to Hobart", desc: "Flexible availability across Hobart & surrounds." },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100"
            >
              <h3 className="font-semibold text-[#0B2D5C]">{card.title}</h3>
              <p className="mt-2 text-sm opacity-90">{card.desc}</p>
            </div>
          ))}
        </section>

        {/* Credentials */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-[#0B2D5C]">Credentials & Safeguards</h2>
          <ul className="mt-4 list-disc pl-5 space-y-2">
            <li>AHPRA Registered Nurse</li>
            <li>Current Police Check & Working with Vulnerable People (WWVP)</li>
            <li>Fully insured for private practice</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="mt-12">
          <div className="rounded-2xl border border-[#C6A662]/30 bg-[#0B2D5C] text-white p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold">Ready to talk about care?</h3>
              <p className="text-white/90">Book a free, no-obligation consultation.</p>
            </div>
            <a
              href="/contact"
              className="inline-block rounded-xl bg-[#C6A662] text-[#0B2D5C] px-5 py-3 font-medium hover:opacity-90 transition"
            >
              Book a Consultation
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
