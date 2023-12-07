import ChevellHeader from "./components/ChevellHeader";
import InherentlyStylish from "./components/InherentlyStylish";
import EssenceOfLove from "./components/EssenceOfLove";
import Contact from "../Contact/Contact";
import StyleGuide from "./components/StyleGuide";

import Device from "./components/Device";
import Inspired from "./components/Inspired";

const Chevell = () => {
  return (
    <div className="flex flex-col">
      <div>
        <ChevellHeader />
      </div>
      <div className="h-contain  ">
        <InherentlyStylish />
      </div>
      <div>
        <EssenceOfLove />
      </div>
      <div className="w-full  h-contain lg:h-screen">
        <StyleGuide />
      </div>
      <div className="w-full h-screen">
        <Device />
      </div>
      <div className="w-full h-screen ">
        <Inspired />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
};

export default Chevell;
