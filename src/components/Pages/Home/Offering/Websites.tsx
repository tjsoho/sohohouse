import { Reveal } from "../../../Animations/Reveal";
import { Link } from "react-router-dom";
import { SlideReveal2 } from "../../../Animations/SlideReveal2";
import Button1 from "../../../Button/Button1";

function Websites() {
  return (
    <div className="w-full h-full bg-white lg:pl-2">
      <div className="w-full h-full white rounded-tl-[75px] md:rounded-tl-[150px] rounded-bl-[75px] md:rounded-bl-[150px] bg-brand-orange-light">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-around items-center py-16 lg:py-32">
            <div className="flex flex-col justify-center items-center h-full w-full lg:w-1/2">
              <Reveal>
                <div>
                  <h3 className="text-brand-blue text-[36px] md:text-[50px] lg:text-[50px] text-center leading-none">
                    A Website That
                  </h3>
                  <h3 className="text-brand-blue text-[36px] md:text-[50px] lg:text-[50px] text-center leading-none my-2 lg:my-4">
                    Oozes 'Wow Factor'
                  </h3>
                  {/* <h3 className="text-brand-blue text-[36px] md:text-[50px] lg:text-[50px] text-center leading-none">
             
            </h3> */}
                </div>
              </Reveal>
              <div className=" text-#24438C px-8 lg:px-16 pt-4 flex flex-col justify-center items-center w-full">
                <p className="text-brand-blue-light text-justify">
                  A website crafted to narrate your story as it truly deserves,
                  paired with a design that makes you frickin' proud – all
                  delivered to your digital doorstep in just 2 weeks.
                </p>
                <Link to="/websites">
                  <Button1
                    label="TELL ME MORE"
                    className="text-brand-orange-light my-8"
                    color="blue"
                  />
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center h-full  order-2 mt-16 lg:mt-0 w-full lg:w-1/2">
              <SlideReveal2>
                <div className="w-full h-auto  lg:w-full xl:w-full p-8 ">
                  <Link to="/websites">
                    {" "}
                    {/* Wrap the image with Link and specify the target route */}
                    <img
                      src="./images/websitesMock.png"
                      alt="The Ai Guy"
                      className="w-full h-full object-contain transform hover:scale-[115%] transition-transform duration-200 ease-in-out"
                      // Added transform utilities for scaling on hover and smooth transition
                    />
                  </Link>
                </div>
              </SlideReveal2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Websites;
