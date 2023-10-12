import Square from "../Square";

export default function Styleguide() {
  return (
    <main className="main">
      <div className="container mx-auto px-5">
        <div className="row px-5 -mx-5"></div>
        <div className="row px-5 -mx-5">
          <div className="w-full">
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

            <Square label="Rosie & Laurent" />
          </div>
        </div>
      </div>
    </main>
  );
}
