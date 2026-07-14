import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              Bharat Bulletin
            </h2>

            <p className="mt-4 text-gray-400 leading-7">
              Fast • Trusted • Unbiased
            </p>

            <p className="mt-3 text-gray-500 text-sm">
              Bringing the latest news from India and around the world with
              speed, accuracy and reliability.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Categories
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li><Link href="/category/india" className="hover:text-white">India</Link></li>
              <li><Link href="/category/world" className="hover:text-white">World</Link></li>
              <li><Link href="/category/politics" className="hover:text-white">Politics</Link></li>
              <li><Link href="/category/business" className="hover:text-white">Business</Link></li>
              <li><Link href="/category/sports" className="hover:text-white">Sports</Link></li>
              <li><Link href="/category/technology" className="hover:text-white">Technology</Link></li>
              <li><Link href="/category/education" className="hover:text-white">Education</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>

              {/* ✅ Changed */}
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="hover:text-white"
                >
                  Terms & Conditions
                </Link>
              </li>

              <li><Link href="/disclaimer" className="hover:text-white">Disclaimer</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact
            </h3>

            <p className="text-gray-400">
              📧 contact@bharatbulletin.in
            </p>

            <p className="text-gray-400 mt-2">
              🇮🇳 India
            </p>

            <div className="flex gap-4 mt-6 text-gray-400">
              <span className="cursor-pointer hover:text-white">Facebook</span>
              <span className="cursor-pointer hover:text-white">Instagram</span>
              <span className="cursor-pointer hover:text-white">X</span>
              <span className="cursor-pointer hover:text-white">YouTube</span>
            </div>
          </div>

        </div>

        <hr className="border-gray-700 my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm">
            © 2026 Bharat Bulletin. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Made with ❤️ in India
          </p>

        </div>

      </div>
    </footer>
  );
}