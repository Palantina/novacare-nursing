import Link from "next/link";
import Image from "next/image";

const brandBlue = "#0B2D5C";
const brandGold = "#C6A662";

type Props = {
  hideContactInfo?: boolean; // Option to hide contact info if needed
};

export default function SiteFooter({ hideContactInfo = false }: Props) {
  return (
    <footer
      style={{ backgroundColor: brandBlue }}
      className="py-10 mt-16 text-sm"
    >
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
        {/* Logo and tagline */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <Image
            src="/NovaCare_Logo.svg"
            alt="NovaCare Nursing Logo"
            width={200}
            height={90}
            priority
          />
          <p style={{ color: brandGold }} className="font-semibold">
            Premium Nursing, Heartfelt Care
          </p>
        </div>

        {/* Contact info (can be hidden via prop) */}
        {!hideContactInfo && (
          <div style={{ color: brandGold }}>
            <p>📍 Hobart and surrounds, Tasmania</p>
            <p>
              📞{" "}
              <a
                href="tel:+61488086271"
                className="hover:underline"
                style={{ color: brandGold }}
              >
                0488 086 271
              </a>
            </p>
            <p>
              ✉{" "}
              <a
                href="mailto:info@novacarenursing.com.au"
                className="hover:underline"
                style={{ color: brandGold }}
              >
                info@novacarenursing.com.au
              </a>
            </p>
          </div>
        )}

        {/* Quick links */}
        <div className="space-y-2" style={{ color: brandGold }}>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="space-y-1">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 text-center text-xs text-gray-300 opacity-70">
        © {new Date().getFullYear()} NovaCare Nursing. All Rights Reserved.
      </div>
    </footer>
  );
}
