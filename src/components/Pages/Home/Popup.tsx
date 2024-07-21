import React, { useState, useEffect } from 'react';
import image9 from '../About/Hero/images/1.jpg';
import image10 from '../About/Hero/images/4.jpg';
import image11 from '../About/Hero/images/3.jpg';
import image12 from '../About/Hero/images/5.jpg';
import image13 from '../About/Hero/images/2.jpg';
import Button1 from '../../Button/Button1';

type PopupProps = {
  onClose: () => void;
};

const images = [
  image9,
  image10,
  image11,
  image12,
  image13,
];

const Popup: React.FC<PopupProps> = ({ onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, 800); // Change image every 800ms

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
      <style>
        {`
          @keyframes scale-up {
            from {
              transform: scale(0.5);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }
          .scale-up {
            animation: scale-up 0.5s ease-out forwards;
          }
        `}
      </style>
      <div
        className="relative bg-white md:p-6 rounded shadow-lg max-w-3xl w-full mx-4 overflow-y-auto max-h-full scale-up"
      >
        <button
          onClick={onClose}
          className="absolute top-0 right-3 text-brand-orange text-6xl md:text-3xl"
        >
          &times;
        </button>
        <div className="flex flex-col md:flex-row h-full justify-center items-center">
          <div className="md:w-1/2">
            <img
              src={images[currentIndex]}
              alt="Popup"
              className="w-full h-[300px] md:h-full object-cover rounded-t md:rounded-l md:rounded-t-none"
            />
          </div>
          <div className="w-full md:w-1/2 h-contain p-4 text-center justify-center items-center text-brand-blue">
            <h2 className="text-3xl md:text-4xl font-bold">Do You Need Ai?</h2>
            <div className="w-full justify-center py-1 flex md:hidden ">
              <div className="w-1/4 border-t-2 border-brand-orange my-4"></div>
            </div>
            <h3 className="text-xl font-semibold my-2">Take the quiz and find out!</h3>
            <div className="w-full justify-center py-1 hidden md:flex ">
              <div className="w-1/4 border-t-2 border-brand-orange my-4"></div>
            </div>
            <p className="text-base mb-4 hidden md:block">
              With so many options available, it can be hard to know if Ai is right for you. Take our quiz to find out if your business needs Ai.
            </p>
            <div className='w-full flex justify-center'>
              <a href="https://dhjtakiq5zh.typeform.com/to/rYJweVj4" target="_blank" rel="noopener noreferrer">
                <Button1
                  label="TAKE THE QUIZ"
                  className="text-brand-blue my-8"
                  color="light"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
