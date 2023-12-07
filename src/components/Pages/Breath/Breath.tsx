import Contact from "../Contact/Contact"
import BreathHeader from "./components/BreathHeader"
import Section2 from "./components/Section2"
import Section3 from "./components/Section3"
import Section4 from "./components/Section4"
import Section5 from "./components/Section5"


function Breath() {
  return (
    <div className="flex flex-col">
          <div className="w-full h-screen">
            <BreathHeader />
          </div>
          <div className="w-full h-contain">
            <Section2 />
          </div>
          <div className="w-full h-contain lg:h-screen">
            <Section3 />
          </div>
          <div className="w-full h-Screen">
            <Section4 />
          </div>
          <div className="w-full h-Screen">
            <Section5 />
          </div>
      
          <div className="w-full h-screen">
            <Contact />
          </div>
        </div>
  )
}

export default Breath
