import PromiseMobile from "./Components/PromiseMobile";
import Data from "./Paragraphs";
import SohoTan from "./Components/SoHoTan";
import PromiseTablet from "./Components/PromiseTablet";

function Content3() {
  return (
    <div className="w-full h-full bg-brand-cream">
      <div className="w-full h-full white rounded-bl-[75px] md:rounded-bl-[150px] md:rounded-tl-[150px] bg-brand-blue">
        <div className="max-w-[1440px] mx-auto">
          <div className="md:hidden">
            <PromiseMobile
              title="Promise"
              para1={Data.paragraph5}
              para2={Data.paragraph6}
              lineColour="bg-brand-cream self-center w-[72px] md:w-[116px] shrink-0 h-[6px] my-8"
              image={<SohoTan />}
            />
          </div>
          <div className="hidden md:block">
            <PromiseTablet
              title="Promise"
              para1={Data.paragraph5}
              para2={Data.paragraph6}
              lineColour="bg-brand-cream self-center w-[72px] md:w-[116px] shrink-0 h-[6px] my-8"
              image={<SohoTan />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content3;
