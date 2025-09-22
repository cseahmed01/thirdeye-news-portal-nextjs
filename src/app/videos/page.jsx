import LongAdBanner from "@/components/common/AdBanners/LongAdBanner";
import RecAdBanner from "@/components/common/AdBanners/RecAdBanner";
import CategoryTitle from "@/components/common/CategoryTitle";
import Container from "@/components/common/Container";
import VideoCard from "@/components/common/VideoCard";
import VideoPageClient from "@/components/pages/videos/VideoPageClient";
import { fetchData } from "@/lib/fetchData";

export default async function page() {
  const videoGalleryData = await fetchData(`videos/list?page=1`, {
    revalidate: 10,
  });

  // Show exactly 9 items initially (3 rows of 3)
  const initialNineItems = videoGalleryData?.data?.slice(0, 9);

  return (
    <Container>
      <LongAdBanner />
      <CategoryTitle title="ভিডিও" />

      {/* Initial 9 videos in a clean 3x3 grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {initialNineItems?.map((video, index) => (
          <div key={`initial-${index}`} className="space-y-4">
            <VideoCard
              title={video.title}
              author={video.source}
              date={video.created_at}
              image={video?.video_type !== "youtube" && video?.video_thumbnail}
              videoUrl={video.media_path}
              youtubeId={video.embedded_link}
            />
          </div>
        ))}
      </div>

      {/* Ad banners after initial content */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
        <RecAdBanner />
        <RecAdBanner />
      </div>

      {/* Client-side pagination component for remaining content */}
      <VideoPageClient initialData={videoGalleryData} />
    </Container>
  );
}
