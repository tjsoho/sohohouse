import { CSSProperties, useEffect, useState } from 'react'

import mobIMG from '../../assets/images/pradaSM.png';
import deskIMG from '../../assets/images/pradaLG.png';

function Image() {

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
      } else {
        setImageSrc(deskIMG);
      }
  
      // Cleanup
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [windowWidth]);

    const getImageStyle = (): CSSProperties => {
        if (windowWidth >= 1440) { // XL screen
          return {
            position: 'absolute',
            top: '10%',
            left: '65%',
            zIndex: 5,
            width: '20%', // Adjust size for XL screen
            height: 'auto'
          };
        } else if (windowWidth >= 1024) { // LG screen
          return {
            position: 'absolute',
            top: '10%',
            left: '70%',
            zIndex: 5,
            width: '23%', // Adjust size for LG screen
            height: 'auto'
          };
        } else if (windowWidth >= 768) { // Medium screen
          return {
            position: 'absolute',
            top: '7%',
            left: '45%',
            zIndex: 5,
            width: '45%', // Adjust size for medium screen
            height: 'auto'
          };
        } else { // Small screens
          return {
            position: 'absolute',
            top: '22%',
            left: '70%',
            transform: 'translate(-50%, -50%)',
            zIndex: 5,
            width: '40%', // Adjust size for smaller screens
            height: 'auto'
          };
        }
    };

    return (
        <div>
            {/* image */}
            <img 
                src={imageSrc}
                alt="Soho Creative House Website Design" 
                style={getImageStyle()}
            />
        </div>
    )
}

export default Image
