"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { cn, getFormattedBengaliDate } from "@/lib/utils";
import { Play, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function ReelCard({
  item,
  isActive = true,
  index,
  className,
  isMuted = true,
  onMuteToggle,
  titleInside = false, // If true, title will be inside the video container
  // New props for single-video-playing functionality
  isPlaying = false,
  onVideoPlay,
  onVideoPause,
  onReelsPage = false, // If true, this is used in the Reels page
}) {
  const [internalIsPlaying, setInternalIsPlaying] = useState(false);
  const [showThumbnail, setShowThumbnail] = useState(true);
  const [isApiReady, setIsApiReady] = useState(false);
  const [isYouTubeVideo, setIsYouTubeVideo] = useState(false);
  const videoRef = useRef(null);
  const youtubePlayerRef = useRef(null);
  const playerContainerRef = useRef(null);
  const playRequestRef = useRef(null);

  // Determine if it's a YouTube video
  useEffect(() => {
    // Check if video_type is youtube
    if (item?.video_type === "youtube") {
      setIsYouTubeVideo(true);
      // For YouTube videos, embedded_link contains the video ID directly
      if (item?.embedded_link) {
        youtubePlayerRef.current = { id: item.embedded_link };
      }
      return;
    }

    // For upload type, check if embedded_link is a YouTube URL (fallback)
    if (item?.embedded_link && item?.video_type === "upload") {
      const youtubeRegex =
        /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/;
      const match = item.embedded_link.match(youtubeRegex);

      if (match && match[1]) {
        setIsYouTubeVideo(true);
        // Store the extracted YouTube ID
        youtubePlayerRef.current = { id: match[1] };
      }
    }
  }, [item]);

  // Load YouTube API if needed
  useEffect(() => {
    if (!isYouTubeVideo) return;

    // Only load the API once
    if (!document.getElementById("youtube-api")) {
      const tag = document.createElement("script");
      tag.id = "youtube-api";
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      // Set up the callback
      window.onYouTubeIframeAPIReady = () => {
        setIsApiReady(true);
      };
    } else if (window.YT && window.YT.Player) {
      setIsApiReady(true);
    }

    return () => {
      // Clean up YouTube player
      if (youtubePlayerRef.current && youtubePlayerRef.current.player) {
        youtubePlayerRef.current.player.destroy();
      }
    };
  }, [isYouTubeVideo]);

  // Initialize YouTube player when API is ready and thumbnail is clicked
  useEffect(() => {
    if (
      !isYouTubeVideo ||
      !isApiReady ||
      showThumbnail ||
      !playerContainerRef.current
    )
      return;

    const videoId =
      item.embedded_link ||
      (youtubePlayerRef.current && youtubePlayerRef.current.id);
    if (!videoId) return;

    try {
      // Create a new player instance
      const player = new window.YT.Player(playerContainerRef.current, {
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          rel: 0,
          showinfo: 0,
          modestbranding: 1,
          playsinline: 1,
          mute: isMuted ? 1 : 0,
        },
        events: {
          onStateChange: (event) => {
            // Update playing state based on YouTube player state
            const isCurrentlyPlaying =
              event.data === window.YT.PlayerState.PLAYING;
            setInternalIsPlaying(isCurrentlyPlaying);

            // Notify parent component about play/pause state (for grid page) - only if callbacks exist
            if (
              isCurrentlyPlaying &&
              onVideoPlay &&
              typeof index !== "undefined"
            ) {
              onVideoPlay(index);
            } else if (
              !isCurrentlyPlaying &&
              onVideoPause &&
              typeof index !== "undefined"
            ) {
              onVideoPause(index);
            }
          },
          onReady: (event) => {
            // Store the player instance directly
            youtubePlayerRef.current = {
              ...youtubePlayerRef.current,
              player: event.target,
            };

            event.target.playVideo();
            setInternalIsPlaying(true);

            // Notify parent that this video is playing (for grid page) - only if callback exists
            if (onVideoPlay && typeof index !== "undefined") {
              onVideoPlay(index);
            }

            if (isMuted) {
              event.target.mute();
            } else {
              event.target.unMute();
            }
          },
          onError: (event) => {
            console.error("YouTube player error:", event);
          },
        },
      });
    } catch (error) {
      console.error("Error initializing YouTube player:", error);
    }
  }, [
    isApiReady,
    showThumbnail,
    isYouTubeVideo,
    item,
    isMuted,
    index,
    onVideoPlay,
    onVideoPause,
  ]);

  // Set up event listeners for HTML5 video
  useEffect(() => {
    if (isYouTubeVideo || !videoRef.current) return;

    const video = videoRef.current;

    const handlePlay = () => {
      setInternalIsPlaying(true);
      // Notify parent component about play state (for grid page) - only if callback exists
      if (onVideoPlay && typeof index !== "undefined") {
        onVideoPlay(index);
      }
    };

    const handlePause = () => {
      setInternalIsPlaying(false);
      // Notify parent component about pause state (for grid page) - only if callback exists
      if (onVideoPause && typeof index !== "undefined") {
        onVideoPause(index);
      }
    };

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, [isYouTubeVideo, index, onVideoPlay, onVideoPause]);

  // Handle video ended event for HTML5 videos
  useEffect(() => {
    if (isYouTubeVideo || !videoRef.current) return;

    const video = videoRef.current;

    const handleEnded = () => {
      setInternalIsPlaying(false);
      // Notify parent component - only if callback exists
      if (onVideoPause && typeof index !== "undefined") {
        onVideoPause(index);
      }
    };

    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, [isYouTubeVideo, index, onVideoPause]);

  // Handle external play/pause control from parent (for grid page)
  useEffect(() => {
    // Only apply external control if isPlaying prop is explicitly provided and callbacks exist (grid page)
    if (
      onVideoPlay &&
      onVideoPause &&
      typeof isPlaying === "boolean" &&
      !isPlaying &&
      internalIsPlaying
    ) {
      // This video should be paused
      const pauseVideo = async () => {
        try {
          if (isYouTubeVideo) {
            if (
              youtubePlayerRef.current &&
              youtubePlayerRef.current.player &&
              typeof youtubePlayerRef.current.player.pauseVideo === "function"
            ) {
              youtubePlayerRef.current.player.pauseVideo();
            }
          } else if (videoRef.current) {
            // Cancel any pending play request
            if (playRequestRef.current) {
              playRequestRef.current = null;
            }
            videoRef.current.pause();
          }
        } catch (error) {
          console.error("Error pausing video:", error);
        }
        setInternalIsPlaying(false);
      };

      pauseVideo();
    }
  }, [isPlaying, internalIsPlaying, isYouTubeVideo, onVideoPlay, onVideoPause]);

  // Update YouTube player mute state when isMuted prop changes
  useEffect(() => {
    try {
      if (
        isYouTubeVideo &&
        youtubePlayerRef.current &&
        youtubePlayerRef.current.player &&
        typeof youtubePlayerRef.current.player.getPlayerState === "function"
      ) {
        if (isMuted) {
          youtubePlayerRef.current.player.mute();
        } else {
          youtubePlayerRef.current.player.unMute();
        }
      }
    } catch (error) {
      console.error("Error updating YouTube mute state:", error);
    }
  }, [isMuted, isYouTubeVideo]);

  // Update HTML5 video mute state when isMuted prop changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  // Pause video when slide changes and this card is not active (for carousel)
  useEffect(() => {
    if (!isActive && internalIsPlaying) {
      const pauseVideo = async () => {
        try {
          if (isYouTubeVideo) {
            if (
              youtubePlayerRef.current &&
              youtubePlayerRef.current.player &&
              typeof youtubePlayerRef.current.player.pauseVideo === "function"
            ) {
              youtubePlayerRef.current.player.pauseVideo();
            }
          } else if (videoRef.current) {
            // Cancel any pending play request
            if (playRequestRef.current) {
              playRequestRef.current = null;
            }
            videoRef.current.pause();
          }
        } catch (error) {
          console.error("Error pausing video:", error);
        }
        setInternalIsPlaying(false);
      };

      pauseVideo();
    }
  }, [isActive, internalIsPlaying, isYouTubeVideo]);

  const togglePlayPause = async () => {
    if (isYouTubeVideo) {
      if (showThumbnail) {
        setShowThumbnail(false);
        return;
      }

      try {
        // Make sure the player exists and is properly initialized
        if (
          youtubePlayerRef.current &&
          youtubePlayerRef.current.player &&
          typeof youtubePlayerRef.current.player.getPlayerState === "function"
        ) {
          if (internalIsPlaying) {
            youtubePlayerRef.current.player.pauseVideo();
          } else {
            youtubePlayerRef.current.player.playVideo();
          }
        } else {
          console.log("YouTube player not fully initialized yet");
        }
      } catch (error) {
        console.error("Error controlling YouTube player:", error);
      }
    } else {
      // Direct video handling with proper async/await and race condition prevention
      if (videoRef.current) {
        try {
          if (internalIsPlaying) {
            // Cancel any pending play request
            if (playRequestRef.current) {
              playRequestRef.current = null;
            }
            videoRef.current.pause();
          } else {
            // Check if video is already playing or if there's a pending request
            if (videoRef.current.paused && !playRequestRef.current) {
              playRequestRef.current = videoRef.current.play();
              await playRequestRef.current;
              playRequestRef.current = null;
            }
          }
        } catch (error) {
          playRequestRef.current = null;
          // Handle specific error types
          if (error.name === "AbortError") {
            console.log(
              "Play request was interrupted, this is normal during rapid clicking"
            );
          } else if (error.name === "NotAllowedError") {
            console.log(
              "Play request was denied, user interaction may be required"
            );
          } else {
            console.error("Error playing video:", error);
          }
        }
      }
    }
  };

  const handleMuteToggle = (e) => {
    e.stopPropagation(); // Prevent triggering play/pause

    // Call the parent's mute toggle function
    if (onMuteToggle) {
      onMuteToggle();
    }
  };

  // Get YouTube video ID
  const getYouTubeId = () => {
    return (
      item?.embedded_link ||
      (youtubePlayerRef.current && youtubePlayerRef.current.id)
    );
  };

  return (
    <div className={cn("relative overflow-hidden transition-all", className)}>
      <AspectRatio
        ratio={9 / 16}
        className="bg-black overflow-hidden relative group"
      >
        {isYouTubeVideo ? (
          // YouTube Video Player
          <>
            {showThumbnail ? (
              // YouTube Thumbnail
              <>
                <img
                  src={`https://img.youtube.com/vi/${getYouTubeId()}/maxresdefault.jpg`}
                  alt={item?.title || "Video thumbnail"}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={togglePlayPause}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-12 h-12 rounded-full bg-white text-black cursor-pointer hover:bg-gray-200"
                    onClick={togglePlayPause}
                  >
                    <Play className="h-8 w-8 ml-1" />
                    <span className="sr-only">Play</span>
                  </Button>
                </div>
              </>
            ) : (
              // YouTube Player
              <div className="w-full h-full relative">
                <div
                  ref={playerContainerRef}
                  className="w-full h-full cursor-pointer"
                  onClick={togglePlayPause}
                />
                {!internalIsPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-12 h-12 rounded-full bg-white text-black cursor-pointer hover:bg-gray-200"
                      onClick={togglePlayPause}
                    >
                      <Play className="h-8 w-8 ml-1" />
                      <span className="sr-only">Play</span>
                    </Button>
                  </div>
                )}

                {/* Mute/Unmute button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute bottom-2 right-2 h-8 w-8 rounded-full bg-black/50 text-white hover:bg-black/70 z-20"
                  onClick={handleMuteToggle}
                >
                  {isMuted ? (
                    <VolumeX className="h-4 w-4" />
                  ) : (
                    <Volume2 className="h-4 w-4" />
                  )}
                  <span className="sr-only">{isMuted ? "Unmute" : "Mute"}</span>
                </Button>
              </div>
            )}
          </>
        ) : (
          // Direct Video Player
          <>
            <video
              ref={videoRef}
              className="w-full h-full object-cover cursor-pointer"
              src={item?.media_path}
              poster={item?.thumbnail_path}
              playsInline
              onClick={togglePlayPause}
              muted={isMuted}
            />
            {!internalIsPlaying && !isYouTubeVideo && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-12 h-12 rounded-full bg-white text-black cursor-pointer hover:bg-gray-200"
                  onClick={togglePlayPause}
                >
                  <Play className="h-8 w-8 ml-1" />
                  <span className="sr-only">Play</span>
                </Button>
              </div>
            )}

            {/* Mute/Unmute button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute bottom-2 right-2 h-8 w-8 rounded-full bg-black/50 text-white cursor-pointer md:opacity-0 hover:bg-black/70 group-hover:opacity-100 z-20 transition-transform duration-300 ease-in-out"
              onClick={handleMuteToggle}
            >
              {isMuted ? (
                <VolumeX className="h-4 w-4" />
              ) : (
                <Volume2 className="h-4 w-4" />
              )}
              <span className="sr-only">{isMuted ? "Unmute" : "Mute"}</span>
            </Button>
          </>
        )}

        {/* Title inside video container if titleInside is true */}
        {titleInside && (
          <div className="absolute bottom-0 left-0 right-0 p-2.5 bg-gradient-to-t from-black/70 to-transparent z-10">
            <div className="flex flex-col gap-1 text-white">
              <h1 className="text-xsm leading-snug inline truncate text-wrap">
                {item?.title}
                {item?.source && (
                  <span className="inline-block ml-2 align-middle text-xxs font-thin">
                    — {item?.source}
                  </span>
                )}
              </h1>
              <p className="text-xxs whitespace-nowrap">
                {getFormattedBengaliDate(item?.created_at)}
              </p>
            </div>
          </div>
        )}
      </AspectRatio>

      {/* Title outside video container if titleInside is false */}
      {!titleInside && (
        <div className="flex flex-col gap-1 justify-between pt-2 text-black">
          <h1
            className={`${
              onReelsPage ? "text-xl font-semibold" : "text-xsm"
            }  leading-snug inline truncate text-wrap`}
          >
            {item?.title}
            {item?.source && (
              <span
                className={`inline-block ml-2 align-middle  ${
                  onReelsPage ? "text-sm font-normal" : "text-xxs font-thin"
                }`}
              >
                — {item?.source}
              </span>
            )}
          </h1>
          <div className="flex items-center justify-between w-full">
            {!onReelsPage && (
              <button className="text-xxs cursor-pointer hover:underline">
                আরও দেখুন
              </button>
            )}
            <p
              className={`${
                onReelsPage ? "text-xs" : "text-xxs"
              } whitespace-nowrap`}
            >
              {getFormattedBengaliDate(item?.created_at)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
