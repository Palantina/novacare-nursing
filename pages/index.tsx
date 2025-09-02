// pages/index.tsx
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
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
        {/* Social sharing (optional) */}
        <meta property="og:title" content="NovaCare Nursing" />
        <meta property="og:description" content="Premium Nursing, Heartfelt Care." />
        <meta property="og:image" content="/hero-novacare.jpg" />
        <meta property="og:type" content="website" />
      </Head>

      <Header />

      <main>
        <Hero />
        {/* You can add more sections below… */}
      </main>

      <Footer />
    </>
  );
}
