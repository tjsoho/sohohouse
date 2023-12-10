
import ResponsiveBackground from './ResponsiveBackground'; // import the new component
import { SlideReveal } from "../../../Animations/SlideReveal";

function Hero() {
  return (
    <div className="bg-brand-blue h-full w-full">
      <ResponsiveBackground>
        {/* Overlay */}
        <div className="absolute inset-0 ">
          {/* Content */}
          <div className="flex justify-center items-center h-full">
            <SlideReveal>
          <h1 className="text-brand-orange font-bold text-8xl lg:text-9xl m-4 text-center">SoHo Story</h1>
          </SlideReveal>
          </div>
        </div>
      </ResponsiveBackground>
    </div>
  );
}

export default Hero;
