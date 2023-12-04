import { PeColours } from "../constants/PeColours";
import logo from "../assets/images/PElogo.png";
import logo2 from "../assets/images/PElogo2.png";
import PeText from "./core/PeText";

function PeSection3() {
  return (
    <div
      style={{ backgroundColor: PeColours.SOFT_RED }}
      className="h-full w-full"
    >
      {/* container */}

      {/* row */}
      <div className="flex px-8 pt-12 h-1/3">
        <img
          src={logo}
          alt="Soho CReative house client logo"
          className="h-2/5"
        />
      </div>

      {/* row */}
      <div className="flex justify-center items-center px-4 h-1/3">
        <PeText type="h1" color={PeColours.SOFT_YELLOW} className="text-center">
          LET'S EMPOWER <br /> YOUR FINANCES
        </PeText>
      </div>

        {/* row */}

        <div className="flex justify-end items-end h-1/3">
            <img src={logo2} alt="SohoCreative House Client logo" className="w-3/5 md:w-3/12" />
        </div>
    </div>
  );
}

export default PeSection3;
