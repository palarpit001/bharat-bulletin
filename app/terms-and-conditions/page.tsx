export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-3xl p-10">

        <h1 className="text-5xl font-bold text-red-600 mb-8">
          Terms & Conditions
        </h1>

        <div className="space-y-8 text-gray-700 leading-8">

          <section>
            <h2 className="text-2xl font-bold mb-3">
              Acceptance of Terms
            </h2>

            <p>
              By accessing Bharat Bulletin, you agree to follow these terms and
              conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">
              Content Usage
            </h2>

            <p>
              Content published on this website is intended for informational
              purposes only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">
              Intellectual Property
            </h2>

            <p>
              All content, graphics and branding belong to Bharat Bulletin
              unless otherwise stated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">
              Changes
            </h2>

            <p>
              We reserve the right to modify these terms at any time.
            </p>
          </section>

        </div>

      </div>
    </main>
  );
}