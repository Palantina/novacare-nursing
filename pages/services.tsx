import Head from "next/head";
import Link from "next/link"; // ✅ added
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ContactCta from "../components/ContactCta";

const brand = { blue: "#0B2D5C", gold: "#C6A662" };

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
    title: "Palliative Care & Respite",
    points: [
      "Comfort-focused symptom management",
      "Dignified end-of-life support",
      "Family guidance & respite coverage",
      "Holistic, compassionate approach",
    ],
  },
  {
    title: "High Intensity & Specialist Nursing Supports",
    points: [
      "Ventilator Support",
      "Tracheostomy & Laryngectomy Support",
      "Dysphagia Support",
      "Enteral Feeding Support",
      "Complex Bowel Care",
      "Epilepsy & Seizure Support",
      "Complex Wound Care Support",
      "Subcutaneous & Intramuscular Injections",
      "Urinary & Suprapubic Catheter Support",
      "Oversight by a Registered Nurse (RN): NDIS SIL management & complex case oversight",
      "Education, supervision, and governance to ensure the highest standard of safe, capable care",
    ],
    highlight: true,
  },
  {
    title: "Subcontracted Nursing Care for Aged Care Providers",
    points: [
      "Short-notice, reliable coverage with clear documentation",
      "Policy-aligned practice, fully insured & compliant",
      "Personal, reliable and professional nursing care for Home and Community Care providers",
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
          content="Private home nursing services in Hobart — post-operative care, chronic & complex support, palliative care & respite, high intensity nursing supports with RN oversight, and subcontracted nursing for aged care providers."
        />
      </Head>

      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center" style={{ color: brand.blue }}>
          Our Services
        </h1>
        <p className="text-center opacity-80 mt-3">
          Skilled, premium nursing — for NDIS participants, private clients, and aged care providers.
        </p>

        {/* ✅ Small link to Fees under the intro */}
        <div className="mt-4 text-center">
          <Link
            href="/fees"
            className="inline-block rounded-xl px-5 py-3 font-semibold hover:opacity-90 transition"
            style={{ backgroundColor: brand.gold, color: brand.blue }}
          >
            Fees &amp; Pricing
          </Link>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className={`rounded-2xl p-6 shadow-sm border transition
                ${s.highlight ? "bg-[#F7F4EF] border-[#C6A662]" : "bg-white border-gray-100"}
              `}
            >
              <h3 className="font-semibold text-xl" style={{ color: brand.blue }}>
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

        {/* ✅ Optional second link before the CTA (remove this block if you only want one button) */}
        <div className="mt-10 text-center">
          <Link
            href="/fees"
            className="inline-block rounded-xl px-5 py-3 font-semibold hover:opacity-90 transition"
            style={{ backgroundColor: brand.gold, color: brand.blue }}
          >
            View Fees &amp; Pricing
          </Link>
        </div>
      </main>

      {/* CTA banner */}
      <ContactCta />

      <SiteFooter />
    </>
  );
}
