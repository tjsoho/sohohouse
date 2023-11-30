import Mobile1 from "./Components/Mobile1";
import Data from "./Data";
import SohoBlue from "./Components/SoHoBlue";
import Tablet2 from "./Components/Tablet2";

function Content2() {
  return (
    <div>
      <div className="md:hidden">
        <Mobile1
          title="Style"
          para1={Data.paragraph3}
          para2={Data.paragraph2}
          lineColour="bg-brand-cream self-center w-[72px] md:w-[116px] shrink-0 h-[6px] my-8"
          image={<SohoBlue />}
        />
      </div>
      <div className="hidden md:block">
        <Tablet2
          title="Style"
          para1={Data.paragraph3}
          para2={Data.paragraph4}
          lineColour="bg-brand-cream self-center w-[72px] md:w-[116px] shrink-0 h-[6px] my-8"
          image={<SohoBlue />}
        />
      </div>
    </div>
  );
}

export default Content2;
