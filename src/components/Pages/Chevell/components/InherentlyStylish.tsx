import { ChevellColors } from "../constants/ChevellColors";
import ChevellText from "./core/ChevellText";

const InherentlyStylish = () => {
  return (
    <div className={`bg-[${ChevellColors.CREAM_WHITE}] h-[100vh]`}>
      <div className="ml-[5%] pt-12">
        <ChevellText type={"h2"} color={ChevellColors.SOFT_BLACK}>
          Inherently Stylish
        </ChevellText>
        <ChevellText type={"sub1"} color={ChevellColors.SOFT_BLACK}>
          A hand-picked team of photographers and cinematographers bound by the
          inherent qualities and personalities that make Chevell an adored
          choice. We mirrored this spirit in our design, creating an inviting
          space where couples can explore Chevell's soulful and timeless
          photography.
        </ChevellText>
      </div>
    </div>
  );
};

export default InherentlyStylish;
