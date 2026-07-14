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
    <header className="sticky top-0 z-[60] bg-white/75 dark:bg-zinc-900/75 text-black dark:text-white backdrop-blur-md border-b border-gray-200/50 dark:border-zinc-800/50 shadow-sm transition-all duration-300">
      <div className="w-full flex items-center justify-between px-4 py-3 md:py-4">
        <Link href="/" className="flex items-center gap-2 md:gap-3 flex-shrink-0">
          <Image src="/images/logo.png" alt="Bharat Bulletin Logo" width={40} height={40} priority className="rounded-full md:w-[50px] md:h-[50px]" />
          <div>
            <h1 className="text-lg md:text-2xl font-extrabold tracking-tight">Bharat Bulletin</h1>
          </div>
        </Link>
        <DesktopNav />
        <div className="flex items-center gap-3">
          <div className="hidden lg:block"><SearchBar /></div>
          <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800">Theme</button>
          <button onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)} className="lg:hidden p-2">Search</button>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}