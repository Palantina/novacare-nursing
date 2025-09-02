import Head from "next/head";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>NovaCare Nursing</title>
        <meta
          name="description"
          content="NovaCare Nursing — private in-home nursing care. Premium Nursing, Heartfelt Care."
        />
        {/* Social sharing */}
        <meta property="og:title" content="NovaCare Nursing" />
        <meta property="og:description" content="Premium Nursing, Heartfelt Care." />
        <meta property="og:image" content="/hero-novacare.jpg" />
        <meta property="og:type" content="website" />
      </Head>

      <SiteHeader />

      <main>
        <Hero />
        {/* Add future homepage sections here, e.g. Services preview */}
      </main>

      <SiteFooter />
    </>
  );
}
