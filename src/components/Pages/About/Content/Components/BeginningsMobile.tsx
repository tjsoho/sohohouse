import { ReactNode } from "react";

import { SlideReveal } from "../../../../Animations/SlideReveal";

interface ComponentProps {
  title: string;
  para1: ReactNode;
  para2: ReactNode;
  image: JSX.Element;
  lineColour: string;
}

function BeginningsMobile({
  title,
  para1,
  para2,
  image,
  lineColour,
}: ComponentProps) {
  return (
    <div className="py-16">
      <div className="px-8">
        <div>
     
          <h4 className="uppercase text-[42px] font-Black text-brand-blue leading-none">
            {title}
          </h4>
        
          <div className={lineColour} />
        </div>
        <SlideReveal>
          <div>{para1}</div>
        </SlideReveal>
      </div>
      <div>{image}</div>
      <div>
        <SlideReveal>
        <div className="px-8">{para2}</div>
        </SlideReveal>
      </div>
    </div>
  );
}

export default BeginningsMobile;
