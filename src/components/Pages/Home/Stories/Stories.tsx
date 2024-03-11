import { useEffect, useState } from "react";

function Stories() {
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
    <div className="max-w-[1440px] mx-auto">
    <div className="bg-brand-orange w-full h-full py-16 lg:py-20">
      <div className="lg:w-contain">
        <h3 className="uppercase font-Black text-brand-cream leading-none text-center text-[36px] lg:text-7xl  ">
          What{isMediumScreen && <br />} Brings You {isMediumScreen && <br />}{" "}
          Here?
        </h3>
      </div>
      <div>
        <p className="uppercase text-brand-blue italic text-center text-2xl md:text-3xl lg:text-5xl lg:text-end  lg:pr-[126px] 1xl:pr-[240px] 2xl:pr-[240px] mt-8 md:mt-0 leading-none font-medium lg:font-normal">
          Choose Your Adventure
        </p>
        <div className="flex justify-center md:hidden">
          <div className="bg-brand-cream self-center w-[72px] md:w-[116px] shrink-0 h-[4px] mt-8"></div>
        </div>
      </div>
      <p className="hidden axl:block">TEST</p>
    </div>
    </div>
  );
}

export default Stories;
