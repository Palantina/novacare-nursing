import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function NovaCareWebsite() {
  return (
    <div className="font-serif text-gray-800 bg-[#F7F4EF]">
      {/* Header with Logo */}
      <header className="flex items-center justify-between p-4 bg-white shadow-md">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/NovaCare_Logo.svg"
            alt="NovaCare Nursing Logo"
            width={180}
            height={80}
            priority
          />
        </Link>
        <nav className="space-x-6 text-blue-900 font-medium">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      {/* Hero section with local image and overlay */}
      <section className="relative h-[80vh] flex items-center">
        {/* background image */}
        <Image
          src="/hero-novacare.jpg"
          alt="Nurse holding a patient's hands at home during warm sunset"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* overlays for readability */}
        <div className="absolute inset-0 bg-[#0F2438]/40" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2438]/60 via-[#0F2438]/20 to-transparent" aria-hidden />

        {/* content */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 px-6 w-full max-w-6xl mx-auto"
        >
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-4">
              NovaCare Nursing
            </h1>
            <p className="text-xl mb-6 text-white/90">
              Premium Nursing, Heartfelt Care in Hobart and Surrounds, Tasmania
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="bg-[#D4AF37] text-[#1C2A39] px-6 py-3 rounded-2xl shadow-lg hover:opacity-90 transition"
              >
                Book a Consultation
              </Link>
              <Link
                href="/services"
                className="border border-white/70 text-white px-6 py-3 rounded-2xl hover:bg-white/10 transition"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* About section */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Meet Your Consultant</h2>
        <p className="text-lg font-semibold">Palantina Hughes, RN</p>
        <p className="italic mb-2">Clinical Home Care Nurse Consultant</p>
        <p>
          Dedicated to providing compassionate, skilled, and personalized care
          in the comfort of your home.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-[#1C2A39] text-[#F7F4EF] py-10 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div>
            <Image
              src="/NovaCare_Logo_Transparent.svg"
              alt="NovaCare Nursing Logo"
              width={160}
              height={80}
            />
            <p className="text-sm mt-2">Premium Nursing, Heartfelt Care</p>
          </div>
          <div className="text-sm">
            <p>📍 Hobart and surrounds, Tasmania</p>
            <p>📞 0488 086 271</p>
            <p>✉ info@novacarenursing.com.au</p>
          </div>
          <div className="text-sm">
            <p>© {new Date().getFullYear()} NovaCare Nursing. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
