import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ContactCta from "../components/ContactCta";

const principles = [
  {
    title: "See the whole person",
    text: "Health, function, cognition, comfort, routines, family, environment and what matters to the person all belong in the clinical picture.",
    tone: "border-[#D7EEF0] bg-[#EAF9FA]",
    accent: "text-[#238C93]",
  },
  {
    title: "Nursing leads the care",
    text: "Registered Nurse assessment, care planning, clinical oversight, documentation, review and escalation are built into the way care is delivered.",
    tone: "border-[#E3DDFB] bg-[#F2EEFF]",
    accent: "text-[#6E3BE8]",
  },
  {
    title: "Continuity matters",
    text: "Good care depends on knowing the person, recognising change and building trust over time—not repeatedly starting again with someone new.",
    tone: "border-[#DCE8F8] bg-[#EEF4FF]",
    accent: "text-[#5274D8]",
  },
  {
    title: "Choice stays with the person",
    text: "Older people should remain active participants in decisions about how, when and by whom their care is delivered wherever possible.",
    tone: "border-[#F2DDD5] bg-[#FFF2EC]",
    accent: "text-[#A95440]",
  },
];

export default function About() {
  return (
    <>
      <Head>
        <title>About NovaCare Nursing | Nurse-Led Aged Care at Home | Hobart</title>
        <meta
          name="description"
          content="NovaCare Nursing is a Tasmanian owned, nurse-led aged care and clinical nursing service supporting older people to remain safely and well at home across Hobart and Southern Tasmania."
        />
        <link rel="canonical" href="https://www.novacarenursing.com.au/about" />
        <meta name="robots" content="index,follow" />
      </Head>

      <SiteHeader />

      <main className="bg-[#F8FCFD] font-sans text-[#526B7C]">
        <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] border border-[#DCEDEF] bg-white shadow-[0_24px_70px_rgba(29,57,82,0.09)]">
            <div className="grid lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
              <div className="relative flex flex-col justify-center overflow-hidden px-6 py-10 sm:px-8 sm:py-12 lg:px-11 lg:py-16">
                <div
                  aria-hidden="true"
                  className="absolute -left-24 -top-20 h-64 w-64 rounded-full bg-[#DDF5F5]/70 blur-3xl"
                />
                <div
                  aria-hidden="true"
                  className="absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-[#EAE1FC]/45 blur-3xl"
                />

                <div className="relative">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2B9FA5] sm:text-base">
                    About NovaCare Nursing
                  </p>

                  <h1 className="mt-4 max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#1D3952] sm:text-5xl lg:text-[3.4rem]">
                    Nurse-led care,
                    <span className="block text-[#6E3BE8]">built around the person.</span>
                  </h1>

                  <p className="mt-6 max-w-xl text-lg leading-8">
                    NovaCare Nursing is a Tasmanian owned and operated clinical nursing and aged-care service supporting older people in their own homes across Southern Tasmania.
                  </p>

                  <p className="mt-4 max-w-xl leading-7">
                    Care can be arranged privately or, where appropriate, through a registered Support at Home provider. Whichever pathway is used, the clinical approach remains the same: thoughtful assessment, clear planning, continuity, skilled nursing and genuine kindness.
                  </p>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/services"
                      className="inline-flex min-h-[50px] items-center justify-center rounded-2xl bg-[#2FBFC4] px-6 py-3 font-semibold text-[#173B5C] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#59D6D0]"
                    >
                      Explore our services
                    </Link>
                    <Link
                      href="/about-palantina"
                      className="inline-flex min-h-[50px] items-center justify-center rounded-2xl border border-[#D8D1F4] bg-[#F8F6FF] px-6 py-3 font-semibold text-[#5C43A8] transition hover:-translate-y-0.5 hover:bg-[#F2EEFF]"
                    >
                      Meet our founder
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative min-h-[340px] overflow-hidden lg:min-h-[590px]">
                <Image
                  src="/iStock-2282022010.jpg"
                  alt="Nurse talking with an older couple during a home care visit"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover object-center"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#173B5C]/18 via-transparent to-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2B9FA5] sm:text-base">
                  Why we exist
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#1D3952] sm:text-4xl">
                  Older people deserve more than task-based care.
                </h2>
              </div>

              <div className="space-y-5 text-base leading-8 sm:text-lg">
                <p>
                  Home care works best when the person is known, changes are noticed early and everyone involved understands the plan. A wound, a fall, a change in behaviour, reduced appetite or increasing fatigue rarely exists in isolation.
                </p>
                <p>
                  NovaCare Nursing was built around a nursing model that looks beyond the immediate task. We assess what is happening, identify what may be contributing, provide the nursing response and coordinate with the wider healthcare team when more input is needed.
                </p>
                <p className="font-semibold text-[#1D3952]">
                  Clinical skill matters. So do continuity, kindness and the confidence that someone experienced is seeing the whole picture.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {principles.map((principle) => (
                <article
                  key={principle.title}
                  className={`rounded-[1.6rem] border p-6 shadow-[0_10px_28px_rgba(29,57,82,0.045)] ${principle.tone}`}
                >
                  <span
                    aria-hidden="true"
                    className={`text-2xl font-semibold ${principle.accent}`}
                  >
                    +
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-[#1D3952]">
                    {principle.title}
                  </h3>
                  <p className="mt-3 leading-7">{principle.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
              <div className="rounded-[2rem] border border-[#D7EEF0] bg-gradient-to-br from-[#EAF9FA] via-white to-[#F2EEFF] p-7 shadow-[0_18px_50px_rgba(29,57,82,0.07)] sm:p-9">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6E3BE8]">
                  Aged care, led by nursing
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#1D3952]">
                  The clinical layer should never be an afterthought.
                </h2>
                <p className="mt-4 leading-8">
                  Registered Nurse assessment, clinical reasoning and escalation support are built into the NovaCare Nursing model so carers, families and providers are not left to manage emerging health concerns alone.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  ["01", "Assess", "Understand the person, their baseline, risks, goals and current clinical picture."],
                  ["02", "Plan", "Translate assessment into clear, practical care that people can actually follow at home."],
                  ["03", "Review", "Notice change, document it, communicate clearly and escalate when the situation requires more."],
                ].map(([number, title, text]) => (
                  <article
                    key={number}
                    className="rounded-[1.5rem] border border-[#DCEDEF] bg-[#F8FCFD] p-5 shadow-sm"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sm font-bold text-[#238C93] shadow-sm">
                      {number}
                    </span>
                    <h3 className="mt-4 text-xl font-semibold text-[#1D3952]">{title}</h3>
                    <p className="mt-2 text-sm leading-6">{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[#E3DDFB] bg-gradient-to-r from-white via-[#FCFEFF] to-[#F2EEFF] p-7 shadow-[0_18px_50px_rgba(29,57,82,0.07)] sm:p-9">
            <div className="grid gap-7 lg:grid-cols-[auto_1fr_auto] lg:items-center">
              <div className="flex h-24 w-24 flex-col items-center justify-center rounded-[1.5rem] bg-[#1D3952] text-white shadow-sm">
                <span className="text-4xl font-semibold leading-none">18</span>
                <span className="mt-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#A9ECE8]">years</span>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6E3BE8]">
                  Founded and clinically led by Palantina Hughes
                </p>
                <h2 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-[#1D3952]">
                  Clinical Nurse Consultant &amp; Registered Nurse
                </h2>
                <p className="mt-3 max-w-3xl leading-7">
                  Emergency, acute, community, palliative and complex home-care experience shape the clinical standards behind NovaCare Nursing.
                </p>
              </div>

              <Link
                href="/about-palantina"
                className="inline-flex min-h-[50px] items-center justify-center rounded-2xl bg-[#6E3BE8] px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#5F31CE]"
              >
                Read Palantina&apos;s story
              </Link>
            </div>
          </div>
        </section>
      </main>

      <ContactCta />
      <SiteFooter />
    </>
  );
}
