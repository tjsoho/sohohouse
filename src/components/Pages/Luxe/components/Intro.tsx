import { CSSProperties, useEffect, useState } from 'react';
import { LuxeColours } from '../constants/LuxeColour'
import LuxeText from './core/LuxeText'
import mobIMG from '../assets/images/itemsSM.png';
import tabIMG from '../assets/images/itemsMD.png';
import deskIMG from '../assets/images/itemsMD.png';

function Intro() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [imageSrc, setImageSrc] = useState(mobIMG); // Default image

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      // Update the image source based on window width
      if (windowWidth < 768) {
        setImageSrc(mobIMG);
      } else if (windowWidth >= 768 && windowWidth < 1024) {
        setImageSrc(tabIMG);
      } else {
        setImageSrc(deskIMG);
      }
  
      // Cleanup
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [windowWidth]);

    // Function to calculate image style
    const getImageStyle = (): CSSProperties => {
      if (windowWidth >= 1440) { // XL screen
        return {
          position: 'absolute',
          top: '15%',
          left: '45%',
          zIndex: 5
        };
      } else if (windowWidth >= 1024) { // LG screen
        return {
          position: 'absolute',
          top: '25%',
          left: '30%',
          zIndex: 5
        };
      } else { // Small and medium screens
        return {
          position: 'absolute',
          top: '70%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 5
        };
      }
    };

    return (
      <div style={{ backgroundColor: LuxeColours.SOFT_TAN }} className="flex flex-col h-full w-full relative">
        
        {/* content */}
        <div className="flex flex-col h-3/4 lg:h-3/5 z-10 w-full justify-start items-center lg:items-start px-8 lg:px-32 text-center pt-16 md:pt-32">
          <LuxeText type="h2" color={LuxeColours.SOFT_BROWN} className="text-center">
              Preloved Luxury
          </LuxeText>
          <LuxeText type="sub1" color={LuxeColours.SOFT_BROWN} className="text-center mt-8">
              An online marketplace for stunning, <br/> preloved luxury fashion accessories.
          </LuxeText>
        </div>

        {/* image */}
        <img 
          src={imageSrc}
          alt="Soho Creative House Website Design" 
          style={getImageStyle()}
        />

        {/* colour div */}
        <div style={{ backgroundColor: LuxeColours.SOFT_CREAM }} className="h-1/4 lg:h-2/5 z-0">
          
        </div>
      </div>
    )
}

export default Intro
