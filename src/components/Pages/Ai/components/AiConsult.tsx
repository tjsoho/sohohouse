import { Link } from "react-router-dom";
import aiPhone from "../images/aiPhone2.png";
import { Reveal } from "../../../Animations/Reveal";
import { SlideReveal } from "../../../Animations/SlideReveal";
import { SlideReveal2 } from "../../../Animations/SlideReveal2";
import Button1 from "../../../Button/Button1";
import shh from "../../Websites/images/Shh.jpg";

function AiConsult() {
  const titleClasses = `
    text-brand-blue
    text-[36px] md:text-[50px] lg:text-[50px] leading-none
    text-center leading-[45px] md:leading-[60px]
  `;

  const externalLink ="https://calendly.com/sloane-bookings/1-1-consultation-ai-guy"

  return (
    <div className="h-full lg:h-screen bg-#FFFFFF flex flex-col lg:flex-row">
      {/* Left Column: Heading, Orange Line, Paragraph */}
      <div className="w-full h-full lg:w-1/2 flex flex-col  items-center max-w-[1440px] my-16">
        {/* Heading */}
        <Reveal>
          <div className="lg:pt-16 lg:h-1/3">
            <h3 className={titleClasses}>Book Your Ai </h3>

            <h3 className={titleClasses}>Strategy Session</h3>
            <p className="text-center text-brand-orange text-[18px] my-4">
              INVESTMENT $290
            </p>
          </div>
        </Reveal>
        <div className="h-1/3 flex flex-col  items-center">
        
          <img
            src={aiPhone}
            alt="Ai Guy"
            className="object-contain lg:h-[120%] lg:my-8"
          />
          
          <div>
          <a href={externalLink} target="_blank" rel="noopener noreferrer">
          <Button1 label="BOOK NOW" className="text-brand-blue" />
          </a>
          </div>
        </div>
        
        
      </div>

      <div className="w-full h-screen lg:w-1/2 flex flex-col items-center justify-center">
        {/* Parent div with background image */}
        <SlideReveal2>
          <div className="w-full h-screen lg:w-full xl:w-full">
            <Link to="/your-target-route">
              {" "}
              {/* Wrap the image with Link and specify the target route */}
              <img
                src={shh}
                alt="The Ai Guy"
                className="w-full h-full object-cover "
                // Adjusted scale for normal and hover states
              />
            </Link>
          </div>
        </SlideReveal2>
      </div>
    </div>
  );
}

export default AiConsult;
