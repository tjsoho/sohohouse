
import { SlideReveal } from "../../../Animations/SlideReveal";

function Start() {
  return (
    <div className="row px-5 -mx-5">
      <div className="row px-5 -mx-5">

        <div className="flex justify-center items-center h-full w-full">
          <SlideReveal>
          <p className="text-brand-blue text-4xl md:text-5xl leading-none font-Raleway">
            Ready to Share <br /> Your Story?
          </p>
          </SlideReveal>
        </div>
      </div>
    </div>
  );
}

export default Start;
