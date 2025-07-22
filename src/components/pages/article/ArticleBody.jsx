import LongAdBanner from "@/components/common/AdBanners/LongAdBanner";
import SquareAd from "@/components/common/AdBanners/SquareAd";
import AudioPlayer from "@/components/common/AudioPlayer";
import { getFormattedBengaliDate } from "@/lib/utils";
import ImageCarousel from "./ImageCarousel";
import RelatedNews from "./RelatedNews";
import ShareOptions from "./ShareOptions";
import VideoCarousel from "./VideoCarousel";

export default function ArticleBody({ article }) {
  // Early return if no article data
  if (!article?.data) {
    return <div>No article data available</div>;
  }

  const { data } = article;

  // Extract media information
  const mediaInfo = {
    mainImage: data?.media?.media_url?.image?.original,
    mainVideo: data?.media?.media_url?.video?.original,
    mainAudio: data?.media?.media_url?.audio?.url,
    externalImages: data?.externalmedia?.image || [],
    externalVideos: data?.externalmedia?.video || [],
  };

  // Process images for carousel
  const getImageUrls = () => {
    const extractedImageUrls = mediaInfo.externalImages
      .map((media) => media?.original)
      .filter(Boolean);
    return [
      ...(mediaInfo.mainImage ? [mediaInfo.mainImage] : []),
      ...extractedImageUrls,
    ];
  };

  // Process videos for carousel (including main video)
  const getVideoUrls = () => {
    const externalVideoUrls = mediaInfo.externalVideos.filter(Boolean);
    return [
      ...(mediaInfo.mainVideo ? [mediaInfo.mainVideo] : []),
      ...externalVideoUrls,
    ];
  };

  // Process audio for carousel
  const getAudioItem = () => {
    if (!mediaInfo.mainAudio) return null;
    return {
      type: "audio",
      url: mediaInfo.mainAudio,
      title: data?.title || "Audio Title",
    };
  };

  // Determine what media content to show
  const mediaContent = {
    hasAudio: !!mediaInfo.mainAudio,
    hasMainVideo: !!mediaInfo.mainVideo,
    imageUrls: getImageUrls(),
    videoUrls: getVideoUrls(),
    get hasImages() {
      return this.imageUrls.length > 0;
    },
    get hasVideos() {
      return this.videoUrls.length > 0;
    },
    get hasAnyMedia() {
      return (
        this.hasAudio || this.hasImages || this.hasVideos || this.hasMainVideo
      );
    },
  };

  // Prepare carousel items
  const getCarouselItems = () => {
    const items = [...mediaContent.imageUrls];
    const audioItem = getAudioItem();
    if (audioItem) {
      items.unshift(audioItem);
    }
    return items;
  };

  return (
    <div className="">
      {/* Article Header */}
      <header className="mb-7">
        <h1 className="text-2xl lg:text-[55px] font-bold md:leading-[56px] inline">
          {data?.title}
          {data?.journalistname?.name && (
            <span className="inline-block ml-2 align-middle text-md font-normal whitespace-nowrap">
              — {data.journalistname.name}
            </span>
          )}
        </h1>
        <p className="lg:text-2xl my-7">
          {getFormattedBengaliDate(data.published_date)}
        </p>
        <ShareOptions />
      </header>

      {/* Media Section - Only show if there's any media */}
      {mediaContent.hasAnyMedia && (
        <section className="grid grid-cols-12 gap-6 mb-[30px] items-center">
          {/* Main Media Column */}
          <div className="lg:col-start-2 col-span-12 md:col-span-7">
            {mediaContent.hasAudio ? (
              <AudioPlayer src={mediaInfo.mainAudio} />
            ) : mediaContent.hasMainVideo ? (
              <VideoCarousel items={[mediaInfo.mainVideo]} />
            ) : mediaContent.hasImages ? (
              <ImageCarousel items={getCarouselItems()} />
            ) : null}
          </div>

          {/* Side Media Column */}
          <div className="col-span-12 md:col-span-3 flex flex-col items-center justify-between gap-4">
            {/* Show external videos or remaining videos if main video is shown separately */}
            {(mediaContent.hasVideos && !mediaContent.hasMainVideo) ||
            (mediaContent.hasVideos &&
              mediaContent.hasMainVideo &&
              mediaContent.videoUrls.length > 1) ? (
              <VideoCarousel
                items={
                  mediaContent.hasMainVideo
                    ? mediaContent.videoUrls.slice(1) // Skip main video if it's already shown
                    : mediaContent.videoUrls
                }
              />
            ) : null}
            <SquareAd />
          </div>
        </section>
      )}

      {/* Article Content */}
      <main className="grid grid-cols-12 gap-9 mb-8">
        <article
          className="col-span-12 lg:col-span-9 text-lg text-wrap"
          dangerouslySetInnerHTML={{
            __html: data?.content || "<p>No content available</p>",
          }}
        />
        <aside className="col-span-12 lg:col-span-3 flex flex-col gap-4 items-center justify-center">
          <SquareAd />
          <SquareAd />
          <SquareAd />
        </aside>
      </main>

      {/* Footer */}
      <footer>
        <LongAdBanner />
        <RelatedNews data={article?.related} />
      </footer>
    </div>
  );
}
