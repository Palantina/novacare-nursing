import Head from "next/head";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const brand = { blue: "#0B2D5C" };

export default function About() {
  return (
    <>
      <Head>
        <title>About NovaCare Nursing | Private Home Nursing in Hobart</title>
        <meta
          name="description"
          content="Learn about NovaCare Nursing — a Tasmanian private home-care service offering professional, compassionate nursing in the comfort of your home. Led by Clinical Nursing Home Care Consultant Palantina Hughes, RN."
        />
      </Head>

      <SiteHeader />

      <main className="mx-auto max-w-5xl px-4 py-12">
        <h1
          className="text-3xl md:text-4xl font-bold"
          style={{ color: brand.blue }}
        >
          About NovaCare Nursing
        </h1>
        {/* ✅ New: credentials line for consistency & SEO */}
        <p className="mt-1 text-lg font-medium">
          Palantina Hughes — Clinical Nursing Home Care Consultant | Registered Nurse
        </p>

        <section className="mt-6 space-y-4 text-[1.05rem] leading-7">
          <p>
            NovaCare Nursing provides premium, discreet and compassionate
            home-based nursing care in Hobart and surrounding regions. Led by{" "}
            <strong>Palantina Hughes</strong>, Clinical Nursing Home Care
            Consultant and Registered Nurse, NovaCare is built on a foundation
            of professionalism, empathy, and excellence.
          </p>

          <p>
            Our mission is to deliver private, personalised nursing care that
            supports independence, dignity, and comfort — all in the familiar
            surroundings of your own home. We offer a range of premium nursing
            services tailored to meet each client’s individual needs, from
            clinical care and wound management to palliative and post-operative
            support.
          </p>

          <p>
            At NovaCare Nursing, we believe that exceptional care begins with
            genuine compassion and clinical excellence. Our care philosophy
            centres on trust, respect, and professional integrity, ensuring
            every client receives not only expert nursing but heartfelt care.
          </p>
        </section>

        <p className="mt-6">
          Learn more about{" "}
          <a
            href="/about-palantina"
            className="text-[color:var(--brand-gold)] hover:underline"
          >
            Palantina Hughes
          </a>
          .
        </p>
      </main>

      <SiteFooter />
    </>
  );
}
