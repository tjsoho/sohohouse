import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Icon from "../Icons/Icon";

interface AccordionProps {
  title: string;
  content: string;
}

export function Accordion({ title, content }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentHeight);
      setOpacity(1);
    } else {
      setHeight(0);
      setOpacity(0);
    }
  }, [isOpen, contentHeight]);

  const getAccordionClasses = () => `
    Accordion Class
    text-[20px] md:text-[28px] font-medium font-Black text-brand-cream 
    ${isOpen ? "text-brand-orange underline" : ""}
    hover:text-brand-orange-light active:text-brand-orange flex justify-between items-center text-left uppercase
  `;

  return (
    <div className="flex flex-col justify-between w-full lg:w-1/2 px-8 md:px-16 my-2">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        initial={false}
        animate={{ backgroundColor: isOpen ? "" : "" }}
        className={getAccordionClasses()} // Apply Tailwind CSS classes for title styling
      >
        <div className="flex">{title}</div>

        <div className="w-12 h-12 rounded-full border-2 border-brand-blue-light flex items-center justify-center">
          <motion.svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <path
              d="M12 4L12 20M12 20L5 13M12 20L19 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-brand-blue-light"
            />
          </motion.svg>
        </div>
      </motion.button>

      <motion.div
        className="text-base p-4 font-Raleway text-brand-cream text-left w-contain flex-wrap text-[18px] mb-4" // Apply Tailwind CSS classes for content styling
      >
        <motion.div
          ref={contentRef}
          animate={{
            opacity,
            height,
          }}
          transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
        >
          {content}
        </motion.div>
      </motion.div>
    </div>
  );
}
