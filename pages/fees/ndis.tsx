import Head from "next/head";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import Link from "next/link";

const brand = { blue: "#0B2D5C", gold: "#C6A662" };

/* =========================
   NDIS 2025–26 Price Limits
   (CNC for SIL/High-Intensity; RN otherwise)
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
function money(v: number) {
  return Math.round(v).toLocaleString("en-AU", { minimumFractionDigits: 0 });
}

export default function FeesNDIS() {
  return (
    <>
      <Head>
        <title>Fees — NDIS Nursing | NovaCare Nursing</title>
        <meta
          name="description"
          content="NDIS Clinical Nursing & Consultancy price limits (2025–26), by time band."
        />
      </Head>

      <SiteHeader />

      <main className="mx-auto max-w-5xl px-4 py-12 text-[15px] leading-6 md:leading-7">
        <header className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold" style={{ color: brand.blue }}>
            Fees — NDIS Clinical Nursing & Consultancy
          </h1>
          <p className="opacity-80 mt-2">
            <strong>Clinical Nurse Consultant (RN3+):</strong> SIL oversight & complex care governance.{" "}
            <strong>Clinical Nurse (RN2):</strong> all other nursing requirements.
          </p>
        </header>

        <section className="mt-8">
          <div className="overflow-x-auto rounded-2xl border bg-white">
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

          <p className="text-sm opacity-80 mt-3">
            NDIS limits are the maximums for NDIA and plan-managed invoices for 2025–2026; self-managed participants can
            negotiate their costs.
          </p>
        </section>

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
