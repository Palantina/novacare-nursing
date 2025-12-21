import Head from "next/head";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Link from "next/link";

const brand = { blue: "#0B2D5C", gold: "#C6A662" };

/* =========================
   SAH & Private / Provider contracts
   (Approved rates)
========================= */
const DIRECT_BASE_HOURLY = 150; // $/hr (weekday standard)
const DIRECT_BASE_30MIN = 116;  // $/30min (weekday standard, minimum visit charge)
const INDIRECT_BASE_HOURLY = 105; // $/hr (weekday standard, indirect)
const HALF_RATIO = DIRECT_BASE_30MIN / DIRECT_BASE_HOURLY; // ~0.7647

// Timeband multipliers
const MULT = {
  standard: 1.0,        // Weekday 8am–6pm
  nonStandard: 1.1,     // Weekday 6pm–8am
  saturday: 1.35,
  sunday: 1.75,
  publicHoliday: 2.1,
};

function money(v: number) {
  return Math.round(v).toLocaleString("en-AU", { minimumFractionDigits: 0 });
}

/* =========================
   NDIS price limits (as currently stored in your project)
========================= */
const NDIS_RN3 = {
  weekdayDay: 169.16,
  weekdayEvening: 186.63,
  weekdayNight: 190.12,
  saturday: 241.52,
  sunday: 277.69,
  publicHoliday: 313.86,
};
const NDIS_RN2 = {
  weekdayDay: 143.04,
  weekdayEvening: 157.77,
  weekdayNight: 160.73,
  saturday: 204.12,
  sunday: 234.67,
  publicHoliday: 265.2,
};
const halfHour = (v: number) => v / 2;

export default function Fees() {
  return (
    <>
      <Head>
        <title>Fees | NovaCare Nursing</title>
        <meta
          name="description"
          content="Transparent fees for Support at Home & Private nursing and NDIS Clinical Nursing/Consultancy. Clear time bands and readable tables."
        />
      </Head>

      <SiteHeader />

      <main className="mx-auto max-w-5xl px-4 py-12 text-[15px] leading-6 md:leading-7">
        <header className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold" style={{ color: brand.blue }}>
            Fees
          </h1>
          <p className="opacity-80 mt-2">
            Clear, upfront pricing for Support at Home (SAH), Private care and NDIS participants.
          </p>
        </header>

        {/* SAH & PRIVATE — DIRECT */}
        <section className="mt-10" id="sah">
          <h2 className="text-2xl font-semibold" style={{ color: brand.blue }}>
            Support at Home (SAH) &amp; Private Nursing — <span className="font-bold">Direct</span> (face-to-face)
          </h2>
          <p className="mt-2 opacity-90">
            <strong>Standard Hours:</strong> 8:00am–6:00pm (Mon–Fri).{" "}
            <strong>Non-Standard Hours:</strong> 6:00pm–8:00am.
          </p>

          <div className="mt-3 rounded-2xl border bg-white p-4">
            <p className="text-[15px] leading-6">
              <span
                className="inline-block rounded-md px-2 py-0.5 mr-2 text-xs font-semibold"
                style={{ background: "#F4F6FA", color: brand.blue, border: "1px solid #E5E7EB" }}
              >
                Support at Home
              </span>
              <strong style={{ color: brand.blue }}>
                Support at Home uses a <strong>single-provider</strong> model — one provider holds your service agreement and manages your budget.
              </strong>{" "}
              <strong style={{ color: brand.blue }}>
                Nursing is funded from the same overall SAH budget pool as your other supports
              </strong>{" "}
              (e.g., personal care and domestic assistance), so using more nursing may reduce the budget available for other services.{" "}
              <strong style={{ color: brand.blue }}>
                You do not pay a participant co-contribution for clinical supports such as nursing care.
              </strong>{" "}
              You can ask your SAH provider to engage <strong>NovaCare Nursing</strong> as an <strong>associated provider</strong> for your nursing
              services (subject to their contracting and governance requirements), while you continue to use your provider’s network for other supports.
            </p>
          </div>

          <div className="mt-4 overflow-x-auto rounded-2xl border bg-white">
            <table className="w-full min-w-[720px] text-left">
              <thead className="bg-[color:var(--brand-cream)] text-[15px]">
                <tr>
                  <th className="px-4 py-3 font-semibold">Time band</th>
                  <th className="px-4 py-3 font-semibold">Hourly</th>
                  <th className="px-4 py-3 font-semibold">30 minutes</th>
                </tr>
              </thead>
              <tbody className="[&>tr:nth-child(even)]:bg-gray-50">
                <tr className="border-t">
                  <td className="px-4 py-3">Weekday (Standard, 8am–6pm)</td>
                  <td className="px-4 py-3">${money(DIRECT_BASE_HOURLY * MULT.standard)}</td>
                  <td className="px-4 py-3">${money(DIRECT_BASE_30MIN)}</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">Weekday (Non-Standard, 6pm–8am)</td>
                  <td className="px-4 py-3">${money(DIRECT_BASE_HOURLY * MULT.nonStandard)}</td>
                  <td className="px-4 py-3">${money(DIRECT_BASE_HOURLY * MULT.nonStandard * HALF_RATIO)}</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">Saturday</td>
                  <td className="px-4 py-3">${money(DIRECT_BASE_HOURLY * MULT.saturday)}</td>
                  <td className="px-4 py-3">${money(DIRECT_BASE_HOURLY * MULT.saturday * HALF_RATIO)}</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">Sunday</td>
                  <td className="px-4 py-3">${money(DIRECT_BASE_HOURLY * MULT.sunday)}</td>
                  <td className="px-4 py-3">${money(DIRECT_BASE_HOURLY * MULT.sunday * HALF_RATIO)}</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">Public Holiday</td>
                  <td className="px-4 py-3">${money(DIRECT_BASE_HOURLY * MULT.publicHoliday)}</td>
                  <td className="px-4 py-3">${money(DIRECT_BASE_HOURLY * MULT.publicHoliday * HALF_RATIO)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SAH & PRIVATE — INDIRECT */}
        <section className="mt-10" id="indirect">
          <h2 className="text-2xl font-semibold" style={{ color: brand.blue }}>
            Support at Home (SAH) &amp; Private Nursing — <span className="font-bold">Indirect</span> (documentation, care planning)
          </h2>
          <p className="mt-2 opacity-90">
            Indirect time includes clinical documentation, care planning, coordination and follow-up required to deliver safe care.
          </p>

          <div className="mt-4 overflow-x-auto rounded-2xl border bg-white">
            <table className="w-full min-w-[720px] text-left">
              <thead className="bg-[color:var(--brand-cream)] text-[15px]">
                <tr>
                  <th className="px-4 py-3 font-semibold">Time band</th>
                  <th className="px-4 py-3 font-semibold">Hourly</th>
                  <th className="px-4 py-3 font-semibold">30 minutes</th>
                </tr>
              </thead>
              <tbody className="[&>tr:nth-child(even)]:bg-gray-50">
                <tr className="border-t">
                  <td className="px-4 py-3">Weekday (Standard)</td>
                  <td className="px-4 py-3">${money(INDIRECT_BASE_HOURLY * MULT.standard)}</td>
                  <td className="px-4 py-3">${money(INDIRECT_BASE_HOURLY * MULT.standard * 0.5)}</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">Weekday (Non-Standard)</td>
                  <td className="px-4 py-3">${money(INDIRECT_BASE_HOURLY * MULT.nonStandard)}</td>
                  <td className="px-4 py-3">${money(INDIRECT_BASE_HOURLY * MULT.nonStandard * 0.5)}</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">Saturday</td>
                  <td className="px-4 py-3">${money(INDIRECT_BASE_HOURLY * MULT.saturday)}</td>
                  <td className="px-4 py-3">${money(INDIRECT_BASE_HOURLY * MULT.saturday * 0.5)}</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">Sunday</td>
                  <td className="px-4 py-3">${money(INDIRECT_BASE_HOURLY * MULT.sunday)}</td>
                  <td className="px-4 py-3">${money(INDIRECT_BASE_HOURLY * MULT.sunday * 0.5)}</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">Public Holiday</td>
                  <td className="px-4 py-3">${money(INDIRECT_BASE_HOURLY * MULT.publicHoliday)}</td>
                  <td className="px-4 py-3">${money(INDIRECT_BASE_HOURLY * MULT.publicHoliday * 0.5)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Common questions */}
        <section className="mt-10">
          <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>
            Common questions
          </h3>

          <div className="mt-4 space-y-3">
            <details className="rounded-xl border bg-white p-4">
              <summary className="cursor-pointer font-medium">Do you charge a call-out fee?</summary>
              <p className="mt-2 text-sm opacity-90">
                We generally bill using the time bands above, with a minimum charge of 30 minutes for face-to-face clinical visits.
              </p>
            </details>

            <details className="rounded-xl border bg-white p-4">
              <summary className="cursor-pointer font-medium">Is Support at Home (SAH) nursing “free”?</summary>
              <p className="mt-2 text-sm opacity-90">
                If you are eligible and nursing is approved within an authorised SAH budget, the Australian Government funds the price of those nursing
                services and you do not pay a participant co-contribution for clinical supports such as nursing care. However, the cost is still drawn
                from your overall SAH budget pool.
              </p>
            </details>

            <details className="rounded-xl border bg-white p-4">
              <summary className="cursor-pointer font-medium">What’s the difference between Direct and Indirect time?</summary>
              <p className="mt-2 text-sm opacity-90">
                <strong>Direct</strong> is face-to-face clinical care time (e.g., wound care, catheter care, injections, IVs).{" "}
                <strong>Indirect</strong> includes documentation, care planning and coordination required for safe care.
              </p>
            </details>

            <details className="rounded-xl border bg-white p-4">
              <summary className="cursor-pointer font-medium">How do I get started?</summary>
              <p className="mt-2 text-sm opacity-90">
                Use the{" "}
                <Link href="/contact" className="underline">
                  Contact
                </Link>{" "}
                page to request a call back, or ask your Support at Home provider to engage NovaCare Nursing for your nursing services.
              </p>
            </details>
          </div>
        </section>

        {/* NDIS */}
        <section className="mt-12" id="ndis">
          <h2 className="text-2xl font-semibold" style={{ color: brand.blue }}>
            NDIS Nursing (Price Limits)
          </h2>
          <p className="mt-2 opacity-90">
            Where nursing supports are included in your NDIS plan, services are funded in line with the applicable NDIS support item and time band.
          </p>

          <div className="mt-4 rounded-2xl border bg-white p-4">
            <p className="text-sm opacity-90">
              <strong>Clinical Nurse Consultant (RN3+):</strong> Clinical consultancy, complex case oversight and clinical governance (including SIL clinical oversight, training, supervision and escalation pathways).
            </p>
            <p className="mt-2 text-sm opacity-90">
              <strong>Clinical Nurse (RN2):</strong> Clinical nursing for routine nursing requirements (e.g., wounds, dressings, catheter care and general clinical nursing tasks).
            </p>
          </div>

          <div className="mt-4 overflow-x-auto rounded-2xl border bg-white">
            <table className="w-full min-w-[860px] text-left">
              <thead className="bg-[color:var(--brand-cream)] text-[15px]">
                <tr>
                  <th className="px-4 py-3 font-semibold">Time band</th>
                  <th className="px-4 py-3 font-semibold">RN3+ (Hour)</th>
                  <th className="px-4 py-3 font-semibold">RN3+ (30 min)</th>
                  <th className="px-4 py-3 font-semibold">RN2 (Hour)</th>
                  <th className="px-4 py-3 font-semibold">RN2 (30 min)</th>
                </tr>
              </thead>
              <tbody className="[&>tr:nth-child(even)]:bg-gray-50">
                <tr className="border-t">
                  <td className="px-4 py-3">Weekday (Day)</td>
                  <td className="px-4 py-3">${money(NDIS_RN3.weekdayDay)}</td>
                  <td className="px-4 py-3">${money(halfHour(NDIS_RN3.weekdayDay))}</td>
                  <td className="px-4 py-3">${money(NDIS_RN2.weekdayDay)}</td>
                  <td className="px-4 py-3">${money(halfHour(NDIS_RN2.weekdayDay))}</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">Weekday (Evening)</td>
                  <td className="px-4 py-3">${money(NDIS_RN3.weekdayEvening)}</td>
                  <td className="px-4 py-3">${money(halfHour(NDIS_RN3.weekdayEvening))}</td>
                  <td className="px-4 py-3">${money(NDIS_RN2.weekdayEvening)}</td>
                  <td className="px-4 py-3">${money(halfHour(NDIS_RN2.weekdayEvening))}</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">Weekday (Night)</td>
                  <td className="px-4 py-3">${money(NDIS_RN3.weekdayNight)}</td>
                  <td className="px-4 py-3">${money(halfHour(NDIS_RN3.weekdayNight))}</td>
                  <td className="px-4 py-3">${money(NDIS_RN2.weekdayNight)}</td>
                  <td className="px-4 py-3">${money(halfHour(NDIS_RN2.weekdayNight))}</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">Saturday</td>
                  <td className="px-4 py-3">${money(NDIS_RN3.saturday)}</td>
                  <td className="px-4 py-3">${money(halfHour(NDIS_RN3.saturday))}</td>
                  <td className="px-4 py-3">${money(NDIS_RN2.saturday)}</td>
                  <td className="px-4 py-3">${money(halfHour(NDIS_RN2.saturday))}</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">Sunday</td>
                  <td className="px-4 py-3">${money(NDIS_RN3.sunday)}</td>
                  <td className="px-4 py-3">${money(halfHour(NDIS_RN3.sunday))}</td>
                  <td className="px-4 py-3">${money(NDIS_RN2.sunday)}</td>
                  <td className="px-4 py-3">${money(halfHour(NDIS_RN2.sunday))}</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">Public Holiday</td>
                  <td className="px-4 py-3">${money(NDIS_RN3.publicHoliday)}</td>
                  <td className="px-4 py-3">${money(halfHour(NDIS_RN3.publicHoliday))}</td>
                  <td className="px-4 py-3">${money(NDIS_RN2.publicHoliday)}</td>
                  <td className="px-4 py-3">${money(halfHour(NDIS_RN2.publicHoliday))}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 rounded-2xl border bg-white p-4">
            <p className="text-sm opacity-80">
              <strong>Disclaimer:</strong> NDIS rates are billed in line with the applicable support item, time band and role delivered (RN2 vs RN3+).
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>
            NDIS Nursing Time Bands
          </h3>
          <div className="mt-3 rounded-2xl border bg-white p-4 text-sm opacity-90">
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Weekday (Day):</strong> 6:00am–8:00pm</li>
              <li><strong>Weekday (Evening):</strong> 8:00pm–12:00am</li>
              <li><strong>Weekday (Night):</strong> 12:00am–6:00am</li>
              <li><strong>Saturday:</strong> 12:00am–11:59pm</li>
              <li><strong>Sunday:</strong> 12:00am–11:59pm</li>
              <li><strong>Public Holiday:</strong> 12:00am–11:59pm</li>
            </ul>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
