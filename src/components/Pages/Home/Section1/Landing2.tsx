import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Icon from "../../../Icons/Icon";

export default function Landing2() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640); // 640px is Tailwind's 'sm' breakpoint
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const headerClasses = `
   Title Styling
   text-brand-orange text-[32px]  md:text-[60px] lg:text-[70px] 
   leading-[42px] md:leading-[65px] lg:leading-[80px] xl:leading-[90px] 2xl:leading-[110px] 
   text-center
   `;
  const subClasses = `
   Sub-Title Styling
   text-brand-cream text-[20px] md:text-[28px] lg:text-[32px] xl:text-[35px] 2xl:text-[35px] font-Raleway font-thin leading-1 tracking-widest
   text-center
   `;
  return (
    <div className="w-full h-screen flex flex-col items-center bg-brand-blue">
      <div className="flex-1 flex flex-col justify-center items-center">
        <motion.div
          className="flex flex-col justify-center items-center"
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 2.5,

            ease: [0, 0.41, 0.2, 1.01],
          }}
        >
          <h2 className={headerClasses}>Designing the Story</h2>
        </motion.div>
        <motion.div
          className="flex flex-col justify-center items-center"
          initial={{ x: "+100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 2.5,
            delay: 0.5,
            ease: [0, 0.41, 0.2, 1.01],
          }}
        >
          <h2 className={headerClasses}>You Want to Tell</h2>
        </motion.div>
       
       <motion.div
       className="flex flex-col justify-center items-center"
       initial={{ y: "-100vh", opacity: 0 }}
       animate={{ y: 0, opacity: 1 }}
       transition={{
         duration: 2.5,
         delay: 0.5,
         ease: [0, 0.41, 0.2, 1.01],
       }}>
        <div className="mt-2 mb-4 md:hidden">
          <Icon name="xsmallLine" />
        </div>
        </motion.div>
        <motion.div
          className="flex flex-col justify-center items-center"
          initial={{ y: "+100vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 2.5,
            delay: 0.5,
            ease: [0, 0.41, 0.2, 1.01],
          }}
        >
          <span className={subClasses}>
            BEAUTIFUL WEBSITES +{isSmallScreen && <br />} Ai BUSINESS COMPANIONS
          </span>
        </motion.div>
      </div>
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
          <Icon name="arrowDown" />
        </div>
      </motion.div>
    </div>
  );
}
