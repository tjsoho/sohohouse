import { Link } from "react-router-dom";
import { Reveal } from "../../../Animations/Reveal";

function Process() {
  return (
    <div className="row px-5 -mx-5">
      <div className="row px-5 -mx-5">
        <div className="flex-col justify-center items-center h-full w-full">
          <Reveal>
          <p className="text-brand-blue text-[18px] leading-none font-Raleway font-extralight text-center">
            Learn About
          </p>
          </Reveal>
          {/* Update this Link */}
          <Link to="/ai-solutions">
          <Reveal>
            <p className="text-brand-blue text-1xl leading-none font-Raleway font-normal underline text-center">
              Ai Consulting
            </p>
          </Reveal>
          </Link>
        </div>
      </div>
    </div>
  );
}


export default Process;
