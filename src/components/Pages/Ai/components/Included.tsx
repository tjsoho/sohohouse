import React from "react";
import { SlideReveal } from "../../../Animations/SlideReveal";
import tablet from "../images/iPad.png";


const Included: React.FC = () => {

  
  return (
<div className="max-w-[1440px] mx-auto">
    <div className="w-full h-full flex flex-col lg:flex-row justify-center items-center bg-brand-blue py-16 lg:py-32">
      {/* Slider and Button Container */}
          
     {/* 3 cols */}
      <div className="h-full w-full lg:w-1/3">
      <SlideReveal>
            <p className="text-brand-orange px-4 text-[22px] md:text-[26px] text-left font-Black mb-4">Marketing Mastery</p>
            </SlideReveal>
            <SlideReveal>
            <p className="text-brand-cream px-4 text-[18px] md:text-[20px] text-justify">
            With The AI Hub, you're getting more than just tips and tricks; you’re getting a custom playbook. 
              <br />
              <br /> Imagine having content that speaks directly to your audience, marketing strategies that actually stick, and campaigns that turn heads and open wallets.
            
            </p>
          </SlideReveal>
      </div>
      <div className="h-full w-full lg:w-1/3">
        <img src={tablet} alt="The Ai Guy" className="transform scale-100 lg:scale-110" />
      </div>
      <div className="h-full w-full lg:w-1/3">
      <SlideReveal>
            <p className="text-brand-orange px-4 text-[22px] md:text-[26px] text-left font-Black mb-4">Strategic Business Guidance</p>
            </SlideReveal>
            <SlideReveal>
            <p className="text-brand-cream px-4 text-[18px] md:text-[20px] text-justify">
            Beyond the buzzwords and fluff, The AI Hub acts as your strategic sidekick.
              <br />
              <br /> From spitballing your next big move to untangling the knottiest business challenges, consider it your in-house guru for growth, innovation, and problem-solving.
            
            </p>
          </SlideReveal>
      </div>
      
    </div>
    </div>
  );
};

export default Included;
