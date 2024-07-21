import { Link } from "react-router-dom";
import { SlideReveal } from "../../../Animations/SlideReveal";
import Button1 from "../../../Button/Button1";
import phone from "../images/aiPhone.png";


const Included: React.FC = () => {

    const externalLink =
      "https://calendly.com/sloane-bookings/1-1-consultation-ai-guy";
  return (
    <div className="w-full h-full bg-brand-orange">
      <div className="w-full h-contain white  md:rounded-tr-[150px]  bg-brand-cream">
        <div className="max-w-[1440px] mx-auto h-full">
          <div className="h-full flex flex-col lg:flex-row py-16 md:py-32 lg:py-24 px-4 md:p-8 items-center">
            <div className="h-2/5 lg:h-full w-full lg:w-1/2 flex flex-col justify-center items-center text-left md:text-center mb-16 lg:pr-16 -ml-12">
              <img src="/images/aiOffering4.png" alt="The Ai Guy" />
            </div>

            <div className=" h-3/5 lg:h-full w-full lg:w-1/2 flex flex-col justify-center items-start">
              <SlideReveal>
                <p className="text-brand-orange text-[22px] md:text-[26px] text-left font-Black  mb-4">
                  Setting Up For Success
                </p>
              </SlideReveal>
              <SlideReveal>
                <p className="text-brand-blue text-[18px] md:text-[20px] text-justify">
                From automation to chatbots, tailored AI platforms, and image generation, we'll explore various advanced options together.<br></br><br></br> We'll identify which tools or combinations best fit your business needs and objectives. I'm here to ensure that these solutions seamlessly integrate into your daily operations, making your business run smoother than ever.<br></br><br></br> With my guidance, adopting these cutting-edge technologies will feel effortless, empowering you to focus on what truly matters—growing your with confidence.
                </p>
              </SlideReveal>
              <div className="flex items-start w-full my-8">
                <a
                  href={externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button1 label="BOOK NOW" color="blue" className="text-brand-orange hover:text-brand-cream" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Included;
