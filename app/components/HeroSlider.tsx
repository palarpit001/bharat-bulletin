"use client";

import { useEffect, useState } from "react";
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
}

export default function HeroSlider() {
  const [news, setNews] = useState<News[]>([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const fetchNews = async () => {
      const snapshot = await getDocs(collection(db, "news"));

      const data = snapshot.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        .filter((item: any) => item.featured === true) as News[];

      setNews(data);
    };

    fetchNews();
  }, []);

  useEffect(() => {
    if (news.length === 0) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % news.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [news]);

  if (news.length === 0) {
    return null;
  }

  const article = news[current];

  return (
    /* Humne yahan relative aur z-0 laga diya hai */
    <section className="relative z-0 max-w-7xl mx-auto px-4 mt-8">
      <Link
        href={`/article/${article.slug}`}
        className="relative block overflow-hidden rounded-2xl shadow-xl group"
      >
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Dark overlay with content */}
        <div className="absolute inset-0 bg-black/50 flex items-end">
          <div className="p-8 text-white">
            <span className="bg-red-600 px-3 py-1 rounded-full text-sm">
              {article.category}
            </span>

            <h2 className="text-5xl font-bold mt-4">
              {article.title}
            </h2>

            <p className="mt-4 text-lg max-w-2xl">
              {article.description}
            </p>
          </div>
        </div>

        {/* Prev Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setCurrent((prev) => (prev - 1 + news.length) % news.length);
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-black w-12 h-12 rounded-full text-2xl flex items-center justify-center hover:bg-gray-150 transition"
        >
          ‹
        </button>

        {/* Next Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setCurrent((prev) => (prev + 1) % news.length);
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-black w-12 h-12 rounded-full text-2xl flex items-center justify-center hover:bg-gray-150 transition"
        >
          ›
        </button>
      </Link>
    </section>
  );
}