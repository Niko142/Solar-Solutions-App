"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { OfferingCardProps } from "@/types/offerings.types";

export const OfferingCard = ({ card }: OfferingCardProps) => {
  return (
    <motion.article
      whileHover={{
        scale: 1.05,
        y: -5,
        boxShadow: "var(--box-shadow)",
      }}
      transition={{ duration: 0.35 }}
      className="flex cursor-pointer flex-col rounded-[10px] bg-gray-100 px-[19px] py-[31px]"
    >
      <Link href={card.href}>
        {/* Icon */}
        <Image
          src={card.src}
          width={50}
          height={50}
          alt={card.alt}
          className="mb-2.5 aspect-square h-10 w-10 sm:h-12.5 sm:w-12.5"
        />

        {/* Content */}
        <h3 className="mb-[5px] text-xl/snug text-gray-600 sm:text-2xl/[39px]">
          {card.title}
        </h3>
        <p className="font-roboto text-base/tight font-normal text-gray-400 sm:max-w-[300px] sm:text-lg/[25px]">
          {card.description}
        </p>
      </Link>
    </motion.article>
  );
};
