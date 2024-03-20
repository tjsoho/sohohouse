import { Reveal2 } from "../../../Animations/Reveal2";
import Card from "./Card";
import BlueGradient from "./images/Gradient2.svg";


const signupFormStyle = {
  backgroundImage: `url(${BlueGradient})`,
  backgroundSize: "cover", // or any other size
};

function Testimonials() {
  return (
    <div className="w-screen h-contain py-8 lg:py-16" style={signupFormStyle}>
      <div className="max-w-[1440px] mx-auto p-8 lg:p-16 h-full">
        <div className="flex flex-col justify-center items-center h-full">
            <Reveal2>
            <h3 className="text-[36px] md:text-[50px] lg:text-[50px] text-brand-orange">Kind Words</h3>
            {/* add a couple of sentences about our clietns words */}
            </Reveal2>
            <p className=" text-white text-center max-w-[600px] my-4">
            The real proof isn’t in what I say, it's in the words of those who’ve experienced this journey with me.</p>
            {/* Cards */}
            <div className="flex w-full justify-around items-center max-h-[80%]">
               <div>
                <Card />
                </div>
                
            </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
