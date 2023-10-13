import laptopImage from './Images/1.png';

interface SquareProps {
  label: string;
  onClick?: () => void;
  link?: string;
  image?: string;
}

export default function Square({ label, onClick, link, image }: SquareProps) {
    return (
      <div className="group h-full w-full [perspective:1000px] flex flex-col justify-center items-center">
        <div className="relative h-full w-full shadow-xl shadow-black/40 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0 flex bg-brand-orange flex-col justify-center items-center text-center">
            <div>
              <h3 className="[backface-visibility:visible]  text-brand-blue">{label}</h3>
              
            </div>
          </div>
          <div className="absolute inset-0 h-full w-full px-2 text-center bg-brand-black text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <div className="flex min-h-full flex-col items-center justify-center">
              <img className='w-[500px]' src={laptopImage} alt="laptop" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  