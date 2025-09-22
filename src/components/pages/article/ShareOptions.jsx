"use client";

import { useAuth } from "@/hooks/useAuth";
import useBookmark from "@/hooks/useBookmark";
import { useRouter } from "next/navigation";

export default function ShareOptions({ data }) {
  const {
    bookmarkArticle,
    unbookmarkArticle,
    loading,
    error,
    success,
    removed,
  } = useBookmark();
  const { isAuthenticated } = useAuth();
  const articleId = data?.id || data?.article_id;
  const isBookmarked = data?.is_bookmarked;
  const router = useRouter();

  return (
    <div className="flex items-center gap-7 mb-10">
      <button
        className="cursor-pointer"
        onClick={() =>
          !!isAuthenticated
            ? isBookmarked || success
              ? unbookmarkArticle(articleId)
              : bookmarkArticle(articleId)
            : router.push("/auth/signin")
        }
        disabled={loading}
        title={success || isBookmarked ? "Bookmarked!" : "Bookmark"}
      >
        <img
          src="/assets/icons/bookmark.svg"
          alt=""
          className={`w-7 h-7 ${
            success || isBookmarked
              ? "opacity-50"
              : removed
              ? "opacity-100"
              : "opacity-100"
          }`}
        />
      </button>
      {/* ...existing code... */}
      <button className="cursor-pointer">
        <img src="/assets/icons/share.svg" alt="" className="w-7 h-7" />
      </button>
      <button className="cursor-pointer">
        <img src="/assets/icons/facebook.png" alt="" className="w-6 h-6" />
      </button>
      <button className="cursor-pointer">
        <img src="/assets/icons/whatsapp.png" alt="" className="w-6 h-6" />
      </button>
      <button className="cursor-pointer">
        <img src="/assets/icons/twitter.png" alt="" className="!w-6 h-6" />
      </button>
    </div>
  );
}
