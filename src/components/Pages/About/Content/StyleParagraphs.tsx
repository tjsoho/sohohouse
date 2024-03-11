import StyleMobile from "./Components/StyleMobile";
import Data from "./Paragraphs";
import SohoWhite from "./Components/SohoWhite";
import StyleTablet from "./Components/StyleTablet";

function Content2() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="md:hidden">
        <StyleMobile
          title="WHY?"
          para1={Data.paragraph3}
          para2={Data.paragraph4}
          lineColour="bg-brand-orange self-center w-[72px] md:w-[116px] shrink-0 h-[6px] my-8"
          image={<SohoWhite />}
        />
      </div>
      <div className="hidden md:block">
        <StyleTablet
          title="WHY?"
          para1={Data.paragraph3}
          para2={Data.paragraph4}
          lineColour="bg-brand-orange self-center w-[72px] md:w-[116px] shrink-0 h-[6px] my-8"
          image={<SohoWhite />}
        />
      </div>
    </div>
  );
}

export default Content2;
