"use client";

import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { AlertCircle, Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function AudioPlayer({ src, title, className = "" }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !src) {
      // Reset states when no src
      setIsLoading(false);
      setIsPlaying(false);
      setCurrentTime(0);
      setDuration(0);
      setHasError(false);
      setErrorMessage("");
      return;
    }

    // Reset all states when src changes
    setIsLoading(true);
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
    setHasError(false);
    setErrorMessage("");

    const handleLoadedMetadata = () => {
      setDuration(audio.duration || 0);
      setIsLoading(false);
      setHasError(false);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime || 0);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    const handleLoadStart = () => {
      setIsLoading(true);
      setHasError(false);
    };

    const handleCanPlay = () => {
      setIsLoading(false);
      setHasError(false);
    };

    const handleError = (e) => {
      setIsLoading(false);
      setIsPlaying(false);
      setHasError(true);

      // More specific error messages
      let message = "Failed to load audio";
      if (audio.error) {
        switch (audio.error.code) {
          case 1:
            message = "Audio loading was aborted";
            break;
          case 2:
            message = "Network error occurred while loading audio";
            break;
          case 3:
            message = "Audio format not supported or corrupted";
            break;
          case 4:
            message = "Audio source not found";
            break;
          default:
            message = "Unknown audio error occurred";
        }
      }

      setErrorMessage(message);
      console.error("Audio failed to load:", message, e);
    };

    const handleLoadedData = () => {
      setIsLoading(false);
      setHasError(false);
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("loadstart", handleLoadStart);
    audio.addEventListener("canplay", handleCanPlay);
    audio.addEventListener("error", handleError);
    audio.addEventListener("loadeddata", handleLoadedData);

    // Force load the audio
    audio.load();

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("loadstart", handleLoadStart);
      audio.removeEventListener("canplay", handleCanPlay);
      audio.removeEventListener("error", handleError);
      audio.removeEventListener("loadeddata", handleLoadedData);
    };
  }, [src]);

  const togglePlayPause = async () => {
    const audio = audioRef.current;
    if (!audio || !src || hasError) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        setIsLoading(true);
        await audio.play();
        setIsPlaying(true);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Playback failed:", error);
      setIsLoading(false);
      setIsPlaying(false);
      setHasError(true);
      setErrorMessage("Playback failed. Please try again.");
    }
  };

  const handleProgressChange = (value) => {
    const audio = audioRef.current;
    if (!audio || !duration || hasError) return;

    const newTime = (value[0] / 100) * duration;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (value) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newVolume = value[0] / 100;
    audio.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMuted) {
      audio.volume = volume;
      setIsMuted(false);
    } else {
      audio.volume = 0;
      setIsMuted(true);
    }
  };

  const formatTime = (time) => {
    if (isNaN(time) || !isFinite(time)) return "0:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const progressPercentage = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div
      className={`bg-white border border-gray-200 rounded-lg p-4 shadow-sm ${className}`}
    >
      {src && <audio ref={audioRef} src={src} preload="metadata" />}

      {title && (
        <div className="mb-3">
          <h3 className="text-sm font-medium text-gray-900 truncate">
            {title}
          </h3>
        </div>
      )}

      {hasError && (
        <div className="mb-3 p-3 bg-red-50 border border-red-200 rounded-md flex items-start gap-2">
          <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
          <div className="text-sm text-red-700">
            <p className="font-medium">Audio Error</p>
            <p className="text-red-600">{errorMessage}</p>
          </div>
        </div>
      )}

      <div className="space-y-3">
        {/* Progress Bar */}
        <div className="space-y-1">
          <Slider
            value={[progressPercentage]}
            onValueChange={handleProgressChange}
            max={100}
            step={0.1}
            className="w-full cursor-pointer [&>span:first-child]:h-2 [&>span:first-child]:bg-gray-200 [&_[role=slider]]:bg-gray-900 [&_[role=slider]]:w-4 [&_[role=slider]]:h-4 [&_[role=slider]]:border-2 [&_[role=slider]]:border-white [&_[role=slider]]:shadow-md [&>span:first-child_span]:bg-gray-900"
            disabled={!src || hasError}
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Button
              onClick={togglePlayPause}
              disabled={!src || hasError}
              size="sm"
              variant="outline"
              className="h-10 w-10 cursor-pointer rounded-full border-gray-300 hover:bg-gray-50 bg-transparent disabled:opacity-50"
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin" />
              ) : hasError ? (
                <AlertCircle className="h-4 w-4 text-red-500" />
              ) : isPlaying ? (
                <Pause className="h-4 w-4 text-gray-900" />
              ) : (
                <Play className="h-4 w-4 text-gray-900 ml-0.5" />
              )}
            </Button>
          </div>

          {/* Volume Control */}
          <div className="flex items-center space-x-2 min-w-0 flex-1 max-w-32 ml-4">
            <Button
              onClick={toggleMute}
              size="sm"
              variant="ghost"
              className="h-8 w-8 p-0 hover:bg-gray-100 cursor-pointer"
              disabled={hasError}
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="h-4 w-4 text-gray-600" />
              ) : (
                <Volume2 className="h-4 w-4 text-gray-600" />
              )}
            </Button>
            <Slider
              value={[isMuted ? 0 : volume * 100]}
              onValueChange={handleVolumeChange}
              max={100}
              step={1}
              disabled={hasError}
              className="flex-1 cursor-pointer [&>span:first-child]:h-1.5 [&>span:first-child]:bg-gray-200 [&_[role=slider]]:bg-gray-900 [&_[role=slider]]:w-3 [&_[role=slider]]:h-3 [&_[role=slider]]:border [&_[role=slider]]:border-white [&_[role=slider]]:shadow-sm [&>span:first-child_span]:bg-gray-900"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
