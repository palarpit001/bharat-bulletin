import Link from "next/link";

export default function DesktopNav() {
  return (
    <nav className="hidden lg:flex items-center ml-6 gap-2 flex-1 justify-center text-[15px] font-semibold">
      <Link
        href="/"
        className="px-3 py-2 rounded-md hover:bg-red-50 hover:text-red-600 transition"
      >
        Home
      </Link>

      <Link
        href="/category/india"
        className="px-3 py-2 rounded-md hover:bg-red-50 hover:text-red-600 transition"
      >
        India
      </Link>

      <Link
        href="/category/world"
        className="px-3 py-2 rounded-md hover:bg-red-50 hover:text-red-600 transition"
      >
        World
      </Link>

      <Link
        href="/category/politics"
        className="px-3 py-2 rounded-md hover:bg-red-50 hover:text-red-600 transition"
      >
        Politics
      </Link>

      <Link
        href="/category/business"
        className="px-3 py-2 rounded-md hover:bg-red-50 hover:text-red-600 transition"
      >
        Business
      </Link>

      <Link
        href="/category/sports"
        className="px-3 py-2 rounded-md hover:bg-red-50 hover:text-red-600 transition"
      >
        Sports
      </Link>

      <Link
        href="/category/technology"
        className="px-3 py-2 rounded-md hover:bg-red-50 hover:text-red-600 transition"
      >
        Technology
      </Link>

      <Link
        href="/category/education"
        className="px-3 py-2 rounded-md hover:bg-red-50 hover:text-red-600 transition"
      >
        Education
      </Link>

      <Link
        href="/contact"
        className="px-3 py-2 rounded-md hover:bg-red-50 hover:text-red-600 transition"
      >
        Contact
      </Link>
    </nav>
  );
}