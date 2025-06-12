import GetVideoDuration from "./GetVideoDuration";
import { SuccessVideoCardProps } from "@/types/types";
import { Play, Copy, Check } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import VideoDialog from "./VideoDialog";
import he from "he";
import { toast } from "sonner";

function SuccessVideoCard({
  videoLink,
  videoTitle,
  videoLength,
  thumbnail,
}: SuccessVideoCardProps) {
  const [showVideo, setShowVideo] = useState(false);
  const [videoLengthActual, setVideoLengthActual] = useState(videoLength || "");
  const [isCopied, setIsCopied] = useState(false);

  const decodedVideoTitle = he.decode(videoTitle);

  const handleCopyLink = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(videoLink);
    setIsCopied(true);
    toast.success("Video link copied to clipboard!");

    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  return (
    <>
      <div className="w-full h-full rounded-xl overflow-hidden shadow hover:shadow-md transition duration-300">
        <div className="relative w-full h-36 sm:h-40 md:h-48">
          <Image
            src={thumbnail}
            alt={videoTitle}
            layout="fill"
            objectFit="cover"
            className="rounded-t-xl"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <div
              className="bg-white/30 p-2 sm:p-3 md:p-4 rounded-full cursor-pointer hover:scale-112 transition-all duration-300 group"
              onClick={() => setShowVideo(true)}
            >
              <Play className="w-4 h-4 sm:w-6 sm:h-6 text-white fill-white group-hover:text-[#0053e2] group-hover:fill-[#0053e2]" />
            </div>
          </div>
        </div>

        <div className="p-3 sm:p-4 space-y-2 sm:space-y-4">
          <div className="flex justify-between items-start">
            <p className="text-xs sm:text-sm text-gray-800 font-medium line-clamp-2 flex-1">
              {decodedVideoTitle}
            </p>
            <button
              onClick={handleCopyLink}
              className="ml-2 p-1 hover:bg-gray-100 rounded-full transition-colors relative group"
            >
              {isCopied ? (
                <Check className="w-4 h-4 text-green-600" />
              ) : (
                <Copy className="w-4 h-4 text-gray-600" />
              )}
              <span className="absolute -top-8 left-[60%] transform -translate-x-[70%] bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {isCopied ? "Copied!" : "Copy link"}
              </span>
            </button>
          </div>
          <p className="text-xs text-blue-600 font-semibold">
            {videoLengthActual}
          </p>
        </div>
      </div>

      {/* Extract video duration invisibly */}
      <GetVideoDuration
        videoLink={videoLink}
        onDuration={(duration) => setVideoLengthActual(duration)}
      />

      <VideoDialog
        videoLink={videoLink}
        open={showVideo}
        onOpenChange={setShowVideo}
      />
    </>
  );
}

export default SuccessVideoCard;
