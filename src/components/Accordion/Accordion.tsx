import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    text-[28px] font-medium font-Black text-brand-cream 
    ${isOpen ? "text-brand-orange underline" : ""}
    hover:text-brand-camel active:text-brand-orange flex justify-between items-center text-left uppercase
  `;

  const rotation = isOpen ? 180 : 0;

  return (
    <div className="flex flex-col justify-between w-1/2 px-16 my-2">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        initial={false}
        animate={{ backgroundColor: isOpen ? "" : "" }}
        className={getAccordionClasses()} // Apply Tailwind CSS classes for title styling
      >
        <div className="flex">{title}</div>
        <div className="flex flex-col items-end">
          <Icon
            name="arrowDown"
            className="w-4 h-4 ml-8"
            rotation={rotation}
          />
        </div>
      </motion.button>
      <motion.div
        className="text-base p-4 font-Raleway text-brand-cream text-left w-[600px]" // Apply Tailwind CSS classes for content styling
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
