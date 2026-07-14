"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../lib/firebase";
import Link from "next/link";

interface BreakingNewsItem {
  title: string;
  slug: string;
}

export default function BreakingNews() {
  const [newsList, setNewsList] = useState<BreakingNewsItem[]>([]);

  useEffect(() => {
    const fetchBreaking = async () => {
      try {
        const snapshot = await getDocs(collection(db, "news"));

        const breakingItems = snapshot.docs
          .map((doc) => doc.data())
          .filter((item: any) => item.breaking === true)
          .map((item: any) => ({
            title: item.title,
            slug: item.slug,
          }));

        if (breakingItems.length > 0) {
          setNewsList(breakingItems);
        }
      } catch (error) {
        console.error("Error fetching breaking news:", error);
      }
    };

    fetchBreaking();
  }, []);

  // Default text jab tak Firebase se news load na ho
  const renderDefault = () => (
    <span className="text-sm md:text-base font-semibold pr-16 text-white">
      🔴 Bharat Bulletin | Latest News | Live Updates
    </span>
  );

  // Dynamic news list render karne ke liye helper
  const renderNewsItems = () => {
    if (newsList.length === 0) return renderDefault();

    return newsList.map((item, index) => (
      <span key={index} className="inline-flex items-center text-sm md:text-base font-semibold pr-16">
        <span className="text-yellow-300 mr-2">🔴</span>
        <Link 
          href={`/article/${item.slug}`} 
          className="hover:underline hover:text-yellow-200 text-white transition-colors duration-200"
        >
          {item.title}
        </Link>
        <span className="mx-8 text-red-300">|</span>
      </span>
    ));
  };

  return (
    <div className="bg-red-700 dark:bg-red-800 text-white py-2.5 md:py-3 overflow-hidden border-b border-red-800 dark:border-red-900 transition-colors duration-300">
      {/* group/ticker lagaya hai taaki user mouse le jaye toh animation pause ho sake aur click karne mein mushkil na ho */}
      <div className="flex whitespace-nowrap ticker hover:[animation-play-state:paused] cursor-pointer">
        <div className="inline-block">
          {renderNewsItems()}
        </div>
        {/* Doosra block loop ko seamless chalane ke liye */}
        <div className="inline-block" aria-hidden="true">
          {renderNewsItems()}
        </div>
      </div>
    </div>
  );
}