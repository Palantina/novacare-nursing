import Head from "next/head";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Link from "next/link";

const brand = { blue: "#0B2D5C", gold: "#C6A662" };

/* =========================
   SAH & Private / Provider contracts
   (Approved rates)
========================= */
const DIRECT_BASE_HOURLY = 170;   // $/hr (weekday standard)
const DIRECT_BASE_30MIN  = 130;   // $/30min (weekday standard, min call-out)
const INDIRECT_BASE_HOURLY = 105; // $/hr (weekday standard, indirect)
const HALF_RATIO = DIRECT_BASE_30MIN / DIRECT_BASE_HOURLY; // ~0.7647

// Timeband multipliers (aligned with common AU community nursing practice)
const MULT = {
  standard: 1.00,     // Weekday 8am–6pm
  nonStandard: 1.10,  // Weekday 6pm–8am
  saturday: 1.35,
  sunday: 1.75,
  publicHoliday: 2.10,
};

function money(v: number) {
  return Math.round(v).toLocaleString("en-AU", { minimumFractionDigits: 0 });
}

/* =========================
   NDIS 2025–26 Price Limits
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
  publicHoliday: 265.20,
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
        {/* Page header */}
        <header className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold" style={{ color: brand.blue }}>
            Fees
          </h1>
          <p className="opacity-80 mt-2">
            Clear, upfront pricing for Support at Home (SAH), Private care and NDIS participants.
          </p>
        </header>

        {/* =========================
            SAH & PRIVATE — DIRECT
        ========================== */}
        <section className="mt-10" id="sah">
          <h2 className="text-2xl font-semibold" style={{ color: brand.blue }}>
            Support at Home (SAH) &amp; Private Nursing — <span className="font-bold">Direct</span> (face-to-face)
          </h2>
          <p className="mt-2 opacity-90">
            <strong>Standard Hours:</strong> 8:00am–6:00pm (Mon–Fri).{" "}
            <strong>Non-Standard Hours:</strong> 6:00pm–8:00am.
          </p>

          {/* SAH funding banner (concise, caring) */}
          <div className="mt-3 rounded-2xl border bg-white p-4">
            <p className="text-[15px] leading-6">
              <span
                className="inline-block rounded-md px-2 py-0.5 mr-2 text-xs font-semibold"
                style={{ background: "#F4F6FA", color: brand.blue, border: "1px solid #E5E7EB" }}
              >
                Support at Home
              </span>
              <strong style={{ color: brand.blue }}>
                If you have a Support at Home (SAH) package and need nursing, your nursing care is fully funded by the Australian Government.
              </strong>{" "}
              We provide your approved nursing services with care and dignity — these costs are not taken from your SAH package.
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
                  <td className="px-4 py-3">${money(DIRECT_BASE_HOURLY)}</td>
                  <td className="px-4 py-3">${money(DIRECT_BASE_30MIN)}</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">Weekday (Non-Standard, 6pm–8am)</td>
                  <td className="px-4 py-3">${money(DIRECT_BASE_HOURLY * MULT.nonStandard)}</td>
                  <td className="px-4 py-3">
                    ${money(DIRECT_BASE_HOURLY * MULT.nonStandard * HALF_RATIO)}
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">Saturday</td>
                  <td className="px-4 py-3">${money(DIRECT_BASE_HOURLY * MULT.saturday)}</td>
                  <td className="px-4 py-3">
                    ${money(DIRECT_BASE_HOURLY * MULT.saturday * HALF_RATIO)}
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">Sunday</td>
                  <td className="px-4 py-3">${money(DIRECT_BASE_HOURLY * MULT.sunday)}</td>
                  <td className="px-4 py-3">
                    ${money(DIRECT_BASE_HOURLY * MULT.sunday * HALF_RATIO)}
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">Public Holiday</td>
                  <td className="px-4 py-3">${money(DIRECT_BASE_HOURLY * MULT.publicHoliday)}</td>
                  <td className="px-4 py-3">
                    ${money(DIRECT_BASE_HOURLY * MULT.publicHoliday * HALF_RATIO)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* =========================
            SAH & PRIVATE — INDIRECT
        ========================== */}
        <section className="mt-10">
          <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>
            Registered Nurse — <span className="font-bold">Indirect</span> (care planning, documentation, coordination)
          </h3>
          <p className="mt-2 opacity-90">
            Billable under Support at Home when linked to a client’s episode of care. Time bands shown for clarity.
          </p>

          <div className="mt-4 overflow-x-auto rounded-2xl border bg-white">
            <table className="w-full min-w-[620px] text-left">
              <thead className="bg-[color:var(--brand-cream)] text-[15px]">
                <tr>
                  <th className="px-4 py-3 font-semibold">Time band</th>
                  <th className="px-4 py-3 font-semibold">Hourly</th>
                </tr>
              </thead>
              <tbody className="[&>tr:nth-child(even)]:bg-gray-50">
                <tr className="border-t">
                  <td className="px-4 py-3">Weekday (Standard, 8am–6pm)</td>
                  <td className="px-4 py-3">${money(INDIRECT_BASE_HOURLY * MULT.standard)}</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">Weekday (Non-Standard, 6pm–8am)</td>
                  <td className="px-4 py-3">${money(INDIRECT_BASE_HOURLY * MULT.nonStandard)}</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">Saturday</td>
                  <td className="px-4 py-3">${money(INDIRECT_BASE_HOURLY * MULT.saturday)}</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">Sunday</td>
                  <td className="px-4 py-3">${money(INDIRECT_BASE_HOURLY * MULT.sunday)}</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">Public Holiday</td>
                  <td className="px-4 py-3">${money(INDIRECT_BASE_HOURLY * MULT.publicHoliday)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* SAH notes / disclaimer */}
          <div className="rounded-2xl bg-white border border-gray-100 p-5 space-y-2 mt-4">
            <p className="text-sm opacity-90">
              <strong>Funding (SAH):</strong> For eligible clients under <em>Support at Home</em>, nursing care is funded by the
              Australian Government. No out-of-pocket charges apply for approved nursing services within an authorised SAH budget.
            </p>
            <p className="text-sm opacity-80">
              <strong>Notes:</strong> <em>Direct</em> = face-to-face clinical time. <em>Indirect</em> = documentation,
              care planning and coordination related to the episode of care (SAH). Time bands apply as listed. Rates shown
              are for standard metropolitan delivery; regional travel/arrangements are agreed in advance.
            </p>
            <p className="text-sm opacity-80">
              <strong>Disclaimer:</strong> Fees may change and will be confirmed in the Service Agreement before services
              commence. Support at Home allows both direct and indirect clinical billing when linked to a client’s care.
            </p>
          </div>

          {/* SAH — FAQ */}
          <section className="mt-6">
            <h4 className="text-lg font-semibold" style={{ color: brand.blue }}>
              Support at Home — quick questions
            </h4>

            <div className="mt-3 space-y-2">
              <details className="rounded-xl border bg-white p-4">
                <summary className="cursor-pointer font-medium">Is all nursing care fully funded under SAH?</summary>
                <p className="mt-2 text-sm opacity-90">
                  If you are <em>eligible</em> and your nursing supports are <em>approved</em> within an authorised SAH budget, the
                  Australian Government funds those nursing services. In that case, there are no out-of-pocket costs for the approved items.
                </p>
              </details>

              <details className="rounded-xl border bg-white p-4">
                <summary className="cursor-pointer font-medium">What’s the difference between Direct and Indirect time?</summary>
                <p className="mt-2 text-sm opacity-90">
                  <strong>Direct</strong> is face-to-face clinical time (e.g., wound care, IVs). <strong>Indirect</strong> includes
                  documentation, care planning and coordination directly related to your episode of care; this is also billable under SAH when linked to approved services.
                </p>
              </details>

              <details className="rounded-xl border bg-white p-4">
                <summary className="cursor-pointer font-medium">How do I get started?</summary>
                <p className="mt-2 text-sm opacity-90">
                  Contact us and we’ll guide you through eligibility, assessment and service planning. Once your SAH budget is authorised,
                  we schedule nursing visits and complete required documentation.
                </p>
              </details>
            </div>
          </section>
        </section>

        {/* =========================
            NDIS TABLE (RN3+ vs RN2)
        ========================== */}
        <section className="mt-12" id="ndis">
          <h2 className="text-2xl font-semibold" style={{ color: brand.blue }}>
            NDIS Clinical Nursing &amp; Consultancy (National Price Limits)
          </h2>
          <p className="mt-2 opacity-90">
            <strong>Clinical Nurse Consultant (RN3+):</strong> SIL oversight &amp; complex care governance.
            <br />
            <strong>Clinical Nurse (RN2):</strong> Clinical nursing for all other nursing requirements.
          </p>

          <div className="mt-4 overflow-x-auto rounded-2xl border bg-white">
            <table className="w-full min-w-[780px] text-left">
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
                  <td className="px-4 py-3">Weekday Daytime</td>
                  <td className="px-4 py-3">${money(NDIS_RN3.weekdayDay)}</td>
                  <td className="px-4 py-3">${money(halfHour(NDIS_RN3.weekdayDay))}</td>
                  <td className="px-4 py-3">${money(NDIS_RN2.weekdayDay)}</td>
                  <td className="px-4 py-3">${money(halfHour(NDIS_RN2.weekdayDay))}</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">Weekday Evening</td>
                  <td className="px-4 py-3">${money(NDIS_RN3.weekdayEvening)}</td>
                  <td className="px-4 py-3">${money(halfHour(NDIS_RN3.weekdayEvening))}</td>
                  <td className="px-4 py-3">${money(NDIS_RN2.weekdayEvening)}</td>
                  <td className="px-4 py-3">${money(halfHour(NDIS_RN2.weekdayEvening))}</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">Weekday Night</td>
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

          {/* NDIS notes / disclaimer */}
          <div className="rounded-2xl bg-white border border-gray-100 p-5 space-y-2 mt-4">
            <p className="text-sm opacity-80">
              <strong>Notes:</strong> NDIS limits shown are the maximums for NDIA and plan-managed invoices (2025–2026).
              Self-managed participants may negotiate their costs.
            </p>
            <p className="text-sm opacity-80">
              <strong>Disclaimer:</strong> Rates reflect current NDIA price limits for Clinical Nurse Consultant (RN3+) and
              Clinical Nurse (RN2) nursing supports. Updates to NDIA schedules will be reflected as they are published.
            </p>
          </div>
        </section>

        {/* =========================
            NDIS TIME BANDS
        ========================== */}
        <section className="mt-10">
          <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>
            NDIS Nursing Time Bands
          </h3>
          <div className="mt-3 rounded-2xl bg-white border border-gray-100 p-5">
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Weekday Daytime (standard):</strong> starts before 12:00 noon and finishes the same day.
              </li>
              <li>
                <strong>Weekday Evening (non-standard):</strong> starts at/after 12:00 noon and finishes after 6:00 pm.
              </li>
              <li>
                <strong>Weekday Night (non-standard):</strong> starts at/after 6:00 pm and finishes before 7:30 am next day.
              </li>
              <li>
                <strong>Saturday / Sunday / Public Holiday:</strong> by calendar day (midnight–midnight).
              </li>
            </ul>
            <p className="text-sm opacity-75 mt-3">
              Nursing time bands differ from Disability Support Worker bands.
            </p>
          </div>
        </section>

        {/* =========================
            OTHER NDIS CHARGES
        ========================== */}
        <section className="mt-8">
          <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>
            Other Charges (NDIS)
          </h3>
          <div className="mt-3 rounded-2xl bg-white border border-gray-100 p-5 space-y-3">
            <div>
              <p className="font-medium" style={{ color: brand.blue }}>Provider travel — time</p>
              <p className="text-sm opacity-90">
                Claimable with agreement, subject to caps: <strong>MMM 1–3: up to 30 minutes</strong>;
                <strong> MMM 4–5: up to 60 minutes</strong> (apportioned if multiple participants).
              </p>
            </div>

            <div>
              <p className="font-medium" style={{ color: brand.blue }}>Provider travel — non-labour costs</p>
              <ul className="list-disc pl-6 text-sm opacity-90 space-y-1">
                <li>Up to <strong>$0.99 per km</strong> (unmodified vehicle).</li>
                <li>Up to <strong>$2.76 per km</strong> (modified vehicle or bus).</li>
                <li>Tolls, parking, public transport at <strong>actual cost</strong> (Activity-Based Transport items).</li>
              </ul>
            </div>

            <div>
              <p className="font-medium" style={{ color: brand.blue }}>Non-face-to-face &amp; reports</p>
              <ul className="list-disc pl-6 text-sm opacity-90 space-y-1">
                <li>Directly related non-face-to-face clinical time (e.g., documentation, coordination) — claimable.</li>
                <li>NDIA-requested reports — claimable.</li>
              </ul>
            </div>

            <div>
              <p className="font-medium" style={{ color: brand.blue }}>Short-notice cancellation</p>
              <p className="text-sm opacity-90">
                Up to <strong>100%</strong> of the agreed fee if less than <strong>2 clear business days’ notice</strong> is given (or no-show), per NDIS rules and your Service Agreement.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="/contact"
            className="inline-block rounded-xl px-6 py-3 font-semibold hover:opacity-95 transition"
            style={{ background: brand.gold, color: brand.blue }}
          >
            Ask about availability &amp; billing
          </a>
          <p className="text-sm mt-2 opacity-80">
            Or call <a href="tel:+61491303671" className="underline">0491 303 671</a>
          </p>
        </div>

        {/* Optional link back to Services */}
        <div className="text-center mt-6">
          <Link href="/services" className="underline text-[color:var(--brand-gold)]">
            View Services
          </Link>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
