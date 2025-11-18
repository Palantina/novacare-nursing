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
          content="Learn about NovaCare Nursing in Hobart and Southern Tasmania — premium, evidence-based home nursing led by Registered Nurse and Clinical Nursing Home Care Consultant Palantina Hughes."
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

        {/* Compact trust / credibility badges */}
        <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2 md:grid-cols-3">
          <div className="rounded-xl border border-[color:var(--brand-gold)]/30 bg-white/70 backdrop-blur px-4 py-3">
            <div className="font-semibold" style={{ color: brand.blue }}>
              Experienced Registered Nurse
            </div>
            <p className="opacity-80">
              Over 15 years across emergency, community and home care.
            </p>
          </div>

          <div className="rounded-xl border border-[color:var(--brand-gold)]/30 bg-white/70 backdrop-blur px-4 py-3">
            <div className="font-semibold" style={{ color: brand.blue }}>
              Clinical Nursing Home Care Consultant
            </div>
            <p className="opacity-80">
              Expert in complex assessments, care planning and governance.
            </p>
          </div>

          <div className="rounded-xl border border-[color:var(--brand-gold)]/30 bg-white/70 backdrop-blur px-4 py-3">
            <div className="font-semibold" style={{ color: brand.blue }}>
              Premium Home-Based Care
            </div>
            <p className="opacity-80">
              Hospital-level clinical care delivered in the comfort of home.
            </p>
          </div>

          <div className="rounded-xl border border-[color:var(--brand-gold)]/30 bg-white/70 backdrop-blur px-4 py-3">
            <div className="font-semibold" style={{ color: brand.blue }}>
              NDIS, Support at Home &amp; Private
            </div>
            <p className="opacity-80">
              Flexible options for self-managed, plan-managed and private
              clients.
            </p>
          </div>

          <div className="rounded-xl border border-[color:var(--brand-gold)]/30 bg-white/70 backdrop-blur px-4 py-3">
            <div className="font-semibold" style={{ color: brand.blue }}>
              Evidence-Based Practice
            </div>
            <p className="opacity-80">
              Care aligned with current guidelines, safety standards and best
              practice.
            </p>
          </div>

          <div className="rounded-xl border border-[color:var(--brand-gold)]/30 bg-white/70 backdrop-blur px-4 py-3">
            <div className="font-semibold" style={{ color: brand.blue }}>
              Advanced Skills
            </div>
            <p className="opacity-80">
              Advanced wound care, cannulation, IV therapy, continence and
              palliative care.
            </p>
          </div>
        </div>

        {/* Main about copy */}
        <section className="mt-6 space-y-4 text-[1.05rem] leading-7">
          <p>
            NovaCare Nursing provides premium, discreet and compassionate
            home-based nursing care in Hobart and surrounding regions. Led by{" "}
            <strong>Palantina (Tina) Hughes</strong>, Clinical Nursing Home Care
            Consultant and Registered Nurse, NovaCare Nursing is built on a
            foundation of professionalism, empathy and clinical excellence.
          </p>

          <p>
            Our focus is on delivering hospital-level clinical care in the
            comfort and safety of your own home. We work alongside GPs,
            specialists, allied health providers and support coordinators to
            ensure that care is safe, coordinated and aligned with your goals.
          </p>

          <p>
            We specialise in caring for older people and people living with
            disability who have complex or changing health needs. Every visit is
            thorough, evidence-based and individually tailored — whether it is
            wound care, catheter or continence care, medication management,
            clinical reviews or general health support.
          </p>

          <p>
            At NovaCare Nursing, we believe that truly premium care combines
            expert clinical skills with time, respect and genuine listening. You
            are never treated as a number. We take the time to understand your
            story, your environment and what matters most to you and your
            family.
          </p>

          <p>
            By bringing advanced nursing care into the home, NovaCare Nursing
            aims to support dignity, independence and safety, while reducing
            avoidable hospital presentations and supporting people to live well
            where they feel most comfortable.
          </p>
        </section>

        {/* Link through to staff bio page */}
        <p className="mt-6">
          <a
            href="/about-us"
            className="text-[color:var(--brand-gold)] hover:underline"
          >
            Learn more about our staff
          </a>
          .
        </p>
      </main>

      <SiteFooter />
    </>
  );
}
