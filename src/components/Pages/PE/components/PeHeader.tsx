import { PeColours } from "../constants/PeColours"
import PElogo from "../assets/images/PElogo.png"


function PeHeader() {
  return (
    <div style={{ backgroundColor: PeColours.SOFT_RED }} className="h-full">
      <div className="flex justify-center items-center h-full p-8 lg:p-44">
        <img src={PElogo} alt="SoHo CReative House PE Logo" />
      </div>
    </div>
  )
}

export default PeHeader
