"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { db } from "../../lib/firebase";

import {
  collection,
  getDocs,
} from "firebase/firestore";

interface News {
  id: string;
  slug: string;
  title: string;
  date: string;
}

export default function TrendingNews() {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      const snapshot = await getDocs(collection(db, "news"));

const data = snapshot.docs
  .map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  .filter((item: any) => (item as Record<string, any>).trending === true)
  .slice(0, 5) as News[];

setNews(data);
    };

    fetchNews();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">

      <h2 className="text-2xl font-bold border-l-4 border-red-600 pl-3 mb-6">
        🔥 Trending News
      </h2>

      <div className="space-y-5">

        {news.map((article, index) => (
          <Link
            key={article.id}
            href={`/article/${article.slug}`}
            className="flex gap-4 group"
          >
            <span className="text-3xl font-bold text-red-600">
              {index + 1}
            </span>

            <div>
              <h3 className="font-semibold group-hover:text-red-600 transition">
                {article.title}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                {article.date}
              </p>
            </div>

          </Link>
        ))}

      </div>

    </div>
  );
}