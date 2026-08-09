import Link from "next/link";

export default function ContactCta() {
  return (
    <section className="bg-[#F8FCFD] px-4 pb-5 pt-10 sm:px-6 sm:pt-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#DCEDEF] bg-gradient-to-r from-[#EAF9FA] via-white to-[#F2EEFF] p-6 shadow-[0_18px_50px_rgba(29,57,82,0.08)] sm:p-8">
          <div
            aria-hidden="true"
            className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-[#A9ECE8]/25 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-20 -right-12 h-44 w-44 rounded-full bg-[#D7CEFF]/30 blur-3xl"
          />

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-semibold tracking-[-0.025em] text-[#1D3952] sm:text-3xl">
                Ready to discuss your care needs?
              </h3>

              <p className="mt-2 text-base leading-7 text-[#526B7C] sm:text-lg">
                Book a free, no-obligation consultation with NovaCare Nursing.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
              <Link
                href="/contact"
                className="inline-flex min-h-[50px] items-center justify-center rounded-2xl bg-[#2FBFC4] px-6 py-3 text-center font-semibold text-[#173B5C] shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[#59D6D0] hover:shadow-md focus:outline-none focus:ring-4 focus:ring-[#2FBFC4]/25"
              >
                Book a consultation
              </Link>

              <a
                href="tel:+61491303671"
                className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-2xl border border-[#D8D1F4] bg-white px-6 py-3 text-center font-semibold text-[#5C43A8] shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[#F7F4FF] hover:shadow-md focus:outline-none focus:ring-4 focus:ring-[#6E3BE8]/15"
              >
                <svg
                  aria-hidden="true"
                  className="h-4.5 w-4.5"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M8.5 3.5 11 8 8.8 9.8c1.1 2.3 3 4.2 5.3 5.3L16 13l4.5 2.5-.7 4c-.1.6-.7 1-1.3 1C10.2 20.5 3.5 13.8 3.5 5.5c0-.6.4-1.2 1-1.3l4-.7Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Call 0491 303 671
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
