import { useEffect, useState } from 'react';
import bg from '../assets/images/background.svg';
import mobIMG from '../assets/images/styleSM.png';
import tabIMG from '../assets/images/styleMD.png';
import deskIMG from '../assets/images/styleLG.png';
import mobIMG2 from '../assets/images/palletSM.png';
import tabIMG2 from '../assets/images/palletLG.svg';
import deskIMG2 from '../assets/images/palletLG.svg';
import ResponsiveBackground2 from './ResponsiveBackground2';

function Style() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [imageSrc, setImageSrc] = useState(mobIMG); // Default image
    const [imageSrc2, setImageSrc2] = useState(mobIMG2); // Default image

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      // Update the image source based on window width
      if (windowWidth < 768) {
        setImageSrc(mobIMG);
        setImageSrc2(mobIMG2);
      } else if (windowWidth >= 768 && windowWidth < 1024) {
        setImageSrc(tabIMG);
        setImageSrc2(tabIMG2);
      } else {
        setImageSrc(deskIMG);
        setImageSrc2(deskIMG2);
      }
  
      // Cleanup
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [windowWidth]);

    return (
    <div className="w-full h-full flex flex-col lg:flex-row justify-center items-center ">
        <ResponsiveBackground2>
            {/* container 1 */}
            <div className="flex justify-center items-center h-full lg:w-1/2">
                <img src={imageSrc} alt="Soho Creative House Web design" />
            </div>

            {/* container 2 */}
            <div className="flex justify-center items-center h-full lg:w-1/2">
                <img src={imageSrc2} alt="Soho Creative House Web design" />
            </div>
        </ResponsiveBackground2>
    </div>
)

}

export default Style
