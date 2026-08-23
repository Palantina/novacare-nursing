// pages/_app.tsx
import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

const organisationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "HomeHealthCare"],
  "@id": "https://www.novacarenursing.com.au/#organisation",
  name: "NovaCare Nursing",
  alternateName: "NovaCare Nursing — Aged Care Specialists",
  url: "https://www.novacarenursing.com.au/",
  logo: "https://www.novacarenursing.com.au/NovaCare_Logo_Light.svg",
  telephone: "+61491303671",
  email: "info@novacarenursing.com.au",
  description:
    "Tasmanian owned, nurse-led aged care and specialist clinical nursing at home across Hobart and Southern Tasmania.",
  slogan: "Aged Care Specialists",
  areaServed: [
    { "@type": "City", name: "Hobart" },
    { "@type": "AdministrativeArea", name: "Huon Valley, Tasmania" },
    { "@type": "AdministrativeArea", name: "Derwent Valley, Tasmania" },
    { "@type": "AdministrativeArea", name: "Southern Tasmania" },
  ],
  founder: {
    "@type": "Person",
    name: "Palantina Hughes",
    jobTitle: "Clinical Nurse Consultant | Registered Nurse",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.novacarenursing.com.au/#website",
  url: "https://www.novacarenursing.com.au/",
  name: "NovaCare Nursing",
  alternateName: "NovaCare Nursing — Aged Care Specialists",
  publisher: {
    "@id": "https://www.novacarenursing.com.au/#organisation",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:site_name" content="NovaCare Nursing" />
        <meta property="og:locale" content="en_AU" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="theme-color" content="#F8FCFD" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
