import React from "react";
import Button1 from "../../../Button/Button1";
import { Link } from "react-router-dom";

function Adventure() {
  const headerClass =
    "text-center text-brand-blue text-[36px] md:text-[50px] lg:text-[50px]";
  const divClass =
    "w-full h-full lg:w-1/2 flex flex-col justify-center items-center py-8 lg:py-16";

  return (
    <div className="w-full h-full bg-brand-orange">
      <div className="w-full h-full white rounded-tl-[75px] md:rounded-tl-[150px] bg-white ">
        <div className="max-w-[1440px] mx-auto">
          <div className="h-full w-full  flex flex-col lg:flex-row py-8 lg:py-16">
            {/* left col */}
            <div className={divClass}>
              <h3 className={headerClass}>Ai Consulting</h3>
              <Link to="/ai-solutions">
                <div className="w-full">
                  <img
                    src="/images/aiOffering4.png"
                    alt="placeholder"
                    className="transform scale-[100%] hover:scale-100 ease-in-out duration-200 w-full h-full object-cover -ml-6 xl:-ml-10 xl:mt-12"
                  />
                </div>
              </Link>
              <Link to="/ai-solutions">
                <Button1 label="DISCOVER" />
              </Link>
            </div>

            {/* right col */}
            <div className={divClass}>
              <h3 className={headerClass}>Web Sites</h3>
              <Link to="/websites">
                <img
                  src="../../../../images/mockDesk1.png"
                  alt="placeholder"
                  className="transform scale-[85%] hover:scale-100 ease-in-out duration-200"
                />
              </Link>
              <Link to="/websites">
                <Button1 label="DISCOVER" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adventure;
