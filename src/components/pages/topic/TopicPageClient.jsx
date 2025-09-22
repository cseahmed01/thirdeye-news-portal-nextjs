"use client";

import BannerNews from "@/components/common/BannerNews";
import { Button } from "@/components/ui/button";
import { fetchDataClient } from "@/lib/fetchData";
import { Loader2Icon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function TopicPageClient({ initialData, topicId }) {
  const [page, setPage] = useState(1);
  const [additionalData, setAdditionalData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [error, setError] = useState(null);

  const loadMore = async () => {
    setLoading(true);
    setError(null); // Clear any previous errors
    const nextPage = page + 1;

    try {
      const response = await fetchDataClient(
        `articles/trending/${topicId}?page=${nextPage}`,
        {
          revalidate: 10,
        }
      );

      // Handle both null response and empty data array
      const newData = response?.data || [];

      if (newData.length === 0) {
        // No more data available (either empty array or null from backend)
        setHasMoreData(false);
      } else {
        setAdditionalData((prevData) => [...prevData, ...newData]);
        setPage(nextPage); // Only update page if successful
        if (newData.length < 10) {
          setHasMoreData(false);
        }
      }
    } catch (error) {
      // Only handle genuine network errors since pagination errors are now handled in fetchDataClient
      if (error.isNetworkError) {
        setError(
          "Network error: Please check your internet connection and try again."
        );
      } else {
        // For any other errors, silently treat as no more data
        setHasMoreData(false);
      }
    } finally {
      setLoading(false);
    }
  };

  const retryLoadMore = () => {
    setError(null);
    loadMore();
  };

  // Combine initial data with additional loaded data
  const allData = [...(initialData?.data?.slice(1) || []), ...additionalData];

  return (
    <>
      <div className="flex flex-col w-full gap-6 my-6">
        {allData.map((item, index) => (
          <Link href={`/article/${item.id}`} key={index} className="block">
            <BannerNews item={item} fullWidth />
          </Link>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center my-4 gap-3">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md max-w-md text-center">
            <p className="text-sm">{error}</p>
            <Button
              onClick={retryLoadMore}
              variant="outline"
              size="sm"
              className="mt-2 border-red-200 text-red-700 hover:bg-red-50"
              disabled={loading}
            >
              Try Again
            </Button>
          </div>
        )}

        {allData?.length > 0 && hasMoreData && !error && (
          <Button
            onClick={loadMore}
            disabled={loading}
            className="px-4 py-2 bg-brand hover:bg-brand text-white cursor-pointer disabled:opacity-50"
          >
            {loading ? (
              <p className="flex items-center gap-2">
                Loading <Loader2Icon className="animate-spin" />
              </p>
            ) : (
              "Load More"
            )}
          </Button>
        )}

        {!hasMoreData && !error && allData.length > 0 && (
          <p className="text-gray-500 text-sm">আর কোন খবর দেখানোর নেই</p>
        )}
      </div>
    </>
  );
}
