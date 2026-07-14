"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import DesktopNav from "./DesktopNav";
import SearchBar from "./SearchBar";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [mobileSearch, setMobileSearch] = useState("");

  const handleMobileSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mobileSearch.trim()) return;
    window.location.href = `/search?q=${encodeURIComponent(mobileSearch)}`;
  };

  return (
    <header className="sticky top-0 z-50 bg-white text-black shadow-lg border-b border-gray-200">
      {/* Main Row */}
      <div className="w-full flex items-center justify-between px-4 py-4">

        {/* 1. Logo and Title */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="Bharat Bulletin Logo"
            width={50}
            height={50}
            priority
            className="rounded-full"
          />
          <div>
            <h1 className="text-2xl font-bold whitespace-nowrap">
              Bharat Bulletin
            </h1>
            <p className="text-xs text-gray-500">
              Fast • Trusted • Unbiased
            </p>
          </div>
        </Link>

        {/* 2. Desktop Navigation (Hidden on Mobile) */}
        <DesktopNav />

        {/* Right Actions Wrapper (Desktop search bar aur Mobile icons ke liye) */}
        <div className="flex items-center gap-4">
          
          {/* Desktop Search Bar (Only Desktop) */}
          <div className="hidden lg:block">
            <SearchBar />
          </div>

          {/* Mobile Search Icon (Bharat Bulletin aur Menu ke beech) */}
          <button
            onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
            className="block lg:hidden p-2 text-gray-600 hover:text-red-600 transition"
            aria-label="Toggle Search"
          >
            {/* Search Icon (Magnifying Glass SVG) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>

          {/* 3. Mobile Menu (Hamburger Icon) */}
          <MobileMenu />
        </div>
      </div>

      {/* Slide-down Search Bar for Mobile (Jab user icon par click karega tabhi open hoga) */}
      {isMobileSearchOpen && (
        <div className="block lg:hidden px-4 pb-4 pt-1 border-t border-gray-100 bg-gray-50 animate-fadeIn">
          <form onSubmit={handleMobileSearch} className="flex items-center w-full">
            <input
              type="text"
              placeholder="Search News..."
              value={mobileSearch}
              onChange={(e) => setMobileSearch(e.target.value)}
              className="px-3 py-2 w-full border border-gray-300 rounded-l-lg outline-none focus:border-red-600 text-black bg-white"
              autoFocus
            />
            <button
              type="submit"
              className="bg-red-600 text-white px-4 py-2 rounded-r-lg font-bold hover:bg-red-700 transition"
            >
              Search
            </button>
          </form>
        </div>
      )}
    </header>
  );
}