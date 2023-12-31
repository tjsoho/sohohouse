import { Link } from "react-router-dom";
import { Reveal } from "../../../Animations/Reveal";

function Creations() {
  return (
    <div className="row px-5 -mx-5">
    <div className="row px-5 -mx-5">
      <div className="flex-col justify-center items-center h-full w-full">
       <Reveal>
        <p className="text-brand-blue text-xl leading-none font-Raleway font-extralight ">
          Explore Our
        </p>
        </Reveal>
        <Link to="/creations">
        <Reveal>
        <p className="text-brand-blue text-2xl leading-none font-Raleway font-normal underline">
          Creations
        </p>
        </Reveal>
        </Link>
      </div>
    </div>
  </div>
  );
}

export default Creations;
