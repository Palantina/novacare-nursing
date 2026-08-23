import Head from "next/head";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ContactCta from "../components/ContactCta";

const experienceAreas = [
  "Emergency and acute nursing",
  "Community and rapid-response nursing",
  "Palliative and end-of-life care",
  "Complex wound and skin care",
  "Continence, catheter and stoma care",
  "IV therapy, cannulation and vascular access",
  "Clinical governance and care planning",
  "Dementia and behaviour support",
];

export default function AboutPalantina() {
  return (
    <>
      <Head>
        <title>Palantina Hughes | Clinical Nurse Consultant | NovaCare Nursing</title>
        <meta
          name="description"
          content="Meet Palantina Hughes, founder of NovaCare Nursing, Clinical Nurse Consultant and Registered Nurse with 18 years of experience across emergency, acute, community, palliative and complex home nursing in Tasmania."
        />
        <link
          rel="canonical"
          href="https://www.novacarenursing.com.au/about-palantina"
        />
        <meta name="robots" content="index,follow" />
      </Head>

      <SiteHeader />

      <main className="bg-[#F8FCFD] font-sans text-[#526B7C]">
        <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#DDF5F5]/65 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-[#EAE1FC]/55 blur-3xl"
          />

          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.25rem] border border-[#DCEDEF] bg-white p-7 shadow-[0_24px_70px_rgba(29,57,82,0.09)] sm:p-9 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2B9FA5] sm:text-base">
                  NovaCare Nursing · Aged Care Specialists
                </p>

                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#6E3BE8]">
                  Founder &amp; Clinical Lead
                </p>

                <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#1D3952] sm:text-5xl lg:text-[3.3rem]">
                  Palantina Hughes
                </h1>

                <p className="mt-3 text-xl font-semibold text-[#6E3BE8]">
                  Clinical Nurse Consultant
                </p>
                <p className="mt-1 font-medium text-[#526B7C]">
                  Registered Nurse • Founder, NovaCare Nursing
                </p>

                <p className="mt-5 max-w-md font-semibold leading-7 text-[#1D3952]">
                  Tasmanian owned and operated. Nurse-led. Professional care delivered with genuine kindness.
                </p>

                <div className="mt-7 inline-flex items-center gap-4 rounded-[1.5rem] border border-[#D7EEF0] bg-[#EAF9FA] px-5 py-4">
                  <div className="flex h-16 w-16 flex-col items-center justify-center rounded-[1.1rem] bg-white shadow-sm">
                    <span className="text-2xl font-semibold leading-none text-[#1D3952]">18</span>
                    <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#238C93]">years</span>
                  </div>
                  <p className="max-w-xs text-sm leading-6">
                    Nursing experience across hospital, community and home-based care in Tasmania.
                  </p>
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-[#E3DDFB] bg-gradient-to-br from-[#F7F4FF] via-white to-[#F8FCFD] p-6 sm:p-8">
                <p className="text-lg leading-8 text-[#35546B]">
                  I built NovaCare Nursing because good care at home needs more than a task list. Older people deserve nursing that notices change, understands the whole clinical picture and responds early—while still protecting dignity, choice and the life they want to keep living.
                </p>

                <p className="mt-5 leading-7">
                  My approach is practical, clinically rigorous and relationship-based. I want people and families to understand what is happening, what matters now, what needs watching and who needs to be involved next.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6E3BE8]">
                  Clinical background
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#1D3952] sm:text-4xl">
                  Experience shaped by acute care, community nursing and complex care at home.
                </h2>
              </div>

              <div className="space-y-5 text-base leading-8 sm:text-lg">
                <p>
                  My nursing career has included extensive emergency and acute-care experience, where rapid assessment, deterioration recognition, clinical judgement and clear escalation are part of everyday practice.
                </p>
                <p>
                  I have also worked in community nursing and rapid-response models, bringing acute clinical capability into people&apos;s homes and working closely with GPs, hospitals, specialists, pharmacists, allied health professionals and families.
                </p>
                <p>
                  In home-care leadership and clinical roles, my work has included comprehensive assessment, care planning, clinical governance, incident review, quality improvement, staff support and education, and the coordination of complex care for older people with changing health needs.
                </p>
                <p>
                  Palliative and end-of-life nursing remains an important part of my practice. I believe comfort, symptom control, family support and honest communication matter enormously when people are nearing the end of life—and that good community nursing can help people remain at home when that is what they want.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {experienceAreas.map((area, index) => {
                const tones = [
                  "border-[#D7EEF0] bg-[#EAF9FA]",
                  "border-[#E3DDFB] bg-[#F2EEFF]",
                  "border-[#DCE8F8] bg-[#EEF4FF]",
                  "border-[#F2DDD5] bg-[#FFF2EC]",
                ];
                return (
                  <div
                    key={area}
                    className={`rounded-[1.4rem] border p-5 font-semibold leading-6 text-[#1D3952] ${tones[index % tones.length]}`}
                  >
                    {area}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-[2rem] border border-[#D7EEF0] bg-gradient-to-br from-[#EAF9FA] via-white to-white p-7 sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#238C93]">
                How I practice
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#1D3952]">
                See the person before the task.
              </h2>
              <p className="mt-4 leading-8">
                A wound may be affected by circulation, pressure, nutrition, pain, cognition or mobility. A behaviour change may reflect infection, constipation, discomfort, medication effects, fear or an unmet need. Good nursing asks what else might be happening before settling for the obvious answer.
              </p>
              <p className="mt-4 leading-8">
                That way of thinking is central to NovaCare Nursing. Assessment, treatment, documentation, review and escalation should connect—not sit in separate boxes.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#E3DDFB] bg-gradient-to-br from-[#F2EEFF] via-white to-white p-7 sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6E3BE8]">
                What matters to me
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#1D3952]">
                Clinical excellence without losing humanity.
              </h2>
              <p className="mt-4 leading-8">
                Nursing is technical, but it is also deeply human. People remember whether they were listened to, whether their preferences mattered, whether someone noticed they were frightened, and whether the clinician in front of them could be trusted.
              </p>
              <p className="mt-4 font-semibold leading-8 text-[#1D3952]">
                Experience. Choice. Responsive nursing when it matters. That is the NovaCare Nursing difference.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#DCEDEF] bg-[#1D3952] p-7 text-white shadow-[0_22px_60px_rgba(29,57,82,0.15)] sm:p-9">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#A9ECE8]">
                  NovaCare Nursing
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                  Aged Care Specialists
                </h2>
                <p className="mt-4 max-w-3xl leading-8 text-white/78">
                  Tasmanian owned and operated. Nurse-led. Professional care delivered with genuine kindness. Private nursing and Support at Home provider partnerships across Hobart and Southern Tasmania, with clinical assessment, skilled nursing, care planning, coordination and review built around the older person.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/about"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/15"
                >
                  About NovaCare Nursing
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-2xl bg-[#2FBFC4] px-6 py-3 font-semibold text-[#173B5C] transition hover:bg-[#59D6D0]"
                >
                  Contact Palantina
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
