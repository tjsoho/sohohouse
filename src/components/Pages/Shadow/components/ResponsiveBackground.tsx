import { useState, useEffect, ReactNode } from 'react';
import mobIMG from '../assets/images/Section2ImgSM.png';
import tabIMG from '../assets/images/Section2ImgMD.jpg'
import deskIMG from '../assets/images/Section2ImgLG.png'



type ResponsiveBackgroundProps = {
  children: ReactNode;
};

function ResponsiveBackground({ children }: ResponsiveBackgroundProps) {
  const [backgroundImage, setBackgroundImage] = useState(mobIMG);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setBackgroundImage(deskIMG); // for large screens
      } else if (window.innerWidth >= 768) {
        setBackgroundImage(tabIMG); // for medium screens
      } else {
        setBackgroundImage(mobIMG); // for small screens
      }
    };

    window.addEventListener('resize', handleResize);
    
    // Set the initial image
    handleResize();

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="h-full w-full bg-cover bg-no-repeat bg-center relative"
    >
      {children}
    </div>
  );
}

export default ResponsiveBackground;
