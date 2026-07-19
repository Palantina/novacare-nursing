import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type NavItem = {
  href: string;
  label: string;
  isActive: (path: string) => boolean;
};

const navItems: NavItem[] = [
  {
    href: "/",
    label: "Home",
    isActive: (path) => path === "/",
  },
  {
    href: "/private-nursing",
    label: "Nursing at Home",
    isActive: (path) => path === "/private-nursing",
  },
  {
    href: "/services",
    label: "Services",
    isActive: (path) => path === "/services",
  },
  {
    href: "/providers",
    label: "For Providers",
    isActive: (path) =>
      path === "/providers" || path.startsWith("/providers/"),
  },
  {
    href: "/about",
    label: "About",
    isActive: (path) =>
      path === "/about" || path.startsWith("/about-"),
  },
  {
    href: "/fees",
    label: "Fees",
    isActive: (path) => path === "/fees",
  },
];

export default function SiteHeader() {
  const router = useRouter();
  const { pathname } = router;

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 font-sans">
      {/* Availability and location strip */}
      <div className="bg-[#F2EEFF] text-[#1D3952]">
        <div className="mx-auto flex min-h-[44px] max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm font-semibold sm:text-base">
            <svg
              aria-hidden="true"
              className="h-5 w-5 shrink-0 text-[#6E3BE8]"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <path
                d="M12 7v5l3 2"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span>Available 24 hours • 7 days</span>
          </div>

          <div className="hidden text-center text-sm font-medium md:block">
            Hobart • Huon Valley • Derwent Valley • Surrounds
          </div>

          <a
            href="tel:+61491303671"
            className="flex shrink-0 items-center gap-2 text-sm font-semibold transition-colors hover:text-[#5274D8] sm:text-base"
            aria-label="Call NovaCare Nursing on 0491 303 671"
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
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

            <span className="hidden sm:inline">0491 303 671</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <div className="border-b border-[#E4EEF1] bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-[92px] items-center justify-between gap-6">
            <Link
              href="/"
              className="flex min-w-0 items-center"
              aria-label="NovaCare Nursing home"
            >
              <Image
                src="/NovaCare_Logo_Light.svg"
                alt="NovaCare Nursing"
                width={720}
                height={200}
                priority
                className="h-auto w-[210px] sm:w-[245px] lg:w-[275px]"
              />
            </Link>

            {/* Desktop navigation */}
            <div className="hidden items-center gap-7 lg:flex">
              <nav
                className="flex items-center gap-6"
                aria-label="Primary navigation"
              >
                {navItems.map((item) => {
                  const active = item.isActive(pathname);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`relative py-3 text-[15px] font-medium transition-colors ${
                        active
                          ? "text-[#1D3952]"
                          : "text-[#445E72] hover:text-[#1D3952]"
                      }`}
                    >
                      {item.label}

                      {active && (
                        <span
                          aria-hidden="true"
                          className="absolute inset-x-0 -bottom-0.5 h-[3px] rounded-full bg-[#2FBFC4]"
                        />
                      )}
                    </Link>
                  );
                })}
              </nav>

              <Link
                href="/contact"
                className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-[#2FBFC4] px-6 py-3 text-base font-semibold text-[#173B5C] shadow-sm transition hover:bg-[#59D6D0] focus:outline-none focus:ring-4 focus:ring-[#2FBFC4]/25"
              >
                Contact us
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#D8E7EB] bg-white text-[#1D3952] transition hover:bg-[#EFFAFC] focus:outline-none focus:ring-4 focus:ring-[#2FBFC4]/20 lg:hidden"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((current) => !current)}
            >
              {menuOpen ? (
                <svg
                  aria-hidden="true"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="m6 6 12 12M18 6 6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg
                  aria-hidden="true"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile navigation */}
          {menuOpen && (
            <div
              id="mobile-navigation"
              className="border-t border-[#E4EEF1] pb-5 pt-3 lg:hidden"
            >
              <nav
                className="flex flex-col gap-1"
                aria-label="Mobile navigation"
              >
                {navItems.map((item) => {
                  const active = item.isActive(pathname);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`rounded-xl px-4 py-3 text-base font-medium transition ${
                        active
                          ? "bg-[#EFFAFC] text-[#1D3952]"
                          : "text-[#445E72] hover:bg-[#F5FAFC] hover:text-[#1D3952]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}

                <Link
                  href="/contact"
                  className="mt-2 inline-flex min-h-[50px] items-center justify-center rounded-2xl bg-[#2FBFC4] px-5 py-3 text-base font-semibold text-[#173B5C]"
                >
                  Contact us
                </Link>
              </nav>

              <div className="mt-4 border-t border-[#E4EEF1] px-4 pt-4 text-sm leading-6 text-[#445E72]">
                <p className="font-semibold text-[#1D3952]">
                  Hobart • Huon Valley • Derwent Valley • Surrounds
                </p>
                <p>Proudly Tasmanian owned and operated</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
