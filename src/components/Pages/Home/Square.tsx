
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import laptopImage from "../../Images/1.png"; // Assuming you have this image

interface SquareProps {
  label: string;
  path?: string; // Add a path prop
  color?: string;
  text?: string;
}

export default function Square({ label, path, color = 'orange', text = 'blue' }: SquareProps) {
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
    absolute inset-0 flex justify-center items-center text-center 
  `
  
  const labelClasses =`
    Label Class
    ${text === 'orange' ? 'text-brand-orange' : text === 'blue' ? 'text-brand-blue' : 'text-brand-camel'}
    [backface-visibility:visible] 
  `

  return (
    <div className="group h-full w-full [perspective:1000px] flex flex-col justify-center items-center" onClick={handleClick}>
      <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className={cardClasses}>
          <div>
            <h3 className={labelClasses}>
              {label}
            </h3>
          </div>
        </div>
        <div className="absolute inset-0 h-full w-full px-2 text-center bg-brand-cream text-brand-blue [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="flex min-h-full flex-col items-center justify-center">
            <img className="w-[500px]" src={laptopImage} alt="laptop" />
          </div>
        </div>
      </div>
    </div>
  );
}
