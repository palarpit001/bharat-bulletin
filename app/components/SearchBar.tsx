"use client";

import { useState } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (!search.trim()) return;
    window.location.href = `/search?q=${encodeURIComponent(search)}`;
  };

  return (
    // Humne 'hidden lg:flex' hata kar isko normal 'flex' kar diya hai
    // taaki yeh har screen par dikhe, aur desktop par thoda margin (lg:ml-6) dega.
    <div className="flex items-center w-full lg:w-auto lg:ml-6">
      <input
        type="text"
        placeholder="Search News..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
        // 'w-full lg:w-52' karne se mobile par full screen broad ho jayega aur desktop par normal 52 width.
        className="px-3 py-2 w-full lg:w-52 border border-gray-300 rounded-l-lg outline-none focus:border-red-600 text-black"
      />

      <button
        onClick={handleSearch}
        className="bg-red-600 text-white px-4 py-2 rounded-r-lg font-bold hover:bg-red-700 transition flex-shrink-0"
      >
        Search
      </button>
    </div>
  );
}