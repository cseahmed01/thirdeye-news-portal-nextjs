"use client";

import BannerNews from "@/components/common/BannerNews";
import { Button } from "@/components/ui/button";
import { fetchDataClient } from "@/lib/fetchData";
import { Loader2Icon } from "lucide-react";
import { useState } from "react";

export default function CategoryPageClient({ initialData, categoryId }) {
  const [page, setPage] = useState(1);
  console.log("🚀 ~ CategoryPageClient ~ page:", page);
  const [additionalData, setAdditionalData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMoreData, setHasMoreData] = useState(true);

  const loadMore = async () => {
    setLoading(true);
    const nextPage = page + 1;
    setPage(nextPage);
    try {
      const response = await fetchDataClient(
        `articles/category/${categoryId}?page=${nextPage}`,
        {
          revalidate: 10,
        }
      );

      // Check if there's more data available
      const newData = response?.data || [];

      if (newData.length === 0) {
        // No more data available
        setHasMoreData(false);
      } else {
        setAdditionalData((prevData) => [...prevData, ...newData]);

        // Check if this response has fewer items than expected (indicating last page)
        // You can adjust this logic based on your API's pagination structure
        // Common patterns:
        // 1. If API returns a specific page size and this response has fewer items
        // 2. If API returns pagination metadata like hasMore, currentPage, lastPage etc.

        // For now, we'll assume if we get less than 10 items, it's the last page
        // You can modify this based on your API's actual behavior
        if (newData.length < 10) {
          setHasMoreData(false);
        }
      }
    } catch (error) {
      console.error("Error fetching additional data:", error);
      // On error, assume no more data to prevent infinite retry
      setHasMoreData(false);
    } finally {
      setLoading(false);
    }
  };

  // Combine initial data with additional loaded data
  const allData = [...(initialData?.data?.slice(1) || []), ...additionalData];
  console.log("🚀 ~ CategoryPageClient ~ allData:", allData);

  return (
    <>
      <div className="flex flex-col w-full gap-6 my-6">
        {allData.map((item, index) => (
          <BannerNews key={`${index}`} item={item} fullWidth />
        ))}
      </div>
      <div className="flex items-center justify-center my-4">
        {hasMoreData && (
          <Button
            onClick={loadMore}
            disabled={loading}
            className="px-4 py-2 bg-primary text-white cursor-pointer disabled:opacity-50"
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
      </div>
    </>
  );
}
