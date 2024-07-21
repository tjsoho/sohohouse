import { Link } from "react-router-dom";
import { SlideReveal } from "../../../Animations/SlideReveal";
import { Reveal } from "../../../Animations/Reveal";
import Button1 from "../../../Button/Button1";
import { SlideReveal2 } from "../../../Animations/SlideReveal2";

function MusicToDigital() {
  const titleClasses = `
    text-brand-blue
    text-[36px] md:text-[50px] lg:text-[50px] leading-none
    text-center
  `;

  return (
    <div className="h-full lg:h-contain bg-#FFFFFF flex flex-col md:flex-row">
      {/* Left Column: Heading, Orange Line, Paragraph */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center max-w-[1440px] mx-auto">
        {/* Heading */}
        <Reveal>
          <div className=" pt-16">
            <h3 className={titleClasses}>Music World</h3>
            <h3 className="flex justify-center text-[24px] text-brand-blue-light font">
              To The
            </h3>

            <h3 className={titleClasses}>Digital World</h3>
          </div>
        </Reveal>
        {/* Orange Line */}
        <div className="mt-8 mb-12">
          <div className="bg-brand-orange self-center w-[58px] md:w-[116px] shrink-0 h-[6px]" />
        </div>

        {/* Paragraph */}
        <div className="px-4 tracking-wider pb-16">
          <SlideReveal>
            <p className="text-[18px] text-justify lg:px-16 mb-8 ">
            Hey there! I'm Toby J. Creativity has been my lifelong calling. I was pretty much born with an instrument in my hand—violin, guitar, piano, saxophone... you name it.<br></br><br></br> Travelling the world as a musician, I've soaked up inspiration from the energetic vibes of places like Soho in New York, London, and Hong Kong. These cultural hotspots have continuously fuelled my desire to create and innovate.<br></br><br></br>

Tapping into the energy of these cities, I've transitioned my storytelling from music to web design. Crafting beautifully designed, high-converting websites. It's all about capturing your story and showcasing it in the most visually compelling way possible.<br></br><br></br>

With a keen eye for detail, a passion for aesthetics, and a love for learning people's stories, I bring a unique, artful touch to every project, ensuring your digital presence isn't just a website but an experience. <br></br><br></br>I put you and your business in the spotlight, centre stage.
            </p>
          </SlideReveal>
          {/* <div className="flex justify-center ">
            <Link to="/about">
              
            <Button1 label="MY STORY" className="text-brand-blue" />
            </Link>
          </div> */}
        </div>
      </div>

     
      <div className="w-full h-screen lg:w-1/2 flex flex-col items-center justify-center">
        {/* Parent div with background image */}
        <SlideReveal2>
          <div className="w-full h-screen lg:w-full xl:w-full">
            <Link to="/your-target-route">
              {" "}
              {/* Wrap the image with Link and specify the target route */}
              <img
                src="./images/tobyHomePage.jpg"
                alt="The Ai Guy"
                className="w-full h-full object-cover "
                // Adjusted scale for normal and hover states
              />
            </Link>
          </div>
        </SlideReveal2>
      </div>
    </div>
  );
}

export default MusicToDigital;
