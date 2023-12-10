import phone from '../images/phone.png';
import { SlideReveal } from "../../../Animations/SlideReveal";

function Hero() {
  return (
    <div className="flex flex-col lg:flex-row h-full w-full">
      <div className="bg-brand-orange h-1/2 w-full lg:h-full lg:w-1/2 flex flex-col justify-center items-center">
        <h3 className="font-Raleway italic leading-none text-brand-blue text-[36px] text-left w-1/2 md:pl-16 lg:pl-8 ">The</h3>
        <SlideReveal>
        <h3 className=" leading-none text-brand-blue w-full text-center md:pr-16">Master Key</h3>
        </SlideReveal>
        <h3 className="font-Raleway italic leading-none text-brand-blue text-[36px] text-left w-1/2 pl-16 md:pl-48 lg:pl-36 xl:pl-40 1xl:pl-52 -mt-3">to your</h3>
        <SlideReveal>
        <h3 className=" leading-none text-brand-blue w-full text-center md:pl-16">Business</h3>
        </SlideReveal>

      </div>

      <div className="bg-brand-cream h-1/2 w-full lg:h-full lg:w-1/2 flex flex-col justify-center">
        <img src={phone} alt="" />
      </div>
    </div>
  )
}

export default Hero
