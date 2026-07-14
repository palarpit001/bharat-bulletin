import Header from "../components/Header";
import Footer from "../components/Footer";
import BreakingNews from "../components/BreakingNews";
import ArticleCard from "../components/ArticleCard";
import { news } from "../../data/news";

export default function SportsPage() {
  const sportsNews = news.filter(
    (article) => article.category === "Sports"
  );

  return (
    <main className="bg-gray-100 min-h-screen">
      <Header />
      <BreakingNews />

      <section className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold border-l-4 border-red-600 pl-4 mb-8">
          Sports News
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sportsNews.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
            />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}