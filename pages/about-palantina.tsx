import Head from "next/head";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export default function AboutPalantina() {
  return (
    <>
      <Head>
        <title>About Palantina Hughes | Registered Nurse & Clinical Nursing Consultant | NovaCare Nursing Hobart</title>
        <meta
          name="description"
          content="Meet Palantina Hughes, Registered Nurse & Clinical Nursing Home Care Consultant with over 17 years of experience across Tasmania. Delivering premium private nursing care with expertise and empathy."
        />
      </Head>

      {/* uses your existing header/footer exactly as-is */}
      <SiteHeader />

      <main className="mx-auto max-w-5xl px-4 py-12 text-[1.05rem] leading-7">
        <h1 className="text-3xl md:text-4xl font-bold">About Palantina Hughes</h1>
        <p className="mt-1 text-lg font-medium">
          Clinical Nursing Home Care Consultant | Registered Nurse
        </p>

        <section className="mt-8 space-y-5">
          <p>
            I have over 17 years of experience in the nursing profession in Tasmania, primarily
            serving as an Emergency Nurse at Launceston General Hospital. During my tenure, I
            participated in a pilot program that led to the establishment of the Community Rapid
            Response Service. I also spent several years working in the beautiful Georgetown
            community as a nurse, working in both the community and the local hospital.
          </p>

          <p>
            My extensive clinical nursing background includes ventilation management, trauma care,
            palliative care, complex bowel and urinary care, complex wound care, mental health care,
            and post-surgical care. I am also highly skilled in cannulation and intravenous (IV)
            infusion.
          </p>

          <p>
            Throughout my career, I have had the privilege of working with a diverse range of
            individuals from various backgrounds. I have been a part of the lives of many people at
            their best and worst times, and it has been a privilege to provide care for everyone.
            Additionally, I have a genetic disorder that has presented challenges to my physical and
            mental health, which has enhanced my emotional awareness and made me a more empathetic
            and practical nurse.
          </p>

          <p>
            In recent years, I have transitioned into the home care sector as a Clinical Lead and
            Care Manager, providing high-quality care to both aged care and disability clients.
            This role has further enhanced my clinical skills, including behaviour support planning
            and care package management. I take pride in being a dedicated professional whose
            primary objective is to ensure that my clients receive evidence-based, best-practice care.
            Furthermore, I am committed to delivering holistic care tailored to meet your individual
            needs.
          </p>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
