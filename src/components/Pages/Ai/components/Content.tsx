import React from 'react';

interface ContentProps {
  number: number;
  title: string;
  content: string;
}

const Content: React.FC<ContentProps> = ({ number, title, content }) => {
  return (
    <div className="flex flex-col">

      <p className="text-brand-cream text-3xl">{number}</p>

      <div className="w-full h-[3px] flex justify-center  bg-brand-cream"></div>

      <p className="text-left text-[26px] md:text-[32px] font-bold mb-8 mt-4 text-brand-cream">
        {title}
      </p>

        <p className="text-left text-[18px] md:text-[21px] leading-1 tracking-widest text-brand-cream mb-12 font-light">
            {content}
        </p>
    </div>
  );
};

export default Content;
