"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import DesktopNav from "./DesktopNav";
import SearchBar from "./SearchBar";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [mobileSearch, setMobileSearch] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  // 1. Live Time Update and Dark Mode Initialize
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      };
      setCurrentTime(now.toLocaleDateString("en-US", options));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute

    // Initial Dark Mode Check
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }

    return () => clearInterval(interval);
  }, []);

  // 2. Dark Mode Toggle Handler
  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  const handleMobileSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mobileSearch.trim()) return;
    window.location.href = `/search?q=${encodeURIComponent(mobileSearch)}`;
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-zinc-900 text-black dark:text-white shadow-lg border-b border-gray-200 dark:border-zinc-800 transition-colors duration-300">
      
      {/* Dynamic Mini-Header Strip */}
      <div className="hidden md:flex justify-between items-center bg-zinc-100 dark:bg-zinc-950 px-6 py-1.5 text-xs text-gray-600 dark:text-gray-400 border-b border-gray-200 dark:border-zinc-800 transition-colors duration-300">
        <div className="flex items-center gap-4">
          <span className="font-semibold text-red-600 dark:text-red-500">LIVE:</span>
          <span>{currentTime || "Loading Date & Time..."}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-medium">Trending:</span>
          <Link href="/search?q=india" className="hover:text-red-600 dark:hover:text-red-400 transition">#India</Link>
          <Link href="/search?q=tech" className="hover:text-red-600 dark:hover:text-red-400 transition">#Tech</Link>
          <Link href="/search?q=world" className="hover:text-red-600 dark:hover:text-red-400 transition">#World</Link>
        </div>
      </div>

      {/* Main Header Row */}
      <div className="w-full flex items-center justify-between px-4 py-4">

        {/* Logo and Title */}
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
            <h1 className="text-2xl font-bold whitespace-nowrap text-zinc-900 dark:text-white">
              Bharat Bulletin
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Fast • Trusted • Unbiased
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <DesktopNav />

        {/* Actions Section */}
        <div className="flex items-center gap-3 md:gap-4">
          
          {/* Desktop Search Bar */}
          <div className="hidden lg:block">
            <SearchBar />
          </div>

          {/* Premium Dark Mode Toggle Switch */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-600 dark:text-gray-300 transition-colors"
            title="Toggle Theme"
          >
            {isDarkMode ? (
              // Sun Icon
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-yellow-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21M9.75 12h-.75m11.25 0h-.75m-.456-6.33L16.2 6.945M8.1 15.9l-1.33 1.33M16.2 17.055l-1.33-1.33M8.1 8.1l-1.33-1.33M12 7.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9z" />
              </svg>
            ) : (
              // Moon Icon
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-zinc-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            )}
          </button>

          {/* Mobile Search Toggle Icon */}
          <button
            onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
            className="block lg:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-red-600 transition"
            aria-label="Toggle Search"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>

          {/* Mobile Hamburger Menu */}
          <MobileMenu />
        </div>
      </div>

      {/* Slide-down Mobile Search */}
      {isMobileSearchOpen && (
        <div className="block lg:hidden px-4 pb-4 pt-1 border-t border-gray-100 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-950 transition-colors">
          <form onSubmit={handleMobileSearch} className="flex items-center w-full">
            <input
              type="text"
              placeholder="Search News..."
              value={mobileSearch}
              onChange={(e) => setMobileSearch(e.target.value)}
              className="px-3 py-2 w-full border border-gray-300 dark:border-zinc-700 rounded-l-lg outline-none focus:border-red-600 text-black dark:text-white bg-white dark:bg-zinc-800"
              autoFocus
            />
            <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded-r-lg font-bold hover:bg-red-700 transition">
              Search
            </button>
          </form>
        </div>
      )}
    </header>
  );
}