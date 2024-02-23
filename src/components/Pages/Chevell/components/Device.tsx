import { Reveal } from "../../../Animations/Reveal";
import { ChevellColors } from "../constants/ChevellColors";
import ChevellText from "./core/ChevellText";
import ResponsiveBackground from "./responsiveBackground";

function Device() {
  return (
    <div
      style={{ backgroundColor: ChevellColors.SOFT_TAN }}
      className="w-full h-screen"
    >
      <div className=" w-full h-full">
        <ResponsiveBackground>
            <div className="flex flex-col justify-center items-center h-full w-full">
              <Reveal>
                <ChevellText type="h2" color={ChevellColors.SOFT_BLACK} className="text-center mt-8 lg:mb-16">
                    Designed to cater <br/> for CHEVELL clients <br/> across all devices.
                </ChevellText>
                </Reveal>
            </div>
        </ResponsiveBackground>
      </div>
    </div>
  );
}

export default Device;
