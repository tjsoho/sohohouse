
import Contact from "../Contact/Contact";
import Section1 from "./Section1/Section1";
import Section2a from "./Section2/Section2a";
import Framework from "./Section3/Framework";
import Section4 from "./Section4/Section4";
import Square from "./Square";
import ChevCard from "./images/ChevCard.png";
import LuxeCard from "./images/LuxeCard.png";
import RLCard from "./images/RLCard.png";
import BreathCard from "./images/BreathCard.png";
import PeCard from "./images/PeCard.png";
import ShadowCard from "./images/ShadowCard.png";
import Craft from "./Craft/Craft";
import Websites from "./Offering/Websites";
import Companion from "./Offering/Companion";
import Stories from "./Stories/Stories";

function Home() {
  return (
    <div className="w-screen">
      <Section1 />
      <Craft  />
      <Websites />
      <Companion />
      <Section2a />
      <div id="framework">
        <Framework />
      </div>
      <Stories />
      {/* SQUARES */}
      <div className="flex flex-wrap w-full h-contain " id="framework">
        <div className="w-full md:w-1/2 lg:w-1/3 h-96">
          <Square
            label="Project Empower"
            path="/pe"
            color="blue"
            text="orange"
            image={PeCard}
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 h-96">
        <Square label="Chevell" path="/chevell" text="cream" image={ChevCard} />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 h-96">
          <Square label="Rosie & Laurent" path="/comingsoon" color="camel" image={RLCard}/>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 h-96">
          <Square label="Loved Luxe" path="/luxe" color="camel" image={LuxeCard}/>
        </div>


        <div className="w-full md:w-1/2 lg:w-1/3 h-96">
          <Square label="Shadow" path="/shadow" color="blue" text="cream" image={ShadowCard}/>
        </div>



        <div className="w-full md:w-1/2 lg:w-1/3 h-96">
          <Square label="Breath" path="/breath" image={BreathCard}/>
        </div>
      </div>
      {/* <div className="w-full h-screen">
        <Hero />
      </div> */}
      <Section4 />
      <div className="w-screen h-contain">
        <Contact />
      </div>
    </div>
  );
}

export default Home;


