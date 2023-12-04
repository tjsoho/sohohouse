import ShadowText from "./core/ShadowText";
import ResponsiveBackground from "./ResponsiveBackground";
import { ShadowColours } from "../constants/ShadowColours";

function ShadowSection2() {
  return (
    <div className="h-full">
      <ResponsiveBackground>
        {/* Overlay */}
        
          {/* Content */}
          <div className="flex justify-start items-end lg:items-center h-full pl-4 pb-16 md:pb-4 md:pl-8 lg:pl-32">
            <ShadowText  type="h1" color={ShadowColours.SOFT_GREEN}>
              REDISCOVER <br /> YOURSELF
            </ShadowText>
          </div>
        
      </ResponsiveBackground>
    </div>
  );
}

export default ShadowSection2;
