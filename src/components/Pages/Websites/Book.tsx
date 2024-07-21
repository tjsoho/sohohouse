
import { Reveal } from "../../Animations/Reveal";
import { SlideReveal } from "../../Animations/SlideReveal";
import Button1 from "../../Button/Button1";
import { SlideReveal2 } from "../../Animations/SlideReveal2";

import mob from "./images/calMob.png";
import shh from "./images/Shh.jpg";

function Book() {
  const titleClasses = `
    text-brand-blue
    text-[36px] md:text-[50px] lg:text-[50px] leading-none
    text-center leading-[45px] md:leading-[60px]
  `;

  const externalLink = "https://calendly.com/toby-ai-guy/30min";
  

  return (
    <div className="h-full lg:h-screen bg-#FFFFFF flex flex-col lg:flex-row">
      {/* Left Column: Heading, Orange Line, Paragraph */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center max-w-[1440px] mx-auto order-2">
        {/* Heading */}
        <Reveal>
          <div className=" pt-16">
            <h3 className={titleClasses}>Free Design </h3>
            {/* <h3 className="flex justify-center text-[24px] text-brand-blue-light font">
              You're
            </h3> */}

            <h3 className={titleClasses}>Consultation</h3>
          </div>
        </Reveal>
        {/* Orange Line */}
        {/* <div className="mt-8 mb-12">
          <div className="bg-brand-orange self-center w-[58px] md:w-[116px] shrink-0 h-[6px]" />
        </div> */}

        {/* Paragraph */}
        <div className="px-4 tracking-wider pb-16 ">
          <SlideReveal>
            <img
              src={mob}
              alt="The Ai Guy"
              className="w-full h-full object-cover my-8"
            />
          </SlideReveal>
          <div className="flex justify-center ">
            <a href={externalLink} target="_blank" rel="noreferrer">
              <Button1 label="BOOK NOW" className="text-brand-blue" />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full h-screen lg:w-1/2 flex flex-col items-center justify-center">
        {/* Parent div with background image */}
        <SlideReveal2>
          <div className="w-full h-screen lg:w-full xl:w-full">
            <a href={externalLink} target="_blank" rel="noreferrer">
              {" "}
              {/* Wrap the image with Link and specify the target route */}
              <img
                src={shh}
                alt="The Ai Guy"
                className="w-full h-full object-cover "
                // Adjusted scale for normal and hover states
              />
            </a>
          </div>
        </SlideReveal2>
      </div>
    </div>
  );
}

export default Book;
