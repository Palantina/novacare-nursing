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
          content="NovaCare Nursing provides premium, discreet, and compassionate in-home nursing services across Hobart & surrounds. Aged Care registered provider for nursing services, including Support at Home-funded nursing for eligible clients."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.novacarenursing.com.au/" />

        {/* Structured data (invisible; helps Google understand your business) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeHealthCare",
              "@id": "https://www.novacarenursing.com.au/#org",
              "name": "NovaCare Nursing",
              "url": "https://www.novacarenursing.com.au",
              "logo": "https://www.novacarenursing.com.au/NovaCare_Logo.svg",
              "image": "https://www.novacarenursing.com.au/NovaCare_Logo.svg",
              "description":
                "Premium, private in-home nursing in Hobart & surrounds. Aged Care registered provider for nursing services, including Support at Home-funded nursing for eligible clients.",
              "telephone": "+61491303671",
              "email": "info@novacarenursing.com.au",
              "areaServed": { "@type": "City", "name": "Hobart" },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Hobart",
                "addressRegion": "TAS",
                "addressCountry": "AU"
              },
              "founder": {
                "@type": "Person",
                "name": "Palantina Hughes",
                "jobTitle": "Registered Nurse & Clinical Nursing Home Care Consultant"
              },
              "sameAs": []
            }),
          }}
        />
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
