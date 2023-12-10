import { Link } from "react-router-dom";
import { Reveal } from "../../../Animations/Reveal";

function Process() {
  return (
    <div className="row px-5 -mx-5">
      <div className="row px-5 -mx-5">
        <div className="flex-col justify-center items-center h-full w-full">
          <Reveal>
          <p className="text-brand-blue text-xl leading-none font-Raleway font-extralight">
            Discover Our
          </p>
          </Reveal>
          {/* Update this Link */}
          <Link to="/#framework">
          <Reveal>
            <p className="text-brand-blue text-2xl leading-none font-Raleway font-normal underline">
              Framework
            </p>
          </Reveal>
          </Link>
        </div>
      </div>
    </div>
  );
}


export default Process;
