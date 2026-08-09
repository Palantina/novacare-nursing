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

      <main className="mx-auto max-w-6xl px-4 py-10 text-[15px] leading-6 sm:px-6 md:leading-7 lg:px-8 lg:py-12">
        <section className="relative overflow-hidden rounded-[2.25rem] border border-[#DCEDEF] bg-gradient-to-br from-[#EAF9FA] via-white to-[#F2EEFF] p-5 shadow-[0_24px_70px_rgba(29,57,82,0.09)] sm:p-7 lg:p-8">
          <div
            aria-hidden="true"
            className="absolute -left-20 -top-20 h-52 w-52 rounded-full bg-[#A9ECE8]/35 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-24 -right-20 h-56 w-56 rounded-full bg-[#D7CEFF]/35 blur-3xl"
          />

          <div className="relative grid gap-7 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
            <motion.div
              className="flex flex-col justify-center px-1 py-3 sm:px-2 lg:px-4 lg:py-6"
              initial={reduceMotion ? false : { opacity: 0, x: -26 }}
              animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
              transition={{ duration: 0.62, ease: "easeOut" }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2B9FA5] sm:text-base">
                Nursing at home
              </p>

              <h1 className="mt-4 text-4xl font-semibold leading-[1.07] tracking-[-0.04em] text-[#1D3952] sm:text-5xl lg:text-[3.35rem]">
                Private nursing,
                <span className="block text-[#6E3BE8]">on your terms.</span>
              </h1>

              <div
                aria-hidden="true"
                className="mt-6 h-1.5 w-28 rounded-full bg-[#2FBFC4]"
              />

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#526B7C]">
                Direct access to experienced Clinical Nurse Consultant and
                Registered Nurse care in the comfort of your home.
              </p>

              <p className="mt-4 max-w-xl leading-7 text-[#526B7C]">
                Choose the nursing support you need, when you need it, with
                continuity, experienced clinical judgement and clear
                communication about what happens next.
              </p>

              <div className="mt-7 flex flex-wrap gap-2.5">
                <span className="rounded-full border border-[#CFEAEC] bg-white/85 px-4 py-2 text-sm font-semibold text-[#238C93] shadow-sm">
                  Book directly
                </span>
                <span className="rounded-full border border-[#E3DDFB] bg-white/85 px-4 py-2 text-sm font-semibold text-[#6E3BE8] shadow-sm">
                  Self-funded care
                </span>
                <span className="rounded-full border border-[#DCE8F8] bg-white/85 px-4 py-2 text-sm font-semibold text-[#5274D8] shadow-sm">
                  Hobart &amp; surrounds
                </span>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-[#2FBFC4] px-6 py-3 text-center font-semibold text-[#173B5C] shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[#59D6D0] hover:shadow-md focus:outline-none focus:ring-4 focus:ring-[#2FBFC4]/25"
                >
                  Book private nursing
                </Link>

                <Link
                  href="/fees"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border border-[#D8D1F4] bg-white px-6 py-3 text-center font-semibold text-[#5C43A8] shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[#F7F4FF] hover:shadow-md focus:outline-none focus:ring-4 focus:ring-[#6E3BE8]/15"
                >
                  View fees
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="relative min-h-[320px] overflow-hidden rounded-[1.8rem] border border-white/80 bg-white shadow-[0_18px_45px_rgba(29,57,82,0.12)] sm:min-h-[390px] lg:min-h-[500px]"
              initial={reduceMotion ? false : { opacity: 0, x: 28, scale: 0.985 }}
              animate={
                reduceMotion ? undefined : { opacity: 1, x: 0, scale: 1 }
              }
              transition={{
                duration: 0.68,
                delay: 0.08,
                ease: "easeOut",
              }}
            >
              <Image
                src="/novacare-private-nursing-home.jpg"
                alt="Registered nurse speaking with a client during a home nursing visit"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 54vw"
                className="object-cover object-center transition-transform duration-[1400ms] ease-out hover:scale-[1.025]"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#173B5C]/10 via-transparent to-transparent"
              />
            </motion.div>
          </div>
        </section>

        <div className="mt-7 rounded-[1.75rem] border border-[#DCEDEF] bg-white p-6 shadow-[0_14px_38px_rgba(29,57,82,0.06)] sm:p-7">
          <div className="flex items-start gap-4">
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
                What “Private Nursing” means
              </p>

              <p className="mt-2 leading-7 text-[#526B7C]">
                Private nursing is <strong>fee-for-service</strong> (self-funded).
                You can engage NovaCare Nursing directly without needing a
                funded-program approval or provider contract.
              </p>

              <p className="mt-2 leading-7 text-[#526B7C]">
                It gives you direct choice over who provides your nursing care,
                with continuity, experienced clinical judgement and clear
                communication about what is needed next.
              </p>
            </div>
          </div>
        </div>

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
