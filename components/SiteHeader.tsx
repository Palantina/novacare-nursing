import Link from "next/link";

const brandBlue = "#0B2D5C";
const brandGold = "#C6A642";

export default function SiteHeader() {
  return (
    <header style={{ backgroundColor: brandBlue }}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* a touch taller, like the original */}
        <div className="flex items-center justify-between h-18 md:h-20 py-2">
          {/* Logo + wordmark stacked exactly like the original */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/NovaCare_Logo.svg"
              alt="NovaCare Nursing"
              className="h-9 w-auto md:h-10"
            />
            <div className="leading-tight">
              <div className="text-white text-xl md:text-2xl font-semibold">NovaCare</div>
              <div className="text-[12px] md:text-[13px]" style={{ color: brandGold, marginTop: -2 }}>
                Nursing
              </div>
            </div>
          </Link>

          {/* Navigation – all gold like the original (not just the active item) */}
          <nav className="flex items-center gap-7 md:gap-9">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/services", label: "Services" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm md:text-base font-semibold hover:opacity-80 transition-opacity"
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
