import Contact from "../Contact/Contact"
import Device from "./components/Device"
import Hero from "./components/Hero"
import Intro from "./components/Intro"
import Story from "./components/story/Story"
import Style from "./components/Style"


function Luxe() {
  return (
    <div className="flex flex-col">
      <div className="w-full h-screen">
        <Hero />
      </div>
      <div className="w-full h-screen ">
        <Intro />
      </div>
      <div className="w-full h-contain ">
        <Device />
      </div>
      <div className="w-full h-screen ">
        <Story />
      </div>
      <div className="w-full h-screen ">
        <Style />
      </div>
    
      <div className="w-full h-screen ">
        <Contact />
      </div>
    </div>
  )
}

export default Luxe
