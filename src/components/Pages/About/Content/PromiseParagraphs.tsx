import PromiseMobile from "./Components/PromiseMobile";
import Data from "./Paragraphs";
import SohoTan from "./Components/SoHoTan";
import PromiseTablet from "./Components/PromiseTablet";

function Content3() {
  return (
    <div>
      <div className="md:hidden">
        <PromiseMobile
          title="Promise"
          para1={Data.paragraph5}
          para2={Data.paragraph6}
          lineColour="bg-brand-orange self-center w-[72px] md:w-[116px] shrink-0 h-[6px] my-8"
          image={<SohoTan />}
        />
      </div>
      <div className="hidden md:block">
        <PromiseTablet
          title="Promise"
          para1={Data.paragraph5}
          para2={Data.paragraph6}
          lineColour="bg-brand-orange self-center w-[72px] md:w-[116px] shrink-0 h-[6px] my-8"
          image={<SohoTan />}
        />
      </div>
    </div>
  );
}

export default Content3;
