
import valueContent from "./Components/Data";
import SquareValue from "./Components/SquareValue";

function Values() {
  return (
    <div className="w-screen h-screen bg-brand-cream flex flex-col">
      <div>
        <h3 className="text-brand-blue">Our Values</h3>
      </div>
      <div className="flex w-full">
        <SquareValue 
        title="Efficiency"
        titleColour="text-brand-cream"
        bgColour="bg-brand-camel"
        icon="arrowSmall"
        content={valueContent.efficiency}
        />
      </div>
    </div>
  );
}

export default Values;
