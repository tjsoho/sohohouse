import Contact from "../Contact/Contact";
import ShadowHeader from "./components/ShadowHeader";
import ShadowSection2 from "./components/ShadowSection2";
import ShadowSection3 from "./components/ShadowSection3";
import ShadowSection4 from "./components/ShadowSection4";
import ShadowSection5 from "./components/ShadowSection5";

function Shadow() {
  return (
   
        <div className="flex flex-col">
          <div className="w-full h-screen">
            <ShadowHeader />
          </div>
          <div className="w-full h-screen">
            <ShadowSection2 />
          </div>
          <div className="w-full h-screen">
            <ShadowSection3 />
          </div>
          <div className="w-full h-contain">
            <ShadowSection4 />
          </div>
          <div className="w-full h-screen">
            <ShadowSection5 />
          </div>
          <div className="w-full h-screen">
            <Contact />
          </div>
        </div>
   
  );
}

export default Shadow;
