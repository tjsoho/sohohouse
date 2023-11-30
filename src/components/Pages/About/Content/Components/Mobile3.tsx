interface Mobile3Props {
    title: string;
    para1: string;
    para2: string;
    image: JSX.Element;
    lineColour: string;
  }
  
  function Mobile3({ title, para1, para2, image, lineColour,  }: Mobile3Props) {
    return (
      <div className="py-24">
        <div className="px-8">
          <div>
            <h4 className="uppercase text-[42px] font-Black text-brand-blue leading-none">
              {title}
            </h4>
            <div className={lineColour} />
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
  
  export default Mobile3;
  