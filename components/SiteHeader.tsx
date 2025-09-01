import Link from "next/link";
import Image from "next/image";

const brandBlue = "#0B2D5C";

export default function SiteHeader() {
  return (
    <header style={{ backgroundColor: brandBlue }} className="shadow-sm">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        {/* Logo on the LEFT, bigger & bolder */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/NovaCare_Logo.svg"
            alt="NovaCare Nursing Logo"
            width={220}   // 🔹 increased size
            height={100}
            priority
          />
        </Link>

        {/* Nav links on the RIGHT */}
        <nav className="flex items-center gap-12 text-white text-xl font-semibold">
          <Link href="/about" className="hover:opacity-80 transition">About</Link>
          <Link href="/services" className="hover:opacity-80 transition">Services</Link>
          <Link href="/contact" className="hover:opacity-80 transition">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

