
import graphic from "../images/graphic.png";
import { SlideReveal } from "../../../Animations/SlideReveal";
import Button1 from "../../../Button/Button1";

function Graphic() {
  
  return (
    <div className="max-w-[1440px] mx-auto h-contain">
      <div className="w-full h-contain flex flex-col lg:flex-row bg-brand-orange justify-around items-center py-16 lg:py-32">
        <div className="flex flex-col justify-center items-center w-full h-1/2 lg:w-1/2 lg:h-full mb-16 lg:mb-0 lg:order-2">
          <img src={graphic} alt="SoHo Creative House Ai Chat GPT manual" />
        </div>

        <div className="lg:w-1/2 lg:h-full flex flex-col justify-center items-start px-4 lg:px-8">
          <SlideReveal>
            <p className="text-brand-cream text-[22px] md:text-[26px] text-left font-semibold">Why This Matters</p>
            </SlideReveal>
            <SlideReveal>
            <p className="text-brand-blue text-[18px] md:text-[20px] text-justify">
              In a digital landscape teeming with one-size-fits-all solutions,
              The Ai HUB stands out by offering a truly tailored AI platform.
              Your business is as unique as your fingerprint, and your tools
              should reflect that individuality.
              <br />
              <br /> By providing a custom-built Ai HUB for each member, you're
              guaranteed that no two hubs are the same, ensuring that every
              strategy, every piece of content, and every insight is aligned
              perfectly with what makes your business unique.
              <br />
              <br /> 
            </p>
          </SlideReveal>
          <Button1 label="ENQUIRE NOW" color="blue" className="text-brand-cream hover:text-brand-orange" />
        </div>
      </div>
    </div>
  );
}

export default Graphic;
