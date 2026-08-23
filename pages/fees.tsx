import Head from "next/head";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Link from "next/link";

const brand = { blue: "#1D3952" };

const DIRECT_BASE_HOURLY = 150;
const DIRECT_BASE_30MIN = 116;
const INDIRECT_BASE_HOURLY = 105;
const HALF_RATIO = DIRECT_BASE_30MIN / DIRECT_BASE_HOURLY;

const MULT = {
  standard: 1.0,
  nonStandard: 1.1,
  saturday: 1.35,
  sunday: 1.75,
  publicHoliday: 2.1,
};

function money(v: number) {
  return Math.round(v).toLocaleString("en-AU", { minimumFractionDigits: 0 });
}

export default function Fees() {
  return (
    <>
      <Head>
        <title>Nursing Fees Hobart | Private & Support at Home | NovaCare Nursing</title>
        <meta
          name="description"
          content="View NovaCare Nursing fees for private clinical nursing and Support at Home nursing across Hobart and Southern Tasmania, including weekday, after-hours, weekend and public holiday rates."
        />
        <link rel="canonical" href="https://www.novacarenursing.com.au/fees" />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content="Nursing Fees Hobart | NovaCare Nursing" />
        <meta property="og:description" content="Clear fees for private clinical nursing and Support at Home nursing across Hobart and Southern Tasmania." />
        <meta property="og:url" content="https://www.novacarenursing.com.au/fees" />
        <meta property="og:type" content="website" />
      </Head>

      <SiteHeader />

      <main className="bg-[#F8FCFD] font-sans text-[#526B7C]">
        <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-[#DDF5F5]/70 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -right-24 top-40 h-80 w-80 rounded-full bg-[#EAE1FC]/60 blur-3xl"
          />

          <div className="relative mx-auto max-w-6xl">
            <header className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2B9FA5] sm:text-base">
                NovaCare Nursing — Aged Care Specialists
              </p>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#6E3BE8]">
                Clear pricing. No surprises.
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#1D3952] sm:text-5xl">
                Nursing Fees
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8">
                Straightforward pricing for private nursing and Support at Home services across Hobart and Southern Tasmania.
              </p>
            </header>

            <nav className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-3" aria-label="Fee sections">
              <a
                href="#private"
                className="rounded-full border border-[#CFEAEC] bg-white px-4 py-2 text-sm font-semibold text-[#238C93] shadow-sm transition hover:bg-[#EAF9FA]"
              >
                Private nursing
              </a>
              <a
                href="#sah"
                className="rounded-full border border-[#E3DDFB] bg-white px-4 py-2 text-sm font-semibold text-[#6E3BE8] shadow-sm transition hover:bg-[#F2EEFF]"
              >
                Support at Home
              </a>
            </nav>
          </div>
        </section>

        <section className="px-4 pb-14 sm:px-6 lg:px-8" id="private">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.25rem] border border-[#DCEDEF] bg-gradient-to-br from-white via-[#FCFEFF] to-[#F2EEFF] shadow-[0_24px_70px_rgba(29,57,82,0.08)]">
            <div className="p-6 sm:p-8 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2B9FA5]">
                Private Clinical Nursing
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#1D3952] sm:text-4xl">
                Professional nursing in your home
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-8">
                Book NovaCare Nursing directly for focused clinical care or a more comprehensive nursing visit.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <article className="rounded-[1.75rem] border border-[#D7EEF0] bg-[#EAF9FA] p-6 sm:p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#238C93]">
                    Focused visit
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.025em] text-[#1D3952]">
                    Short clinical home visit
                  </h3>
                  <p className="mt-1 text-sm font-medium">Up to 30 minutes</p>
                  <p className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#1D3952]">
                    ${money(DIRECT_BASE_30MIN)}
                  </p>
                  <p className="mt-4 leading-7">
                    Suitable for focused nursing care such as wound review and dressing, catheter care, injections under appropriate orders, or a targeted clinical review.
                  </p>
                </article>

                <article className="rounded-[1.75rem] border border-[#E3DDFB] bg-[#F2EEFF] p-6 sm:p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#6E3BE8]">
                    Comprehensive visit
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.025em] text-[#1D3952]">
                    Clinical home visit
                  </h3>
                  <p className="mt-1 text-sm font-medium">Up to 60 minutes</p>
                  <p className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#1D3952]">
                    ${money(DIRECT_BASE_HOURLY)}
                  </p>
                  <p className="mt-4 leading-7">
                    Suitable when you need more comprehensive assessment, treatment, nursing care, education or clinical planning during the visit.
                  </p>
                </article>
              </div>

              <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-[#DCEDEF] bg-white/90">
                <div className="border-b border-[#E5EEF0] px-5 py-4 sm:px-6">
                  <h3 className="text-xl font-semibold text-[#1D3952]">
                    Private nursing outside standard weekday hours
                  </h3>
                  <p className="mt-1 text-sm">
                    The same visit options are available after hours, on weekends and on public holidays.
                  </p>
                </div>

                <div className="divide-y divide-[#E5EEF0]">
                  <div className="grid gap-3 px-5 py-4 sm:grid-cols-[1.2fr_0.8fr_0.8fr] sm:items-center sm:px-6">
                    <div>
                      <p className="font-semibold text-[#1D3952]">Weekday after-hours</p>
                      <p className="text-sm">6:00pm–8:00am</p>
                    </div>
                    <p><span className="font-semibold text-[#1D3952]">${money(DIRECT_BASE_HOURLY * MULT.nonStandard)}</span> / up to 60 min</p>
                    <p><span className="font-semibold text-[#1D3952]">${money(DIRECT_BASE_HOURLY * MULT.nonStandard * HALF_RATIO)}</span> / up to 30 min</p>
                  </div>

                  <div className="grid gap-3 px-5 py-4 sm:grid-cols-[1.2fr_0.8fr_0.8fr] sm:items-center sm:px-6">
                    <p className="font-semibold text-[#1D3952]">Saturday</p>
                    <p><span className="font-semibold text-[#1D3952]">${money(DIRECT_BASE_HOURLY * MULT.saturday)}</span> / up to 60 min</p>
                    <p><span className="font-semibold text-[#1D3952]">${money(DIRECT_BASE_HOURLY * MULT.saturday * HALF_RATIO)}</span> / up to 30 min</p>
                  </div>

                  <div className="grid gap-3 px-5 py-4 sm:grid-cols-[1.2fr_0.8fr_0.8fr] sm:items-center sm:px-6">
                    <p className="font-semibold text-[#1D3952]">Sunday</p>
                    <p><span className="font-semibold text-[#1D3952]">${money(DIRECT_BASE_HOURLY * MULT.sunday)}</span> / up to 60 min</p>
                    <p><span className="font-semibold text-[#1D3952]">${money(DIRECT_BASE_HOURLY * MULT.sunday * HALF_RATIO)}</span> / up to 30 min</p>
                  </div>

                  <div className="grid gap-3 px-5 py-4 sm:grid-cols-[1.2fr_0.8fr_0.8fr] sm:items-center sm:px-6">
                    <p className="font-semibold text-[#1D3952]">Public holiday</p>
                    <p><span className="font-semibold text-[#1D3952]">${money(DIRECT_BASE_HOURLY * MULT.publicHoliday)}</span> / up to 60 min</p>
                    <p><span className="font-semibold text-[#1D3952]">${money(DIRECT_BASE_HOURLY * MULT.publicHoliday * HALF_RATIO)}</span> / up to 30 min</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-[#D7EEF0] bg-white p-5 sm:p-6">
                <p className="font-semibold text-[#1D3952]">
                  Each visit includes experienced clinical assessment, nursing care and professional judgement in your home.
                </p>
                <p className="mt-2 leading-7">
                  Where substantial care planning, reports or multidisciplinary coordination are clinically required outside the visit, weekday standard-hour clinical work is charged at ${money(INDIRECT_BASE_HOURLY)} per hour. Any additional work will be discussed with you before it is billed. Time-band rates apply outside standard hours.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-14 sm:px-6 lg:px-8" id="sah">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6E3BE8]">
                  Support at Home
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#1D3952] sm:text-4xl">
                  Nursing through your registered provider
                </h2>
                <p className="mt-4 text-lg leading-8">
                  Ask your Support at Home provider to engage NovaCare Nursing for your nursing care.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-[#E3DDFB] bg-[#F7F4FF] p-6 sm:p-7">
                <p className="leading-7">
                  <strong className="text-[#1D3952]">Support at Home uses a single-provider model</strong> — one provider holds your service agreement and manages your budget. Clinical supports such as nursing have no participant co-payment, but provider service charges for nursing are still paid from your overall Support at Home budget. For eligible clients approved for the End-of-Life Pathway, specialised palliative nursing can be funded through the additional $25,000 pathway budget over 12 weeks. NovaCare Nursing may be engaged as an associated provider where the arrangement meets contracting and governance requirements.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-8 xl:grid-cols-2">
              <div>
                <h3 className="text-2xl font-semibold text-[#1D3952]">Face-to-face nursing</h3>
                <p className="mt-2">
                  Standard hours are 8:00am–6:00pm Monday to Friday. Non-standard hours are 6:00pm–8:00am.
                </p>

                <div className="mt-4 overflow-x-auto rounded-[1.5rem] border border-[#DCEDEF] bg-white shadow-sm">
                  <table className="w-full min-w-[620px] text-left">
                    <thead className="bg-[#F8FCFD] text-[#1D3952]">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Time band</th>
                        <th className="px-4 py-3 font-semibold">Hourly</th>
                        <th className="px-4 py-3 font-semibold">30 minutes</th>
                      </tr>
                    </thead>
                    <tbody className="[&>tr:nth-child(even)]:bg-[#FBFDFE]">
                      <tr className="border-t border-[#E5EEF0]"><td className="px-4 py-3">Weekday standard</td><td className="px-4 py-3">${money(DIRECT_BASE_HOURLY)}</td><td className="px-4 py-3">${money(DIRECT_BASE_30MIN)}</td></tr>
                      <tr className="border-t border-[#E5EEF0]"><td className="px-4 py-3">Weekday non-standard</td><td className="px-4 py-3">${money(DIRECT_BASE_HOURLY * MULT.nonStandard)}</td><td className="px-4 py-3">${money(DIRECT_BASE_HOURLY * MULT.nonStandard * HALF_RATIO)}</td></tr>
                      <tr className="border-t border-[#E5EEF0]"><td className="px-4 py-3">Saturday</td><td className="px-4 py-3">${money(DIRECT_BASE_HOURLY * MULT.saturday)}</td><td className="px-4 py-3">${money(DIRECT_BASE_HOURLY * MULT.saturday * HALF_RATIO)}</td></tr>
                      <tr className="border-t border-[#E5EEF0]"><td className="px-4 py-3">Sunday</td><td className="px-4 py-3">${money(DIRECT_BASE_HOURLY * MULT.sunday)}</td><td className="px-4 py-3">${money(DIRECT_BASE_HOURLY * MULT.sunday * HALF_RATIO)}</td></tr>
                      <tr className="border-t border-[#E5EEF0]"><td className="px-4 py-3">Public holiday</td><td className="px-4 py-3">${money(DIRECT_BASE_HOURLY * MULT.publicHoliday)}</td><td className="px-4 py-3">${money(DIRECT_BASE_HOURLY * MULT.publicHoliday * HALF_RATIO)}</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#1D3952]">Clinical work outside the visit</h3>
                <p className="mt-2">
                  Includes documentation, care planning, coordination and follow-up required to deliver safe care.
                </p>

                <div className="mt-4 overflow-x-auto rounded-[1.5rem] border border-[#DCEDEF] bg-white shadow-sm">
                  <table className="w-full min-w-[620px] text-left">
                    <thead className="bg-[#F8FCFD] text-[#1D3952]">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Time band</th>
                        <th className="px-4 py-3 font-semibold">Hourly</th>
                        <th className="px-4 py-3 font-semibold">30 minutes</th>
                      </tr>
                    </thead>
                    <tbody className="[&>tr:nth-child(even)]:bg-[#FBFDFE]">
                      <tr className="border-t border-[#E5EEF0]"><td className="px-4 py-3">Weekday standard</td><td className="px-4 py-3">${money(INDIRECT_BASE_HOURLY)}</td><td className="px-4 py-3">${money(INDIRECT_BASE_HOURLY * 0.5)}</td></tr>
                      <tr className="border-t border-[#E5EEF0]"><td className="px-4 py-3">Weekday non-standard</td><td className="px-4 py-3">${money(INDIRECT_BASE_HOURLY * MULT.nonStandard)}</td><td className="px-4 py-3">${money(INDIRECT_BASE_HOURLY * MULT.nonStandard * 0.5)}</td></tr>
                      <tr className="border-t border-[#E5EEF0]"><td className="px-4 py-3">Saturday</td><td className="px-4 py-3">${money(INDIRECT_BASE_HOURLY * MULT.saturday)}</td><td className="px-4 py-3">${money(INDIRECT_BASE_HOURLY * MULT.saturday * 0.5)}</td></tr>
                      <tr className="border-t border-[#E5EEF0]"><td className="px-4 py-3">Sunday</td><td className="px-4 py-3">${money(INDIRECT_BASE_HOURLY * MULT.sunday)}</td><td className="px-4 py-3">${money(INDIRECT_BASE_HOURLY * MULT.sunday * 0.5)}</td></tr>
                      <tr className="border-t border-[#E5EEF0]"><td className="px-4 py-3">Public holiday</td><td className="px-4 py-3">${money(INDIRECT_BASE_HOURLY * MULT.publicHoliday)}</td><td className="px-4 py-3">${money(INDIRECT_BASE_HOURLY * MULT.publicHoliday * 0.5)}</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2B9FA5]">Helpful information</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#1D3952]">Common questions</h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <details className="rounded-[1.5rem] border border-[#DCEDEF] bg-white p-5 shadow-sm">
                <summary className="cursor-pointer font-semibold text-[#1D3952]">Do you charge a call-out fee?</summary>
                <p className="mt-3 leading-7">We generally bill using the time bands above, with a minimum charge of 30 minutes for face-to-face clinical visits.</p>
              </details>

              <details className="rounded-[1.5rem] border border-[#E3DDFB] bg-white p-5 shadow-sm">
                <summary className="cursor-pointer font-semibold text-[#1D3952]">Is Support at Home nursing “free”?</summary>
                <p className="mt-3 leading-7">Clinical supports such as nursing have no participant co-payment under Support at Home. However, provider service charges for nursing are still paid from your overall Support at Home budget. For eligible clients approved for the End-of-Life Pathway, specialised palliative nursing can be funded through the additional $25,000 pathway budget over 12 weeks.</p>
              </details>

              <details className="rounded-[1.5rem] border border-[#DCE8F8] bg-white p-5 shadow-sm">
                <summary className="cursor-pointer font-semibold text-[#1D3952]">What is clinical work outside the visit?</summary>
                <p className="mt-3 leading-7">It includes documentation, care planning and coordination required for safe care outside the face-to-face visit.</p>
              </details>

              <details className="rounded-[1.5rem] border border-[#F2DDD5] bg-white p-5 shadow-sm">
                <summary className="cursor-pointer font-semibold text-[#1D3952]">How do I get started?</summary>
                <p className="mt-3 leading-7">Use the <Link href="/contact" className="font-semibold text-[#238C93] underline underline-offset-4">Contact</Link> page to request a call back, or ask your Support at Home provider to contract NovaCare Nursing for your nursing services.</p>
              </details>
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </>
  );
}
