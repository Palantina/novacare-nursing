import Head from "next/head";
import SiteHeader from "../components/SiteHeader";
import Hero from "../components/Hero";
import SiteFooter from "../components/SiteFooter";

export default function Home() {
  return (
    <>
      <Head>
        <title>NovaCare Nursing | Premium Private Home Nursing in Hobart & Surrounds</title>
        <meta
          name="description"
          content="NovaCare Nursing provides premium, discreet in-home nursing across Hobart & surrounds. Private nursing is available (book directly). Support at Home clients can ask their provider to engage NovaCare Nursing for specialist RN care. NDIS nursing supports may be available when included in your plan."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.novacarenursing.com.au/" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeHealthCare",
              "@id": "https://www.novacarenursing.com.au/#org",
              name: "NovaCare Nursing",
              url: "https://www.novacarenursing.com.au",
              logo: "https://www.novacarenursing.com.au/NovaCare_Logo.svg",
              image: "https://www.novacarenursing.com.au/NovaCare_Logo.svg",
              description:
                "Premium, private in-home nursing in Hobart & surrounds. Private nursing is available (book directly). Support at Home clients can ask their provider to engage NovaCare Nursing for specialist RN care. NDIS nursing supports may be available when included in your plan.",
              telephone: "+61491303671",
              email: "info@novacarenursing.com.au",
              areaServed: { "@type": "City", name: "Hobart" },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Hobart",
                addressRegion: "TAS",
                addressCountry: "AU",
              },
              founder: {
                "@type": "Person",
                name: "Palantina Hughes",
                jobTitle: "Registered Nurse & Clinical Nursing Home Care Consultant",
              },
              sameAs: [],
            }),
          }}
        />
      </Head>

      <SiteHeader />
      <Hero />
      <SiteFooter />
    </>
  );
}
