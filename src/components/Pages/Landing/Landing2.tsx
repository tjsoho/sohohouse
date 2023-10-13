import { motion } from "framer-motion";
import Icon from "../../Icons/Icon";

export default function Landing2() {
  return (
    <div className="w-full h-screen flex flex-col items-center bg-brand-blue">
      <div className="flex-1 flex flex-col justify-center items-center">
        <motion.div
          className="flex flex-col justify-center items-center"
          initial={{ x: '-100vw', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 2.5,
            delay: 0.5,
            ease: [0, 0.41, 0.2, 1.01]
          }}
        >
          <h2 className="text-brand-orange text-[90px] leading-[100px] text-center">
            Designing the Story 
          </h2>
          {/* <h2 className="text-brand-orange text-[90px] leading-[100px] text-center">
            You Want to Tell
          </h2>
          <span className="text-brand-cream text-[36px] font-Raleway font-thin leading-none tracking-widest">
            HIGH-END WEBSITES AT START-UP PRICES
          </span> */}
        </motion.div>
        <motion.div
          className="flex flex-col justify-center items-center"
          initial={{ x: '+100vw', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 2.5,
            delay: 0.5,
            ease: [0, 0.41, 0.2, 1.01]
          }}
        >
          {/* <h2 className="text-brand-orange text-[90px] leading-[100px] text-center">
            Designing the Story 
          </h2> */}
          <h2 className="text-brand-orange text-[90px] leading-[100px] text-center">
            You Want to Tell
          </h2>
          {/* <span className="text-brand-cream text-[36px] font-Raleway font-thin leading-none tracking-widest">
            HIGH-END WEBSITES AT START-UP PRICES
          </span> */}
        </motion.div>
        <motion.div
          className="flex flex-col justify-center items-center"
          initial={{ y: '+100vh', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 2.5,
            delay: 0.5,
            ease: [0, 0.41, 0.2, 1.01]
          }}
        >
          {/* <h2 className="text-brand-orange text-[90px] leading-[100px] text-center">
            Designing the Story 
          </h2>
          <h2 className="text-brand-orange text-[90px] leading-[100px] text-center">
            You Want to Tell
          </h2> */}
          <span className="text-brand-cream text-[36px] font-Raleway font-thin leading-none tracking-widest">
            HIGH-END WEBSITES AT START-UP PRICES
          </span>
        </motion.div>
      </div>
      <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.5,
              delay: 3,
              ease: [0, 0.71, 0.2, 1.01]
            }}
        >
      <div className="flex flex-col justify-center items-end animate-bounce pb-4">
        <Icon name="arrowDown" />
      </div>
      </motion.div>
    </div>
  );
}
