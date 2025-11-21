import Image from "next/image";
import type { SolutionCardProps } from "./hero.types";

export const HeroSolutionCard = ({
  src,
  alt,
  title,
  description,
}: SolutionCardProps) => {
  return (
    <article className="relative h-90 w-80 overflow-hidden rounded-[10px] text-white sm:h-108 sm:w-65.5">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />

      {/* Dark effect */}
      <div
        className="absolute top-0 h-[50%] w-full rounded-[10px]"
        style={{
          background:
            "linear-gradient(180deg, #131313 -10.94%, rgba(19, 19, 19, 0) 100%)",
        }}
      ></div>

      {/* Content */}
      <div className="relative px-5 py-8">
        <h3 className="z-10 mb-4 text-2xl/[31px]">{title}</h3>
        <p className="font-roboto font-regular text-base/5.5">{description}</p>
      </div>
    </article>
  );
};
