"use client";
import { baseUrl, tokenStorage } from "@/lib/utils";
import { useState } from "react";

export default function useBookmark() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [removed, setRemoved] = useState(false);

  const bookmarkArticle = async (article_id) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const token = tokenStorage.getToken();
      if (!token) throw new Error("No auth token");
      const res = await fetch(`${baseUrl}bookmark`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ article_id }),
      });
      const data = await res.json();
      if (res.ok) {
        setSuccess(true);
        setRemoved(false);
      } else {
        setError(data.error || "Failed to bookmark");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // delete article from bookmarks same like bookmarkArticle can be created if needed
  const unbookmarkArticle = async (article_id) => {
    setLoading(true);
    setError(null);
    setRemoved(false);
    try {
      const token = tokenStorage.getToken();
      if (!token) throw new Error("No auth token");
      const res = await fetch(`${baseUrl}bookmark/remove/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ article_id }),
      });
      const data = await res.json();
      if (res.ok) {
        setRemoved(true);
        setSuccess(false);
      } else {
        setError(data.error || "Failed to unbookmark");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch user's bookmarks
  const getBookmarks = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = tokenStorage.getToken();
      if (!token) throw new Error("No auth token");
      const res = await fetch(`${baseUrl}bookmarks?page=1`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      if (res.ok) {
        return data;
      } else {
        setError(data.error || "Failed to fetch bookmarks");
        return null;
      }
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    bookmarkArticle,
    getBookmarks,
    unbookmarkArticle,
    loading,
    error,
    success,
    removed,
  };
}
