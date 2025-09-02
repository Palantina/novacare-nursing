import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BRAND_BLUE = "#0B2D5C";
const BRAND_GOLD = "#C6A662";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 shadow-sm border-t-4"
      style={{ backgroundColor: BRAND_BLUE, borderColor: BRAND_GOLD }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-2 flex items-center justify-between">
        {/* Logo (left) */}
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="Go to homepage">
          <Image
            src="/NovaCare_Logo.svg"
            alt="NovaCare Nursing Logo"
            width={230}
            height={100}
            priority
          />
        </Link>

        {/* Desktop nav (center) */}
        <nav
          className="hidden md:flex flex-1 justify-center items-center space-x-8 font-bold text-lg"
          style={{ color: BRAND_GOLD }}
          aria-label="Primary"
        >
          <Link className="hover:underline underline-offset-4 decoration-[2px]" href="/">Home</Link>
          <Link className="hover:underline underline-offset-4 decoration-[2px]" href="/about">About</Link>
          <Link className="hover:underline underline-offset-4 decoration-[2px]" href="/services">Services</Link>
          <Link className="hover:underline underline-offset-4 decoration-[2px]" href="/contact">Contact</Link>
        </nav>

        {/* Spacer to keep centered nav aligned with logo width */}
        <div className="hidden md:block w-[230px]" aria-hidden />

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden text-white/95 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-white/60"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.nav
            key="mobile"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="md:hidden px-4 sm:px-6 pb-4 flex flex-col gap-3 font-bold"
            style={{ color: BRAND_GOLD }}
            aria-label="Mobile primary"
          >
            <Link href="/" onClick={() => setOpen(false)} className="py-1 hover:underline underline-offset-4 decoration-[2px]">Home</Link>
            <Link href="/about" onClick={() => setOpen(false)} className="py-1 hover:underline underline-offset-4 decoration-[2px]">About</Link>
            <Link href="/services" onClick={() => setOpen(false)} className="py-1 hover:underline underline-offset-4 decoration-[2px]">Services</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="py-1 hover:underline underline-offset-4 decoration-[2px]">Contact</Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
