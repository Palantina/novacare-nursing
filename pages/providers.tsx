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
          content="Specialist clinical nursing partnership for Support at Home and NDIS providers — basic nursing delivery, clinical governance, oversight, education, auditing, and audit-ready documentation."
        />
      </Head>

      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 py-12 md:py-14">
        {/* Page Header */}
        <header className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold" style={{ color: brand.blue }}>
            For Providers
          </h1>
          <p className="opacity-80 mt-2">
            Business-to-business clinical partnership for the Support at Home era — excellence, governance, and safer outcomes.
          </p>
        </header>

        {/* Hero value statement */}
        <section className="mt-8">
          <div className="rounded-3xl border bg-white p-6 md:p-7 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="md:flex-1">
                <p
                  className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold"
                  style={{ borderColor: "#E5E7EB", color: brand.blue, background: "#F7F9FC" }}
                >
                  Clinical Nurse Consulting • Subcontracted Delivery
                </p>

                <h2 className="mt-3 text-2xl md:text-3xl font-extrabold" style={{ color: brand.blue }}>
                  Specialist Nursing, Clinical Governance &amp; Oversight — Delivered Where You Need It
                </h2>

                <p className="mt-3 opacity-90 leading-7">
                  NovaCare Nursing partners with Support at Home and NDIS providers to deliver{" "}
                  <strong>expert clinical nursing</strong> and <strong>audit-ready documentation</strong>. We reduce risk,
                  stabilise complex clients, support workforce capability, and strengthen quality systems — while helping you
                  meet evolving program expectations and the Aged Care Quality Standards.
                </p>
              </div>

              {/* Quick highlights */}
              <div className="md:w-[360px] rounded-2xl border bg-[#F7F4EF] p-5">
                <p className="font-semibold" style={{ color: brand.blue }}>
                  What we offer (SAH &amp; Provider contracts)
                </p>
                <ul className="mt-2 space-y-2 text-sm opacity-90">
                  <li>• Basic nursing delivery (wounds, catheters, meds, IV/cannulation, palliative)</li>
                  <li>• Clinical governance &amp; oversight (risk, escalation, documentation)</li>
                  <li>• Clinical education &amp; competency validation</li>
                  <li>• Clinical auditing (care quality, documentation, practice compliance)</li>
                  <li>• High-intensity &amp; complex case support (incl. NDIS SIL oversight)</li>
                </ul>
              </div>
            </div>

            {/* Support at Home callout: clear and correct */}
            <div className="mt-6 rounded-2xl border bg-white p-5">
              <p className="text-[15px] leading-7">
                <span
                  className="inline-block rounded-md px-2 py-0.5 mr-2 text-xs font-semibold"
                  style={{ background: "#F4F6FA", color: brand.blue, border: "1px solid #E5E7EB" }}
                >
                  Support at Home (SAH)
                </span>
                SAH generally operates on a <strong>single-provider</strong> model (one provider holds the client agreement and
                manages the budget). Under SAH, <strong>nursing is funded from the client’s overall pooled SAH budget</strong>{" "}
                (alongside other supports). Clients do not pay a participant co-contribution for clinical supports such as nursing,
                but service costs still draw down the pooled budget. Providers can engage <strong>NovaCare Nursing</strong> as an{" "}
                <strong>associated provider</strong> to deliver nursing and clinical governance — helping protect quality while
                supporting genuine choice of expert clinical care.
              </p>
            </div>

            {/* Price positioning (simple, readable) */}
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border bg-white p-5">
                <p className="font-semibold" style={{ color: brand.blue }}>Competitive SAH nursing rates</p>
                <p className="mt-2 text-sm opacity-90 leading-6">
                  Our weekday (standard hours) nursing rate is <strong>$150/hour</strong> for SAH and private care. This is intentionally
                  set below many published home-care nursing fee schedules.
                </p>
                <p className="mt-3 text-sm">
                  <Link href="/fees" className="underline" style={{ color: brand.blue }}>
                    View full time-band rates
                  </Link>
                </p>
              </div>

              <div className="rounded-2xl border bg-white p-5">
                <p className="font-semibold" style={{ color: brand.blue }}>No “administrative loading”</p>
                <p className="mt-2 text-sm opacity-90 leading-6">
                  Transparent clinical billing for direct care and required indirect work (documentation, care planning and coordination)
                  where appropriate. No inflated add-ons to absorb governance costs.
                </p>
              </div>

              <div className="rounded-2xl border bg-white p-5">
                <p className="font-semibold" style={{ color: brand.blue }}>NDIS remains aligned to price limits</p>
                <p className="mt-2 text-sm opacity-90 leading-6">
                  Routine clinical nursing is delivered under RN2 price limits. Consultancy, SIL clinical oversight and high-intensity
                  governance is delivered under RN3+ where indicated.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why partner */}
        <section className="mt-10">
          <h3 className="text-2xl font-bold text-center" style={{ color: brand.blue }}>
            Why providers contract NovaCare Nursing
          </h3>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border bg-white p-6">
              <p className="font-semibold" style={{ color: brand.blue }}>Risk reduction</p>
              <p className="mt-2 text-sm opacity-90 leading-6">
                Reduce clinical incidents and avoid preventable deterioration through senior assessment, timely escalation,
                and consistent documentation.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-6">
              <p className="font-semibold" style={{ color: brand.blue }}>Audit-ready governance</p>
              <p className="mt-2 text-sm opacity-90 leading-6">
                Strengthen compliance with clinical governance inputs, quality checks, and evidence trails that stand up to scrutiny.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-6">
              <p className="font-semibold" style={{ color: brand.blue }}>Workforce capability</p>
              <p className="mt-2 text-sm opacity-90 leading-6">
                Targeted education and competency validation for PCWs and nurses, aligned to the tasks your teams are actually delivering.
              </p>
            </div>
          </div>
        </section>

        {/* Services table */}
        <section className="mt-10">
          <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>
            Specialist Provider Services (SAH, Aged Care &amp; NDIS)
          </h3>

          <div className="mt-4 overflow-x-auto rounded-2xl border bg-white">
            <table className="w-full min-w-[900px] text-left">
              <thead className="bg-[color:var(--brand-cream)]">
                <tr>
                  <th className="px-4 py-3 font-semibold">Service Category</th>
                  <th className="px-4 py-3 font-semibold">What NovaCare delivers</th>
                  <th className="px-4 py-3 font-semibold">Provider benefit</th>
                </tr>
              </thead>
              <tbody className="[&>tr:nth-child(even)]:bg-gray-50">
                <tr className="border-t align-top">
                  <td className="px-4 py-3 font-medium">Basic nursing delivery (SAH/private contracts)</td>
                  <td className="px-4 py-3">
                    Wounds &amp; dressings, catheter/continence care, medication support, injections, IV/cannulation, post-op care,
                    palliative symptom support and escalation.
                  </td>
                  <td className="px-4 py-3">
                    Reliable, high-skill nursing capacity without the overheads of recruiting and supervising short-notice specialist staff.
                  </td>
                </tr>

                <tr className="border-t align-top">
                  <td className="px-4 py-3 font-medium">Clinical governance &amp; oversight</td>
                  <td className="px-4 py-3">
                    Care plan review, risk identification, escalation pathways, documentation standards, quality improvement actions and clinical decision support.
                  </td>
                  <td className="px-4 py-3">
                    Stronger governance controls and reduced compliance exposure across complex or high-risk cohorts.
                  </td>
                </tr>

                <tr className="border-t align-top">
                  <td className="px-4 py-3 font-medium">Clinical auditing</td>
                  <td className="px-4 py-3">
                    Targeted audits of care delivery and documentation (wounds, continence, medications, incidents), feedback loops, corrective actions and evidence trails.
                  </td>
                  <td className="px-4 py-3">
                    Measurable quality uplift, early detection of unsafe practice, and defensible continuous improvement records.
                  </td>
                </tr>

                <tr className="border-t align-top">
                  <td className="px-4 py-3 font-medium">Clinical education &amp; competency validation</td>
                  <td className="px-4 py-3">
                    In-service education, task-based competency checks, supervision support and clear documentation of workforce capability.
                  </td>
                  <td className="px-4 py-3">
                    Up-skilled teams and verifiable competency records for audits and incident prevention.
                  </td>
                </tr>

                <tr className="border-t align-top">
                  <td className="px-4 py-3 font-medium">NDIS consultancy / high-intensity oversight</td>
                  <td className="px-4 py-3">
                    RN3+ consultancy, clinical reports for plan reviews, SIL clinical oversight, complex case management, and case conference participation.
                  </td>
                  <td className="px-4 py-3">
                    Defensible plan utilisation, improved outcomes, and clear governance across high-intensity supports.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* What you receive */}
        <section className="mt-10">
          <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>
            What you receive (every engagement)
          </h3>

          <div className="mt-4 rounded-2xl border bg-white p-6">
            <ul className="list-disc pl-6 opacity-90 space-y-2">
              <li>Clinical assessment and plan with measurable outcomes and review dates.</li>
              <li>Progress notes and documentation aligned to program and quality expectations.</li>
              <li>Escalation pathway and risk flags where indicated (including clear “when to call” triggers).</li>
              <li>Competency records and education attendance sheets where training is delivered.</li>
              <li>Audit tools and corrective actions where auditing is commissioned.</li>
            </ul>
          </div>
        </section>

        {/* Engagement model */}
        <section className="mt-10">
          <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>
            Engagement model (simple and fast)
          </h3>

          <div className="grid gap-4 md:grid-cols-3 mt-4">
            <div className="rounded-2xl border bg-white p-6">
              <p className="font-semibold" style={{ color: brand.blue }}>1) Scope</p>
              <p className="opacity-90 mt-2 text-sm leading-6">
                You brief us on client goals, risks, service category (delivery/governance/audit), and timelines. We confirm scope and reporting requirements.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-6">
              <p className="font-semibold" style={{ color: brand.blue }}>2) Deliver</p>
              <p className="opacity-90 mt-2 text-sm leading-6">
                Clinical delivery and/or governance actions are completed with documentation produced concurrently.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-6">
              <p className="font-semibold" style={{ color: brand.blue }}>3) Review</p>
              <p className="opacity-90 mt-2 text-sm leading-6">
                Outcomes, risks and next steps are reported back clearly, with escalation pathways and quality recommendations where required.
              </p>
            </div>
          </div>
        </section>

        {/* Compliance notes */}
        <section className="mt-10">
          <div className="rounded-2xl border bg-white p-6">
            <p className="font-semibold" style={{ color: brand.blue }}>
              Program notes (plain English)
            </p>
            <ul className="list-disc pl-6 mt-3 opacity-90 space-y-2 text-sm leading-6">
              <li>
                <strong>Support at Home:</strong> Nursing is delivered via provider contracts/associated-provider arrangements. Clients generally engage through a single provider, and nursing is paid from the client’s pooled SAH budget.
              </li>
              <li>
                <strong>Aged Care Quality Standards:</strong> Documentation and delivery are designed to be audit-ready, with clear evidence trails and escalation pathways.
              </li>
              <li>
                <strong>NDIS:</strong> Nursing supports are billed in line with the applicable NDIS support item, time band, and the RN2/RN3+ clinical role delivered.
              </li>
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
            Book a 15-minute provider intro consult
          </a>
          <p className="text-sm mt-2 opacity-80">
            Prefer email? <Link href="/contact" className="underline">Send provider details</Link> and we’ll respond with availability and next steps.
          </p>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
