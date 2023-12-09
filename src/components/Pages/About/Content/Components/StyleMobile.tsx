import { ReactNode } from "react";

interface Mobile1Props {
  title: string;
  para1: ReactNode;
  para2: ReactNode;
  image: JSX.Element;
  lineColour: string;
}

function StylesMobile({
  title,
  para1,
  para2,
  image,
  lineColour,
}: Mobile1Props) {
  return (
    <div className="py-24">
      <div className="px-8">
        <div>
          <h4 className="uppercase text-[42px] font-Black text-brand-orange leading-none">
            {title}
          </h4>
          <div className={lineColour} />
        </div>
        <div>{para1}</div>
      </div>
      <div>{image}</div>
      <div>
        <div className="px-8">{para2}</div>
      </div>
    </div>
  );
}

export default StylesMobile;
