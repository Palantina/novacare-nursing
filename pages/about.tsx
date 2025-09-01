import Head from "next/head";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const brandBlue = "#0B2D5C";

export default function About() {
  return (
    <>
      <Head>
        <title>About | NovaCare Nursing</title>
      </Head>
      <SiteHeader />

      <main className="mx-auto max-w-4xl px-4 py-10">
        <h1 className="text-3xl font-bold" style={{ color: brandBlue }}>About NovaCare Nursing</h1>
        <p className="mt-4">
          NovaCare Nursing provides premium, compassionate care in the comfort of your home.
          Led by Registered Nurse <strong>Palantina Hughes</strong>, we combine clinical excellence with warmth and discretion.
        </p>
        <ul className="mt-4 list-disc pl-5">
          <li>AHPRA registered, fully insured & police checked</li>
          <li>NDIS & private clients welcome</li>
          <li>Hobart & surrounds, Tasmania</li>
        </ul>
        <p className="mt-4">
          Every visit is personalised to protect dignity, independence, and peace of mind.
        </p>
      </main>

      <SiteFooter />
    </>
  );
}
