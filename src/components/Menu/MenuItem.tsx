import * as React from "react";
import { motion } from "framer-motion";

interface MenuItemProps {
  text: string;
  i: number;
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

export const MenuItem: React.FC<MenuItemProps> = ({ text, i }) => {
  return (
    <motion.li
      initial="closed"
      animate="open"
      variants={variants}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="text-6xl text-center pl-5 cursor-pointer font-Black my-12">
        {text}
      </div>
    </motion.li>
  );
};