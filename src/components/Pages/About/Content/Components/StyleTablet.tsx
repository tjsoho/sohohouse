import { ReactNode } from "react";

interface ComponentProps {
  title: string;
  para1: ReactNode;
  para2: ReactNode;
  image: JSX.Element;
  lineColour?: string;
}

function StyleTablet({
  title,
  para1,
  para2,
  image,
  lineColour,
}: ComponentProps) {
  const paraClass = `Paragraph Classes
    px-4 lg:px-8
    text-brand-orange text-justify
    `;

  return (
    <div className="py-24">
      <div className="px-8">
        <div className="px-4 lg:px-8">
          <h4 className="uppercase text-[42px] md:text-6xl lg:text-8xl font-Black text-brand-orange leading-none">
            {title}
          </h4>
          <div className={lineColour} />
        </div>
        <div className="flex flex-row top-0 left-0">
          {para1}
          {para2}
        </div>
      </div>
      <div>{image}</div>
    </div>
  );
}

export default StyleTablet;
