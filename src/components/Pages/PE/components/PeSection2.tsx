import { PeColours } from "../constants/PeColours";
import Devices from "../assets/images/PEDevices.png";

function PeSection2() {
  return (
    <div style={{ backgroundColor: PeColours.SOFT_YELLOW }} className="h-full w-full flex">
      <img src={Devices} alt="SoHo Creative House Client design" className="w-full h-auto object-contain" />
    </div>
  );
}

export default PeSection2;
