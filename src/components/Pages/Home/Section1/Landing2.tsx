import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Icon from "../../../Icons/Icon";
import { Link } from "react-router-dom";

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
   text-brand-orange text-[30px]  md:text-[60px] lg:text-[70px] 
   leading-[42px] md:leading-[65px] lg:leading-[80px] xl:leading-[90px] 2xl:leading-[110px] 
   text-center
   flex items-center
   `;
  const subClasses = `
   Sub-Title Styling
   text-brand-cream text-[20px] md:text-[28px] lg:text-[32px] xl:text-[35px] 2xl:text-[36px] font-Raleway font-thin leading-none md:leading-1 tracking-widest
   text-center 
   `;
  // const subClasses2 = `
  //  Sub-Title Styling
  //  text-brand-cream text-[20px] md:text-[28px] lg:text-[32px] xl:text-[35px] 2xl:text-[36px] font-Raleway font-thin leading-1 tracking-widest
  //  text-center
  //  `;

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("curious");
    if (nextSection) {
      window.scrollTo({
        top: nextSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

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
          {/* <h2 className={subClasses}>CREATING</h2> */}
          {/* <h2 className={headerClasses}>Creating Captivating Websites</h2> */}
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
          <h2 className={headerClasses}>
            Irresistible Websites{isSmallScreen && <br />} + Ai Solutions{" "}
          </h2>
        </motion.div>

        <motion.div
          className="flex flex-col justify-center items-center"
          initial={{ y: "-100vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 2.5,
            delay: 0.5,
            ease: [0, 0.41, 0.2, 1.01],
          }}
        >
          <div className="mt-2  md:hidden">
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
            {isSmallScreen && <br />}LET'S AMPLIFY YOUR BUSINESS
          </span>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="mt-12"
        >
          <Link
            to="/5-reasons-your-business-needs-a-blog"
            className="inline-block px-8 py-4 bg-brand-orange text-brand-cream rounded-full font-Black text-lg hover:bg-brand-orange-light transition-colors duration-300"
          >
            Read Latest: Why Your Business Needs a Blog
          </Link>
        </motion.div> */}
      </div>
      {/* <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
          delay: 2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div
          className="flex flex-col justify-center items-end animate-bounce pb-20 md:pb-8 hover:cursor-pointer"
          onClick={scrollToNextSection}
        >
          <div className="w-12 h-12 rounded-full border-2 border-brand-blue-light flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4L12 20M12 20L5 13M12 20L19 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-brand-blue-light"
              />
            </svg>
          </div>
        </div>
      </motion.div> */}
    </div>
  );
}
