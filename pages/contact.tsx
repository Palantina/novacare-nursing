import Head from "next/head";
import { useState } from "react";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const brand = { blue: "#0B2D5C", gold: "#C6A662" };

// Live Formspree endpoint
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
          content="Contact Palantina Hughes — Registered Nurse & Clinical Nursing Home Care Consultant. Private, compassionate home nursing in Hobart & surrounds."
        />
      </Head>

      <SiteHeader />

      <main className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center" style={{ color: brand.blue }}>
          Contact Palantina Hughes
        </h1>
        <p className="text-center opacity-80 mt-2">
          Registered Nurse &amp; Clinical Nursing Home Care Consultant
        </p>
        <p className="text-center opacity-80 mt-1">We’ll respond promptly and confidentially.</p>

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-sm border space-y-4 mt-10">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input name="name" required className="mt-1 block w-full rounded-md border border-gray-300 p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input type="email" name="email" required className="mt-1 block w-full rounded-md border border-gray-300 p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Phone (optional)</label>
            <input name="phone" className="mt-1 block w-full rounded-md border border-gray-300 p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea name="message" rows={5} required className="mt-1 block w-full rounded-md border border-gray-300 p-2" />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full rounded-xl px-5 py-3 font-semibold"
            style={{ backgroundColor: brand.gold, color: brand.blue, opacity: status === "submitting" ? 0.7 : 1 }}
          >
            {status === "submitting" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-green-700 text-sm mt-2">
              ✅ Thank you — your message has been sent successfully. We’ll respond promptly.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-700 text-sm mt-2">
              ❌ Something went wrong. Please try again or call 0488 086 271.
            </p>
          )}
        </form>

        <div className="mt-10 text-center text-sm opacity-80">
          <p>📍 Hobart & Surrounds, Tasmania</p>
          <p>
            📞 <a href="tel:+61488086271" className="underline">0488 086 271</a> &nbsp; | &nbsp; ✉{" "}
            <a href="mailto:info@novacarenursing.com.au" className="underline">info@novacarenursing.com.au</a>
          </p>
        </div>
      </main>

      {/* Keeps footer succinct since contact info is above */}
      <SiteFooter />
    </>
  );
}
