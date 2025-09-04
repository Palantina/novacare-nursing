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
          content="Learn about NovaCare Nursing in Hobart — premium, private, and compassionate home nursing led by Palantina Hughes, Clinical Nursing Home Care Consultant | Registered Nurse."
        />
      </Head>

      <SiteHeader />

      <main className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold" style={{ color: brand.blue }}>
          About NovaCare Nursing
        </h1>

        <section className="mt-6 space-y-4 text-[1.05rem] leading-7">
          <p>
            NovaCare Nursing provides premium, discreet and compassionate care in the comfort of your
            home across Hobart and surrounds. We combine clinical excellence with a warm, respectful
            approach so you feel safe, supported, and cared for.
          </p>
          <p>
            Led by <strong>Clinical Nursing Home Care Consultant | Registered Nurse Palantina Hughes</strong>,
            NovaCare specialises in tailored clinical home care — working closely with you, your family,
            and your healthcare team to achieve the best outcomes.
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
            Credentials &amp; Safeguards
          </h2>
          <ul className="mt-4 list-disc pl-5 space-y-2">
            <li>AHPRA Registered Nurse</li>
            <li>Clinical Nursing Home Care Consultant</li>
            <li>Current Police Check &amp; Working with Vulnerable People (WWVP)</li>
            <li>Fully insured for private practice</li>
          </ul>
        </section>

        <section className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold" style={{ color: brand.blue }}>
            Focus Areas
          </h2>
          <p>
            NovaCare supports <strong>NDIS participants</strong>, <strong>private nursing clients</strong>,
            and provides <strong>specialist &amp; high-intensity supports</strong> (e.g., complex wound care,
            catheter care, enteral feeding, seizure support) as well as dignified <strong>palliative care</strong>.
            We also offer <strong>subcontracted nursing</strong> for Home &amp; Community Care providers.
          </p>
        </section>

        <section className="mt-12">
          <a
            href="/contact"
            className="inline-block rounded-xl px-6 py-3 font-semibold border"
            style={{ borderColor: brand.blue, color: brand.blue }}
          >
            Ready to discuss your care needs?
          </a>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
