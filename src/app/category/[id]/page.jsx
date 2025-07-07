import RecAdBanner from "@/components/common/AdBanners/RecAdBanner";
import SmallRecAdBanner from "@/components/common/AdBanners/SmallRecAdBanner";
import SquareAd from "@/components/common/AdBanners/SquareAd";
import CategoryTitle from "@/components/common/CategoryTitle";
import Container from "@/components/common/Container";
import FeaturedNewsCard from "@/components/common/FeaturedNewsCard";
import VideoGallery from "@/components/common/VideoGallery";
import CategoryPageClient from "@/components/pages/category/CategoryPageClient";
import ReelsCarousel from "@/components/pages/home/ReelsCarousel";
import { fetchData } from "@/lib/fetchData";

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { id } = await params;

  try {
    const data = await fetchData(`articles/category/${id}?page=1`, {
      revalidate: 10,
    });

    return {
      title: `${data?.meta?.category_name || "Category"} - News Portal`,
      description: `Latest news and articles from ${
        data?.meta?.category_name || "this category"
      }`,
      openGraph: {
        title: `${data?.meta?.category_name || "Category"} - News Portal`,
        description: `Latest news and articles from ${
          data?.meta?.category_name || "this category"
        }`,
      },
    };
  } catch (error) {
    return {
      title: "Category News - News Portal",
      description: "Latest news and articles from this category",
    };
  }
}

export default async function page({ params }) {
  const { id } = await params;

  // Fetch initial data server-side
  let initialData = null;
  try {
    initialData = await fetchData(`articles/category/${id}?page=1`, {
      revalidate: 10,
    });
  } catch (error) {
    console.error("Error fetching initial data:", error);
  }

  const data = {
    reels: [
      {
        title:
          "যুক্তরাষ্ট্র ও ইউক্রেন খনিজ সম্পদ চুক্তিতে সম্মত হয়েছে, কর্মকর্তারা বলেন",
        author: "Sample Author",
        date: "May 22, 2025",
        image:
          "https://images.unsplash.com/photo-1697911339694-c46ce894fe3f?q=80",
        videoUrl:
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      },
      {
        title: "YouTube Video Example",
        author: "YouTube Creator",
        date: "May 21, 2025",
        youtubeId: "ogfYd705cRs",
      },
      {
        title: "Another Direct Video",
        author: "Video Creator",
        date: "May 20, 2025",
        image:
          "https://images.unsplash.com/photo-1697911339694-c46ce894fe3f?q=80",
        videoUrl:
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      },
      {
        title: "Another YouTube Video",
        author: "Content Creator",
        date: "May 19, 2025",
        youtubeId: "aqz-KE-bpKQ",
      },
    ],
  };

  return (
    <Container>
      <CategoryTitle
        title={initialData?.meta?.category_name || "Category News"}
      />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4.5 mb-6 items-center">
        <div className="md:col-span-7">
          <FeaturedNewsCard item={initialData?.data?.[0]} />
        </div>
        <div className="md:col-span-3 flex flex-col gap-3 items-center justify-center">
          <SquareAd />
          <SmallRecAdBanner />
        </div>
        <div className="md:col-span-2">
          <ReelsCarousel items={data?.reels} titleInside={true} />
        </div>
      </div>
      <div className="hidden md:flex items-center justify-center gap-4 mb-6">
        <RecAdBanner />
        <RecAdBanner />
      </div>
      <VideoGallery />

      {/* Client-side pagination component */}
      <CategoryPageClient initialData={initialData} categoryId={id} />
    </Container>
  );
}
