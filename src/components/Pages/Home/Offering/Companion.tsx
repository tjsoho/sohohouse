import { Reveal } from "../../../Animations/Reveal";
import { Link } from "react-router-dom";
import { SlideReveal } from "../../../Animations/SlideReveal";
import Button1 from "../../../Button/Button1";

function Companion() {
  return (
    <div className="w-full h-full bg-brand-cream">
      <div className="w-full h-full white rounded-tl-[75px] md:rounded-bl-[150px] md:rounded-tl-[150px]   bg-brand-blue-light">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-around items-center pt-16">
            <div className="flex flex-col justify-center items-center h-full w-full lg:w-1/2">
              <SlideReveal>
                <div className="w-full h-auto lg:w-full xl:w-full order-2 ">
                  <Link to="/ai-solutions">
                    {" "}
                    {/* Wrap the image with Link and specify the target route */}
                    <img
                      src="/images/aiGuyai.png"
                      alt="The Ai Guy"
                      className="w-full h-auto lg:w-full xl:w-full px-16"
                      // Added transform utilities for scaling on hover and smooth transition
                    />
                  </Link>
                </div>
              </SlideReveal>
            </div>
            <div className="flex flex-col justify-center items-center h-full w-full lg:w-1/2 order- lg:order-2">
              <Reveal>
                <div>
                  <h3 className="text-brand-orange-light text-[36px] md:text-[50px] lg:text-[50px] text-center leading-none">
                    Ai Consulting
                  </h3>

            
                </div>
              </Reveal>
              <div className="text-justify text-brand-cream px-8 lg:px-16 pt-4 ">
                <p className="text-[18px] md:text-[20px]">
                The world of AI is new, fast, and let's be honest ... a little overwhelming. I'm here to simplify it for you. My secret power lies in my ability to assess your business needs and implement the best AI solutions to help you grow.
                </p>
              </div>
              <Link to="/ai-solutions">
                <Button1
                  label="TELL ME MORE"
                  className="text-brand-blue my-8"
                  color="light"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Companion;
