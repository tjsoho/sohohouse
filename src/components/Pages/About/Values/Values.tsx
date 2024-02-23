import { useState } from "react";
import { motion } from "framer-motion";
import { valueContent } from "./Components/Data";
import SquareContent from "./Components/SquareContent";
import SquareTitle from "./Components/SquareTitle";
import { Reveal } from "../../../Animations/Reveal";

function Values() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleExpansion = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const getBgColor = (index: number) =>
    index % 2 === 0 ? "bg-brand-camel" : "bg-brand-beige";

  return (
    <div className="w-full h-contain bg-brand-cream flex flex-col justify-center items-center">
      <Reveal>
        <div>
          <h3 className="text-brand-blue my-16">Our Values</h3>
        </div>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-full ">
        {valueContent.map((content, index) => (
          <div key={index} className="col-span-1">
            <motion.div
              className={`flex flex-col ${getBgColor(index)}`}
              animate={{ minHeight: expandedCard === index ? "auto" : "300px" }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: expandedCard === index ? 0.2 : 0,
              }}
            >
              <SquareTitle
                title={content.title}
                titleColour="text-brand-blue"
                isExpanded={expandedCard === index}
                onIconClick={() => toggleExpansion(index)}
              />
            </motion.div>
            <motion.div
              className="flex flex-col h-full bg-brand-blue overflow-hidden shadow-[0_-5px_60px_-15px_rgba(0,0,0,0.3)]"
              initial={{ height: 0 }}
              animate={{ height: expandedCard === index ? "auto" : 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: expandedCard === index ? 0.2 : 0,
              }}
              layout
            >
              <SquareContent content={content.content} />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Values;
