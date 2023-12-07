
import { useEffect, useState } from "react";
import Button from "../../../Button/Button";


export default function Orange() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640); // 768px is Tailwind's 'md' breakpoint
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="bg-brand-orange mx-auto px-5 h-full flex items-center justify-center">
      <div className="row px-5 -mx-5">
        <div className="row px-5 -mx-5">
          <div className="gap-5 flex flex-col items-stretch">
            <div className="flex flex-col items-stretch w-full">
              <div className="justify-center items-center flex flex-col">
                <h3 className="text-brand-blue text-5xl text-center ">
                  Become an Ai Master
                </h3>
                <p className="text-brand-cream text-[22px] mb-16 md:mb-8 px-4 text-center ">
                  Your Ai Journey Starts Here: {isSmallScreen && <br />}Tips and
                  Expert Guides
                </p>
                <Button label="Become an Ai Master" />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
