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
        where("category", "==", data.category)
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

  if (!article) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold">Article Not Found</h2>
        <p className="text-gray-500 mt-3">
          This article is not available.
        </p>
      </div>
    );
  }

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
    <main className="max-w-5xl mx-auto py-10 px-4">

      <span className="bg-red-600 text-white px-4 py-2 rounded-full">
        {article.category}
      </span>

      <h1 className="text-5xl font-bold mt-6 leading-tight">
        {article.title}
      </h1>

      <div className="flex justify-between items-center border-b pb-5 mt-6 text-gray-500">
        <p>✍️ {article.author}</p>
        <p>📅 {article.date}</p>
      </div>

      <div className="flex gap-3 flex-wrap mt-8">

        <button
          onClick={whatsappShare}
          className="bg-green-600 text-white px-5 py-3 rounded-lg"
        >
          WhatsApp
        </button>

        <button
          onClick={facebookShare}
          className="bg-blue-600 text-white px-5 py-3 rounded-lg"
        >
          Facebook
        </button>

        <button
          onClick={xShare}
          className="bg-black text-white px-5 py-3 rounded-lg"
        >
          X
        </button>

        <button
          onClick={copyLink}
          className="bg-gray-700 text-white px-5 py-3 rounded-lg"
        >
          Copy Link
        </button>

      </div>

      <article className="bg-white mt-10 p-8 rounded-xl shadow text-lg leading-9">

  <p className="text-xl text-gray-700 mb-8">
    {article.description}
  </p>

  {paragraphs.map((para: string, index: number) => (
    <div key={index}>

      <p className="mb-6 whitespace-pre-line">
        {para}
      </p>

      {index === 0 && (
        <img
          src={article.image}
          alt={article.title}
          className="w-full rounded-xl my-8"
        />
      )}

    </div>
  ))}

</article>

      <section className="mt-16">

        <h2 className="text-3xl font-bold mb-8">
          Related News
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {relatedNews.map((item: any) => (

            <Link
              key={item.id}
              href={`/article/${item.slug}`}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-1 transition"
            >

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-4">

                <span className="bg-red-600 text-white px-2 py-1 rounded text-xs">
                  {item.category}
                </span>

                <h3 className="font-bold mt-3 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  {item.date}
                </p>

              </div>

            </Link>

          ))}

        </div>

      </section>

    </main>
  );
}