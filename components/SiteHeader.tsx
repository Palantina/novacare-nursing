import Link from "next/link";
import Image from "next/image";

const brandBlue = "#0B2D5C";

export default function SiteHeader() {
  return (
    <header style={{ backgroundColor: brandBlue }} className="shadow-sm">
      <div
        className="
          mx-auto max-w-6xl px-4 py-4
          flex items-center justify-between
          flex-nowrap
        "
      >
        {/* Logo (doesn't shrink, prevents wrapping) */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/NovaCare_Logo.svg"
            alt="NovaCare Nursing Logo"
            width={160}
            height={70}
            priority
          />
        </Link>

        {/* Nav on the RIGHT with clear spacing */}
        <nav
          className="
            flex items-center justify-end
            gap-6 md:gap-8
            text-white text-base md:text-lg
            ml-auto
          "
        >
          <Link href="/about" className="hover:opacity-80 transition">About</Link>
          <Link href="/services" className="hover:opacity-80 transition">Services</Link>
          <Link href="/contact" className="hover:opacity-80 transition">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

