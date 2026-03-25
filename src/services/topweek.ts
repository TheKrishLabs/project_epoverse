import { publicApi } from "@/lib/axios";

export async function getTopWeekArticles() {
  try {
    const res = await publicApi.get("/articles/top-week");

    return res.data; // ✅ Axios uses res.data
  } catch (error) {
    console.error("Top Week fetch error:", error);
    return { articles: [] };
  }
}