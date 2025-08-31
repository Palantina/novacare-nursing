import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Header with Logo */}
      <header className="bg-white shadow-md">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between p-4">
          {/* Logo */}
          <Image
            src="/NovaCare_Logo.svg"
            alt="NovaCare Nursing Logo"
            width={180}
            height={80}
            priority
          />

          {/* Tagline + CTA */}
          <div className="text-center md:text-right mt-4 md:mt-0">
            <h1 className="text-2xl font-bold text-blue-900">NovaCare Nursing</h1>
            <p className="mt-1 text-sm text-gray-700">
              Premium Nursing, Heartfelt Care in Hobart and Surrounds, Tasmania
            </p>
            <a
              href="mailto:info@novacarenursing.com.au?subject=Consultation Request&body=Hello, I would like to book a consultation."
              className="inline-block mt-2 px-4 py-2 rounded-lg font-semibold"
              style={{ backgroundColor: "#C6A662", color: "#0B2D5C" }}
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto p-6">
        <section>
          <h2 className="text-2xl font-bold text-blue-900 mt-8">Meet Your Consultant</h2>
          <p className="mt-4 font-semibold">Palantina Hughes, RN</p>
          <p className="italic">Clinical Home Care Nurse Consultant</p>
          <p className="mt-2">
            Dedicated to providing compassionate, skilled, and personalized care in the comfort of your home.
          </p>
        </section>

        {/* Contact Section */}
        <section className="mt-10 p-6 bg-blue-50 border-l-4 border-blue-900 rounded-lg">
          <h3 className="text-xl font-bold text-blue-900">Contact NovaCare Nursing</h3>
          <p className="mt-2"><strong>Location:</strong> Hobart and surrounds, Tasmania</p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+61488086271" className="text-blue-700 underline">
              0488 086 271
            </a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@novacarenursing.com.au" className="text-blue-700 underline">
              info@novacarenursing.com.au
            </a>
          </p>
        </section>
      </main>

      {/* Footer with Transparent Logo */}
      <footer className="bg-blue-900 text-white mt-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between p-6 gap-4">
          <div className="flex items-center gap-4">
            <Image
              src="/NovaCare_Logo_Transparent.svg"
              alt="NovaCare Nursing Logo"
              width={140}
              height={60}
            />
            <p className="text-sm opacity-90">Premium Nursing, Heartfelt Care</p>
          </div>
          <div className="text-sm opacity-90">
            © {new Date().getFullYear()} NovaCare Nursing. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

