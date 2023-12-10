import StyleMobile from "./Components/StyleMobile";
import Data from "./Paragraphs";
import SohoBlue from "./Components/SoHoBlue";
import StyleTablet from "./Components/StyleTablet";

function Content2() {
  return (
    <div>
      <div className="md:hidden">
        <StyleMobile
          title="Style"
          para1={Data.paragraph3}
          para2={Data.paragraph4}
          lineColour="bg-brand-cream self-center w-[72px] md:w-[116px] shrink-0 h-[6px] my-8"
          image={<SohoBlue />}
        />
      </div>
      <div className="hidden md:block">
        <StyleTablet
          title="Style"
          para1={Data.paragraph3}
          para2={Data.paragraph4}
          lineColour="bg-brand-orange self-center w-[72px] md:w-[116px] shrink-0 h-[6px] my-8"
          image={<SohoBlue />}
        />
      </div>
    </div>
  );
}

export default Content2;
