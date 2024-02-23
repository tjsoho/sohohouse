import { Link } from "react-router-dom";
import { Reveal } from "../../../Animations/Reveal";
import { SlideReveal } from "../../../Animations/SlideReveal";


export default function Tan() {
  return (
    <div className="bg-brand-blue mx-auto px-5 h-full flex items-center">
      
 
              <div className="justify-center items-center flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                <h2 className="text-brand-orange text-[126px] md:text-[190px] leading-none lg:mt-6">
                  Ai
                </h2>
                <h3 className="text-brand-cream text-xl md:text-3xl text-center">
                  The Swiss Army Knife for Bizz
                </h3>
                <Reveal>
                <div className="bg-brand-orange self-center w-[116px] shrink-0 h-[6px] mb-8 mt-8" />
                </Reveal>
                <SlideReveal>
                  <p className="text-brand-cream text-[20px]  px-4 md:px-12 xl:px-16 text-left">
                  Don't get left behind... Think AI is just kind of cool? Think again. It's a
                    game-changer, and we're here to show you how to unleash its
                    full potential. <br />
                    <br />
                    Crafted to save you time and significant expenses, the Ai Business Companion is more than a tool – it's a catalyst for success. Redefine your marketing, ignite creative content, and bring to life new products and offerings inline with your bizz.
                    <br /><br />
                      
                    <Link to="/businesscompanion">
                      <p className="text-brand-camel text-[20px] text-left underline">Learn More</p>
                    </Link>
                  </p>
                </SlideReveal>
              </div>
         
    
    </div>
  );
}
