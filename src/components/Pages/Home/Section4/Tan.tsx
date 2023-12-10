import { Link } from "react-router-dom";

export default function Tan() {
  return (
    <div className="bg-brand-camel mx-auto px-5 h-full flex items-center">
      
 
              <div className="justify-center items-center flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                <h2 className="text-brand-blue text-[126px] md:text-[190px] leading-none lg:mt-6">
                  Ai
                </h2>
                <h3 className="text-brand-blue text-xl md:text-3xl text-center">
                  The Master Key To Your Business
                </h3>
                <div className="bg-brand-orange self-center w-[116px] shrink-0 h-[6px] mb-8 mt-8" />
                
                  <p className="text-brand-blue text-[20px]  px-4 md:px-12 xl:px-16 text-left">
                  Don't get left behind... Think AI is just kind of cool? Think again. It's a
                    game-changer, and we're here to show you how to unleash its
                    full potential. <br />
                    <br />
                    Our Ai Business Companion equips you to elevate your brand's voice and
                    dominate your marketing game. Don't just dabble in AI—master
                    it!
                    <br /><br />
                      
                  </p>
                    <Link to="/businesscompanion">
                   <button className="bg-brand-cream px-6 py-2 rounded-sm font-Black text-brand-blue mb-32 hover:text-brand-orange">
                      Learn More
                   </button>
                    </Link>
              </div>
         
    
    </div>
  );
}
