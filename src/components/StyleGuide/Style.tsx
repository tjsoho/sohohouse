import { Accordion } from "../Accordion/Accordion";
import Button1 from "../Button/Button1";
import Icon from "../Icons/Icon";
import MenuBar from "../Menu/MenuBar";
import MenuPage from "../Menu/MenuPage";
import Chevell from "../Pages/Chevell/Chevell";
import Landing from "../Pages/Home/Section1/Landing1";
import Section1 from "../Pages/Home/Section1/Section1";
import HouseAnimation from "../Pages/Home/Section2/houseAnimation";
import Section2a from "../Pages/Home/Section2/Section2a";
import Section3 from "../Pages/Home/Section3/Section3";
import Orange from "../Pages/Home/Section4/Orange";
import Tan from "../Pages/Home/Section4/Tan";
import Square from "../Pages/Home/Square";

export default function Styleguide() {
  return (
    <main className="main">
      <div>
        <div>
          <div>
            <div className="w-full">
              <div>
                <div>
                  
                </div>
                <div>
                  <Chevell />
                  <Section1 />
                  <Section2a />
                  <Section3 />
                </div>
                <div className="flex w-full">
                  <div className="w-1/3 h-96">
                    <Square label="Chevell" />
                  </div>
                  <div className="w-1/3 h-96">
                    <Square label="Loved Luxe" color="camel" />
                  </div>
                  <div className="w-1/3 h-96">
                    <Square label="Shadow" color="blue" text="orange" />
                  </div>
                </div>
                <div className="flex w-full">
                  <div className="w-1/3 h-96">
                    <Square label="Loved Luxe" color="camel" />
                  </div>
                  <div className="w-1/3 h-96">
                    <Square
                      label="Project Empower"
                      color="blue"
                      text="orange"
                    />
                  </div>
                  <div className="w-1/3 h-96">
                    <Square label="Breath" />
                  </div>
                </div>
                <h1 className="text-brand-orange heading">Soho House H1</h1>
                <h2 className="text-brand-orange heading">Soho House H2</h2>
                <h3 className="text-brand-orange heading">Soho House H3</h3>
                <h4 className="text-brand-orange heading">
                  Soho House H4=Figma Heading
                </h4>
                <h5 className="text-brand-orange heading">
                  Soho House H5=Figma Subheading
                </h5>
                <p className="text-brand-orange heading">
                  Soho House P=Figma Body1
                </p>
                <Button1 label="START YOUR JOURNEY" icon="arrowRight" />
              </div>
              <Icon name="arrowDown" />
              <div className="w-full h-12 mb-2">
           
              </div>
              <HouseAnimation />
              <Landing />
              <Accordion
                title="BEHIND CLOSED DOORS"
                content="We kick things off by getting cozy, diving deep to understand your brand, your vision, and what makes you tick."
              />
              <div className="flex flex-col lg:flex-row w-full">
                <div className="w-full lg:w-1/2 h-screen">
                  <Tan />
                </div>
                <div className="w-full lg:w-1/2 h-screen">
                  <Orange />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

{
  /* <div className="container mx-auto px-5">
<div className="row px-5 -mx-5">
<div className="row px-5 -mx-5">
  <div className="w-full bg-brand-cream py-10"> */
}
