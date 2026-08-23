import Head from "next/head";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import ContactCta from "../../components/ContactCta";

const careAreas = [
  ["Comfort-focused assessment", "Clinical review of symptoms, comfort, function, skin, hydration, medication-related concerns and changes that may need escalation."],
  ["Prescribed treatment", "Medication administration and nursing treatments can be provided when the required current written medical orders and clinical information are in place."],
  ["Family support", "Clear explanation, practical guidance and calm nursing support can help families understand what is happening and what to watch for."],
  ["Care coordination", "With consent, NovaCare Nursing can communicate with GPs, palliative care services, pharmacies, registered providers and the wider treating team."],
];

export default function PalliativeCare() {
  return (
    <>
      <Head>
        <title>Palliative Care at Home Hobart | NovaCare Nursing</title>
        <meta name="description" content="Nurse-led palliative and end-of-life care at home across Hobart and Southern Tasmania, with comfort-focused assessment, prescribed treatment, family support and clinical coordination." />
        <link rel="canonical" href="https://www.novacarenursing.com.au/services/palliative-care" />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content="Palliative Care at Home Hobart | NovaCare Nursing" />
        <meta property="og:description" content="Experienced, comfort-focused palliative nursing at home across Hobart and Southern Tasmania." />
        <meta property="og:url" content="https://www.novacarenursing.com.au/services/palliative-care" />
        <meta property="og:type" content="website" />
      </Head>

      <SiteHeader />
      <main className="bg-[#F8FCFD] font-sans text-[#526B7C]">
        <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div aria-hidden="true" className="absolute -left-24 top-8 h-72 w-72 rounded-full bg-[#FFF2EC]/80 blur-3xl" />
          <div aria-hidden="true" className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-[#EAE1FC]/50 blur-3xl" />
          <div className="relative mx-auto max-w-7xl rounded-[2.25rem] border border-[#F2DDD5] bg-white p-7 shadow-[0_24px_70px_rgba(29,57,82,0.09)] sm:p-9 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B9654F]">NovaCare Nursing — Aged Care Specialists</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#1D3952] sm:text-5xl lg:text-[3.5rem]">Palliative and end-of-life nursing, in the place you call home.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8">When time, comfort and continuity matter, experienced nursing can help make care at home feel more coordinated, understandable and supported.</p>
            <p className="mt-4 max-w-3xl leading-8">NovaCare Nursing provides nurse-led palliative care across Hobart and Southern Tasmania, working with you, the people important to you and your treating team.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex min-h-[50px] items-center justify-center rounded-2xl bg-[#2FBFC4] px-6 py-3 font-semibold text-[#173B5C] shadow-sm transition hover:bg-[#59D6D0]">Discuss palliative care</Link>
              <Link href="/support-at-home" className="inline-flex min-h-[50px] items-center justify-center rounded-2xl border border-[#D8D1F4] bg-[#F8F6FF] px-6 py-3 font-semibold text-[#5C43A8] transition hover:bg-[#F2EEFF]">Support at Home pathway</Link>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6E3BE8]">Care that sees the whole situation</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#1D3952] sm:text-4xl">Comfort is clinical. It is also deeply personal.</h2>
                <p className="mt-4 leading-8">Palliative nursing is not only about a single symptom or medication. Comfort can be affected by pain, breathlessness, nausea, anxiety, skin integrity, continence, mobility, nutrition, sleep, cognition, medication effects and the practical realities around the person.</p>
                <p className="mt-4 leading-8">Our role is to assess what is happening, provide nursing care within the agreed plan and communicate clearly when the wider treating team needs to be involved.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {careAreas.map(([title, text], index) => {
                  const tones = ["border-[#F2DDD5] bg-[#FFF2EC]", "border-[#E3DDFB] bg-[#F2EEFF]", "border-[#D7EEF0] bg-[#EAF9FA]", "border-[#DCE8F8] bg-[#EEF4FF]"];
                  return <article key={title} className={`rounded-[1.5rem] border p-6 ${tones[index]}`}><h3 className="text-xl font-semibold text-[#1D3952]">{title}</h3><p className="mt-3 leading-7">{text}</p></article>;
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-[#D7EEF0] bg-[#EAF9FA] p-7 sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#238C93]">Accessing care</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#1D3952]">Private nursing or Support at Home.</h2>
              <p className="mt-4 leading-8">Palliative nursing can be booked privately. If you receive Support at Home, you can also ask your registered provider whether NovaCare Nursing can be engaged under an agreed provider arrangement.</p>
              <div className="mt-5 flex flex-wrap gap-3"><Link href="/private-nursing" className="font-semibold text-[#238C93] underline underline-offset-4">Private Nursing</Link><Link href="/support-at-home" className="font-semibold text-[#6E3BE8] underline underline-offset-4">Support at Home</Link></div>
            </div>
            <div className="rounded-[2rem] border border-[#E3DDFB] bg-[#F2EEFF] p-7 sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6E3BE8]">Responsive nursing</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#1D3952]">Care may be arranged across 24 hours.</h2>
              <p className="mt-4 leading-8">Day, evening, overnight, weekend and public-holiday nursing may be arranged subject to availability, clinical suitability and the relevant service or funding arrangement.</p>
              <p className="mt-4 text-sm leading-7">NovaCare Nursing is not an emergency service. For immediate or life-threatening concerns, call Triple Zero (000).</p>
            </div>
          </div>
        </section>
      </main>
      <ContactCta />
      <SiteFooter />
    </>
  );
}
