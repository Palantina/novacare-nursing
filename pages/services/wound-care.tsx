import Head from "next/head";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import ContactCta from "../../components/ContactCta";

const woundReview = [
  ["The wound itself", "Size, tissue, exudate, wound edge, surrounding skin, pain, odour and signs of deterioration are considered and documented."],
  ["Why healing may be delayed", "Circulation, pressure, oedema, mobility, nutrition, diabetes, medications, infection risk and other clinical factors can affect healing."],
  ["The person and their routine", "Mobility, footwear, continence, cognition, ability to follow the plan and support available at home all influence what care is realistic."],
  ["When more input is needed", "Findings can be escalated to the GP, specialist, podiatry, vascular, allied health or other treating clinicians when the wider clinical picture requires it."],
];

export default function WoundCare() {
  return (
    <>
      <Head>
        <title>Wound Care at Home Hobart | NovaCare Nursing</title>
        <meta name="description" content="Complex wound care at home across Hobart and Southern Tasmania, with nurse-led wound assessment, treatment, skin integrity review, documentation and clinical escalation." />
        <link rel="canonical" href="https://www.novacarenursing.com.au/services/wound-care" />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content="Wound Care at Home Hobart | NovaCare Nursing" />
        <meta property="og:description" content="Experienced complex wound assessment and nursing care at home across Southern Tasmania." />
        <meta property="og:url" content="https://www.novacarenursing.com.au/services/wound-care" />
        <meta property="og:type" content="website" />
      </Head>

      <SiteHeader />
      <main className="bg-[#F8FCFD] font-sans text-[#526B7C]">
        <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div aria-hidden="true" className="absolute -left-24 top-8 h-72 w-72 rounded-full bg-[#DDF5F5]/75 blur-3xl" />
          <div aria-hidden="true" className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-[#EAE1FC]/50 blur-3xl" />
          <div className="relative mx-auto max-w-7xl rounded-[2.25rem] border border-[#D7EEF0] bg-white p-7 shadow-[0_24px_70px_rgba(29,57,82,0.09)] sm:p-9 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#238C93]">NovaCare Nursing — Aged Care Specialists</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#1D3952] sm:text-5xl lg:text-[3.5rem]">Wound care at home should be more than changing a dressing.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8">A wound is part of a whole clinical picture. Good wound nursing looks at what the wound is doing, what may be affecting healing and what needs to happen next.</p>
            <p className="mt-4 max-w-3xl leading-8">NovaCare Nursing provides complex wound and skin care at home across Hobart and Southern Tasmania, with assessment, treatment, documentation, review and escalation built into the service.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex min-h-[50px] items-center justify-center rounded-2xl bg-[#2FBFC4] px-6 py-3 font-semibold text-[#173B5C] shadow-sm transition hover:bg-[#59D6D0]">Discuss wound care</Link>
              <Link href="/private-nursing" className="inline-flex min-h-[50px] items-center justify-center rounded-2xl border border-[#D8D1F4] bg-[#F8F6FF] px-6 py-3 font-semibold text-[#5C43A8] transition hover:bg-[#F2EEFF]">Private Nursing</Link>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6E3BE8]">Comprehensive wound review</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#1D3952] sm:text-4xl">Treat the wound. Understand the reason.</h2>
                <p className="mt-4 leading-8">The dressing matters, but so do pressure, circulation, oedema, infection risk, nutrition, pain, mobility, footwear, medications, continence and the person&apos;s capacity to manage the plan at home.</p>
                <p className="mt-4 leading-8">A wound that is not progressing as expected deserves reassessment rather than simply repeating the same task.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {woundReview.map(([title, text], index) => {
                  const tones = ["border-[#D7EEF0] bg-[#EAF9FA]", "border-[#E3DDFB] bg-[#F2EEFF]", "border-[#DCE8F8] bg-[#EEF4FF]", "border-[#F2DDD5] bg-[#FFF2EC]"];
                  return <article key={title} className={`rounded-[1.5rem] border p-6 ${tones[index]}`}><h3 className="text-xl font-semibold text-[#1D3952]">{title}</h3><p className="mt-3 leading-7">{text}</p></article>;
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-[#D7EEF0] bg-[#EAF9FA] p-7 sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#238C93]">What care may include</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#1D3952]">Assessment, treatment and ongoing review.</h2>
              <p className="mt-4 leading-8">Care may include complex or chronic wound assessment, post-operative wound review, pressure injury prevention, skin-integrity assessment, dressing selection within the clinical plan, monitoring for deterioration and coordination with the wider treating team.</p>
            </div>
            <div className="rounded-[2rem] border border-[#E3DDFB] bg-[#F2EEFF] p-7 sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6E3BE8]">Ways to access wound nursing</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#1D3952]">Book directly or ask your provider.</h2>
              <p className="mt-4 leading-8">Wound care can be booked privately. If you receive Support at Home, you can ask your registered provider whether NovaCare Nursing can be engaged for your nursing care.</p>
              <div className="mt-5"><Link href="/support-at-home" className="font-semibold text-[#6E3BE8] underline underline-offset-4">Support at Home nursing</Link></div>
            </div>
          </div>
        </section>
      </main>
      <ContactCta />
      <SiteFooter />
    </>
  );
}
