"use client";

import { motion } from "framer-motion";
import {
  advantageCardVariants,
  descVariants,
  idVariants,
  titleVariants,
} from "@/constants/animations";
import type { AdvantageCardProps } from "./advantages.types";

export const AdvantageCard = ({ advantage }: AdvantageCardProps) => {
  return (
    <motion.article
      className="flex h-full cursor-grab flex-col rounded-[10px] px-6 py-9.5 md:px-[29px] md:py-15.5"
      variants={advantageCardVariants}
      initial="static"
      whileHover="active"
      transition={{ duration: 0.3 }}
    >
      <motion.b
        variants={idVariants}
        className="font-poppins mb-[25px] block text-5xl/6 md:text-[58px]/7.5"
      >
        {advantage.id}
      </motion.b>
      <motion.h3
        variants={titleVariants}
        className="mb-2.5 text-xl/tight md:text-2xl/[29px]"
      >
        {advantage.title}
      </motion.h3>
      <motion.p
        variants={descVariants}
        className="font-roboto text-base/tight font-normal md:text-lg/[23px]"
      >
        {advantage.description}
      </motion.p>
    </motion.article>
  );
};
