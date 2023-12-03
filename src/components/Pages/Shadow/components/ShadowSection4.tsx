import device from "../assets/images/ShadowDEVICE.jpg"
import ShadowText from "./core/ShadowText"


function ShadowSection4() {
  return (
    <div>
      <div>
        <ShadowText type="h1" color="red" className="text-left">
            Playful <br /> Fun <br /> Inspiring
        </ShadowText>
      </div>
      <div>
        <img src={device} alt="SOHO CREATIVE HOUSEMobile phone devices" />
      </div>
    </div>
  )
}

export default ShadowSection4
