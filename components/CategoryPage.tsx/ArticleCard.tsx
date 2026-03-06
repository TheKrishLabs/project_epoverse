interface Props {
  article: {
    _id: string;
    headline: string;
    image: string;
    createdAt: string;
  };
}

export default function ArticleCard({ article }: Props) {
  return (
    <div className="bg-white border hover:shadow-md transition">

      <img
        src={article.image}
        alt={article.headline}
        className="w-full h-48 object-cover"
      />

      <div className="p-3">

        <h2 className="font-semibold text-sm leading-5 hover:text-red-600 cursor-pointer">
          {article.headline}
        </h2>

        <p className="text-xs text-gray-500 mt-2">
          {new Date(article.createdAt).toDateString()}
        </p>

      </div>

    </div>
  );
}