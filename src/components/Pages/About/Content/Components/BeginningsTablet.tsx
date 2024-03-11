import { ReactNode } from "react";
import { SlideReveal } from "../../../../Animations/SlideReveal";

interface ComponentProps {
  title: string;
  para1: ReactNode;
  para2: ReactNode;
  image: JSX.Element;
  lineColour?: string;
}

function BeginningsTablet({
  title,
  para1,
  para2,
  image,
  lineColour,
}: ComponentProps) {
  return (
    <div className="py-24 flex flex-col justify-between">
      <div className="px-8">
        <div className="px-4 lg:px-8">
          <h4 className="uppercase text-[42px] md:text-6xl lg:text-8xl font-Black text-brand-orange-light leading-none">
            {title}
          </h4>
          <div className={lineColour} />
        </div>
        <SlideReveal>
        <div className="flex flex-row top-0 left-0 lg:px-8">
          {para1}
          {para2}
        </div>
        </SlideReveal>
      </div>
      <div className="lg:pt-16">{image}</div>
    </div>
  );
}

export default BeginningsTablet;
