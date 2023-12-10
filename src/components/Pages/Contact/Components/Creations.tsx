import { Link } from "react-router-dom";

function Creations() {
  return (
    <div className="row px-5 -mx-5">
    <div className="row px-5 -mx-5">
      <div className="flex-col justify-center items-center h-full w-full">
        <p className="text-brand-blue text-xl leading-none font-Raleway font-extralight ">
          Explore Our
        </p>
        <Link to="/creations">
        <p className="text-brand-blue text-2xl leading-none font-Raleway font-normal underline">
          Creations
        </p>
        </Link>
      </div>
    </div>
  </div>
  );
}

export default Creations;
