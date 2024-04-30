import { motion } from 'framer-motion';
import { Variants } from 'framer-motion';

// Define the animation variants
const labelVariants: Variants = {
  animate: {
    scale: [1, 1.2, 1],
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 2,
    },
  },
};

interface ButtonProps {
    label: string;
    onClick?: () => void;
    link?: string;   
}

const buttonClasses = `
  Button Class 
  px-6 py-3
  bg-brand-orange
  text-brand-cream hover:text-brand-camel  active:underline text-3xl leading-none
  font-Black
  w-[250px]
  h-[75px]
  items-center
  rounded
  mt-16 lg:mt-0
`;

function Button({ label, onClick, link }: ButtonProps) {
  return (
    <button className={buttonClasses} onClick={onClick}>
      <motion.div variants={labelVariants} animate="animate">
        {label}
      </motion.div>
    </button>
  );
}

export default Button;
