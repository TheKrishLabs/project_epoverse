import { publicApi } from "@/lib/axios";

export async function getPopularArticles() {
  try {
    const res = await publicApi.get("/articles/popular");

    // Axios returns data directly in res.data
    return res.data || [];

  } catch (error) {
    console.error("Top Week fetch error:", error);
    return [];
  }
}