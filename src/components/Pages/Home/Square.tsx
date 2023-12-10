
import { useNavigate } from 'react-router-dom'; // Import useNavigate


interface SquareProps {
  label: string;
  path?: string; // Add a path prop
  color?: string;
  text?: string;
  image?: string;
}

export default function Square({ label, image, path, color = 'orange', text = 'blue' }: SquareProps) {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle click
  const handleClick = () => {
    if (path) {
      navigate(path); // Navigate to the specified path
    }
  };

  const cardClasses = `
    Card Class
    ${color === 'orange' ? 'bg-brand-orange' : color === 'blue' ? 'bg-brand-blue' : 'bg-brand-camel'}
    absolute inset-0 flex justify-center items-center text-center h-full flex-col absolute
  `
  
  const labelClasses =`
    Label Class
    ${text === 'orange' ? 'text-brand-orange' : text === 'blue' ? 'text-brand-blue' : 'text-brand-camel'}
    [backface-visibility:visible] 
  `

  const imageStyles: React.CSSProperties = {
    objectFit: 'cover', // Ensure the image fits within the container and maintains its aspect ratio
    width: '100%',
    height: '100%',
  };

  return (
    <div className="group h-full w-full [perspective:1000px] flex flex-col justify-center items-center" onClick={handleClick}>
      <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className={cardClasses}>
          <div className="flex flex-col h-full justify-center ">
            <h3 className={labelClasses}>
              {label}
            </h3>
          </div>
         
        </div>
        <div className="absolute inset-0 h-full w-full text-center bg-brand-cream text-brand-blue [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="flex min-h-full flex-col items-center justify-center">
            
            <h3 style={{ cursor: 'pointer' }} className="absolute bottom-20 left-50 z-40 text-xl text-brand-blue bg-brand-cream hover:text-brand-camel py-3 px-3 leading-none active:text-brand-orange rounded-sm shadow-md">
              Show Me
            </h3>
            
            <img style={imageStyles} src={image} alt="laptop" />
          </div>
        </div>
      </div>
    </div>
  );
}
