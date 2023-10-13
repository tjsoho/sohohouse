import Icon from "../Icons/Icon";
import MenuBar from "../Menu/MenuBar";
import LandingHome from "../Pages/Landing/LandingHome";
import Square from "../Square";

export default function Styleguide() {
  return (
    <main className="main">
      <div className="container mx-auto px-5">
        <div className="row px-5 -mx-5">
          <div className="w-full bg-brand-cream py-10">
            <div>
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
            <LandingHome />
          </div>
        </div>
      </div>
    </main>
  );
}
