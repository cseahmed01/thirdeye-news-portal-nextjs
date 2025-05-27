import HeroVideoDialog from "../magicui/hero-video-dialog";

export default function VideoCard({
  title,
  author,
  date,
  image,
  videoUrl,
  youtubeId,
}) {
  return (
    <div className="h-[245px] relative overflow-hidden">
      <HeroVideoDialog
        animationStyle="from-center"
        videoUrl={videoUrl}
        youtubeId={youtubeId}
        thumbnailSrc={
          image ||
          (youtubeId
            ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`
            : "/placeholder.svg?height=600&width=1000")
        }
        thumbnailAlt={`${title} thumbnail`}
      />
      <div className="absolute bottom-0 bg-[linear-gradient(180deg,rgba(217,217,217,0)_0%,rgba(41,45,50,0.7)_100%)]">
        <div className="relative text-white p-2.5">
          <h1 className="text-md font-normal leading-snug inline">
            {title}
            <span className="inline-block ml-2 align-middle text-xsm font-normal whitespace-nowrap">
              — {author}
            </span>
          </h1>

          <span className="absolute right-2.5 bottom-2.5 text-xsm whitespace-nowrap">
            {date}
          </span>
        </div>
      </div>
    </div>
  );
}
