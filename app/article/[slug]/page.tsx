import { Metadata } from "next";
import ArticleClient from "../../components/ArticleClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const title = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    title: `${title} | Bharat Bulletin`,
    description: `Read the latest news about ${title} only on Bharat Bulletin.`,
    openGraph: {
      title: `${title} | Bharat Bulletin`,
      description: `Latest news and updates about ${title}.`,
      url: `https://https://bharat-bulletin-lilac.vercel.app//article/${slug}`,
      siteName: "Bharat Bulletin",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Bharat Bulletin`,
      description: `Latest news about ${title}`,
    },
  };
}

export default async function Page() {
  return <ArticleClient />;
}