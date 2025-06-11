"use client";

import AnimatedSection from "./AnimatedSection";
import StaggeredAnimatedSection from "./StaggeredAnimatedSection";

function Leadership() {
  return (
    <AnimatedSection delay={0.4}>
      <div className="text-center my-10 rounded-xl">
        <StaggeredAnimatedSection
          className="flex flex-col items-center"
          staggerDelay={0.2}
        >
          <p className="md:text-xl mb-2">Know More About Us</p>
          <h2 className="text-2xl md:text-4xl">Leadership Video</h2>
        </StaggeredAnimatedSection>

        <div className="mt-4 md:mt-10 w-full">
          <div className="relative w-full" style={{ paddingTop: "50%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/cRULUFLlD84"
              title="Leadership Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default Leadership;
