import HeaderImage from "../assets/images/chevell1.jpg";
import { ChevellColors } from "../constants/ChevellColors";
import ChevellText from "./core/ChevellText";

const ChevellHeader = () => {
  return (
    <div
      style={{ backgroundImage: `url(${HeaderImage})` }}
      className="bg-cover bg-center h-[100vh]"
    >
      <ChevellText type="h1" color={ChevellColors.SOFT_BLACK}>
        CHEVELL
      </ChevellText>
    </div>
  );
};

export default ChevellHeader;
