import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const brandBlue = "#0B2D5C";
const brandGold = "#C6A662";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 shadow-sm border-t-4"
      style={{ backgroundColor: brandBlue, borderColor: brandGold }}
    >
      <div className="mx-auto max-w-6xl px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/NovaCare_Logo.svg"
            alt="NovaCare Nursing Logo"
            width={230}
            height={100}
            priority
          />
        </Link>

        {/* Desktop nav (gold, centered, visible ≥ md) */}
        <nav
          className="hidden md:flex flex-1 justify-center items-center space-x-8 font-bold"
          style={{ color: brandGold }}
          aria-label="Primary"
        >
          <Link href="/" className="hover:underline underline-offset-4 decoration-[2px] text-lg">Home</Link>
          <Link href="/about" className="hover:underline underline-offset-4 decoration-[2px] text-lg">About</Link>
          <Link href="/services" className="hover:underline underline-offset-4 decoration-[2px] text-lg">Services</Link>
          <Link href="/contact" className="hover:underline underline-offset-4 decoration-[2px] text-lg">Contact</Link>
        </nav>

        {/* Spacer keeps nav centered */}
        <div className="hidden md:block w-[230px]" />

        {/* Mobile hamburger (only < md) */}
        <button
          className="md:hidden text-white"
          aria-label="Open menu"
          onClick={() => setOpen(!open)}
          style={{ fontSize: 28, lineHeight: 1, background: "transparent", border: "none" }}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu (gold links, stacked) */}
      {open && (
        <nav
          className="md:hidden px-6 pb-4 flex flex-col gap-3 font-bold"
          style={{ color: brandGold }}
          aria-label="Mobile primary"
        >
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  );
}

