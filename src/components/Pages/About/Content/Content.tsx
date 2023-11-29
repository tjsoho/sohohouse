import Mobile from "./Components/Mobile";
import Data from "./Data";
import SohoTan from "./Components/SoHoTan";
import Tablet from "./Components/Tablet";

function Content() {
  return (
    <div>
      <div className="md:hidden">
        <Mobile
          title="Beginnings"
          para1={Data.paragraph1}
          para2={Data.paragraph2}
          lineColour="brand-orange"
          image={<SohoTan />}
        />
      </div>
      <div className="hidden md:block">
        <Tablet
          title="Beginnings"
          para1={Data.paragraph1}
          para2={Data.paragraph2}
          image={<SohoTan />}
        />
      </div>
    </div>
  );
}

export default Content;
