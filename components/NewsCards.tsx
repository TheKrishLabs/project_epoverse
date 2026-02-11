type NewsCardProps = {
  title: string;
  description: string;
};

export default function NewsCard({ title, description }: NewsCardProps) {
  return (
    <div className="border p-4 rounded-lg shadow-sm">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}
