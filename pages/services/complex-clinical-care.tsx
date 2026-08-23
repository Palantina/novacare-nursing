import Head from "next/head";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import ContactCta from "../../components/ContactCta";

const reviewAreas = [
  ["What has changed", "A focused history and nursing assessment help establish what is new, what is baseline and what may need urgent or planned escalation."],
  ["How the issues connect", "Health conditions, medications, cognition, function, nutrition, continence, skin, pain, sleep and environment may interact rather than sit in separate problems."],
  ["What is missing", "The next step may be nursing, a GP review, specialist input, allied health, equipment, a care-plan change or urgent hospital assessment."],
  ["How to keep the plan connected", "Clear documentation, recommendations, handover and follow-up can help the person, family, provider and treating team work from the same clinical picture."],
];

export default function ComplexClinicalCare() {
  return (
    <>
      <Head>
        <title>Complex Aged Care Nursing Hobart | NovaCare Nursing</title>
        <meta name="description" content="Complex clinical nursing and comprehensive aged-care assessment at home across Hobart and Southern Tasmania, with nurse-led review, care planning, coordination and escalation." />
        <link rel="canonical" href="https://www.novacarenursing.com.au/services/complex-clinical-care" />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content="Complex Aged Care Nursing Hobart | NovaCare Nursing" />
        <meta property="og:description" content="Nurse-led complex clinical assessment, care planning and coordination at home across Southern Tasmania." />
        <meta property="og:url" content="https://www.novacarenursing.com.au/services/complex-clinical-care" />
        <meta property="og:type" content="website" />
      </Head>

      <SiteHeader />
      <main className="bg-[#F8FCFD] font-sans text-[#526B7C]">
        <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div aria-hidden="true" className="absolute -left-24 top-8 h-72 w-72 rounded-full bg-[#DDF5F5]/70 blur-3xl" />
          <div aria-hidden="true" className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-[#E1EBFF]/55 blur-3xl" />
          <div className="relative mx-auto max-w-7xl rounded-[2.25rem] border border-[#DCE8F8] bg-white p-7 shadow-[0_24px_70px_rgba(29,57,82,0.09)] sm:p-9 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5274D8]">NovaCare Nursing — Aged Care Specialists</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#1D3952] sm:text-5xl lg:text-[3.5rem]">When the clinical picture is complicated, start by seeing the whole of it.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8">Complex care rarely fits neatly into one diagnosis, one task or one service. A comprehensive nursing assessment can help identify what is changing, what is contributing and what needs to happen next.</p>
            <p className="mt-4 max-w-3xl leading-8">NovaCare Nursing provides nurse-led complex clinical assessment, care planning, coordination and review at home across Hobart and Southern Tasmania.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex min-h-[50px] items-center justify-center rounded-2xl bg-[#2FBFC4] px-6 py-3 font-semibold text-[#173B5C] shadow-sm transition hover:bg-[#59D6D0]">Discuss a complex care need</Link>
              <Link href="/services" className="inline-flex min-h-[50px] items-center justify-center rounded-2xl border border-[#D8D1F4] bg-[#F8F6FF] px-6 py-3 font-semibold text-[#5C43A8] transition hover:bg-[#F2EEFF]">All clinical services</Link>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6E3BE8]">Comprehensive clinical assessment</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#1D3952] sm:text-4xl">Not another checklist. A clinical picture.</h2>
                <p className="mt-4 leading-8">Complexity can come from several small problems interacting: a medication change affecting balance, pain affecting mobility, reduced intake affecting strength, cognitive change masking illness, or continence and skin issues increasing infection or wound risk.</p>
                <p className="mt-4 leading-8">Experienced nursing assessment helps connect those pieces and communicate the findings clearly.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {reviewAreas.map(([title, text], index) => {
                  const tones = ["border-[#DCE8F8] bg-[#EEF4FF]", "border-[#D7EEF0] bg-[#EAF9FA]", "border-[#E3DDFB] bg-[#F2EEFF]", "border-[#F2DDD5] bg-[#FFF2EC]"];
                  return <article key={title} className={`rounded-[1.5rem] border p-6 ${tones[index]}`}><h3 className="text-xl font-semibold text-[#1D3952]">{title}</h3><p className="mt-3 leading-7">{text}</p></article>;
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-[#D7EEF0] bg-[#EAF9FA] p-7 sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#238C93]">For people and families</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#1D3952]">Get a clearer understanding of what is happening.</h2>
              <p className="mt-4 leading-8">Private clinical review can be useful when needs are changing, care feels fragmented, repeated issues are not resolving or you need an experienced nursing view of the whole situation.</p>
              <div className="mt-5"><Link href="/private-nursing" className="font-semibold text-[#238C93] underline underline-offset-4">Private Nursing</Link></div>
            </div>
            <div className="rounded-[2rem] border border-[#E3DDFB] bg-[#F2EEFF] p-7 sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6E3BE8]">For providers</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#1D3952]">Add senior clinical input when a case needs more.</h2>
              <p className="mt-4 leading-8">NovaCare Nursing can work with aged-care providers on individual complex cases, clinical review, care planning, documentation, escalation and broader governance support.</p>
              <div className="mt-5"><Link href="/providers" className="font-semibold text-[#6E3BE8] underline underline-offset-4">For Providers</Link></div>
            </div>
          </div>
        </section>
      </main>
      <ContactCta />
      <SiteFooter />
    </>
  );
}
