import Contact from "../Contact/Contact";

import PeHeader from "./components/PeHeader";
import Section1 from "./components/PeSection1";
import Section2 from "./components/PeSection2";
import Section3 from "./components/PeSection3";
import Section4 from "./components/PeSection4";
import Section5 from "./components/PeSection5";

function Shadow() {
  return (
    <div className="flex flex-col">
      <div className="w-full h-screen">
        <PeHeader />
      </div>
      <div className="w-full h-screen">
        <Section1 />
      </div>
      <div className="w-full h-contain">
        <Section2 />
      </div>
      <div className="w-full h-screen">
        <Section3 />
      </div>
      <div className="w-full h-screen">
        <Section4 />
      </div>
      <div className="w-full h-screen">
        <Section5 />
      </div>
      
      <div className="w-full h-screen">
        <Contact />
      </div>
    </div>
  );
}

export default Shadow;
