import BeginningsMobile from "./Components/BeginningsMobile";
import Data from "./Paragraphs";
import SohoTan from "./Components/SoHoTan";
import BeginningsTablet from "./Components/BeginningsTablet";

function Content() {
  return (
    <div className="w-full h-full bg-brand-orange">
      <div className="w-full h-full white rounded-bl-[75px]  md:rounded-bl-[150px]  bg-brand-blue">
        <div className="max-w-[1440px] mx-auto">
          <div className="md:hidden">
            <BeginningsMobile
              title="Beginnings"
              para1={Data.paragraph1}
              para2={Data.paragraph2}
              lineColour="bg-brand-cream self-center w-[72px] md:w-[116px] shrink-0 h-[6px] my-8"
              image={<SohoTan />}
            />
          </div>
          <div className="hidden md:block ">
            <BeginningsTablet
              title="Beginnings"
              para1={Data.paragraph1}
              para2={Data.paragraph2}
              lineColour="bg-brand-cream self-center w-[72px] md:w-[116px] shrink-0 h-[6px] my-8"
              image={<SohoTan />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
