import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

const brandBlue = "#0B2D5C";
const brandGold = "#C6A662";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { pathname } = useRouter();

  const linkBase =
    "transition-colors hover:underline underline-offset-4 decoration-[2px] text-[1rem] md:text-[1.05rem] font-semibold";
  const active = (href: string) =>
    pathname === href ? "opacity-100" : "opacity-90 hover:opacity-100";

  return (
    <header
      className="sticky top-0 z-50 border-t-4"
      style={{ backgroundColor: brandBlue, borderColor: brandGold }}
      role="banner"
    >
      <div className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between">
        {/* Always show the GOLD wordmark on dark header */}
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="Go to homepage">
          <Image
            src="/NovaCare_Logo_Dark.svg"   // <- gold wordmark, stays visible
            alt="NovaCare Nursing"
            width={200}
            height={90}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className="hidden md:flex flex-1 justify-center items-center gap-8"
          style={{ color: brandGold }}
        >
          <Link href="/" className={`${linkBase} ${active("/")}`}>Home</Link>
          <Link href="/about" className={`${linkBase} ${active("/about")}`}>About</Link>
          <Link href="/services" className={`${linkBase} ${active("/services")}`}>Services</Link>
          <Link href="/contact" className={`${linkBase} ${active("/contact")}`}>Contact</Link>
        </nav>

        {/* Spacer to keep nav centered */}
        <div className="hidden md:block w-[200px]" />

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white pl-3 pr-1 py-1 rounded focus:outline-none focus:ring-2 focus:ring-white/60"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
          style={{ fontSize: 28, lineHeight: 1, background: "transparent", border: "none" }}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          aria-label="Mobile primary"
          className="md:hidden px-6 pb-5 flex flex-col gap-3"
          style={{ color: brandGold }}
        >
          <Link href="/" onClick={() => setOpen(false)} className={`${linkBase} ${active("/")}`}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)} className={`${linkBase} ${active("/about")}`}>About</Link>
          <Link href="/services" onClick={() => setOpen(false)} className={`${linkBase} ${active("/services")}`}>Services</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className={`${linkBase} ${active("/contact")}`}>Contact</Link>
        </nav>
      )}
    </header>
  );
}

