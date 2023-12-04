import { ShadowColours } from "../constants/ShadowColours";
import ShadowText from "./core/ShadowText";
import SVGResponsive from "./SVGResponsive";

function ShadowSection5() {
  return (
    <div
      style={{ backgroundColor: ShadowColours.SOFT_GREEN }}
      className="h-screen flex flex-col justify-center items-center lg:flex-row"
    >
      <SVGResponsive>
        {/* This container will center the content vertically and horizontally */}
        <div className="flex flex-col justify-full items-center w-full text-center px-4 py-8 h-full">
          {/* Heading */}
          <div className="h-2/5">
            <ShadowText
              type="h1"
              color={ShadowColours.SOFT_RED}
              className="mb-4" // Add margin for spacing
            >
              Style Guide
            </ShadowText>
          </div>

        
         

          {/* Sub1 Text */}
          <div className="h-3/5 w-5/6 md:w-2/5 md:pb-[700px] lg:pb-0">
            <ShadowText
              type="sub1"
              color={ShadowColours.SOFT_BLUE}
              className="pl-28 md:pl-16 lg:pl-4 text-left md:pr-8 lg:pr-20 " // Add margin for spacing
            >
              A design that evokes a fun, feminine and inspiring mood, encouraging
              women to take up the sport of surfing.
            </ShadowText>
          </div>
        </div>
      </SVGResponsive>
    </div>
  );
}

export default ShadowSection5;

