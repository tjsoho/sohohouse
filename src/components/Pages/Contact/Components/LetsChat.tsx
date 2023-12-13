
import { Link } from "react-router-dom";
import { SlideReveal } from "../../../Animations/SlideReveal";

function LetsChat() {
  return (
    <div className="row px-5 -mx-5">
      <div className="row px-5 -mx-5">
        <div className="flex justify-center items-center h-full w-full">
          <Link to="/contactform">
          <SlideReveal>
          <p className="text-brand-blue text-4xl md:text-6xl leading-none font-Black underline md:my-16 text-left">
            Let's Chat!
          </p>
          </SlideReveal>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LetsChat;
