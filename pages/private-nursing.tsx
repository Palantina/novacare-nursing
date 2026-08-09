// pages/private-nursing.tsx
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ContactCta from "../components/ContactCta";

const brand = { blue: "#0B2D5C", gold: "#C6A662" };

export default function PrivateNursing() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <Head>
        <title>Private Nursing at Home Hobart | NovaCare Nursing</title>
        <meta
          name="description"
          content="Private in-home nursing across Hobart and surrounds from an experienced Clinical Nurse Consultant and Registered Nurse. Wound care, catheter and stoma support, post-hospital nursing, palliative care and complex clinical oversight."
        />
        <link
          rel="canonical"
          href="https://www.novacarenursing.com.au/private-nursing"
        />
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
              Registered Nurse care, with continuity, clinical judgement and
              clear communication from first visit to review.
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

              <p className="text-sm font-medium text-[#6B7F8E] sm:ml-2">
                Fee-for-service • Hobart &amp; surrounds
              </p>
            </div>
          </motion.div>
        </section>

        <motion.div
          className="mt-8 grid gap-4 rounded-[1.75rem] border border-[#DCEDEF] bg-gradient-to-r from-[#F7FCFC] via-white to-[#FAF8FF] p-6 shadow-[0_12px_32px_rgba(29,57,82,0.05)] sm:grid-cols-[auto_1fr] sm:items-start sm:gap-5 sm:p-7"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span
            aria-hidden="true"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#EAF9FA] text-[#238C93]"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
                stroke="currentColor"
                strokeWidth="1.7"
              />
              <path
                d="M12 7.5v4.8M12 16.5h.01"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
              />
            </svg>
          </span>

          <div>
            <p className="text-lg font-semibold text-[#1D3952]">
              What private nursing means
            </p>

            <p className="mt-2 max-w-4xl leading-7 text-[#526B7C]">
              Private nursing is straightforward fee-for-service care. Anyone
              can book NovaCare Nursing directly for the nursing support they
              need, when they need it. Care can be one-off or ongoing, with
              continuity and experienced clinical judgement when review is
              required.
            </p>
          </div>
        </motion.div>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold" style={{ color: brand.blue }}>
            Common reasons clients use private nursing
          </h2>

          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border bg-white p-6">
              <h3 className="text-lg font-semibold" style={{ color: brand.blue }}>
                Post-hospital or post-operative support
              </h3>
              <ul className="mt-3 list-disc pl-5 space-y-1 text-sm opacity-90">
                <li>Clinical review after discharge and early recognition of deterioration</li>
                <li>Wound assessment, dressing selection support and review cadence</li>
                <li>Medication administration support (within scope) and safety checks</li>
                <li>Falls risk and pressure injury risk inputs</li>
              </ul>
            </div>

            <div className="rounded-2xl border bg-white p-6">
              <h3 className="text-lg font-semibold" style={{ color: brand.blue }}>
                Wound management & skin integrity
              </h3>
              <ul className="mt-3 list-disc pl-5 space-y-1 text-sm opacity-90">
                <li>Complex/chronic wounds (including escalation triggers)</li>
                <li>Pressure injury risk monitoring and prevention guidance</li>
                <li>Clear documentation and progress reporting</li>
                <li>Coordination with your GP / specialist team where required</li>
              </ul>
            </div>

            <div className="rounded-2xl border bg-white p-6">
              <h3 className="text-lg font-semibold" style={{ color: brand.blue }}>
                Urinary catheter care (IDC / SPC)
              </h3>
              <ul className="mt-3 list-disc pl-5 space-y-1 text-sm opacity-90">
                <li>Indwelling urinary catheter (IDC) and suprapubic catheter (SPC) care</li>
                <li>Troubleshooting: leakage/bypassing, blockage risk flags and escalation thresholds</li>
                <li>Client/carer education and practical risk reduction strategies (within scope)</li>
              </ul>
            </div>

            <div className="rounded-2xl border bg-white p-6">
              <h3 className="text-lg font-semibold" style={{ color: brand.blue }}>
                Specialised Clinical Palliative Nursing
              </h3>
              <ul className="mt-3 list-disc pl-5 space-y-1 text-sm opacity-90">
                <li>Comfort-focused nursing support and symptom monitoring</li>
                <li>Escalation planning with family and treating team</li>
                <li>Practical guidance for carers and family</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold" style={{ color: brand.blue }}>
            How it works
          </h2>

          <div className="mt-4 rounded-2xl border bg-white p-6">
            <ol className="list-decimal pl-5 space-y-2 opacity-90">
              <li>
                <strong>Contact NovaCare Nursing</strong> with your needs and preferred timing.
              </li>
              <li>
                We confirm <strong>scope, urgency, and clinical requirements</strong> (and any documents you can share).
              </li>
              <li>
                We schedule your visit and provide <strong>clear documentation</strong> and escalation guidance.
              </li>
              <li>
                If ongoing care is needed, we set a <strong>review cadence</strong> and update the plan as required.
              </li>
            </ol>

            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-block rounded-xl px-5 py-3 font-semibold text-center hover:opacity-90 transition"
                style={{ backgroundColor: brand.gold, color: brand.blue }}
              >
                Book a Consultation
              </Link>

              <Link
                href="/fees"
                className="inline-block rounded-xl px-5 py-3 font-semibold text-center border hover:opacity-90 transition"
                style={{ borderColor: "#E5E7EB", color: brand.blue }}
              >
                View Fees
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold" style={{ color: brand.blue }}>
            Private nursing fees (summary)
          </h2>

          <div className="mt-4 rounded-2xl border bg-white p-6">
            <p className="opacity-90">
              <strong>Standard hours (Mon–Fri, 8:00am–6:00pm):</strong>{" "}
              <span className="font-semibold" style={{ color: brand.blue }}>
                $150 per hour
              </span>{" "}
              and{" "}
              <span className="font-semibold" style={{ color: brand.blue }}>
                $116 per 30 minutes
              </span>
              .
            </p>
            <p className="opacity-80 mt-2 text-sm">
              Non-standard hours, weekends and public holidays apply higher time bands. Full pricing tables are on the{" "}
              <Link href="/fees" className="underline" style={{ color: brand.blue }}>
                Fees page
              </Link>
              .
            </p>
          </div>

          <div className="mt-4 rounded-2xl border border-gray-100 bg-white p-5">
            <p className="text-sm opacity-80">
              <strong>Important:</strong> If you believe a person is acutely unwell or at immediate risk, call{" "}
              <strong>000</strong> or attend the nearest Emergency Department.
            </p>
          </div>
        </section>
      </main>

      <ContactCta />
      <SiteFooter />
    </>
  );
}
