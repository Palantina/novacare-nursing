import Link from "next/link";

export default function ContactCta() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="rounded-2xl border border-[#C6A662]/30 bg-[#0B2D5C] text-white p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold">
            Ready to discuss your care needs?
          </h3>
          <p className="text-white/90">
            Book a free, no-obligation consultation with NovaCare Nursing.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/contact"
            className="inline-block rounded-xl bg-[#C6A662] text-[#0B2D5C] px-5 py-3 font-medium hover:opacity-90 transition text-center"
          >
            Book a Consultation
          </Link>
          <a
            href="tel:+61488086271"
            className="inline-block rounded-xl border border-white/70 text-white px-5 py-3 font-medium hover:bg-white/10 transition text-center"
          >
            Call 0488 086 271
          </a>
        </div>
      </div>
    </section>
  );
}
