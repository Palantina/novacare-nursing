// pages/providers/ndis.tsx
import Head from "next/head";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import Link from "next/link";

const brand = { blue: "#0B2D5C", gold: "#C6A662" };

export default function ProvidersNdis() {
  return (
    <>
      <Head>
        <title>NDIS Nursing & Consultancy | NovaCare Nursing</title>
        <meta
          name="description"
          content="NDIS provider partnerships — RN2 clinical nursing for routine supports and RN3+ consultancy for complex and high-intensity supports, including SIL clinical oversight, education and auditing."
        />
      </Head>

      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 py-12 md:py-14">
        <header className="text-center">
          <p
            className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold"
            style={{ borderColor: "#E5E7EB", color: brand.blue, background: "#F7F9FC" }}
          >
            NDIS • For Providers
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-bold" style={{ color: brand.blue }}>
            NDIS Nursing (RN2) &amp; Consultancy (RN3+)
          </h1>
          <p className="opacity-80 mt-2">
            Clinical nursing and governance for participants with routine needs through to high-intensity supports and SIL oversight.
          </p>
        </header>

        <section className="mt-8">
          <div className="rounded-3xl border bg-white p-6 md:p-7 shadow-sm">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-extrabold" style={{ color: brand.blue }}>
                  Clear role separation: RN2 vs RN3+
                </h2>
                <p className="mt-3 opacity-90 leading-7">
                  NDIS nursing is billed in line with the applicable NDIS support item, time band, and the clinical role delivered.
                  NovaCare Nursing uses a transparent model:
                </p>

                <ul className="mt-4 list-disc pl-6 space-y-2 text-sm opacity-90 leading-6">
                  <li>
                    <strong>RN2 (Clinical Nurse):</strong> routine clinical nursing — wounds, dressings, catheter care, continence support,
                    medication support, injections and general clinical nursing tasks.
                  </li>
                  <li>
                    <strong>RN3+ (Clinical Nurse Consultant):</strong> consultancy and governance — complex case oversight, high-intensity supports,
                    SIL clinical oversight, education/training, escalation pathways, complex reporting and case conferences.
                  </li>
                </ul>

                <p className="mt-4 text-sm opacity-90 leading-6">
                  For pricing by time band (weekday/day/evening/night/weekend/public holiday), refer to the Fees page.
                </p>

                <div className="mt-4">
                  <Link
                    href="/fees#ndis"
                    className="inline-block rounded-xl px-5 py-3 font-semibold hover:opacity-95 transition"
                    style={{ background: brand.gold, color: brand.blue }}
                  >
                    View NDIS rates on Fees
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl border bg-[#F7F4EF] p-5">
                <p className="font-semibold" style={{ color: brand.blue }}>
                  Provider-facing deliverables
                </p>
                <ul className="mt-2 space-y-2 text-sm opacity-90">
                  <li>• Clinical assessments with measurable goals and review dates</li>
                  <li>• Documentation aligned to support item and participant goals</li>
                  <li>• Escalation pathways and “when to call” triggers</li>
                  <li>• SIL clinical oversight, education and competency validation</li>
                  <li>• Audit tools and corrective actions where auditing is commissioned</li>
                </ul>

                <div className="mt-5 rounded-xl border bg-white p-4">
                  <p className="text-sm opacity-90 leading-6">
                    <strong>Note:</strong> NDIS pricing is constrained. The priority is defensible classification (RN2 vs RN3+),
                    high-quality evidence, and reliable delivery.
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
                NovaCare Nursing provides RN-led clinical delivery and consultancy with clear governance controls. We prioritise audit-ready documentation,
                defined escalation pathways, and competency validation for high-risk tasks delivered within home and SIL environments. Where reporting is
                required for plan review or risk management, documentation is structured, defensible and outcomes-focused.
              </p>
              <ul className="mt-3 list-disc pl-6 text-sm opacity-90 leading-6 space-y-1">
                <li>Role clarity: RN2 routine clinical tasks; RN3+ consultancy and governance</li>
                <li>Evidence trails aligned to participant goals, risks and clinical necessity</li>
                <li>Education and competency records for support worker-delivered tasks</li>
                <li>Escalation and incident learning to reduce repeat events</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h3 className="text-2xl font-bold text-center" style={{ color: brand.blue }}>
            High-intensity supports and SIL: where NovaCare adds value
          </h3>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border bg-white p-6">
              <p className="font-semibold" style={{ color: brand.blue }}>Clinical governance</p>
              <p className="mt-2 text-sm opacity-90 leading-6">
                Clear pathways for escalation, documentation standards, incident learning and risk controls.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-6">
              <p className="font-semibold" style={{ color: brand.blue }}>Workforce capability</p>
              <p className="mt-2 text-sm opacity-90 leading-6">
                Education, competency validation and supervision for high-risk tasks delivered by support workers.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-6">
              <p className="font-semibold" style={{ color: brand.blue }}>Defensible reporting</p>
              <p className="mt-2 text-sm opacity-90 leading-6">
                Reports that support plan reviews and demonstrate clinical necessity, outcomes and risk management.
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
