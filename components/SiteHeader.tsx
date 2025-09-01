import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const brandBlue = "#0B2D5C";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header style={{ backgroundColor: brandBlue }} className="shadow-sm">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        {/* Logo (left, bigger, doesn’t shrink) */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/NovaCare_Logo.svg"
            alt="NovaCare Nursing Logo"
            width={220}
            height={100}
            priority
          />
        </Link>

        {/* Desktop / tablet nav (RIGHT) */}
        <nav className="hidden md:flex items-center gap-10 lg:gap-12 text-white text-lg lg:text-xl font-semibold whitespace-nowrap">
          <Link href="/about" className="hover:opacity-80 transition">About</Link>
          <Link href="/services" className="hover:opacity-80 transition">Services</Link>
          <Link href="/contact" className="hover:opacity-80 transition">Contact</Link>
        </nav>

        {/* Mobile hamburger (RIGHT) */}
        <button
          className="md:hidden text-white"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          style={{ fontSize: 26, lineHeight: 1 }}
        >
          ☰
        </button>
      </div>

      {/* Mobile drawer (slides down) */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          open ? "max-h-64" : "max-h-0"
        }`}
      >
        <nav className="px-4 pb-4 flex flex-col gap-3 text-white text-lg font-semibold">
          <Link href="/about" className="hover:opacity-80 transition" onClick={() => setOpen(false)}>About</Link>
          <Link href="/services" className="hover:opacity-80 transition" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/contact" className="hover:opacity-80 transition" onClick={() => setOpen(false)}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}

