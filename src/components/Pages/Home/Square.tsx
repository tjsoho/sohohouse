import { useNavigate } from "react-router-dom"; // Import useNavigate
import Icon from "../../Icons/Icon";

interface SquareProps {
  label: string;
  path?: string; // Optional path for navigation
  color?: string; // Optional color prop
  text?: string; // Optional text color prop
  image?: string; // Optional image prop
  iconColor?: string; // Optional icon color prop
}

export default function Square({
  label,
  image,
  path,
  iconColor,
  color = "orange", // Default color
  text = "blue", // Default text color
}: SquareProps) {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle click on the backside
  const handleBackClick = () => {
    if (path) {
      navigate(path); // Navigate to the specified path
    }
  };

  // Dynamic classes for the front side of the card
  const cardClasses = `
    Card Class
    ${
      color === "orange"
        ? "bg-brand-orange"
        : color === "blue"
        ? "bg-brand-blue"
        : color === 'cream'
        ? "bg-brand-cream"
        : "bg-brand-camel"
    }
    absolute inset-0 flex justify-center items-center text-center h-full flex-col absolute
  `;

  // Dynamic classes for the label
  const labelClasses = `
    Label Class
    text-[44px]
    ${
      text === "orange"
        ? "text-brand-orange"
        : text === "blue"
        ? "text-brand-blue"
        : text === "cream"
        ? "text-brand-cream"
        : "text-brand-camel"
    }
    [backface-visibility:visible] 
  `;

  return (
    <div
      className="group h-full w-full [perspective:1000px] flex flex-col justify-center items-center"
    >
      <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className={cardClasses}>
          {/* Front side content */}
          <div className="flex flex-col h-full justify-center items-center">
            <h3 className={labelClasses}>{label}</h3>
            <Icon className="w-[25px] lg:hidden" name="click" color={iconColor} />
          </div>
        </div>
        <div className="absolute inset-0 h-full w-full text-center bg-brand-cream text-brand-blue [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="flex min-h-full flex-col items-center justify-center">
            <h3
              style={{ cursor: "pointer" }}
              onClick={handleBackClick} // Click handler for backside
              className="absolute bottom-20 left-50 z-40 text-xl text-brand-blue bg-brand-cream hover:text-brand-camel py-3 px-3 leading-none active:text-brand-orange rounded-sm shadow-md"
            >
              Show Me
            </h3>
            <div className="w-full max-h-[380px]">
              <img className="object-contain w-full max-h-[380px]" src={image} alt={label} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
