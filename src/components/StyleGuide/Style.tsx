import { Accordion } from "../Accordion/Accordion";
import Icon from "../Icons/Icon";
import MenuBar from "../Menu/MenuBar";
import Landing from "../Pages/Home/Section1/Landing1";
import Section1 from "../Pages/Home/Section1/Section1";
import HouseAnimation from "../Pages/Home/Section2/houseAnimation";
import Section2 from "../Pages/Home/Section2/Section2";
import Section3 from "../Pages/Home/Section3/Section3";
import Square from "../Square";

export default function Styleguide() {
  return (
    <main className="main">
      <div>
        <div>
          <div>
            <div className="w-full bg-brand-cream py-10">
              <div>
                <div>
                  <Section1 />
                  <Section2 />
                  <Section3 />
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
              </div>
              <div className="w-96 h-96">
                <Square label="Rosie & Laurent" />
              </div>
              <Icon name="arrowDown" />
              <div className="w-full h-12 mb-2">
                <MenuBar />
              </div>
              <HouseAnimation />
              <Landing />
              <Accordion
                title="BEHIND CLOSED DOORS"
                content="We kick things off by getting cozy, diving deep to understand your brand, your vision, and what makes you tick."
              />
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
