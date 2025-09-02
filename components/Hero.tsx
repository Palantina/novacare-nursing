export default function Hero() {
  return (
    <section
      className="
        relative min-h-[75vh] md:min-h-[80vh]
        flex items-center
        bg-center bg-cover
      "
      style={{ backgroundImage: "url('/hero-novacare.jpg')" }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/45" aria-hidden />

      {/* content */}
      <div className="relative z-10 w-full mx-auto max-w-6xl px-4">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">NovaCare Nursing</h1>
          <p className="text-lg md:text-xl mb-6 text-white/95">
            Premium Nursing, Heartfelt Care in Hobart and Surrounds, Tasmania
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/contact"
              className="inline-block rounded-2xl bg-brand-gold text-brand-blue px-6 py-3 font-semibold shadow-lg hover:opacity-90 transition"
            >
              Book a Consultation
            </a>
            <a
              href="/services"
              className="inline-block rounded-2xl border border-white/80 text-white px-6 py-3 hover:bg-white/10 transition"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
