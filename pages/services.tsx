// pages/services.tsx
import Head from "next/head";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ContactCta from "../components/ContactCta";
import ServicesFaq from "../components/ServicesFaq";

const brand = { blue: "#0B2D5C", gold: "#C6A662" };

const priorityServices = [
  "IV iron infusions at home",
  "Complex wound and vascular nursing",
  "Palliative and end-of-life nursing",
  "Tracheostomy, airway and respiratory support",
  "PEG feeding, enteral nutrition and device support",
  "Dementia, BPSD and complex care planning",
];

const pathways = [
  {
    title: "Private Nursing",
    description:
      "Direct Registered Nurse care for people and families who need skilled clinical nursing at home.",
    href: "/private-nursing",
    linkText: "Private Nursing",
  },
  {
    title: "Aged Care & Support at Home",
    description:
      "Specialist nursing delivered through provider engagement, subcontracting or associated-provider arrangements where required.",
    href: "/providers/support-at-home",
    linkText: "Support at Home Providers",
  },
  {
    title: "NDIS Provider-Partnered Nursing",
    description:
      "Subcontracted Registered Nurse clinical services for registered NDIS providers, including SIL and high-intensity support providers, where nursing input is required.",
    href: "/providers/ndis",
    linkText: "NDIS Provider Support",
  },
];

const services = [
  {
    title: "IV Iron Infusions & IV Medication Support at Home",
    summary:
      "Medically ordered infusion and medication support delivered by an experienced Registered Nurse with assessment, monitoring, documentation and escalation pathways.",
    bullets: [
      "Iron infusions prescribed by a treating medical practitioner",
      "IV infusions under a valid drug chart, medication administration order or infusion order",
      "RN assessment, consent, allergy check, preparation, administration and monitoring",
      "IV site assessment before, during and after infusion",
      "Observation monitoring and documentation of administration",
      "Escalation pathways for adverse reactions, deterioration or anaphylaxis",
    ],
  },
  {
    title: "Complex Wound, Vascular & High-Risk Foot Nursing",
    summary:
      "Specialist wound and lower-limb nursing for people with wounds, fragile skin, vascular risk, diabetes risk, delayed healing or clinical deterioration concerns.",
    bullets: [
      "Wound assessment, documentation and dressing plan support",
      "Complex, chronic, surgical and delayed-healing wound care",
      "Lower-limb, vascular-risk and high-risk foot nursing support",
      "Pressure injury prevention and skin integrity review",
      "Monitoring for infection, exudate, odour, pain, inflammation and delayed healing",
      "Escalation to the GP, wound specialist or treating team when required",
    ],
  },
  {
    title: "Palliative & End-of-Life Nursing Care",
    summary:
      "Calm, skilled palliative nursing support at home, with comfort-focused care, medication support under written orders, family guidance and escalation planning.",
    bullets: [
      "Specialised palliative nursing support at home",
      "Comfort-focused care, symptom monitoring and escalation planning",
      "Medication administration under written medical orders",
      "Syringe driver support where prescribed and clinically appropriate",
      "Family support, education and practical end-of-life guidance",
      "Coordination with GPs, palliative care teams and other treating clinicians",
    ],
  },
  {
    title: "Tracheostomy, Airway & Respiratory Support",
    summary:
      "Clinical nursing support for clients with airway or respiratory support needs, delivered within RN scope and with clear escalation pathways.",
    bullets: [
      "Tracheostomy care and monitoring within RN scope of practice",
      "Airway support, observation and risk identification",
      "Respiratory assessment and deterioration monitoring",
      "Ventilation support, including non-invasive ventilation support where appropriate",
      "Oxygen and respiratory equipment-related nursing support where clinically appropriate",
      "Education and support for clients, families, providers and care teams",
    ],
  },
  {
    title: "PEG Feeding, Enteral Nutrition & Device Support",
    summary:
      "Registered Nurse support for clients with feeding tubes, enteral nutrition needs or prescribed clinical equipment requiring skilled assessment and monitoring.",
    bullets: [
      "PEG feeding support and enteral nutrition care",
      "Feeding tube site monitoring and skin integrity review",
      "Clinical monitoring for complications, intolerance or deterioration",
      "Nursing support for prescribed enteral feeding equipment and related clinical devices",
      "Documentation, care planning and escalation to the treating team",
      "Education for families, support workers and provider care teams",
    ],
  },
  {
    title: "Continence, Catheter & Stoma Care",
    summary:
      "Skilled continence, catheter and stoma-related nursing support with assessment, troubleshooting, skin review, education and escalation planning.",
    bullets: [
      "Indwelling urinary catheter care",
      "Suprapubic catheter care",
      "Continence-related nursing assessment and support",
      "Stoma and peristomal skin monitoring where clinically appropriate",
      "Troubleshooting leakage, blockage risk, skin breakdown and deterioration concerns",
      "Client, family and care team education",
    ],
  },
  {
    title: "Post-Operative & Post-Hospital Nursing",
    summary:
      "Clinical review and practical nursing support after hospital, surgery or acute illness, with early recognition of deterioration and escalation where needed.",
    bullets: [
      "Post-operative wound care and monitoring",
      "Post-hospital clinical review and recovery support",
      "Early recognition of deterioration after discharge",
      "Pain, symptoms, wound changes and functional concerns monitored within RN scope",
      "Medication-related nursing support under appropriate instructions or orders",
      "Escalation planning and communication with treating practitioners",
    ],
  },
  {
    title: "Dementia, BPSD & Cognitive Support",
    summary:
      "Clinical nursing assessment and practical care planning for changed behaviours, distress, sleep disruption, carer strain and cognitive decline at home.",
    bullets: [
      "Dementia-related clinical nursing assessment",
      "Behaviour support planning for changed behaviours",
      "Assessment of anxiety, distress, sleep, routine, triggers and unmet needs",
      "Practical strategies for families and care teams",
      "Clinical interpretation of behavioural patterns and escalation risks",
      "Recommendations for GP, specialist, allied health or respite review where required",
    ],
  },
  {
    title: "NDIS Provider-Partnered Clinical Nursing Support",
    summary:
      "Subcontracted and provider-partnered RN clinical services for registered NDIS providers where skilled nursing input is required.",
    bullets: [
      "Subcontracted Registered Nurse clinical services for registered NDIS providers",
      "Clinical nursing input for participants with complex health needs, including those living in supported accommodation",
      "Support for SIL and high-intensity support providers where nursing assessment, planning or review is required",
      "Clinical support for complex wounds, catheters, continence, enteral feeding, tracheostomy, ventilation and medication-related care",
      "Risk identification, documentation, care planning and escalation support",
      "Education and clinical guidance for providers, support coordinators, care teams, participants and families",
    ],
  },
  {
    title: "Aged Care, Support at Home & Provider Clinical Governance",
    summary:
      "Specialist clinical nursing input for older people, families, Support at Home providers and aged care organisations managing complex care at home.",
    bullets: [
      "Clinical nursing support for older people living at home",
      "Frailty, skin integrity, wound risk and deterioration monitoring",
      "Clinical care planning, documentation and review",
      "Provider consultation and clinical guidance",
      "Associated-provider or subcontracted nursing support where required by the provider model",
      "Escalation pathways, care coordination and quality improvement support",
    ],
  },
  {
    title: "Clinical Nursing Consultancy & Complex Care Coordination",
    summary:
      "Advanced RN clinical judgement for people with complex, changing or high-risk care needs, and for providers requiring specialist nursing oversight.",
    bullets: [
      "Comprehensive nursing assessment and clinical recommendations",
      "Complex care planning and review",
      "Family, carer and provider education",
      "Coordination with GPs, specialists, hospitals, aged care providers and allied health",
      "Documentation review, clinical handover and risk identification",
      "Provider support for clinical governance, documentation standards and escalation planning",
    ],
  },
];

const trustPoints = [
  "17 years of clinical nursing experience",
  "AHPRA-registered nurse",
  "Fully insured sole trader nursing practice",
  "Clinical Nursing Consultant level experience",
  "Hospital, emergency, rapid response, community and home-care background",
  "Nurse-led assessment, documentation, escalation and care coordination",
];

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | NovaCare Nursing</title>
        <meta
          name="description"
          content="NovaCare Nursing provides advanced clinical nursing and consultancy across Hobart and surrounds, including IV iron infusions at home, complex wound and vascular nursing, palliative nursing, tracheostomy care, PEG feeding, ventilation support, catheter care, dementia support, NDIS provider-partnered nursing and aged care clinical governance."
        />
        <link rel="canonical" href="https://www.novacarenursing.com.au/services" />
      </Head>

      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 py-12">
        <section className="text-center">
          <p
            className="text-sm font-semibold uppercase tracking-[0.22em]"
            style={{ color: brand.gold }}
          >
            Advanced clinical nursing and consultancy
          </p>
          <h1
            className="mt-3 text-3xl md:text-5xl font-bold"
            style={{ color: brand.blue }}
          >
            NovaCare Nursing Services
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base md:text-lg leading-8 opacity-85">
            NovaCare Nursing delivers advanced clinical nursing and consultancy for people with
            complex health needs at home, and for providers requiring experienced clinical nursing
            input. Led by Palantina Hughes, an AHPRA-registered nurse with{" "}
            <strong>17 years of clinical nursing experience</strong>, NovaCare Nursing provides
            skilled assessment, practical care planning, documentation, education, coordination and
            safe escalation.
          </p>
        </section>

        <section className="mt-8 rounded-3xl border border-[#C6A662]/40 bg-[#F7F4EF] p-6 md:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h2 className="text-2xl font-semibold" style={{ color: brand.blue }}>
                Clinical nursing for complex care at home
              </h2>
              <p className="mt-3 text-[1rem] leading-8 opacity-90">
                Services are nurse-led, assessment-based, evidence-informed and delivered within
                Registered Nurse scope of practice. Care may include clinical assessment, wound and
                skin integrity care, vascular and high-risk foot support, IV infusions under written
                medical orders, palliative care, medication-related nursing support, continence and
                catheter care, respiratory and device support, care planning, documentation,
                education, referrals and clinical coordination.
              </p>
              <p className="mt-3 text-[1rem] leading-8 opacity-90">
                NovaCare Nursing does not replace the client&apos;s GP, specialist, pharmacist,
                emergency service, hospital or ambulance service. Medical diagnosis, prescribing and
                treatment decisions requiring a medical practitioner remain with the appropriate
                treating clinician.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm border border-white/70">
              <p className="font-semibold" style={{ color: brand.blue }}>
                Key service areas
              </p>
              <ul className="mt-3 space-y-2 text-sm opacity-90">
                {priorityServices.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span style={{ color: brand.gold }}>●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          {pathways.map((pathway) => (
            <div
              key={pathway.title}
              className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
            >
              <h2 className="text-lg font-semibold" style={{ color: brand.blue }}>
                {pathway.title}
              </h2>
              <p className="mt-2 text-sm leading-6 opacity-85">{pathway.description}</p>
              <Link
                href={pathway.href}
                className="mt-4 inline-block rounded-xl px-4 py-2 text-sm font-semibold transition hover:opacity-90"
                style={{ backgroundColor: brand.gold, color: brand.blue }}
              >
                {pathway.linkText}
              </Link>
            </div>
          ))}
        </section>

        <section className="mt-8 rounded-2xl border border-[#C6A662]/40 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold" style={{ color: brand.blue }}>
            IV iron infusions at home
          </h2>
          <p className="mt-3 text-[1rem] leading-8 opacity-90">
            At-home iron infusions may be suitable where the treating medical practitioner has
            assessed the client, prescribed the medication and provided a valid written drug chart,
            medication administration order or infusion order. NovaCare Nursing does not prescribe.
            The Registered Nurse role is to assess, confirm consent, check allergies and the written
            order, administer the infusion, monitor the client and IV site, document care and
            escalate any concerns.
          </p>
          <p className="mt-3 text-[1rem] leading-8 opacity-90">
            Emergency and escalation pathways are used for adverse reactions, clinical deterioration
            or anaphylaxis. If a serious reaction occurs, the infusion is stopped, emergency care is
            commenced, 000 is called where required, and the prescribing practitioner is notified.
          </p>
        </section>

        <section className="mt-10">
          <div className="text-center">
            <p
              className="text-sm font-semibold uppercase tracking-[0.22em]"
              style={{ color: brand.gold }}
            >
              Full service capability
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold" style={{ color: brand.blue }}>
              More than standard community nursing
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-[1rem] leading-8 opacity-85">
              NovaCare Nursing brings hospital-level assessment, community practicality, palliative
              care experience, wound expertise, complex-care judgement and provider-facing clinical
              governance into the home.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold" style={{ color: brand.blue }}>
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-6 opacity-80">{service.summary}</p>
                <ul className="mt-4 list-disc pl-5 space-y-2 text-sm leading-6 opacity-90">
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold" style={{ color: brand.blue }}>
            What you can expect from NovaCare Nursing
          </h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {trustPoints.map((point) => (
              <div
                key={point}
                className="rounded-xl bg-[#F7F4EF] px-4 py-3 text-sm font-medium opacity-95"
              >
                {point}
              </div>
            ))}
          </div>
          <p className="mt-5 text-[1rem] leading-8 opacity-90">
            Care is provided with clinical judgement, clear documentation, dignity, practical risk
            management and timely escalation. NovaCare Nursing may decline, delay, modify, stop or
            refer a service if the requested care is outside nursing scope, unsafe, unsupported by
            required information or clinically inappropriate.
          </p>
        </section>

        <div className="mt-12">
          <ServicesFaq />
        </div>
      </main>

      <ContactCta />
      <SiteFooter />
    </>
  );
}
