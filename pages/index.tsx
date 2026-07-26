import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import Hero from "../components/Hero";
import SiteFooter from "../components/SiteFooter";

const trustPoints = [
  "AHPRA-registered",
  "Fully insured",
  "WWVP and police checked",
  "Advanced first aid and resuscitation",
];

const trustIconStyles = [
  "bg-[#EAF9FA] text-[#2B9FA5]",
  "bg-[#F2EEFF] text-[#6E3BE8]",
  "bg-[#EEF4FF] text-[#5274D8]",
  "bg-[#EAF9FA] text-[#2B9FA5]",
];

const featuredServices = [
  {
    number: "01",
    title: "Clinical Nursing at Home",
    description:
      "Experienced assessment, monitoring, medication and infusion support under written orders, and practical clinical care when health needs change.",
  },
  {
    number: "02",
    title: "Wound, Continence & Device Care",
    description:
      "Advanced wound and skin care, catheter and stoma support, PEG and enteral feeding care, and monitoring of clinical devices.",
  },
];

const additionalServices = [
  "After Hospital, Surgery or Illness",
  "Palliative & End-of-Life Nursing",
  "Dementia & Cognitive Support",
  "Telehealth, Consultancy & Provider Support",
];

const accessPathways = [
  {
    title: "Private Nursing",
    description:
      "Book NovaCare Nursing directly for premium clinical care delivered in your home.",
    href: "/private-nursing",
    linkLabel: "Explore Private Nursing",
  },
  {
    title: "Support at Home",
    description:
      "Your chosen provider can engage NovaCare Nursing to deliver clinical supports on their behalf.",
    href: "/services",
    linkLabel: "Support at Home Pathway",
  },
  {
    title: "Providers & Residential Aged Care",
    description:
      "Consultancy and specialist nursing support for providers, nursing homes, and residential aged care homes.",
    href: "/providers",
    linkLabel: "For Providers",
  },
];

const accessPathwayStyles = [
  {
    card: "border-[#CFEAEC] bg-gradient-to-br from-white via-white to-[#EAF9FA]",
    marker: "bg-[#DDF5F5] text-[#238C93]",
    link: "text-[#238C93]",
    glow: "bg-[#A9ECE8]/35",
  },
  {
    card: "border-[#E3DDFB] bg-gradient-to-br from-white via-white to-[#F2EEFF]",
    marker: "bg-[#E9E2FF] text-[#6E3BE8]",
    link: "text-[#6E3BE8]",
    glow: "bg-[#D7CEFF]/35",
  },
  {
    card: "border-[#DCE8F8] bg-gradient-to-br from-white via-white to-[#EEF4FF]",
    marker: "bg-[#E1EBFF] text-[#5274D8]",
    link: "text-[#5274D8]",
    glow: "bg-[#C9DAFF]/35",
  },
];

const founderStrengths = [
  {
    number: "01",
    title: "Tasmanian & accountable",
    description:
      "Local knowledge, direct clinical responsibility and continuity from an independent nurse-led practice.",
  },
  {
    number: "02",
    title: "Hospital-level capability at home",
    description:
      "Advanced assessment, complex procedures, deterioration recognition and timely escalation in the home environment.",
  },
  {
    number: "03",
    title: "Nursing only",
    description:
      "Clinical needs come first, without selling unrelated services or building care around a package.",
  },
  {
    number: "04",
    title: "Clinical governance built in",
    description:
      "Care planning, documentation, risk, escalation, education and review are part of the nursing response.",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>
          NovaCare Nursing | Premium Private Home Nursing in Hobart & Surrounds
        </title>

        <meta
          name="description"
          content="NovaCare Nursing is a specialised clinical nursing consultancy providing premium private home nursing, palliative nursing, dementia support, and provider-facing clinical support across Hobart and surrounds, Tasmania."
        />

        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.novacarenursing.com.au/" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeHealthCare",
              "@id": "https://www.novacarenursing.com.au/#org",
              name: "NovaCare Nursing",
              url: "https://www.novacarenursing.com.au",
              logo: "https://www.novacarenursing.com.au/NovaCare_Logo.svg",
              image: "https://www.novacarenursing.com.au/NovaCare_Logo.svg",
              description:
                "Specialised clinical nursing consultancy providing premium private home nursing, palliative nursing, dementia support, and provider-facing clinical support across Hobart and surrounds, Tasmania.",
              telephone: "+61491303671",
              email: "info@novacarenursing.com.au",
              areaServed: {
                "@type": "City",
                name: "Hobart",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Hobart",
                addressRegion: "TAS",
                addressCountry: "AU",
              },
              founder: {
                "@type": "Person",
                name: "Palantina Hughes",
                jobTitle: "Clinical Nursing Consultant",
              },
              sameAs: [],
            }),
          }}
        />
      </Head>

      <SiteHeader />
      <Hero />

      <main>
        {/* Professional credentials — intentionally unchanged */}
        <section className="bg-[#F8FCFD]">
          <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
            <div className="grid gap-3 rounded-[2rem] border border-[#DCEDEF] bg-white p-4 shadow-[0_18px_50px_rgba(29,57,82,0.07)] sm:grid-cols-2 sm:p-5 lg:grid-cols-4">
              {trustPoints.map((item, index) => (
                <div
                  key={item}
                  className="flex min-h-[92px] items-center gap-3 rounded-2xl border border-[#E2ECEF] bg-[#F8FCFD] p-4"
                >
                  <span
                    aria-hidden="true"
                    className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
                      trustIconStyles[index] ?? trustIconStyles[0]
                    }`}
                  >
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="m7 12.5 3.2 3.2L17.5 8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      <path
                        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />
                    </svg>
                  </span>

                  <p className="text-sm font-semibold leading-6 text-[#1D3952] sm:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Editorial services */}
        <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
          <div
            aria-hidden="true"
            className="absolute -left-32 top-24 h-80 w-80 rounded-full bg-[#DDF5F5]/55 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -right-36 bottom-0 h-96 w-96 rounded-full bg-[#EAE1FC]/45 blur-3xl"
          />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-16">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -bottom-5 -right-5 h-36 w-36 rounded-full bg-[#C9DAFF]/45 blur-2xl"
                />

                <div className="group relative overflow-hidden rounded-[2.5rem] border border-[#DCEDEF] bg-[#F8FCFD] shadow-[0_24px_70px_rgba(29,57,82,0.10)]">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image
                      src="/novacare-home-nursing.webp"
                      alt="Registered nurse reviewing care with an older woman at home"
                      fill
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover transition duration-700 ease-out group-hover:scale-[1.025]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2B9FA5] sm:text-base">
                  Care shaped around you
                </p>

                <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#1D3952] sm:text-5xl lg:text-[3.5rem]">
                  Nursing for people,
                  <span className="block text-[#6E3BE8]">not categories.</span>
                </h2>

                <p className="mt-6 max-w-xl text-lg leading-8 text-[#526B7C]">
                  For children aged six and over, adults and older people,
                  NovaCare Nursing brings experienced clinical care, practical
                  support and clear guidance into the comfort of home.
                </p>

                <div className="mt-8 border-y border-[#DFEAED]">
                  {featuredServices.map((service) => (
                    <Link
                      key={service.title}
                      href="/services"
                      className="group/service grid grid-cols-[auto_1fr_auto] gap-4 border-b border-[#DFEAED] py-5 last:border-b-0 sm:gap-5"
                    >
                      <span className="pt-1 text-xs font-bold tracking-[0.16em] text-[#2B9FA5]">
                        {service.number}
                      </span>

                      <span>
                        <span className="block text-xl font-semibold leading-snug text-[#1D3952]">
                          {service.title}
                        </span>
                        <span className="mt-2 block leading-7 text-[#526B7C]">
                          {service.description}
                        </span>
                      </span>

                      <span
                        aria-hidden="true"
                        className="pt-1 text-xl text-[#2B9FA5] transition-transform duration-300 group-hover/service:translate-x-1"
                      >
                        →
                      </span>
                    </Link>
                  ))}
                </div>

                <div className="mt-7 grid gap-x-8 sm:grid-cols-2">
                  {additionalServices.map((service) => (
                    <Link
                      key={service}
                      href="/services"
                      className="group flex items-center justify-between gap-4 border-b border-[#E7EEF0] py-3.5 text-[15px] font-semibold leading-6 text-[#35546B] transition hover:text-[#6E3BE8]"
                    >
                      <span>{service}</span>
                      <span
                        aria-hidden="true"
                        className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </Link>
                  ))}
                </div>

                <Link
                  href="/services"
                  className="mt-8 inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-[#2FBFC4] px-6 py-3 font-semibold text-[#173B5C] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#59D6D0] focus:outline-none focus:ring-4 focus:ring-[#2FBFC4]/25"
                >
                  Explore all nursing services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Access pathways */}
        <section className="relative overflow-hidden bg-[#F8FCFD] py-16 sm:py-20 lg:py-24">
          <div
            aria-hidden="true"
            className="absolute left-[6%] top-8 h-64 w-64 rounded-full bg-[#DDF5F5]/65 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute right-[4%] bottom-0 h-72 w-72 rounded-full bg-[#EAE1FC]/50 blur-3xl"
          />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2B9FA5] sm:text-base">
                Clear pathways
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#1D3952] sm:text-5xl">
                Care can be simple to access.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#526B7C]">
                Choose the pathway that fits your situation. If you are unsure,
                start with a conversation and we will point you in the right
                direction.
              </p>
            </div>

            <div className="mt-11 grid gap-5 md:grid-cols-3">
              {accessPathways.map((pathway, index) => {
                const styles =
                  accessPathwayStyles[index] ?? accessPathwayStyles[0];

                return (
                  <article
                    key={pathway.title}
                    className={`group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border p-6 shadow-[0_14px_38px_rgba(29,57,82,0.06)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_55px_rgba(29,57,82,0.11)] sm:p-7 ${styles.card}`}
                  >
                    <div
                      aria-hidden="true"
                      className={`absolute -right-10 -top-10 h-32 w-32 rounded-full blur-2xl transition duration-500 group-hover:scale-110 ${styles.glow}`}
                    />

                    <div className="relative flex h-full flex-col">
                      <span
                        aria-hidden="true"
                        className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-bold shadow-sm ${styles.marker}`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3 className="mt-6 text-2xl font-semibold leading-snug tracking-[-0.025em] text-[#1D3952]">
                        {pathway.title}
                      </h3>

                      <p className="mt-3 flex-1 leading-7 text-[#526B7C]">
                        {pathway.description}
                      </p>

                      <Link
                        href={pathway.href}
                        className={`mt-6 inline-flex items-center gap-2 font-semibold ${styles.link}`}
                      >
                        {pathway.linkLabel}
                        <span
                          aria-hidden="true"
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Founder and clinical difference */}
        <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
          <div
            aria-hidden="true"
            className="absolute -left-28 bottom-0 h-72 w-72 rounded-full bg-[#E1EBFF]/45 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -right-24 top-16 h-72 w-72 rounded-full bg-[#DDF5F5]/50 blur-3xl"
          />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2B9FA5] sm:text-base">
                  Tasmanian owned. Clinically led.
                </p>

                <div className="mt-7 flex items-end gap-4">
                  <span className="text-[6.5rem] font-semibold leading-[0.72] tracking-[-0.08em] text-[#1D3952] sm:text-[8rem]">
                    18
                  </span>
                  <span className="pb-1 text-sm font-bold uppercase tracking-[0.2em] text-[#6E3BE8] sm:pb-2">
                    years
                    <span className="block">of nursing</span>
                  </span>
                </div>

                <h2 className="mt-8 max-w-lg text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#1D3952] sm:text-5xl">
                  Clinical judgement built over a career.
                </h2>

                <p className="mt-6 max-w-xl text-lg leading-8 text-[#526B7C]">
                  NovaCare Nursing is founded and clinically led by Palantina
                  Hughes, bringing experience across emergency and acute care,
                  hospital-in-the-home and Community Rapid Response, complex
                  community nursing, palliative care and clinical governance
                  directly into care at home.
                </p>

                <div className="mt-8">
                  <p className="text-xl font-semibold text-[#1D3952]">
                    Palantina Hughes
                  </p>
                  <p className="mt-1 font-semibold text-[#6E3BE8]">
                    Founder &amp; Clinical Nursing Consultant
                  </p>
                </div>

                <Link
                  href="/about"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-[#238C93]"
                >
                  Meet our founder
                  <span aria-hidden="true">→</span>
                </Link>
              </div>

              <div className="lg:border-l lg:border-[#E5EEF0] lg:pl-16">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6E3BE8] sm:text-base">
                  Why NovaCare
                </p>

                <h3 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#1D3952] sm:text-4xl">
                  Independent nursing. Clear accountability.
                </h3>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-[#526B7C]">
                  Nursing is the service. We look at the whole clinical picture,
                  identify what is missing and recommend what is genuinely needed.
                </p>

                <div className="mt-9 border-y border-[#E3ECEF]">
                  {founderStrengths.map((item) => (
                    <div
                      key={item.title}
                      className="grid gap-3 border-b border-[#E3ECEF] py-5 last:border-b-0 sm:grid-cols-[52px_1fr] sm:gap-5"
                    >
                      <span className="text-xs font-bold tracking-[0.16em] text-[#2B9FA5]">
                        {item.number}
                      </span>

                      <div>
                        <h4 className="text-lg font-semibold text-[#1D3952]">
                          {item.title}
                        </h4>
                        <p className="mt-1.5 leading-7 text-[#526B7C]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/providers"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-[#6E3BE8]"
                >
                  Clinical support for providers
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="mt-14 border-t border-[#E3ECEF] pt-10 text-center sm:mt-16 sm:pt-12">
              <p className="mx-auto max-w-4xl text-2xl font-semibold leading-9 tracking-[-0.025em] text-[#1D3952] sm:text-3xl sm:leading-10">
                We review what is missing — not what else we can sell.
              </p>
              <p className="mx-auto mt-4 max-w-3xl leading-7 text-[#526B7C]">
                The right next step may be NovaCare nursing, review by a GP or
                specialist, coordination with an existing provider, or urgent
                hospital care. The clinical need comes first.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="relative overflow-hidden bg-[#F8FCFD] py-16 sm:py-20 lg:py-24">
          <div
            aria-hidden="true"
            className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-[#EAE1FC]/45 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#DDF5F5]/55 blur-3xl"
          />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2B9FA5] sm:text-base">
                Trusted by families and professionals
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#1D3952] sm:text-5xl">
                Experienced care.
                <span className="block text-[#6E3BE8]">
                  Remembered for how it felt.
                </span>
              </h2>
            </div>

            <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-0">
              <article className="relative lg:pr-14">
                <span
                  aria-hidden="true"
                  className="font-serif text-7xl leading-none text-[#6E3BE8]/15"
                >
                  “
                </span>

                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#6E3BE8]">
                  Professional endorsement
                </p>

                <blockquote className="mt-5 text-xl leading-9 text-[#35546B]">
                  “Her bedside manner and clinical knowledge are exceptional; she
                  has a genuine passion and devotion to supporting her clients. …
                  Any person lucky enough to be supported by Tina will receive
                  excellent, evidence based care delivered with humanity and
                  compassion.”
                </blockquote>

                <div className="mt-7">
                  <p className="font-semibold text-[#1D3952]">Laura Pfundt</p>
                  <p className="mt-1 text-sm leading-6 text-[#526B7C]">
                    Clinical Lead / Clinical Care Partner
                    <br />
                    Huon Regional Care
                  </p>
                </div>
              </article>

              <article className="relative border-t border-[#E3ECEF] pt-10 lg:border-l lg:border-t-0 lg:pl-14 lg:pt-0">
                <span
                  aria-hidden="true"
                  className="font-serif text-7xl leading-none text-[#2B9FA5]/15"
                >
                  “
                </span>

                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#2B9FA5]">
                  Family testimonial
                </p>

                <blockquote className="mt-5 text-xl leading-9 text-[#35546B]">
                  “It was immediately apparent that Tina&apos;s considerable
                  experience in both identifying the most effective treatment
                  necessary; and then administering it; was exceptional. … Rosemary
                  and I were privileged to have experienced Tina&apos;s support and
                  wisdom.”
                </blockquote>

                <div className="mt-7">
                  <p className="font-semibold text-[#1D3952]">
                    Robert (Bob) Frost
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#526B7C]">
                    Rosemary&apos;s husband and full-time carer
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Homepage-only contact invitation */}
        <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-[#DCEDEF] bg-gradient-to-r from-[#EAF9FA] via-white to-[#F2EEFF] px-6 py-12 text-center shadow-[0_20px_60px_rgba(29,57,82,0.08)] sm:px-10 sm:py-14 lg:px-16">
            <div
              aria-hidden="true"
              className="absolute -left-16 -top-20 h-64 w-64 rounded-full bg-[#A9ECE8]/30 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -right-16 -bottom-20 h-64 w-64 rounded-full bg-[#D7CEFF]/30 blur-3xl"
            />

            <div className="relative mx-auto max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2B9FA5] sm:text-base">
                Start with a conversation
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#1D3952] sm:text-5xl">
                Need experienced nursing at home?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#526B7C]">
                Tell us what is happening. We can help clarify the nursing need
                and the most appropriate way to arrange care.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[54px] items-center justify-center rounded-2xl bg-[#2FBFC4] px-7 py-3 font-semibold text-[#173B5C] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#59D6D0] focus:outline-none focus:ring-4 focus:ring-[#2FBFC4]/25"
                >
                  Talk to NovaCare
                </Link>

                <a
                  href="tel:+61491303671"
                  className="inline-flex min-h-[54px] items-center justify-center px-5 py-3 font-semibold text-[#5C43A8] transition hover:text-[#6E3BE8]"
                >
                  0491 303 671
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
