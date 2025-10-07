import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const brandBlue = "var(--brand-blue)";
const brandGold = "var(--brand-gold)";

export default function SiteHeader() {
  const { pathname } = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Close dropdown when route changes
  useEffect(() => setIsDropdownOpen(false), [pathname]);

  return (
    <header className="bg-[color:var(--brand-blue)] shadow-md">
      <div className="mx-auto w-full px-3 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center h-auto sm:h-16 py-2 sm:py-0">
          {/* Logo + Brand */}
          <div className="flex items-center flex-shrink">
            <Link href="/" className="flex items-center">
              <Image
                src="/NovaCare_Logo.svg"
                alt="NovaCare Nursing"
                width={240}
                height={70}
                priority
                className="w-32 sm:w-48 md:w-[240px] h-auto"
              />
              <span
                className="ml-2 font-bold tracking-tight whitespace-nowrap text-xl sm:text-2xl md:text-3xl"
                style={{ color: brandBlue }}
              >
                NovaCare Nursing
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-end space-x-3 sm:space-x-5 mt-2 sm:mt-0">
            <Link
              href="/"
              className={`text-xs sm:text-sm md:text-base font-semibold hover:opacity-80 transition-opacity ${
                pathname === "/" ? "underline" : ""
              }`}
              style={{ color: brandGold }}
            >
              Home
            </Link>

            {/* About dropdown */}
            <div className="relative flex items-center">
              <button
                onClick={() => setIsDropdownOpen((v) => !v)}
                className={`text-xs sm:text-sm md:text-base font-semibold hover:opacity-80 transition-opacity ${
                  pathname === "/about" ? "underline" : ""
                }`}
                style={{ color: brandGold }}
              >
                About
              </button>

              {/* Dropdown menu — now single-tap friendly */}
              {isDropdownOpen && (
                <div
                  className="absolute left-0 top-full pt-1 sm:pt-2 z-50"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <div
                    className="rounded-md shadow-lg border backdrop-blur p-2"
                    style={{
                      backgroundColor: "rgba(11,45,92,0.95)", // navy overlay
                      borderColor: brandGold,
                    }}
                  >
                    <Link
                      href="/about"
                      className="block whitespace-nowrap px-3 py-1 text-xs sm:text-sm hover:opacity-90"
                      style={{ color: brandGold }}
                    >
                      About NovaCare Nursing
                    </Link>
                    <Link
                      href="/about-palantina"
                      className="block whitespace-nowrap px-3 py-1 text-xs sm:text-sm hover:opacity-90"
                      style={{ color: brandGold }}
                    >
                      About Palantina
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/services"
              className={`text-xs sm:text-sm md:text-base font-semibold hover:opacity-80 transition-opacity ${
                pathname === "/services" ? "underline" : ""
              }`}
              style={{ color: brandGold }}
            >
              Services
            </Link>

            <Link
              href="/contact"
              className={`text-xs sm:text-sm md:text-base font-semibold hover:opacity-80 transition-opacity ${
                pathname === "/contact" ? "underline" : ""
              }`}
              style={{ color: brandGold }}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
