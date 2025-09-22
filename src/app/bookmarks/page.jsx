"use client";
import Container from "@/components/common/Container";
import NewsCard from "@/components/common/NewsCard";
import SectionTitle from "@/components/common/SectionTitle";
import useBookmark from "@/hooks/useBookmark";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BookmarksPage() {
  const { getBookmarks, loading, error } = useBookmark();
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const fetchBookmarks = async () => {
      const data = await getBookmarks();
      if (data) {
        setBookmarks(data.data);
      }
    };
    fetchBookmarks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container className="p-6">
      <SectionTitle title="সংরক্ষিত সংবাদ" bt={true} />
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && bookmarks?.length === 0 && <p>No bookmarks found.</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {bookmarks.map((item) => (
          <Link href={`/article/${item?.id}`} className="block" key={item.id}>
            <NewsCard item={item} />
          </Link>
        ))}
      </div>
      {/* Load more removed. All bookmarks from page 1 are shown. */}
    </Container>
  );
}
