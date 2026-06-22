"use client";

import Image from "next/image";
import { useState } from "react";
interface ProductDetailsImageProps {
  productImages: {
    url: string;
  }[];
  alt?: string;
}
export default function ProductDetailsImage({
  productImages,
  alt,
}: ProductDetailsImageProps) {
  const image = productImages[0]?.url;
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setPosition({ x, y });
  };
  return (
    <div>
      <div
        onMouseMove={handleMouseMove}
        className="group relative mb-4 h-112.5 overflow-hidden rounded-xl border border-gray-200"
      >
        <Image
          src={image}
          alt={alt ?? ""}
          fill
          style={{
            transformOrigin: `${position.x}% ${position.y}%`,
          }}
          className="object-contain transition-transform duration-300 group-hover:scale-250 p-4"
        />
      </div>

      <div className="flex gap-3">
        {productImages.map((image, index) => (
          <button
            key={index}
            className="relative h-24 w-24 overflow-hidden rounded-lg border border-gray-200"
          >
            <Image
              src={image.url}
              alt={`Image ${index + 1}`}
              fill
              className="object-contain p-2"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
