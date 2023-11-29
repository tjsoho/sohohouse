import HeaderImage from "../assets/images/chevell1.jpg";
import { ChevellColors } from "../constants/ChevellColors";
import ChevellText from "./core/ChevellText";

const ChevellHeader = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${HeaderImage})`,
        backgroundPositionX: "73%",
        backgroundPositionY: "30%",
      }}
      className="bg-cover h-[100vh]"
    >
      <div className="ml-[10%] pt-[16%]">
        <ChevellText type="h1" color={ChevellColors.SOFT_BLACK}>
          CHEVELL
        </ChevellText>
        <ChevellText type="sub1" color={ChevellColors.SOFT_BLACK}>
          Effortless, Editorial, Wedding Photography
        </ChevellText>
      </div>
    </div>
  );
};

export default ChevellHeader;
