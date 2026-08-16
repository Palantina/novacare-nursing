import Head from "next/head";
import Link from "next/link";
import Hero from "../components/Hero";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ContactCta from "../components/ContactCta";

const trustItems = [
  "AHPRA-registered",
  "Fully insured",
  "WWVP and police checked",
  "Advanced first aid and resuscitation",
];

const serviceCards = [
  {
    eyebrow: "Care at home",
    title: "Clinical Nursing at Home",
    description:
      "Experienced nursing assessment, monitoring, medication and infusion support under written orders, and practical clinical care when health needs change.",
    accent: "bg-[#2FBFC4]",
    border: "border-[#D7EEF0]",
    background: "from-white via-white to-[#EAF9FA]",
  },
  {
    eyebrow: "Skilled clinical care",
    title: "Wound, Continence & Device Care",
    description:
      "Advanced wound and skin care, catheter and stoma support, PEG and enteral feeding care, and monitoring of clinical devices.",
    accent: "bg-[#6E3BE8]",
    border: "border-[#E3DDFB]",
    background: "from-white via-white to-[#F2EEFF]",
  },
  {
    eyebrow: "Recovery support",
    title: "After Hospital, Surgery or Illness",
    description:
      "Post-hospital and post-operative nursing, wound review, symptom monitoring and early escalation to help recovery stay on track.",
    accent: "bg-[#5274D8]",
    border: "border-[#DCE8F8]",
    background: "from-white via-white to-[#EEF4FF]",
  },
  {
    eyebrow: "Understanding the person",
    title: "Dementia & Cognitive Support",
    description:
      "Clinical assessment and practical planning for changed behaviours, distress, sleep, routines, safety and family or carer support.",
    accent: "bg-[#D88972]",
    border: "border-[#F0DDD6]",
    background: "from-white via-white to-[#FFF7F3]",
  },
  {
    eyebrow: "Comfort and dignity",
    title: "Palliative & End-of-Life Nursing",
    description:
      "Calm, skilled and comfort-focused nursing at home, with family guidance and coordination with GPs and palliative care teams.",
    accent: "bg-[#6E3BE8]",
    border: "border-[#E3DDFB]",
    background: "from-white via-white to-[#F2EEFF]",
  },
  {
    eyebrow: "Advice and oversight",
    title: "Telehealth, Consultancy & Provider Support",
    description:
      "Telehealth review, complex care planning, clinical governance, documentation, education and experienced nursing guidance for families and providers.",
    accent: "bg-[#2FBFC4]",
    border: "border-[#D7EEF0]",
    background: "from-white via-white to-[#EAF9FA]",
  },
];

const accessCards = [
  {
    title: "Private Nursing",
    description:
      "Book NovaCare Nursing directly for fee-for-service clinical nursing in your home.",
    href: "/private-nursing",
    linkText: "Explore Private Nursing",
    accent: "text-[#238C93]",
    background: "bg-[#EAF9FA]",
    border: "border-[#D7EEF0]",
  },
  {
    title: "Support at Home",
    description:
      "If you receive Support at Home, your registered provider can engage NovaCare Nursing to deliver nursing as part of your agreed care and services.",
    href: "/providers/support-at-home",
    linkText: "Support at Home pathway",
    accent: "text-[#6E3BE8]",
    background: "bg-[#F2EEFF]",
    border: "border-[#E3DDFB]",
  },
  {
    title: "NDIS",
    description:
      "Depending on how your plan is managed, nursing may be arranged directly or through a provider. NovaCare Nursing can also work alongside registered NDIS providers.",
    href: "/providers/ndis",
    linkText: "NDIS nursing pathway",
    accent: "text-[#5274D8]",
    background: "bg-[#EEF4FF]",
    border: "border-[#DCE8F8]",
  },
  {
    title: "For Providers & Organisations",
    description:
      "Clinical nursing, consultancy, governance, education and complex-care support for organisations that need experienced nursing input.",
    href: "/providers",
    linkText: "For Providers",
    accent: "text-[#A95440]",
    background: "bg-[#FFF7F3]",
    border: "border-[#F0DDD6]",
  },
];

const differenceCards = [
  {
    title: "Tasmanian and accountable",
    description:
      "Tasmanian owned, clinically led and delivered with direct knowledge of our local hospitals, providers, communities and access challenges.",
  },
  {
    title: "Nursing only",
    description:
      "We assess what is happening, identify what is missing and provide the nursing response without selling unrelated services or care packages.",
  },
  {
    title: "Hospital-level capability at home",
    description:
      "Advanced assessment, post-hospital care, infusions under written orders, complex procedures, deterioration recognition and timely escalation.",
  },
  {
    title: "Clinical governance built in",
    description:
      "Assessment, care planning, documentation, risk, escalation, education and review are guided by clear clinical standards and experienced oversight.",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>NovaCare Nursing | Clinical Nursing at Home | Hobart</title>

        <meta
          name="description"
          content="Experienced clinical nursing at home across Hobart and Southern Tasmania, including private nursing, Support at Home, NDIS, complex wound care, palliative nursing and provider support."
        />

        <link
          rel="canonical"
          href="https://www.novacarenursing.com.au/"
        />

        <meta
          property="og:title"
          content="NovaCare Nursing | Clinical Nursing at Home | Hobart"
        />

        <meta
          property="og:description"
          content="Experienced clinical nursing at home across Hobart and Southern Tasmania for private clients, Support at Home, NDIS and provider partners."
        />

        <meta
          property="og:url"
          content="https://www.novacarenursing.com.au/"
        />

        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Head>

      <SiteHeader />

      <main className="bg-[#F8FCFD] font-sans text-[#1D3952]">
        <Hero />

        <section className="px-4 pb-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[1.75rem] border border-[#DCEDEF] bg-white px-5 py-5 shadow-[0_14px_40px_rgba(29,57,82,0.06)] sm:px-7">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {trustItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <span
                    aria-hidden="true"
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EAF9FA] text-[#238C93]"
                  >
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="m7 12 3 3 7-7"
                        stroke="currentColor"
                        strokeWidth="1.9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  <p className="text-sm font-semibold text-[#445E72] sm:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2B9FA5] sm:text-base">
                Care shaped around you
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#1D3952] sm:text-4xl lg:text-[2.75rem]">
                Nursing for people,
                <span className="block">not categories.</span>
              </h2>

              <p className="mt-5 text-base leading-7 text-[#526B7C] sm:text-lg sm:leading-8">
                For children aged six and over, adults and older people,
                NovaCare Nursing brings experienced clinical care, practical
                support and clear guidance into the comfort of home.
              </p>
            </div>

            <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {serviceCards.map((service) => (
                <article
                  key={service.title}
                  className={`relative overflow-hidden rounded-[1.65rem] border bg-gradient-to-br p-6 shadow-[0_12px_34px_rgba(29,57,82,0.05)] ${service.border} ${service.background}`}
                >
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 top-0 h-1.5 ${service.accent}`}
                  />

                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#6D8190]">
                    {service.eyebrow}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold tracking-[-0.025em] text-[#1D3952]">
                    {service.title}
                  </h3>

                  <p className="mt-3 leading-7 text-[#526B7C]">
                    {service.description}
                  </p>

                  <Link
                    href="/services"
                    className="mt-5 inline-flex items-center gap-1 font-semibold text-[#5C43A8] transition hover:text-[#6E3BE8]"
                  >
                    Learn more
                    <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#E2ECEF] bg-white p-6 shadow-[0_18px_50px_rgba(29,57,82,0.06)] sm:p-8 lg:p-10">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6E3BE8] sm:text-base">
                Flexible access. Clear pathways.
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#1D3952] sm:text-4xl">
                How to Access Care
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-[#526B7C] sm:text-lg">
                Flexible pathways for private clients, Support at Home,
                NDIS, providers and organisations.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {accessCards.map((card) => (
                <article
                  key={card.title}
                  className={`rounded-[1.5rem] border p-6 ${card.border} ${card.background}`}
                >
                  <h3 className="text-xl font-semibold text-[#1D3952]">
                    {card.title}
                  </h3>

                  <p className="mt-3 leading-7 text-[#526B7C]">
                    {card.description}
                  </p>

                  <Link
                    href={card.href}
                    className={`mt-5 inline-flex items-center gap-1 font-semibold transition hover:opacity-80 ${card.accent}`}
                  >
                    {card.linkText}
                    <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch">
            <div className="rounded-[2rem] border border-[#D7EEF0] bg-[#EAF9FA] p-7 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#238C93] sm:text-base">
                Tasmanian owned. Clinically led.
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#1D3952] sm:text-4xl">
                Local nursing,
                <span className="block">
                  built to a higher standard.
                </span>
              </h2>

              <p className="mt-5 leading-7 text-[#526B7C] sm:text-lg sm:leading-8">
                NovaCare Nursing is founded and clinically led by Palantina
                Hughes, bringing experienced clinical judgement, continuity
                and accountability into care at home.
              </p>

              <div className="mt-7 inline-flex rounded-2xl bg-white px-5 py-4 shadow-sm">
                <div>
                  <p className="text-3xl font-semibold tracking-[-0.04em] text-[#1D3952]">
                    18 years
                  </p>

                  <p className="mt-1 text-sm font-medium text-[#526B7C]">
                    nursing experience
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#E3DDFB] bg-white p-7 shadow-[0_16px_44px_rgba(29,57,82,0.06)] sm:p-8">
              <p className="text-2xl font-semibold tracking-[-0.025em] text-[#1D3952]">
                Palantina Hughes
              </p>

              <p className="mt-2 font-semibold text-[#6E3BE8]">
                Founder &amp; Clinical Nurse Consultant
              </p>

              <p className="mt-1 font-medium text-[#526B7C]">
                Registered Nurse
              </p>

              <p className="mt-5 leading-7 text-[#526B7C] sm:text-lg sm:leading-8">
                Experience across emergency and acute care,
                hospital-in-the-home and Community Rapid Response, complex
                community nursing, palliative care and clinical governance.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/about"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-2xl bg-[#2FBFC4] px-6 py-3 font-semibold text-[#173B5C] transition hover:bg-[#59D6D0]"
                >
                  Meet our founder
                </Link>

                <Link
                  href="/providers"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-2xl border border-[#D8D1F4] bg-white px-6 py-3 font-semibold text-[#5C43A8] transition hover:bg-[#F7F4FF]"
                >
                  Clinical support for providers
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6E3BE8] sm:text-base">
                The NovaCare Nursing difference
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#1D3952] sm:text-4xl">
                Independent nursing with clinical accountability.
              </h2>

              <p className="mt-5 text-base leading-7 text-[#526B7C] sm:text-lg sm:leading-8">
                Nursing is our service. We look at the whole clinical
                picture, identify what is missing and recommend what is
                genuinely needed.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {differenceCards.map((card, index) => (
                <article
                  key={card.title}
                  className="rounded-[1.6rem] border border-[#E2ECEF] bg-white p-6 shadow-[0_10px_30px_rgba(29,57,82,0.045)]"
                >
                  <span
                    aria-hidden="true"
                    className={`block h-1.5 w-12 rounded-full ${
                      index % 2 === 0
                        ? "bg-[#2FBFC4]"
                        : "bg-[#6E3BE8]"
                    }`}
                  />

                  <h3 className="mt-4 text-xl font-semibold text-[#1D3952]">
                    {card.title}
                  </h3>

                  <p className="mt-3 leading-7 text-[#526B7C]">
                    {card.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-6 rounded-[1.6rem] border border-[#D7EEF0] bg-[#EAF9FA] p-6 sm:p-7">
              <p className="text-xl font-semibold text-[#1D3952]">
                We review what is missing—not what else we can sell.
              </p>

              <p className="mt-3 leading-7 text-[#526B7C] sm:text-lg sm:leading-8">
                The right next step may be NovaCare Nursing, review by a GP
                or specialist, coordination with an existing provider, or
                urgent hospital care. The clinical need comes first.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2B9FA5] sm:text-base">
                Trusted by families and professionals
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#1D3952] sm:text-4xl">
                Experienced care.
                <span className="block">
                  Remembered for how it felt.
                </span>
              </h2>

              <p className="mt-5 text-base leading-7 text-[#526B7C] sm:text-lg sm:leading-8">
                Clinical skill matters. So do continuity, kindness and the
                confidence that someone experienced is seeing the whole
                picture.
              </p>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <figure className="rounded-[2rem] border border-[#E3DDFB] bg-gradient-to-br from-white via-white to-[#F2EEFF] p-7 shadow-[0_16px_44px_rgba(29,57,82,0.06)] sm:p-8">
                <span
                  aria-hidden="true"
                  className="text-5xl font-semibold leading-none text-[#6E3BE8]"
                >
                  “
                </span>

                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#6E3BE8]">
                  Professional endorsement
                </p>

                <blockquote className="mt-4 leading-7 text-[#445E72] sm:text-lg sm:leading-8">
                  “All clients I refer to Tina consistently provide positive
                  feedback about how phenomenal she is. Her bedside manner
                  and clinical knowledge are exceptional; she has a genuine
                  passion and devotion to supporting her clients. … Her
                  communication and recommendations are clear,
                  comprehensive, accurate and timely. … Any person lucky
                  enough to be supported by Tina will receive excellent,
                  evidence based care delivered with humanity and
                  compassion.”
                </blockquote>

                <figcaption className="mt-6 border-t border-[#E3DDFB] pt-5">
                  <p className="font-semibold text-[#1D3952]">
                    Laura Pfundt
                  </p>

                  <p className="mt-1 text-sm leading-6 text-[#526B7C]">
                    Clinical Lead / Clinical Care Partner
                    <br />
                    Huon Regional Care
                  </p>
                </figcaption>
              </figure>

              <figure className="rounded-[2rem] border border-[#D7EEF0] bg-gradient-to-br from-white via-white to-[#EAF9FA] p-7 shadow-[0_16px_44px_rgba(29,57,82,0.06)] sm:p-8">
                <span
                  aria-hidden="true"
                  className="text-5xl font-semibold leading-none text-[#238C93]"
                >
                  “
                </span>

                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#238C93]">
                  Family testimonial
                </p>

                <blockquote className="mt-4 leading-7 text-[#445E72] sm:text-lg sm:leading-8">
                  “It was immediately apparent that Tina&apos;s considerable
                  experience in both identifying the most effective treatment
                  necessary; and then administering it; was exceptional.
                  Tina&apos;s kind and thorough administration and application
                  of the medications prescribed eased the way forward.
                  <br />
                  <br />
                  As Rosemary&apos;s condition deteriorated, so Tina
                  diligently interrelated with Rosemary (and myself as her
                  full-time carer), along with Dr Shill, Rosemary&apos;s
                  doctor; and her Huon Valley Home care support staff who
                  daily gave supporting assistance in the easing and
                  management of her terminal condition. Tina&apos;s
                  experience and ability to identify and apply the necessary
                  means of achieving this was very much appreciated by us
                  all. Rosemary and I were privileged to have experienced
                  Tina&apos;s support and wisdom.”
                </blockquote>

                <figcaption className="mt-6 border-t border-[#D7EEF0] pt-5">
                  <p className="font-semibold text-[#1D3952]">
                    Robert (Bob) Frost
                  </p>

                  <p className="mt-1 text-sm leading-6 text-[#526B7C]">
                    Rosemary&apos;s husband and full-time carer
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
      </main>

      <ContactCta />
      <SiteFooter />
    </>
  );
}
