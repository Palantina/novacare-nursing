import Head from "next/head";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ContactCta from "../components/ContactCta";

const support = [
  "Personal care, grooming and everyday routines",
  "Mobility, continence and practical support",
  "Meals, hydration and light household support",
  "Shopping, appointments and companionship",
  "Dementia-informed support and familiar routines",
  "Observation, documentation and early reporting of change",
  "Medication assistance within the worker's role and competency",
  "Registered Nurse assessment, care planning and clinical oversight",
];

export default function LiveInCare() {
  return (
    <>
      <Head>
        <title>Live-In Aged Care Hobart | NovaCare Nursing</title>
        <meta name="description" content="Nurse-led live-in aged care in Hobart and Southern Tasmania, designed around continuity, familiar routines, clinical oversight and staying at home as care needs increase." />
        <link rel="canonical" href="https://www.novacarenursing.com.au/live-in-care" />
        <meta name="robots" content="index,follow" />
      </Head>

      <SiteHeader />
      <main className="bg-[#F8FCFD] font-sans text-[#526B7C]">
        <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div aria-hidden="true" className="absolute -left-24 top-6 h-72 w-72 rounded-full bg-[#DDF5F5]/70 blur-3xl" />
          <div aria-hidden="true" className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-[#EAE1FC]/55 blur-3xl" />
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] border border-[#DCEDEF] bg-white p-7 shadow-[0_24px_70px_rgba(29,57,82,0.09)] sm:p-9 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2B9FA5] sm:text-base">NovaCare Nursing — Aged Care Specialists</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#1D3952] sm:text-5xl lg:text-[3.5rem]">Live-In Care, built around the life you want to keep living.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8">When a few short visits are no longer enough, Live-In Care can provide greater continuity, familiarity and practical support while you remain in your own home.</p>
            <p className="mt-4 max-w-3xl leading-8">NovaCare Nursing&apos;s model is nurse-led. Care begins with understanding your health, routines, risks, preferences and what matters to you, then building the right support around that picture.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex min-h-[50px] items-center justify-center rounded-2xl bg-[#2FBFC4] px-6 py-3 font-semibold text-[#173B5C] shadow-sm transition hover:bg-[#59D6D0]">Discuss Live-In Care</Link>
              <Link href="/24-hour-care" className="inline-flex min-h-[50px] items-center justify-center rounded-2xl border border-[#D8D1F4] bg-[#F8F6FF] px-6 py-3 font-semibold text-[#5C43A8] transition hover:bg-[#F2EEFF]">Compare 24-Hour Care</Link>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6E3BE8]">More than someone being present</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#1D3952] sm:text-4xl">Continuity, observation and support that fits your day.</h2>
              <p className="mt-4 leading-8">Live-In Care may suit people who want a consistent presence at home, need support across longer parts of the day, live with dementia or changing function, or are finding a series of short visits no longer provides enough continuity.</p>
              <p className="mt-4 leading-8">The exact arrangement is individual. Roster design, duties, rest arrangements, clinical needs and the number of people in the care team are agreed before care begins.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {support.map((item, index) => {
                const tones = ["border-[#D7EEF0] bg-[#EAF9FA]", "border-[#E3DDFB] bg-[#F2EEFF]", "border-[#DCE8F8] bg-[#EEF4FF]", "border-[#F2DDD5] bg-[#FFF2EC]"];
                return <div key={item} className={`rounded-[1.4rem] border p-5 leading-7 ${tones[index % tones.length]}`}>{item}</div>;
              })}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#D7EEF0] bg-gradient-to-br from-[#EAF9FA] via-white to-[#F2EEFF] p-7 sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#238C93]">Nurse-led from the beginning</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#1D3952]">Care workers should never be left to carry clinical risk alone.</h2>
            <p className="mt-4 max-w-4xl leading-8">Registered Nurse assessment and clinical planning help define what to watch, what can be managed within the care worker role, when nursing input is required and when a change needs escalation to the wider healthcare team.</p>
            <p className="mt-4 max-w-4xl font-semibold leading-8 text-[#1D3952]">That is what nurse-led aged care means at NovaCare Nursing: clinical oversight is part of the model, not an afterthought.</p>
          </div>
        </section>
      </main>
      <ContactCta />
      <SiteFooter />
    </>
  );
}
