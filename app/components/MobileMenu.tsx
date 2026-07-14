"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Menu Button */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden ml-auto p-2 text-zinc-800 dark:text-zinc-200"
        aria-label="Open Menu"
      >
        <Menu size={30} />
      </button>

      {/* Dark Overlay: Screen background dim karne ke liye */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-[100000]"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar Navigation: z-[100001] lagaya hai jo har cheez ko piche dhakel dega */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 shadow-2xl z-[100001] transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-zinc-150 dark:border-zinc-800 bg-white dark:bg-zinc-950">
          <h2 className="text-xl font-extrabold tracking-tight">Menu</h2>

          <button 
            onClick={() => setOpen(false)}
            className="p-1 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-600 dark:text-zinc-400 transition"
          >
            <X size={28} />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col p-5 gap-1.5 text-lg font-bold bg-white dark:bg-zinc-950 h-[calc(100%-80px)] overflow-y-auto">
          <Link 
            href="/" 
            onClick={() => setOpen(false)}
            className="px-4 py-3 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-red-600 dark:hover:text-red-400 transition"
          >
            Home
          </Link>

          <Link 
            href="/category/india" 
            onClick={() => setOpen(false)}
            className="px-4 py-3 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-red-600 dark:hover:text-red-400 transition"
          >
            India
          </Link>

          <Link 
            href="/category/world" 
            onClick={() => setOpen(false)}
            className="px-4 py-3 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-red-600 dark:hover:text-red-400 transition"
          >
            World
          </Link>

          <Link 
            href="/category/politics" 
            onClick={() => setOpen(false)}
            className="px-4 py-3 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-red-600 dark:hover:text-red-400 transition"
          >
            Politics
          </Link>

          <Link 
            href="/category/business" 
            onClick={() => setOpen(false)}
            className="px-4 py-3 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-red-600 dark:hover:text-red-400 transition"
          >
            Business
          </Link>

          <Link 
            href="/category/sports" 
            onClick={() => setOpen(false)}
            className="px-4 py-3 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-red-600 dark:hover:text-red-400 transition"
          >
            Sports
          </Link>

          <Link 
            href="/category/technology" 
            onClick={() => setOpen(false)}
            className="px-4 py-3 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-red-600 dark:hover:text-red-400 transition"
          >
            Technology
          </Link>

          <Link 
            href="/category/education" 
            onClick={() => setOpen(false)}
            className="px-4 py-3 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-red-600 dark:hover:text-red-400 transition"
          >
            Education
          </Link>

          <Link 
            href="/contact" 
            onClick={() => setOpen(false)}
            className="px-4 py-3 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-red-600 dark:hover:text-red-400 transition mt-auto text-sm text-zinc-500 dark:text-zinc-400 border-t border-zinc-100 dark:border-zinc-800"
          >
            Contact
          </Link>
        </nav>
      </div>
    </>
  );
}