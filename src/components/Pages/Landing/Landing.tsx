import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Landing() {
  const [isAnimated, setIsAnimated] = useState(true);

  useEffect(() => {
    // Set a timeout to reverse the animation after 5 seconds
    const timeoutId = setTimeout(() => {
      setIsAnimated(false);
    }, 4000);

    // Clean up the timeout when the component is unmounted
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="w-full h-screen flex flex-col items-center bg-brand-blue">
      {/* Header Div */}
      <motion.div
        className="flex-1 flex flex-col justify-center items-center"
        initial={isAnimated ? { opacity: 0, scale: 0.1 } : { opacity: 1, scale: 0.9 }}
        animate={isAnimated ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.1 }}
        transition={{
          duration: 2.5,
          ease: [0, 0.11, 0.2, 1.01],
        }}
      >
        <h1 className="text-brand-orange text-[222px] leading-none">
          SoHo
        </h1>
        <span className="text-brand-camel text-[42px] font-Raleway font-light leading-none tracking-widest">
          CREATIVE HOUSE
        </span>
      </motion.div>
    </div>
  );
}
