import Head from "next/head";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const qualities = [
  ["See the person before the task", "Good aged care means understanding routines, preferences, health, function, relationships and what matters to the person—not just completing a list."],
  ["Notice change", "Care workers are often the people who see subtle changes first. Your observations matter and should be heard, documented and acted on."],
  ["Work with clinical support", "NovaCare Nursing is nurse-led. Care workers should have clear plans, education, escalation pathways and access to experienced nursing support."],
  ["Value continuity", "Familiarity builds trust. We want care teams that know the person, understand their baseline and do not make people repeatedly start again."],
];

export default function Careers() {
  return (
    <>
      <Head>
        <title>Careers in Aged Care Hobart | NovaCare Nursing</title>
        <meta name="description" content="Expressions of interest for aged-care workers and Registered Nurses in Southern Tasmania. Join NovaCare Nursing's nurse-led Live-In Care, 24-Hour Care and home nursing model." />
        <link rel="canonical" href="https://www.novacarenursing.com.au/careers" />
        <meta name="robots" content="index,follow" />
      </Head>

      <SiteHeader />
      <main className="bg-[#F8FCFD] font-sans text-[#526B7C]">
        <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div aria-hidden="true" className="absolute -left-24 top-6 h-72 w-72 rounded-full bg-[#DDF5F5]/70 blur-3xl" />
          <div aria-hidden="true" className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-[#EAE1FC]/55 blur-3xl" />
          <div className="relative mx-auto max-w-7xl rounded-[2.25rem] border border-[#DCEDEF] bg-white p-7 shadow-[0_24px_70px_rgba(29,57,82,0.09)] sm:p-9 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2B9FA5] sm:text-base">Careers at NovaCare Nursing</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#1D3952] sm:text-5xl lg:text-[3.5rem]">Help us change what ageing at home can look like.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8">NovaCare Nursing is building a Tasmanian, nurse-led aged-care model for people who want to remain at home as their needs change.</p>
            <p className="mt-4 max-w-3xl leading-8">We are inviting expressions of interest from experienced aged-care workers and Registered Nurses who value continuity, clinical support, dignity and genuinely knowing the people they care for.</p>
            <a href="mailto:info@novacarenursing.com.au?subject=Careers%20Expression%20of%20Interest" className="mt-7 inline-flex min-h-[50px] items-center justify-center rounded-2xl bg-[#2FBFC4] px-6 py-3 font-semibold text-[#173B5C] shadow-sm transition hover:bg-[#59D6D0]">Send an expression of interest</a>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6E3BE8]">The model we are building</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#1D3952] sm:text-4xl">Aged care where carers are supported by nursing—not left alone with clinical risk.</h2>
              <p className="mt-4 leading-8">Future opportunities may include home-based aged care, Live-In Care, overnight care, continuous 24-Hour Care and Registered Nurse roles supporting assessment, care planning, review and clinical escalation.</p>
              <p className="mt-4 leading-8">Roles, rosters and commencement dates will depend on service demand and the final care model. An expression of interest is not an offer of employment.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {qualities.map(([title, text], index) => {
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
        </section>

        <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl grid gap-5 md:grid-cols-2">
            <div className="rounded-[2rem] border border-[#D7EEF0] bg-[#EAF9FA] p-7 sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#238C93]">Aged-care workers</p>
              <h2 className="mt-3 text-2xl font-semibold text-[#1D3952]">Practical care with your observations taken seriously.</h2>
              <p className="mt-4 leading-8">We are interested in people with relevant aged-care experience and qualifications who are comfortable supporting personal care, mobility, continence, meals, routines, companionship and dementia-informed care within their role and competency.</p>
            </div>
            <div className="rounded-[2rem] border border-[#E3DDFB] bg-[#F2EEFF] p-7 sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6E3BE8]">Registered Nurses</p>
              <h2 className="mt-3 text-2xl font-semibold text-[#1D3952]">Clinical judgement that strengthens care at home.</h2>
              <p className="mt-4 leading-8">We are also interested in Registered Nurses with strong assessment, documentation, deterioration recognition, communication and community-care skills who value clinically rigorous, person-centred aged care.</p>
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#DCEDEF] bg-[#1D3952] p-7 text-white shadow-[0_22px_60px_rgba(29,57,82,0.15)] sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#A9ECE8]">Expressions of interest</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">Tell us about your experience and the kind of work you are interested in.</h2>
            <p className="mt-4 max-w-3xl leading-8 text-white/80">Please include your location, relevant qualifications and experience, whether you are interested in aged-care work or Registered Nurse work, and your interest in daytime, overnight, Live-In Care or 24-Hour Care arrangements.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href="mailto:info@novacarenursing.com.au?subject=Careers%20Expression%20of%20Interest" className="inline-flex min-h-[50px] items-center justify-center rounded-2xl bg-[#2FBFC4] px-6 py-3 font-semibold text-[#173B5C] transition hover:bg-[#59D6D0]">Email your EOI</a>
              <Link href="/about" className="inline-flex min-h-[50px] items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/15">About NovaCare Nursing</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
