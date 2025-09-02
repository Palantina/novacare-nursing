import Link from "next/link";
import Image from "next/image";

type Props = {
  hideContactInfo?: boolean;
};

export default function SiteFooter({ hideContactInfo = false }: Props) {
  return (
    <footer className="bg-[#0B2D5C] text-[#F7F4EF] py-8 mt-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo (left) */}
        <div className="flex items-center gap-2">
          <Image
            src="/NovaCare_Logo.svg"
            alt="NovaCare Nursing Logo"
            width={180}
            height={80}
            priority
          />
        </div>

        {/* Contact info (right, gold text) */}
        {!hideContactInfo && (
          <div className="text-center md:text-right text-sm text-[#C6A662] space-y-1">
            <p>📍 Hobart and surrounds, Tasmania</p>
            <p>
              📞{" "}
              <a
                href="tel:+61488086271"
                className="hover:underline font-medium"
              >
                0488 086 271
              </a>
            </p>
            <p>
              ✉{" "}
              <a
                href="mailto:info@novacarenursing.com.au"
                className="hover:underline font-medium"
              >
                info@novacarenursing.com.au
              </a>
            </p>
          </div>
        )}
      </div>

      {/* Bottom bar */}
      <div className="mt-6 border-t border-[#C6A662]/40 pt-4 text-center text-xs text-gray-200 opacity-70">
        © {new Date().getFullYear()} NovaCare Nursing. All Rights Reserved.
      </div>
    </footer>
  );
}
