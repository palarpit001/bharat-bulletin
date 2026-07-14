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

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const nextDarkState = !isDarkMode;
    setIsDarkMode(nextDarkState);

    if (nextDarkState) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const handleMobileSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mobileSearch.trim()) return;
    window.location.href = `/search?q=${encodeURIComponent(mobileSearch)}`;
  };

  return (
    
    <header className="sticky top-0 z-[100] isolate bg-white/75 dark:bg-zinc-900/75 text-black dark:text-white backdrop-blur-md border-b border-gray-200/50 dark:border-zinc-800/50 shadow-sm transition-all duration-300">
      <div className="w-full flex items-center justify-between px-4 py-3 md:py-4">
        <Link href="/" className="flex items-center gap-2 md:gap-3 flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="Bharat Bulletin Logo"
            width={40}
            height={40}
            priority
            className="rounded-full md:w-[50px] md:h-[50px] ring-2 ring-red-500/10 dark:ring-red-500/20"
          />
          <div>
            <h1 className="text-lg md:text-2xl font-extrabold tracking-tight whitespace-nowrap text-zinc-900 dark:text-white">
              Bharat Bulletin
            </h1>
            <p className="text-[10px] md:text-xs text-gray-550 dark:text-gray-400 font-medium">
              Fast • Trusted • Unbiased
            </p>
          </div>
        </Link>

        <DesktopNav />

        <div className="flex items-center gap-3 md:gap-4">
          <div className="hidden lg:block">
            <SearchBar />
          </div>

          <button
            onClick={toggleDarkMode}
            className="p-2.5 rounded-full hover:bg-gray-100/80 dark:hover:bg-zinc-800/80 text-gray-600 dark:text-gray-300 transition-all duration-200 active:scale-90 touch-manipulation z-50"
            aria-label="Toggle Dark Mode"
            title="Toggle Theme"
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5.5 h-5.5 md:w-5 md:h-5 text-yellow-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21M9.75 12h-.75m11.25 0h-.75m-.456-6.33L16.2 6.945M8.1 15.9l-1.33 1.33M16.2 17.055l-1.33-1.33M8.1 8.1l-1.33-1.33M12 7.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5.5 h-5.5 md:w-5 md:h-5 text-zinc-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            )}
          </button>

          <button
            onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
            className="block lg:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-red-600 transition touch-manipulation"
            aria-label="Toggle Search"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>

          <MobileMenu />
        </div>
      </div>

      {/* FIX: Mobile search background updated to fully solid/opaque for clean contrast */}
      {isMobileSearchOpen && (
        <div className="block lg:hidden px-4 pb-4 pt-1 border-t border-gray-250/50 dark:border-zinc-800/50 bg-white dark:bg-zinc-950 transition-colors shadow-lg">
          <form onSubmit={handleMobileSearch} className="flex items-center w-full mt-2">
            <input
              type="text"
              placeholder="Search News..."
              value={mobileSearch}
              onChange={(e) => setMobileSearch(e.target.value)}
              className="px-3 py-2 w-full border border-gray-300/60 dark:border-zinc-700/60 rounded-l-lg outline-none focus:border-red-600 text-black dark:text-white bg-white dark:bg-zinc-900 text-sm"
              autoFocus
            />
            <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded-r-lg font-bold hover:bg-red-700 transition text-sm">
              Search
            </button>
          </form>
        </div>
      )}
    </header>
  );
}