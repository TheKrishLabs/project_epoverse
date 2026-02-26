import { sidebarNews } from "./News";


export default function Sidebar() {
  return (
    <div className="bg-gray-100 p-4 rounded-md">
      {sidebarNews.map((item) => (
        <div key={item.id} className="border-b py-4 last:border-none">
          <h4 className="font-semibold text-lg hover:text-red-500 cursor-pointer">
            {item.title}
          </h4>
          <p className="text-gray-500 text-sm mt-1">
            Short preview text here...
          </p>
        </div>
      ))}
    </div>
  );
}