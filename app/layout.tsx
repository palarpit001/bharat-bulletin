import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bharat-bulletin-lilac.vercel.app"),

  title: {
    default: "Bharat Bulletin | Latest India & World News",
    template: "%s | Bharat Bulletin",
  },

  description:
    "Bharat Bulletin brings the latest breaking news from India and around the world including Politics, Business, Technology, Sports, Entertainment and Education.",

  keywords: [
    "Bharat Bulletin",
    "India News",
    "Breaking News",
    "Latest News",
    "Politics",
    "Business",
    "Sports",
    "Technology",
    "Education",
    "World News",
  ],

  authors: [
    {
      name: "Bharat Bulletin",
    },
  ],

  creator: "Bharat Bulletin",
  publisher: "Bharat Bulletin",

  openGraph: {
    title: "Bharat Bulletin | Latest India & World News",
    description:
      "Latest breaking news from India and around the world.",
    url: "https://bharat-bulletin-lilac.vercel.app",
    siteName: "Bharat Bulletin",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 512,
        height: 512,
        alt: "Bharat Bulletin",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Bharat Bulletin",
    description: "Latest India and World News",
    images: ["/images/logo.png"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },

  verification: {
    google: "kqCLf436UBDYh-8G4kW7axly4YK9DgrtGttpFjnzG78",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-zinc-950 text-black dark:text-white transition-colors duration-300 min-h-screen`}
      >
        {children}
        <GoogleAnalytics gaId="G-JW7YVHKNB0" />
      </body>
    </html>
  );
}