

import ContactAi from '../Contact/ContactAi'
import AiConsult from './components/AiConsult'
import Graphic from './components/Graphic'
import Hero from './components/Hero'
import Included from './components/Included'
import Platform from './components/Platform'
import Voice from './components/Voice'

function Ai() {
  return (
    <div className="flex flex-col">
      <div className="w-full h-screen">
        <Hero />
      </div>
      <div className='bg-brand-orange'>
        <Platform />
      </div>
      <div className="w-full h-contain">
        <Voice />
      </div>
      <div className="w-full h-contain">
        <Graphic />
      </div>
      <div className="w-full h-contain">
        <Included />
      </div>
      <div>
        <AiConsult />
      </div>
      <div className="w-full h-screen bg-brand-cream">
        <ContactAi />
      </div>
    </div>
  )
}

export default Ai
