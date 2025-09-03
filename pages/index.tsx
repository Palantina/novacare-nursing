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
        <title>NovaCare Nursing | Premium Nursing in Hobart</title>
        <meta
          name="description"
          content="NovaCare Nursing — premium, private, and heartfelt nursing care in Hobart and surrounds, Tasmania."
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
