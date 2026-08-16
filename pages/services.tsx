// pages/services.tsx
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ContactCta from "../components/ContactCta";

type Service = {
  title: string;
  summary: string;
  details: string[];
  accent: "aqua" | "lavender" | "blue" | "warm";
};

const services: Service[] = [
  {
    title: "IV Therapy & Infusions",
    summary:
      "Prescribed IV therapies, vascular access and clinical monitoring delivered safely in the home.",
    details: [
      "IV iron and other prescribed IV infusions under a current written order",
      "Peripheral cannulation and IV site assessment",
      "CVAD care and monitoring where clinically appropriate",
      "Allergy, consent and observation checks",
      "Documentation and escalation for reactions, deterioration or access concerns",
    ],
    accent: "aqua",
  },
  {
    title: "Complex Wound & Skin Care",
    summary:
      "Advanced wound assessment and treatment for complex, chronic, surgical and pressure-related wounds.",
    details: [
      "Comprehensive wound assessment, documentation and care planning",
      "Complex, chronic, surgical and delayed-healing wound care",
      "Pressure injury prevention and skin integrity review",
      "Negative pressure wound therapy support where clinically appropriate",
      "Monitoring for infection, deterioration, pain and delayed healing",
    ],
    accent: "lavender",
  },
  {
    title: "Palliative & End-of-Life Nursing",
    summary:
      "Skilled, comfort-focused nursing that supports the person and the people around them.",
    details: [
      "Symptom monitoring and comfort-focused clinical care",
      "Medication administration under current written medical orders",
      "Syringe driver support where prescribed and clinically appropriate",
      "Family education, guidance and practical end-of-life support",
      "Coordination with GPs, palliative care teams and treating clinicians",
    ],
    accent: "warm",
  },
  {
    title: "Catheter, Continence & Stoma Care",
    summary:
      "Assessment, treatment, troubleshooting and education for continence, catheter and stoma needs.",
    details: [
      "Indwelling urinary catheter and suprapubic catheter care",
      "Troubleshooting leakage, bypassing, blockage risk and deterioration",
      "Continence-related nursing assessment",
      "Stoma and peristomal skin assessment and support",
      "Education for clients, families and carers",
    ],
    accent: "blue",
  },
  {
    title: "PEG, Enteral & Device Support",
    summary:
      "Clinical nursing for feeding tubes, enteral nutrition and prescribed clinical devices.",
    details: [
      "PEG feeding and enteral nutrition support",
      "Feeding tube site and skin integrity assessment",
      "Monitoring for intolerance, complications or deterioration",
      "Support with prescribed enteral feeding equipment",
      "Education, documentation and escalation to the treating team",
    ],
    accent: "aqua",
  },
  {
    title: "Tracheostomy, Airway & Respiratory Support",
    summary:
      "Experienced respiratory and airway nursing with clear monitoring and escalation pathways.",
    details: [
      "Tracheostomy care and monitoring within Registered Nurse scope",
      "Respiratory assessment and deterioration recognition",
      "Non-invasive ventilation support where clinically appropriate",
      "Oxygen and respiratory equipment-related nursing support",
      "Education for clients, families and care teams",
    ],
    accent: "lavender",
  },
  {
    title: "Post-Hospital & Post-Operative Nursing",
    summary:
      "Clinical review after discharge, surgery or acute illness to support safer recovery at home.",
    details: [
      "Post-operative wound care and monitoring",
      "Clinical review after hospital discharge",
      "Early recognition of deterioration",
      "Monitoring of pain, symptoms, wound changes and functional concerns",
      "Medication-related nursing support and escalation where required",
    ],
    accent: "blue",
  },
  {
    title: "Dementia & Behavioural Support",
    summary:
      "Holistic nursing assessment when behaviour, cognition, comfort or function changes.",
    details: [
      "Assessment of changed behaviour, cognition, sleep, pain and distress",
      "Review of continence, nutrition, hydration, function and other unmet needs",
      "Behaviour support planning and practical strategies",
      "Family and carer guidance",
      "Clinical recommendations and escalation to the appropriate treating team",
    ],
    accent: "warm",
  },
  {
    title: "Complex Clinical Assessment & Care Coordination",
    summary:
      "Advanced nursing judgement for changing, high-risk or difficult-to-coordinate clinical needs.",
    details: [
      "Comprehensive nursing assessment and clinical recommendations",
      "Complex care planning and review",
      "Coordination with GPs, specialists, hospitals and allied health",
      "Clinical documentation, handover and risk identification",
      "Client, family and carer education",
    ],
    accent: "aqua",
  },
];

const accentClasses = {
  aqua: {
    card: "border-[#D7EEF0] bg-gradient-to-br from-white via-white to-[#EAF9FA]",
    icon: "bg-[#EAF9FA] text-[#238C93]",
    dot: "bg-[#2FBFC4]",
  },
  lavender: {
    card: "border-[#E3DDFB] bg-gradient-to-br from-white via-white to-[#F2EEFF]",
    icon: "bg-[#F2EEFF] text-[#6E3BE8]",
    dot: "bg-[#6E3BE8]",
  },
  blue: {
    card: "border-[#DCE8F8] bg-gradient-to-br from-white via-white to-[#EEF4FF]",
    icon: "bg-[#EEF4FF] text-[#5274D8]",
    dot: "bg-[#5274D8]",
  },
  warm: {
    card: "border-[#F0DDD6] bg-gradient-to-br from-white via-white to-[#FFF7F3]",
    icon: "bg-[#FFF0EA] text-[#B9654F]",
    dot: "bg-[#D88972]",
  },
};

const faqs = [
  {
    q: "Can I book NovaCare Nursing directly?",
    a: "Yes. Private nursing is fee-for-service and can be booked directly. Care may be one-off or ongoing depending on what you need.",
  },
  {
    q: "Can NovaCare Nursing work with my Support at Home or NDIS provider?",
    a: "Yes. NovaCare Nursing can work alongside existing providers to deliver nursing services under an agreed provider arrangement. The exact pathway depends on the program, how your funding is managed and the provider's requirements.",
  },
  {
    q: "Do I need a GP referral?",
    a: "A referral is not generally required to request nursing. Some treatments, including prescribed medicines and IV therapies, require current written medical orders or other clinical information before care can proceed.",
  },
  {
    q: "What areas do you service?",
    a: "NovaCare Nursing services Hobart, the Huon Valley, the Derwent Valley and surrounding areas of Southern Tasmania.",
  },
  {
    q: "Do you provide care outside standard business hours?",
    a: "Yes. Nursing care can be arranged 24 hours a day, 7 days a week, subject to availability, funding or service agreement, and clinical suitability. NovaCare Nursing is not an emergency service.",
  },
];

export default function Services() {
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
        <title>Clinical Nursing Services Hobart | NovaCare Nursing</title>

        <meta
          name="description"
          content="Advanced clinical nursing across Hobart and Southern Tasmania, including IV therapy and infusions, complex wound care, palliative nursing, catheter and stoma care, PEG support, respiratory care, post-hospital nursing and dementia assessment."
        />

        <link
          rel="canonical"
          href="https://www.novacarenursing.com.au/services"
        />

        <meta
          property="og:title"
          content="Clinical Nursing Services | NovaCare Nursing"
        />

        <meta
          property="og:description"
          content="Advanced clinical nursing for complex care at home across Hobart and Southern Tasmania."
        />

        <meta
          property="og:image"
          content="https://www.novacarenursing.com.au/iStock-2282022010.jpg"
        />

        <meta
          property="og:url"
          content="https://www.novacarenursing.com.au/services"
        />

        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </Head>

      <SiteHeader />

      <main className="mx-auto max-w-7xl px-4 py-8 text-[15px] leading-6 sm:px-6 md:leading-7 lg:px-8 lg:py-10">
        <section className="relative overflow-hidden rounded-[2.25rem] border border-[#DCEDEF] bg-[#F8FCFD] shadow-[0_24px_70px_rgba(29,57,82,0.09)]">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
            <motion.div
              className="relative z-10 flex flex-col justify-center px-6 py-9 sm:px-8 sm:py-11 lg:px-11 lg:py-14"
              initial={reduceMotion ? false : { opacity: 0, x: -24 }}
              animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div
                aria-hidden="true"
                className="absolute -left-24 -top-20 h-64 w-64 rounded-full bg-[#DDF5F5]/70 blur-3xl"
              />

              <div className="relative">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2B9FA5] sm:text-base">
                  Clinical nursing services
                </p>

                <h1 className="mt-3 max-w-xl text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-[#1D3952] sm:text-5xl lg:text-[3.45rem]">
                  Advanced clinical nursing,
                  <span className="block text-[#6E3BE8]">
                    brought home.
                  </span>
                </h1>

                <p className="mt-5 max-w-xl text-base leading-7 text-[#526B7C] sm:text-lg sm:leading-8">
                  From IV therapy and complex wounds to palliative, respiratory
                  and device care, NovaCare Nursing brings experienced Clinical
                  Nurse Consultant and Registered Nurse care into the home.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex min-h-[50px] items-center justify-center rounded-2xl bg-[#2FBFC4] px-6 py-3 font-semibold text-[#173B5C] shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[#59D6D0] hover:shadow-md focus:outline-none focus:ring-4 focus:ring-[#2FBFC4]/25"
                  >
                    Talk to a nurse
                  </Link>

                  <Link
                    href="#access-care"
                    className="inline-flex min-h-[50px] items-center justify-center rounded-2xl border border-[#D8D1F4] bg-white px-6 py-3 font-semibold text-[#5C43A8] transition duration-200 hover:-translate-y-0.5 hover:bg-[#F7F4FF] hover:shadow-sm"
                  >
                    Ways to access care
                  </Link>
                </div>

                <div className="mt-7 flex flex-wrap gap-2.5 text-sm font-semibold">
                  <span className="rounded-full bg-[#EAF9FA] px-4 py-2 text-[#238C93]">
                    24 hours • 7 days
                  </span>

                  <span className="rounded-full bg-[#F2EEFF] px-4 py-2 text-[#6E3BE8]">
                    Hobart & Southern Tasmania
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="group relative min-h-[330px] overflow-hidden lg:min-h-[560px]"
              initial={reduceMotion ? false : { opacity: 0, x: 24 }}
              animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.08,
                ease: "easeOut",
              }}
            >
              <Image
                src="/iStock-2282022010.jpg"
                alt="Nurse speaking with an older couple during a home nursing visit"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-center transition-transform duration-[1600ms] ease-out group-hover:scale-[1.025]"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#173B5C]/20 via-transparent to-transparent"
              />
            </motion.div>
          </div>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            {
              number: "01",
              title: "Assess",
              text: "See the whole clinical picture, not just the presenting task.",
              tone: "bg-[#EAF9FA] text-[#238C93]",
            },
            {
              number: "02",
              title: "Treat",
              text: "Deliver skilled nursing care with clear monitoring and documentation.",
              tone: "bg-[#F2EEFF] text-[#6E3BE8]",
            },
            {
              number: "03",
              title: "Coordinate",
              text: "Escalate, communicate and connect care when more input is needed.",
              tone: "bg-[#EEF4FF] text-[#5274D8]",
            },
          ].map((item, index) => (
            <motion.div
              key={item.number}
              className="rounded-[1.6rem] border border-[#DCEDEF] bg-white p-6 shadow-[0_10px_30px_rgba(29,57,82,0.045)]"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={
                reduceMotion ? undefined : { opacity: 1, y: 0 }
              }
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.45,
                delay: reduceMotion ? 0 : index * 0.06,
                ease: "easeOut",
              }}
            >
              <span
                className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl text-sm font-bold ${item.tone}`}
              >
                {item.number}
              </span>

              <h2 className="mt-5 text-xl font-semibold text-[#1D3952]">
                {item.title}
              </h2>

              <p className="mt-2 leading-7 text-[#526B7C]">
                {item.text}
              </p>
            </motion.div>
          ))}
        </section>

        <section className="mt-14">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2B9FA5] sm:text-base">
                What we can help with
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#1D3952] sm:text-4xl">
                Clinical capability without the clutter.
              </h2>
            </div>

            <p className="max-w-3xl text-base leading-7 text-[#526B7C] sm:text-lg sm:leading-8 lg:justify-self-end">
              Start with the service area that sounds closest to what you need.
              Open a card for more detail, or contact us if the situation does
              not fit neatly into a category.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const tone = accentClasses[service.accent];

              return (
                <motion.article
                  key={service.title}
                  className={`rounded-[1.7rem] border p-6 shadow-[0_10px_30px_rgba(29,57,82,0.045)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(29,57,82,0.09)] ${tone.card}`}
                  initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                  whileInView={
                    reduceMotion ? undefined : { opacity: 1, y: 0 }
                  }
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.48,
                    delay: reduceMotion ? 0 : (index % 3) * 0.06,
                    ease: "easeOut",
                  }}
                >
                  <span
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-bold ${tone.icon}`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-5 text-xl font-semibold leading-snug tracking-[-0.02em] text-[#1D3952]">
                    {service.title}
                  </h3>

                  <p className="mt-3 leading-7 text-[#526B7C]">
                    {service.summary}
                  </p>

                  <details className="group mt-5 border-t border-[#DFEAED] pt-4">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[#238C93]">
                      <span>What this can include</span>

                      <span
                        aria-hidden="true"
                        className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/80 text-lg transition-transform duration-200 group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>

                    <ul className="mt-4 space-y-2.5">
                      {service.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex gap-3 text-sm leading-6 text-[#526B7C]"
                        >
                          <span
                            aria-hidden="true"
                            className={`mt-2 h-2 w-2 shrink-0 rounded-full ${tone.dot}`}
                          />

                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </details>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section
          id="access-care"
          className="mt-14 overflow-hidden rounded-[2rem] border border-[#DCEDEF] bg-gradient-to-br from-[#F8FCFD] via-white to-[#F2EEFF] p-6 shadow-[0_18px_50px_rgba(29,57,82,0.06)] sm:p-8 lg:p-10"
        >
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2B9FA5] sm:text-base">
                Ways to access care
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#1D3952] sm:text-4xl">
                One nursing service. Different pathways.
              </h2>
            </div>

            <p className="max-w-3xl text-base leading-7 text-[#526B7C] sm:text-lg sm:leading-8 lg:justify-self-end">
              NovaCare Nursing can be engaged directly or work alongside an
              existing provider. The clinical service stays focused on the
              person; the pathway changes according to how care is funded and
              arranged.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <motion.article
              className="rounded-[1.6rem] border border-[#CFEAEC] bg-white p-6 shadow-[0_10px_28px_rgba(29,57,82,0.05)]"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={
                reduceMotion ? undefined : { opacity: 1, y: 0 }
              }
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EAF9FA] text-sm font-bold text-[#238C93]">
                01
              </span>

              <h3 className="mt-5 text-xl font-semibold text-[#1D3952]">
                Private Nursing
              </h3>

              <p className="mt-3 leading-7 text-[#526B7C]">
                Book NovaCare Nursing directly for fee-for-service nursing at
                home, whether care is needed once or over time.
              </p>

              <Link
                href="/private-nursing"
                className="mt-5 inline-flex items-center gap-2 font-semibold text-[#238C93]"
              >
                Private nursing
                <span aria-hidden="true">→</span>
              </Link>
            </motion.article>

            <motion.article
              className="rounded-[1.6rem] border border-[#E3DDFB] bg-white p-6 shadow-[0_10px_28px_rgba(29,57,82,0.05)]"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={
                reduceMotion ? undefined : { opacity: 1, y: 0 }
              }
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.45,
                delay: 0.06,
                ease: "easeOut",
              }}
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F2EEFF] text-sm font-bold text-[#6E3BE8]">
                02
              </span>

              <h3 className="mt-5 text-xl font-semibold text-[#1D3952]">
                Support at Home
              </h3>

              <p className="mt-3 leading-7 text-[#526B7C]">
                Your registered Support at Home provider can engage NovaCare
                Nursing to deliver nursing on its behalf as part of your agreed
                care and services.
              </p>

              <Link
                href="/providers"
                className="mt-5 inline-flex items-center gap-2 font-semibold text-[#6E3BE8]"
              >
                Provider pathway
                <span aria-hidden="true">→</span>
              </Link>
            </motion.article>

            <motion.article
              className="rounded-[1.6rem] border border-[#DCE8F8] bg-white p-6 shadow-[0_10px_28px_rgba(29,57,82,0.05)]"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={
                reduceMotion ? undefined : { opacity: 1, y: 0 }
              }
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.45,
                delay: 0.12,
                ease: "easeOut",
              }}
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EEF4FF] text-sm font-bold text-[#5274D8]">
                03
              </span>

              <h3 className="mt-5 text-xl font-semibold text-[#1D3952]">
                NDIS
              </h3>

              <p className="mt-3 leading-7 text-[#526B7C]">
                Depending on how your plan is managed, nursing may be arranged
                directly or through a provider. NovaCare Nursing can also work
                alongside registered NDIS providers for complex clinical
                support.
              </p>

              <Link
                href="/providers"
                className="mt-5 inline-flex items-center gap-2 font-semibold text-[#5274D8]"
              >
                NDIS provider support
                <span aria-hidden="true">→</span>
              </Link>
            </motion.article>
          </div>

          <div className="mt-6 rounded-2xl border border-white bg-white/75 p-5 sm:flex sm:items-center sm:justify-between sm:gap-5">
            <div>
              <p className="font-semibold text-[#1D3952]">
                For providers and organisations
              </p>

              <p className="mt-1 leading-7 text-[#526B7C]">
                NovaCare Nursing also provides clinical consultancy,
                governance, education, auditing and complex-care support.
              </p>
            </div>

            <Link
              href="/providers"
              className="mt-4 inline-flex min-h-[46px] items-center justify-center rounded-2xl bg-[#6E3BE8] px-5 py-2.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#5F31CE] sm:mt-0"
            >
              For Providers
            </Link>
          </div>
        </section>

        <motion.section
          className="mt-14 overflow-hidden rounded-[2.1rem] border border-[#CFEAEC] bg-[#173B5C] text-white shadow-[0_22px_60px_rgba(29,57,82,0.15)]"
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={
            reduceMotion ? undefined : { opacity: 1, y: 0 }
          }
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.52, ease: "easeOut" }}
        >
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
            <div className="relative min-h-[300px] overflow-hidden lg:min-h-[500px]">
              <Image
                src="/iStock-1806224504.jpg"
                alt="IV infusion equipment used for prescribed intravenous therapy"
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover object-center"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#173B5C]/45 via-transparent to-transparent"
              />
            </div>

            <div className="flex flex-col justify-center px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A9ECE8]">
                IV therapy at home
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                Prescribed treatment.
                <span className="block text-[#BDB0FF]">
                  Experienced nursing.
                </span>
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-white/78 sm:text-lg sm:leading-8">
                Prescribed IV therapies can be provided at home when the
                required written orders and clinical information are in place.
                Nursing care includes assessment, vascular access, treatment,
                observation, documentation and escalation where required.
              </p>

              <div className="mt-6 grid gap-3">
                {[
                  "Current written medication or infusion order",
                  "Assessment, allergy and consent checks",
                  "Peripheral cannulation or vascular access care",
                  "Monitoring before, during and after treatment",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-2xl border border-white/12 bg-white/[0.07] p-4"
                  >
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-sm font-bold text-[#A9ECE8]">
                      {index + 1}
                    </span>

                    <span className="font-medium text-white/90">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="mt-14 overflow-hidden rounded-[2rem] border border-[#E3DDFB] bg-gradient-to-br from-white via-white to-[#F7F4FF] shadow-[0_18px_50px_rgba(29,57,82,0.07)]"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={
            reduceMotion ? undefined : { opacity: 1, y: 0 }
          }
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="grid lg:grid-cols-[1fr_1.05fr] lg:items-stretch">
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6E3BE8]">
                Wound & skin integrity
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#1D3952] sm:text-4xl">
                More than changing a dressing.
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-[#526B7C] sm:text-lg sm:leading-8">
                Complex wound care starts with assessment: wound aetiology,
                tissue, exudate, pain, skin integrity, circulation, pressure,
                infection risk and the person&apos;s broader clinical context.
              </p>

              <p className="mt-4 max-w-2xl leading-7 text-[#526B7C]">
                The aim is not simply to apply a product. It is to understand
                why the wound is present, what is affecting healing and when the
                wider treating team needs to be involved.
              </p>
            </div>

            <div className="relative min-h-[310px] overflow-hidden lg:min-h-[450px]">
              <Image
                src="/iStock-1257057623.jpg"
                alt="Dressing applied to an older person's arm as part of wound care"
                fill
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </motion.section>

        <motion.section
          className="mt-14 overflow-hidden rounded-[2.1rem] border border-[#D7EEF0] bg-gradient-to-br from-[#F8FCFD] via-white to-[#FFF7F3] shadow-[0_22px_60px_rgba(29,57,82,0.09)]"
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={
            reduceMotion ? undefined : { opacity: 1, y: 0 }
          }
          viewport={{ once: true, amount: 0.24 }}
          transition={{ duration: 0.52, ease: "easeOut" }}
        >
          <div className="grid lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch">
            <div className="relative min-h-[330px] overflow-hidden lg:min-h-[520px]">
              <Image
                src="/iStock-2156052335.jpg"
                alt="Nurse holding an older person's hands during supportive end-of-life care"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#173B5C]/20 via-transparent to-transparent"
              />
            </div>

            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <div className="flex flex-wrap gap-2.5">
                <span className="rounded-full bg-[#EAF9FA] px-4 py-2 text-sm font-semibold text-[#238C93]">
                  24 hours • 7 days
                </span>

                <span className="rounded-full bg-[#F2EEFF] px-4 py-2 text-sm font-semibold text-[#6E3BE8]">
                  Palliative & end-of-life nursing
                </span>
              </div>

              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#B9654F]">
                When care cannot wait for business hours
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#1D3952] sm:text-4xl">
                End-of-life care deserves continuity.
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-[#526B7C] sm:text-lg sm:leading-8">
                NovaCare Nursing is available 24 hours, 7 days for responsive
                palliative nursing and clinical coordination at home,
                supporting comfort, symptom monitoring, medication care under
                written orders, family guidance and timely escalation.
              </p>

              <p className="mt-4 max-w-2xl leading-7 text-[#526B7C]">
                With consent, care can be coordinated with the GP, palliative
                care service, pharmacy and existing provider so families are
                not left trying to connect the pieces alone.
              </p>

              <div className="mt-6 rounded-2xl border border-[#E8DDD7] bg-white/85 p-5">
                <p className="font-semibold text-[#1D3952]">
                  Support at Home End-of-Life Pathway
                </p>

                <p className="mt-2 text-sm leading-6 text-[#526B7C]">
                  For eligible older people who want to remain at home,
                  NovaCare Nursing can work with the person&apos;s registered
                  Support at Home provider to deliver nursing within the agreed
                  support plan and service arrangement.
                </p>
              </div>

              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-2xl bg-[#2FBFC4] px-6 py-3 font-semibold text-[#173B5C] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#59D6D0] hover:shadow-md"
                >
                  Discuss end-of-life support
                </Link>
              </div>
            </div>
          </div>
        </motion.section>

        <section className="mt-14">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2B9FA5] sm:text-base">
              Common questions
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#1D3952] sm:text-4xl">
              The practical things people ask first.
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

        <section className="mt-12 rounded-[1.75rem] border border-[#E3DDFB] bg-gradient-to-r from-[#F8FCFD] via-white to-[#F2EEFF] p-6 sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-lg font-semibold text-[#1D3952]">
                Looking for organisational or provider support?
              </p>

              <p className="mt-2 max-w-3xl leading-7 text-[#526B7C]">
                Provider partnerships, Support at Home service arrangements,
                NDIS clinical support and clinical governance have their own
                dedicated section for organisations that want to work with
                NovaCare Nursing.
              </p>
            </div>

            <Link
              href="/providers"
              className="inline-flex min-h-[48px] shrink-0 items-center justify-center rounded-2xl bg-[#6E3BE8] px-6 py-3 font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#5F31CE] hover:shadow-md"
            >
              For Providers
            </Link>
          </div>
        </section>

        <div className="mt-8 rounded-[1.5rem] border border-[#F0DDD6] bg-[#FFF8F5] p-5 sm:p-6">
          <p className="text-sm leading-7 text-[#6E554B]">
            <strong className="text-[#1D3952]">
              For emergencies:
            </strong>{" "}
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
