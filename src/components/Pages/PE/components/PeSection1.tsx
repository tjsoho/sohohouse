import { PeColours } from "../constants/PeColours";
// import bg from "../assets/images/PElogo2.png";

import PeText from "./core/PeText";

function Section1() {
  return (
    <div style={{ 
      backgroundColor: PeColours.SOFT_BLUE,
      // backgroundImage: `url(${bg})`,
      // backgroundPosition: 'center', // Centers the background image
      // backgroundRepeat: 'no-repeat', // Prevents the background image from repeating
      // backgroundSize: 'contain', // Scales the background image to cover the whole element
      }} className="h-full flex flex-col lg:flex-row justify-center">
   
      {/* Other divs */}
      <div  className="flex flex-col w-full justify-center items-center mb-8">
        <PeText type="h2" color={PeColours.SOFT_RED} className="text-center leading-none">
          Money =
        </PeText>
        <PeText type="sub1" color={PeColours.SOFT_YELLOW} className="text-center">
          Options. Choices. Lifestyle. Freedom
        </PeText>
      </div>
      <div className="flex justify-center items-center px-8 md:px-16">
      <PeText type="sub1" color="black" className="text-left">
      Project Empower encapsulates the essential principles of wealth building, management and money mindset (my favourite) in one, easy to implement, blueprint.
        </PeText>
      </div>
      
    </div>
  );
}

export default Section1;
