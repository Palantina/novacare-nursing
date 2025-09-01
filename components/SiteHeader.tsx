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
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        {/* Logo (left, slightly larger) */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/NovaCare_Logo.svg"
            alt="NovaCare Nursing Logo"
            width={250}
            height={110}
            priority
          />
        </Link>

        {/* Desktop nav (centered, gold, evenly spaced) */}
        <nav
          className="hidden md:flex flex-1 justify-center items-center space-x-8 lg:space-x-12 font-bold"
          style={{ color: brandGold }}
          aria-label="Primary"
        >
          <Link href="/" className="hover:underline underline-offset-4 decoration-[2px] text-lg lg:text-xl">
            Home
          </Link>
          <Link href="/about" className="hover:underline underline-offset-4 decoration-[2px] text-lg lg:text-xl">
            About
          </Link>
          <Link href="/services" className="hover:underline underline-offset-4 decoration-[2px] text-lg lg:text-xl">
            Services
          </Link>
          <Link href="/contact" className="hover:underline underline-offset-4 decoration-[2px] text-lg lg:text-xl">
            Contact
          </Link>
        </nav>

        {/* Right spacer to keep balance */}
        <div className="hidden md:block w-[250px]" />

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white pr-2"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          style={{ fontSize: 26, lineHeight: 1, background: "transparent", border: "none", padding: 0 }}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          open ? "max-h-64" : "max-h-0"
        }`}
      >
        <nav
          className="px-6 pb-4 flex flex-col gap-3 font-bold"
          style={{ color: brandGold }}
          aria-label="Mobile primary"
        >
          <Link href="/" className="text-lg hover:underline underline-offset-4 decoration-[2px]" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/about" className="text-lg hover:underline underline-offset-4 decoration-[2px]" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href="/services" className="text-lg hover:underline underline-offset-4 decoration-[2px]" onClick={() => setOpen(false)}>
            Services
          </Link>
          <Link href="/contact" className="text-lg hover:underline underline-offset-4 decoration-[2px]" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

