import ShadowText from "./core/ShadowText";
import { ShadowColours } from "../constants/ShadowColours";
import backgroundImage from "../assets/images/shadowGirlBoard.png";

function ShadowSection3() {
  return (
    <div
      style={{ backgroundColor: ShadowColours.SOFT_YELLOW }}
      className="h-full "
    >
      {/* Background Image */}
      <div
        style={{ backgroundImage: `url(${backgroundImage})` }}
        className="h-full bg-no-repeat bg-contain bg-left"
      >
        {/* Content */}

        <div className="flex flex-col justify-start items-end lg:justify-center lg:items-end h-full p-8 md:p-16 lg:pr-64">
          <div>
            <ShadowText
              type="h1"
              color={ShadowColours.SOFT_RED}
              className="text-right"
            >
              Empowering <br /> Women Into <br /> the Water
            </ShadowText>
          </div>
          <div className="md:w-[600px]">
            <ShadowText
              type="sub1"
              color={ShadowColours.SOFT_BLUE}
              className="text-right"
            >
              Shadow Surfboards strives to empower women to get into the water
              and discover the joy of surfing.
            </ShadowText>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShadowSection3;
