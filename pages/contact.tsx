import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

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
        <title>Contact NovaCare Nursing | Aged Care Specialists | Hobart</title>
        <meta
          name="description"
          content="Contact NovaCare Nursing for nurse-led aged care, private nursing, Support at Home nursing, Live-In Care and 24-Hour Care across Hobart and Southern Tasmania."
        />
        <link rel="canonical" href="https://www.novacarenursing.com.au/contact" />
        <meta name="robots" content="index,follow" />
      </Head>

      <SiteHeader />

      <main className="bg-[#F8FCFD] px-4 py-12 font-sans text-[#526B7C] sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <section className="overflow-hidden rounded-[2.25rem] border border-[#DCEDEF] bg-white shadow-[0_24px_70px_rgba(29,57,82,0.09)]">
            <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
              <div className="bg-gradient-to-br from-[#EAF9FA] via-white to-[#F2EEFF] p-7 sm:p-9 lg:p-11">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2B9FA5]">NovaCare Nursing — Aged Care Specialists</p>
                <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#1D3952] sm:text-5xl">Let&apos;s talk about what you need.</h1>
                <p className="mt-5 text-lg leading-8">Whether you are looking for private nursing, Support at Home nursing, Live-In Care, 24-Hour Care or simply need to understand the options, you can contact NovaCare Nursing directly.</p>

                <div className="mt-8 space-y-4">
                  <a href="tel:+61491303671" className="block rounded-[1.4rem] border border-[#D7EEF0] bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-sm">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#238C93]">Phone</p>
                    <p className="mt-2 text-xl font-semibold text-[#1D3952]">0491 303 671</p>
                  </a>
                  <a href="mailto:info@novacarenursing.com.au" className="block rounded-[1.4rem] border border-[#E3DDFB] bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-sm">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#6E3BE8]">Email</p>
                    <p className="mt-2 break-all text-lg font-semibold text-[#1D3952]">info@novacarenursing.com.au</p>
                  </a>
                  <div className="rounded-[1.4rem] border border-[#DCE8F8] bg-white p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#5274D8]">Service area</p>
                    <p className="mt-2 leading-7 text-[#1D3952]">Hobart, Huon Valley, Derwent Valley and surrounding Southern Tasmania.</p>
                  </div>
                </div>

                <p className="mt-7 text-sm leading-6">NovaCare Nursing is not an emergency service. If you need urgent emergency assistance, call Triple Zero (000).</p>
              </div>

              <div className="p-7 sm:p-9 lg:p-11">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6E3BE8]">Send an enquiry</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#1D3952]">Tell us how we can help.</h2>
                <p className="mt-3 leading-7">Clinical Nurse Consultant | Registered Nurse</p>

                <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[#1D3952]">Name</label>
                    <input id="name" name="name" autoComplete="name" required className="mt-2 block w-full rounded-xl border border-[#CFDDE3] bg-white px-4 py-3 outline-none transition focus:border-[#2FBFC4] focus:ring-4 focus:ring-[#2FBFC4]/15" />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[#1D3952]">Email</label>
                    <input id="email" type="email" name="email" autoComplete="email" required className="mt-2 block w-full rounded-xl border border-[#CFDDE3] bg-white px-4 py-3 outline-none transition focus:border-[#2FBFC4] focus:ring-4 focus:ring-[#2FBFC4]/15" />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-[#1D3952]">Phone <span className="font-normal text-[#6F8290]">(optional)</span></label>
                    <input id="phone" name="phone" autoComplete="tel" className="mt-2 block w-full rounded-xl border border-[#CFDDE3] bg-white px-4 py-3 outline-none transition focus:border-[#2FBFC4] focus:ring-4 focus:ring-[#2FBFC4]/15" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[#1D3952]">How can we help?</label>
                    <textarea id="message" name="message" rows={6} required className="mt-2 block w-full rounded-xl border border-[#CFDDE3] bg-white px-4 py-3 outline-none transition focus:border-[#2FBFC4] focus:ring-4 focus:ring-[#2FBFC4]/15" />
                  </div>

                  <div className="rounded-xl border border-[#D7EEF0] bg-[#F5FCFC] p-4 text-sm leading-6">
                    Information submitted through this form is processed using an external form service and handled in accordance with our <Link href="/privacy" className="font-semibold text-[#238C93] underline underline-offset-2">Privacy Policy</Link>. Please do not use this form for urgent or highly sensitive clinical information.
                  </div>

                  <button type="submit" disabled={status === "submitting"} className="w-full rounded-2xl bg-[#2FBFC4] px-5 py-3.5 font-semibold text-[#173B5C] shadow-sm transition hover:bg-[#59D6D0] disabled:cursor-not-allowed disabled:opacity-60">
                    {status === "submitting" ? "Sending..." : "Send enquiry"}
                  </button>

                  {status === "success" && <p role="status" className="rounded-xl bg-[#EAF9FA] p-4 text-sm font-medium text-[#176C72]">Thank you — your message has been sent successfully.</p>}
                  {status === "error" && <p role="alert" className="rounded-xl bg-[#FFF2EC] p-4 text-sm font-medium text-[#A95440]">Something went wrong. Please try again or call 0491 303 671.</p>}
                </form>
              </div>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
