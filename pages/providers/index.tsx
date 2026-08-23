import Head from "next/head";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import ContactCta from "../../components/ContactCta";

const partnershipAreas = [
  {
    title: "Specialist clinical nursing",
    text: "Experienced nursing assessment and care for wounds, continence, catheters, stomas, enteral feeding, prescribed IV therapy, post-hospital care and other complex clinical needs.",
    tone: "border-[#D7EEF0] bg-[#EAF9FA]",
    accent: "text-[#238C93]",
  },
  {
    title: "Complex aged-care review",
    text: "Comprehensive assessment when health, function, cognition, behaviour, comfort or care needs are changing and the clinical picture needs a closer look.",
    tone: "border-[#E3DDFB] bg-[#F2EEFF]",
    accent: "text-[#6E3BE8]",
  },
  {
    title: "Palliative & end-of-life nursing",
    text: "Responsive, comfort-focused nursing at home with family support, clear documentation and coordination with GPs, palliative care services and the wider treating team.",
    tone: "border-[#F2DDD5] bg-[#FFF2EC]",
    accent: "text-[#A95440]",
  },
  {
    title: "Clinical governance support",
    text: "Clinical review, documentation standards, escalation pathways, education, targeted auditing and practical quality-improvement support for home-care services.",
    tone: "border-[#DCE8F8] bg-[#EEF4FF]",
    accent: "text-[#5274D8]",
  },
];

const reasons = [
  ["Senior clinical judgement", "Experienced Registered Nurse assessment and clinical reasoning for situations that need more than task-based care."],
  ["Clear communication", "Timely documentation, handover, recommendations and escalation so the provider and wider treating team know what has changed and what happens next."],
  ["Continuity", "The ability to build a clinical relationship with the older person rather than repeatedly starting again with a new clinician."],
  ["Nurse-led aged care", "A service designed specifically around older people living at home, with clinical oversight at the centre of care."],
];

export default function ProvidersIndex() {
  return (
    <>
      <Head>
        <title>For Aged Care Providers | NovaCare Nursing | Hobart</title>
        <meta
          name="description"
          content="NovaCare Nursing partners with Support at Home providers and aged-care organisations across Southern Tasmania for specialist clinical nursing, complex care, palliative nursing and clinical governance support."
        />
        <link
          rel="canonical"
          href="https://www.novacarenursing.com.au/providers"
        />
        <meta name="robots" content="index,follow" />
      </Head>

      <SiteHeader />

      <main className="bg-[#F8FCFD] font-sans text-[#526B7C]">
        <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute -left-24 top-8 h-72 w-72 rounded-full bg-[#DDF5F5]/65 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-[#EAE1FC]/50 blur-3xl"
          />

          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] border border-[#DCEDEF] bg-white p-7 shadow-[0_24px_70px_rgba(29,57,82,0.09)] sm:p-9 lg:p-12">
            <div className="grid gap-9 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2B9FA5] sm:text-base">
                  NovaCare Nursing — Aged Care Specialists
                </p>

                <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#1D3952] sm:text-5xl lg:text-[3.35rem]">
                  Clinical nursing partnerships for aged-care providers.
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8">
                  Experienced nursing delivery, complex clinical review and practical governance support for providers caring for older people at home.
                </p>

                <p className="mt-4 max-w-2xl leading-7">
                  NovaCare Nursing can work alongside registered Support at Home providers and aged-care organisations where specialist nursing, additional clinical capacity or independent clinical input is required.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex min-h-[50px] items-center justify-center rounded-2xl bg-[#2FBFC4] px-6 py-3 font-semibold text-[#173B5C] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#59D6D0]"
                  >
                    Discuss a provider partnership
                  </Link>
                  <Link
                    href="/providers/support-at-home"
                    className="inline-flex min-h-[50px] items-center justify-center rounded-2xl border border-[#D8D1F4] bg-[#F8F6FF] px-6 py-3 font-semibold text-[#5C43A8] transition hover:-translate-y-0.5 hover:bg-[#F2EEFF]"
                  >
                    Support at Home information
                  </Link>
                </div>
              </div>

              <div className="rounded-[2rem] border border-[#E3DDFB] bg-gradient-to-br from-[#F7F4FF] via-white to-[#EAF9FA] p-6 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6E3BE8]">
                  Partnership model
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#1D3952]">
                  Your provider relationship stays intact. We add clinical capability.
                </h2>
                <p className="mt-4 leading-8">
                  Under Support at Home, the registered provider remains responsible for the participant&apos;s care management, service agreement and funded services. Where an agreed arrangement is in place, NovaCare Nursing can deliver nursing on the provider&apos;s behalf, subject to the provider&apos;s contracting, screening and governance requirements.
                </p>
                <div className="mt-5 rounded-[1.4rem] border border-white bg-white/80 p-5">
                  <p className="font-semibold text-[#1D3952]">
                    One provider. Additional clinical expertise when it is needed.
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    NovaCare Nursing does not replace the registered provider&apos;s legal responsibilities. We work within the agreed service arrangement and communicate clinical findings, risks and recommendations clearly back to the care team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-7 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2B9FA5] sm:text-base">
                  Where we can help
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#1D3952] sm:text-4xl">
                  Clinical support that strengthens care at home.
                </h2>
              </div>
              <p className="max-w-3xl text-lg leading-8 lg:justify-self-end">
                Engagement can be for an individual client, a defined clinical episode, ongoing nursing, or broader clinical support for a provider team.
              </p>
            </div>

            <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {partnershipAreas.map((area) => (
                <article
                  key={area.title}
                  className={`rounded-[1.6rem] border p-6 shadow-[0_10px_28px_rgba(29,57,82,0.045)] ${area.tone}`}
                >
                  <span aria-hidden="true" className={`text-2xl font-semibold ${area.accent}`}>
                    +
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-[#1D3952]">
                    {area.title}
                  </h3>
                  <p className="mt-3 leading-7">{area.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6E3BE8]">
                  Why NovaCare Nursing
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#1D3952] sm:text-4xl">
                  Nurse-led aged care with clinical accountability.
                </h2>
                <p className="mt-4 leading-8">
                  We are not a generalist agency trying to cover every market. NovaCare Nursing is focused on older people and the clinical realities of helping them remain safely at home.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {reasons.map(([title, text], index) => {
                  const tones = [
                    "border-[#D7EEF0] bg-[#EAF9FA]",
                    "border-[#E3DDFB] bg-[#F2EEFF]",
                    "border-[#DCE8F8] bg-[#EEF4FF]",
                    "border-[#F2DDD5] bg-[#FFF2EC]",
                  ];

                  return (
                    <article
                      key={title}
                      className={`rounded-[1.5rem] border p-5 ${tones[index]}`}
                    >
                      <h3 className="font-semibold text-[#1D3952]">{title}</h3>
                      <p className="mt-2 text-sm leading-6">{text}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[#DCEDEF] bg-gradient-to-br from-white via-[#FCFEFF] to-[#F2EEFF] p-7 shadow-[0_18px_50px_rgba(29,57,82,0.07)] sm:p-9">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2B9FA5]">
                  A simple working relationship
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#1D3952]">
                  Clear scope. Clear communication. Clear accountability.
                </h2>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ["01", "Agree", "Confirm the client need, scope, reporting requirements and provider arrangement."],
                  ["02", "Deliver", "Provide the agreed nursing care, assessment or clinical support with contemporaneous documentation."],
                  ["03", "Report", "Communicate outcomes, risks, recommendations and escalation clearly back to the provider and treating team."],
                ].map(([number, title, text]) => (
                  <article key={number} className="rounded-[1.4rem] border border-[#DCEDEF] bg-white p-5 shadow-sm">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF9FA] text-sm font-bold text-[#238C93]">
                      {number}
                    </span>
                    <h3 className="mt-4 font-semibold text-[#1D3952]">{title}</h3>
                    <p className="mt-2 text-sm leading-6">{text}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3 border-t border-[#E2ECEF] pt-7 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-semibold text-[#1D3952]">Need pricing before you start?</p>
                <p className="mt-1 text-sm">Current nursing fees and time-band rates are published transparently.</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/fees"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border border-[#D8D1F4] bg-white px-5 py-2.5 font-semibold text-[#5C43A8] transition hover:bg-[#F7F4FF]"
                >
                  View fees
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-[#6E3BE8] px-5 py-2.5 font-semibold text-white transition hover:bg-[#5F31CE]"
                >
                  Contact NovaCare Nursing
                </Link>
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
