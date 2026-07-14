"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} className="lg:hidden p-2 text-zinc-800 dark:text-zinc-200">
        <Menu size={30} />
      </button>

      {open && (
        <div className="fixed inset-0 z-[999999] flex justify-end">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="relative w-72 h-full bg-white dark:bg-zinc-950 shadow-2xl p-5">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Menu</h2>
              <button onClick={() => setOpen(false)}><X size={28} /></button>
            </div>
            <nav className="flex flex-col gap-4">
              <Link href="/" onClick={() => setOpen(false)}>Home</Link>
              <Link href="/category/india" onClick={() => setOpen(false)}>India</Link>
              <Link href="/category/world" onClick={() => setOpen(false)}>World</Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}