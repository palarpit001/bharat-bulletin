"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
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

export default function FirebaseNews() {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      const q = query(collection(db, "news"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as News[];

      setNews(data);
    };

    fetchNews();
  }, []);

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
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-4">
                <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                  {article.category}
                </span>

                <h3 className="font-bold text-2xl mt-3">
                  {article.title}
                </h3>

                <p className="text-gray-600 mt-3">
                  {article.description}
                </p>

                <div className="mt-4 flex justify-between text-sm text-gray-500">
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