import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#DCEDEF] bg-[#F8FCFD] text-[#1D3952]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-9">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
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
              className="h-auto w-[190px] sm:w-[205px]"
            />
          </Link>

          <a
            href="mailto:info@novacarenursing.com.au"
            className="inline-flex w-fit items-center gap-2.5 font-semibold text-[#1D3952] transition-colors hover:text-[#6E3BE8]"
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

        <div className="mt-6 flex flex-col gap-4 border-t border-[#DCEDEF] pt-5 text-sm text-[#6B7F8E] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} NovaCare Nursing. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
            <span>Hobart &amp; Surrounds, Tasmania</span>

            <Link
              href="/privacy"
              className="font-medium text-[#526B7C] transition-colors hover:text-[#6E3BE8]"
            >
              Privacy Policy
            </Link>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 font-semibold text-[#238C93] transition-colors hover:text-[#1D6F75]"
              aria-label="Back to top"
            >
              <svg
                aria-hidden="true"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="m7 11 5-5 5 5M12 6v12"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
