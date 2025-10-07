import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const brandBlue = "var(--brand-blue)";
const brandGold = "var(--brand-gold)";

export default function SiteHeader() {
  const { pathname } = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // ✅ Automatically close dropdown when route changes
  useEffect(() => {
    setIsDropdownOpen(false);
  }, [pathname]);

  return (
    <header className="bg-[color:var(--brand-blue)] shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/NovaCare_Logo.svg"
                alt="NovaCare Nursing"
                width={240}
                height={70}
                priority
                className="w-36 h-auto sm:w-[240px]" // shrink slightly on mobile
              />
              <span
                className="ml-2 font-bold tracking-tight whitespace-nowrap text-2xl sm:text-3xl"
                style={{ color: brandBlue }}
              >
                NovaCare Nursing
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-4 sm:space-x-6">
            {/* Home */}
            <Link
              href="/"
              className={`text-sm md:text-base font-semibold hover:opacity-80 transition-opacity ${
                pathname === "/" ? "underline" : ""
              }`}
              style={{ color: brandGold }}
            >
              Home
            </Link>

            {/* About dropdown */}
            <div
              className="relative group"
              tabIndex={0}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                onClick={() => setIsDropdownOpen((v) => !v)}
                className={`text-sm md:text-base font-semibold hover:opacity-80 transition-opacity ${
                  pathname === "/about" ? "underline" : ""
                }`}
                style={{ color: brandGold }}
              >
                About
              </button>

              {/* Dropdown menu (touch + hover compatible) */}
              {isDropdownOpen && (
                <div
                  className="absolute left-0 top-full pt-2 z-50"
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
                      className="block whitespace-nowrap px-4 py-2 text-sm hover:opacity-90"
                      style={{ color: brandGold }}
                    >
                      About NovaCare Nursing
                    </Link>
                    <Link
                      href="/about-palantina"
                      className="block whitespace-nowrap px-4 py-2 text-sm hover:opacity-90"
                      style={{ color: brandGold }}
                    >
                      About Palantina
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Services */}
            <Link
              href="/services"
              className={`text-sm md:text-base font-semibold hover:opacity-80 transition-opacity ${
                pathname === "/services" ? "underline" : ""
              }`}
              style={{ color: brandGold }}
            >
              Services
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className={`text-sm md:text-base font-semibold hover:opacity-80 transition-opacity ${
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
