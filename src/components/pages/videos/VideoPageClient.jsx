"use client";

import RecAdBanner from "@/components/common/AdBanners/RecAdBanner";
import SquareAd from "@/components/common/AdBanners/SquareAd";
import VideoCard from "@/components/common/VideoCard";
import { Button } from "@/components/ui/button";
import { fetchDataClient } from "@/lib/fetchData";
import { Loader2Icon } from "lucide-react";
import { useState } from "react";

export default function VideoPageClient({ initialData }) {
  const [page, setPage] = useState(1);
  const [additionalData, setAdditionalData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMoreData, setHasMoreData] = useState(
    // Show load more if initial data has more than 9 items or if we don't know yet
    (initialData?.data?.length || 0) >= 10
  );
  const [error, setError] = useState(null);

  const loadMore = async () => {
    setLoading(true);
    setError(null);
    const nextPage = page + 1;

    try {
      const response = await fetchDataClient(`videos/list?page=${nextPage}`, {
        revalidate: 10,
      });

      const newData = response?.data || [];

      if (newData.length === 0) {
        setHasMoreData(false);
      } else {
        setAdditionalData((prevData) => [...prevData, ...newData]);
        setPage(nextPage);
        if (newData.length < 10) {
          setHasMoreData(false);
        }
      }
    } catch (error) {
      console.error("Error loading more videos:", error);
      if (error.isNetworkError) {
        setError(
          "Network error: Please check your internet connection and try again."
        );
      } else {
        setError(`Error: ${error.message}`);
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

  // Only show remaining initial data after user has clicked load more
  // This ensures initially only 9 items are visible
  const remainingInitialData =
    additionalData.length > 0 ? initialData?.data?.slice(9) || [] : [];
  const allData = [...remainingInitialData, ...additionalData];

  // Function to render videos with strategically placed ads
  const renderVideosWithAds = (videos) => {
    const elements = [];

    videos.forEach((video, index) => {
      // Add video card
      elements.push(
        <div key={`video-${index}`} className="space-y-4">
          <VideoCard
            title={video.title}
            author={video.source}
            date={video.created_at}
            image={video?.video_type !== "youtube" && video?.video_thumbnail}
            videoUrl={video.media_path}
            youtubeId={video.embedded_link}
          />
        </div>
      );

      // Add ads after every 6 videos (creates nice spacing in 3-column grid)
      if ((index + 1) % 6 === 0 && index < videos.length - 1) {
        elements.push(
          <div key={`ad-section-${index}`} className="col-span-full">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 my-8">
              <RecAdBanner />
              <SquareAd />
            </div>
          </div>
        );
      }
      // Add square ads after every 9 videos
      else if ((index + 1) % 9 === 0 && index < videos.length - 1) {
        elements.push(
          <div key={`square-ads-${index}`} className="col-span-full">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 my-6">
              <SquareAd />
              <SquareAd />
              <SquareAd />
            </div>
          </div>
        );
      }
    });

    return elements;
  };

  return (
    <>
      {/* Show remaining content only after load more has been clicked */}
      {allData.length > 0 && (
        <>
          {/* Integrated video and ad grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {renderVideosWithAds(allData)}
          </div>
        </>
      )}

      {/* Load more button and error handling */}
      <div className="flex flex-col items-center justify-center my-8 gap-3">
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

        {hasMoreData && !error && (
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
          <p className="text-gray-500 text-sm">আর কোন ভিডিও দেখানোর নেই</p>
        )}
      </div>
    </>
  );
}
