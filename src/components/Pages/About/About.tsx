import Contact from "../Contact/Contact";

import Content from "./Content/BeginningsParagraphs";
import Content2 from "./Content/StyleParagraphs";
import Content3 from "./Content/PromiseParagraphs";
import Elevate from "./Elevate/Elevate";
import Hero from "./Hero/Hero";

import Values from "./Values/Values";

function About() {
  return (
    <div className="flex flex-col">
      <div className="h-screen">
        <Hero />
      </div>
      <div className=" h-contain bg-brand-camel">
        <Content />
      </div>
      <div className="h-contain">
        <Values />
      </div>
      <div className="bg-brand-orange h-contain">
        <Elevate />
      </div>
      <div className=" h-contain bg-brand-blue">
        <Content2 />
      </div>
      <div className=" h-contain bg-brand-camel">
        <Content3 />
      </div>
      <div className="bg-brand-cream h-contain">
      <Contact />
      </div>
    </div>
  );
}

export default About;
