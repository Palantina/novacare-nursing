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
    q: "Do I need a GP referral?",
    a: "A referral is not generally required to request private nursing. Some treatments, including prescribed medicines and IV therapies, require current written medical orders or other clinical information before care can proceed.",
  },
  {
    q: "What areas do you service?",
    a: "NovaCare Nursing services Hobart, the Huon Valley, the Derwent Valley and surrounding areas of Southern Tasmania.",
  },
  {
    q: "Do you provide care outside standard business hours?",
    a: "Yes. Nursing care can be arranged 24 hours a day, 7 days a week, subject to availability and clinical suitability. NovaCare Nursing is not an emergency service.",
  },
  {
    q: "What if I am not sure which service I need?",
    a: "That is fine. Tell us what is happening and we can clarify the clinical need, urgency and the most appropriate next step.",
  },
];

function ClinicalIcon({ index }: { index: number }) {
  const paths = [
    <>
      <path d="M9 4h6v4.6a3 3 0 0 1-6 0V4Z" />
      <path d="M12 11.6V20M9.5 17.5h5" />
    </>,
    <>
      <rect x="4" y="8" width="16" height="8" rx="4" />
      <path d="M12 10v4M10 12h4" />
    </>,
    <path
      key="heart"
      d="M12 19 5.5 12.8a4.1 4.1 0 0 1 5.8-5.8l.7.7.7-.7a4.1 4.1 0 0 1 5.8 5.8L12 19Z"
    />,
    <>
      <path d="M8 4.5h8v5a4 4 0 0 1-8 0v-5Z" />
      <path d="M12 13.5V20" />
      <circle cx="18.5" cy="6.5" r="2" />
    </>,
    <>
      <path d="M9 4h6v5a3 3 0 0 1-6 0V4Z" />
      <path d="M12 12v8M9.5 19h5" />
    </>,
    <>
      <path d="M8.5 5.5c0 2.7-1.4 4.5-3.5 5.5v3c2.1 1 3.5 2.8 3.5 5.5" />
      <path d="M15.5 5.5c0 2.7 1.4 4.5 3.5 5.5v3c-2.1 1-3.5 2.8-3.5 5.5" />
      <path d="M12 4v16" />
    </>,
    <>
      <path d="M19 8.5A8 8 0 1 0 20 13" />
      <path d="M16 8.5h3V5.5M12 9v6M9 12h6" />
    </>,
    <>
      <path d="M9.5 19H7v-3a6.5 6.5 0 1 1 7.5 2.7V21" />
      <path d="M9 9h.01M13 8h.01M14.5 12h.01M10.5 13h.01" />
    </>,
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7.5v4.5l3 2" />
    </>,
  ];

  return (
    <svg
      className="h-7 w-7"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <g
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {paths[index]}
      </g>
    </svg>
  );
}

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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
                    href="/private-nursing"
                    className="inline-flex min-h-[50px] items-center justify-center rounded-2xl border border-[#D8D1F4] bg-white px-6 py-3 font-semibold text-[#5C43A8] transition duration-200 hover:-translate-y-0.5 hover:bg-[#F7F4FF] hover:shadow-sm"
                  >
                    How private nursing works
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
                    className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${tone.icon}`}
                  >
                    <ClinicalIcon index={index} />
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

        <section className="mt-14 grid gap-6 lg:grid-cols-2">
          <motion.article
            className="overflow-hidden rounded-[2rem] border border-[#E3DDFB] bg-white shadow-[0_18px_50px_rgba(29,57,82,0.07)]"
            initial={reduceMotion ? false : { opacity: 0, x: -20 }}
            whileInView={
              reduceMotion ? undefined : { opacity: 1, x: 0 }
            }
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="relative h-[260px] overflow-hidden sm:h-[310px]">
              <Image
                src="/iStock-1257057623.jpg"
                alt="Dressing applied to an older person's arm as part of wound care"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            <div className="p-6 sm:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6E3BE8]">
                Wound & skin integrity
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#1D3952] sm:text-3xl">
                More than changing a dressing.
              </h2>

              <p className="mt-3 leading-7 text-[#526B7C]">
                Complex wound care starts with assessment: wound aetiology,
                tissue, exudate, pain, skin integrity, circulation, pressure,
                infection risk and the person&apos;s broader clinical context.
              </p>
            </div>
          </motion.article>

          <motion.article
            className="overflow-hidden rounded-[2rem] border border-[#D7EEF0] bg-white shadow-[0_18px_50px_rgba(29,57,82,0.07)]"
            initial={reduceMotion ? false : { opacity: 0, x: 20 }}
            whileInView={
              reduceMotion ? undefined : { opacity: 1, x: 0 }
            }
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="relative h-[260px] overflow-hidden sm:h-[310px]">
              <Image
                src="/iStock-2156052335.jpg"
                alt="Nurse holding an older person's hands during supportive care"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            <div className="p-6 sm:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#238C93]">
                Palliative & complex care
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#1D3952] sm:text-3xl">
                Clinical skill with humanity.
              </h2>

              <p className="mt-3 leading-7 text-[#526B7C]">
                Good nursing is not only what is done. It is noticing change,
                anticipating risk, protecting comfort, communicating clearly
                and helping people remain where they want to be whenever that
                can be done safely.
              </p>
            </div>
          </motion.article>
        </section>

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
                Provider partnerships, Support at Home arrangements, NDIS
                clinical support and clinical governance sit in their own
                dedicated section so this page stays focused on nursing care.
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
