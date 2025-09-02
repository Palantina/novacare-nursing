import Head from "next/head";
import { useState } from "react";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Image from "next/image";

const BRAND = { blue: "#0B2D5C", gold: "#C6A662" };

// Your live Formspree endpoint
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mandbwgk";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <Head>
        <title>Contact | NovaCare Nursing</title>
        <meta
          name="description"
          content="Contact NovaCare Nursing — premium private home nursing in Hobart & surrounds. Discreet, compassionate, and skilled care."
        />
      </Head>

      <SiteHeader />

      {/* Slim banner for continuity */}
      <section className="relative h-40 md:h-48">
        <Image
          src="/hero-novacare.jpg"
          alt="NovaCare Nursing contact banner"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0F2438]/50" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Contact <span className="text-[#C6A662]">NovaCare Nursing</span>
          </h1>
        </div>
      </section>

      <main className="mx-auto max-w-4xl px-4 py-12">
        <p className="text-center opacity-80 mb-8">
          We’ll respond promptly and confidentially.
        </p>

        {/* Contact form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-2xl shadow-sm border space-y-5"
        >
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              name="name"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-[#C6A662] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-[#C6A662] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Phone (optional)</label>
            <input
              name="phone"
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-[#C6A662] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-[#C6A662] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full rounded-xl px-5 py-3 font-semibold bg-[#C6A662] text-[#0B2D5C] hover:opacity-90 transition disabled:opacity-70"
          >
            {status === "submitting" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="mt-3 text-sm bg-green-100 text-green-800 p-2 rounded-md">
              ✅ Thank you — your message has been sent successfully. We’ll respond promptly.
            </p>
          )}
          {status === "error" && (
            <p className="mt-3 text-sm bg-red-100 text-red-700 p-2 rounded-md">
              ❌ Something went wrong. Please try again or call 0488 086 271.
            </p>
          )}
        </form>

        {/* Static fallback contact info */}
        <div className="mt-10 text-center text-sm opacity-80 space-y-1">
          <p>📍 Hobart and surrounds, Tasmania</p>
          <p>
            📞{" "}
            <a href="tel:+61488086271" className="underline">
              0488 086 271
            </a>{" "}
            &nbsp; | &nbsp; ✉{" "}
            <a href="mailto:info@novacarenursing.com.au" className="underline">
              info@novacarenursing.com.au
            </a>
          </p>
        </div>
      </main>

      <SiteFooter hideContactInfo />
    </>
  );
}
