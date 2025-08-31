export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-blue-900 text-white text-center p-6">
        <h1 className="text-3xl font-bold">NovaCare Nursing</h1>
        <p className="mt-2">Premium Nursing, Heartfelt Care in Hobart and Surrounds, Tasmania</p>
        <a
          href="mailto:info@novacarenursing.com.au?subject=Consultation Request&body=Hello, I would like to book a consultation."
          className="inline-block mt-4 px-6 py-2 bg-blue-600 rounded-lg font-semibold hover:bg-blue-500"
        >
          Book a Consultation
        </a>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto p-6">
        <section>
          <h2 className="text-2xl font-bold text-blue-900 mt-8">Meet Your Specialist</h2>
          <p className="mt-4 font-semibold">Palantina Hughes, RN</p>
          <p>Clinical Home Care Nurse Specialist</p>
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

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center p-4 mt-12">
        <p>© 2025 NovaCare Nursing. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
