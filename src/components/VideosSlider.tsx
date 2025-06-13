"use client";

import React, { useState, useRef, useEffect } from "react";
import { NarrativesSliderProps } from "@/types/types";
import { ChevronLeft, ChevronRight, Play, Copy, Check } from "lucide-react";
import Image from "next/image";
import VideoDialog from "./VideoDialog";
import { toast } from "sonner";

// Helper to get duration of a video
function GetVideoDuration({
  videoLink,
  index,
  setDuration,
}: {
  videoLink: string;
  index: number;
  setDuration: (index: number, duration: string) => void;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      const mins = Math.floor(video.duration / 60);
      const secs = Math.floor(video.duration % 60);
      const formatted = `${mins}:${secs < 10 ? "0" : ""}${secs}`;
      setDuration(index, formatted);
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    return () =>
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
  }, [index, setDuration]);

  return (
    <video
      ref={ref}
      src={videoLink}
      preload="metadata"
      style={{ display: "none" }}
    />
  );
}

function VideosSlider({ slides }: NarrativesSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openVideo, setOpenVideo] = useState<null | string>(null);
  const [videoDurations, setVideoDurations] = useState<{
    [key: number]: string;
  }>({});
  const [isCopiedMap, setIsCopiedMap] = useState<{ [key: number]: boolean }>(
    {}
  );

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleSetDuration = (index: number, duration: string) => {
    setVideoDurations((prev) => ({
      ...prev,
      [index]: duration,
    }));
  };

  const handleCopyLink = (videoLink: string, index: number) => {
    navigator.clipboard.writeText(videoLink);
    setIsCopiedMap((prev) => ({ ...prev, [index]: true }));
    toast.success("Video link copied to clipboard!");

    setTimeout(() => {
      setIsCopiedMap((prev) => ({ ...prev, [index]: false }));
    }, 3000);
  };

  return (
    <div className="w-full py-6 sm:py-10 overflow-hidden relative">
      <div className="relative flex items-center justify-center h-[220px] sm:h-[280px] md:h-[320px] overflow-hidden">
        {slides.map((slide, idx) => {
          const isActive = idx === currentIndex;
          const isPrev =
            idx === (currentIndex - 1 + slides.length) % slides.length;
          const isNext = idx === (currentIndex + 1) % slides.length;

          let translateX = 9999;
          if (isActive) translateX = 0;
          else if (isPrev) translateX = -320;
          else if (isNext) translateX = 320;

          const scale = isActive
            ? "scale-100 opacity-100 z-20"
            : "scale-75 opacity-60 z-10";

          const mobileHidden = !isActive ? "hidden sm:block" : "";

          return (
            <div
              key={idx}
              className={`absolute transition-all duration-500 ease-in-out transform ${scale} ${mobileHidden}`}
              style={{
                transform: `translateX(${translateX}px)`,
              }}
            >
              <div className="w-[300px] sm:w-[350px] md:w-[450px] h-[200px] sm:h-[250px] md:h-[300px] rounded-xl overflow-hidden shadow bg-white">
                <div className="relative w-full h-32 sm:h-40 md:h-50">
                  <Image
                    src={slide._embedded["wp:featuredmedia"][0].source_url}
                    alt={slide.title.rendered}
                    fill
                    className="object-cover rounded-t-xl"
                  />
                  <div className="absolute inset-0 flex justify-center items-center">
                    <div
                      className="bg-white/30 p-2 sm:p-3 md:p-4 rounded-full cursor-pointer hover:scale-112 transition-all duration-300 group"
                      onClick={() => setOpenVideo(slide.acf.video_link || "")}
                    >
                      <Play className="w-4 h-4 sm:w-6 sm:h-6 text-white fill-white group-hover:text-[#0053e2] group-hover:fill-[#0053e2]" />
                    </div>
                  </div>
                </div>
                <div className="p-3 sm:p-4">
                  <div className="flex justify-between items-center">
                    <p className="text-xs sm:text-sm font-medium line-clamp-2 pr-2">
                      {slide.title.rendered}
                    </p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent opening video when copying
                        handleCopyLink(slide.acf.video_link || "", idx);
                      }}
                      className="flex-shrink-0 p-1 rounded-full hover:bg-gray-200 focus:outline-none relative group"
                    >
                      {isCopiedMap[idx] ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4 text-gray-500 hover:text-[#0053e2]" />
                      )}
                      <span className="absolute -top-8 left-[60%] transform -translate-x-[70%] bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {isCopiedMap[idx] ? "Copied!" : "Copy link"}
                      </span>
                    </button>
                  </div>
                  <p className="text-xs text-[#0053e2] font-semibold mt-2">
                    {videoDurations[idx] || "Loading..."}
                  </p>
                </div>

                {/* Hidden video to get metadata */}
                <GetVideoDuration
                  videoLink={slide.acf.video_link as string}
                  index={idx}
                  setDuration={handleSetDuration}
                />
              </div>
            </div>
          );
        })}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 z-30 p-1 sm:p-2 bg-[#ccc] cursor-pointer rounded-full shadow"
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 z-30 p-1 sm:p-2 bg-[#ccc] cursor-pointer rounded-full shadow"
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 sm:mt-6 gap-2">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`w-2 h-2 rounded-full ${
              i === currentIndex ? "bg-[#0053e2]" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>

      {/* Video Dialog */}
      {openVideo && (
        <VideoDialog
          videoLink={openVideo}
          open={!!openVideo}
          onOpenChange={(val) => !val && setOpenVideo(null)}
        />
      )}
    </div>
  );
}

export default VideosSlider;
