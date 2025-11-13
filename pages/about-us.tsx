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
          content="Learn more about NovaCare Nursing and Palantina Hughes — Owner & Care Manager, Clinical Nursing Home Care Consultant and Registered Nurse with over 17 years of experience across Tasmania. Certified in Advanced First Aid and Advanced Resuscitation & Oxygen Therapy."
        />
        <link
          rel="canonical"
          href="https://www.novacarenursing.com.au/about-us"
        />
        <meta name="robots" content="index,follow" />
      </Head>

      <SiteHeader />

      <main className="mx-auto max-w-5xl px-4 py-12 text-[1.05rem] leading-7">
        <h1 className="text-3xl md:text-4xl font-bold">About Us</h1>
        <p className="mt-1 text-lg font-medium">
          Led by <strong>Palantina (&quot;Tina&quot;) Hughes</strong> — Founder,
          Clinical Nursing Home Care Consultant &amp; Registered Nurse
        </p>

        <section className="mt-8 space-y-5">
          <p>
            I am a highly experienced Registered Nurse and Clinical Nursing Home
            Care Consultant based in Southern Tasmania, and the founder of{" "}
            <strong>NovaCare Nursing</strong>. With over 15 years of experience
            across emergency, community and home care, I bring hospital-level
            clinical skills into the comfort and privacy of your home.
          </p>

          <p>
            I spent more than a decade working in the Emergency Department at
            Launceston General Hospital, providing triage, rapid assessment and
            complex care for people in crisis. My clinical expertise includes
            advanced wound care, palliative care, venepuncture and cannulation,
            continence and catheter care, and managing clinically complex,
            high-risk presentations.
          </p>

          <p>
            In community and home-based nursing, I have worked as a Community
            Nurse, Community Rapid Response nurse, Clinical Lead for home care
            services and Care Manager for private in-home care. In these roles I
            have led clinical governance, risk and incident management
            (including SIRS), care planning, quality improvement and mentoring
            of nurses and care staff, while collaborating closely with GPs,
            specialists and allied health teams.
          </p>

          <p>
            Through NovaCare Nursing, I combine this depth of clinical
            experience with a warm, person-centred approach. Every visit is
            thorough, evidence-based and tailored to you as an individual, with
            a strong focus on dignity, independence and safety at home. When you
            invite NovaCare Nursing into your home, you are cared for by an
            experienced Registered Nurse who can manage complexity, communicates
            clearly, and partners with you and your family to achieve the best
            possible outcomes – <strong>Premium Nursing, Heartfelt Care.</strong>
          </p>

          {/* Separate, clearly labeled trust section */}
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
