//import { prisma } from "@/lib/prisma";
import NewsCard from "../../components/NewsCards";

export default async function HomePage() {
  const news = [
    { id: 1, title: "something new", description: "long paragraph" },
  ];

  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Latest News</h1>

      <div className="grid gap-6">
        {news.map((item) => (
          <NewsCard
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </main>
  );
}
