// components/GetVideoDuration.tsx
import { useEffect, useRef } from "react";

type Props = {
  videoLink: string;
  onDuration: (duration: string) => void;
};

const formatDuration = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
};

export default function GetVideoDuration({ videoLink, onDuration }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      const duration = formatDuration(video.duration);
      onDuration(duration);
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [onDuration]);

  return (
    <video
      ref={videoRef}
      src={videoLink}
      preload="metadata"
      style={{ display: "none" }}
    />
  );
}
