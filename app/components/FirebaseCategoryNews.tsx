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
  author: string;
  date: string;
}

export default function FirebaseCategoryNews({
  category,
}: {
  category: string;
}) {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      const q = query(
        collection(db, "news"),
        orderBy("createdAt", "desc")
      );

      const snapshot = await getDocs(q);

      const data = snapshot.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        .filter(
          (item: any) =>
            item.category.toLowerCase() === category.toLowerCase()
        ) as News[];

      setNews(data);
    };

    fetchNews();
  }, [category]);

  if (news.length === 0) {
    return (
      <div className="text-center text-2xl py-20">
        No news found in this category.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {news.map((article) => (
        <Link
          key={article.id}
          href={`/article/${article.slug}`}
          className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
        >
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-56 object-cover"
          />

          <div className="p-5">
            <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full">
              {article.category}
            </span>

            <h2 className="text-2xl font-bold mt-4">
              {article.title}
            </h2>

            <p className="text-gray-600 mt-3">
              {article.description}
            </p>

            <div className="flex justify-between mt-5 text-sm text-gray-500">
              <span>{article.author}</span>
              <span>{article.date}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}