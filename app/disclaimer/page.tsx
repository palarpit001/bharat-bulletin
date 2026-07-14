export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-3xl p-10">

        <h1 className="text-5xl font-bold text-red-600 mb-8">
          Disclaimer
        </h1>

        <div className="space-y-8 text-gray-700 leading-8">

          <section>
            <h2 className="text-2xl font-bold mb-3">
              General Information
            </h2>

            <p>
              The information published on Bharat Bulletin is provided for
              general informational purposes only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">
              Accuracy
            </h2>

            <p>
              We strive to ensure accuracy, but we cannot guarantee that all
              information is complete or error-free.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">
              External Links
            </h2>

            <p>
              We may link to third-party websites. We are not responsible for
              their content or privacy practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">
              Consent
            </h2>

            <p>
              By using this website, you agree to this disclaimer.
            </p>
          </section>

        </div>

      </div>
    </main>
  );
}