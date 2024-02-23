import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Icon from "../../../Icons/Icon";

function Master() {
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMediumScreen(window.innerWidth < 768); // 640px is Tailwind's 'sm' breakpoint
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto">
    <div className="bg-brand-camel w-full h-full pt-12 md:pt-16 lg:pt-20">
      <div className="lg:w-contain">
        <h3 className=" font-Black text-brand-cream leading-none text-center text-[36px] lg:text-7xl  ">
          Become An Ai {isMediumScreen && <br />}
          Master
        </h3>
      </div>
      <div>
        <p className="uppercase text-brand-blue italic text-center text-2xl md:text-3xl mt-8 md:mt-0 leading-none font-medium lg:font-normal">
          Your Ai Journey {isMediumScreen && <br />}Starts Right Here!
        </p>
        <div className="flex justify-center mt-12">
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
          delay: 2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="flex flex-col justify-center items-end animate-bounce pb-20 md:pb-8">
          <Icon name="arrowDown" color="#FFE9E2"/>
        </div>
      </motion.div>
        </div>
      </div>
      </div>
  
    </div>
  );
}

export default Master;
