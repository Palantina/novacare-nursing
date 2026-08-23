import Head from "next/head";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import ContactCta from "../../components/ContactCta";

const serviceAreas = [
  {
    title: "Specialist nursing delivery",
    text: "Complex wound and skin care, catheter and continence care, stoma and enteral support, prescribed IV therapy, post-hospital nursing, palliative care and other clinically complex needs.",
    tone: "border-[#D7EEF0] bg-[#EAF9FA]",
    accent: "text-[#238C93]",
  },
  {
    title: "Comprehensive clinical assessment",
    text: "Whole-person Registered Nurse assessment when health, function, cognition, behaviour, comfort or care needs change and the clinical picture needs deeper review.",
    tone: "border-[#E3DDFB] bg-[#F2EEFF]",
    accent: "text-[#6E3BE8]",
  },
  {
    title: "Palliative & end-of-life nursing",
    text: "Comfort-focused nursing at home with family support, symptom monitoring, documentation and coordination with GPs, pharmacies, palliative care services and the wider treating team.",
    tone: "border-[#F2DDD5] bg-[#FFF2EC]",
    accent: "text-[#A95440]",
  },
  {
    title: "Clinical governance support",
    text: "Documentation review, escalation pathways, education, targeted clinical auditing, complex-care review and practical quality-improvement support for home-care teams.",
    tone: "border-[#DCE8F8] bg-[#EEF4FF]",
    accent: "text-[#5274D8]",
  },
];

const governancePoints = [
  "AHPRA-registered nursing care delivered within professional scope and current clinical requirements",
  "Contemporaneous clinical documentation, clear handover and escalation of material risks or deterioration",
  "Provider-specific reporting, screening and governance requirements agreed before funded service delivery",
  "Clinical recommendations focused on the older person's assessed needs, goals and preferences",
];

export default function ProvidersSupportAtHome() {
  return (
    <>
      <Head>
        <title>Support at Home Nursing Partnerships | NovaCare Nursing</title>
        <meta
          name="description"
          content="NovaCare Nursing partners with registered Support at Home providers across Southern Tasmania to deliver specialist nursing, complex clinical assessment, palliative care and clinical governance support for older people at home."
        />
        <link
          rel="canonical"
          href="https://www.novacarenursing.com.au/providers/support-at-home"
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
                  Support at Home nursing partnerships.
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8">
                  Specialist nursing and clinical support for registered providers caring for older people at home.
                </p>

                <p className="mt-4 max-w-2xl leading-7">
                  NovaCare Nursing can be engaged to deliver funded nursing services on behalf of a registered Support at Home provider where an agreed contracting and governance arrangement is in place.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex min-h-[50px] items-center justify-center rounded-2xl bg-[#2FBFC4] px-6 py-3 font-semibold text-[#173B5C] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#59D6D0]"
                  >
                    Discuss a client or partnership
                  </Link>
                  <Link
                    href="/fees"
                    className="inline-flex min-h-[50px] items-center justify-center rounded-2xl border border-[#D8D1F4] bg-[#F8F6FF] px-6 py-3 font-semibold text-[#5C43A8] transition hover:-translate-y-0.5 hover:bg-[#F2EEFF]"
                  >
                    View nursing fees
                  </Link>
                </div>
              </div>

              <div className="rounded-[2rem] border border-[#E3DDFB] bg-gradient-to-br from-[#F7F4FF] via-white to-[#EAF9FA] p-6 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6E3BE8]">
                  Working together under Support at Home
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#1D3952]">
                  Additional clinical capability without disrupting the provider relationship.
                </h2>
                <p className="mt-4 leading-8">
                  A registered provider may engage a third party or associated provider to deliver some Support at Home services, including on a one-off or ongoing basis. The registered provider remains responsible for ensuring services delivered on its behalf meet the requirements of the Aged Care Act and Quality Standards.
                </p>
                <p className="mt-4 leading-8">
                  NovaCare Nursing works within the agreed service arrangement, provider requirements and professional nursing standards, with clear communication back to the care team.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-7 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2B9FA5] sm:text-base">
                  Clinical capability
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#1D3952] sm:text-4xl">
                  Nursing that looks beyond the presenting task.
                </h2>
              </div>
              <p className="max-w-3xl text-lg leading-8 lg:justify-self-end">
                Older people often have interacting clinical, functional and psychosocial needs. Our nursing model looks at the wider picture, responds to what is clinically material and communicates clearly when more input is needed.
              </p>
            </div>

            <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {serviceAreas.map((area) => (
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
          <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="rounded-[2rem] border border-[#D7EEF0] bg-gradient-to-br from-[#EAF9FA] via-white to-white p-7 sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#238C93]">
                Person-centred care
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#1D3952]">
                Choice, continuity and clinical need belong in the same conversation.
              </h2>
              <p className="mt-4 leading-8">
                The Aged Care Act&apos;s Statement of Rights recognises an older person&apos;s right to make decisions about funded aged care, including how, when and by whom services are delivered.
              </p>
              <p className="mt-4 leading-8">
                In practice, any third-party arrangement still needs to meet the registered provider&apos;s legal, screening, quality and governance obligations. NovaCare Nursing is structured to work transparently within those requirements.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6E3BE8]">
                What NovaCare Nursing brings
              </p>
              <div className="mt-5 space-y-3">
                {governancePoints.map((point, index) => {
                  const tones = [
                    "bg-[#EAF9FA] border-[#D7EEF0] text-[#238C93]",
                    "bg-[#F2EEFF] border-[#E3DDFB] text-[#6E3BE8]",
                    "bg-[#EEF4FF] border-[#DCE8F8] text-[#5274D8]",
                    "bg-[#FFF2EC] border-[#F2DDD5] text-[#A95440]",
                  ];
                  return (
                    <div
                      key={point}
                      className="flex gap-4 rounded-[1.4rem] border border-[#DCEDEF] bg-[#F8FCFD] p-5"
                    >
                      <span
                        aria-hidden="true"
                        className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border text-sm font-bold ${tones[index]}`}
                      >
                        {index + 1}
                      </span>
                      <p className="leading-7">{point}</p>
                    </div>
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
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#1D3952] sm:text-4xl">
                  Clear scope. Clear communication. Clear accountability.
                </h2>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ["01", "Agree", "Confirm the client need, service scope, reporting requirements and provider arrangement."],
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

        <section className="px-4 pb-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#DCEDEF] bg-[#1D3952] p-7 text-white shadow-[0_22px_60px_rgba(29,57,82,0.15)] sm:p-9">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#A9ECE8]">
                  NovaCare Nursing — Aged Care Specialists
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                  Specialist nursing when your client needs it.
                </h2>
                <p className="mt-4 max-w-3xl leading-8 text-white/78">
                  Contact NovaCare Nursing to discuss an individual client, ongoing nursing arrangement, specialist palliative need or broader clinical support for your aged-care service.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-2xl bg-[#2FBFC4] px-6 py-3 font-semibold text-[#173B5C] transition hover:bg-[#59D6D0]"
                >
                  Discuss a referral
                </Link>
                <Link
                  href="/providers"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/15"
                >
                  Back to For Providers
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
