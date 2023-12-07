
import { LuxeColours } from '../../constants/LuxeColour'
import LuxeText from '../core/LuxeText'
import Image from './Image'


function Story() {

   


  return (
    <div style={{backgroundColor: LuxeColours.SOFT_CREAM}} className="w-full h-full relative flex flex-col justify-end">
      
      {/* content */}
      <div style={{backgroundColor: LuxeColours.SOFT_TAN}} className="h-full md:h-4/5 w-4/5 flex flex-col justify-end pb-8 md:p-16 pl-8">
        <div>
            <Image />
        </div>
        <div className="absolute top-[25%] left-[15%] md:top-[40%] md:left-[15%] lg:top-[35%] lg:left-[4%]  -translate-y-1/2 rotate-[270deg] lg:rotate-0">
            <LuxeText type="h3" color={LuxeColours.SOFT_CREAM} className="text-left ">
                THEIR STORY 
            </LuxeText>
       
        </div>
        <LuxeText type="sub1" color={LuxeColours.SOFT_BROWN} className="text-left mt-8 pr-4 lg:pr-32 xl:pr-96">
              Beauty deserves beauty. <br/><br/> Loved Luxe set out to create an open market place specifically for those who desire to buy and sell preloved luxury fashion accessories.
              <br/><br/>A beautiful designated space for beautifully designed and crafted items.
        </LuxeText>

        {/* straight line */}
        <div
            className="w-full h-[3px] flex justify-center mt-8"
            style={{
                backgroundColor: LuxeColours.SOFT_DARK,
            }}>    
        </div>
      </div>
    </div>
  )
}

export default Story
