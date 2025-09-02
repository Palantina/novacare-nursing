import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <Image
        src="/hero_novacare.jpg"   // ✅ matches your actual file name
        alt="Nurse caring for patient"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          NovaCare Nursing
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl">
          Premium Nursing, Heartfelt Care in Hobart and Surrounds, Tasmania
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block bg-[#C6A662] text-[#0B2D5C] px-6 py-3 rounded-lg shadow hover:opacity-90 transition"
        >
          Book a Consultation
        </a>
      </div>
    </section>
  );
}
