import Head from "next/head";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ContactCta from "../components/ContactCta";
import ServicesFaq from "../components/ServicesFaq"; // FAQ component

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
      // ⬇︎ RN reference updated
      "Oversight by a Clinical Nursing Home Care Consultant (Registered Nurse): NDIS SIL management & complex case oversight",
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

// FAQs (and schema) with RN references updated
const faqs = [
  {
    question: "Do I need a GP referral to book private home nursing?",
    answer:
      "No referral is required. You can contact us directly to discuss your needs. We can liaise with your GP or specialists if helpful for your care plan.",
  },
  {
    question: "Do you support NDIS participants, including high-intensity needs?",
    answer:
      "Yes. We support NDIS participants and provide high-intensity supports delivered or supervised by a Clinical Nursing Home Care Consultant (Registered Nurse), including tracheostomy care, enteral feeding, complex wound care and more.",
  },
  {
    question: "What areas do you service?",
    answer:
      "Hobart & surrounding regions. If you’re unsure whether we can reach your area, contact us — we’ll confirm availability.",
  },
  {
    question: "How do I book and how quickly can you start?",
    answer:
      "Use our contact form or call 0488 086 271 to discuss your needs. Start times depend on your support level and schedule, but we aim to arrange care promptly.",
  },
  {
    question: "What happens in the first visit?",
    answer:
      "A Clinical Nursing Home Care Consultant (Registered Nurse) reviews your goals, medical history and current supports, then plans safe, tailored care with clear documentation.",
  },
];

export default function Services() {
  return (
    <>
      <Head>
        <title>Home Nursing Services | Post-Operative, Palliative & Complex Care | NovaCare Nursing Hobart</title>
        <meta
          name="description"
          content="Explore NovaCare Nursing’s private home care services in Hobart — including post-operative recovery, palliative support, complex wound care & NDIS high-intensity supports delivered by a Clinical Nursing Home Care Consultant (Registered Nurse)."
        />

        {/* FAQ schema mirrors the Q&A content above */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map((f) => ({
                "@type": "Question",
                "name": f.question,
                "acceptedAnswer": { "@type": "Answer", "text": f.answer },
              })),
            }),
          }}
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
      </main>

      {/* FAQ section */}
      <ServicesFaq faqs={faqs} />

      {/* CTA banner */}
      <ContactCta />

      <SiteFooter />
    </>
  );
}
