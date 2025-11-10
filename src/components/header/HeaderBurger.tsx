import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navBtnVariants } from "@/shared/animations";
import type { HeaderBurgerProps } from "@/shared/types/navigation.types";

export const HeaderBurger = ({ isOpen, onClick }: HeaderBurgerProps) => {
  return (
    <motion.button
      variants={navBtnVariants}
      initial="hidden"
      whileInView="visible"
      exit="hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="z-30 cursor-pointer rounded-sm bg-white p-0.5 text-black outline-0 focus-visible:bg-white/80 sm:p-1 lg:hidden"
      onClick={onClick}
      aria-label="Burger menu"
    >
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </motion.div>
    </motion.button>
  );
};
