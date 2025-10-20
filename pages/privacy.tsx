import Head from "next/head";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const brand = { blue: "#0B2D5C" };

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | NovaCare Nursing</title>
        <meta
          name="description"
          content="Privacy Policy for NovaCare Nursing — how we collect, use, store, and protect personal information."
        />
        <link rel="canonical" href="https://www.novacarenursing.com.au/privacy" />
      </Head>

      <SiteHeader />

      <main className="mx-auto max-w-5xl px-4 py-12">
        <h1
          className="text-3xl md:text-4xl font-bold mb-6"
          style={{ color: brand.blue }}
        >
          Privacy Policy
        </h1>

        <div className="space-y-5 text-[1.05rem] leading-7">
          <p>
            NovaCare Nursing respects your privacy and is committed to handling
            your personal information in accordance with the Australian Privacy
            Principles. This policy explains what we collect, how we use it, and
            how we keep it secure.
          </p>

          <h2 className="text-2xl font-semibold mt-6" style={{ color: brand.blue }}>
            Information We Collect
          </h2>
          <p>
            We may collect personal details such as your name, contact
            information, relevant health information you choose to provide,
            and details of your enquiry or care needs. If you contact us via our
            website forms or by phone/email, we collect the information you
            submit to help us respond to you.
          </p>

          <h2 className="text-2xl font-semibold mt-6" style={{ color: brand.blue }}>
            How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To respond to enquiries and provide nursing services;</li>
            <li>To manage bookings, care planning, and service delivery;</li>
            <li>To improve our services and website;</li>
            <li>To meet legal, regulatory, or clinical governance obligations.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6" style={{ color: brand.blue }}>
            Storage & Security
          </h2>
          <p>
            We take reasonable steps to protect personal information from misuse,
            interference, loss, unauthorised access, modification, or disclosure.
            Access is limited to authorised personnel only.
          </p>

          <h2 className="text-2xl font-semibold mt-6" style={{ color: brand.blue }}>
            Third Parties
          </h2>
          <p>
            We do not sell personal information. We may securely share limited
            information with trusted providers (for example, booking or form
            services) solely to deliver our services to you.
          </p>

          <h2 className="text-2xl font-semibold mt-6" style={{ color: brand.blue }}>
            Access & Corrections
          </h2>
          <p>
            You can request access to, or correction of, your personal information
            by contacting us using the details below.
          </p>

          <h2 className="text-2xl font-semibold mt-6" style={{ color: brand.blue }}>
            Contact
          </h2>
          <p>
            For privacy enquiries, please contact:
            <br />
            <strong>NovaCare Nursing</strong>
            <br />
            <a href="mailto:info@novacarenursing.com.au" className="underline">
              info@novacarenursing.com.au
            </a>{" "}
            ·{" "}
            <a href="tel:+61491303671" className="underline">
              0491 303 671
            </a>
          </p>

          <p className="opacity-70 text-sm">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
