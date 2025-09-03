import Link from "next/link";
import Image from "next/image";

const brandBlue = "#0B2D5C";
const brandGold = "#C6A662";

type Props = {
  hideContactInfo?: boolean;
};

export default function SiteFooter({ hideContactInfo = false }: Props) {
  return (
    <footer style={{ backgroundColor: brandBlue }} className="py-8 mt-12">
      <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/NovaCare_Logo.svg"
            alt="NovaCare Nursing Logo"
            width={200}
            height={90}
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Contact info */}
        {!hideContactInfo && (
          <div
            className="text-center md:text-right text-sm"
            style={{ color: brandGold }}
          >
            <p>📍 Hobart and surrounds, Tasmania</p>
            <p>
              📞{" "}
              <a href="tel:+61488086271" className="hover:underline">
                0488 086 271
              </a>
            </p>
            <p>
              ✉{" "}
              <a href="mailto:info@novacarenursing.com.au" className="hover:underline">
                info@novacarenursing.com.au
              </a>
            </p>
          </div>
        )}

        {/* Quick links */}
        <div className="text-center md:text-right text-sm" style={{ color: brandGold }}>
          <p className="font-semibold mb-2">Quick Links</p>
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
      <div className="mt-6 text-center text-xs text-gray-200 opacity-70">
        © {new Date().getFullYear()} NovaCare Nursing. All Rights Reserved.
      </div>
    </footer>
  );
}
