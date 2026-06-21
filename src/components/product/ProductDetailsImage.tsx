import { FormattedAttribute } from "@/types/product";
import Image from "next/image";
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
  return (
    <div>
      <div className="relative mb-4 h-112.5 overflow-hidden rounded-xl border">
        <Image
          src={image}
          alt={alt ?? ""}
          fill
          className="object-contain p-4"
        />
      </div>

      <div className="flex gap-3">
        {productImages.map((image, index) => (
          <button
            key={index}
            className="relative h-24 w-24 overflow-hidden rounded-lg border"
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
