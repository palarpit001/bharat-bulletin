"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../lib/firebase";

export default function BreakingNews() {
  const [text, setText] = useState(
    "🔴 Bharat Bulletin | Latest News | Live Updates"
  );

  useEffect(() => {
    const fetchBreaking = async () => {
      try {
        const snapshot = await getDocs(collection(db, "news"));

        const headlines = snapshot.docs
          .map((doc) => doc.data())
          .filter((item: any) => item.breaking === true)
          .map((item: any) => `🔴 ${item.title}`)
          .join("   |   ");

        if (headlines) {
          setText(headlines);
        }
      } catch (error) {
        console.error("Error fetching breaking news:", error);
      }
    };

    fetchBreaking();
  }, []);

  return (
    <div className="bg-red-700 text-white py-3 overflow-hidden">
      <div className="flex whitespace-nowrap ticker">
        <span className="text-lg font-semibold pr-16">
          {text}
        </span>

        <span className="text-lg font-semibold pr-16">
          {text}
        </span>
      </div>
    </div>
  );
}