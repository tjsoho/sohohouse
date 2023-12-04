import { PeColours } from "../constants/PeColours"
import PeText from "./core/PeText"
import ResponsiveBackground from "./responsiveBackground"


function PeSection5() {
  return (
    <div className="flex w-full h-full">
      <ResponsiveBackground>
        <div className="absolute inset-0 bg-black bg-opacity-30 pt-16">
            <PeText type="h1" color={PeColours.SOFT_RED} className="text-right lg:text-left px-8">
                Project Empower
            </PeText>
            <PeText type="h1" color={PeColours.SOFT_YELLOW} className="text-right lg:text-left px-8">
                Making Finance
            </PeText>
            <PeText type="h1" color="white" className="text-right lg:text-left px-8">
                Fun
            </PeText>
        </div>
      </ResponsiveBackground>
    </div>
  )
}

export default PeSection5
