"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../lib/firebase";

export default function HeroSlider() {
  const [news, setNews] = useState<any[]>([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const fetchNews = async () => {
      const snapshot = await getDocs(collection(db, "news"));
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })).filter((item: any) => item.featured);
      setNews(data);
    };
    fetchNews();
  }, []);

  if (news.length === 0) return null;
  const article = news[current];

  return (
    <section className="relative z-0 max-w-7xl mx-auto px-4 mt-8">
      <Link href={`/article/${article.slug}`} className="relative block overflow-hidden rounded-2xl shadow-xl">
        <img src={article.image} alt={article.title} className="w-full h-[500px] object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-end p-8 text-white">
          <h2 className="text-5xl font-bold">{article.title}</h2>
        </div>
      </Link>
    </section>
  );
}