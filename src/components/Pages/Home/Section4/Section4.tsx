import Orange from "./Orange";
import Tan from "./Tan";

function Section5() {
  return (
    <div className="flex flex-col lg:flex-row w-full">
      <div className="w-full lg:w-1/2 h-screen">
        <Tan />
      </div>
      <div className="w-full lg:w-1/2 h-screen">
        <Orange />
      </div>
    </div>
  );
}

export default Section5;
