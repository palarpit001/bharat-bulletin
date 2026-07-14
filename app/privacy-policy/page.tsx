export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-3xl p-10">

        <h1 className="text-5xl font-bold mb-8 text-red-600">
          Privacy Policy
        </h1>

        <div className="space-y-8 text-gray-700 leading-8">

          <section>
            <h2 className="text-2xl font-bold mb-3">Information We Collect</h2>
            <p>
              We may collect basic information such as your name, email address,
              browser type and device information to improve our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Cookies</h2>
            <p>
              Our website may use cookies to enhance user experience and improve
              website performance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Third-Party Services</h2>
            <p>
              We may use trusted third-party services such as analytics and
              advertising providers to improve our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Policy Updates</h2>
            <p>
              This Privacy Policy may be updated periodically without prior
              notice.
            </p>
          </section>

        </div>

      </div>
    </main>
  );
}