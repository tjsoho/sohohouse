import { Button } from "@mui/material";
import { Accordion } from "../../../Accordion/Accordion";
import accordionData from "./accordionData";

export default function Section3() {
  return (
    // 1 Col of 3 rows
    <div className="flex flex-col justify-between py-16 items-center h-auto w-screen bg-brand-blue">
      {/* Row 1 */}
      <div className="flex flex-col w-full">
        <div className="flex  justify-center items-start">
          <h3 className="text-center text-[70px] leading-none text-brand-cream mr-[20rem]">
            Bringing Your
          </h3>
        </div>
        <div className="flex  justify-center items-start w-full">
          <h3 className="text-center text-[70px] leading-none text-brand-cream ml-[20rem]">
            Stroy To Life
          </h3>
        </div>
        <div className="flex  justify-center items-start w-full">
          <p className="text-center text-[26px] leading-1 tracking-widest text-brand-orange uppercase ml-[21rem]">
            Our step-by-step framework
          </p>
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex w-full my-16">
        <div className="flex flex-col justify-center items-center w-full">
          {accordionData.map((item, index) => (
            <Accordion key={index} title={item.title} content={item.content} />
          ))}
        </div>
      </div>

      {/* Row 3 */}
      <div className="flex w-full">
        <div className="flex flex-col justify-center items-center w-full">
          <Button>START YOUR JOURNEY</Button>
        </div>
      </div>
    </div>
  );
}
