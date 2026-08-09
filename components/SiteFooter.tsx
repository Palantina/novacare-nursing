import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#DCEDEF] bg-[#F8FCFD] text-[#1D3952]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.9fr_0.7fr] lg:gap-14">
          <div>
            <Link
              href="/"
              className="inline-flex items-center"
              aria-label="NovaCare Nursing home"
            >
              <Image
                src="/NovaCare_Logo_Light.svg"
                alt="NovaCare Nursing"
                width={720}
                height={200}
                className="h-auto w-[230px] sm:w-[255px]"
              />
            </Link>

            <p className="mt-5 max-w-md text-base leading-7 text-[#526B7C]">
              Expert nursing at home across Hobart, the Huon Valley, the Derwent
              Valley and surrounding areas.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#D8D1F4] bg-[#F2EEFF] px-4 py-2 text-sm font-semibold text-[#5C43A8]">
              <span
                aria-hidden="true"
                className="h-2.5 w-2.5 rounded-full bg-[#6E3BE8]"
              />
              Available 24 hours • 7 days
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2B9FA5]">
              Contact
            </p>

            <div className="mt-5 space-y-4 text-[#526B7C]">
              <a
                href="tel:+61491303671"
                className="group flex items-start gap-3 transition-colors hover:text-[#238C93]"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EAF9FA] text-[#238C93]"
                >
                  <svg
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
                </span>

                <span className="pt-1.5 font-semibold text-[#1D3952] transition-colors group-hover:text-[#238C93]">
                  0491 303 671
                </span>
              </a>

              <a
                href="mailto:info@novacarenursing.com.au"
                className="group flex items-start gap-3 transition-colors hover:text-[#6E3BE8]"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F2EEFF] text-[#6E3BE8]"
                >
                  <svg
                    className="h-4.5 w-4.5"
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

                <span className="break-all pt-1.5 font-semibold text-[#1D3952] transition-colors group-hover:text-[#6E3BE8]">
                  info@novacarenursing.com.au
                </span>
              </a>

              <div className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EEF4FF] text-[#5274D8]"
                >
                  <svg
                    className="h-4.5 w-4.5"
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

                <span className="pt-1.5 leading-6">
                  Hobart &amp; Surrounds, Tasmania
                </span>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6E3BE8]">
              Explore
            </p>

            <nav className="mt-5 flex flex-col gap-3" aria-label="Footer navigation">
              {[
                { href: "/", label: "Home" },
                { href: "/private-nursing", label: "Nursing at Home" },
                { href: "/services", label: "Services" },
                { href: "/providers", label: "For Providers" },
                { href: "/fees", label: "Fees" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group inline-flex w-fit items-center gap-2 font-medium text-[#526B7C] transition-colors hover:text-[#238C93]"
                >
                  <span
                    aria-hidden="true"
                    className="text-[#2FBFC4] transition-transform duration-200 group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[#DCEDEF] pt-6 text-sm text-[#6B7F8E] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} NovaCare Nursing. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span>Tasmanian owned and operated</span>
            <Link
              href="/privacy"
              className="font-medium text-[#526B7C] transition-colors hover:text-[#6E3BE8]"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
