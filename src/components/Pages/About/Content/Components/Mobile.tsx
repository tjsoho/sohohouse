interface ComponentProps {
  title: string;
  para1: string;
  para2: string;
  image: JSX.Element;
  lineColour: string;
}
// You were trying to pass lineColour into this component but it was not on your interface.... I have a slight feeling you were getting confused with your Tablet.tsx component and thought that the props on that component were the ones going into this one... So in this component you actually arn't using lineColour.
function Mobile({ title, para1, para2, image, lineColour }: ComponentProps) {
  return (
    <div className="py-24">
      <div className="px-8">
        <div>
          <h4 className="uppercase text-[42px] font-Black text-brand-blue leading-none">
            {title}
          </h4>
          <div className="bg-brand-orange self-center w-[72px] md:w-[116px] shrink-0 h-[6px] my-8" />
        </div>
        <div>
          <p className="pb-4 text-Raleway text-brand-blue">{para1}</p>
        </div>
      </div>
      <div>{image}</div>
      <div>
        <div className="px-8">
          <p className="pb-4 text-Raleway text-brand-blue">{para2}</p>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
