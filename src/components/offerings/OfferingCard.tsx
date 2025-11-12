import Image from "next/image";
import type { OfferingCardProps } from "@/shared/types/offerings.types";

export const OfferingCard = ({
  src,
  alt,
  title,
  description,
}: OfferingCardProps) => {
  return (
    <article className="flex flex-col rounded-[10px] bg-gray-100 px-[19px] py-[31px]">
      {/* Icon */}
      <Image
        src={src}
        width={50}
        height={50}
        alt={alt}
        className="mb-2.5 aspect-square h-10 w-10 sm:h-12.5 sm:w-12.5"
      />
      {/* Content */}
      <h3 className="font-poppins mb-[5px] text-xl/snug text-gray-600 sm:text-2xl/[39px]">
        {title}
      </h3>
      <p className="font-roboto text-base/tight font-normal text-gray-400 sm:max-w-[300px] sm:text-lg/[25px]">
        {description}
      </p>
    </article>
  );
};
