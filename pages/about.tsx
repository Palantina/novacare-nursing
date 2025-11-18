import Head from "next/head";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const brand = { blue: "#0B2D5C" };

export default function About() {
  return (
    <>
      <Head>
        <title>About | NovaCare Nursing</title>
        <meta
          name="description"
          content="Learn about NovaCare Nursing in Hobart — premium, private, and compassionate home nursing led by Palantina Hughes, Clinical Nursing Home Care Consultant."
        />
        <link rel="canonical" href="https://www.novacarenursing.com.au/about" />
        <meta name="robots" content="index,follow" />
      </Head>

      <SiteHeader />

      <main className="mx-auto max-w-5xl px-4 py-12">
        <h1
          className="text-3xl md:text-4xl font-bold"
          style={{ color: brand.blue }}
        >
          About NovaCare Nursing
        </h1>

        {/* Compact trust badges — elegant and scannable */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          <div className="rounded-xl border border-[color:var(--brand-gold)]/30 bg-white/60 backdrop-blur px-4 py-3">
            <div className="font-semibold" style={{ color: brand.blue }}>
              AHPRA Registered
            </div>
            <p className="text-sm opacity-80">
              Professional, accountable standards.
            </p>
          </div>
          <div className="rounded-xl border border-[color:var(--brand-gold)]/30 bg-white/60 backdrop-blur px-4 py-3">
            <div className="font-semibold" style={{ color: brand.blue }}>
              Fully Insured
            </div>
            <p className="text-sm opacity-80">Private practice cover in place.</p>
          </div>
          <div className="rounded-xl border border-[color:var(--brand-gold)]/30 bg-white/60 backdrop-blur px-4 py-3">
            <div className="font-semibold" style={{ color: brand.blue }}>
              WWVP &amp; Police Check
            </div>
            <p className="text-sm opacity-80">Current clearances held.</p>
          </div>
          <div className="rounded-xl border border-[color:var(--brand-gold)]/30 bg-white/60 backdrop-blur px-4 py-3">
            <div className="font-semibold" style={{ color: brand.blue }}>
              Advanced First Aid &amp; Resuscitation
            </div>
            <p className="text-sm opacity-80">
              Incl. Oxygen Therapy certified.
            </p>
          </div>
        </div>

        <section className="mt-6 space-y-4 text-[1.05rem] leading-7">
          <p>
            NovaCare Nursing provides premium, discreet and compassionate
            home-based nursing care in Hobart and surrounding regions. Led by{" "}
            <strong>Palantina Hughes</strong>, Clinical Nursing Home Care
            Consultant and Registered Nurse, NovaCare Nursing is built on a
            foundation of professionalism, empathy, and excellence.
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

        {/* Updated link text to staff page (no trailing full stop) */}
        <p className="mt-6">
          <a
            href="/about-us"
            className="text-[color:var(--brand-gold)] hover:underline"
          >
            Learn more about our staff
          </a>
        </p>
      </main>

      <SiteFooter />
    </>
  );
}
