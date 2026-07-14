import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BreakingNews from "../../components/BreakingNews";
import FirebaseCategoryNews from "../../components/FirebaseCategoryNews";

type Props = {
  params: Promise<{
    category: string;
  }>;
};

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;

  const categoryName =
    category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <main className="bg-gray-100 min-h-screen">
      <Header />

      <BreakingNews />

      <section className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold border-l-4 border-red-600 pl-4 mb-8">
          {categoryName} News
        </h1>

        <FirebaseCategoryNews category={category} />
      </section>

      <Footer />
    </main>
  );
}