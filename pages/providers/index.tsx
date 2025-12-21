// pages/providers/index.tsx
import Head from "next/head";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import Link from "next/link";

const brand = { blue: "#0B2D5C", gold: "#C6A662" };

export default function ProvidersIndex() {
  return (
    <>
      <Head>
        <title>For Providers | NovaCare Nursing</title>
        <meta
          name="description"
          content="Provider partnerships for Support at Home and NDIS — subcontracted nursing delivery, clinical governance, oversight, education and auditing."
        />
      </Head>

      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 py-12 md:py-14">
        <header className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold" style={{ color: brand.blue }}>
            For Providers
          </h1>
          <p className="opacity-80 mt-2">
            Choose the pathway you need — Support at Home (SAH) partnerships or NDIS clinical nursing and consultancy.
          </p>
        </header>

        <section className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border bg-white p-7 shadow-sm">
            <p
              className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold"
              style={{ borderColor: "#E5E7EB", color: brand.blue, background: "#F7F9FC" }}
            >
              Support at Home (SAH)
            </p>
            <h2 className="mt-3 text-2xl font-extrabold" style={{ color: brand.blue }}>
              Subcontracted Nursing + Governance
            </h2>
            <p className="mt-3 opacity-90 leading-7">
              Partner with NovaCare Nursing as an associated provider for expert clinical nursing delivery, clinical oversight,
              education, auditing and audit-ready documentation — designed for the SAH single-provider operating model.
            </p>

            <div className="mt-5">
              <Link
                href="/providers/support-at-home"
                className="inline-block rounded-xl px-6 py-3 font-semibold hover:opacity-95 transition"
                style={{ background: brand.gold, color: brand.blue }}
              >
                Support at Home provider page
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border bg-white p-7 shadow-sm">
            <p
              className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold"
              style={{ borderColor: "#E5E7EB", color: brand.blue, background: "#F7F9FC" }}
            >
              NDIS
            </p>
            <h2 className="mt-3 text-2xl font-extrabold" style={{ color: brand.blue }}>
              Clinical Nursing + Consultancy (RN2 / RN3+)
            </h2>
            <p className="mt-3 opacity-90 leading-7">
              RN2 clinical nursing for routine supports (wounds, catheters, medication support) and RN3+ consultancy for complex
              care, high-intensity governance, SIL oversight, education and reports — billed in line with NDIS price limits.
            </p>

            <div className="mt-5">
              <Link
                href="/providers/ndis"
                className="inline-block rounded-xl px-6 py-3 font-semibold hover:opacity-95 transition"
                style={{ background: brand.gold, color: brand.blue }}
              >
                NDIS provider page
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-10 text-center">
          <p className="text-sm opacity-80">
            Prefer to start with pricing?{" "}
            <Link href="/fees" className="underline" style={{ color: brand.blue }}>
              View Fees
            </Link>
          </p>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
