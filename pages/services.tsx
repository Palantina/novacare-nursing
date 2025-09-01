import Head from "next/head";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const brandBlue = "#0B2D5C";

const services = [
  {
    title: "Post-Operative Support",
    desc: "Monitoring, medication management, wound care, pain control, and safe mobility at home.",
  },
  {
    title: "Chronic & Complex Care",
    desc: "Personalised support for diabetes, cardiac, respiratory, and neurological conditions.",
  },
  {
    title: "Palliative & Respite",
    desc: "Comfort-focused care, symptom management, and family support.",
  },
];

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | NovaCare Nursing</title>
      </Head>
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl font-bold text-center" style={{ color: brandBlue }}>Services</h1>
        <p className="text-center opacity-80 mt-2">Skilled, private nursing at home — tailored to you.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-xl" style={{ color: brandBlue }}>{s.title}</h3>
              <p className="mt-2 text-sm opacity-90">{s.desc}</p>
            </div>
          ))}
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
