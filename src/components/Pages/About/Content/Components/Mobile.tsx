

interface ComponentProps {
  title: string;
  para1: string;
  para2: string;
  image: JSX.Element;
}

function Mobile({ title, para1, para2, image }: ComponentProps) {
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
      <div>
        {image}
      </div>
      <div>
        <div className="px-8">
          <p className="pb-4 text-Raleway text-brand-blue">{para2}</p>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
