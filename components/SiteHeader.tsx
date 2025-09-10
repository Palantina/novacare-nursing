import Link from "next/link";
import Image from "next/image";

const brandBlue = "var(--brand-blue)";
const brandGold = "var(--brand-gold)";

export default function SiteHeader() {
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
                width={160}   // ⬅️ Option A (slightly larger)
                height={50}
                priority
              />
              <span
                className="ml-3 text-xl font-bold tracking-tight" // ⬅️ bumped from text-lg
                style={{ color: brandBlue }}
              >
                NovaCare Nursing
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex space-x-6">
            <Link
              href="/about"
              className="text-sm md:text-base font-semibold hover:opacity-80 transition-opacity"
              style={{ color: brandGold }}
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-sm md:text-base font-semibold hover:opacity-80 transition-opacity"
              style={{ color: brandGold }}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-sm md:text-base font-semibold hover:opacity-80 transition-opacity"
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
