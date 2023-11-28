import Contact from "../Contact/Contact";
import Section1 from "./Section1/Section1";
import Section2a from "./Section2/Section2a";
import Section3 from "./Section3/Section3";
import Section4 from "./Section4/Section4";
import Square from "./Square";

function Home() {
  return (
    <div className="w-full">
      <Section1 />
      <Section2a />
      <Section3 />

      {/* SQUARES */}
      <div className="flex flex-wrap w-full">
        
        <div className="w-full md:w-1/2 lg:w-1/3 h-96">
          <Square label="Chevell" />
        </div>
        
        <div className="w-full md:w-1/2 lg:w-1/3 h-96">
          <Square label="Rosie & Laurent" color="camel" />
        </div>
        
        <div className="w-full md:w-1/2 lg:w-1/3 h-96">
          <Square label="Shadow" color="blue" text="orange" />
        </div>
       
        <div className="w-full md:w-1/2 lg:w-1/3 h-96">
          <Square label="Loved Luxe" color="camel" />
        </div>
       
        <div className="w-full md:w-1/2 lg:w-1/3 h-96">
          <Square label="Project Empower" color="blue" text="orange" />
        </div>
        
        <div className="w-full md:w-1/2 lg:w-1/3 h-96">
          <Square label="Breath" />
        </div>
      </div>
      <Section4 />
      <div className="w-screen h-screen">
        <Contact />
      </div>
    </div>
  );
}

export default Home;
