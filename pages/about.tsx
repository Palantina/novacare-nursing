import Head from "next/head";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us | NovaCare Nursing</title>
        <meta
          name="description"
          content="Learn more about NovaCare Nursing and Palantina Hughes — Registered Nurse, Clinical Nursing Home Care Consultant and Founder of NovaCare Nursing in Southern Tasmania."
        />
        <link rel="canonical" href="https://www.novacarenursing.com.au/about-us" />
        <meta name="robots" content="index,follow" />
      </Head>

      <SiteHeader />

      <main className="mx-auto max-w-5xl px-4 py-12 text-[1.05rem] leading-7">
        <h1 className="text-3xl md:text-4xl font-bold">About Us</h1>
        <p className="mt-1 text-lg font-medium">
          Led by <strong>Palantina (Tina) Hughes</strong> — Registered Nurse &amp; Founder,
          Clinical Nursing Home Care Consultant
        </p>

        <section className="mt-8 space-y-5">

          <p>
            Palantina (“Tina”) Hughes is a highly experienced Registered Nurse and Clinical
            Nursing Home Care Consultant based in Southern Tasmania, and the founder of
            NovaCare Nursing. With over 15 years of experience across emergency, community
            and home care, Tina brings hospital-level clinical skills into the comfort and
            privacy of your home.
          </p>

          <p>
            Tina spent more than a decade in the Emergency Department at Launceston General
            Hospital, providing triage, rapid assessment and complex care for people in
            crisis. Her clinical expertise includes advanced wound care, palliative care,
            venepuncture and cannulation, continence and catheter care, and managing
            clinically complex, high-risk presentations.
          </p>

          <p>
            Moving into community and home-based nursing, Tina has worked as a Community
            Nurse, Community Rapid Response nurse, Clinical Lead for home care services and
            Care Designer for private in-home care. She has led clinical governance, risk
            and incident management (including SIRS), care planning, quality improvement and
            mentoring of nurses and care staff, while collaborating closely with GPs,
            specialists and allied health teams.
          </p>

          <p>
            Through NovaCare Nursing, Tina combines this depth of clinical experience with a
            warm, person-centred approach. Every visit is thorough, evidence-based and
            tailored to the individual, with a strong focus on dignity, independence and
            safety at home.
          </p>

          <p>
            When you invite NovaCare Nursing into your home, you are cared for by an
            experienced Registered Nurse who knows how to manage complexity, communicates
            clearly, and genuinely partners with you and your family to achieve the best
            possible outcomes –{" "}
            <span className="text-[color:var(--brand-gold)] font-semibold">
              Premium Nursing, Heartfelt Care.
            </span>
          </p>

          {/* Credentials section unchanged */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold">Credentials &amp; Safeguards</h2>
            <ul className="mt-3 list-disc pl-5 space-y-1">
              <li>AHPRA Registered Nurse (RN)</li>
              <li>Current Police Check &amp; Working with Vulnerable People (WWVP)</li>
              <li>Fully insured for private practice</li>
              <li>Certified in Advanced First Aid</li>
              <li>Certified in Advanced Resuscitation &amp; Oxygen Therapy</li>
            </ul>
          </div>

        </section>
      </main>

      <SiteFooter />
    </>
  );
}
