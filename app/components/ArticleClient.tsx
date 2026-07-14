"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { db } from "../../lib/firebase";
import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export default function ArticleClient() {
  const params = useParams();
  const slug = params.slug as string;

  const [article, setArticle] = useState<any>(null);
  const [relatedNews, setRelatedNews] = useState<any[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speech, setSpeech] = useState<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const q = query(
        collection(db, "news"),
        where("slug", "==", slug)
      );

      const snap = await getDocs(q);

      if (snap.empty) return;

      const data = {
        id: snap.docs[0].id,
        ...snap.docs[0].data(),
      };

      setArticle(data);

      const relatedQuery = query(
        collection(db, "news"),
        where("category", "==", (data as any).category)
      );
      const relatedSnap = await getDocs(relatedQuery);

      const related = relatedSnap.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        .filter((item: any) => item.slug !== slug);

      setRelatedNews(related);
    };

    fetchArticle();
  }, [slug]);

  // AI Voice Synthesis Setup
  useEffect(() => {
    if (article && typeof window !== "undefined" && "speechSynthesis" in window) {
      // Pehle se chal rahi voice ko cancel karein
      window.speechSynthesis.cancel();
      
      const textToRead = `${article.title}. ${article.description}. ${article.content || ""}`;
      const utterance = new SpeechSynthesisUtterance(textToRead);
      
      // Auto voice selection (Hindi support)
      utterance.lang = "hi-IN"; 
      
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);
      
      setSpeech(utterance);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.speechSynthesis.cancel();
      }
    };
  }, [article]);

  if (!article) {
    return (
      <div className="text-center py-20 bg-white dark:bg-zinc-950 text-black dark:text-white transition-colors duration-300 min-h-screen">
        <h2 className="text-3xl font-bold">Article Not Found</h2>
        <p className="text-gray-500 dark:text-gray-400 mt-3">
          This article is not available.
        </p>
      </div>
    );
  }

  // Calculate Reading Time
  const calculateReadTime = (text: string) => {
    const wordsPerMinute = 200; // Average speed
    const words = text.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  // Play / Pause Audio News
  const handleAudioPlay = () => {
    if (!speech) return;

    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      window.speechSynthesis.speak(speech);
      setIsPlaying(true);
    }
  };

  const currentUrl =
    typeof window !== "undefined"
      ? window.location.href
      : "";

  const whatsappShare = () => {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(
        article.title + " " + currentUrl
      )}`
    );
  };

  const facebookShare = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        currentUrl
      )}`
    );
  };

  const xShare = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        article.title
      )}&url=${encodeURIComponent(currentUrl)}`
    );
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(currentUrl);
    alert("✅ Link Copied");
  };

  const paragraphs = article.content.split("\n\n");

  return (
    <main className="w-full bg-gray-50 dark:bg-zinc-950 text-black dark:text-white transition-colors duration-300 py-10">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Category Tag */}
        <span className="bg-red-600 text-white px-4 py-2 rounded-full font-semibold text-sm">
          {article.category}
        </span>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold mt-6 leading-tight dark:text-white">
          {article.title}
        </h1>

        {/* Meta details with Dynamic Read Time and Audio News */}
        <div className="flex flex-wrap gap-4 justify-between items-center border-b dark:border-zinc-800 pb-5 mt-6 text-gray-500 dark:text-gray-400">
          <div className="flex gap-4 items-center text-sm md:text-base">
            <p>✍️ {article.author}</p>
            <p>📅 {article.date}</p>
            <p className="hidden sm:block">⏱️ {calculateReadTime(article.content)}</p>
          </div>

          {/* AI Voice Player Button */}
          <button 
            onClick={handleAudioPlay}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 font-bold hover:bg-red-200 dark:hover:bg-red-900/60 transition-colors duration-200 text-sm"
          >
            {isPlaying ? (
              <>
                <span className="w-2 .5 h-2 .5 rounded-full bg-red-600 animate-ping"></span>
                Stop Audio News 🛑
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                Listen Audio News 🔊
              </>
            )}
          </button>
        </div>

        {/* Social Sharing Row */}
        <div className="flex gap-3 flex-wrap mt-8">
          <button
            onClick={whatsappShare}
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg font-medium transition"
          >
            WhatsApp
          </button>

          <button
            onClick={facebookShare}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transition"
          >
            Facebook
          </button>

          <button
            onClick={xShare}
            className="bg-black hover:bg-zinc-900 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-white px-5 py-2.5 rounded-lg font-medium transition"
          >
            X
          </button>

          <button
            onClick={copyLink}
            className="bg-gray-700 hover:bg-gray-800 text-white px-5 py-2.5 rounded-lg font-medium transition"
          >
            Copy Link
          </button>
        </div>

        {/* Premium Article Container (Dark/Light friendly) */}
        <article className="bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 mt-10 p-6 md:p-10 rounded-xl shadow-lg text-lg leading-relaxed text-gray-800 dark:text-gray-200 transition-colors duration-300">
          
          <p className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-8 border-l-4 border-red-600 pl-4">
            {article.description}
          </p>

          {paragraphs.map((para: string, index: number) => (
            <div key={index}>
              <p className="mb-6 whitespace-pre-line text-gray-800 dark:text-gray-200">
                {para}
              </p>

              {index === 0 && (
                <div className="my-8 overflow-hidden rounded-xl shadow-md group">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              )}
            </div>
          ))}
        </article>

        {/* Related News Section with Zoom effects */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8 dark:text-white">
            Related News
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedNews.map((item: any) => (
              <Link
                key={item.id}
                href={`/article/${item.slug}`}
                className="bg-white dark:bg-zinc-900 rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-zinc-800 group"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-4">
                  <span className="bg-red-600 text-white px-2.5 py-1 rounded text-xs font-semibold">
                    {item.category}
                  </span>

                  <h3 className="font-bold mt-3 line-clamp-2 text-gray-900 dark:text-white group-hover:text-red-600 transition-colors duration-200">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    {item.date}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}