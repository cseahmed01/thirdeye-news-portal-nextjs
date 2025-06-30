"use client";

import BannerNews from "@/components/common/BannerNews";
import { Button } from "@/components/ui/button";
import { fetchDataClient } from "@/lib/fetchData";
import { useState } from "react";

export default function CategoryPageClient({ initialData, categoryId }) {
  const [page, setPage] = useState(1); // Start from page 2 since page 1 is loaded server-side
  console.log("🚀 ~ CategoryPageClient ~ page:", page);
  const [additionalData, setAdditionalData] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadMore = async () => {
    setLoading(true);
    await setPage((prev) => prev + 1);
    try {
      const response = await fetchDataClient(
        `articles/category/${categoryId}?page=${page}`,
        {
          revalidate: 10,
        }
      );
      setAdditionalData((prevData) => [...prevData, ...(response?.data || [])]);
    } catch (error) {
      console.error("Error fetching additional data:", error);
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
        <Button
          onClick={loadMore}
          disabled={loading}
          className="px-4 py-2 text-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Loading..." : "Load More"}
        </Button>
      </div>
    </>
  );
}
