import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-gray-100 px-6">

      <div className="text-center">

        <h1 className="text-8xl font-extrabold text-red-600">
          404
        </h1>

        <h2 className="text-4xl font-bold mt-6 text-gray-900">
          Oops! Page Not Found
        </h2>

       <p className="text-gray-600 mt-4 max-w-xl mx-auto text-lg">
  The page you are looking for does not exist or has been moved.
  Please return to the homepage.
</p>

        <Link
          href="/"
          className="inline-block mt-8 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl text-lg font-bold transition"
        >
          ← Back to Home
        </Link>

      </div>

    </main>
  );
}