import { motion } from "framer-motion";
import Icon from "../../../../Icons/Icon";
import { Variants } from "framer-motion";

interface SquareTitleProps {
  title: string;
  titleColour: string;
  icon?: string;
  onIconClick?: () => void;
  isExpanded: boolean;
}

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

function SquareTitle({
  title,
  titleColour,
  isExpanded,
  onIconClick,
}: SquareTitleProps) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center cursor-pointer p-8">
      <div
        className="flex flex-col justify-center items-center"
        onClick={onIconClick}
      >
        <h6 className={`${titleColour} font-Black text-3xl`}>{title}</h6>
        <motion.div variants={labelVariants} animate="animate">
          <Icon className="w-5" name={isExpanded ? "minus" : "plus"} />
        </motion.div>
      </div>
    </div>
  );
}

export default SquareTitle;
