import Link from "next/link";
import { news } from "../../data/news";

export default function NewsCard() {
  return (
    <section className="w-full">
      <h2 className="text-4xl font-bold mb-8 border-l-4 border-red-600 pl-4">
        Latest News
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {news.map((article) => (
          <Link
            key={article.id}
            href={`/article/${article.slug}`}
            className="block h-full"
          >
            <div
              className="
                bg-white rounded-xl shadow-lg overflow-hidden
                hover:shadow-2xl hover:-translate-y-1
                transition-all duration-300
                flex flex-row lg:flex-col
                h-[175px] lg:h-full
              "
            >
              {/* Image */}
              <div className="w-28 sm:w-32 lg:w-full flex-shrink-0">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full lg:h-56 object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">

                <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full w-fit">
                  {article.category}
                </span>

                <h3 className="font-bold text-base lg:text-2xl mt-2 leading-5">
                  {article.title}
                </h3>

                {/* Mobile + Desktop Description */}
                <p className="text-gray-600 text-sm mt-2 line-clamp-2 lg:line-clamp-none">
                  {article.description}
                </p>

                <div className="mt-auto pt-3 flex justify-between text-xs lg:text-sm text-gray-500">
                  <span>{article.author}</span>
                  <span>{article.date}</span>
                </div>

              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}