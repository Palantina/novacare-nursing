// pages/providers/support-at-home.tsx
import Head from "next/head";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import Link from "next/link";

const brand = { blue: "#0B2D5C", gold: "#C6A662" };

export default function ProvidersSupportAtHome() {
  return (
    <>
      <Head>
        <title>Support at Home Provider Partnerships | NovaCare Nursing</title>
        <meta
          name="description"
          content="Support at Home provider partnerships — subcontracted nursing delivery, clinical governance, oversight, education and auditing. Audit-ready documentation and escalation pathways."
        />
      </Head>

      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 py-12 md:py-14">
        <header className="text-center">
          <p
            className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold"
            style={{ borderColor: "#E5E7EB", color: brand.blue, background: "#F7F9FC" }}
          >
            Support at Home (SAH) • For Providers
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-bold" style={{ color: brand.blue }}>
            Subcontracted Nursing, Clinical Governance &amp; Oversight
          </h1>
          <p className="opacity-80 mt-2">
            Partner with NovaCare Nursing as an associated provider to strengthen quality, reduce risk, and deliver expert clinical care.
          </p>
        </header>

        <section className="mt-8">
          <div className="rounded-3xl border bg-white p-6 md:p-7 shadow-sm">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-extrabold" style={{ color: brand.blue }}>
                  What we deliver for SAH providers
                </h2>
                <p className="mt-3 opacity-90 leading-7">
                  Under Support at Home, clients generally engage through a single provider who manages the budget and service agreement.
                  Providers can engage specialist clinicians to deliver services and strengthen governance. NovaCare Nursing provides
                  expert clinical delivery and governance inputs designed to stand up to scrutiny.
                </p>

                <ul className="mt-4 list-disc pl-6 space-y-2 text-sm opacity-90 leading-6">
                  <li>
                    <strong>Basic nursing delivery:</strong> wounds &amp; dressings, catheter/continence care, injections, medication support,
                    IV/cannulation, post-op care, palliative symptom support and escalation.
                  </li>
                  <li>
                    <strong>Clinical governance:</strong> documentation standards, escalation pathways, risk flags, quality improvement actions and decision support.
                  </li>
                  <li>
                    <strong>Clinical oversight:</strong> complex cohort review, stabilisation, multidisciplinary coordination and defensible care planning.
                  </li>
                  <li>
                    <strong>Clinical education:</strong> in-service training, task-based competency checks, supervision support.
                  </li>
                  <li>
                    <strong>Clinical auditing:</strong> targeted audits (wounds, continence, medications, incidents), corrective actions and evidence trails.
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border bg-[#F7F4EF] p-5">
                <p className="font-semibold" style={{ color: brand.blue }}>
                  Pricing (SAH provider contracting)
                </p>
                <p className="mt-2 text-sm opacity-90 leading-6">
                  Our SAH direct nursing rate is clearly set out on the Fees page, including weekday non-standard hours, weekends and public holidays.
                </p>

                <div className="mt-4">
                  <Link
                    href="/fees"
                    className="inline-block rounded-xl px-5 py-3 font-semibold hover:opacity-95 transition"
                    style={{ background: brand.gold, color: brand.blue }}
                  >
                    View Fees
                  </Link>
                </div>

                <div className="mt-5 rounded-xl border bg-white p-4">
                  <p className="text-sm opacity-90 leading-6">
                    <strong>Operational note:</strong> Nursing draws from the same pooled SAH budget as other supports. Clients do not pay a participant
                    co-contribution for clinical supports (such as nursing), but service costs still draw down the pooled budget.
                  </p>
                </div>
              </div>
            </div>

            {/* Trust & governance block */}
            <div className="mt-6 rounded-2xl border bg-white p-6">
              <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>
                Trust &amp; Clinical Governance
              </h3>
              <p className="mt-2 text-sm opacity-90 leading-6">
                NovaCare Nursing is a Registered Nurse–led service focused on clinical excellence in the community setting. We deliver care with
                clear documentation standards, escalation pathways, and audit-ready evidence trails. Where we provide education, oversight or audits,
                outputs include competency records, corrective actions, and clear “when to escalate” triggers to support safe, consistent delivery.
              </p>
              <ul className="mt-3 list-disc pl-6 text-sm opacity-90 leading-6 space-y-1">
                <li>Fully insured for private practice and subcontracted clinical delivery</li>
                <li>Structured documentation and defensible clinical decision-making</li>
                <li>Clear escalation pathways and risk flagging for high-risk cohorts</li>
                <li>Professional education and competency validation aligned to real-world tasks</li>
              </ul>
            </div>

            {/* Support at Home model note (concise, correct) */}
            <div className="mt-6 rounded-2xl border bg-white p-5">
              <p className="text-[15px] leading-7">
                <span
                  className="inline-block rounded-md px-2 py-0.5 mr-2 text-xs font-semibold"
                  style={{ background: "#F4F6FA", color: brand.blue, border: "1px solid #E5E7EB" }}
                >
                  Support at Home (SAH)
                </span>
                SAH generally operates on a <strong>single-provider</strong> model (one provider holds the client agreement and manages the budget).
                Nursing is funded from the client’s overall <strong>pooled SAH budget</strong>. Clients can ask their provider to engage{" "}
                <strong>NovaCare Nursing</strong> as an <strong>associated provider</strong> for nursing services (subject to contracting and governance requirements).
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h3 className="text-2xl font-bold text-center" style={{ color: brand.blue }}>
            Why providers contract NovaCare Nursing
          </h3>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border bg-white p-6">
              <p className="font-semibold" style={{ color: brand.blue }}>Risk reduction</p>
              <p className="mt-2 text-sm opacity-90 leading-6">
                Senior assessment, timely escalation, and consistent documentation to reduce preventable deterioration and incidents.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-6">
              <p className="font-semibold" style={{ color: brand.blue }}>Audit-ready governance</p>
              <p className="mt-2 text-sm opacity-90 leading-6">
                Clear evidence trails, corrective actions, and defensible quality improvement documentation.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-6">
              <p className="font-semibold" style={{ color: brand.blue }}>Capability uplift</p>
              <p className="mt-2 text-sm opacity-90 leading-6">
                Education and competency validation aligned to the real tasks your teams are delivering in-home.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>
            Engagement model (simple and fast)
          </h3>

          <div className="grid gap-4 md:grid-cols-3 mt-4">
            <div className="rounded-2xl border bg-white p-6">
              <p className="font-semibold" style={{ color: brand.blue }}>1) Scope</p>
              <p className="opacity-90 mt-2 text-sm leading-6">
                You brief us on client goals, risks, service category (delivery/governance/audit), reporting requirements and timelines.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-6">
              <p className="font-semibold" style={{ color: brand.blue }}>2) Deliver</p>
              <p className="opacity-90 mt-2 text-sm leading-6">
                Clinical delivery and/or governance actions completed with documentation produced concurrently.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-6">
              <p className="font-semibold" style={{ color: brand.blue }}>3) Review</p>
              <p className="opacity-90 mt-2 text-sm leading-6">
                Outcomes, risk status and next steps reported back clearly, with escalation pathways and quality recommendations.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-block rounded-xl px-6 py-3 font-semibold hover:opacity-95 transition"
            style={{ background: brand.gold, color: brand.blue }}
          >
            Book a provider consultation
          </a>
          <p className="text-sm mt-3 opacity-80">
            Want the one-page provider partner pack?{" "}
            <Link href="/contact" className="underline" style={{ color: brand.blue }}>
              Request it here
            </Link>
            .
          </p>
          <p className="text-sm mt-2 opacity-80">
            <Link href="/providers" className="underline" style={{ color: brand.blue }}>
              Back to Providers
            </Link>
          </p>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
