import Link from "next/link";

export default function Breadcrumb({ category }: { category: string }) {

  return (
    <div className="text-sm text-gray-500 mb-4">

      <span className="hover:text-red-500 cursor-pointer font-bold text-xl">
        <Link href='/'>Home</Link>
      </span>

      <span className="mx-2">/</span>

      <span className="text-red-600 capitalize font-bold text-xl">
        {category}
      </span>

    </div>
  );
}