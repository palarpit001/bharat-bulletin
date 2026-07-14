import Link from "next/link";
import { News } from "../../data/news";

type Props = {
  article: News;
};

export default function ArticleCard({ article }: Props) {
  return (
    <Link
      href={`/article/${article.slug}`}
      className="block h-full"
    >
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col h-full">

        <img
          src={article.image}
          alt={article.title}
          className="w-full h-56 object-cover"
        />

        <div className="p-5 flex flex-col flex-1">

          <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full w-fit">
            {article.category}
          </span>

          <h3 className="text-2xl font-bold mt-4 min-h-[64px]">
            {article.title}
          </h3>

          <p className="text-gray-600 mt-3 min-h-[72px]">
            {article.description}
          </p>

          <div className="flex justify-between items-center mt-auto pt-4 text-sm text-gray-500">
            <span>{article.author}</span>
            <span>{article.date}</span>
          </div>

        </div>

      </div>
    </Link>
  );
}