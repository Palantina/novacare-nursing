// pages/private-nursing.tsx
import Head from "next/head";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ContactCta from "../components/ContactCta";

const brand = { blue: "#0B2D5C", gold: "#C6A662" };

export default function PrivateNursing() {
  return (
    <>
      <Head>
        <title>Private Nursing | NovaCare Nursing</title>
        <meta
          name="description"
          content="Private (self-funded) in-home nursing across Hobart and surrounds. Expert wound assessment and management, pressure injury risk support, urinary catheter care (IDC/SPC), post-hospital clinical reviews, and palliative/end-of-life nursing support."
        />
        <link
          rel="canonical"
          href="https://www.novacarenursing.com.au/private-nursing"
        />
      </Head>

      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 py-12">
        <header className="text-center">
          <h1
            className="text-3xl md:text-4xl font-bold"
            style={{ color: brand.blue }}
          >
            Private Nursing
          </h1>
          <p className="opacity-80 mt-3">
            Premium, self-funded in-home nursing — direct access to expert Registered Nurse-led care.
          </p>
        </header>

        {/* Standout callout (brand-consistent) */}
        <section className="mt-6 rounded-2xl border border-[#C6A662]/40 bg-[#F7F4EF] p-6">
          <p className="font-semibold" style={{ color: brand.blue }}>
            Direct private nursing (fee-for-service)
          </p>
          <p className="mt-2 text-[0.98rem] leading-7 opacity-90">
            Private nursing means you engage <strong>NovaCare Nursing directly</strong> for clinical care. This pathway is{" "}
            <strong>self-funded</strong> and does not depend on pooled program budgets or provider contracting.
          </p>
          <p className="mt-2 text-[0.98rem] leading-7 opacity-90">
            It is ideal when you want <strong>timely clinical review</strong>, <strong>continuity</strong>, clear documentation,
            and escalation pathways that reduce preventable harm.
          </p>

          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-block rounded-xl px-5 py-3 font-semibold text-center hover:opacity-90 transition"
              style={{ backgroundColor: brand.gold, color: brand.blue }}
            >
              Book a Consultation
            </Link>

            <Link
              href="/fees"
              className="inline-block rounded-xl px-5 py-3 font-semibold text-center border hover:opacity-90 transition"
              style={{ borderColor: "#E5E7EB", color: brand.blue }}
            >
              View Fees
            </Link>
          </div>
        </section>

        {/* Service tiles */}
        <section className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-6 shadow-sm border bg-white border-gray-100">
            <h2 className="font-semibold text-xl" style={{ color: brand.blue }}>
              Wound assessment and management
            </h2>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-sm opacity-90">
              <li>Complex/chronic wounds: assessment, measurement and dressing plan support</li>
              <li>Skin integrity monitoring and pressure injury risk support</li>
              <li>Clear documentation, progress tracking and escalation triggers</li>
              <li>Liaison with GP/specialists as clinically indicated</li>
            </ul>
          </div>

          <div className="rounded-2xl p-6 shadow-sm border bg-white border-gray-100">
            <h2 className="font-semibold text-xl" style={{ color: brand.blue }}>
              Post-hospital clinical review
            </h2>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-sm opacity-90">
              <li>Early recognition of deterioration and escalation planning</li>
              <li>Clinical observations as clinically indicated</li>
              <li>Falls risk and functional risk inputs</li>
              <li>Care plan refinement and practical guidance for carers/family</li>
            </ul>
          </div>

          <div className="rounded-2xl p-6 shadow-sm border bg-white border-gray-100">
            <h2 className="font-semibold text-xl" style={{ color: brand.blue }}>
              Urinary catheter care (IDC / SPC)
            </h2>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-sm opacity-90">
              <li>Indwelling urinary catheter (IDC) and suprapubic catheter (SPC) care</li>
              <li>Troubleshooting: bypassing/leakage, blockage risk flags and escalation thresholds</li>
              <li>Infection prevention and control risk flags and escalation</li>
              <li>Client/carer education (within scope)</li>
            </ul>
          </div>

          <div className="rounded-2xl p-6 shadow-sm border bg-white border-gray-100">
            <h2 className="font-semibold text-xl" style={{ color: brand.blue }}>
              Palliative and end-of-life nursing support
            </h2>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-sm opacity-90">
              <li>Comfort-focused nursing support and symptom monitoring</li>
              <li>Escalation planning with family and treating team</li>
              <li>Practical guidance and carer support</li>
              <li>Coordination with GP / palliative care services where involved</li>
            </ul>
          </div>
        </section>

        {/* Fees summary */}
        <section className="mt-10 rounded-2xl border bg-white border-gray-100 p-6">
          <h2 className="text-xl font-semibold" style={{ color: brand.blue }}>
            Private nursing fees (summary)
          </h2>
          <p className="mt-2 text-[0.98rem] leading-7 opacity-90">
            Standard hours (Mon–Fri): <strong>$150 per hour</strong> and <strong>$116 per 30 minutes</strong>.
          </p>
          <p className="mt-2 text-sm opacity-80">
            Non-standard hours, weekends and public holidays apply different time bands. Full pricing is on the{" "}
            <Link href="/fees" className="underline" style={{ color: brand.blue }}>
              Fees page
            </Link>
            .
          </p>
        </section>
      </main>

      <ContactCta />
      <SiteFooter />
    </>
  );
}
