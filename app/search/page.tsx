// app/search/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../lib/firebase";

interface News {
  id: string;
  slug: string;
  title: string;
  category: string;
  image: string;
  description: string;
  content: string;
  author: string;
  date: string;
}

export default function SearchPage() {
  const searchParams = useSearchParams();
  const q = (searchParams.get("q") || "").toLowerCase();

  const [results, setResults] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const snap = await getDocs(collection(db, "news"));
        const data = snap.docs.map(doc => ({
          id: doc.id,
          ...(doc.data() as Omit<News,"id">)
        })) as News[];

        setResults(
          data.filter(item =>
            item.title.toLowerCase().includes(q) ||
            item.description.toLowerCase().includes(q) ||
            item.category.toLowerCase().includes(q)
          )
        );
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [q]);

  if (loading) {
    return (
      <main className="max-w-7xl mx-auto p-8">
        <h1 className="text-3xl font-bold">Loading...</h1>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-2">Search Results</h1>
      <p className="text-gray-500 mb-8">Keyword: <b>{q}</b></p>

      {results.length === 0 ? (
        <p className="text-xl">No news found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map(article => (
            <Link
              key={article.id}
              href={`/article/${article.slug}`}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">
                  {article.category}
                </span>

                <h2 className="text-2xl font-bold mt-3">
                  {article.title}
                </h2>

                <p className="text-gray-600 mt-3">
                  {article.description}
                </p>

                <div className="flex justify-between mt-4 text-sm text-gray-500">
                  <span>{article.author}</span>
                  <span>{article.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
