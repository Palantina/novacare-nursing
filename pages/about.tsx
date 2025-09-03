import Head from "next/head";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ContactCta from "../components/ContactCta";

const brand = { blue: "#0B2D5C" };

export default function About() {
  return (
    <>
      <Head>
        <title>About | NovaCare Nursing</title>
        <meta
          name="description"
          content="Learn about NovaCare Nursing — premium, private home nursing in Hobart led by Palantina Hughes, Registered Nurse & Clinical Nursing Home Care Consultant."
        />
      </Head>

      <SiteHeader />

      <main className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold" style={{ color: brand.blue }}>
          About NovaCare Nursing
        </h1>

        <section className="mt-6 space-y-4 text-[1.05rem] leading-7">
          <p>
            NovaCare Nursing provides premium, discreet and compassionate nursing in the comfort of your home across
            Hobart and surrounds. We combine clinical excellence with a warm, respectful approach so you feel safe,
            supported, and cared for.
          </p>
          <p>
            Led by <strong>Palantina Hughes</strong> — <strong>Registered Nurse</strong> &amp; <strong>Clinical Nursing Home Care Consultant</strong> — NovaCare
            specialises in tailored clinical home care, working closely with you, your family, and your healthcare team
            to achieve the best outcomes.
          </p>
        </section>

        {/* At-a-glance cards */}
        <section className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            { title: "AHPRA Registered", desc: "Professional, accountable clinical standards." },
            { title: "Premium & Discreet", desc: "Confidential, respectful, and reliable care." },
            { title: "Local to Hobart", desc: "Flexible availability across Hobart & surrounds." },
          ].map((card) => (
            <div key={card.title} className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold" style={{ color: brand.blue }}>{card.title}</h3>
              <p className="mt-2 text-sm opacity-90">{card.desc}</p>
            </div>
          ))}
        </section>

        {/* What we do – brief intro blocks to match Home tone */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-semibold" style={{ color: brand.blue }}>Who We Support</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl bg-white p-5 shadow-sm border">
              <h3 className="font-semibold" style={{ color: brand.blue }}>NDIS Participants</h3>
              <p className="mt-2 text-sm">
                Private, dignified nursing with clear clinical documentation. High Intensity & Specialist Nursing Supports available.
              </p>
            </div>
            <div className="rounded-xl bg-white p-5 shadow-sm border">
              <h3 className="font-semibold" style={{ color: brand.blue }}>Private Nursing</h3>
              <p className="mt-2 text-sm">
                Bespoke in-home nursing tailored to recovery, ongoing conditions, and comfort in familiar surroundings.
              </p>
            </div>
            <div className="rounded-xl bg-white p-5 shadow-sm border">
              <h3 className="font-semibold" style={{ color: brand.blue }}>Palliative Care</h3>
              <p className="mt-2 text-sm">
                Specialised, compassionate care that prioritises comfort, dignity, and family support.
              </p>
            </div>
            <div className="rounded-xl bg-white p-5 shadow-sm border">
              <h3 className="font-semibold" style={{ color: brand.blue }}>High Intensity & Specialist Supports</h3>
              <p className="mt-2 text-sm">
                Ventilation, tracheostomy/laryngectomy support, dysphagia, enteral feeding, complex bowel care,
                epilepsy management, complex wound care, SC/IM injections, and catheter care.
              </p>
            </div>
          </div>
        </section>

        {/* Subcontracting note */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold" style={{ color: brand.blue }}>
            Subcontracted Nursing Care for Aged Care Providers
          </h2>
          <p className="mt-3 text-[1.05rem] leading-7">
            NovaCare Nursing provides personal, reliable and professional coverage for Home and Community Care providers —
            policy-aligned, fully insured and compliant, with clear documentation and communication.
          </p>
        </section>

        {/* Credentials */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold" style={{ color: brand.blue }}>Credentials & Safeguards</h2>
          <ul className="mt-4 list-disc pl-5 space-y-2">
            <li>AHPRA Registered Nurse</li>
            <li>Clinical Nursing Home Care Consultant</li>
            <li>Current Police Check & Working with Vulnerable People (WWVP)</li>
            <li>Fully insured for private practice</li>
          </ul>
        </section>

        {/* CTA */}
        <div className="mt-14">
          <ContactCta
            heading="Ready to discuss your care needs?"
            sub="We’ll respond promptly and confidentially."
            ctaHref="/contact"
            ctaText="Send a Message"
          />
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
