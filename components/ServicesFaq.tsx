import Head from "next/head";

const faqs = [
  {
    q: "Do you provide NDIS high-intensity supports?",
    a: "Yes. Supports are delivered and supervised by a Registered Nurse (RN), with governance, education and documentation aligned to NDIS Practice Standards.",
  },
  {
    q: "What areas do you service?",
    a: "Hobart and surrounding regions in southern Tasmania. If you’re nearby, contact us and we’ll confirm availability.",
  },
  {
    q: "Do I need a GP referral?",
    a: "No referral is required for private bookings. We coordinate with your GP and specialists as needed for safe, continuous care.",
  },
  {
    q: "Can you help after surgery?",
    a: "Yes. Post-operative support includes vital-sign monitoring, wound and dressing care, pain control, mobility and falls prevention, and medication management.",
  },
  {
    q: "Are you insured and AHPRA registered?",
    a: "Yes. NovaCare Nursing is fully insured for private practice, and care is delivered by an AHPRA-registered nurse.",
  },
];

export default function ServicesFaq() {
  // FAQPage schema for richer Google results
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2
          className="text-2xl md:text-3xl font-semibold text-center"
          style={{ color: "var(--brand-blue)" }}
        >
          Frequently Asked Questions
        </h2>

        <div className="mt-8 space-y-4">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="rounded-xl bg-white border border-gray-200 p-4 open:shadow-sm"
            >
              <summary className="cursor-pointer font-semibold text-[color:var(--brand-blue)]">
                {item.q}
              </summary>
              <p className="mt-2 text-[1.02rem] leading-7 opacity-90">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
