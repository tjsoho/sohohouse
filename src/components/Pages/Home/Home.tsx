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
import Master from "./AiMaster/Master";


function Home() {
  return (
    <div className="">
      <Section1 />
      <Craft />
      <div className="w-full bg-brand-camel">
        <Companion />
      </div>
      <Websites />
      <div className="flex h-screen justify-center items-center">
        <Section2a />
      </div>
      <div className="bg-brand-blue" id="framework">
        <Framework />
      </div>
      <div className="bg-brand-orange">
        <Stories />
      </div>
      {/* SQUARES */}
      <div className="bg-brand-camel">
        
          <div className="flex flex-wrap h-contain">
            <div className="w-full md:w-1/2 lg:w-1/3 h-96 lg:order-1">
              <Square
                label="Project Empower"
                path="/pe"
                color="blue"
                text="orange"
                image={PeCard}
                iconColor="#FC7643"
              />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 h-96 lg:order-5">
              <Square
                label="Chevell"
                path="/chevell"
                text="cream"
                image={ChevCard}
                iconColor="#FFE9E2"
              />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 h-96 lg:order-2">
              <Square
                label="Rosie & Laurent"
                path="/comingsoon"
                color="camel"
                image={RLCard}
                iconColor="#061C4E"
              />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 h-96 lg:order-4">
              <Square
                label="Loved Luxe"
                path="/luxe"
                color="cream"
                image={LuxeCard}
                iconColor="#061C4E"
              />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 h-96 lg:order-5">
              <Square
                label="Shadow"
                path="/shadow"
                color="blue"
                text="camel"
                image={ShadowCard}
                iconColor="#CA9F78"
              />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 h-96 lg:order-6">
              <Square
                label="Breath"
                path="/breath"
                image={BreathCard}
                iconColor="#061C4E"
              />
            </div>
          
        </div>
      </div>
      <div className="bg-brand-camel">
      <Master />
      </div>
      <div className="bg-brand-blue">
      <Section4 />
      </div>
      <div className="bg-brand-cream h-contain">
        <Contact />
      </div>
    </div>
  );
}

export default Home;
