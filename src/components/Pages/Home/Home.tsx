import Contact from "../Contact/Contact";
import Section1 from "./Section1/Section1";
import Craft from "./Craft/Craft";
import Websites from "./Offering/Websites";
import Companion from "./Offering/Companion";
import Stories from "./Stories/Stories";
import MusicToDigital from "./YourBrand/MusicToDigital";
import Testimonials from "./Testimonials/Testimonials";
import Adventure from "./Adventure/Adventure";

function Home() {
  return (
    <div className="">
      <Section1 />
      {/* <PlaceHolder /> */}
      <Craft />

      <div className="w-full bg-brand-camel">
        <Companion />
      </div>
      <Websites />
      <div className="flex h-full justify-center items-center">
        <MusicToDigital />
      </div>
      <div className="flex h-full justify-center items-center">
        <Testimonials />
      </div>
     
      <div className="bg-brand-orange">
        <Stories />
      </div>
      
 
      <div className="w-screen h-contain lg:screen">
        <Adventure />
      </div>
      {/* <div className="bg-brand-blue">
        <Section4 />
      </div> */}
      <div className="bg-brand-cream h-contain">
        <Contact />
      </div>
    </div>
  );
}

export default Home;
