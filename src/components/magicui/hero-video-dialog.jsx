/* eslint-disable @next/next/no-img-element */
"use client";

import { cn } from "@/lib/utils";
import { Play, XIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { createPortal } from "react-dom";

const animationVariants = {
  "from-bottom": {
    initial: { y: "100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  },
  "from-center": {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.5, opacity: 0 },
  },
  "from-top": {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-100%", opacity: 0 },
  },
  "from-left": {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  },
  "from-right": {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  "top-in-bottom-out": {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  },
  "left-in-right-out": {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  },
};

export default function HeroVideoDialog({
  animationStyle = "from-center",
  videoUrl,
  youtubeId,
  thumbnailSrc,
  thumbnailAlt = "Video thumbnail",
  className,
}) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const selectedAnimation = animationVariants[animationStyle];

  // Determine video source and type
  const isYouTubeVideo = !!youtubeId;
  const videoSrc = isYouTubeVideo
    ? `https://www.youtube.com/embed/${youtubeId}?autoplay=1`
    : videoUrl;

  // Generate thumbnail if not provided
  const thumbnail =
    thumbnailSrc ||
    (youtubeId
      ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`
      : "/placeholder.svg?height=600&width=1000");

  const renderVideoPlayer = () => {
    if (isYouTubeVideo) {
      return (
        <iframe
          src={videoSrc}
          className="size-full rounded-2xl"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          title="YouTube video player"
        />
      );
    } else {
      return (
        <video
          className="size-full rounded-2xl"
          controls
          autoPlay
          preload="metadata"
          crossOrigin="anonymous"
        >
          <source src={videoSrc} type="video/mp4" />
          <source src={videoSrc} type="video/webm" />
          <source src={videoSrc} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      );
    }
  };

  // Don't render if no video source is provided
  if (!videoUrl && !youtubeId) {
    return null;
  }

  return (
    <div className={cn("relative", className)}>
      <div
        className="group relative cursor-pointer h-[245px] overflow-hidden"
        onClick={() => setIsVideoOpen(true)}
      >
        <img
          src={thumbnail || "/placeholder.svg"}
          alt={thumbnailAlt}
          width={440}
          height={245}
          className="w-full transition-all duration-200 ease-out group-hover:brightness-[0.8]"
          crossOrigin="anonymous"
        />
        <div className="absolute inset-0 flex scale-[0.9] items-center justify-center rounded-2xl transition-all duration-200 ease-out group-hover:scale-100">
          <div className="flex size-20 items-center justify-center rounded-full bg-primary/10 backdrop-blur-md">
            <div className="relative flex size-20 scale-100 items-center justify-center rounded-full bg-gradient-to-b from-primary/30 to-primary shadow-md transition-all duration-200 ease-out group-hover:scale-[1.2]">
              <Play
                className="size-6 scale-100 fill-white text-white transition-transform duration-200 ease-out group-hover:scale-105"
                style={{
                  filter:
                    "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {isVideoOpen &&
        createPortal(
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setIsVideoOpen(false)}
              exit={{ opacity: 0 }}
              // className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-md"
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            >
              <motion.div
                {...selectedAnimation}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="relative mx-4 aspect-video w-full max-w-4xl md:mx-0"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.button
                  onClick={() => setIsVideoOpen(false)}
                  className="absolute -top-16 right-0 rounded-full bg-neutral-900/50 p-2 text-xl text-white ring-1 backdrop-blur-md hover:bg-neutral-900/70 transition-colors"
                >
                  <XIcon className="size-5" />
                </motion.button>
                <div className="relative isolate z-[1] size-full overflow-hidden rounded-2xl border-2 border-white">
                  {renderVideoPlayer()}
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>,
          document.body
        )}
    </div>
  );
}
