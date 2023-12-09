import * as React from "react";
import { motion } from "framer-motion";

interface MenuItemProps {
  text: string;
  i: number;
  onClick: () => void;
  isCurrentPage: boolean;
}

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 2000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export const MenuItem: React.FC<MenuItemProps> = ({ text, i, onClick, isCurrentPage }) => {
  return (
    <motion.li
      initial="closed"
      animate="open"
      variants={variants}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className={`text-3xl lg:text-6xl cursor-pointer my-12 origin-left w-contain text-center ${
        isCurrentPage ? "text-brand-cream" : "text-brand-camel hover:text-brand-orange active:text-brand-cream"
      }`}
        onClick={onClick}>
        {text}
      </div>
    </motion.li>
  );
};