//import { prisma } from "@/lib/prisma";
import BreakingBar from "../../components/Hero/BreakingBar";
import HeroSection from "../../components/Hero/HeroSection";
import Sidebar from "../../components/Hero/Sidebar";
import NewsCard from "../../components/NewsCards";

export default async function HomePage() {
  const news = [
    { id: 1, title: "something new", description: "long paragraph" },
    { id: 2, title: "news ", description: "new paragraph" },
    { id: 3, title: "news ", description: "new paragraph" },
  ];
  return (
    <main className="max-w-[1300px] mx-auto px-4 py-8">
      <BreakingBar />

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-9">
          <HeroSection />
        </div>

        <div className="col-span-3">
          <Sidebar />
        </div>
      </div>
    </main>
  );
}
