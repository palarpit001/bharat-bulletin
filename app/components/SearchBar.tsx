"use client";

import { useState } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (!search.trim()) return;
    window.location.href = `/search?q=${encodeURIComponent(search)}`;
  };

  return (
    <div className="hidden lg:flex items-center flex-shrink-0 ml-6">
      <input
        type="text"
        placeholder="Search News..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
        className="px-3 py-2 w-52 border border-gray-300 rounded-l-lg outline-none focus:border-red-600"
      />

      <button
        onClick={handleSearch}
        className="bg-red-600 text-white px-4 py-2 rounded-r-lg font-bold hover:bg-red-700 transition"
      >
        Search
      </button>
    </div>
  );
}