import React, { useState } from "react";
import { motion } from "framer-motion";
import testimonials from "./testimonialData"; // Ensure the correct path
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Card = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevState) => (prevState + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevState) => (prevState - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div>
      <div className="relative flex justify-center items-center p-4 lg:p-8">
        <motion.div
          key={testimonials[currentIndex].id}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-[600px] p-4 flex flex-col items-center bg-white rounded-lg shadow-lg"
        >
          <div>
            <img src="../../../../images/bi_quote.svg" alt="testimonial" className=""/>
          </div>
          <p className="text-sm md:text-lg p-2 lg:p-8">
            {testimonials[currentIndex].comment}
          </p>
            <div className="w-full lg:w-4/5 h-px bg-gray-300 my-4 "></div>
          
          <div className="flex justify-center items-center">
            <img
              src={testimonials[currentIndex].profileImage}
              alt="icon"
              className="w-20 h-20 object-cover mr-4"
            />
            <p className="font-Black">{testimonials[currentIndex].name}</p>
          </div>
        </motion.div>
        <button
          onClick={handlePrev}
          className="absolute left-0 -ml-4 top-1/2 transform -translate-y-1/2 text-brand-orange-light"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 -mr-4 top-1/2 transform -translate-y-1/2 text-brand-orange-light"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Pagination Indicators */}
      <div className="flex justify-center mt-4">
        {testimonials.map((item, index) => (
          <span
            key={item.id}
            className={`mx-1 h-2 w-2 bg-white  ${
              index === currentIndex ? "bg-opacity-100" : "bg-opacity-50"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Card;
