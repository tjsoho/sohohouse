import { SlideReveal } from "../../../Animations/SlideReveal";
import Button1 from "../../../Button/Button1";
import phone from "../images/aiPhone.png"

function Voice() {
  return (
    <div className="max-w-[1440px] mx-auto h-full">
    <div className="h-full bg-brand-blue-light flex flex-col lg:flex-row py-16 md:py-32 lg:py-16 px-4 md:p-8 ">
      <div className="h-2/5 lg:h-full w-full lg:w-1/2 flex flex-col justify-center items-center text-left md:text-center mb-16 lg:pr-16">
       <img src={phone} alt="The Ai Guy" />
      </div>

      <div className=" h-3/5 lg:h-full w-full lg:w-1/2 flex flex-col justify-center items-start">
      <SlideReveal>
      <p className="text-brand-cream text-[22px] md:text-[26px] text-left font-semibold px-4">The Ai HUB</p>
      </SlideReveal>
        <SlideReveal>
        <p className="text-brand-orange-light px-4 text-[18px] md:text-[20px] text-justify">
        This isn't your run-of-the-mill, off-the-shelf platform. It’s the secret weapon you’ve been looking for, designed to take your business to new heights.<br /><br /> The Ai HUB's innovation lies deeply within it's personalised approach which is what truly sets it apart. While proudly hosting a number of members, each one enjoys a distinct experience through a unique sign-in portal.<br /><br /> Meticulously customised to fit the specific nuances of your business, your brand voice, your target customers, and your overarching business goals. <br /><br />
        It’s like having your own personal think tank, ensuring your business not only runs but sprints towards its goals. Putting time and dollars back into your pocket! 
        </p>
        </SlideReveal>
        <div className="flex items-start w-full px-4 my-8">
        <Button1 label="ENQUIRE NOW" color="orange" className="text-brand-cream hover:text-brand-blue" />
        </div>
        
      </div>
    </div>
    </div>
  );
}

export default Voice;
