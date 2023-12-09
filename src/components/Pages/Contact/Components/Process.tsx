import { Link } from "react-router-dom";

function Process() {
  return (
    <div className="row px-5 -mx-5">
      <div className="row px-5 -mx-5">
        <div className="flex-col justify-center items-center h-full w-full">
          <p className="text-brand-blue text-xl leading-none font-Raleway font-extralight ">
            Discover Our
          </p>
          <Link to="/framework">
          <p className="text-brand-blue text-2xl leading-none font-Raleway font-normal underline">
            Framework
          </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Process;
