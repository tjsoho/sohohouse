import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Landing() {
  const [isAnimated, setIsAnimated] = useState(true);

  useEffect(() => {
    // Set a timeout to reverse the animation after 5 seconds
    const timeoutId = setTimeout(() => {
      setIsAnimated(false);
    }, 1500);

    // Clean up the timeout when the component is unmounted
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="w-full h-screen flex flex-col items-center bg-brand-blue">
      {/* Header Div */}
      <motion.div
        className="flex-1 flex flex-col justify-center items-center"
        initial={isAnimated ? { opacity: 0, scale: 0.3 } : { opacity: 1, scale: 1 }}
        animate={isAnimated ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
        transition={{
          duration: 2,
          ease: [0, 0.11, 0.2, 1.01],
        }}
      >
        <h1
          className="text-brand-orange xs:text-[90px]  md:text-[180px] lg:text-[220px] xl:text-[230px] 2xl:text-[230px]
   leading-none "
        >
          Ai
        </h1>
        <span className="text-brand-orange text-[60px] md:text-[88px] lg:text-[108px] xl:text-[112px] font-Black leading-none mt-[-18px] md:mt-[-28px] lg:mt-[-34px] align-left w-full">
          GUY
        </span>
      </motion.div>
    </div>
  );
}
