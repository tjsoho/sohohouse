

import ContactAi from '../Contact/ContactAi'
import Graphic from './components/Graphic'
import Hero from './components/Hero'
import Included from './components/Included'
import Voice from './components/Voice'

function Ai() {
  return (
    <div className="flex flex-col">
      <div className="w-full h-screen">
        <Hero />
      </div>
      <div className="w-full h-contain lg:h-screen">
        <Voice />
      </div>
      <div className="w-full h-screen">
        <Graphic />
      </div>
      <div className="w-full h-contain ">
        <Included />
      </div>
      <div className="w-full h-screen">
        <ContactAi />
      </div>
    </div>
  )
}

export default Ai
