import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const brandBlue = "var(--brand-blue)";
const brandGold = "var(--brand-gold)";

export default function SiteHeader() {
  const { pathname } = useRouter();
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
              />
              <span
                className="ml-2 text-3xl font-bold tracking-tight whitespace-nowrap"
                style={{ color: brandBlue }}
              >
                NovaCare Nursing
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex space-x-6 items-center">
            {/* ✅ Home (added) */}
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
            <div className="relative group" tabIndex={0}>
              <Link
                href="/about"
                className={`text-sm md:text-base font-semibold hover:opacity-80 transition-opacity ${
                  pathname === "/about" ? "underline" : ""
                }`}
                style={{ color: brandGold }}
              >
                About
              </Link>

              {/* Dropdown menu */}
              <div className="absolute left-0 mt-2 hidden group-hover:block group-focus:block z-50">
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
            </div>

            <Link
              href="/services"
              className={`text-sm md:text-base font-semibold hover:opacity-80 transition-opacity ${
                pathname === "/services" ? "underline" : ""
              }`}
              style={{ color: brandGold }}
            >
              Services
            </Link>

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
