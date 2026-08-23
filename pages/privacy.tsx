import Head from "next/head";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | NovaCare Nursing</title>
        <meta name="description" content="Privacy Policy for NovaCare Nursing — how we collect, use, store and protect personal information submitted through our website and services." />
        <link rel="canonical" href="https://www.novacarenursing.com.au/privacy" />
        <meta name="robots" content="index,follow" />
      </Head>

      <SiteHeader />

      <main className="bg-[#F8FCFD] px-4 py-12 font-sans text-[#526B7C] sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.25rem] border border-[#DCEDEF] bg-white p-7 shadow-[0_24px_70px_rgba(29,57,82,0.08)] sm:p-9 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2B9FA5]">NovaCare Nursing</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-[#1D3952] sm:text-5xl">Privacy Policy</h1>
          <p className="mt-4 max-w-3xl leading-8">NovaCare Nursing respects your privacy and is committed to handling personal information carefully and appropriately. This policy explains the information we may collect, why we use it and how you can contact us about your information.</p>

          <div className="mt-9 space-y-8 text-[1.02rem] leading-8">
            <section>
              <h2 className="text-2xl font-semibold text-[#1D3952]">Information we collect</h2>
              <p className="mt-3">We may collect your name, contact details, enquiry content and relevant health or care information you choose to provide. If you contact us through the website, by phone or by email, we collect the information you provide so we can respond to your enquiry and, where appropriate, plan or provide services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1D3952]">How we use your information</h2>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>To respond to enquiries and discuss possible services.</li>
                <li>To manage bookings, assessment, care planning and service delivery.</li>
                <li>To communicate with you and, with appropriate authority or consent, relevant providers or healthcare professionals.</li>
                <li>To meet legal, professional, safety, clinical governance and record-keeping obligations.</li>
                <li>To maintain and improve our website and services where appropriate.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1D3952]">Website enquiry form</h2>
              <p className="mt-3">Website enquiries are processed using Formspree, an external form-processing service. Information submitted through the form may therefore be processed by that service for the purpose of delivering your enquiry to NovaCare Nursing.</p>
              <p className="mt-3">Please do not use the website form for emergencies or to send urgent or highly sensitive clinical information. If you need to discuss clinical information, contact NovaCare Nursing directly so an appropriate communication method can be arranged.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1D3952]">Storage and security</h2>
              <p className="mt-3">We take reasonable steps to protect personal information from misuse, interference, loss, unauthorised access, modification or disclosure. Access is limited to people who require the information for legitimate business, clinical or legal purposes.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1D3952]">Third-party service providers</h2>
              <p className="mt-3">NovaCare Nursing does not sell personal information. We may use trusted service providers for functions such as website hosting, form processing, communications or other business systems. Information is only shared where reasonably necessary for the relevant function, service or legal obligation.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1D3952]">Access and correction</h2>
              <p className="mt-3">You can contact NovaCare Nursing to request access to personal information we hold about you or to ask for information to be corrected where appropriate.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1D3952]">Privacy enquiries</h2>
              <p className="mt-3">For privacy questions or concerns, contact:</p>
              <div className="mt-4 rounded-[1.4rem] border border-[#D7EEF0] bg-[#EAF9FA] p-5">
                <p className="font-semibold text-[#1D3952]">NovaCare Nursing</p>
                <p className="mt-1"><a href="mailto:info@novacarenursing.com.au" className="font-semibold text-[#238C93] underline underline-offset-2">info@novacarenursing.com.au</a></p>
                <p className="mt-1"><a href="tel:+61491303671" className="font-semibold text-[#238C93] underline underline-offset-2">0491 303 671</a></p>
              </div>
            </section>

            <p className="border-t border-[#E2ECEF] pt-6 text-sm text-[#6F8290]">Last reviewed: 23 August 2026</p>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
