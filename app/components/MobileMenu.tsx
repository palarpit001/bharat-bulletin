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
        className="lg:hidden ml-auto p-2"
      >
        <Menu size={30} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b">
          <h2 className="text-xl font-bold">Menu</h2>

          <button onClick={() => setOpen(false)}>
            <X size={28} />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col p-5 gap-5 text-lg font-medium">

          <Link href="/" onClick={() => setOpen(false)}>Home</Link>

          <Link href="/category/india" onClick={() => setOpen(false)}>
            India
          </Link>

          <Link href="/category/world" onClick={() => setOpen(false)}>
            World
          </Link>

          <Link href="/category/politics" onClick={() => setOpen(false)}>
            Politics
          </Link>

          <Link href="/category/business" onClick={() => setOpen(false)}>
            Business
          </Link>

          <Link href="/category/sports" onClick={() => setOpen(false)}>
            Sports
          </Link>

          <Link href="/category/technology" onClick={() => setOpen(false)}>
            Technology
          </Link>

          <Link href="/category/education" onClick={() => setOpen(false)}>
            Education
          </Link>

          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>

        </nav>
      </div>
    </>
  );
}