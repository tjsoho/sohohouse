import { Link } from "react-router-dom";
import { Accordion } from "../../../Accordion/Accordion";
import Button1 from "../../../Button/Button1";
import accordionData from "./accordionData";
import { Reveal } from "../../../Animations/Reveal";


export default function Framework() {
  return (
    <div className="max-w-[1440px] mx-auto">
    {/* // 1 Col of 3 rows */}
    <div className="flex flex-col justify-between py-16 items-center h-auto bg-brand-blue">
      {/* Row 1 */}
      <div className="flex flex-col w-full">
        <div className="flex justify-center md:justify-start items-center mb-2 px-4 md:px-24 lg:px-48 xl:px-72 1xl:px-[350px] 2xl:px-[350px]">
         <Reveal>
          <h3 className="text-center text-[40px] md:text-[70px] leading-none text-brand-cream">
            Bringing Your
          </h3>
          </Reveal>
        </div>
        <div className="flex justify-center md:justify-end items-center w-full px-4 md:px-24 lg:px-48 xl:px-72 1xl:px-[350px] 2xl:px-[350px]">
          <Reveal>
          <h3 className="text-center text-[40px] md:text-[70px] leading-none text-brand-cream ">
            Story To Life
          </h3>
          </Reveal>
        </div>
        <div className="flex  justify-center md:justify-end items-center w-full mt-2">
          <Reveal>
          <p className="text-center text-[18px] md:text-[26px] leading-1 tracking-widest text-brand-orange uppercase md:pr-24 lg:pr-44 xl:pr-[280px] 2xl:pr-[340px] ">
            Our step-by-step framework
          </p>
          </Reveal>
        </div>
      </div>

      {/* Row 2 */}
      
      <div className="flex w-full my-16 px-0 lg:px-0">
        <div className="flex flex-col justify-center items-center w-full">
          {accordionData.map((item, index) => (
            <Accordion key={index} title={item.title} content={item.content} />
          ))}
        </div>
      </div>

      {/* Row 3 */}
      <div className="flex w-full">
        <div className="flex flex-col justify-center items-center w-full">
        <Link to="/contactform">
        <Button1 label="SHARE YOUR STORY"  icon="arrowRight" />
        </Link>
        </div>
      </div>
    </div>
    </div>
  );
}
