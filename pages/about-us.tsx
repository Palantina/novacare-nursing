import Head from "next/head";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>
          Our Staff | Registered Nurse &amp; Founder – NovaCare Nursing
        </title>
        <meta
          name="description"
          content="Meet Palantina (Tina) Hughes, Registered Nurse and founder of NovaCare Nursing, bringing hospital-level clinical expertise into the homes of older people and people living with disability across Southern Tasmania."
        />
        <link
          rel="canonical"
          href="https://www.novacarenursing.com.au/about-us"
        />
        <meta name="robots" content="index,follow" />
      </Head>

      <SiteHeader />

      <main className="mx-auto max-w-5xl px-4 py-12 text-[1.05rem] leading-7">
        <h1 className="text-3xl md:text-4xl font-bold">
          About Palantina (Tina) Hughes
        </h1>
        <p className="mt-1 text-lg font-medium">
          Registered Nurse &amp; Founder – NovaCare Nursing
        </p>

        <section className="mt-8 space-y-5">
          <p>
            Palantina (&quot;Tina&quot;) Hughes is a highly experienced
            Registered Nurse and Clinical Nursing Home Care Consultant based in
            Southern Tasmania, and the founder of NovaCare Nursing. With more
            than 15 years of nursing experience across emergency, community and
            home care settings, Tina brings hospital-level clinical expertise
            directly into the homes of older people and people living with
            disability.
          </p>

          <p>
            Tina&apos;s career began in the Emergency Department at Launceston
            General Hospital, where she spent over a decade providing rapid
            assessment, triage and complex care to people in crisis. She has
            extensive experience in acute and chronic disease management,
            advanced wound care, palliative care, venepuncture and cannulation,
            catheter care and managing clinically complex, high-risk
            presentations.
          </p>

          <p>
            Moving into community and home-based nursing, Tina has worked in
            roles such as Community Nurse, Community Rapid Response nurse,
            Clinical Lead for home care services and Care Designer for private
            in-home care. In these roles she has been responsible for
            comprehensive in-home assessments, care planning, clinical
            governance, quality improvement, incident management (including
            SIRS), mentoring staff and working closely with GPs, specialists and
            allied health teams.
          </p>

          <p>
            Through NovaCare Nursing, Tina combines this deep clinical
            background with a genuinely person-centred, relationship-based
            approach. Every visit is tailored, thorough and evidence-based, with
            a strong focus on dignity, independence and safety at home. Tina is
            passionate about making premium, hospital-quality nursing accessible
            in the community, ensuring that clients and families feel informed,
            supported and truly cared for.
          </p>

          <p>
            When you invite NovaCare Nursing into your home, you are cared for
            by an experienced Registered Nurse who treats you as an individual –
            not a number – and partners with you to achieve the best possible
            health outcomes.
          </p>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
