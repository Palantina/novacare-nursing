import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const brandBlue = "var(--brand-blue)";
const brandGold = "var(--brand-gold)";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

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
                width={160}
                height={50}
                priority
              />
              <span
                className="ml-3 text-xl font-bold tracking-tight"
                style={{ color: brandBlue }}
              >
                NovaCare Nursing
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex space-x-6">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm md:text-base font-semibold hover:opacity-80 transition-opacity ${
                  pathname === href ? "underline" : ""
                }`}
                style={{ color: brandGold }}
                aria-current={pathname === href ? "page" : undefined}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
