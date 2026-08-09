import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#F8FCFD] px-4 pb-8 pt-3 text-[#1D3952] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-[#DCEDEF] bg-white px-6 py-7 shadow-[0_14px_40px_rgba(29,57,82,0.07)] sm:px-8 lg:px-9">
          <div
            aria-hidden="true"
            className="absolute -left-16 -top-16 h-36 w-36 rounded-full bg-[#DDF5F5]/45 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-20 right-16 h-40 w-40 rounded-full bg-[#EAE1FC]/35 blur-3xl"
          />

          <div className="relative grid gap-7 md:grid-cols-[1.05fr_1fr_auto] md:items-center md:gap-8">
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
                className="h-auto w-[190px] sm:w-[210px]"
              />
            </Link>

            <div className="space-y-3">
              <a
                href="mailto:info@novacarenursing.com.au"
                className="group inline-flex items-center gap-3 text-sm font-semibold text-[#1D3952] transition-colors hover:text-[#6E3BE8] sm:text-base"
              >
                <span
                  aria-hidden="true"
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F2EEFF] text-[#6E3BE8]"
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

                <span className="break-words">
                  info@novacarenursing.com.au
                </span>
              </a>

              <div className="flex items-center gap-3 text-sm text-[#526B7C] sm:text-base">
                <span
                  aria-hidden="true"
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EAF9FA] text-[#238C93]"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 12.2a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />
                  </svg>
                </span>

                <span>Hobart &amp; Surrounds, Tasmania</span>
              </div>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="group inline-flex w-fit items-center gap-2 rounded-2xl border border-[#D7EEF0] bg-[#F4FBFB] px-4 py-3 text-sm font-semibold text-[#238C93] transition duration-200 hover:-translate-y-0.5 hover:border-[#B9E1E3] hover:bg-[#EAF9FA] sm:text-base md:justify-self-end"
              aria-label="Back to top"
            >
              <svg
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5"
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

        <div className="flex flex-col gap-2 px-1 pt-4 text-xs text-[#7B8D99] sm:flex-row sm:items-center sm:justify-between sm:text-sm">
          <p>
            © {new Date().getFullYear()} NovaCare Nursing. All rights reserved.
          </p>

          <Link
            href="/privacy"
            className="w-fit font-medium text-[#526B7C] transition-colors hover:text-[#6E3BE8]"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
