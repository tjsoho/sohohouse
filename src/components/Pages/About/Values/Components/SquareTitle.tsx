import { motion, Variants } from "framer-motion";
import Icon from "../../../../Icons/Icon";

interface SquareTitleProps {
  title: string;
  titleColour: string;
  isExpanded: boolean;
  onIconClick?: () => void;
}

function SquareTitle({
  title,
  titleColour,
  isExpanded,
  onIconClick,
}: SquareTitleProps) {
  // Define the style variants
  const variants = {
    expanded: {
      paddingTop: '2rem', // equivalent to Tailwind's p-8
      paddingBottom: '2rem',
      paddingLeft: '2rem',
      paddingRight: '2rem',
      transition: { duration: 0.5 }
    },
    collapsed: {
      paddingTop: '8rem', // equivalent to Tailwind's pt-32
      paddingBottom: '0',
      paddingLeft: '0',
      paddingRight: '0',
      transition: { duration: 0.5 }
    }
  };

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

  return (
    <motion.div 
      className="w-full h-full flex flex-col justify-center items-center cursor-pointer"
      variants={variants}
      animate={isExpanded ? "expanded" : "collapsed"}
    >
      <div className="flex flex-col justify-center items-center" onClick={onIconClick}>
        <h6 className={`${titleColour} font-Black text-3xl`}>{title}</h6>
        <motion.div variants={labelVariants} animate="animate">
          <Icon className="w-5" name={isExpanded ? "minus" : "plus"} />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default SquareTitle;



