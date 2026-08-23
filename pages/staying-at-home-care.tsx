import Head from "next/head";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ContactCta from "../components/ContactCta";

const considerations = [
  ["Your clinical needs", "Health conditions, medications, cognition, mobility, continence, nutrition, skin integrity, symptoms and risks all need to be considered together."],
  ["Your daily life", "Routines, relationships, pets, community, sleep, meals, preferences and the way you want to live matter when planning care."],
  ["The support around you", "Family, informal carers, existing providers, GPs, specialists and allied health may all form part of the plan."],
  ["What is sustainable", "Care needs to be safe, appropriately staffed and realistic over time. The right model may change as your needs change."],
];

export default function StayingAtHomeCare() {
  return (
    <>
      <Head>
        <title>Alternative to Residential Aged Care Hobart | NovaCare Nursing</title>
        <meta name="description" content="Nurse-led care planning for people who want to remain at home as care needs increase, including Live-In Care, 24-Hour Care and specialist nursing across Southern Tasmania." />
        <link rel="canonical" href="https://www.novacarenursing.com.au/staying-at-home-care" />
        <meta name="robots" content="index,follow" />
      </Head>

      <SiteHeader />
      <main className="bg-[#F8FCFD] font-sans text-[#526B7C]">
        <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div aria-hidden="true" className="absolute -left-24 top-6 h-72 w-72 rounded-full bg-[#DDF5F5]/70 blur-3xl" />
          <div aria-hidden="true" className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-[#EAE1FC]/55 blur-3xl" />
          <div className="relative mx-auto max-w-7xl rounded-[2.25rem] border border-[#DCEDEF] bg-white p-7 shadow-[0_24px_70px_rgba(29,57,82,0.09)] sm:p-9 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2B9FA5] sm:text-base">NovaCare Nursing — Aged Care Specialists</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#1D3952] sm:text-5xl lg:text-[3.5rem]">When residential aged care is being considered, home may still be an option.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8">Increasing care needs do not automatically mean giving up your home. For some people, the right combination of nursing, daily support, Live-In Care or 24-Hour Care can create another path.</p>
            <p className="mt-4 max-w-3xl leading-8">NovaCare Nursing starts with assessment, not assumptions. We look at what you need, what matters to you, what support is already available and what would be required to make staying at home safe and sustainable.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex min-h-[50px] items-center justify-center rounded-2xl bg-[#2FBFC4] px-6 py-3 font-semibold text-[#173B5C] shadow-sm transition hover:bg-[#59D6D0]">Talk through your options</Link>
              <Link href="/live-in-care" className="inline-flex min-h-[50px] items-center justify-center rounded-2xl border border-[#D8D1F4] bg-[#F8F6FF] px-6 py-3 font-semibold text-[#5C43A8] transition hover:bg-[#F2EEFF]">Explore Live-In Care</Link>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6E3BE8]">A different question</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#1D3952] sm:text-4xl">Not “Which facility?” but “What would it take to stay home?”</h2>
                <p className="mt-4 leading-8">Sometimes residential aged care will be the safest or most appropriate option. Sometimes it will not. The decision deserves a clear understanding of the alternatives before a major move is made.</p>
                <p className="mt-4 leading-8">A nurse-led assessment can help identify the actual care burden, clinical risks, overnight needs, equipment, family capacity and level of paid support required.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {considerations.map(([title, text], index) => {
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
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#238C93]">Care can grow with you</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.035em] text-[#1D3952] sm:text-4xl">From a nursing visit to much more support at home.</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <article className="rounded-[1.6rem] border border-[#D7EEF0] bg-[#EAF9FA] p-6">
                <h3 className="text-xl font-semibold text-[#1D3952]">Private &amp; Support at Home Nursing</h3>
                <p className="mt-3 leading-7">Specialist Registered Nurse assessment and care when clinical needs can be managed through planned nursing visits.</p>
                <Link href="/private-nursing" className="mt-4 inline-flex font-semibold text-[#238C93]">Explore nursing →</Link>
              </article>
              <article className="rounded-[1.6rem] border border-[#E3DDFB] bg-[#F2EEFF] p-6">
                <h3 className="text-xl font-semibold text-[#1D3952]">Live-In Care</h3>
                <p className="mt-3 leading-7">Longer periods of familiar support at home, with nursing assessment and clinical oversight built around the care plan.</p>
                <Link href="/live-in-care" className="mt-4 inline-flex font-semibold text-[#6E3BE8]">Explore Live-In Care →</Link>
              </article>
              <article className="rounded-[1.6rem] border border-[#DCE8F8] bg-[#EEF4FF] p-6">
                <h3 className="text-xl font-semibold text-[#1D3952]">24-Hour Care</h3>
                <p className="mt-3 leading-7">Continuous coverage across day and night when support needs are higher or someone cannot safely be left without care for significant periods.</p>
                <Link href="/24-hour-care" className="mt-4 inline-flex font-semibold text-[#5274D8]">Explore 24-Hour Care →</Link>
              </article>
            </div>
          </div>
        </section>
      </main>
      <ContactCta />
      <SiteFooter />
    </>
  );
}
