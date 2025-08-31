import Image from "next/image";
import Link from "next/link";

// Brand colors
const brand = {
  blue: "#0B2D5C",
  gold: "#C6A662",
  bg: "#F7F4EF",
  text: "#232323",
};

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: brand.bg, color: brand.text }}>
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur shadow-sm">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/NovaCare_Logo.svg"
              alt="NovaCare Nursing Logo"
              width={170}
              height={76}
              priority
            />
          </Link>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-6 text-[15px]" style={{ color: brand.blue }}>
            <Link href="#services" className="hover:opacity-80">Services</Link>
            <Link href="#about" className="hover:opacity-80">About</Link>
            <Link href="#contact" className="hover:opacity-80">Contact</Link>
          </nav>

          <a
            href="mailto:info@novacarenursing.com.au?subject=Consultation Request&body=Hello, I would like to book a consultation."
            className="ml-4 rounded-xl px-4 py-2 font-semibold"
            style={{ backgroundColor: brand.gold, color: brand.blue }}
          >
            Book a Consultation
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        className="relative"
        style={{ backgroundColor: brand.blue }}
      >
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1616662535616-cd2e8c3fde41?q=80&w=1600&auto=format&fit=crop"
            alt="Caring nurse with client at home"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-32 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
              Premium Nursing, Heartfelt Care—at Home
            </h1>
            <p className="mt-4 text-lg opacity-90">
              Discreet, skilled, and compassionate home care in Hobart &amp; surrounds.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:info@novacarenursing.com.au?subject=Consultation Request&body=Hello, I would like to book a consultation."
                className="rounded-xl px-6 py-3 font-semibold"
                style={{ backgroundColor: brand.gold, color: brand.blue }}
              >
                Book a Consultation
              </a>
              <a
                href="#services"
                className="rounded-xl px-6 py-3 font-semibold border"
                style={{ borderColor: "rgba(255,255,255,0.5)" }}
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "AHPRA Registered Nurse", desc: "Experienced and credentialed clinical care." },
            { title: "Premium, Discreet Care", desc: "High-end service with warmth and respect." },
            { title: "Home Comfort & Dignity", desc: "Care tailored to your routines and needs." },
            { title: "Locally Based in Hobart", desc: "Flexible, reliable support when you need it." },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg" style={{ color: brand.blue }}>{item.title}</h3>
              <p className="mt-2 text-sm opacity-80">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-4 pb-6">
        <h2 className="text-3xl font-bold font-serif" style={{ color: brand.blue }}>Services</h2>
        <p className="opacity-80 mt-2">Skilled, private nursing at home—tailored to you.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Post-Operative Support",
              desc: "Monitoring, medication management, wound care, pain control, safe mobility.",
            },
            {
              title: "Chronic & Complex Care",
              desc: "Diabetes, cardiac, respiratory, neuro care with personalised plans.",
            },
            {
              title: "Palliative & Respite",
              desc: "Comfort-focused care, symptom management, and family support.",
            },
          ].map((s) => (
            <div key={s.title} className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-xl" style={{ color: brand.blue }}>{s.title}</h3>
              <p className="mt-2 text-sm opacity-80">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Palantina */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold font-serif" style={{ color: brand.blue }}>
              Meet Your Consultant
            </h2>
            <p className="mt-3 font-semibold">Palantina Hughes, Registered Nurse</p>
            <p className="italic">Clinical Home Care Nurse Consultant</p>
            <p className="mt-4 opacity-90">
              I provide premium, compassionate nursing in the comfort of your home—balancing clinical excellence with
              genuine warmth. Every visit is personalised to protect dignity, independence, and peace of mind.
            </p>
            <ul className="mt-4 text-sm list-disc pl-5 opacity-90">
              <li>AHPRA registered, fully insured</li>
              <li>NDIS & private clients welcome</li>
              <li>Hobart & surrounds, Tasmania</li>
            </ul>
            <div className="mt-6">
              <a
                href="mailto:info@novacarenursing.com.au?subject=Consultation Request"
                className="rounded-xl px-5 py-3 font-semibold"
                style={{ backgroundColor: brand.gold, color: brand.blue }}
              >
                Enquire Now
              </a>
            </div>
          </div>
          <div className="relative h-72 rounded-2xl overflow-hidden shadow">
            <Image
              src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop"
              alt="Nurse providing care at home"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Trust / Testimonials placeholder */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100">
          <h3 className="text-2xl font-serif font-bold" style={{ color: brand.blue }}>
            Families Say
          </h3>
          <p className="mt-2 opacity-80">
            “We felt completely supported—Palantina provided expert care with such kindness. It made all the difference.”
          </p>
          <p className="mt-1 text-sm opacity-60">— Client family, Sandy Bay</p>
        </div>
      </section>

      {/* CTA Strip */}
      <section
        id="contact"
        className="py-10"
        style={{ backgroundColor: brand.blue, color: "white" }}
      >
        <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-serif font-bold">Ready to talk?</h3>
            <p className="opacity-90">Email or call to book a private consultation.</p>
          </div>
          <div className="flex gap-3">
            <a
              href="mailto:info@novacarenursing.com.au"
              className="rounded-xl px-5 py-3 font-semibold"
              style={{ backgroundColor: brand.gold, color: brand.blue }}
            >
              info@novacarenursing.com.au
            </a>
            <a
              href="tel:+61488086271"
              className="rounded-xl px-5 py-3 font-semibold border border-white"
            >
              0488 086 271
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/NovaCare_Logo_Transparent.svg"
              alt="NovaCare Nursing Logo"
              width={150}
              height={64}
            />
            <span className="text-sm" style={{ color: brand.blue }}>
              Premium Nursing, Heartfelt Care
            </span>
          </div>
          <div className="text-sm opacity-80">
            © {new Date().getFullYear()} NovaCare Nursing — Hobart &amp; Surrounds, Tasmania
          </div>
        </div>
      </footer>
    </div>
  );
}

