import Head from "next/head";
import SiteHeader from "../components/SiteHeader";
import Hero from "../components/Hero";
import SiteFooter from "../components/SiteFooter";
// If you’d like to keep a call-to-action section under the hero, uncomment this:
// import ContactCta from "../components/ContactCta";

export default function Home() {
  return (
    <>
      <Head>
        <title>NovaCare Nursing | Premium Private Home Nursing in Hobart & Surrounds</title>
        <meta
          name="description"
          content="NovaCare Nursing provides premium, discreet, and compassionate in-home nursing services across Hobart & surrounds. Registered Nurse Palantina Hughes delivers tailored, professional care with a heartfelt touch."
        />
        <link rel="icon" href="/favicon.ico" />
        {/* Structured data (already added earlier) */}
        {/* If you removed it for any reason, let me know and I’ll reinsert it. */}
      </Head>

      {/* Header */}
      <SiteHeader />

      {/* Hero (restored original style, no delay) */}
      <Hero />

      {/* ✅ New: concise credentials strip for clients + SEO */}
      <section className="mx-auto max-w-5xl px-4 py-6 text-center">
        <p className="text-lg font-medium">
          Palantina Hughes — Clinical Nursing Home Care Consultant | Registered Nurse
        </p>
        <p className="opacity-80 text-sm mt-1">
          Private in-home nursing in Hobart & Surrounds, Tasmania.
        </p>
      </section>

      {/* Optional CTA Section (commented out for now) */}
      {/*
      <section className="py-12">
        <div className="mx-auto max-w-5xl px-6">
          <ContactCta />
        </div>
      </section>
      */}

      {/* Footer */}
      <SiteFooter />
    </>
  );
}
