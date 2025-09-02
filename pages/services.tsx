import Head from "next/head";
import Image from "next/image";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const BRAND = { blue: "#0B2D5C", gold: "#C6A662" };

const services = [
  {
    title: "Post-Operative Support",
    points: [
      "Vital signs & recovery monitoring",
      "Wound care & dressing changes",
      "Medication administration & pain control",
      "Mobility, safety & falls prevention",
    ],
  },
  {
    title: "Chronic & Complex Care",
    points: [
      "Diabetes, cardiac, respiratory & neuro support",
      "Care plans, education & coaching",
      "Medication management & injection support",
      "Coordination with your GP & specialists",
    ],
  },
  {
    title: "Palliative & Respite",
    points: [
      "Comfort-focused symptom management",
      "Dignified end-of-life support",
      "Family guidance & respite coverage",
      "Holistic, compassionate approach",
    ],
  },
];

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | NovaCare Nursing</title>
        <meta
          name="description"
          content="Private home nursing services in Hobart — post-operative care, chronic & complex support, palliative & respite care."
        />
        <meta property="og:title" content="Services | NovaCare Nursing" />
        <meta property="og:description" content="Premium private home nursing in Hobart & surrounds — post-op, chronic care, and palliative support." />
        <meta property="og:image" content="/hero-novacare.jpg" />
      </Head>

      <SiteHeader />

      {/* Banner */}
      <section className="relative h-40 md:h-48">
        <Image
          src="/hero-novacare.jpg"
          alt="NovaCare Nursing Services"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0F2438]/50" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Our <span className="text-[#C6A662]">Services</span>
          </h1>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-12">
        <p className="text-center opacity-80 mb-8">
          Skilled, premium home nursing — tailored to your needs.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 hover:border-[#C6A662] transition"
            >
              <h3 className="font-semibold text-xl text-[#0B2D5C]">
                {s.title}
              </h3>
              <ul className="mt-3 list-disc pl-5 space-y-1 text-sm opacity-90">
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-block rounded-xl px-6 py-3 font-semibold bg-[#C6A662] text-[#0B2D5C] hover:opacity-90 transition"
          >
            Enquire about availability
          </a>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
