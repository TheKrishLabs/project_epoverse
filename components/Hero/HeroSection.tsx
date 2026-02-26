import { heroNews, sideHeroNews } from "./News";


export default function HeroSection() {
  return (
    <div className="grid grid-cols-12 gap-6">
      
      {/* Big Left News */}
      <div className="col-span-7 relative">
        <img
          src={heroNews.image}
          className="w-full h-[500px] object-cover rounded-md"
        />

        <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white w-full rounded-md">
          <span className="bg-black px-3 py-1 text-xs">
            {heroNews.category}
          </span>
          <h2 className="text-3xl font-bold mt-3">
            {heroNews.title}
          </h2>
          <p className="text-sm mt-2">
            {heroNews.author} • {heroNews.date}
          </p>
        </div>
      </div>

      {/* Right Stacked */}
      <div className="col-span-5 flex flex-col gap-6">
        {sideHeroNews.map((item) => (
          <div key={item.id} className="relative">
            <img
              src={item.image}
              className="w-full h-[240px] object-cover rounded-md"
            />
            <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white w-full rounded-md">
              <span className="bg-black px-2 py-1 text-xs">
                {item.category}
              </span>
              <h3 className="text-lg font-semibold mt-2">
                {item.title}
              </h3>
              <p className="text-xs mt-1">
                {item.author} • {item.date}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}