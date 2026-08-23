import Head from "next/head";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ContactCta from "../components/ContactCta";

const features = [
  ["Continuous coverage", "Care is rostered across the full 24 hours so support is available throughout the day and overnight."],
  ["Nurse-led planning", "Registered Nurse assessment helps define the care plan, clinical risks, escalation points and when nursing input is required."],
  ["Continuity", "The care team is designed to reduce unnecessary change and help workers know your routines, preferences and baseline."],
  ["Flexible clinical input", "Nursing involvement can increase when your health needs change, while everyday support remains coordinated around the same plan."],
];

export default function TwentyFourHourCare() {
  return (
    <>
      <Head>
        <title>24-Hour Aged Care at Home Hobart | NovaCare Nursing</title>
        <meta name="description" content="Nurse-led 24-hour aged care at home across Hobart and Southern Tasmania, with continuous care coverage, clinical oversight, continuity and escalation support." />
        <link rel="canonical" href="https://www.novacarenursing.com.au/24-hour-care" />
        <meta name="robots" content="index,follow" />
      </Head>

      <SiteHeader />
      <main className="bg-[#F8FCFD] font-sans text-[#526B7C]">
        <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div aria-hidden="true" className="absolute -left-24 top-6 h-72 w-72 rounded-full bg-[#DDF5F5]/70 blur-3xl" />
          <div aria-hidden="true" className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-[#EAE1FC]/55 blur-3xl" />
          <div className="relative mx-auto max-w-7xl rounded-[2.25rem] border border-[#DCEDEF] bg-white p-7 shadow-[0_24px_70px_rgba(29,57,82,0.09)] sm:p-9 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2B9FA5] sm:text-base">NovaCare Nursing — Aged Care Specialists</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#1D3952] sm:text-5xl lg:text-[3.5rem]">24-Hour Care at home, with nursing built around it.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8">When support is needed across the whole day and overnight, 24-Hour Care provides continuous coverage through an appropriately rostered care team.</p>
            <p className="mt-4 max-w-3xl leading-8">The difference is clinical leadership. NovaCare Nursing brings Registered Nurse assessment, care planning, review and escalation into the same model so increasing needs can be recognised and responded to early.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex min-h-[50px] items-center justify-center rounded-2xl bg-[#2FBFC4] px-6 py-3 font-semibold text-[#173B5C] shadow-sm transition hover:bg-[#59D6D0]">Discuss 24-Hour Care</Link>
              <Link href="/live-in-care" className="inline-flex min-h-[50px] items-center justify-center rounded-2xl border border-[#D8D1F4] bg-[#F8F6FF] px-6 py-3 font-semibold text-[#5C43A8] transition hover:bg-[#F2EEFF]">Explore Live-In Care</Link>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6E3BE8]">When needs are higher</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#1D3952] sm:text-4xl">Support should be able to grow with you.</h2>
                <p className="mt-4 leading-8">24-Hour Care may be considered when someone cannot safely be left without support for significant periods, needs frequent assistance day and night, or has changing health, dementia, mobility, continence, palliative or other complex care needs.</p>
                <p className="mt-4 leading-8">The model is individual. A clinical assessment helps determine the level of care, nursing involvement and escalation planning required.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {features.map(([title, text], index) => {
                  const tones = ["border-[#D7EEF0] bg-[#EAF9FA]", "border-[#E3DDFB] bg-[#F2EEFF]", "border-[#DCE8F8] bg-[#EEF4FF]", "border-[#F2DDD5] bg-[#FFF2EC]"];
                  return (
                    <article key={title} className={`rounded-[1.5rem] border p-6 ${tones[index]}`}>
                      <h3 className="text-xl font-semibold text-[#1D3952]">{title}</h3>
                      <p className="mt-3 leading-7">{text}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl grid gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] border border-[#D7EEF0] bg-[#EAF9FA] p-7 sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#238C93]">24-Hour Care</p>
              <h2 className="mt-3 text-2xl font-semibold text-[#1D3952]">Continuous coverage across the day and night.</h2>
              <p className="mt-4 leading-8">This model uses a rostered team so support remains available throughout the 24-hour period.</p>
            </div>
            <div className="rounded-[2rem] border border-[#E3DDFB] bg-[#F2EEFF] p-7 sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6E3BE8]">Live-In Care</p>
              <h2 className="mt-3 text-2xl font-semibold text-[#1D3952]">Longer, familiar periods of support in your home.</h2>
              <p className="mt-4 leading-8">Live-In Care is structured around agreed rostered periods and appropriate rest arrangements. It is not the same as continuous active 24-hour coverage.</p>
            </div>
          </div>
        </section>
      </main>
      <ContactCta />
      <SiteFooter />
    </>
  );
}
