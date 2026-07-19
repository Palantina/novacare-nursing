import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const heroImage = "/novacare-home-nursing-hero.webp";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const enterAnimation = reduceMotion
    ? {
        initial: { opacity: 1, y: 0 },
        animate: { opacity: 1, y: 0 },
      }
    : {
        initial: { opacity: 0, y: 22 },
        animate: { opacity: 1, y: 0 },
      };

  const imageAnimation = reduceMotion
    ? {
        initial: { opacity: 1, scale: 1 },
        animate: { opacity: 1, scale: 1 },
      }
    : {
        initial: { opacity: 0, scale: 0.985 },
        animate: { opacity: 1, scale: 1 },
      };

  return (
    <section className="overflow-hidden bg-[#F8FCFD] font-sans">
      {/* Opening hero */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-stretch lg:gap-8">
          {/* Real photograph — no text or overlays */}
          <motion.div
            initial={imageAnimation.initial}
            animate={imageAnimation.animate}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="relative order-1 aspect-[3/2] w-full overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_70px_rgba(29,57,82,0.14)] lg:order-2 lg:aspect-auto lg:min-h-[520px]"
          >
            <Image
              src={heroImage}
              alt="A nurse discussing medication and clinical care with a couple in their home"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 52vw"
              className="object-cover object-center"
            />
          </motion.div>

          {/* All wording remains separate from the photograph */}
          <motion.div
            initial={enterAnimation.initial}
            animate={enterAnimation.animate}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
            className="order-2 flex rounded-[2rem] border border-[#E2ECEF] bg-white p-6 shadow-sm sm:p-8 lg:order-1 lg:min-h-[520px] lg:p-10"
          >
            <div className="flex w-full flex-col justify-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2B9FA5] sm:text-base">
                Home, Health &amp; Living
              </p>

              <h1 className="mt-5 text-4xl font-semibold leading-[1.07] tracking-[-0.04em] text-[#1D3952] sm:text-5xl lg:text-[3.4rem]">
                Expert nursing.
                <span className="mt-2 block">Let us partner with you.</span>
              </h1>

              <div
                aria-hidden="true"
                className="mt-6 h-1.5 w-36 rounded-full bg-[#2FBFC4]"
              />

              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#526B7C]">
                Comprehensive clinical assessment and nursing care at home—for
                children aged six and over, adults and older people.
              </p>

              <div className="mt-7">
                <h2 className="text-2xl font-semibold tracking-[-0.025em] text-[#1D3952]">
                  You choose who provides your care.
                </h2>

                <p className="mt-4 text-lg leading-8 text-[#526B7C]">
                  Book privately, or choose NovaCare Nursing through your
                  current service provider.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[54px] items-center justify-center rounded-2xl bg-[#2FBFC4] px-6 py-3 text-center text-base font-semibold text-[#173B5C] shadow-sm transition hover:bg-[#59D6D0] focus:outline-none focus:ring-4 focus:ring-[#2FBFC4]/25"
                >
                  Book private nursing
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex min-h-[54px] items-center justify-center rounded-2xl border-2 border-[#6E3BE8] bg-white px-6 py-3 text-center text-base font-semibold text-[#1D3952] transition hover:bg-[#F2EEFF] focus:outline-none focus:ring-4 focus:ring-[#6E3BE8]/15"
                >
                  Nursing through your provider
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Next section appears naturally as the visitor scrolls */}
      <motion.div
        initial={
          reduceMotion
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 28 }
        }
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="border-y border-[#E2ECEF] bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6E3BE8] sm:text-base">
              Your care. Your choice.
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#1D3952] sm:text-4xl">
              How NovaCare can work with you
            </h2>

            <p className="mt-4 text-lg leading-8 text-[#526B7C]">
              Clear choices, coordinated care and experienced nursing in the
              comfort of your home.
            </p>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-3">
            <article className="rounded-[1.75rem] border border-[#DCEDEF] bg-[#EAF9FA] p-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#2B9FA5] shadow-sm">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M4 11.5 12 5l8 6.5V20H4v-8.5Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.5 20v-5h5v5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h3 className="mt-5 text-xl font-semibold text-[#1D3952]">
                Private nursing
              </h3>

              <p className="mt-3 leading-7 text-[#526B7C]">
                Book NovaCare Nursing directly for comprehensive clinical
                assessment, practical nursing care, palliative support,
                advocacy, or help after illness, injury or hospital discharge.
              </p>
            </article>

            <article className="rounded-[1.75rem] border border-[#E3DDFB] bg-[#F2EEFF] p-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#6E3BE8] shadow-sm">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M8.5 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM15.5 11a3.5 3.5 0 1 0 0-7"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                  <path
                    d="M2.5 20v-2.2c0-2.7 2.2-4.8 4.8-4.8h2.4c2.6 0 4.8 2.1 4.8 4.8V20M15.2 13h1.5c2.6 0 4.8 2.1 4.8 4.8V20"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <h3 className="mt-5 text-xl font-semibold text-[#1D3952]">
                Through your provider
              </h3>

              <p className="mt-3 leading-7 text-[#526B7C]">
                If you receive aged care or NDIS services, ask your provider to
                engage NovaCare Nursing. We partner with them to provide our
                nursing care in your home while keeping your needs,
                preferences and choices at the centre.
              </p>
            </article>

            <article className="rounded-[1.75rem] border border-[#DCE8F0] bg-[#F7FAFC] p-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#5274D8] shadow-sm">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                  <path
                    d="M8.5 12h7M12 8.5v7"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <h3 className="mt-5 text-xl font-semibold text-[#1D3952]">
                Coordinated clinical care
              </h3>

              <p className="mt-3 leading-7 text-[#526B7C]">
                With your consent, we liaise with your GP, specialists,
                pharmacists and other members of your healthcare team when
                required.
              </p>
            </article>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[#E2ECEF] pt-6 text-base font-medium text-[#526B7C]">
            <span>Available 24 hours • 7 days</span>

            <span aria-hidden="true">•</span>

            <span>Hobart • Huon Valley • Derwent Valley • Surrounds</span>

            <span aria-hidden="true">•</span>

            <span className="font-semibold text-[#1D3952]">
              Proudly Tasmanian owned and operated
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
