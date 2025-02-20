import { useEffect, useState } from "react";
import { Reveal } from "../../../Animations/Reveal";

function Platform() {
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMediumScreen(window.innerWidth < 768); // 640px is Tailwind's 'sm' breakpoint
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="bg-brand-orange w-full h-full py-12 md:py-16 lg:py-20 ">
      <div className="max-w-[1440px] mx-auto">
      <div className="w-contain">
        <Reveal>
        <h3 className="uppercase font-Black text-brand-cream leading-none text-center text-[36px] lg:text-6xl xl:text-7xl  ">
         Your  {isMediumScreen && <br />}Tailored  {isMediumScreen && <br />}{" "}
         Ai Solution
        </h3>
        </Reveal>
      </div>
      <div>
        <p className="uppercase text-brand-blue italic text-center text-2xl md:text-3xl lg:text-5xl lg:text-end md:pr-[10px] lg:pr-[130px] xl:pr-[150px] 2xl:pr-[160px] mt-8 md:mt-0 leading-none font-medium lg:font-normal">
          Like No Other
        </p>
        <div className="flex justify-center md:hidden">
          <div className="bg-brand-cream self-center w-[72px] md:w-[116px] shrink-0 h-[4px] mt-8"></div>
        </div>
        </div>
      </div>
  
    </div>
  );
}

export default Platform;
