import Header from "./components/Header";
import BreakingNews from "./components/BreakingNews";
import HeroSlider from "./components/HeroSlider";
import FirebaseNews from "./components/FirebaseNews";
import TrendingNews from "./components/TrendingNews";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <Header />

      <BreakingNews />

      <HeroSlider />

      {/* Latest News + Trending Sidebar */}
      <section className="max-w-7xl mx-auto px-4 mt-12 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <FirebaseNews />
          </div>

          <div className="lg:col-span-1">
            <TrendingNews />
          </div>
        </div>
      </section>

      <ScrollToTop />

      <Footer />
    </main>
  );
}