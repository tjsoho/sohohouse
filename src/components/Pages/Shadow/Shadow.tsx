import ShadowSection2 from "./components/ShadowSection2";
import ShadowSection3 from "./components/ShadowSection3";
import ShadowSection4 from "./components/ShadowSection4";

function Shadow() {
  return (
   
        <div className="flex flex-col">
          <div className="w-full h-screen">
            <ShadowSection2 />
          </div>
          <div className="w-full h-screen">
            <ShadowSection3 />
          </div>
          <div className="w-full h-screen">
            <ShadowSection4 />
          </div>
        </div>
   
  );
}

export default Shadow;
