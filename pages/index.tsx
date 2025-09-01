import Head from "next/head";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const brand = { blue: "#0B2D5C", gold: "#C6A662" };

export default function Home() {
  return (
    <>
      <Head>
        <title>NovaCare Nursing | Premium Home Nursing Hobart</title>
        <meta
          name="description"
          content="NovaCare Nursing provides premium, compassionate and skilled home nursing in Hobart and surrounds. Private, professional and heartfelt care by Registered Nurse Palantina Hughes."
        />
      </Head>

      {/* Header comes only from the component */}
      <SiteHeader />

      <main className="bg-gray-50 text-gray-800">
        {/* HERO */}
        <section
          className="relative bg-cover bg-center h-[70vh] flex items-center justify-center"
          style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?nurse,homecare')" }}
        >
          <div className="bg-black/40 absolute inset-0" aria-hidden="true"></div>
          <div className="relative text-center text-white p-8 max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">NovaCare Nursing</h1>
            <p className="text-lg md:text-xl mb-6">
              Premium Nursing, Heartfelt Care in Hobart and Surrounds, Tasmania
            </p>

            {/* Gold, centered buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-xl px-6 py-3 font-semibold"
                style={{ backgroundColor: brand.gold, color: brand.blue }}
              >
                Book a Consultation
              </Link>
              <Link
                href="/services"
                className="rounded-xl px-6 py-3 font-semibold"
                style={{ backgroundColor: brand.gold, color: brand.blue }}
              >
                View Services
              </Link>
              <Link
                href="/about"
                className="rounded-xl px-6 py-3 font-semibold"
                style={{ backgroundColor: brand.gold, color: brand.blue }}
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="py-12 px-6 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4" style={{ color: brand.blue }}>
            Meet Your Nurse
          </h2>
          <p className="text-lg font-semibold">Palantina Hughes, RN</p>
          <p className="italic mb-2">Clinical Home Care Nurse Consultant</p>
          <p>
            Dedicated to providing compassionate, skilled, and personalised care in the comfort of your home.
          </p>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
