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
          content="Premium private (self-funded) in-home nursing across Hobart & surrounds. Expert wound management, catheter care (IDC/SPC), post-hospital clinical reviews, palliative support and complex clinical oversight. Transparent fees."
        />
        <link
          rel="canonical"
          href="https://www.novacarenursing.com.au/private-nursing"
        />
      </Head>

      <SiteHeader />

      <main className="mx-auto max-w-5xl px-4 py-12 text-[15px] leading-6 md:leading-7">
        <header className="text-center">
          <h1
            className="text-3xl md:text-4xl font-bold"
            style={{ color: brand.blue }}
          >
            Private Nursing
          </h1>
          <p className="opacity-80 mt-2">
            Premium, self-funded in-home nursing — clinically rigorous, discreet, and responsive.
          </p>
        </header>

        <div className="mt-8 rounded-2xl border border-[#C6A662]/40 bg-[#F7F4EF] p-5">
          <p className="font-semibold" style={{ color: brand.blue }}>
            What “Private Nursing” means
          </p>
          <p className="mt-2 opacity-90">
            Private nursing is <strong>fee-for-service</strong> (self-funded). It does not require program approvals
            or provider contracting, which means you can engage NovaCare Nursing directly for expert clinical care.
          </p>
          <p className="mt-2 opacity-90">
            This option is ideal when you want <strong>choice</strong>, <strong>continuity</strong>, and
            <strong> experienced Registered Nurse-led care</strong>—without the constraints of pooled budgets.
          </p>
        </div>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold" style={{ color: brand.blue }}>
            Common reasons clients use private nursing
          </h2>

          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border bg-white p-6">
              <h3 className="text-lg font-semibold" style={{ color: brand.blue }}>
                Post-hospital or post-operative support
              </h3>
              <ul className="mt-3 list-disc pl-5 space-y-1 text-sm opacity-90">
                <li>Clinical review after discharge and early recognition of deterioration</li>
                <li>Wound assessment, dressing selection support and review cadence</li>
                <li>Medication administration support (within scope) and safety checks</li>
                <li>Falls risk and pressure injury risk inputs</li>
              </ul>
            </div>

            <div className="rounded-2xl border bg-white p-6">
              <h3 className="text-lg font-semibold" style={{ color: brand.blue }}>
                Wound management & skin integrity
              </h3>
              <ul className="mt-3 list-disc pl-5 space-y-1 text-sm opacity-90">
                <li>Complex/chronic wounds (including escalation triggers)</li>
                <li>Pressure injury risk monitoring and prevention guidance</li>
                <li>Clear documentation and progress reporting</li>
                <li>Coordination with your GP / specialist team where required</li>
              </ul>
            </div>

            <div className="rounded-2xl border bg-white p-6">
              <h3 className="text-lg font-semibold" style={{ color: brand.blue }}>
                Urinary catheter care (IDC / SPC)
              </h3>
              <ul className="mt-3 list-disc pl-5 space-y-1 text-sm opacity-90">
                <li>Indwelling urinary catheter (IDC) and suprapubic catheter (SPC) care</li>
                <li>Troubleshooting: leakage/bypassing, blockage risk flags and escalation thresholds</li>
                <li>Client/carer education and practical risk reduction strategies (within scope)</li>
              </ul>
            </div>

            <div className="rounded-2xl border bg-white p-6">
              <h3 className="text-lg font-semibold" style={{ color: brand.blue }}>
                Palliative and end-of-life support
              </h3>
              <ul className="mt-3 list-disc pl-5 space-y-1 text-sm opacity-90">
                <li>Comfort-focused nursing support and symptom monitoring</li>
                <li>Escalation planning with family and treating team</li>
                <li>Practical guidance for carers and family</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold" style={{ color: brand.blue }}>
            How it works
          </h2>

          <div className="mt-4 rounded-2xl border bg-white p-6">
            <ol className="list-decimal pl-5 space-y-2 opacity-90">
              <li>
                <strong>Contact NovaCare Nursing</strong> with your needs and preferred timing.
              </li>
              <li>
                We confirm <strong>scope, urgency, and clinical requirements</strong> (and any documents you can share).
              </li>
              <li>
                We schedule your visit and provide <strong>clear documentation</strong> and escalation guidance.
              </li>
              <li>
                If ongoing care is needed, we set a <strong>review cadence</strong> and update the plan as required.
              </li>
            </ol>

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
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold" style={{ color: brand.blue }}>
            Private nursing fees (summary)
          </h2>

          <div className="mt-4 rounded-2xl border bg-white p-6">
            <p className="opacity-90">
              <strong>Standard hours (Mon–Fri, 8:00am–6:00pm):</strong>{" "}
              <span className="font-semibold" style={{ color: brand.blue }}>
                $150 per hour
              </span>{" "}
              and{" "}
              <span className="font-semibold" style={{ color: brand.blue }}>
                $116 per 30 minutes
              </span>
              .
            </p>
            <p className="opacity-80 mt-2 text-sm">
              Non-standard hours, weekends and public holidays apply higher time bands. Full pricing tables are on the{" "}
              <Link href="/fees" className="underline" style={{ color: brand.blue }}>
                Fees page
              </Link>
              .
            </p>
          </div>

          <div className="mt-4 rounded-2xl border border-gray-100 bg-white p-5">
            <p className="text-sm opacity-80">
              <strong>Important:</strong> If you believe a person is acutely unwell or at immediate risk, call{" "}
              <strong>000</strong> or attend the nearest Emergency Department.
            </p>
          </div>
        </section>
      </main>

      <ContactCta />
      <SiteFooter />
    </>
  );
}
