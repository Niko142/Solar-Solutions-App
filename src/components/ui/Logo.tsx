import clsx from "clsx";
import Image from "next/image";
import type { LogoProps } from "@/types/common.types";

export const Logo = ({
  priority = false,
  className = "",
  containerClassName = "",
}: LogoProps) => {
  return (
    <div
      className={clsx(
        "relative aspect-148/63 w-[100px] sm:w-[120px] md:w-[148px]",
        containerClassName,
      )}
    >
      <Image
        src="/icons/logo.svg"
        alt="Logo"
        fill
        priority={priority}
        className={clsx("object-contain", className)}
        sizes="(max-width: 640px) 100px, (max-width: 768px) 120px, 148px"
      />
    </div>
  );
};
