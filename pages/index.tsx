import Head from "next/head";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import Hero from "../components/Hero";
import ContactCta from "../components/ContactCta";
import SiteFooter from "../components/SiteFooter";

const brand = { blue: "#0B2D5C", gold: "#C6A662" };

type ServiceIconName =
  | "home"
  | "wound"
  | "recovery"
  | "dementia"
  | "palliative"
  | "telehealth";

type SignatureService = {
  tag: string;
  title: string;
  description: string;
  icon: ServiceIconName;
  cardClass: string;
  iconClass: string;
  linkClass: string;
};

const signatureServices: SignatureService[] = [
  {
    tag: "Care at home",
    title: "Clinical Nursing at Home",
    description:
      "Experienced nursing assessment, monitoring, medication and infusion support under written orders, and practical clinical care when health needs change.",
    icon: "home",
    cardClass:
      "border-[#D7EEF0] bg-gradient-to-br from-white via-white to-[#EAF9FA]",
    iconClass: "bg-[#DDF5F5] text-[#238C93]",
    linkClass: "text-[#238C93]",
  },
  {
    tag: "Skilled clinical care",
    title: "Wound, Continence & Device Care",
    description:
      "Advanced wound and skin care, catheter and stoma support, PEG and enteral feeding care, and monitoring of clinical devices.",
    icon: "wound",
    cardClass:
      "border-[#E3DDFB] bg-gradient-to-br from-white via-white to-[#F2EEFF]",
    iconClass: "bg-[#E9E2FF] text-[#6E3BE8]",
    linkClass: "text-[#6E3BE8]",
  },
  {
    tag: "Recovery support",
    title: "After Hospital, Surgery or Illness",
    description:
      "Post-hospital and post-operative nursing, wound review, symptom monitoring and early escalation to help recovery stay on track.",
    icon: "recovery",
    cardClass:
      "border-[#DCE8F8] bg-gradient-to-br from-white via-white to-[#EEF4FF]",
    iconClass: "bg-[#E1EBFF] text-[#5274D8]",
    linkClass: "text-[#5274D8]",
  },
  {
    tag: "Understanding the person",
    title: "Dementia & Cognitive Support",
    description:
      "Clinical assessment and practical planning for changed behaviours, distress, sleep, routines, safety and family or carer support.",
    icon: "dementia",
    cardClass:
      "border-[#F2DDD5] bg-gradient-to-br from-white via-white to-[#FFF2EC]",
    iconClass: "bg-[#FFE5DA] text-[#B9654F]",
    linkClass: "text-[#A95440]",
  },
  {
    tag: "Comfort and dignity",
    title: "Palliative & End-of-Life Nursing",
    description:
      "Calm, skilled and comfort-focused nursing at home, with family guidance and coordination with GPs and palliative care teams.",
    icon: "palliative",
    cardClass:
      "border-[#E4DDF5] bg-gradient-to-br from-white via-white to-[#F5F0FF]",
    iconClass: "bg-[#EAE1FC] text-[#7652B5]",
    linkClass: "text-[#7652B5]",
  },
  {
    tag: "Advice and oversight",
    title: "Telehealth, Consultancy & Provider Support",
    description:
      "Telehealth review, complex care planning, clinical governance, documentation, education and experienced nursing guidance for families and providers.",
    icon: "telehealth",
    cardClass:
      "border-[#D6ECEF] bg-gradient-to-br from-white via-white to-[#EDF9FA]",
    iconClass: "bg-[#DDF3F5] text-[#2B8E99]",
    linkClass: "text-[#2B8E99]",
  },
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

const whyNovaCare = [
  "Clinical consultancy and direct nursing support tailored to complex care at home",
  "Clear documentation, clinical judgement, and timely escalation where needed",
  "Compassionate, discreet, professional care that protects dignity and trust",
  "Support for individuals, families, providers, and residential aged care homes",
];

function ServiceIcon({ name }: { name: ServiceIconName }) {
  if (name === "home") {
    return (
      <svg
        className="h-7 w-7"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M3.5 11.2 12 4l8.5 7.2V20H3.5v-8.8Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M12 10v6M9 13h6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (name === "wound") {
    return (
      <svg
        className="h-7 w-7"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="4"
          y="8"
          width="16"
          height="8"
          rx="4"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M12 9.7v4.6M9.7 12h4.6"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M7 9.2v5.6M17 9.2v5.6"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.65"
        />
      </svg>
    );
  }

  if (name === "recovery") {
    return (
      <svg
        className="h-7 w-7"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M19.2 8.2A8 8 0 1 0 20 13"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M16.2 8.2h3V5.1"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 9.2v5.6M9.2 12h5.6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (name === "dementia") {
    return (
      <svg
        className="h-7 w-7"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M9.3 19.5H6.8v-3.1a6.7 6.7 0 1 1 7.5 2.7v2.4"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 9.3h.01M13 8h.01M14.5 12h.01M10.8 13.3h.01"
          stroke="currentColor"
          strokeWidth="2.3"
          strokeLinecap="round"
        />
        <path
          d="M17.8 4.2v2.5M16.55 5.45h2.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (name === "palliative") {
    return (
      <svg
        className="h-7 w-7"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 18.8 5.3 12.5a4.2 4.2 0 0 1 5.9-6l.8.8.8-.8a4.2 4.2 0 0 1 5.9 6L12 18.8Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M3.5 19.5c2.5-1.5 4.8-1.7 7-.5l1.5.8 1.5-.8c2.2-1.2 4.5-1 7 .5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg
      className="h-7 w-7"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3.5"
        y="4.5"
        width="17"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M9 20h6M12 16.5V20"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M12 8v5M9.5 10.5h5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

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
        {/* Professional credentials */}
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

        {/* Services for all stages of life */}
        <section className="relative overflow-hidden border-y border-[#E5EFF1] bg-white py-16 sm:py-20">
          <div
            aria-hidden="true"
            className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#DDF5F5]/70 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -right-20 top-40 h-80 w-80 rounded-full bg-[#EAE1FC]/60 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute bottom-0 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[#E1EBFF]/60 blur-3xl"
          />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2B9FA5] sm:text-base">
                  Care shaped around you
                </p>

                <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#1D3952] sm:text-5xl">
                  Nursing for people,
                  <span className="block text-[#6E3BE8]">
                    not categories.
                  </span>
                </h2>
              </div>

              <div>
                <p className="max-w-3xl text-lg leading-8 text-[#526B7C]">
                  For children aged six and over, adults and older people,
                  NovaCare Nursing brings experienced clinical care, practical
                  support and clear guidance into the comfort of home.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "Children aged 6+",
                    "Adults",
                    "Older people",
                    "Families",
                    "Service providers",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#DCEDEF] bg-[#F8FCFD] px-4 py-2 text-sm font-semibold text-[#35546B]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-11 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {signatureServices.map((service) => (
                <article
                  key={service.title}
                  className={`group flex h-full flex-col rounded-[1.75rem] border p-6 shadow-[0_14px_40px_rgba(29,57,82,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(29,57,82,0.12)] sm:p-7 ${service.cardClass}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className={`inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${service.iconClass}`}
                    >
                      <ServiceIcon name={service.icon} />
                    </span>

                    <span className="rounded-full border border-white/80 bg-white/75 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#526B7C] shadow-sm">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold leading-snug tracking-[-0.025em] text-[#1D3952]">
                    {service.title}
                  </h3>

                  <p className="mt-4 flex-1 leading-7 text-[#526B7C]">
                    {service.description}
                  </p>

                  <Link
                    href="/services"
                    className={`mt-6 inline-flex items-center gap-2 font-semibold ${service.linkClass}`}
                  >
                    Learn more
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </article>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-6 rounded-[2rem] border border-[#DCEDEF] bg-white/90 p-6 shadow-[0_18px_50px_rgba(29,57,82,0.08)] backdrop-blur sm:p-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-2xl font-semibold tracking-[-0.025em] text-[#1D3952]">
                  Not sure what kind of nursing support you need?
                </p>

                <p className="mt-2 max-w-3xl leading-7 text-[#526B7C]">
                  Start with a conversation. We can clarify what is needed and
                  whether care is best arranged privately or through your
                  current service provider.
                </p>
              </div>

              <Link
                href="/services"
                className="inline-flex min-h-[54px] shrink-0 items-center justify-center rounded-2xl bg-[#2FBFC4] px-7 py-3 text-center font-semibold text-[#173B5C] shadow-sm transition hover:bg-[#59D6D0] focus:outline-none focus:ring-4 focus:ring-[#2FBFC4]/25"
              >
                Explore all nursing services
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-6">
          <div className="rounded-3xl bg-[#0B2D5C] p-6 text-white md:p-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold md:text-4xl">
                How to Access Care
              </h2>

              <p className="mt-3 text-white/90">
                Flexible pathways for private clients, families, providers, and
                residential aged care.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {accessPathways.map((pathway) => (
                <div
                  key={pathway.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
                >
                  <h3 className="text-xl font-semibold">{pathway.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-white/90">
                    {pathway.description}
                  </p>

                  <Link
                    href={pathway.href}
                    className="mt-5 inline-flex items-center font-semibold transition hover:opacity-85"
                    style={{ color: brand.gold }}
                  >
                    {pathway.linkLabel} →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h2
                className="text-2xl font-bold md:text-3xl"
                style={{ color: brand.blue }}
              >
                Why Choose NovaCare Nursing
              </h2>

              <ul className="mt-4 space-y-3">
                {whyNovaCare.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-1 inline-block h-2.5 w-2.5 flex-none rounded-full"
                      style={{ backgroundColor: brand.gold }}
                    />

                    <span className="text-sm leading-7 opacity-90 md:text-base">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-[#C6A662]/30 bg-[#F7F4EF] p-6 shadow-sm">
              <p
                className="text-sm font-semibold uppercase tracking-[0.16em]"
                style={{ color: brand.blue }}
              >
                Professional Endorsement
              </p>

              <blockquote
                className="mt-4 text-sm leading-7 opacity-90"
                style={{ color: brand.blue }}
              >
                “All clients I refer to Tina consistently provide positive
                feedback about how phenomenal she is. Her bedside manner and
                clinical knowledge are exceptional; she has a genuine passion
                and devotion to supporting her clients. Collaborating with her
                professionally and with a multi-disciplinary team is fantastic.
                Her communication and recommendations are clear, comprehensive,
                accurate and timely. I feel complete confidence my clients are
                in extremely capable hands, and I would happily have my own
                family members under her care. It is a privilege and a pleasure
                to work with and learn from her. Any person lucky enough to be
                supported by Tina will receive excellent, evidence based care
                delivered with humanity and compassion.”
              </blockquote>

              <p
                className="mt-4 text-sm font-semibold"
                style={{ color: brand.blue }}
              >
                Laura Pfundt
              </p>

              <p className="text-sm opacity-80">
                Clinical Lead / Clinical Care Partner, Huon Regional Care
              </p>
            </div>
          </div>
        </section>
      </main>

      <ContactCta />
      <SiteFooter />
    </>
  );
}
