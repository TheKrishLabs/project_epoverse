"use client";

import { useEffect, useState } from "react";
import { Bookmark } from "lucide-react";
import {
  saveBookmark,
  removeBookmark,
  getBookmarks,
} from "@/services/bookmarkService";

export default function BookmarkButton({ postId }: { postId: string }) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    checkBookmark();
  }, []);

  const checkBookmark = async () => {
    try {
      const data = await getBookmarks();

      const exists = data?.some(
        (item: any) => item.postId?._id === postId
      );

      setSaved(exists);
    } catch (err) {
      console.log(err);
    }
  };

  const toggleBookmark = async () => {
    try {
      if (saved) {
        await removeBookmark(postId);
        setSaved(false);
      } else {
        await saveBookmark(postId);
        setSaved(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button
      onClick={toggleBookmark}
      className="flex items-center gap-2 px-4 py-2 mt-5 border rounded-lg hover:bg-gray-100"
    >
      <Bookmark
  className={`w-5 h-5 ${
    saved
      ? "text-yellow-500 fill-current"
      : "text-gray-600"
  }`}
/>
      {saved ? "Saved" : "Save"}
    </button>
  );
}