import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const heroImage = "/novacare-home-nursing-hero.webp";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const textAnimation = reduceMotion
    ? {
        initial: { opacity: 1, y: 0 },
        animate: { opacity: 1, y: 0 },
      }
    : {
        initial: { opacity: 0, y: 24 },
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
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] lg:items-center lg:gap-8">
          {/* Real photograph — no text or overlays */}
          <motion.div
            initial={imageAnimation.initial}
            animate={imageAnimation.animate}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="relative order-1 aspect-[3/2] w-full overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_70px_rgba(29,57,82,0.14)] lg:order-2"
          >
            <Image
              src={heroImage}
              alt="A nurse discussing medication with a man and woman in their home"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 52vw"
              className="object-cover object-center"
            />
          </motion.div>

          {/* All written content is separate from the photograph */}
          <motion.div
            initial={textAnimation.initial}
            animate={textAnimation.animate}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
            className="order-2 rounded-[2rem] border border-[#E2ECEF] bg-white p-6 shadow-sm sm:p-8 lg:order-1 lg:p-10"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2B9FA5] sm:text-base">
              Home, Health &amp; Living
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-[1.07] tracking-[-0.04em] text-[#1D3952] sm:text-5xl lg:text-[3.45rem]">
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

            <div className="mt-8">
              <h2 className="text-2xl font-semibold tracking-[-0.025em] text-[#1D3952]">
                You choose who provides your care.
              </h2>

              <p className="mt-4 text-lg leading-8 text-[#526B7C]">
                Book NovaCare Nursing privately.
              </p>

              <p className="mt-4 text-lg leading-8 text-[#526B7C]">
                If you receive aged care or NDIS services, ask your current
                provider to engage NovaCare Nursing. We can partner with them to
                provide our nursing care in your home, coordinate with your care
                team and keep your choices at the centre.
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
                Ask your provider to engage us
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Supporting information sits below both columns */}
        <motion.div
          initial={textAnimation.initial}
          animate={textAnimation.animate}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.18 }}
          className="mt-6 grid gap-4 md:grid-cols-3"
        >
          <div className="rounded-2xl border border-[#DCEDEF] bg-[#EAF9FA] p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <span
                aria-hidden="true"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#2B9FA5] shadow-sm"
              >
                <svg
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
              </span>

              <div>
                <h3 className="text-lg font-semibold text-[#1D3952]">
                  Coordinated clinical care
                </h3>

                <p className="mt-1 leading-7 text-[#526B7C]">
                  With your consent, we liaise with your GP, specialists,
                  pharmacists and healthcare team when required.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[#E3DDFB] bg-[#F2EEFF] p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <span
                aria-hidden="true"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#6E3BE8] shadow-sm"
              >
                <svg
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
                    d="M12 7v5l3 2"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              <div>
                <h3 className="text-lg font-semibold text-[#1D3952]">
                  Available 24 hours • 7 days
                </h3>

                <p className="mt-1 leading-7 text-[#526B7C]">
                  Experienced nursing support when health needs change or help
                  is difficult to access.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[#DCE8F0] bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <span
                aria-hidden="true"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EAF9FA] text-[#2B9FA5]"
              >
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              <div>
                <h3 className="text-lg font-semibold text-[#1D3952]">
                  Your health. Your home. Your terms.
                </h3>

                <p className="mt-1 leading-7 text-[#526B7C]">
                  Experience, choice and availability. That is the NovaCare
                  difference.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
