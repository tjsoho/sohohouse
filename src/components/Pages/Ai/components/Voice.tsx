import { Link } from "react-router-dom";
import { SlideReveal } from "../../../Animations/SlideReveal";
import Button1 from "../../../Button/Button1";
import phone from "../images/aiPhone.png";

function Voice() {
  const externalLink =
    "https://calendly.com/sloane-bookings/1-1-consultation-ai-guy";

  return (
    <div className="w-full h-full bg-brand-orange">
      <div className="w-full h-contain white  md:rounded-tr-[150px] rounded-br-[75px] md:rounded-br-[150px] bg-brand-blue">
        <div className="max-w-[1440px] mx-auto h-full">
          <div className="h-full flex flex-col lg:flex-row py-16 md:py-32 lg:py-24 px-4 md:p-8 items-center">
            <div className="h-2/5 lg:h-full w-full lg:w-1/2 flex flex-col justify-center items-center text-left md:text-center mb-16 lg:pr-16">
              <img src="/images/aiGraphic.png" alt="The Ai Guy" />
            </div>

            <div className=" h-3/5 lg:h-full w-full lg:w-1/2 flex flex-col justify-center items-start">
              <SlideReveal>
                <p className="text-brand-orange text-[22px] md:text-[26px] text-left font-Black  mb-4">
                  Setting Up For Success
                </p>
              </SlideReveal>
              <SlideReveal>
                <p className="text-brand-orange-light text-[18px] md:text-[20px] text-justify">
                Assessing your business needs and aspirations is at the core of my AI consulting offering. I delve deep into understanding your goals, struggles, and areas for improvement.<br></br><br></br> By thoroughly exploring your past experiences learning about your goals, and assessing your current knowledge of the AI landscape, I create a clear path for transformation.<br></br><br></br> Think of it as having a personalised business concierge who understands your unique challenges and is dedicated to helping you overcome them. The investment of 60 minute strategy session $290 and is often the only session you'll need.
                </p>
              </SlideReveal>
              <div className="flex items-start w-full my-8">
                <a
                  href={externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button1 label="BOOK NOW" className="text-[#4EA292]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Voice;
