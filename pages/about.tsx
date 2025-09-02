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
          content="Learn about NovaCare Nursing in Hobart — premium, private, and compassionate home nursing led by Registered Nurse Palantina Hughes."
        />
      </Head>

      <SiteHeader />

      <main className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold" style={{ color: brand.blue }}>
          About NovaCare Nursing
        </h1>

        <section className="mt-6 space-y-4 text-[1.05rem] leading-7">
          <p>
            NovaCare Nursing provides premium, discreet and compassionate nursing in the comfort
            of your home across Hobart and surrounds. We combine clinical excellence with a warm,
            respectful approach so you feel safe, supported, and cared for.
          </p>
          <p>
            Led by Registered Nurse <strong>Palantina Hughes</strong>, NovaCare specialises in tailored
            clinical home care — working closely with you, your family, and your healthcare team to
            achieve the best outcomes.
          </p>
        </section>

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

        <section className="mt-10">
          <h2 className="text-2xl font-semibold" style={{ color: brand.blue }}>
            Credentials & Safeguards
          </h2>
          <ul className="mt-4 list-disc pl-5 space-y-2">
            <li>AHPRA Registered Nurse</li>
            <li>Current Police Check & Working with Vulnerable People (WWVP)</li>
            <li>Fully insured for private practice</li>
          </ul>
        </section>

        {/* Who we support */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4" style={{ color: brand.blue }}>
            Who We Support
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>NDIS Clients:</strong> Tailored supports, with RN oversight for complex needs.</li>
            <li><strong>Private Nursing:</strong> Premium in-home clinical care, recovery support, and health management.</li>
            <li><strong>Palliative Care:</strong> Compassionate, family-centred support with dignified symptom management.</li>
            <li><strong>High Intensity & Specialist Nursing Supports:</strong> Advanced procedures and complex care under RN governance.</li>
            <li>
              <strong>Subcontracting for Aged Care Providers:</strong> At present, NovaCare Nursing provides this service personally,
              offering reliable and professional coverage. As demand increases, additional staff will be added to expand
              support for residential and community providers.
            </li>
          </ul>
        </section>
      </main>

      {/* CTA banner */}
      <ContactCta />

      <SiteFooter />
    </>
  );
}
