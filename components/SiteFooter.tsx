import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#DCEDEF] bg-[#F8FCFD] text-[#1D3952]">
      <div className="mx-auto max-w-7xl px-4 py-9 sm:px-6 lg:px-8 lg:py-10">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
          <Link
            href="/"
            className="inline-flex w-fit items-center"
            aria-label="NovaCare Nursing home"
          >
            <Image
              src="/NovaCare_Logo_Light.svg"
              alt="NovaCare Nursing"
              width={720}
              height={200}
              className="h-auto w-[205px] sm:w-[225px]"
            />
          </Link>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
            <a
              href="tel:+61491303671"
              className="inline-flex min-h-[46px] items-center gap-3 rounded-2xl border border-[#CFEAEC] bg-white px-4 py-2.5 font-semibold text-[#1D3952] shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <span
                aria-hidden="true"
                className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#EAF9FA] text-[#238C93]"
              >
                <svg
                  className="h-4 w-4"
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
              </span>
              0491 303 671
            </a>

            <a
              href="mailto:info@novacarenursing.com.au"
              className="inline-flex min-h-[46px] items-center gap-3 rounded-2xl border border-[#E3DDFB] bg-white px-4 py-2.5 font-semibold text-[#1D3952] shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <span
                aria-hidden="true"
                className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#F2EEFF] text-[#6E3BE8]"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect
                    x="3.5"
                    y="5"
                    width="17"
                    height="14"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                  <path
                    d="m5 7 7 5 7-5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="break-all">info@novacarenursing.com.au</span>
            </a>
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-3 border-t border-[#DCEDEF] pt-5 text-sm text-[#6B7F8E] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} NovaCare Nursing. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span>Hobart &amp; Surrounds, Tasmania</span>

            <span aria-hidden="true" className="hidden text-[#B8C7CF] sm:inline">
              •
            </span>

            <Link
              href="/privacy"
              className="font-medium text-[#526B7C] transition-colors hover:text-[#6E3BE8]"
            >
              Privacy Policy
            </Link>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 rounded-full border border-[#DCEDEF] bg-white px-3.5 py-2 font-semibold text-[#1D3952] shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-[#BFDDE0] hover:text-[#238C93] hover:shadow-md"
              aria-label="Back to top"
            >
              <span aria-hidden="true">↑</span>
              Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
