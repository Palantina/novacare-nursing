import Head from "next/head";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import Hero from "../components/Hero";
import ContactCta from "../components/ContactCta";
import SiteFooter from "../components/SiteFooter";

const brand = { blue: "#0B2D5C", gold: "#C6A662" };

const signatureServices = [
  {
    title: "Complex Clinical Nursing & Wound Care",
    description:
      "Advanced in-home nursing support for wounds, skin integrity, continence, catheters, post-hospital care, and evolving clinical needs.",
  },
  {
    title: "Specialised Clinical Palliative Nursing & Consultancy",
    description:
      "Expert palliative nursing support for individuals, families, providers, and residential aged care homes seeking comfort-focused, evidence-based care.",
  },
  {
    title: "Dementia Behaviour Support & Care Planning",
    description:
      "Practical, person-centred support for changed and responsive behaviours associated with dementia, grounded in dignity, safety, and clinical judgement.",
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

        <section className="mx-auto max-w-6xl px-4 pb-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="text-3xl font-bold md:text-4xl"
              style={{ color: brand.blue }}
            >
              Signature Services
            </h2>

            <p className="mt-3 text-base opacity-85 md:text-lg">
              A premium, nurse-led service for people who need more than
              standard care — and for providers seeking trusted clinical
              support.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {signatureServices.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <h3
                  className="text-xl font-semibold"
                  style={{ color: brand.blue }}
                >
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 opacity-90">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition hover:opacity-90"
              style={{
                backgroundColor: brand.gold,
                color: brand.blue,
              }}
            >
              View All Services
            </Link>
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
