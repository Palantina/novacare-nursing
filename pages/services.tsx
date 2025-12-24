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
    bullets: [
      "Post-operative wound care & monitoring",
      "Early recognition of deterioration",
      "Pain and symptom monitoring (within scope)",
      "Care plan refinement and escalation planning",
    ],
  },
  {
    title: "Wound Care & Skin Integrity",
    bullets: [
      "Wound assessment and management (including complex/chronic wounds)",
      "Measurement and dressing plan support",
      "Skin integrity monitoring",
      "Pressure injury risk support and prevention inputs",
      "Documentation and escalation triggers",
    ],
  },
  {
    title: "Catheter Care (IDC / SPC)",
    bullets: [
      "Indwelling urinary catheter (IDC) care",
      "Suprapubic catheter (SPC) care",
      "Troubleshooting: bypassing/leakage and blockage risk flags",
      "Escalation thresholds and documentation",
      "Client/carer education (within scope)",
    ],
  },
  {
    title: "Medication Support",
    bullets: [
      "Medication administration support (within scope)",
      "Medication safety checks and reconciliation support",
      "Monitoring for adverse effects and escalation triggers",
      "Medication reviews for safety and efficacy.",
      "Risk assessment and escalation for medication changes.",
    ],
  },
  {
    title: "Palliative & End-of-Life Nursing",
    bullets: [
      "Comfort-focused nursing support",
      "Symptom monitoring and escalation planning",
      "Family/carer support and practical guidance",
      "Coordination with GP / palliative care services",
    ],
  },
  {
    title: "Behaviour Support Planning",
    bullets: [
      "Dementia-related responsive behaviours (BPSD)",
      "Functional formulation and practical strategies",
      "ABC (Antecedent–Behaviour–Consequence) charts and monitoring tools",
      "Escalation pathways and review cadence",
      "Least-restrictive practice approach (where applicable)",
    ],
  },
  {
    title: "Clinical Governance & Provider Support",
    bullets: [
      "Clinical oversight and escalation pathway design",
      "Clinical auditing (wounds, continence/catheters, incidents)",
      "Competency assessment and targeted in-service education",
      "Documentation standards and quality uplift support",
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
          content="Premium in-home nursing services across Hobart and surrounds. Private nursing, Support at Home and NDIS pathways. Wound assessment and management, catheter care (IDC/SPC), post-hospital clinical reviews, palliative support, and provider clinical governance support."
        />
        <link rel="canonical" href="https://www.novacarenursing.com.au/services" />
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
          Skilled, premium nursing — for Aged Care clients, NDIS participants,
          Private clients and Aged Care Providers.
        </p>

        {/* Private Nursing standout callout */}
        <div className="mt-6 rounded-2xl border border-[#C6A662]/40 bg-[#F7F4EF] p-5">
          <p className="font-semibold" style={{ color: brand.blue }}>
            Private Nursing (direct, self-funded)
          </p>
          <p className="mt-2 text-[0.98rem] leading-7 opacity-90">
            Engage <strong>NovaCare Nursing directly</strong> for expert clinical care — ideal for{" "}
            <strong>wound assessment and management</strong>,{" "}
            <strong>urinary catheter care (IDC/SPC)</strong>,{" "}
            <strong>post-hospital clinical reviews</strong> and{" "}
            <strong>palliative/end-of-life nursing support</strong>.
          </p>

          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <Link
              href="/private-nursing"
              className="inline-block rounded-xl px-5 py-3 font-semibold text-center hover:opacity-90 transition"
              style={{ backgroundColor: brand.gold, color: brand.blue }}
            >
              Private Nursing
            </Link>

            <Link
              href="/fees"
              className="inline-block rounded-xl px-5 py-3 font-semibold text-center border hover:opacity-90 transition"
              style={{ borderColor: "#E5E7EB", color: brand.blue }}
            >
              Fees
            </Link>
          </div>
        </div>

        {/* Funding / registration callout */}
        <div className="mt-6 rounded-2xl border border-[#C6A662]/40 bg-[#F7F4EF] p-5">
          <p className="font-semibold" style={{ color: brand.blue }}>
            Support at Home: funding and provider choice
          </p>
          <p className="mt-2 text-[0.98rem] leading-7 opacity-90">
            <strong>Support at Home (SAH)</strong> uses a <strong>single-provider</strong> model.
            If you are receiving Support at Home services, your chosen provider can{" "}
            <strong>engage NovaCare Nursing</strong> to deliver specialist nursing as a subcontract/associated provider.
            Nursing is funded from the same pooled budget as other supports under SAH.
          </p>
          <p className="mt-2 text-[0.98rem] leading-7 opacity-90">
            For <strong>NDIS</strong>, nursing can be funded where it is included in your plan and aligns to your goals and
            reasonable and necessary supports.
          </p>
        </div>

        {/* Service cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border bg-white border-gray-100 p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold" style={{ color: brand.blue }}>
                {s.title}
              </h2>
              <ul className="mt-3 list-disc pl-5 space-y-1 text-sm opacity-90">
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust block */}
        <div className="mt-10 rounded-2xl border border-gray-100 bg-white p-6">
          <h2 className="text-xl font-semibold" style={{ color: brand.blue }}>
            What you can expect from NovaCare Nursing
          </h2>
          <ul className="mt-3 list-disc pl-5 space-y-1 text-sm opacity-90">
            <li>Registered Nurse-led clinical care and clear documentation</li>
            <li>Early recognition of deterioration and escalation planning</li>
            <li>Evidence-informed wound and catheter care support</li>
            <li>Respectful, professional care that prioritises dignity and safety</li>
          </ul>
        </div>

        {/* FAQ */}
        <div className="mt-12">
          <ServicesFaq />
        </div>
      </main>

      <ContactCta />
      <SiteFooter />
    </>
  );
}
