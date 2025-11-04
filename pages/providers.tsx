// pages/providers.tsx
import Head from "next/head";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Link from "next/link";

const brand = { blue: "#0B2D5C", gold: "#C6A662" };

export default function Providers() {
  return (
    <>
      <Head>
        <title>For Providers | NovaCare Nursing</title>
        <meta
          name="description"
          content="Clinical Nurse Consulting (CNC) partnership for Aged Care & NDIS providers: risk management, complex care assessments, governance, staff competency, and audit-ready documentation."
        />
      </Head>

      <SiteHeader />

      <main className="mx-auto max-w-5xl px-4 py-12 text-[15px] leading-6 md:leading-7">
        {/* Page Header */}
        <header className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold" style={{ color: brand.blue }}>
            For Providers
          </h1>
          <p className="opacity-80 mt-2">
            Business-to-business clinical partnership for the Support at Home era — compliance, capacity, and better outcomes.
          </p>
        </header>

        {/* Hero value statement */}
        <section className="mt-8">
          <div className="rounded-2xl border bg-white p-6">
            <h2 className="text-2xl font-bold" style={{ color: brand.blue }}>
              Clinical Nurse Consulting: Specialist Partnership for Home Care Providers
            </h2>
            <h3 className="mt-1 text-lg font-bold" style={{ color: brand.blue }}>
              Elevating Quality &amp; Managing Risk in the Support at Home Era
            </h3>

            <p className="mt-3 opacity-90">
              NovaCare Nursing is your dedicated partner for specialist clinical solutions within the Aged Care and NDIS sectors.
              As an independent <strong>Clinical Nurse Consultant (CNC)</strong>, we provide the expert oversight, specialised
              care delivery, and audit-ready documentation your agency needs to manage complex clients and meet evolving
              <strong> Aged Care Quality Standards</strong> and <strong>Support at Home</strong> requirements.
            </p>

            {/* SAH funding callout (concise, professional) */}
            <div className="mt-4 rounded-xl border bg-white p-4">
              <p className="text-[15px] leading-6">
                <span
                  className="inline-block rounded-md px-2 py-0.5 mr-2 text-xs font-semibold"
                  style={{ background: "#F4F6FA", color: brand.blue, border: "1px solid #E5E7EB" }}
                >
                  Support at Home
                </span>
                <strong style={{ color: brand.blue }}>
                  For eligible clients with an SAH package, nursing care is fully government-funded and not drawn from the client’s SAH budget.
                </strong>{" "}
                We partner with providers to deliver compassionate, compliant clinical care without out-of-pocket costs to the client.
              </p>
            </div>
          </div>
        </section>

        {/* Why partner (dot points) */}
        <section className="mt-10">
          <h3 className="text-xl font-bold" style={{ color: brand.blue }}>
            Why Partner with NovaCare Nursing?
          </h3>

          <div className="mt-3 rounded-2xl border bg-white p-5">
            <ul className="list-disc pl-6 space-y-2 opacity-90">
              <li>
                <strong>Risk Mitigation:</strong> Reduce clinical incidents, avoid preventable hospital transfers, and minimise
                non-compliance findings by engaging senior clinical oversight for complex care.
              </li>
              <li>
                <strong>Capacity Building:</strong> Free Care Managers and Coordinators to focus on relationships while we handle
                high-acuity workloads and produce audit-ready documentation.
              </li>
              <li>
                <strong>Specialist Expertise:</strong> On-demand advanced skills — wound and IV therapy, catheter/continence, complex
                medication regimens, escalation pathways, and governance support.
              </li>
            </ul>
          </div>
        </section>

        {/* Services table */}
        <section className="mt-10">
          <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>
            Specialist Provider Services
          </h3>

          <div className="mt-4 overflow-x-auto rounded-2xl border bg-white">
            <table className="w-full min-w-[760px] text-left">
              <thead className="bg-[color:var(--brand-cream)]">
                <tr>
                  <th className="px-4 py-3 font-semibold">Service Category</th>
                  <th className="px-4 py-3 font-semibold">Provider Benefit</th>
                </tr>
              </thead>
              <tbody className="[&>tr:nth-child(even)]:bg-gray-50">
                <tr className="border-t align-top">
                  <td className="px-4 py-3 font-medium">Complex Care Assessments</td>
                  <td className="px-4 py-3">
                    Rapid initial and periodic assessments (e.g., wound, continence, palliative).
                    <strong> Outcome:</strong> robust, audit-ready clinical records per client.
                  </td>
                </tr>
                <tr className="border-t align-top">
                  <td className="px-4 py-3 font-medium">Clinical Governance Support</td>
                  <td className="px-4 py-3">
                    Care plan reviews, policy/procedure checks, risk analysis, escalation mapping.
                    <strong> Outcome:</strong> stronger quality framework and compliance readiness.
                  </td>
                </tr>
                <tr className="border-t align-top">
                  <td className="px-4 py-3 font-medium">Staff Training &amp; Competency</td>
                  <td className="px-4 py-3">
                    Tailored in-service training and competency validation for PCWs and RNs.
                    <strong> Outcome:</strong> up-skilled teams and verifiable training records.
                  </td>
                </tr>
                <tr className="border-t align-top">
                  <td className="px-4 py-3 font-medium">NDIS Specialist Support</td>
                  <td className="px-4 py-3">
                    High-level clinical reports for plan reviews, justification of complex supports,
                    MDT input and case conferences.
                    <strong> Outcome:</strong> better outcomes and defensible plan expenditure.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Quick list of typical deliverables */}
          <div className="mt-4 rounded-2xl border bg-white p-5">
            <p className="font-medium" style={{ color: brand.blue }}>Typical Deliverables</p>
            <ul className="list-disc pl-6 mt-2 opacity-90 space-y-1">
              <li>Assessment + care plan with measurable outcomes and review dates.</li>
              <li>Escalation pathway and clinical risk register entries where indicated.</li>
              <li>Progress notes aligned to ACQS and program requirements (SAH/NDIS).</li>
              <li>Competency records and in-service attendance sheets for your staff.</li>
            </ul>
          </div>
        </section>

        {/* Engagement model */}
        <section className="mt-10">
          <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>
            Engagement Model
          </h3>

          <div className="grid gap-4 md:grid-cols-3 mt-4">
            <div className="rounded-2xl border bg-white p-5">
              <p className="font-medium" style={{ color: brand.blue }}>1) Referral &amp; Scope</p>
              <p className="opacity-90 mt-1">
                You brief us on client goals, risks, and timelines. We confirm scope, time bands, and reporting needs.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-5">
              <p className="font-medium" style={{ color: brand.blue }}>2) Assessment &amp; Delivery</p>
              <p className="opacity-90 mt-1">
                Clinical assessment, plan/education, and implementation. Documentation produced concurrently.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-5">
              <p className="font-medium" style={{ color: brand.blue }}>3) Governance &amp; Review</p>
              <p className="opacity-90 mt-1">
                Audit-ready documents, outcome reviews, escalation and continuous improvement recommendations.
              </p>
            </div>
          </div>
        </section>

        {/* Compliance notes */}
        <section className="mt-10">
          <div className="rounded-2xl border bg-white p-5">
            <p className="font-medium" style={{ color: brand.blue }}>Program &amp; Compliance Notes</p>
            <ul className="list-disc pl-6 mt-2 opacity-90 space-y-1">
              <li><strong>Support at Home:</strong> Direct and Indirect clinical time are billable when linked to an authorised SAH plan. Approved nursing services are funded for eligible clients.</li>
              <li><strong>Aged Care Quality Standards (ACQS):</strong> Documentation and care delivery align to ACQS and audit expectations.</li>
              <li><strong>NDIS:</strong> Clinical nursing adheres to current NDIS price limits and time bands; self-managed participants may negotiate costs.</li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-block rounded-xl px-6 py-3 font-semibold hover:opacity-95 transition"
            style={{ background: brand.gold, color: brand.blue }}
          >
            Book a 15-minute intro consult
          </a>
          <p className="text-sm mt-2 opacity-80">
            Prefer email? <Link href="/contact" className="underline">Send details</Link> and we’ll respond with availability and next steps.
          </p>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
