import { Link } from "react-router-dom";
import { Reveal } from "../../Animations/Reveal";
import { SlideReveal } from "../../Animations/SlideReveal";
import Button1 from "../../Button/Button1";
import { SlideReveal2 } from "../../Animations/SlideReveal2";
import You from "./images/You4.jpg";

function Goal() {
  const titleClasses = `
    text-brand-blue
    text-[36px] md:text-[50px] lg:text-[50px] leading-none
    text-center
  `;

  return (
    <div className="h-full lg:h-screen bg-#FFFFFF flex flex-col lg:flex-row">
      {/* Left Column: Heading, Orange Line, Paragraph */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center max-w-[1440px] mx-auto">
        {/* Heading */}
        <Reveal>
          <div className=" pt-16">
            <h3 className={titleClasses}>A Website</h3>
            <h3 className="flex justify-center text-[24px] text-brand-blue-light font">
              You're
            </h3>

            <h3 className={titleClasses}>In Love With</h3>
          </div>
        </Reveal>
        {/* Orange Line */}
        <div className="mt-8 mb-12">
          <div className="bg-brand-orange self-center w-[58px] md:w-[116px] shrink-0 h-[6px]" />
        </div>

        {/* Paragraph */}
        <div className="px-4 tracking-wider pb-16">
          <SlideReveal>
            <p className="text-[18px] text-justify px-2 lg:px-16 mb-8 ">
              My goal is to design and build you a website that isn't just a
              digital footprint but a statement of pride, a testament to your
              story, and a platform that makes you say, "Damn, I'm frickin'
              proud of this!" <br />
              <br />
              This isn't just about bringing your vision to life; it's about
              elevating it to heights you never imagined, ensuring that every
              visitor leaves just as impressed and inspired as you are.
              <br />
              <br />
              All delivered to you in as little as 2 weeks!
            </p>
          </SlideReveal>
          <div className="flex justify-center ">
            <Link to="/contact">
              <Button1 label="LET'S DO IT" className="text-brand-blue" />
            </Link>
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
                src={You}
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

export default Goal;
