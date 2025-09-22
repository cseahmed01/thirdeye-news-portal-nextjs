import RecAdBanner from "@/components/common/AdBanners/RecAdBanner";
import SmallRecAdBanner from "@/components/common/AdBanners/SmallRecAdBanner";
import SquareAd from "@/components/common/AdBanners/SquareAd";
import CategoryTitle from "@/components/common/CategoryTitle";
import Container from "@/components/common/Container";
import FeaturedNewsCard from "@/components/common/FeaturedNewsCard";
import VideoGallery from "@/components/common/VideoGallery";
import ReelsCarousel from "@/components/pages/home/ReelsCarousel";
import TopicPageClient from "@/components/pages/topic/TopicPageClient";
import { fetchData } from "@/lib/fetchData";

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { id } = await params;

  try {
    const data = await fetchData(`articles/trending/${id}?page=1`, {
      revalidate: 10,
    });

    return {
      title: `${data?.meta?.topic_name || "Topic"} - News Portal`,
      description: `Trending news and articles about ${
        data?.meta?.topic_name || "this topic"
      }`,
      openGraph: {
        title: `${data?.meta?.topic_name || "Topic"} - News Portal`,
        description: `Trending news and articles about ${
          data?.meta?.topic_name || "this topic"
        }`,
      },
    };
  } catch (error) {
    return {
      title: "Trending News - News Portal",
      description: "Latest trending news and articles from this topic",
    };
  }
}

export default async function page({ params }) {
  const { id } = await params;

  // Fetch initial data server-side
  let initialData = null;
  try {
    initialData = await fetchData(`articles/trending/${id}?page=1`, {
      revalidate: 10,
    });
  } catch (error) {
    console.error("Error fetching initial data:", error);
  }

  const reels = await fetchData(`reels/list?page=1`, {
    revalidate: 10,
  });

  const videoGalleryData = await fetchData(`videos/list?page=1`, {
    revalidate: 10,
  });

  return (
    <Container>
      <CategoryTitle title={initialData?.meta?.topic_name || "Trending News"} />
      {initialData?.data?.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4.5 mb-6 items-center">
            <div className="md:col-span-7">
              <FeaturedNewsCard item={initialData?.data?.[0]} />
            </div>

            <div className="md:col-span-3 flex flex-col gap-3 items-center justify-center">
              <SquareAd />
              <SmallRecAdBanner />
            </div>
            <div className="md:col-span-2">
              <ReelsCarousel items={reels?.data} titleInside={true} />
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center gap-4 mb-6">
            <RecAdBanner />
            <RecAdBanner />
          </div>
          <VideoGallery data={videoGalleryData} />

          {/* Client-side pagination component */}
          <TopicPageClient initialData={initialData} topicId={id} />
        </>
      ) : (
        <p className="text-center text-lg md:text-xl lg:text-2xl font-medium py-20">
          এই বিষয়ে কোন খবর পাওয়া যায়নি।
        </p>
      )}
    </Container>
  );
}
