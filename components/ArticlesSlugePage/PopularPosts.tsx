import Link from "next/link";

type Post = {
  _id: string;
  headline: string;
  slug: string;
};

const dummyPosts: Post[] = [
  {
    _id: "1",
    headline:
      "Bigg Boss Telugu 9: Rithu Chowdary’s Shock Exit As Kalyan Padala Becomes First Finalist",
    slug: "bigg-boss-telugu-9-rithu-exit",
  },
  {
    _id: "2",
    headline: "How Table Tennis Is Gaining Massive Digital Engagement Across Asia",
    slug: "table-tennis-digital-engagement-asia",
  },
  {
    _id: "3",
    headline: "Jacob Duffy Sold To Royal Challengers Bangalore For ₹2 Crore",
    slug: "jacob-duffy-rcb-ipl-auction",
  },
  {
    _id: "4",
    headline:
      "Satellite Internet Expansion And Global Connectivity Projects Transforming Worldwide",
    slug: "satellite-internet-expansion",
  },
  {
    _id: "5",
    headline: "FIFA World Cup 2026 Expansion To 48 Teams Explained",
    slug: "fifa-world-cup-2026-expansion",
  },
];

export default function PopularPosts() {
  return (
    <div>
      <h3 className="bg-black text-white px-4 py-2 font-semibold mb-4">
        POPULAR POST
      </h3>

      <div className="space-y-4">
        {dummyPosts.map((post) => (
          <div key={post._id} className="border-b pb-3">
            <Link href={`/articles/${post.slug}`}>
              <h4 className="font-semibold hover:text-red-500 cursor-pointer">
                {post.headline}
              </h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}