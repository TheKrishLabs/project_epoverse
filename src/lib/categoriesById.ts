import { publicApi } from "@/lib/axios";

export async function fetchArticlesByCategoryId(
  categoryId: string
) {
  try {

    const res = await publicApi.get(
      `/articles/fetch-by-category/${categoryId}`
    );

    return res.data;

  } catch (error) {

    console.error("Fetch articles error:", error);
    throw error;

  }
}