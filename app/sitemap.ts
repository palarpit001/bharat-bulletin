import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://bharatbulletin.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://bharatbulletin.vercel.app/category/india",
      lastModified: new Date(),
    },
    {
      url: "https://bharatbulletin.vercel.app/category/world",
      lastModified: new Date(),
    },
    {
      url: "https://bharatbulletin.vercel.app/category/politics",
      lastModified: new Date(),
    },
    {
      url: "https://bharatbulletin.vercel.app/category/business",
      lastModified: new Date(),
    },
    {
      url: "https://bharatbulletin.vercel.app/category/technology",
      lastModified: new Date(),
    },
    {
      url: "https://bharatbulletin.vercel.app/category/sports",
      lastModified: new Date(),
    },
    {
      url: "https://bharatbulletin.vercel.app/category/education",
      lastModified: new Date(),
    },
  ];
}