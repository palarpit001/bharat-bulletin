export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 px-4">

      {/* Main News */}
      <div className="lg:col-span-2 bg-white rounded-xl shadow-lg overflow-hidden">

        <img
          src="https://picsum.photos/1200/600"
          alt="Breaking News"
          className="w-full h-[450px] object-cover"
        />

        <div className="p-6">

          <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">
            Breaking News
          </span>

          <h2 className="text-4xl font-bold mt-4">
            India's Biggest Breaking News Headline
          </h2>

          <p className="text-gray-600 mt-4">
            This is the featured news of the day. Tomorrow this section will automatically display the latest article.
          </p>

          <button className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg">
            Read Full Story
          </button>

        </div>

      </div>

      {/* Trending */}
      <div className="bg-white rounded-xl shadow-lg p-6">

        <h3 className="text-2xl font-bold mb-5">
          🔥 Trending
        </h3>

        <ul className="space-y-4">
          <li>▶ India News</li>
          <li>▶ World News</li>
          <li>▶ Sports Update</li>
          <li>▶ Business News</li>
          <li>▶ Technology</li>
          <li>▶ Education</li>
        </ul>

      </div>

    </section>
  );
}