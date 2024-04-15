import { Reveal } from "../../../Animations/Reveal";
import { Link } from "react-router-dom";
import { SlideReveal } from "../../../Animations/SlideReveal";
import Button1 from "../../../Button/Button1";

function Companion() {
  return (
    <div className="w-full h-full bg-white lg:pr-2">
      <div className="w-full h-full white rounded-bl-[75px] md:rounded-bl-[0px] md:rounded-br-[150px]  md:rounded-tr-[150px] bg-brand-blue-light">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-around items-center py-16 lg:py-32">
            <div className="flex flex-col justify-center items-center h-full w-full lg:w-1/2">
              <SlideReveal>
                <div className="w-full h-auto lg:w-full xl:w-full">
                  <Link to="/aihub">
                    {" "}
                    {/* Wrap the image with Link and specify the target route */}
                    <img
                      src="./images/aiHubGold1.png"
                      alt="The Ai Guy"
                      className="w-full h-full object-contain transform scale-110 hover:scale-125 transition-transform duration-200 ease-in-out"
                      // Added transform utilities for scaling on hover and smooth transition
                    />
                  </Link>
                </div>
              </SlideReveal>
            </div>
            <div className="flex flex-col justify-center items-center h-full w-full lg:w-1/2 lg:order-2">
              <Reveal>
                <div>
                  <h3 className="text-brand-orange-light text-[36px] md:text-[50px] lg:text-[50px] text-center leading-none">
                    Introducing
                  </h3>

                  <h3 className="text-brand-orange-light text-[36px] md:text-[50px] lg:text-[50px] text-center leading-none">
                    The Ai HUB
                  </h3>
                </div>
              </Reveal>
              <div className="text-justify text-brand-cream px-8 lg:px-16 pt-4 ">
                <p className="text-[18px] md:text-[20px]">
                  Boost Your Business, Minimize Expenses, and Reclaim Countless
                  Hours in One Bold Move.
                  <br />
                  <br />
                  The Ai HUB super charges your business, from innovative
                  marketing to strategic planning, making it easier for you to
                  scale and grow.
                </p>
              </div>
              <Link to="/aihub">
                <Button1
                  label="TELL ME MORE"
                  className="text-brand-blue my-8"
                  color="light"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Companion;
