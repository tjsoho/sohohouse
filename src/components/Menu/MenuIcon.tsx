import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

export default function MenuIcon() {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: {
      opacity: 1,
      x: 0,
    },
    closed: {
      opacity: 0,
      x: "+90%",
    },
  };

  return (
    <div className=" relative">
      {/* The white menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
            className="absolute top-0 right-0 h-screen w-screen bg-brand-cream z-10"
          >
            <div className="flex flex-col justify-center items-center h-full w-full">
              <ul style={{ listStyle: "none", padding: 0 }}>
                <MenuItem text="Our Story" i={0} />
                <MenuItem text="Creations" i={1} />
                <MenuItem text="Ai Revolution" i={2} />
                <MenuItem text="Contact" i={3} />
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* The menu button */}
      <div className="relative z-20">
        <nav>
          <button
            className="text-brand-blue w-10 h-10 relative focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <div className="block absolute  ">
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  isOpen ? "rotate-45" : "-translate-y-1.5"
                }`}
              ></span>
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  isOpen ? "-rotate-45" : "translate-y-1.5"
                }`}
              ></span>
            </div>
          </button>
        </nav>
      </div>
    </div>
  );
}
