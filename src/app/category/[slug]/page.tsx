import Breadcrumb from "../../../../components/CategoryPage.tsx/Breadcrumb";
import ArticleCard from "../../../../components/CategoryPage.tsx/ArticleCard";
import PopularPosts from "../../../../components/CategoryPage.tsx/PopularPosts";
import { fetchArticlesByCategorySlug } from "@/services/articleService";
import { Article } from "@/types/article";
import TopWeek from "@/components/ArticleSlugPage/TopWeek";

export default async function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const articles: Article[] = await fetchArticlesByCategorySlug(params.slug);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <Breadcrumb category={params.slug} />

      {/* Title */}
      <h1 className="text-2xl font-bold text-red-600 uppercase mb-6 border-b pb-2">
        CATEGORY
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        {/* Articles Section */}
        <div className="lg:col-span-8 xl:col-span-9">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((item) => (
              <ArticleCard key={item._id} {...item} />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 xl:col-span-3 space-y-8 mt-8 lg:mt-0">
          <PopularPosts />
          <TopWeek />
        </div>
      </div>
    </div>
  );
}
