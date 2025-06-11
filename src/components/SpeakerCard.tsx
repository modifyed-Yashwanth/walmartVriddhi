import React from "react";
import Image from "next/image";

interface SpeakerCardProps {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt?: string;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({
  name,
  title,
  description,
  imageUrl,
  imageAlt = "Speaker",
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      {/* Image Section */}
      <div className="aspect-video w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={400}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Name */}
        <h2 className="text-xl mb-2">{name}</h2>

        {/* Title */}
        <h3 className="text-[#0053E2] text-sm mb-4 leading-tight">{title}</h3>

        {/* Description */}
        <p className="text-sm leading-relaxed flex-grow">{description}</p>
      </div>
    </div>
  );
};

export default SpeakerCard;
