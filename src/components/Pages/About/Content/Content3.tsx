import Mobile3 from "./Components/Mobile3";
import Data from "./Data";
import SohoTan from "./Components/SoHoTan";
import Tablet3 from "./Components/Tablet3";

function Content3() {
  return (
    <div>
      <div className="md:hidden">
        <Mobile3
          title="Promise"
          para1={Data.paragraph5}
          para2={Data.paragraph6}
          lineColour="bg-brand-orange self-center w-[72px] md:w-[116px] shrink-0 h-[6px] my-8"
          image={<SohoTan />}
        />
      </div>
      <div className="hidden md:block">
        <Tablet3
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
