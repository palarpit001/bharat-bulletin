export default function AboutPage() {
  return (
    <main className="bg-gradient-to-b from-red-50 via-white to-gray-100 min-h-screen">

      {/* Hero */}
      <section className="bg-red-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-extrabold">
            About Bharat Bulletin
          </h1>

          <p className="mt-6 text-xl text-red-100 max-w-3xl mx-auto leading-8">
            Delivering fast, trusted and unbiased news from India and around the
            world with accuracy, transparency and credibility.
          </p>

        </div>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Who We Are
          </h2>

          <p className="text-lg text-gray-700 leading-9">
            Bharat Bulletin is an independent digital news platform dedicated to
            providing reliable, unbiased and easy-to-understand news. Our
            mission is to keep readers informed through factual reporting across
            politics, business, sports, technology, education and world affairs.
          </p>

        </div>

      </section>

      {/* Cards */}
      <section className="max-w-6xl mx-auto px-6 pb-16">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 transition">
            <div className="text-5xl mb-5">🎯</div>

            <h3 className="text-2xl font-bold mb-4">
              Our Mission
            </h3>

            <p className="text-gray-600 leading-7">
              To provide trustworthy journalism that empowers readers with
              accurate information.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 transition">
            <div className="text-5xl mb-5">👁</div>

            <h3 className="text-2xl font-bold mb-4">
              Our Vision
            </h3>

            <p className="text-gray-600 leading-7">
              To become one of India's leading digital news platforms known for
              credibility and transparency.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 transition">
            <div className="text-5xl mb-5">⭐</div>

            <h3 className="text-2xl font-bold mb-4">
              Our Values
            </h3>

            <p className="text-gray-600 leading-7">
              Accuracy, fairness, transparency and responsible journalism are
              the foundation of our reporting.
            </p>
          </div>

        </div>

      </section>

      {/* Why Choose */}
      <section className="bg-gray-900 text-white py-16">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Bharat Bulletin?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white/10 rounded-xl p-6">
              ✅ Fast & Accurate News Updates
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              ✅ Unbiased Reporting
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              ✅ Trusted Information
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              ✅ Reader-Friendly Experience
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}