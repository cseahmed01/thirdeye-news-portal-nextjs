"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Play, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function ReelCard({
  item,
  isActive = true,
  index,
  className,
  isMuted = true,
  onMuteToggle,
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showThumbnail, setShowThumbnail] = useState(true);
  const [isApiReady, setIsApiReady] = useState(false);
  const [isYouTubeVideo, setIsYouTubeVideo] = useState(false);
  const videoRef = useRef(null);
  const youtubePlayerRef = useRef(null);
  const playerContainerRef = useRef(null);

  // Determine if it's a YouTube video
  useEffect(() => {
    // Check if youtubeId is directly provided
    if (item?.youtubeId) {
      setIsYouTubeVideo(true);
      return;
    }

    // Check if videoUrl is a YouTube URL
    if (item?.videoUrl) {
      const youtubeRegex =
        /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/;
      const match = item.videoUrl.match(youtubeRegex);

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
      item.youtubeId ||
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
            setIsPlaying(event.data === window.YT.PlayerState.PLAYING);
          },
          onReady: (event) => {
            // Store the player instance directly
            youtubePlayerRef.current = {
              ...youtubePlayerRef.current,
              player: event.target,
            };

            event.target.playVideo();
            setIsPlaying(true);

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
  }, [isApiReady, showThumbnail, isYouTubeVideo, item, isMuted]);

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

  // Pause video when slide changes and this card is not active
  useEffect(() => {
    if (!isActive && isPlaying) {
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
          videoRef.current.pause();
        }
      } catch (error) {
        console.error("Error pausing video:", error);
      }
      setIsPlaying(false);
    }
  }, [isActive, isPlaying, isYouTubeVideo]);

  const togglePlayPause = () => {
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
          if (isPlaying) {
            youtubePlayerRef.current.player.pauseVideo();
          } else {
            youtubePlayerRef.current.player.playVideo();
          }
        } else {
          console.log("YouTube player not fully initialized yet");
          // If player isn't ready, just update the UI state
          setIsPlaying(!isPlaying);
        }
      } catch (error) {
        console.error("Error controlling YouTube player:", error);
        // Fallback to just updating the UI state
        setIsPlaying(!isPlaying);
      }
    } else {
      // Direct video handling remains the same
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause();
        } else {
          videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
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
      item.youtubeId ||
      (youtubePlayerRef.current && youtubePlayerRef.current.id)
    );
  };

  return (
    <div className={cn("overflow-hidden transition-all", className)}>
      <AspectRatio ratio={9 / 16} className="bg-black overflow-hidden relative">
        {isYouTubeVideo ? (
          // YouTube Video Player
          <>
            {showThumbnail ? (
              // YouTube Thumbnail
              <>
                <img
                  src={
                    item?.image ||
                    `https://img.youtube.com/vi/${getYouTubeId()}/maxresdefault.jpg`
                  }
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
                {!isPlaying && (
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
              src={
                item?.videoUrl ||
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              }
              poster={item?.image}
              onEnded={() => setIsPlaying(false)}
              playsInline
              onClick={togglePlayPause}
              muted={isMuted}
            />
            {!isPlaying && !isYouTubeVideo && (
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
          </>
        )}
      </AspectRatio>
      <div className="flex flex-col gap-1 justify-between pt-2 bg-white">
        <h1 className="text-xxs leading-snug inline truncate">
          {item?.title}
          <span className="inline-block ml-2 align-middle text-xxs font-thin">
            — {item?.author}
          </span>
        </h1>
        <div className="mt-1 flex items-center justify-between w-full">
          <button className="text-xxs cursor-pointer hover:underline ">
            আরও দেখুন
          </button>
          <p className="text-xxs whitespace-nowrap">
            {item?.date}
          </p>
        </div>
      </div>
    </div>
  );
}
