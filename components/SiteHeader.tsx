import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const brandBlue = "#0B2D5C";
const brandGold = "#C6A662";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 shadow-sm"
      style={{ backgroundColor: brandBlue }}
    >
      {/* Top bar */}
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        {/* Logo (left, consistent size across all pages) */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/NovaCare_Logo.svg"
            alt="NovaCare Nursing Logo"
            width={220}   // keep consistent
            height={100}  // keep consistent
            priority
          />
        </Link>

        {/* Desktop / tablet nav (RIGHT) */}
        <nav
          className="hidden md:flex items-center gap-10 lg:gap-12 font-semibold whitespace-nowrap pr-6"
          style={{ color: brandGold }}
          aria-label="Primary"
        >
          <Link href="/" className="hover:opacity-80 transition">Home</Link>
          <Link href="/about" className="hover:opacity-80 transition">About</Link>
          <Link href="/services" className="hover:opacity-80 transition">Services</Link>
          <Link href="/contact" className="hover:opacity-80 transition">Contact</Link>
        </nav>

        {/* Mobile hamburger (RIGHT) */}
        <button
          className="md:hidden text-white"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          style={{ fontSize: 26, lineHeight: 1, paddingRight: 6 }} // a little breathing room from the right edge
        >
          ☰
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          open ? "max-h-64" : "max-h-0"
        }`}
      >
        <nav
          className="px-4 pb-4 flex flex-col gap-3 font-semibold"
          style={{ color: brandGold }}
          aria-label="Mobile primary"
        >
          <Link href="/" className="hover:opacity-80 transition" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" className="hover:opacity-80 transition" onClick={() => setOpen(false)}>About</Link>
          <Link href="/services" className="hover:opacity-80 transition" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/contact" className="hover:opacity-80 transition" onClick={() => setOpen(false)}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}

