import { useEffect, useState } from "react";
import mobIMG from '../assets/images/deviceSM.png';
import tabIMG from '../assets/images/deviceMD.png';
import deskIMG from '../assets/images/deviceXL.png';

function Device() {
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

    // Responsive image style
    const imageStyle = {
      width: '100%',  // Image will scale up to the full width of its container
      height: 'auto'  // Maintain aspect ratio
    };

    return (
      <div className="w-full h-full flex flex-col justify-center items-center">
        <img 
          src={imageSrc} 
          alt="Soho Creative house client design" 
          style={imageStyle}
        />
      </div>
    );
}

export default Device;
