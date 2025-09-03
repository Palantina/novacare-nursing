import Link from "next/link";

const brandBlue = "#0B2D5C";
const brandGold = "#C6A642";

export default function SiteHeader() {
  return (
    <header style={{ backgroundColor: brandBlue }}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo + wordmark */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/NovaCare_Logo.svg"
              alt="NovaCare Nursing"
              className="h-8 w-auto md:h-9"
            />
            <div className="leading-tight text-white">
              <div className="text-lg md:text-xl font-semibold">NovaCare</div>
              <div className="text-[12px] opacity-90 -mt-1">Nursing</div>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-6 md:gap-8">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/services", label: "Services" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm md:text-base font-semibold transition-opacity"
                style={{ color: brandGold }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
