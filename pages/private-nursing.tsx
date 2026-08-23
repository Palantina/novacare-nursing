// pages/private-nursing.tsx
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ContactCta from "../components/ContactCta";

const serviceExamples = [
  "IV therapy & infusions",
  "Complex wound care",
  "Catheter, stoma & PEG care",
  "Post-hospital nursing",
  "Dementia & cognitive support",
  "Palliative & end-of-life care",
];

const steps = [
  {
    number: "01",
    title: "Tell us what you need",
    text: "Contact NovaCare Nursing with the clinical need, preferred timing and any information you already have.",
  },
  {
    number: "02",
    title: "We confirm what is required",
    text: "We clarify urgency, scope and any written orders, medications or equipment needed for safe care.",
  },
  {
    number: "03",
    title: "Nursing care comes to you",
    text: "Care can be one-off or ongoing, with clear documentation, clinical review and continuity wherever possible.",
  },
];

export default function PrivateNursing() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <Head>
        <title>Private Nursing Hobart | Home Nursing | NovaCare Nursing</title>
        <meta
          name="description"
          content="Fee-for-service private nursing that can be arranged day, evening or overnight across Hobart and surrounds, including IV therapy, wound care, catheter and stoma care, post-hospital nursing, dementia and palliative care."
        />
        <link
          rel="canonical"
          href="https://www.novacarenursing.com.au/private-nursing"
        />
        <meta
          property="og:title"
          content="Private Nursing at Home | NovaCare Nursing"
        />
        <meta
          property="og:description"
          content="Experienced fee-for-service nursing at home across Hobart and surrounds, with visits available across day, evening and overnight periods subject to availability and clinical suitability."
        />
        <meta
          property="og:image"
          content="https://www.novacarenursing.com.au/novacare-private-nursing-home.jpg"
        />
        <meta
          property="og:url"
          content="https://www.novacarenursing.com.au/private-nursing"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <SiteHeader />

      <main className="mx-auto max-w-7xl px-4 py-8 text-[15px] leading-6 sm:px-6 md:leading-7 lg:px-8 lg:py-10">
        <section className="relative">
          <motion.div
            className="group relative h-[330px] overflow-hidden rounded-[2rem] border border-[#DCEDEF] bg-[#EAF9FA] shadow-[0_24px_70px_rgba(29,57,82,0.10)] sm:h-[420px] lg:h-[500px]"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.68, ease: "easeOut" }}
          >
            <Image
              src="/novacare-private-nursing-home.jpg"
              alt="Registered nurse speaking with a client during a home nursing visit"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-center transition-transform duration-[1600ms] ease-out group-hover:scale-[1.025]"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#173B5C]/30 via-transparent to-transparent"
            />
          </motion.div>

          <motion.div
            className="relative z-10 mx-3 -mt-14 max-w-3xl rounded-[2rem] border border-white/80 bg-white/95 p-6 shadow-[0_24px_65px_rgba(29,57,82,0.14)] backdrop-blur sm:mx-8 sm:-mt-20 sm:p-8 lg:ml-12 lg:-mt-24 lg:p-10"
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.12, ease: "easeOut" }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2B9FA5] sm:text-base">
              Nursing at home
            </p>

            <h1 className="mt-3 text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#1D3952] sm:text-4xl lg:text-[2.8rem]">
              Private nursing at home,
              <span className="block text-[#6E3BE8]">built around you.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#526B7C] sm:text-lg sm:leading-8">
              Direct access to experienced Clinical Nurse Consultant and
              Registered Nurse care in the comfort of your home.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex min-h-[50px] items-center justify-center rounded-2xl bg-[#2FBFC4] px-6 py-3 text-center font-semibold text-[#173B5C] shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[#59D6D0] hover:shadow-md focus:outline-none focus:ring-4 focus:ring-[#2FBFC4]/25"
              >
                Book private nursing
              </Link>

              <Link
                href="/fees"
                className="inline-flex min-h-[50px] items-center justify-center rounded-2xl border border-[#D8D1F4] bg-[#F8F6FF] px-6 py-3 text-center font-semibold text-[#5C43A8] transition duration-200 hover:-translate-y-0.5 hover:bg-[#F2EEFF] focus:outline-none focus:ring-4 focus:ring-[#6E3BE8]/15"
              >
                View fees
              </Link>
            </div>
          </motion.div>
        </section>

        <section className="mt-8 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-stretch">
          <motion.div
            className="rounded-[1.75rem] border border-[#DCEDEF] bg-gradient-to-r from-[#F7FCFC] via-white to-[#FAF8FF] p-6 shadow-[0_12px_32px_rgba(29,57,82,0.05)] sm:p-7"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="text-lg font-semibold text-[#1D3952]">
              Private nursing, simply.
            </p>
            <p className="mt-2 max-w-3xl leading-7 text-[#526B7C]">
              Private nursing is straightforward fee-for-service care. Anyone
              can book NovaCare Nursing directly for the nursing support they
              need. Care can be one-off or ongoing.
            </p>
          </motion.div>

          <motion.div
            className="flex min-w-[280px] items-center gap-4 rounded-[1.75rem] border border-[#CFEAEC] bg-[#173B5C] p-6 text-white shadow-[0_14px_34px_rgba(29,57,82,0.12)] sm:p-7"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, delay: 0.06, ease: "easeOut" }}
          >
            <span
              aria-hidden="true"
              className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#A9ECE8] ring-1 ring-white/15"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7" />
                <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>

            <div>
              <p className="text-xl font-semibold">Nursing across 24 hours</p>
              <p className="mt-1 text-sm leading-6 text-white/70">
                Visits can be arranged day, evening or overnight, including weekends and public holidays, subject to availability and clinical suitability.
              </p>
              <Link href="/24-hour-care" className="mt-2 inline-flex text-sm font-semibold text-[#A9ECE8]">
                Need continuous 24-Hour Care? →
              </Link>
            </div>
          </motion.div>
        </section>

        <section className="mt-14">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2B9FA5] sm:text-base">
                Clinical nursing at home
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#1D3952] sm:text-4xl">
                Skilled care when you need more than the basics.
              </h2>
            </div>

            <p className="max-w-3xl text-base leading-7 text-[#526B7C] sm:text-lg sm:leading-8 lg:justify-self-end">
              Private nursing can include advanced assessment, treatment,
              monitoring and clinical support across a wide range of needs.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {serviceExamples.map((service, index) => (
              <motion.div
                key={service}
                className="group flex items-center gap-3 rounded-2xl border border-[#DCEDEF] bg-white px-5 py-4 shadow-[0_8px_24px_rgba(29,57,82,0.04)] transition duration-250 hover:-translate-y-0.5 hover:border-[#C7E7E9] hover:shadow-[0_14px_32px_rgba(29,57,82,0.08)]"
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.42, delay: reduceMotion ? 0 : index * 0.05, ease: "easeOut" }}
              >
                <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#2FBFC4] transition-transform duration-200 group-hover:scale-125" />
                <span className="font-semibold text-[#1D3952]">{service}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <Link
              href="/services"
              className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border border-[#D8D1F4] bg-[#F8F6FF] px-6 py-3 font-semibold text-[#5C43A8] transition duration-200 hover:-translate-y-0.5 hover:bg-[#F2EEFF] hover:shadow-sm"
            >
              View all nursing services
              <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </section>

        <section className="mt-14 rounded-[2rem] border border-[#E5EFF1] bg-gradient-to-br from-[#F8FCFD] via-white to-[#F7F4FF] p-6 shadow-[0_16px_44px_rgba(29,57,82,0.05)] sm:p-8 lg:p-10">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2B9FA5] sm:text-base">
              Simple access
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#1D3952] sm:text-4xl">
              How it works
            </h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {steps.map((step, index) => (
              <motion.article
                key={step.number}
                className="rounded-[1.5rem] border border-white bg-white/90 p-6 shadow-[0_10px_28px_rgba(29,57,82,0.05)]"
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.46, delay: reduceMotion ? 0 : index * 0.08, ease: "easeOut" }}
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF9FA] text-sm font-bold text-[#238C93]">
                  {step.number}
                </span>
                <h3 className="mt-5 text-xl font-semibold leading-snug text-[#1D3952]">
                  {step.title}
                </h3>
                <p className="mt-3 leading-7 text-[#526B7C]">{step.text}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <motion.section
          className="mt-14 overflow-hidden rounded-[2rem] border border-[#DCEDEF] bg-gradient-to-r from-[#EAF9FA] via-white to-[#F2EEFF] p-7 shadow-[0_18px_50px_rgba(29,57,82,0.07)] sm:p-9"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6E3BE8]">
                Fee-for-service
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#1D3952]">
                Clear pricing before care begins.
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-[#526B7C]">
                Standard weekday direct nursing is $150 per hour, with a 30-minute visit rate of $116. Higher time bands apply outside standard hours, on weekends and public holidays.
              </p>
              <p className="mt-3 max-w-2xl leading-7 text-[#526B7C]">
                Your fee covers more than time in your home. It includes Registered Nurse assessment, clinical judgement, skilled care, documentation, communication and professional accountability.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <div className="rounded-2xl border border-white bg-white/85 px-5 py-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6B7F8E]">Standard weekday</p>
                <p className="mt-1 text-3xl font-semibold text-[#1D3952]">
                  $150
                  <span className="ml-1 text-base font-medium text-[#6B7F8E]">/ hour</span>
                </p>
              </div>

              <Link
                href="/fees"
                className="inline-flex min-h-[50px] items-center justify-center rounded-2xl bg-[#6E3BE8] px-6 py-3 font-semibold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[#5F31CE] hover:shadow-md"
              >
                View full fee schedule
              </Link>
            </div>
          </div>
        </motion.section>

        <div className="mt-8 rounded-[1.5rem] border border-[#F0DDD6] bg-[#FFF8F5] p-5 sm:p-6">
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
