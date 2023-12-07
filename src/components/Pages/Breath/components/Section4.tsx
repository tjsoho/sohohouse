import { BreathColours } from "../constants/BreathColours";
import Square from "./section4/Square";
import letter from "../assets/images/letter.svg";
import logo from "../assets/images/logo.svg";

function Section4() {
  return (
    <div className="w-full h-screen flex flex-col wrap lg:p-8" style={{ backgroundColor: BreathColours.SOFT_BROWN}}>
      <div className="flex w-full h-1/3">
        <div className="w-1/2 h-full">
          <Square
            colour={BreathColours.SOFT_TAN}
            text=""
            label=""
            image={letter}
            code1=""
            code2=""
          />
        </div>
        <div className="w-1/2 h-full">
          <Square
            colour={BreathColours.SOFT_LIGHT}
            text=""
            label=""
            image=""
            code1=""
            code2="#D9CEB5"
          />
        </div>
      </div>
      <div className="flex w-full h-1/3">
        <div className="w-1/2 h-full">
          <Square
            colour={BreathColours.SOFT_DARK}
            text=""
            label="Design System"
            image=""
            code1=""
            code2=""
          />
        </div>
        <div className="w-1/2 h-full">
          <Square
            colour={BreathColours.SOFT_BROWN}
            text="Reflecting the earthy natural colours of the wooded wilderness"
            label=""
            image=""
            code1=""
            code2=""
          />
        </div>
      </div>
      <div className="flex w-full h-1/3">
        <div className="w-1/2 h-full">
          <Square
            colour={BreathColours.SOFT_CREAM}
            text=""
            label=""
            image=""
            code1="#D9CEB5"
            code2=""
          />
        </div>
        <div className="w-1/2 h-full">
          <Square
            colour={BreathColours.SOFT_GOLD}
            text=""
            label=""
            image={logo}
            code1=""
            code2=""
          />
        </div>
      </div>
    </div>
  );
}

export default Section4;
