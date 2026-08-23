import Head from "next/head";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ContactCta from "../components/ContactCta";

const steps = [
  ["01", "Tell us what you need", "Contact NovaCare Nursing and tell us what nursing support you are looking for."],
  ["02", "Speak with your provider", "If you want to use Support at Home funding, ask your registered provider whether NovaCare Nursing can be engaged to deliver the nursing you need."],
  ["03", "Agree the arrangement", "Your provider and NovaCare Nursing confirm the service, reporting, screening and governance requirements before funded care begins."],
  ["04", "Receive your nursing care", "NovaCare Nursing provides the agreed care and communicates with your provider and wider healthcare team as required."],
];

export default function SupportAtHome() {
  return (
    <>
      <Head>
        <title>Support at Home Nursing Hobart | NovaCare Nursing</title>
        <meta
          name="description"
          content="Use NovaCare Nursing for specialist nursing through Support at Home where your registered provider agrees to engage us. Nurse-led aged care across Hobart and Southern Tasmania."
        />
        <link rel="canonical" href="https://www.novacarenursing.com.au/support-at-home" />
        <meta name="robots" content="index,follow" />
      </Head>

      <SiteHeader />

      <main className="bg-[#F8FCFD] font-sans text-[#526B7C]">
        <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div aria-hidden="true" className="absolute -left-24 top-8 h-72 w-72 rounded-full bg-[#DDF5F5]/65 blur-3xl" />
          <div aria-hidden="true" className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-[#EAE1FC]/50 blur-3xl" />

          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] border border-[#DCEDEF] bg-white p-7 shadow-[0_24px_70px_rgba(29,57,82,0.09)] sm:p-9 lg:p-12">
            <div className="grid gap-9 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2B9FA5] sm:text-base">NovaCare Nursing — Aged Care Specialists</p>
                <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#1D3952] sm:text-5xl lg:text-[3.35rem]">Your nursing. Your choice. Support at Home.</h1>
                <p className="mt-6 max-w-2xl text-lg leading-8">If you receive Support at Home, you can ask your registered provider to engage NovaCare Nursing for the nursing care you want and need.</p>
                <p className="mt-4 max-w-2xl leading-7">NovaCare Nursing is not your registered Support at Home provider. We can work alongside your provider under an agreed arrangement, bringing experienced clinical nursing into your home while your existing provider relationship remains in place.</p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link href="/contact" className="inline-flex min-h-[50px] items-center justify-center rounded-2xl bg-[#2FBFC4] px-6 py-3 font-semibold text-[#173B5C] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#59D6D0]">Talk to NovaCare Nursing</Link>
                  <Link href="/services" className="inline-flex min-h-[50px] items-center justify-center rounded-2xl border border-[#D8D1F4] bg-[#F8F6FF] px-6 py-3 font-semibold text-[#5C43A8] transition hover:-translate-y-0.5 hover:bg-[#F2EEFF]">Explore nursing services</Link>
                </div>
              </div>

              <div className="rounded-[2rem] border border-[#E3DDFB] bg-gradient-to-br from-[#F7F4FF] via-white to-[#EAF9FA] p-6 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6E3BE8]">Choice and continuity</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#1D3952]">You can ask who provides your funded care.</h2>
                <p className="mt-4 leading-8">The Aged Care Act&apos;s Statement of Rights recognises your right to make decisions about your funded aged care, including how you access services and who provides them.</p>
                <p className="mt-4 leading-8">Your registered provider still needs to be satisfied that any third-party arrangement meets its legal, quality, screening and governance responsibilities. That is why we work directly with your provider before funded nursing begins.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2B9FA5]">How it works</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#1D3952] sm:text-4xl">A straightforward pathway to the nursing care you choose.</h2>
                <p className="mt-4 leading-8">You do not need to change your registered provider simply to ask whether NovaCare Nursing can provide your nursing care.</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {steps.map(([number, title, text], index) => {
                  const tones = ["border-[#D7EEF0] bg-[#EAF9FA]", "border-[#E3DDFB] bg-[#F2EEFF]", "border-[#DCE8F8] bg-[#EEF4FF]", "border-[#F2DDD5] bg-[#FFF2EC]"];
                  return (
                    <article key={number} className={`rounded-[1.5rem] border p-5 ${tones[index]}`}>
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sm font-bold text-[#238C93] shadow-sm">{number}</span>
                      <h3 className="mt-4 text-xl font-semibold text-[#1D3952]">{title}</h3>
                      <p className="mt-2 leading-7">{text}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6E3BE8]">What we can provide</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#1D3952] sm:text-4xl">Specialist nursing that looks at the whole picture.</h2>
              <p className="mt-4 text-lg leading-8">Support at Home nursing may include clinical assessment, wound care, continence and catheter care, stoma and enteral support, post-hospital nursing, dementia-informed assessment, palliative and end-of-life nursing, medication-related nursing support and care coordination.</p>
            </div>

            <div className="mt-8 rounded-[2rem] border border-[#D7EEF0] bg-gradient-to-br from-[#EAF9FA] via-white to-[#F2EEFF] p-7 sm:p-9">
              <h3 className="text-2xl font-semibold text-[#1D3952]">Not sure what to ask your provider?</h3>
              <p className="mt-3 max-w-3xl leading-8">Contact NovaCare Nursing first. We can explain the nursing support you are seeking in clear terms so you can have an informed conversation with your registered provider.</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="inline-flex min-h-[50px] items-center justify-center rounded-2xl bg-[#6E3BE8] px-6 py-3 font-semibold text-white transition hover:bg-[#5F31CE]">Discuss your care</Link>
                <Link href="/fees" className="inline-flex min-h-[50px] items-center justify-center rounded-2xl border border-[#D8D1F4] bg-white px-6 py-3 font-semibold text-[#5C43A8] transition hover:bg-[#F7F4FF]">View nursing fees</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ContactCta />
      <SiteFooter />
    </>
  );
}
