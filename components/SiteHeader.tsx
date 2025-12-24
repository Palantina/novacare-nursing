import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const brandGold = "var(--brand-gold)";

type NavItem = { href: string; label: string; isActive?: (path: string) => boolean };

export default function SiteHeader() {
  const router = useRouter();
  const { pathname } = router;

  const [open, setOpen] = useState(false);

  const nav: NavItem[] = [
    { href: "/", label: "Home", isActive: (p) => p === "/" },
    { href: "/about", label: "About", isActive: (p) => p === "/about" || p.startsWith("/about-") },
    { href: "/services", label: "Services", isActive: (p) => p === "/services" },
    { href: "/private-nursing", label: "Private Nursing", isActive: (p) => p === "/private-nursing" },
    { href: "/fees", label: "Fees", isActive: (p) => p === "/fees" },
    { href: "/providers", label: "For Providers", isActive: (p) => p === "/providers" || p.startsWith("/providers/") },
    { href: "/contact", label: "Contact", isActive: (p) => p === "/contact" },
  ];

  // Close the mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="bg-[color:var(--brand-blue)] shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Brand */}
          <div className="flex items-center min-w-0">
            <Link href="/" className="flex items-center gap-2 min-w-0">
              <Image
                src="/NovaCare_Logo.svg"
                alt="NovaCare Nursing"
                width={240}
                height={70}
                priority
              />
              {/* Keep text subtle to avoid crowding on smaller screens */}
              <span
                className="hidden xl:block text-xl font-bold tracking-tight whitespace-nowrap"
                style={{ color: brandGold }}
              >
                NovaCare Nursing
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            {nav.map((item) => {
              const active = item.isActive ? item.isActive(pathname) : pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm md:text-base font-semibold hover:opacity-80 transition-opacity ${
                    active ? "underline" : ""
                  }`}
                  style={{ color: brandGold }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:opacity-90"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            style={{ color: brandGold }}
          >
            {/* Icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Mobile navigation panel */}
        {open && (
          <div
            id="mobile-nav"
            className="md:hidden pb-4"
          >
            <div className="mt-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-3 py-2">
              {nav.map((item) => {
                const active = item.isActive ? item.isActive(pathname) : pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block rounded-xl px-3 py-2 text-base font-semibold hover:bg-white/10 transition ${
                      active ? "underline" : ""
                    }`}
                    style={{ color: brandGold }}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
