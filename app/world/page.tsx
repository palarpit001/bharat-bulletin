export default function WorldPage() {
  return (
    <main className="max-w-7xl mx-auto p-6">
      <h1 className="text-5xl font-bold text-blue-700 mb-8">
        World News
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1,2,3,4,5,6].map((item) => (
          <div
            key={item}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={`https://picsum.photos/500/300?random=${item+10}`}
              alt="World News"
              className="w-full h-56 object-cover"
            />

            <div className="p-5">
              <h2 className="text-xl font-bold">
                World Breaking News {item}
              </h2>

              <p className="text-gray-600 mt-3">
                Latest international news from around the world.
              </p>

              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}