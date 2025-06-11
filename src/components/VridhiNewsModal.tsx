import React from "react";
import Image from "next/image";
import { StoryData } from "@/types/types";
import he from "he";
import Link from "next/link";

type Props = {
  announcement: StoryData;
  onClose: () => void;
};

function VridhiNewsModal({ announcement, onClose }: Props) {
  const imageUrl = announcement.acf?.media_page_screenshot?.url ? announcement.acf?.media_page_screenshot?.url : announcement?._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  const title = he.decode(announcement?.title?.rendered || "");
  const sourceLink = announcement.acf?.media_link || "";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="rounded-xl shadow-xl max-w-md w-full relative overflow-hidden">
        <button
          className="absolute flex justify-center items-center top-1 right-2 h-8 w-8 rounded-full text-white bg-[#0053e2A1] hover:bg-[#0053e2] text-3xl cursor-pointer z-10"
          onClick={onClose}
        >
          ×
        </button>
        {imageUrl && (
          <div className="relative w-full h-48 overflow-hidden">
            <Link href={imageUrl} target="_blank">
            <div className="absolute inset-0 bg-gradient-to-r w-full z-2 from-black/80 from-100% opacity-30 hover:opacity-60" />
            <Image
              src={imageUrl}
              alt="Modal thumbnail"
              fill
              className="object-cover object-top"
            />
            </Link>
          </div>
        )}
        <div className="p-6 bg-white">
          <h2
          className="text-lg font-semibold mb-4"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <a
          href={sourceLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#0053E2] text-white px-6 py-2 rounded-full hover:bg-[#0053E2] transition"
        >
          Read Article
        </a>
        </div>
      </div>
    </div>
  );
}

export default VridhiNewsModal;
