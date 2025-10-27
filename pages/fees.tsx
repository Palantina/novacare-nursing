import Head from "next/head";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Link from "next/link";

const brand = { blue: "#0B2D5C", gold: "#C6A662" };

// ====== Your base Private/Aged-Care weekday standard fees ======
const BASE_HOURLY = 150;     // $/hr
const BASE_30MIN  = 116;     // $/30min
// Keep your existing 30-min ratio for all bands:
const HALF_RATIO = BASE_30MIN / BASE_HOURLY; // ≈0.773

// Suggested multipliers (benchmarked to typical community nursing schedules)
const MULT = {
  standard: 1.0,        // Weekday 8am–6pm
  nonStandard: 1.049,   // Weekday 6pm–8am
  saturday: 1.320,
  sunday: 1.661,
  publicHoliday: 1.973,
};

function money(v: number) {
  return Math.round(v).toLocaleString("en-AU", { minimumFractionDigits: 0 });
}

// ====== NDIS 2025–26 National price limits (hourly) ======
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
function halfHour(v: number) {
  return (v / 2);
}

export default function Fees() {
  return (
    <>
      <Head>
        <title>Fees | NovaCare Nursing</title>
        <meta
          name="description"
          content="Transparent fees for private/aged-care nursing and NDIS Clinical Nursing/Consultancy. Weekday and after-hours rates with clear time bands and allowable NDIS charges."
        />
      </Head>

      <SiteHeader />

      <main className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center" style={{ color: brand.blue }}>
          Fees
        </h1>
        <p className="text-center opacity-80 mt-2">
          Clear, upfront pricing. No surprises.
        </p>

        {/* PRIVATE & AGED-CARE TABLE */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold" style={{ color: brand.blue }}>
            Private &amp; Aged Care Nursing
          </h2>
          <p className="mt-2 opacity-90">
            <strong>Standard Hours:</strong> 8:00am–6:00pm (Mon–Fri).{" "}
            <strong>Non-Standard Hours:</strong> 6:00pm–8:00am.
          </p>

          <div className="mt-4 overflow-x-auto rounded-2xl border bg-white">
            <table className="w-full text-left text-[15px]">
              <thead className="bg-[color:var(--brand-cream)]">
                <tr>
                  <th className="px-4 py-3 font-semibold">Timeband</th>
                  <th className="px-4 py-3 font-semibold">Hourly</th>
                  <th className="px-4 py-3 font-semibold">30 minutes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-3">Weekday (Standard, 8am–6pm)</td>
                  <td className="px-4 py-3">${money(BASE_HOURLY)}</td>
                  <td className="px-4 py-3">${money(BASE_30MIN)}</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">Weekday (Non-Standard, 6pm–8am)</td>
                  <td className="px-4 py-3">${money(BASE_HOURLY * MULT.nonStandard)}</td>
                  <td className="px-4 py-3">${money(BASE_HOURLY * MULT.nonStandard * HALF_RATIO)}</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">Saturday</td>
                  <td className="px-4 py-3">${money(BASE_HOURLY * MULT.saturday)}</td>
                  <td className="px-4 py-3">${money(BASE_HOURLY * MULT.saturday * HALF_RATIO)}</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">Sunday</td>
                  <td className="px-4 py-3">${money(BASE_HOURLY * MULT.sunday)}</td>
                  <td className="px-4 py-3">${money(BASE_HOURLY * MULT.sunday * HALF_RATIO)}</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">Public Holiday</td>
                  <td className="px-4 py-3">${money(BASE_HOURLY * MULT.publicHoliday)}</td>
                  <td className="px-4 py-3">${money(BASE_HOURLY * MULT.publicHoliday * HALF_RATIO)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-sm opacity-75">
            Weekend/evening/public holiday multipliers are benchmarked to typical Tasmanian community nursing schedules and reviewed annually.
          </p>
        </section>

        {/* NDIS TABLE (RN3+ vs RN2) */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold" style={{ color: brand.blue }}>
            NDIS Clinical Nursing &amp; Consultancy (National Price Limits)
          </h2>
          <p className="mt-2 opacity-90">
            <strong>Clinical Nurse Consultant (RN3+):</strong> SIL oversight &amp; complex care governance.
            <br />
            <strong>Clinical Nurse (RN2):</strong> Clinical nursing for all other nursing requirements.
          </p>

          <div className="mt-4 overflow-x-auto rounded-2xl border bg-white">
            <table className="w-full text-left text-[15px]">
              <thead className="bg-[color:var(--brand-cream)]">
                <tr>
                  <th className="px-4 py-3 font-semibold">Time band</th>
                  <th className="px-4 py-3 font-semibold">RN3+ (Hour)</th>
                  <th className="px-4 py-3 font-semibold">RN3+ (30 min)</th>
                  <th className="px-4 py-3 font-semibold">RN2 (Hour)</th>
                  <th className="px-4 py-3 font-semibold">RN2 (30 min)</th>
                </tr>
              </thead>
              <tbody>
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

          {/* ✅ Updated note exactly as requested */}
          <p className="text-sm opacity-80 mt-3">
            NDIS limits are the maximums for NDIA and plan-managed invoices for 2025–2026; self-managed participants can negotiate their costs.
          </p>
        </section>

        {/* NDIS TIME BANDS & OTHER CHARGES (unchanged) */}
        <section className="mt-10">
          <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>
            NDIS Nursing Time Bands
          </h3>
          <div className="mt-3 rounded-2xl bg-white border border-gray-100 p-5">
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Weekday Daytime (standard):</strong> starts before 12:00 noon and finishes the same day.</li>
              <li><strong>Weekday Evening (non-standard):</strong> starts at/after 12:00 noon and finishes after 6:00 pm.</li>
              <li><strong>Weekday Night (non-standard):</strong> starts at/after 6:00 pm and finishes before 7:30 am next day.</li>
              <li><strong>Saturday / Sunday / Public Holiday:</strong> by calendar day (midnight–midnight).</li>
            </ul>
            <p className="text-sm opacity-75 mt-3">
              Nursing time bands differ from Disability Support Worker bands.
            </p>
          </div>
        </section>

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

        {/* Call-to-action */}
        <div className="mt-10 text-center">
          <a
            href="/contact"
            className="inline-block rounded-xl px-6 py-3 font-semibold"
            style={{ background: brand.gold, color: brand.blue }}
          >
            Ask about availability &amp; billing
          </a>
          <p className="text-sm mt-2 opacity-80">
            Or call <a href="tel:+61491303671" className="underline">0491 303 671</a>
          </p>
        </div>

        <div className="text-center mt-6">
          <Link href="/services" className="underline text-[color:var(--brand-gold)]">View Services</Link>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
