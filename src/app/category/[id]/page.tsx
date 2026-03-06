import Breadcrumb from "../../../../components/CategoryPage.tsx/Breadcrumb";
import ArticleCard from "../../../../components/CategoryPage.tsx/ArticleCard";
import PopularPosts from "../../../../components/CategoryPage.tsx/PopularPosts";
import { fetchArticlesByCategoryId } from "@/lib/categoriesById";

interface Article {
  _id: string;
  headline: string;
  image: string;
  createdAt: string;
  slug: string;
}

export default async function CategoryPage({
  params,
}: {
  params: { id: string };
}) {

  const articles: Article[] = await fetchArticlesByCategoryId(params.id);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">

      {/* Breadcrumb */}
      <Breadcrumb category={params.id} />

      {/* Title */}
      <h1 className="text-2xl font-bold text-red-600 uppercase mb-6 border-b pb-2">
        CATEGORY
      </h1>

      <div className="grid grid-cols-12 gap-6">

        {/* Articles Section */}
        <div className="col-span-9">

          <div className="grid grid-cols-3 gap-6">

            {articles.map((item) => (
              <ArticleCard key={item._id} article={item} />
            ))}

          </div>

        </div>

        {/* Sidebar */}
        <div className="col-span-3">
          <PopularPosts />
        </div>

      </div>

    </div>
  );
}