import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* SEO + Favicon */}
      <Head>
        <title>NovaCare Nursing | Premium Home Nursing in Hobart</title>
        <meta
          name="description"
          content="NovaCare Nursing provides discreet, professional, and compassionate private nursing in Hobart & surrounds. Registered Nurse Palantina Hughes offers premium in-home care, post-operative support, chronic care, and palliative services."
        />
        <meta property="og:title" content="NovaCare Nursing | Premium Home Nursing in Hobart" />
        <meta
          property="og:description"
          content="Premium, skilled, and heartfelt private nursing in the comfort of your home."
        />
        <meta property="og:image" content="/NovaCare_Logo.svg" />
        <meta property="og:url" content="https://www.novacarenursing.com.au" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-gray-50 text-gray-800">
        {/* Header with Centered Logo */}
        <header className="bg-white shadow-md">
          <div className="mx-auto max-w-6xl px-4 py-6 flex justify-center">
            <Image
              src="/NovaCare_Logo.svg"
              alt="NovaCare Nursing Logo"
              width={200}
              height={90}
              priority
            />
          </div>
        </header>

        {/* Dark Blue Hero Section (clean top bar) */}
        <section
          className="h-[40vh] flex items-center justify-center"
          style={{ backgroundColor: "#0B2D5C" }}
        ></section>

        {/* Meet Your Consultant */}
        <main className="max-w-4xl mx-auto p-6">
          <section id="about" className="text-center py-12">
            <h2 className="text-3xl font-bold text-blue-900">Meet Your Consultant</h2>
            <p className="mt-4 font-semibold">Palantina Hughes, RN</p>
            <p className="italic">Clinical Home Care Nurse Consultant</p>
            <p className="mt-4">
              Dedicated to providing compassionate, skilled, and personalized care
              in the comfort of your home. With professionalism, warmth, and
              clinical excellence, NovaCare Nursing ensures dignity, independence,
              and peace of mind for you and your loved ones.
            </p>
          </section>

          {/* Services Section */}
          <section id="services" className="py-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow border">
                <h3 className="font-semibold text-xl text-blue-900">Post-Operative Care</h3>
                <p className="mt-2 text-sm">
                  Recovery support including wound care, pain management, and safe mobility at home.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow border">
                <h3 className="font-semibold text-xl text-blue-900">Chronic & Complex Care</h3>
                <p className="mt-2 text-sm">
                  Personalised care for diabetes, cardiac, respiratory, and neurological conditions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow border">
                <h3 className="font-semibold text-xl text-blue-900">Palliative & Respite Care</h3>
                <p className="mt-2 text-sm">
                  Compassionate support focused on comfort, dignity, and family peace of mind.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="mt-12 p-6 bg-blue-50 border-l-4 border-blue-900 rounded-lg">
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
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between p-6 gap-4">
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
    </>
  );
}

