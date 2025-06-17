"use client";

import Image from "next/image";
import "aos/dist/aos.css";
import { SecondaryButton } from "./buttons";
import { useState, useRef } from "react";
import AnimatedSection from "./AnimatedSection";

export default function SuccessStories() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <AnimatedSection delay={0.4}>
      <section className="my-10 bg-white">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <Image
              src="/images/success-stories.svg"
              alt="Success Stories Icon"
              width={80}
              height={80}
              className="mb-6"
            />
            <h2 className="text-2xl md:text-4xl mb-4">
              <p>Inspiring Success Stories:</p>
              Empowering MSMEs to Thrive with Walmart Vriddhi
            </h2>
            <p className="mb-6 font-light">
              Discover how local businesses transformed their futures through
              Walmart Vriddhi. Watch their journeys and get inspired to start
              yours today!
            </p>
            <SecondaryButton
              href="/success-stories"
              text="View More"
              variant="secondary"
            />
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2 text-right">
            <div className="relative lg:w-[70%] md:ml-auto">
              <div className="relative">
                <video
                  ref={videoRef}
                  controls
                  className="w-full h-[400px] rounded-xl shadow-lg object-cover"
                  playsInline
                  poster="/images/tina-video.webp"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                >
                  <source
                    src="https://wvcdn.blr1.cdn.digitaloceanspaces.com/success-stories/RinoKraft%20-%20Tina%20-%2029th%20Jan2025%20FINAL%20CUT%20-HR.mp4"
                    type="video/mp4"
                  />
                </video>
                {!isPlaying && (
                  <button
                    onClick={togglePlay}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 rounded-full p-4 shadow-lg hover:bg-white transition-colors cursor-pointer"
                    aria-label="Play video"
                  >
                    <svg
                      className="w-8 h-8 text-[#005eff]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
