import mobIMG from '../assets/images/styleSM.svg';
import tabIMG from '../assets/images/styleMD.svg';
import deskIMG from '../assets/images/styleLG.svg';
import { useEffect, useState } from 'react';

function PeSection4() {
    const [currentImage, setCurrentImage] = useState(mobIMG);

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth >= 1024) {
            setCurrentImage(deskIMG); // for large screens
          
          } else if (window.innerWidth >= 768) {
            setCurrentImage(tabIMG); // for medium screens
          
          } else {
            setCurrentImage(mobIMG); // for small screens
            
          }
        };
    
        window.addEventListener('resize', handleResize);
        
        // Set the initial image and size
        handleResize();
    
        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
      }, []);
    

  return (
    <div style={{ backgroundColor: "black"}} className="h-full w-full flex justify-center p-12 md:p-16 lg:p-24 xl:p-40">
      <img src={currentImage} alt="Soho CReative House Style guide" className="w-" />
    </div>
  )
}

export default PeSection4
