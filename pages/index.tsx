import Head from "next/head";
import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const brand = { blue: "#0B2D5C", gold: "#C6A662" };

// ✅ Your live Formspree endpoint
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mandbwgk";

export default function Contact() {
  const [status, setStatus] = useState<"idle"|"submitting"|"success"|"error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Accept": "application/json" },
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
      </Head>
      <SiteHeader />

      <main className="mx-auto max-w-4xl px-4 py-10">
        <h1 className="text-3xl font-bold text-center" style={{ color: brand.blue }}>
          Get in Touch
        </h1>
        <p className="text-center opacity-80 mt-2">
          We’ll respond promptly and confidentially.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-2xl shadow-sm border space-y-4 mt-8"
        >
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              name="name"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Phone (optional)</label>
            <input
              name="phone"
              className="mt-1 block w-full rounded-md border border-gray-300 p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 p-2"
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full rounded-xl px-5 py-3 font-semibold"
            style={{
              backgroundColor: brand.gold,
              color: brand.blue,
              opacity: status === "submitting" ? 0.7 : 1,
            }}
          >
            {status === "submitting" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-green-700 text-sm mt-2">
              ✅ Thank you for reaching out. Your message has been sent successfully — we will respond promptly.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-700 text-sm mt-2">
              ❌ Something went wrong. Please try again later or call us directly.
            </p>
          )}
        </form>
      </main>

      <SiteFooter />
    </>
  );
}

