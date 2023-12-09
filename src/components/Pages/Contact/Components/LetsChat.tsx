import React from "react";
import { Link } from "react-router-dom";

function LetsChat() {
  return (
    <div className="row px-5 -mx-5">
      <div className="row px-5 -mx-5">
        <div className="flex justify-center items-center h-full w-full">
          <Link to="/contactform">
          <p className="text-brand-blue text-4xl md:text-6xl leading-none font-Black underline md:my-16 text-left">
            Let's Chat!
          </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LetsChat;
