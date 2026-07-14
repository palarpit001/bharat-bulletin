export interface News {
  id: number;
  slug: string;
  title: string;
  category: string;
  image: string;
  description: string;
  content: string;
  author: string;
  date: string;
}

export const news: News[] = [
  {
    id: 1,
    slug: "india-wins-historic-cricket-match",
    title: "India Wins Historic Cricket Match",
    category: "Sports",
    image: "https://picsum.photos/600/400?random=1",
    description: "India secured a memorable victory in an exciting cricket match.",
    content:
      "This is the complete news article. Later we will replace it with real news fetched from Firebase.",
    author: "Bharat Bulletin",
    date: "24 July 2026",
  },
  {
    id: 2,
    slug: "stock-market-hits-new-high",
    title: "Stock Market Hits New High",
    category: "Business",
    image: "https://picsum.photos/600/400?random=2",
    description: "Indian stock market reached a record high today.",
    content:
      "This is the complete news article. Later we will replace it with real news fetched from Firebase.",
    author: "Bharat Bulletin",
    date: "24 July 2026",
  },
  {
    id: 3,
    slug: "ai-technology-changing-the-future",
    title: "AI Technology Changing the Future",
    category: "Technology",
    image: "https://picsum.photos/600/400?random=3",
    description: "Artificial Intelligence is transforming industries rapidly.",
    content:
      "This is the complete news article. Later we will replace it with real news fetched from Firebase.",
    author: "Bharat Bulletin",
    date: "24 July 2026",
  },
  {
    id: 4,
    slug: "heavy-rain-alert-in-north-india",
    title: "Heavy Rain Alert in North India",
    category: "India",
    image: "https://picsum.photos/600/400?random=4",
    description: "IMD has issued heavy rainfall warnings in several states.",
    content:
      "This is the complete news article. Later we will replace it with real news fetched from Firebase.",
    author: "Bharat Bulletin",
    date: "24 July 2026",
  },
  {
    id: 5,
    slug: "global-leaders-meet-for-climate-summit",
    title: "Global Leaders Meet for Climate Summit",
    category: "World",
    image: "https://picsum.photos/600/400?random=5",
    description: "World leaders discussed climate change and sustainability.",
    content:
      "This is the complete news article. Later we will replace it with real news fetched from Firebase.",
    author: "Bharat Bulletin",
    date: "24 July 2026",
  },
  {
    id: 6,
    slug: "education-policy-gets-major-update",
    title: "Education Policy Gets Major Update",
    category: "Education",
    image: "https://picsum.photos/600/400?random=6",
    description: "Government announces reforms in higher education.",
    content:
      "This is the complete news article. Later we will replace it with real news fetched from Firebase.",
    author: "Bharat Bulletin",
    date: "24 July 2026",
  },
  
{
  id: 7,
  slug: "government-announces-new-election-reforms",
  title: "Government Announces New Election Reforms",
  category: "Politics",
  image: "https://picsum.photos/600/400?random=7",
  description:
    "The government has announced major election reforms to improve transparency and the voting process across the country.",
  content:
    "The central government has unveiled a series of election reforms aimed at increasing transparency, strengthening voter participation, and improving the overall electoral process. The reforms include updated voter registration procedures, enhanced digital services, and stricter monitoring of campaign funding. Political parties have expressed mixed reactions, while experts believe the changes could modernize India's democratic system if implemented effectively.",
  author: "Bharat Bulletin",
  date: "24 July 2026",
},
];