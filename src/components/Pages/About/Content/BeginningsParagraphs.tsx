import BeginningsMobile from "./Components/BeginningsMobile";
import Data from "./Paragraphs";
import SohoTan from "./Components/SoHoTan";
import BeginningsTablet from "./Components/BeginningsTablet";

function Content() {
  return (
    <div>
      <div className="md:hidden">
        <BeginningsMobile
          title="Beginnings"
          para1={Data.paragraph1}
          para2={Data.paragraph2}
          lineColour="bg-brand-orange self-center w-[72px] md:w-[116px] shrink-0 h-[6px] my-8"
          image={<SohoTan />}
        />
      </div>
      <div className="hidden md:block ">
        <BeginningsTablet
          title="Beginnings"
          para1={Data.paragraph1}
          para2={Data.paragraph2}
          lineColour="bg-brand-orange self-center w-[72px] md:w-[116px] shrink-0 h-[6px] my-8"
          image={<SohoTan />}
        />
      </div>
    </div>
  );
}

export default Content;
