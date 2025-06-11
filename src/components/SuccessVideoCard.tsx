import GetVideoDuration from "./GetVideoDuration";
import { SuccessVideoCardProps } from "@/types/types";
import { Play } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import VideoDialog from "./VideoDialog";
import he from "he";

function SuccessVideoCard({
  videoLink,
  videoTitle,
  videoLength,
  thumbnail,
}: SuccessVideoCardProps) {
  const [showVideo, setShowVideo] = useState(false);
  const [videoLengthActual, setVideoLengthActual] = useState(videoLength || "");

  const decodedVideoTitle = he.decode(videoTitle);

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
            <div className="bg-white/30 p-2 sm:p-3 md:p-4 rounded-full cursor-pointer hover:scale-112 transition-all duration-300 group" 
                  onClick={() => setShowVideo(true)}>
                <Play
                  className="w-4 h-4 sm:w-6 sm:h-6 text-white fill-white group-hover:text-[#0053e2] group-hover:fill-[#0053e2]"
                />
              </div>
          </div>
        </div>

        <div className="p-3 sm:p-4 space-y-2 sm:space-y-4">
          <p className="text-xs sm:text-sm text-gray-800 font-medium line-clamp-2">
            {decodedVideoTitle}
          </p>
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
