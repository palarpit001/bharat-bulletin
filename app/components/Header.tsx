"use client";

import Image from "next/image";
import Link from "next/link";
import DesktopNav from "./DesktopNav";
import SearchBar from "./SearchBar";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white text-black shadow-lg border-b border-gray-200">
      {/* Top Main Row */}
      <div className="w-full flex items-center justify-between px-4 py-4">

        {/* Logo */}
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

        {/* Desktop Navigation (Sirf Desktop par dikhega) */}
        <DesktopNav />

        {/* Desktop Search (Humne classes add ki hain taaki yeh desktop par hi dikhe) */}
        <div className="hidden md:block flex-grow max-w-md mx-4">
          <SearchBar />
        </div>

        {/* Mobile Menu (Hamburger Icon) */}
        <MobileMenu />

      </div>

      {/* Mobile Search Row (Yeh sirf mobile screens par logo ke niche alag se dikhega) */}
      <div className="block md:hidden px-4 pb-3">
        <SearchBar />
      </div>
    </header>
  );
}