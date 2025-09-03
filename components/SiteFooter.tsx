import Link from "next/link";

const brandBlue = "#0B2D5C";
const brandGold = "#C6A642";

export default function SiteFooter() {
  return (
    <footer style={{ backgroundColor: brandBlue }}>
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-10 text-white">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Left: logo + tagline */}
          <div className="flex items-start gap-3">
            <img
              src="/NovaCare_Logo.svg"
              alt="NovaCare Nursing"
              className="h-10 w-auto mt-1"
            />
            <div>
              <div className="text-lg font-semibold text-white">NovaCare</div>
              <div className="text-sm -mt-1" style={{ color: brandGold }}>Nursing</div>
              <div className="mt-3 font-semibold" style={{ color: brandGold }}>
                Premium Nursing, Heartfelt Care
              </div>
            </div>
          </div>

          {/* Middle: contact info */}
          <div>
            <ul className="space-y-2">
              <li>Hobart and surrounds, Tasmania</li>
              <li>
                <a href="tel:+61488086271" className="hover:underline">
                  0488 086 271
                </a>
              </li>
              <li>
                <a href="mailto:info@novacarenursing.com.au" className="hover:underline">
                  info@novacarenursing.com.au
                </a>
              </li>
            </ul>
          </div>

          {/* Right: quick links */}
          <div>
            <div className="font-semibold mb-3" style={{ color: brandGold }}>
              Quick Links
            </div>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/services" className="hover:underline">Services</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center text-xs opacity-80">
          © {new Date().getFullYear()} NovaCare Nursing. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
