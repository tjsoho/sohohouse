

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
      <div className="w-full h-contain lg:h-screen bg-brand-blue">
        <Voice />
      </div>
      <div className="w-full h-screen bg-brand-camel">
        <Graphic />
      </div>
      <div className="w-full h-contain bg-brand-blue">
        <Included />
      </div>
      <div className="w-full h-screen bg-brand-cream">
        <ContactAi />
      </div>
    </div>
  )
}

export default Ai
