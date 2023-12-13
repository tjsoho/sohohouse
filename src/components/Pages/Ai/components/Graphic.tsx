import Button1 from "../../../Button/Button1";
import graphic from "../images/graphic.png";
import { SlideReveal } from "../../../Animations/SlideReveal";



function Graphic() {
  const externalLink = "https://calendly.com/sohocreativehouse/30min";
  return (
    <div className="w-full h-full flex flex-col lg:flex-row bg-brand-camel justify-around items-center py-16">
    
      <div className="flex flex-col justify-center items-center w-full h-1/2 lg:w-1/2 lg:h-full ">
        <img src={graphic} alt="SoHo Creative House Ai Chat GPT manual" />
      </div>

      <div className="lg:w-1/2 lg:h-full flex flex-col justify-center items-center ">
        <SlideReveal> 
        <p className="text-center text-[26px] md:text-[38px] font-bold">
          Elevate Your Business with <br />
          All-in-One Assistance, <br /> Starting at $990
        </p>
        </SlideReveal>
        <a href={externalLink} target="_blank" rel="noopener noreferrer">
        <Button1 label="YES PLEASE" color="blue" className="mt-7 hover:text-brand-orange"/>
        </a>
      </div>
    </div>
  );
}

export default Graphic;
