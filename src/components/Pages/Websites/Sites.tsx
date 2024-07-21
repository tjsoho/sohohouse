import React from "react";
import Square from "../Home/Square";
import PeCard from "./images/PeCard.png";
import ChevCard from "./images/ChevCard.png";
import RLCard from "./images/RLCard.png";
import LuxeCard from "./images/LuxeCard.png";
import ShadowCard from "./images/ShadowCard.png";
import BreathCard from "./images/BreathCard.png";
import Framework from "../Home/Section3/Framework";
import Stories from "./Stories";
import Goal from "./Goal";
import Book from "./Book";
import wow from "./images/wow.png";
import Contact from "../Contact/Contact";
import Work from "../Home/Work/Work";

function Sites() {
  return (
    <div className="w-full h-full">
       <div className="w-screen h-full pt-40 lg:py-0 lg:h-screen">
        <img src={wow} alt="" className="w-full h-full object-contain" />
       </div>

        <div>
            <Goal />
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
              text="cream"
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
              text="orange"
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
              text="orange"
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
<div>
  <Work />
</div>
      <div className="bg-brand-blue" id="framework">
        <Framework />
      </div>
      <div>
        <Book />
      </div>
      <div className="bg-brand-cream h-contain">
        <Contact />
      </div>
    </div>
  );
}

export default Sites;
