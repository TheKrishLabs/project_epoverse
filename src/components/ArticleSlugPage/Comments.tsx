"use client";

import { privateApi } from "@/lib/axios";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Comments({ articleId }: { articleId: string }) {
  const router=useRouter()
  const [comments, setComments] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

//   useEffect(() => {
//   const fetchComments = async () => {
//     const res = await publicApi.get(`/comments?articleId=${articleId}`);
//     setComments(res.data);
//   };

//   fetchComments();
// }, [articleId]);

const submitComment = async (e: any) => {
  e.preventDefault();

  const token = localStorage.getItem("token");

  if (!token) {
    alert("Please login to post a comment");
    router.push("/login");
    return;
  }
  const content=message

  try {
    const res = await privateApi.post(`/comments/article/${articleId}`, {
      content
    });

    const newComment = res.data;

    setComments((prev) => [newComment, ...prev]);

    setName("");
    setMessage("");

    alert("Comment posted successfully!");
  } catch (error) {
    console.error(error);
    alert("Failed to post comment. Please try again.");
  }
};

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6">Comments</h2>

      {/* Comment Form */}
      <form  className="space-y-4 mb-10">
        <input
          className="border w-full p-3 rounded"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <textarea
          className="border w-full p-3 rounded"
          placeholder="Write a comment..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button className="bg-red-500 text-white px-6 py-2 rounded" onClick={submitComment}>
          Post Comment
        </button>
      </form>

      {/* Comment List
      <div className="space-y-6">
        {comments.map((c) => (
          <div key={c._id} className="border-b pb-4">
            <p className="font-semibold">{c.name}</p>
            <p className="text-gray-700">{c.message}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
}
