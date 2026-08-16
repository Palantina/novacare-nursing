// pages/providers/index.tsx
import Head from "next/head";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import ContactCta from "../../components/ContactCta";

const providerCapabilities = [
  {
    title: "Specialist clinical nursing",
    description:
      "Complex wound care, IV therapy, catheter and stoma care, post-hospital nursing, palliative care and other clinical nursing within scope.",
    bar: "bg-[#2FBFC4]",
    card: "border-[#D7EEF0] bg-gradient-to-br from-white via-white to-[#EAF9FA]",
  },
  {
    title: "Clinical Nurse Consultant support",
    description:
      "Advanced assessment, care planning, risk identification, escalation and clinical coordination for complex or changing care.",
    bar: "bg-[#6E3BE8]",
    card: "border-[#E3DDFB] bg-gradient-to-br from-white via-white to-[#F2EEFF]",
  },
  {
    title: "Clinical governance",
    description:
      "Documentation review, clinical recommendations, escalation pathways, auditing and practical quality-improvement support.",
    bar: "bg-[#5274D8]",
    card: "border-[#DCE8F8] bg-gradient-to-br from-white via-white to-[#EEF4FF]",
  },
  {
    title: "Education & competency support",
    description:
      "Targeted education, supervision and competency support aligned to the clinical care your workforce is expected to deliver.",
    bar: "bg-[#D88972]",
    card: "border-[#F0DDD6] bg-gradient-to-br from-white via-white to-[#FFF7F3]",
  },
  {
    title: "Complex-care coordination",
    description:
      "Clear communication with providers, GPs, specialists, hospitals, allied health, families and other members of the treating team.",
    bar: "bg-[#2FBFC4]",
    card: "border-[#D7EEF0] bg-gradient-to-br from-white via-white to-[#EAF9FA]",
  },
  {
    title: "Palliative & end-of-life nursing",
    description:
      "Responsive nursing and clinical coordination, including 24/7 availability for agreed palliative and end-of-life care arrangements.",
    bar: "bg-[#6E3BE8]",
    card: "border-[#E3DDFB] bg-gradient-to-br from-white via-white to-[#F2EEFF]",
  },
];

const faqs = [
  {
    q: "Can providers refer individual clients to NovaCare Nursing?",
    a: "Yes. Provider partnerships can support one-off referrals, short-term clinical input or ongoing nursing, depending on the person's needs, the agreed scope and availability.",
  },
  {
    q: "Can NovaCare Nursing work with Support at Home providers?",
    a: "Yes. NovaCare Nursing can work with Support at Home providers to deliver agreed clinical nursing while the client remains with their existing provider.",
  },
  {
    q: "Can NovaCare Nursing work with NDIS providers?",
    a: "Yes. NovaCare Nursing can work with NDIS providers and participants where the requested nursing support, funding arrangement and service agreement are suitable.",
  },
  {
    q: "Can the partnership grow beyond one client?",
    a: "Yes. NovaCare Nursing welcomes ongoing provider partnerships and can build nursing capacity as referral demand grows.",
  },
  {
    q: "Is after-hours nursing available?",
    a: "Yes. NovaCare Nursing is available 24 hours a day, 7 days a week for agreed nursing and clinical coordination, including palliative and end-of-life care, subject to availability and clinical suitability. NovaCare Nursing is not an emergency service.",
  },
];

export default function Providers() {
  const reduceMotion = useReducedMotion();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <Head>
        <title>Nursing Provider Partnerships Hobart | NovaCare Nursing</title>

        <meta
          name="description"
          content="NovaCare Nursing partners with Support at Home, NDIS and community-care providers across Hobart and Southern Tasmania, providing specialist nursing, Clinical Nurse Consultant support, governance, education and complex-care coordination."
        />

        <link
          rel="canonical"
          href="https://www.novacarenursing.com.au/providers"
        />

        <meta
          property="og:title"
          content="Clinical Nursing Support for Providers | NovaCare Nursing"
        />

        <meta
          property="og:description"
          content="Specialist clinical nursing, Clinical Nurse Consultant support, governance and complex-care coordination for Support at Home, NDIS and community-care providers."
        />

        <meta
          property="og:url"
          content="https://www.novacarenursing.com.au/providers"
        />

        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </Head>

      <SiteHeader />

      <main className="mx-auto max-w-7xl px-4 py-8 text-[15px] leading-6 sm:px-6 md:leading-7 lg:px-8 lg:py-10">
        <section className="relative overflow-hidden rounded-[2.25rem] border border-[#DCEDEF] bg-gradient-to-br from-[#F8FCFD] via-white to-[#F2EEFF] shadow-[0_24px_70px_rgba(29,57,82,0.09)]">
          <div
            aria-hidden="true"
            className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#DDF5F5]/75 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#E9E2FF]/65 blur-3xl"
          />

          <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:p-11">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: -24 }}
              animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2B9FA5] sm:text-base">
                For providers &amp; organisations
              </p>

              <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-[#1D3952] sm:text-5xl lg:text-[3.45rem]">
                Specialist nursing that
                <span className="block text-[#6E3BE8]">
                  works with your service.
                </span>
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-7 text-[#526B7C] sm:text-lg sm:leading-8">
                NovaCare Nursing works with Support at Home, NDIS and
                community-care providers to deliver specialist clinical
                nursing, Clinical Nurse Consultant support, clinical governance
                and complex-care coordination.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-2xl bg-[#2FBFC4] px-6 py-3 font-semibold text-[#173B5C] shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[#59D6D0] hover:shadow-md focus:outline-none focus:ring-4 focus:ring-[#2FBFC4]/25"
                >
                  Discuss a provider partnership
                </Link>

                <Link
                  href="/services"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-2xl border border-[#D8D1F4] bg-white px-6 py-3 font-semibold text-[#5C43A8] transition duration-200 hover:-translate-y-0.5 hover:bg-[#F7F4FF] hover:shadow-sm"
                >
                  View clinical services
                </Link>
              </div>

              <div className="mt-7 flex flex-wrap gap-2.5 text-sm font-semibold">
                <span className="rounded-full bg-[#EAF9FA] px-4 py-2 text-[#238C93]">
                  Support at Home
                </span>

                <span className="rounded-full bg-[#F2EEFF] px-4 py-2 text-[#6E3BE8]">
                  NDIS
                </span>

                <span className="rounded-full bg-[#EEF4FF] px-4 py-2 text-[#5274D8]">
                  Complex clinical care
                </span>

                <span className="rounded-full bg-[#FFF0EA] px-4 py-2 text-[#A95440]">
                  24/7 palliative support
                </span>
              </div>
            </motion.div>

            <motion.div
              className="rounded-[2rem] border border-white/90 bg-white/90 p-6 shadow-[0_18px_55px_rgba(29,57,82,0.09)] backdrop-blur sm:p-7"
              initial={reduceMotion ? false : { opacity: 0, x: 24 }}
              animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
              transition={{ duration: 0.62, delay: 0.08, ease: "easeOut" }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6E3BE8]">
                A flexible clinical partner
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#1D3952] sm:text-3xl">
                Support that can grow with your service.
              </h2>

              <p className="mt-4 leading-7 text-[#526B7C]">
                Provider arrangements can support individual referrals,
                ongoing clinical nursing and broader nursing capacity as service
                needs grow.
              </p>

              <div className="mt-6 space-y-4">
                {[
                  {
                    title: "Clinical care",
                    text: "Experienced nursing delivered in the person's home or agreed service setting.",
                    bar: "bg-[#2FBFC4]",
                  },
                  {
                    title: "Senior clinical input",
                    text: "CNC-level assessment, escalation, care planning and coordination when complexity increases.",
                    bar: "bg-[#6E3BE8]",
                  },
                  {
                    title: "Clear accountability",
                    text: "NovaCare Nursing maintains its own clinical governance, professional standards, documentation and scope-of-practice controls.",
                    bar: "bg-[#5274D8]",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-[#E5EEF0] bg-[#FCFEFF] p-4"
                  >
                    <span
                      aria-hidden="true"
                      className={`block h-1.5 w-12 rounded-full ${item.bar}`}
                    />

                    <p className="mt-3 font-semibold text-[#1D3952]">
                      {item.title}
                    </p>

                    <p className="mt-1 text-sm leading-6 text-[#526B7C]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mt-14">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2B9FA5] sm:text-base">
                Provider capability
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#1D3952] sm:text-4xl">
                More than filling a nursing shift.
              </h2>
            </div>

            <p className="max-w-3xl text-base leading-7 text-[#526B7C] sm:text-lg sm:leading-8 lg:justify-self-end">
              NovaCare Nursing can deliver the clinical task while also seeing
              the wider picture: identifying risk, recognising meaningful
              change, documenting clearly and escalating when more input is
              needed.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {providerCapabilities.map((capability, index) => (
              <motion.article
                key={capability.title}
                className={`rounded-[1.7rem] border p-6 shadow-[0_10px_30px_rgba(29,57,82,0.045)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(29,57,82,0.09)] ${capability.card}`}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={
                  reduceMotion ? undefined : { opacity: 1, y: 0 }
                }
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  duration: 0.46,
                  delay: reduceMotion ? 0 : (index % 3) * 0.06,
                  ease: "easeOut",
                }}
              >
                <span
                  aria-hidden="true"
                  className={`block h-1.5 w-14 rounded-full ${capability.bar}`}
                />

                <h3 className="mt-5 text-xl font-semibold leading-snug tracking-[-0.02em] text-[#1D3952]">
                  {capability.title}
                </h3>

                <p className="mt-3 leading-7 text-[#526B7C]">
                  {capability.description}
                </p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mt-14 grid gap-5 lg:grid-cols-2">
          <motion.article
            className="rounded-[2rem] border border-[#D7EEF0] bg-gradient-to-br from-white via-white to-[#EAF9FA] p-6 shadow-[0_16px_44px_rgba(29,57,82,0.06)] sm:p-8"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#238C93]">
              Support at Home
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#1D3952]">
              Nursing that works alongside the existing provider.
            </h2>

            <p className="mt-4 text-base leading-7 text-[#526B7C] sm:text-lg sm:leading-8">
              NovaCare Nursing can be engaged by Support at Home providers to
              deliver agreed clinical nursing while the client remains with
              their chosen provider.
            </p>

            <p className="mt-4 leading-7 text-[#526B7C]">
              Partnerships can support individual referrals, ongoing nursing,
              complex clinical needs and broader nursing capacity as demand
              grows.
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex font-semibold text-[#238C93]"
            >
              Discuss Support at Home nursing →
            </Link>
          </motion.article>

          <motion.article
            className="rounded-[2rem] border border-[#E3DDFB] bg-gradient-to-br from-white via-white to-[#F2EEFF] p-6 shadow-[0_16px_44px_rgba(29,57,82,0.06)] sm:p-8"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.06, ease: "easeOut" }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6E3BE8]">
              NDIS
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#1D3952]">
              Clinical support for complex participant needs.
            </h2>

            <p className="mt-4 text-base leading-7 text-[#526B7C] sm:text-lg sm:leading-8">
              NovaCare Nursing can work with NDIS providers and participants
              where the requested nursing support, funding arrangement and
              service agreement are suitable.
            </p>

            <p className="mt-4 leading-7 text-[#526B7C]">
              Support can include direct nursing, complex assessment, clinical
              documentation, care coordination, education and governance within
              the agreed scope.
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex font-semibold text-[#6E3BE8]"
            >
              Discuss NDIS clinical support →
            </Link>
          </motion.article>
        </section>

        <motion.section
          className="mt-14 overflow-hidden rounded-[2.1rem] border border-[#CFEAEC] bg-[#173B5C] p-6 text-white shadow-[0_22px_60px_rgba(29,57,82,0.15)] sm:p-8 lg:p-10"
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.52, ease: "easeOut" }}
        >
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A9ECE8]">
                Palliative &amp; end-of-life support
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                Clinical support when
                <span className="block text-[#BDB0FF]">
                  business hours are not enough.
                </span>
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-white/[0.78] sm:text-lg sm:leading-8">
                NovaCare Nursing is available 24 hours a day, 7 days a week for
                agreed palliative nursing and clinical coordination at home.
              </p>
            </div>

            <div className="rounded-[1.6rem] border border-white/[0.12] bg-white/[0.07] p-6">
              <p className="font-semibold text-white">
                A responsive clinical partner
              </p>

              <p className="mt-3 leading-7 text-white/[0.75]">
                Care can include comfort-focused assessment, symptom monitoring,
                medication support under current written orders, family
                guidance, provider communication and coordination with the GP,
                palliative care service, pharmacy and other treating clinicians.
              </p>

              <Link
                href="/contact"
                className="mt-5 inline-flex font-semibold text-[#A9ECE8]"
              >
                Discuss end-of-life support →
              </Link>
            </div>
          </div>
        </motion.section>

        <section className="mt-14 rounded-[2rem] border border-[#DCEDEF] bg-gradient-to-br from-[#F8FCFD] via-white to-[#F7F4FF] p-6 shadow-[0_16px_44px_rgba(29,57,82,0.05)] sm:p-8 lg:p-10">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2B9FA5] sm:text-base">
              Working together
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#1D3952] sm:text-4xl">
              Simple to engage. Clear to work with.
            </h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Scope",
                text: "Tell us what the person or service needs, the current risks and what you need from the engagement.",
                bar: "bg-[#2FBFC4]",
              },
              {
                title: "Deliver",
                text: "NovaCare Nursing provides the agreed nursing, assessment, education, governance or coordination.",
                bar: "bg-[#6E3BE8]",
              },
              {
                title: "Communicate",
                text: "Material findings, risks, outcomes and recommended next steps are documented and communicated clearly.",
                bar: "bg-[#5274D8]",
              },
            ].map((item, index) => (
              <motion.article
                key={item.title}
                className="rounded-[1.5rem] border border-white bg-white/90 p-6 shadow-[0_10px_28px_rgba(29,57,82,0.05)]"
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={
                  reduceMotion ? undefined : { opacity: 1, y: 0 }
                }
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.46,
                  delay: reduceMotion ? 0 : index * 0.07,
                  ease: "easeOut",
                }}
              >
                <span
                  aria-hidden="true"
                  className={`block h-1.5 w-12 rounded-full ${item.bar}`}
                />

                <h3 className="mt-5 text-xl font-semibold text-[#1D3952]">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-[#526B7C]">
                  {item.text}
                </p>
              </motion.article>
            ))}
          </div>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-[50px] items-center justify-center rounded-2xl bg-[#2FBFC4] px-6 py-3 text-center font-semibold text-[#173B5C] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#59D6D0]"
            >
              Discuss a referral or partnership
            </Link>

            <Link
              href="/fees"
              className="inline-flex min-h-[50px] items-center justify-center rounded-2xl border border-[#D8D1F4] bg-white px-6 py-3 text-center font-semibold text-[#5C43A8] transition hover:-translate-y-0.5 hover:bg-[#F2EEFF]"
            >
              View fees
            </Link>
          </div>
        </section>

        <section className="mt-14">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6E3BE8]">
              Provider questions
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#1D3952] sm:text-4xl">
              The practical details.
            </h2>
          </div>

          <div className="mx-auto mt-8 max-w-4xl space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-[1.4rem] border border-[#DCEDEF] bg-white px-5 py-4 shadow-[0_8px_24px_rgba(29,57,82,0.04)] sm:px-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[#1D3952]">
                  <span>{faq.q}</span>

                  <span
                    aria-hidden="true"
                    className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EAF9FA] text-lg text-[#238C93] transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>

                <p className="mt-3 max-w-3xl leading-7 text-[#526B7C]">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        <div className="mt-10 rounded-[1.5rem] border border-[#F0DDD6] bg-[#FFF8F5] p-5 sm:p-6">
          <p className="text-sm leading-7 text-[#6E554B]">
            <strong className="text-[#1D3952]">For emergencies:</strong>{" "}
            NovaCare Nursing provides planned and responsive nursing care but is
            not an emergency service. If someone is acutely unwell or at
            immediate risk, call <strong>000</strong> or attend the nearest
            Emergency Department.
          </p>
        </div>
      </main>

      <ContactCta />
      <SiteFooter />
    </>
  );
}
