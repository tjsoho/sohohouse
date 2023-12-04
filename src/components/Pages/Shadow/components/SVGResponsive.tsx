import { useState, useEffect, ReactNode } from 'react';
import mobIMG from '../assets/images/colourSM.svg';
import tabIMG from '../assets/images/colourMD.svg';
import deskIMG from '../assets/images/colourLG.svg';

type SVGResponsiveProps = {
  children: ReactNode;
};

function SVGResponsive({ children }: SVGResponsiveProps) {
  const [currentImage, setCurrentImage] = useState(mobIMG);
  const [backgroundSize, setBackgroundSize] = useState('85%'); // Default size
  const [backgroundPosition, setBackgroundPosition] = useState('center bottom 10%'); // Default size

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCurrentImage(deskIMG); // for large screens
        setBackgroundSize('60%'); // Adjust size for large screens
        setBackgroundPosition ('center');
      } else if (window.innerWidth >= 768) {
        setCurrentImage(tabIMG); // for medium screens
        setBackgroundSize('70%'); // Adjust size for medium screens
        setBackgroundPosition ('center');
      } else {
        setCurrentImage(mobIMG); // for small screens
        setBackgroundSize('85%'); // Adjust size for small screens
        setBackgroundPosition ('center bottom 10%');
      }
    };

    window.addEventListener('resize', handleResize);
    
    // Set the initial image and size
    handleResize();

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${currentImage})`,
        backgroundSize: backgroundSize,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: backgroundPosition,
      }}
      className="h-full w-full relative"
    >
      {children}
    </div>
  );
}

export default SVGResponsive;
