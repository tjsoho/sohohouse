
import graphic from "../images/graphic.png";
import { SlideReveal } from "../../../Animations/SlideReveal";
import Button1 from "../../../Button/Button1";
import { Link } from "react-router-dom";

function Graphic() {
  const externalLink ="https://calendly.com/sloane-bookings/1-1-consultation-ai-guy"
  return (
    <div className="w-full h-full bg-brand-orange">
    <div className="w-full h-full white rounded-bl-[75px] md:rounded-bl-[0px] md:rounded-br-[150px]  md:rounded-tr-[150px] bg-brand-orange">
    <div className="max-w-[1440px] mx-auto h-contain">
      <div className="w-full h-contain flex flex-col lg:flex-row bg-brand-orange justify-around items-center py-16 lg:py-32">
        <div className="flex flex-col justify-center items-center w-full h-1/2 lg:w-1/2 lg:h-full mb-16 lg:mb-0 lg:order-2">
          <img src={graphic} alt="SoHo Creative House Ai Chat GPT manual" />
        </div>

        <div className="lg:w-1/2 lg:h-full flex flex-col justify-center items-start px-4 lg:px-8">
          <SlideReveal>
            <p className="text-brand-cream text-[22px] md:text-[26px] text-left font-Black mb-4">Why Do I Need a Tailored Strategy?</p>
            </SlideReveal>
            <SlideReveal>
            <p className="text-brand-blue text-[18px] md:text-[20px] text-justify ">
              In a digital landscape teeming with one-size-fits-all solutions,
              a tailored strategy and set of tools allows you to pinpoint the specific areas you choose.
              Your business is as unique as your fingerprint, and your tools
              should reflect that individuality.
              <br />
              <br /> By providing a tailored solution for each business, you're
              guaranteed that the solution is fit for you, ensuring that every
              strategy, every piece of content, and every insight is aligned
              perfectly with what makes your business unique.
              <br />
              <br /> 
            </p>
          </SlideReveal>
          <a
                  href={externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
          <Button1 label="BOOK NOW" color="blue" className="text-brand-cream hover:text-brand-orange" />
          </a>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
}

export default Graphic;

