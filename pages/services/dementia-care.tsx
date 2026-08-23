import Head from "next/head";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import ContactCta from "../../components/ContactCta";

const assessmentAreas = [
  ["Changed cognition or behaviour", "A change deserves clinical curiosity. Pain, infection, constipation, medication effects, fear, fatigue and other unmet needs can all affect how someone feels and responds."],
  ["Daily function", "Mobility, continence, nutrition, hydration, sleep, personal care and the home environment all contribute to safety and wellbeing."],
  ["The person behind the symptoms", "Routines, communication style, relationships, life history, preferences and familiar cues matter when planning care."],
  ["Support around you", "Family, carers, GPs, specialists, allied health and existing aged-care providers may all need to be part of a coordinated plan."],
];

export default function DementiaCare() {
  return (
    <>
      <Head>
        <title>Dementia Care at Home Hobart | NovaCare Nursing</title>
        <meta name="description" content="Nurse-led dementia and cognitive support at home across Hobart and Southern Tasmania, with holistic assessment, care planning, family guidance and clinical escalation." />
        <link rel="canonical" href="https://www.novacarenursing.com.au/services/dementia-care" />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content="Dementia Care at Home Hobart | NovaCare Nursing" />
        <meta property="og:description" content="Dementia-informed, nurse-led assessment and care planning at home across Southern Tasmania." />
        <meta property="og:url" content="https://www.novacarenursing.com.au/services/dementia-care" />
        <meta property="og:type" content="website" />
      </Head>

      <SiteHeader />
      <main className="bg-[#F8FCFD] font-sans text-[#526B7C]">
        <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div aria-hidden="true" className="absolute -left-24 top-8 h-72 w-72 rounded-full bg-[#FFF2EC]/75 blur-3xl" />
          <div aria-hidden="true" className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-[#EAE1FC]/55 blur-3xl" />
          <div className="relative mx-auto max-w-7xl rounded-[2.25rem] border border-[#E3DDFB] bg-white p-7 shadow-[0_24px_70px_rgba(29,57,82,0.09)] sm:p-9 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6E3BE8]">NovaCare Nursing — Aged Care Specialists</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#1D3952] sm:text-5xl lg:text-[3.5rem]">Dementia care that starts with the person, not the behaviour.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8">When cognition, behaviour, function or comfort changes, good care asks what may be happening underneath the change—not simply how to manage it.</p>
            <p className="mt-4 max-w-3xl leading-8">NovaCare Nursing provides nurse-led dementia and cognitive support at home, combining clinical assessment with practical care planning and an understanding of the person&apos;s routines, history and preferences.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex min-h-[50px] items-center justify-center rounded-2xl bg-[#2FBFC4] px-6 py-3 font-semibold text-[#173B5C] shadow-sm transition hover:bg-[#59D6D0]">Discuss dementia support</Link>
              <Link href="/staying-at-home-care" className="inline-flex min-h-[50px] items-center justify-center rounded-2xl border border-[#D8D1F4] bg-[#F8F6FF] px-6 py-3 font-semibold text-[#5C43A8] transition hover:bg-[#F2EEFF]">Care to stay at home</Link>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B9654F]">Look for the reason</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#1D3952] sm:text-4xl">A change in behaviour can be communication.</h2>
                <p className="mt-4 leading-8">Restlessness, withdrawal, calling out, resistance, sleep disturbance or a sudden change in function may have many contributors. A nursing assessment considers the clinical picture before assuming the change is simply part of dementia.</p>
                <p className="mt-4 leading-8">Where a new or concerning change may reflect illness or deterioration, NovaCare Nursing can escalate findings to the appropriate medical or treating team.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {assessmentAreas.map(([title, text], index) => {
                  const tones = ["border-[#F2DDD5] bg-[#FFF2EC]", "border-[#D7EEF0] bg-[#EAF9FA]", "border-[#E3DDFB] bg-[#F2EEFF]", "border-[#DCE8F8] bg-[#EEF4FF]"];
                  return <article key={title} className={`rounded-[1.5rem] border p-6 ${tones[index]}`}><h3 className="text-xl font-semibold text-[#1D3952]">{title}</h3><p className="mt-3 leading-7">{text}</p></article>;
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-[#D7EEF0] bg-[#EAF9FA] p-7 sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#238C93]">Care at home</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#1D3952]">Support can increase as needs change.</h2>
              <p className="mt-4 leading-8">For some people, the right plan may begin with clinical review and intermittent support. For others, Live-In Care or continuous 24-Hour Care may become part of a safer, more sustainable plan at home.</p>
              <div className="mt-5 flex flex-wrap gap-3"><Link href="/live-in-care" className="font-semibold text-[#238C93] underline underline-offset-4">Live-In Care</Link><Link href="/24-hour-care" className="font-semibold text-[#6E3BE8] underline underline-offset-4">24-Hour Care</Link></div>
            </div>
            <div className="rounded-[2rem] border border-[#E3DDFB] bg-[#F2EEFF] p-7 sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6E3BE8]">Access pathways</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#1D3952]">Private or through your registered provider.</h2>
              <p className="mt-4 leading-8">Clinical nursing can be booked privately. If you receive Support at Home, you can ask your registered provider whether NovaCare Nursing can be engaged to provide nursing under an agreed arrangement.</p>
              <div className="mt-5"><Link href="/support-at-home" className="font-semibold text-[#6E3BE8] underline underline-offset-4">How Support at Home works</Link></div>
            </div>
          </div>
        </section>
      </main>
      <ContactCta />
      <SiteFooter />
    </>
  );
}
