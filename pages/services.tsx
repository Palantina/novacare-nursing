// pages/services.tsx
import Head from "next/head";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ContactCta from "../components/ContactCta";
import ServicesFaq from "../components/ServicesFaq";

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
      "Cannulation & Intravenous (IV) Infusions",
      "Oversight by a Registered Nurse (RN): NDIS SIL management & complex case oversight",
      "Education, supervision, and governance to ensure the highest standard of safe, capable care",
    ],
    highlight: true,
  },
  {
    title: "Clinical Nursing Assessments",
    points: [
      "Initial and ongoing clinical assessment to monitor progress and modify care.",
      "Medication reviews for safety and efficacy.",
      "Risk assessments for falls, pressure injuries, nutrition, and mental health.",
      "Coordination of care plans with GPs, Specialists, and Allied Health.",
      "Record-keeping and NDIS reporting for compliance.",
      "Behavioural assessments with tailored support strategies (non-NDIS).",
      "Cognitive function reviews to inform care planning.",
      "Routine pain assessments for effective management.",
      "Continence screening to ensure comfort and dignity.",
    ],
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
          content="Private home nursing services in Hobart — post-operative care, chronic & complex support, palliative care & respite, high-intensity nursing supports with RN oversight, clinical assessments, and subcontracted nursing for aged care providers. Support at Home budgets may be used for eligible nursing services."
        />
      </Head>

      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 py-12">
        <h1
          className="text-3xl md:text-4xl font-bold text-center"
          style={{ color: brand.blue }}
        >
          Our Services
        </h1>

        <p className="text-center opacity-80 mt-3">
          Skilled, premium nursing — for Support at Home clients (via your provider),
          NDIS participants, Private clients and Aged Care Providers.
        </p>

        {/* Funding / registration callout */}
        <div className="mt-6 rounded-2xl border border-[#C6A662]/40 bg-[#F7F4EF] p-5">
          <p className="font-semibold" style={{ color: brand.blue }}>
            Support at Home: funding and provider choice
          </p>
          <p className="mt-2 text-[0.98rem] leading-7 opacity-90">
            <strong>Support at Home (SAH)</strong> uses a <strong>single-provider</strong> model — one provider holds your
            service agreement and manages your SAH budget.
          </p>
          <p className="mt-2 text-[0.98rem] leading-7 opacity-90">
            Under SAH, <strong>nursing is paid from the same overall pooled budget</strong> as other supports (for example,
            personal care and domestic assistance). There is <strong>no participant co-contribution</strong> for clinical
            supports such as nursing care, but nursing costs still draw down the pooled SAH budget.
          </p>
          <p className="mt-2 text-[0.98rem] leading-7 opacity-90">
            You can ask your SAH provider to engage <strong>NovaCare Nursing</strong> as an <strong>associated provider</strong>{" "}
            for nursing services (subject to their contracting and governance requirements), while you continue to use their
            network for other supports.
          </p>
          <p className="mt-2 text-[0.98rem] leading-7 opacity-90">
            <strong>For Support at Home providers:</strong> NovaCare Nursing is available to contract as an associated provider
            to deliver expert clinical nursing, documentation and escalation pathways that support safe, high-quality care.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className={`rounded-2xl p-6 shadow-sm border transition ${
                s.highlight
                  ? "bg-[#F7F4EF] border-[#C6A662]"
                  : "bg-white border-gray-100"
              }`}
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

        {/* FAQ section */}
        <ServicesFaq />

        {/* Fees & Pricing button at the bottom */}
        <div className="mt-10 text-center">
          <Link
            href="/fees"
            className="inline-block rounded-xl px-5 py-3 font-semibold hover:opacity-90 transition"
            style={{ backgroundColor: brand.gold, color: brand.blue }}
          >
            Fees &amp; Pricing
          </Link>
        </div>
      </main>

      <ContactCta />
      <SiteFooter />
    </>
  );
}
