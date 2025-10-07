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
      </Head>

      {/* Header */}
      <SiteHeader />

      {/* Hero (restored original style, no delay) */}
      <Hero />

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
