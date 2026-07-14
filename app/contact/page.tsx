export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-red-50 to-white py-16">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold text-gray-900">
            Contact Us
          </h1>

          <p className="mt-4 text-lg text-gray-600">
  We would love to hear from you. Reach out for news tips,
  feedback or business enquiries.
</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h2 className="text-3xl font-bold mb-8">
              Send us a Message
            </h2>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-xl p-4 outline-none focus:border-red-600"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-xl p-4 outline-none focus:border-red-600"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border rounded-xl p-4 outline-none focus:border-red-600"
              />

              <textarea
                rows={6}
                placeholder="Write your message..."
                className="w-full border rounded-xl p-4 outline-none focus:border-red-600"
              ></textarea>

              <button
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold transition"
              >
                Send Message
              </button>

            </form>

          </div>

          <div className="space-y-6">

            <div className="bg-white shadow-xl rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                📧 Email
              </h3>

              <p className="text-gray-600">
                contact@bharatbulletin.in
              </p>
            </div>

            <div className="bg-white shadow-xl rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                📍 Address
              </h3>

              <p className="text-gray-600">
                India
              </p>
            </div>

            <div className="bg-white shadow-xl rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                🌐 Follow Us
              </h3>

              <div className="flex gap-5 font-semibold">
                <span className="hover:text-red-600 cursor-pointer">
                  Facebook
                </span>

                <span className="hover:text-red-600 cursor-pointer">
                  Instagram
                </span>

                <span className="hover:text-red-600 cursor-pointer">
                  X
                </span>

                <span className="hover:text-red-600 cursor-pointer">
                  YouTube
                </span>

              </div>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}