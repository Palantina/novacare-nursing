import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function NovaCareWebsite() {
  const [date, setDate] = useState("");

  return (
    <div className="font-serif text-gray-800 bg-[#F7F4EF]">

      {/* Header with Logo */}
      <header className="flex items-center justify-between p-4 bg-white shadow-md">
        <Link href="/">
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

      {/* Hero section */}
      <section
        className="relative bg-cover bg-center h-[80vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x900/?nurse,care,home')",
        }}
      >
        <div
          className="bg-black bg-opacity-40 absolute inset-0"
          aria-hidden="true"
        ></div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative text-center text-white p-8 max-w-2xl"
        >
          <h1 className="text-5xl font-bold mb-4">NovaCare Nursing</h1>
          <p className="text-xl mb-6">
            Premium Nursing, Heartfelt Care in Hobart and Surrounds, Tasmania
          </p>
          <button className="bg-[#D4AF37] text-[#1C2A39] px-6 py-3 rounded-2xl shadow-lg">
            Book a Consultation
          </button>
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
          <div>
            <p className="text-sm">📍 Hobart and surrounds, Tasmania</p>
            <p className="text-sm">📞 0488 086 271</p>
            <p className="text-sm">✉ info@novacarenursing.com.au</p>
          </div>
          <div>
            <p className="text-sm">
              © {new Date().getFullYear()} NovaCare Nursing. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
