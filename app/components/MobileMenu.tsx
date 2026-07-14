"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden ml-auto p-2 text-zinc-800 dark:text-zinc-200 z-[999]"
        aria-label="Open Menu"
      >
        <Menu size={30} />
      </button>

      {open && (
        <div className="fixed inset-0 z-[999999] flex justify-end">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          
          {/* Sidebar */}
          <div className="relative w-72 h-full bg-white dark:bg-zinc-950 shadow-2xl transform transition-transform duration-300 ease-in-out translate-x-0">
            <div className="flex items-center justify-between p-5 border-b border-zinc-100 dark:border-zinc-800">
              <h2 className="text-xl font-extrabold">Menu</h2>
              <button onClick={() => setOpen(false)} className="p-1 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900">
                <X size={28} />
              </button>
            </div>
            
            <nav className="flex flex-col p-5 gap-1.5 text-lg font-bold">
              {["Home", "India", "World", "Politics", "Business", "Sports", "Technology", "Education"].map((item) => (
                <Link key={item} href={item === "Home" ? "/" : `/category/${item.toLowerCase()}`} onClick={() => setOpen(false)} className="px-4 py-3 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-red-600 transition">
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}