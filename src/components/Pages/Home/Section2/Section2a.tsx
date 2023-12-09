import { motion } from "framer-motion";
import Icon from "../../../Icons/Icon";
import HouseAnimation from "./houseAnimation";
import { Link } from "react-router-dom";

function Section2a() {
  const titleClasses = `
    text-brand-blue
    text-[40px] md:text-[50px] lg:text-[70px]
    leading-none
    text-center
  `;

  return (
    <div className="h-contain bg-brand-cream flex flex-col md:flex-row py-8">
      {/* Left Column: Heading, Orange Line, Paragraph */}
      <div className="w-full md:w-1/2 flex flex-col items-center">
        {/* Heading */}
        <div className="pt-16">
          <h3 className={titleClasses}>Your Brand.</h3>
          <h3 className="text-brand-blue text-center text-[42px] md:text-[52px] lg:text-[73px] my-2 leading-none">
            Your Story.
          </h3>
          <h3 className={titleClasses}>Your Home.</h3>
        </div>

        {/* Orange Line */}
        <div className="mt-8 mb-12">
          <div className="bg-brand-orange self-center w-[58px] md:w-[116px] shrink-0 h-[6px]" />
        </div>

        {/* Paragraph */}
        <div className="px-4 tracking-wider">
          <p className="text-[18px] text-center lg:px-16 md:mb-8 ">
            Welcome to your new online home, <br /> where your business isn't
            just a reflection of who you are, <br /> it's a story that deserves
            to be shared with the world.
          </p>
        </div>
      </div>

      {/* Right Column: House Animation and Start Now */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
        {/* House Animation */}
        <div className="pb-6 mt-8 mb-4">
          <HouseAnimation />
        </div>

        {/* Start Now */}
        <Link to="/contactform">
          <div className="px-20 flex items-center justify-end">
            <Icon name="arrowCamel" />
            <motion.div
              className="text-brand-camel pt-1"
              initial={{ x: "+10vw" }}
              animate={{ x: ["-8px", "10px", "-8px"] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <button className="font-Black leading-none text-2xl lg:text-3xl lg:pr-8 w-full">
                <span className="pl-2 pt-8">START NOW</span>
              </button>
            </motion.div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Section2a;
