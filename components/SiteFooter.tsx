import Image from "next/image";

const brandBlue = "#0B2D5C";

export default function SiteFooter() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Image
            src="/NovaCare_Logo_Transparent.svg"
            alt="NovaCare Nursing Logo"
            width={150}
            height={64}
          />
          <span className="text-sm" style={{ color: brandBlue }}>
            Premium Nursing, Heartfelt Care
          </span>
        </div>
        <div className="text-sm opacity-80">
          © {new Date().getFullYear()} NovaCare Nursing — Hobart &amp; Surrounds, Tasmania
        </div>
      </div>
    </footer>
  );
}
