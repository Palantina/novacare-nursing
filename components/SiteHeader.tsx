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
        {/* Logo (left, consistent size) */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/NovaCare_Logo.svg"
            alt="NovaCare Nursing Logo"
            width={220}
            height={100}
            priority
          />
        </Link>

        {/* Desktop nav (Home centered, gold, underline on hover only) */}
        <nav
          className="hidden md:flex flex-1 justify-center font-bold whitespace-nowrap"
          style={{ color: brandGold }}
          aria-label="Primary"
        >
          <Link
            href="/"
            className="text-xl lg:text-2xl hover:underline underline-offset-4 decoration-[2px] transition"
          >
            Home
          </Link>
        </nav>

        {/* Spacer to balance layout */}
        <div className="hidden md:block w-[220px]" />

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white pr-4"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          style={{ fontSize: 26, lineHeight: 1 }}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu (Home only, hover underline) */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          open ? "max-h-24" : "max-h-0"
        }`}
      >
        <nav
          className="px-6 pb-4 flex flex-col gap-3 font-bold"
          style={{ color: brandGold }}
          aria-label="Mobile primary"
        >
          <Link
            href="/"
            className="text-lg hover:underline underline-offset-4 decoration-[2px] transition"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
        </nav>
      </div>
    </header>
  );
}

